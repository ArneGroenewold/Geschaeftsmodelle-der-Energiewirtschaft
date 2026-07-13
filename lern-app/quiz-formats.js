// ══════════════════════════════════════════════════════════
// quiz-formats.js — 5 Aufgabenformate: render(item, container, onGraded)
// + toLeitnerBoolean(item, result). Jedes Format zeigt IMMER Erklärungen
// (richtig UND falsch), nie nur richtig/falsch — siehe 07_LERNAPP_KONZEPT.md §4.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  const RK = () => window.RenderKit;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function normalize(s) {
    return (s || '').toString().trim().toLowerCase().replace(/[.,;:!?]+$/, '');
  }

  function submitButton(label) {
    return el(`<button class="btn-primary" disabled>${label || 'Prüfen'}</button>`);
  }

  // ── 1. Multiple Choice ─────────────────────────────────────────────
  function renderMC(item, container, onGraded) {
    const d = item.data;
    container.innerHTML = `<div class="question-text">${RK().highlightGlossary(d.frage)}</div><div class="option-list"></div>`;
    const list = container.querySelector('.option-list');
    const options = shuffle(d.optionen.map((o, i) => ({ ...o, _i: i })));
    let selected = null;
    let graded = false;

    options.forEach((opt) => {
      const btn = el(`<button class="option-btn" type="button">
        <div class="option-main">${RK().highlightGlossary(opt.text)}</div>
        <div class="option-explain">${RK().highlightGlossary(opt.erklaerung || '')}</div>
      </button>`);
      btn.addEventListener('click', () => {
        if (graded) return;
        list.querySelectorAll('.option-btn').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        selected = opt;
        btnSubmit.disabled = false;
      });
      list.appendChild(btn);
    });

    const btnSubmit = submitButton('Antworten');
    container.appendChild(btnSubmit);
    btnSubmit.addEventListener('click', () => {
      if (graded || !selected) return;
      graded = true;
      const correct = !!selected.korrekt;
      list.querySelectorAll('.option-btn').forEach((b, idx) => {
        b.classList.add('revealed');
        const isThis = options[idx] === selected;
        if (options[idx].korrekt) b.classList.add('correct');
        else if (isThis) b.classList.add('incorrect');
      });
      btnSubmit.remove();
      onGraded({ correct, detail: { chosen: selected.text } });
    });
  }

  // ── 2. Lückentext ──────────────────────────────────────────────────
  function renderLueckentext(item, container, onGraded) {
    const d = item.data;
    const gapKeys = Object.keys(d.luecken);
    let html = d.text;
    gapKeys.forEach((key) => {
      html = html.replace(`{{${key}}}`, `<span class="gap-chip" data-key="${key}">___</span>`);
    });
    container.innerHTML = `<div class="lueckentext-body">${html}</div><div class="wordbank"></div>`;

    const bankWords = shuffle([
      ...gapKeys.map((k) => d.luecken[k].loesungen[0]),
      ...(d.distraktoren || [])
    ]);
    const bank = container.querySelector('.wordbank');
    let activeGapKey = gapKeys[0];
    let graded = false;
    const filled = {};

    function markActiveGap() {
      container.querySelectorAll('.gap-chip').forEach((g) => g.style.outline = g.dataset.key === activeGapKey ? '2px solid var(--accent)' : 'none');
    }
    container.querySelectorAll('.gap-chip').forEach((g) => {
      g.addEventListener('click', () => { if (graded) return; activeGapKey = g.dataset.key; markActiveGap(); });
    });
    markActiveGap();

    bankWords.forEach((word) => {
      const chip = el(`<button type="button" class="wordbank-chip">${word}</button>`);
      chip.addEventListener('click', () => {
        if (graded || !activeGapKey) return;
        filled[activeGapKey] = word;
        const gapEl = container.querySelector(`.gap-chip[data-key="${activeGapKey}"]`);
        gapEl.textContent = word;
        gapEl.classList.add('filled');
        chip.classList.add('used');
        const nextEmpty = gapKeys.find((k) => !filled[k]);
        activeGapKey = nextEmpty || null;
        markActiveGap();
        btnSubmit.disabled = gapKeys.some((k) => !filled[k]);
      });
      bank.appendChild(chip);
    });

    const btnSubmit = submitButton('Prüfen');
    container.appendChild(btnSubmit);
    const explainList = el('<div class="gap-explain-list"></div>');
    container.appendChild(explainList);

    btnSubmit.addEventListener('click', () => {
      if (graded) return;
      graded = true;
      let allCorrect = true;
      gapKeys.forEach((key) => {
        const isRight = d.luecken[key].loesungen.some((sol) => normalize(sol) === normalize(filled[key]));
        if (!isRight) allCorrect = false;
        const gapEl = container.querySelector(`.gap-chip[data-key="${key}"]`);
        gapEl.classList.add(isRight ? 'correct' : 'incorrect');
        explainList.appendChild(el(`<div><span class="ge-key">${d.luecken[key].loesungen[0]}:</span> ${RK().highlightGlossary(d.luecken[key].erklaerung)}</div>`));
      });
      btnSubmit.remove();
      onGraded({ correct: allCorrect, detail: { filled } });
    });
  }

  // ── 3. BMC-Puzzle ──────────────────────────────────────────────────
  function renderBmcPuzzle(item, container, onGraded) {
    const d = item.data;
    const steckbrief = RK().getSteckbrief(d.steckbriefId);
    const decoyItem = d.distraktorSteckbriefId ? RK().getSteckbrief(d.distraktorSteckbriefId) : null;
    const bmc = RK().buildBMC(steckbrief);
    const decoyBmc = decoyItem ? RK().buildBMC(decoyItem) : null;

    const slots = Object.keys(RK().BMC_LABELS).filter((k) => bmc[k]);
    const correctCards = slots.map((k) => ({ key: k, text: bmc[k], decoy: false }));
    const decoyKeys = decoyBmc ? Object.keys(RK().BMC_LABELS).filter((k) => decoyBmc[k] && decoyBmc[k] !== bmc[k]).slice(0, 3) : [];
    const decoyCards = decoyKeys.map((k) => ({ key: k, text: decoyBmc[k], decoy: true, ownerTitle: decoyItem.title }));
    const allCards = shuffle([...correctCards, ...decoyCards]);

    container.innerHTML = `
      <div class="question-text">Ordne die Bausteine dem Business Model Canvas von „${steckbrief.title}" zu.</div>
      <div class="bmc-tray"></div>
      <div class="bmc-reject-tray">Gehört nicht dazu (hierher ziehen, falls ein Baustein von einem anderen Modell stammt)</div>
      <div class="bmc-grid"></div>
    `;
    const tray = container.querySelector('.bmc-tray');
    const rejectTray = container.querySelector('.bmc-reject-tray');
    const grid = container.querySelector('.bmc-grid');

    slots.forEach((k) => {
      grid.appendChild(el(`<div class="bmc-slot" data-key="${k}"><span class="bmc-slot-label">${RK().BMC_LABELS[k]}</span></div>`));
    });

    let selectedCard = null;
    let graded = false;
    const placements = {}; // slotKey -> cardObj ; rejected -> [cardObj]
    const rejected = [];

    function cardEl(card) {
      const c = el(`<div class="bmc-card" data-idx="">${card.text}</div>`);
      c.addEventListener('click', () => {
        if (graded || c.classList.contains('placed')) return;
        tray.querySelectorAll('.bmc-card').forEach((x) => x.classList.remove('selected'));
        c.classList.add('selected');
        selectedCard = { card, el: c };
      });
      return c;
    }
    allCards.forEach((card) => tray.appendChild(cardEl(card)));

    grid.querySelectorAll('.bmc-slot').forEach((slotEl) => {
      slotEl.addEventListener('click', () => {
        if (graded || !selectedCard || slotEl.classList.contains('filled')) return;
        placements[slotEl.dataset.key] = selectedCard.card;
        slotEl.classList.add('filled');
        slotEl.innerHTML = `<span class="bmc-slot-label">${RK().BMC_LABELS[slotEl.dataset.key]}</span>${selectedCard.card.text}`;
        selectedCard.el.classList.add('placed');
        selectedCard = null;
        maybeEnableSubmit();
      });
    });
    rejectTray.addEventListener('click', () => {
      if (graded || !selectedCard) return;
      rejected.push(selectedCard.card);
      selectedCard.el.classList.add('placed');
      selectedCard = null;
      maybeEnableSubmit();
    });

    const btnSubmit = submitButton('Prüfen');
    container.appendChild(btnSubmit);
    function maybeEnableSubmit() {
      const placedCount = Object.keys(placements).length + rejected.length;
      btnSubmit.disabled = placedCount < allCards.length;
    }

    btnSubmit.addEventListener('click', () => {
      if (graded) return;
      graded = true;
      let correctCount = 0;
      slots.forEach((k) => {
        const slotEl = grid.querySelector(`.bmc-slot[data-key="${k}"]`);
        const placedCard = placements[k];
        // Bewertung nach TEXT statt nach verstecktem Key: buildBMC erzeugt für
        // manche Bausteine identischen Text (z.B. Schlüsselaktivitäten und
        // Schlüsselressourcen = wertschoepfung). Zwei optisch gleiche Karten
        // müssen in beiden zugehörigen Slots als richtig gelten — sonst wäre es
        // ein Münzwurf für den Lerner.
        const isRight = placedCard && !placedCard.decoy && placedCard.text === bmc[k];
        if (isRight) correctCount++;
        slotEl.classList.add(isRight ? 'correct' : 'incorrect');
      });
      const rejectedCorrectly = rejected.filter((c) => c.decoy).length;
      const totalScore = (correctCount + rejectedCorrectly) / allCards.length;
      const explain = el(`<div class="gap-explain-list"></div>`);
      decoyCards.forEach((dc) => explain.appendChild(el(`<div><span class="ge-key">${dc.text.slice(0, 40)}…</span> gehört zu „${dc.ownerTitle}", nicht zu „${steckbrief.title}".</div>`)));
      container.appendChild(explain);
      btnSubmit.remove();
      onGraded({ correct: totalScore >= 0.75, detail: { score: totalScore } });
    });
  }

  // ── 4. Radar-Schätzen ──────────────────────────────────────────────
  function renderRadarSchaetzen(item, container, onGraded) {
    const d = item.data;
    const steckbrief = RK().getSteckbrief(d.steckbriefId);
    const real = steckbrief.radar;
    const estimate = {};
    RK().RADAR_DIMS.forEach((dim) => { estimate[dim] = 3; });

    container.innerHTML = `<div class="question-text">Schätze das Kompetenz-Radar von „${steckbrief.title}" ein (1-5 je Achse).</div><div class="radar-sliders"></div>`;
    const sliderWrap = container.querySelector('.radar-sliders');
    RK().RADAR_DIMS.forEach((dim, i) => {
      const label = RK().RADAR_LABELS[i].replace(/-/g, ' ');
      const row = el(`<div class="radar-slider-row">
        <label><span>${label}</span><span class="rs-val">3</span></label>
        <input type="range" min="1" max="5" step="1" value="3" data-dim="${dim}">
      </div>`);
      row.querySelector('input').addEventListener('input', (e) => {
        estimate[dim] = Number(e.target.value);
        row.querySelector('.rs-val').textContent = e.target.value;
      });
      sliderWrap.appendChild(row);
    });

    const btnSubmit = submitButton('Radar aufdecken');
    btnSubmit.disabled = false;
    container.appendChild(btnSubmit);

    btnSubmit.addEventListener('click', () => {
      const overlayWrap = el('<div class="radar-overlay-wrap"></div>');
      const legend = el(`<div class="radar-legend">
        <span><i style="background:#8A8A8A"></i>Deine Schätzung</span>
        <span><i style="background:#C8571A"></i>Echtes Radar</span>
      </div>`);
      overlayWrap.innerHTML = RK().buildRadarSVG([{ radar: estimate, color: '#8A8A8A' }, { radar: real, color: '#C8571A' }]);
      container.appendChild(legend);
      container.appendChild(overlayWrap);

      const deviation = RK().avgAbsDeviation(estimate, real);
      const explain = el('<div class="gap-explain-list"></div>');
      RK().RADAR_DIMS.forEach((dim, i) => {
        const diff = Math.abs(estimate[dim] - real[dim]);
        const flag = diff >= 2 ? ' ⚠️ deutlich daneben' : '';
        explain.appendChild(el(`<div><span class="ge-key">${RK().RADAR_LABELS[i].replace(/-/g, ' ')} (echt: ${real[dim]}, geschätzt: ${estimate[dim]})${flag}:</span> ${RK().highlightGlossary(d.erklaerungenProDimension[dim] || '')}</div>`));
      });
      container.appendChild(explain);
      btnSubmit.remove();
      onGraded({ correct: deviation <= 1, detail: { deviation } });
    });
  }

  // ── 5. Fallbeispiel-Rechnung ────────────────────────────────────────
  function renderFallbeispielRechnung(item, container, onGraded) {
    const d = item.data;
    container.innerHTML = `<div class="question-text">${RK().highlightGlossary(d.szenario)}</div><div class="calc-fields"></div>`;
    const fieldsWrap = container.querySelector('.calc-fields');
    d.eingabefelder.forEach((f) => {
      const row = el(`<div class="calc-field">
        <label>${f.label}<span class="calc-unit">${f.einheit || ''}</span></label>
        <input type="number" inputmode="decimal" step="any" data-key="${f.key}">
      </div>`);
      row.querySelector('input').addEventListener('input', checkFilled);
      fieldsWrap.appendChild(row);
    });

    const btnSubmit = submitButton('Berechnung prüfen');
    container.appendChild(btnSubmit);
    function checkFilled() {
      const inputs = [...fieldsWrap.querySelectorAll('input')];
      btnSubmit.disabled = inputs.some((i) => i.value === '');
    }
    checkFilled();

    btnSubmit.addEventListener('click', () => {
      const inputs = [...fieldsWrap.querySelectorAll('input')];
      let allCorrect = true;
      inputs.forEach((inp) => {
        const key = inp.dataset.key;
        const sol = d.loesung[key];
        if (!sol) return;
        const val = parseFloat(inp.value.replace(',', '.'));
        const ok = Math.abs(val - sol.wert) <= sol.toleranz;
        if (!ok) allCorrect = false;
        inp.style.borderColor = ok ? 'var(--success)' : 'var(--danger)';
      });
      const rechenweg = el(`<div class="rechenweg-list"><strong>Rechenweg:</strong><ol>${d.rechenweg.map((s) => `<li>${RK().highlightGlossary(s)}</li>`).join('')}</ol></div>`);
      container.appendChild(rechenweg);
      inputs.forEach((i) => i.disabled = true);
      btnSubmit.remove();
      onGraded({ correct: allCorrect, detail: {} });
    });
  }

  const RENDERERS = {
    'mc': renderMC,
    'lueckentext': renderLueckentext,
    'bmc-puzzle': renderBmcPuzzle,
    'radar-schaetzen': renderRadarSchaetzen,
    'fallbeispiel-rechnung': renderFallbeispielRechnung
  };

  function render(item, container, onGraded) {
    const fn = RENDERERS[item.format];
    if (!fn) { container.innerHTML = `<p>Unbekanntes Format: ${item.format}</p>`; return; }
    fn(item, container, onGraded);
  }

  window.QuizFormats = { render };
})();
