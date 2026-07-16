// ══════════════════════════════════════════════════════════
// szenario-engine.js — Runner für Szenario-Missionen (Konzept §5)
//
// Zustandsautomat: Intro → Schritt 1..N (Entscheidung + Konsequenz) → Debrief.
// Akkumuliert je Dimension einen Punktestand; normalisiert am Ende auf 0..1
// (relativ zum je Mission bestmöglichen/schlechtesten Pfad) für Balken + Stufe.
//
// window.SzenarioEngine.run({ container, mission, onStep?, onComplete })
//   onStep(schritt, option)  → je getroffener Entscheidung (optional)
//   onComplete({ scorePct, dims, tierIndex, path })
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  const BEWERTUNG_CLASS = { gut: 'correct', mittel: 'info', schlecht: 'incorrect' };
  const BEWERTUNG_ICON = { gut: '✓', mittel: '≈', schlecht: '✗' };

  // Bestmöglicher / schlechtester Punktwert je Dimension über alle Schritte
  // (ein Schritt = eine Wahl, also max/min der Optionen je Schritt aufsummiert).
  function bounds(mission) {
    const max = {}, min = {};
    mission.dimensionen.forEach((d) => { max[d.key] = 0; min[d.key] = 0; });
    mission.schritte.forEach((s) => {
      mission.dimensionen.forEach((d) => {
        const vals = s.optionen.map((o) => o.punkte[d.key] || 0);
        max[d.key] += Math.max(...vals);
        min[d.key] += Math.min(...vals);
      });
    });
    return { max, min };
  }

  function run({ container, mission, onStep, onComplete }) {
    const { max, min } = bounds(mission);
    const score = {};
    mission.dimensionen.forEach((d) => { score[d.key] = 0; });
    const path = [];

    function intro() {
      container.innerHTML = '';
      container.appendChild(el(`<div class="hero"><h2>🎯 ${mission.title}</h2></div>`));
      const card = el('<div class="card card-hook"></div>');
      card.appendChild(el(`<div class="player-phase-label">Deine Rolle</div>`));
      card.appendChild(el(`<p>${mission.rolle}</p>`));
      container.appendChild(card);

      const legend = el('<div class="sz-legend"></div>');
      mission.dimensionen.forEach((d) => {
        legend.appendChild(el(`<span class="sz-legend-item">${d.icon} ${d.label}</span>`));
      });
      container.appendChild(legend);

      const btn = el(`<button class="btn-primary">Los geht’s — Entscheidung 1 von ${mission.schritte.length}</button>`);
      btn.addEventListener('click', () => step(0));
      container.appendChild(btn);
    }

    function step(i) {
      container.innerHTML = '';
      const s = mission.schritte[i];

      // Fortschrittsbalken (Segmente wie im Unit-Player)
      const prog = el('<div class="player-progress"></div>');
      mission.schritte.forEach((_, k) => {
        prog.appendChild(el(`<div class="player-progress-seg ${k <= i ? 'filled' : ''}"></div>`));
      });
      container.appendChild(prog);

      container.appendChild(el(`<div class="player-phase-label">Entscheidung ${i + 1} / ${mission.schritte.length} · ${s.titel}</div>`));

      const card = el('<div class="card"></div>');
      card.appendChild(el(`<p class="sz-situation">${s.situation}</p>`));
      card.appendChild(el(`<div class="question-text">${s.frage}</div>`));
      const list = el('<div class="option-list"></div>');
      card.appendChild(list);
      container.appendChild(card);

      let answered = false;
      s.optionen.forEach((opt) => {
        const btn = el(`<button class="option-btn" type="button">${opt.text}<div class="option-explain">${opt.wirkung}</div></button>`);
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          choose(i, s, opt, btn, list);
        });
        list.appendChild(btn);
      });
    }

    function choose(i, s, opt, btn, list) {
      // Punkte verbuchen
      mission.dimensionen.forEach((d) => { score[d.key] += (opt.punkte[d.key] || 0); });
      path.push({ schritt: s.id, wahl: opt.text, bewertung: opt.bewertung });
      if (onStep) onStep(s, opt);

      // gewählte Option hervorheben + Konsequenz aufdecken, andere abdunkeln
      const cls = BEWERTUNG_CLASS[opt.bewertung] || 'info';
      Array.from(list.children).forEach((b) => {
        b.disabled = true;
        if (b !== btn) b.classList.add('sz-dimmed');
      });
      btn.classList.add('revealed', cls === 'correct' ? 'correct' : (cls === 'incorrect' ? 'incorrect' : 'selected'));

      // Konsequenz-Banner unter der Karte
      const banner = el(`<div class="feedback-banner ${cls}">${BEWERTUNG_ICON[opt.bewertung] || '•'} Konsequenz</div>`);
      btn.closest('.card').appendChild(banner);

      const next = el(`<button class="btn-primary">${i + 1 < mission.schritte.length ? 'Weiter' : 'Auswertung ansehen'}</button>`);
      next.addEventListener('click', () => {
        if (i + 1 < mission.schritte.length) step(i + 1);
        else debrief();
      });
      container.appendChild(next);
      next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function normDim(key) {
      const span = max[key] - min[key];
      return span <= 0 ? 1 : (score[key] - min[key]) / span;
    }
    function overallPct() {
      const totMax = Object.values(max).reduce((a, b) => a + b, 0);
      const totMin = Object.values(min).reduce((a, b) => a + b, 0);
      const tot = mission.dimensionen.reduce((a, d) => a + score[d.key], 0);
      const span = totMax - totMin;
      return span <= 0 ? 1 : (tot - totMin) / span;
    }

    function debrief() {
      container.innerHTML = '';
      const pct = overallPct();
      const stufen = mission.debrief.stufen;
      let tierIndex = stufen.findIndex((s) => pct >= s.minPct);
      if (tierIndex < 0) tierIndex = stufen.length - 1;
      const tier = stufen[tierIndex];

      container.appendChild(el(`<div class="hero"><h2>${tier.titel}</h2><p>${tier.text}</p></div>`));

      // Dimensions-Balken
      const dimsCard = el('<div class="card"></div>');
      dimsCard.appendChild(el(`<div class="step-label">Deine Bilanz</div>`));
      const dims = {};
      mission.dimensionen.forEach((d) => {
        const p = Math.round(normDim(d.key) * 100);
        dims[d.key] = p;
        const weak = p < 30 ? ' sz-bar-weak' : (p >= 70 ? ' sz-bar-strong' : '');
        dimsCard.appendChild(el(`<div class="sz-dim-row">
          <div class="sz-dim-head"><span>${d.icon} ${d.label}</span><span>${p}%</span></div>
          <div class="module-progress-bar"><div class="module-progress-fill${weak}" style="width:${p}%"></div></div>
        </div>`));
      });
      container.appendChild(dimsCard);

      // Pfad-Rückblick
      const pathCard = el('<div class="card"></div>');
      pathCard.appendChild(el(`<div class="step-label">Dein Weg</div>`));
      mission.schritte.forEach((s, k) => {
        const p = path[k];
        const icon = BEWERTUNG_ICON[p.bewertung] || '•';
        const cls = BEWERTUNG_CLASS[p.bewertung] || 'info';
        pathCard.appendChild(el(`<div class="sz-path-row sz-path-${cls}"><span class="sz-path-icon">${icon}</span><span>${s.titel}</span></div>`));
      });
      container.appendChild(pathCard);

      const retry = el('<button class="btn-primary">Mission neu spielen</button>');
      retry.addEventListener('click', () => { mission.dimensionen.forEach((d) => { score[d.key] = 0; }); path.length = 0; intro(); });
      container.appendChild(retry);
      const done = el('<button class="btn-secondary">Zur Übersicht</button>');
      container.appendChild(done);
      done.addEventListener('click', () => onComplete({ scorePct: pct, dims, tierIndex, path: path.slice() }));
    }

    intro();
  }

  window.SzenarioEngine = { run };
})();
