// ══════════════════════════════════════════════════════════
// lern-engine.js — UnitPlayer: Hook→Kernidee→Worked Example→Retrieval→
// Transfer→Merke-dir-einen-Satz→Summary. Siehe 07_LERNAPP_KONZEPT.md §4.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  // Baut die lineare Screen-Liste einer Einheit.
  function buildScreens(unit) {
    const screens = [{ type: 'HOOK' }, { type: 'KERNIDEE' }];
    if (unit.vertiefungSteckbriefIds && unit.vertiefungSteckbriefIds.length) screens.push({ type: 'VERTIEFUNG' });
    unit.workedExample.steps.forEach((step, i) => screens.push({ type: 'WORKED_EXAMPLE', step, index: i }));
    unit.retrievalItemIds.forEach((qid, i) => screens.push({ type: 'RETRIEVAL', questionId: qid, index: i }));
    screens.push({ type: 'TRANSFER', questionId: unit.transferItemId });
    screens.push({ type: 'MERKE_SATZ' });
    screens.push({ type: 'SUMMARY' });
    return screens;
  }

  function phaseLabel(type) {
    return {
      HOOK: 'Einstieg', KERNIDEE: 'Kernidee', VERTIEFUNG: 'Vertiefung', WORKED_EXAMPLE: 'Worked Example',
      RETRIEVAL: 'Retrieval', TRANSFER: 'Transfer', MERKE_SATZ: 'Merke dir einen Satz', SUMMARY: 'Zusammenfassung'
    }[type] || type;
  }

  function UnitPlayer(unit, container, callbacks) {
    const screens = buildScreens(unit);
    let index = 0;
    const answers = {}; // questionId -> {correct, detail}

    function renderProgressBar() {
      const gradable = screens.filter((s) => ['WORKED_EXAMPLE', 'RETRIEVAL', 'TRANSFER'].includes(s.type)).length;
      const bar = el('<div class="player-progress"></div>');
      for (let i = 0; i < screens.length - 1; i++) {
        const seg = el('<div class="player-progress-seg"></div>');
        if (i <= index) seg.classList.add('filled');
        bar.appendChild(seg);
      }
      return bar;
    }

    function nextBtn(label, disabled) {
      const b = el(`<button class="btn-primary">${label || 'Weiter'}</button>`);
      if (disabled) b.disabled = true;
      b.addEventListener('click', () => { index++; renderScreen(); });
      return b;
    }

    function renderScreen() {
      window.scrollTo(0, 0);
      const screen = screens[index];
      if (!screen) return;
      container.innerHTML = '';
      if (screen.type !== 'SUMMARY') container.appendChild(renderProgressBar());
      const phase = el(`<div class="player-phase-label">${phaseLabel(screen.type)}</div>`);
      container.appendChild(phase);

      if (screen.type === 'HOOK') {
        const card = el(`<div class="card card-hook"><p>${window.RenderKit.highlightGlossary(unit.hook.text)}</p></div>`);
        container.appendChild(card);
        container.appendChild(nextBtn("Los geht's"));
      } else if (screen.type === 'KERNIDEE') {
        const card = el(`<div class="card"><div class="kernidee-text">${window.RenderKit.highlightGlossary(unit.kernidee.text)}</div></div>`);
        if (unit.kernidee.geldfluss) {
          const diagram = el('<div></div>');
          diagram.innerHTML = window.FlowDiagram.buildFlowDiagram(unit.kernidee.geldfluss.nodes, unit.kernidee.geldfluss.edges);
          card.appendChild(diagram);
        }
        container.appendChild(card);
        container.appendChild(nextBtn());
      } else if (screen.type === 'VERTIEFUNG') {
        const intro = el(`<div class="feedback-banner info">📚 Lies dich hier in die Tiefe ein — der volle Wiki-Steckbrief, direkt in der App. Danach kommen die Fragen.</div>`);
        container.appendChild(intro);
        unit.vertiefungSteckbriefIds.forEach((sid, sIdx) => {
          const sb = window.RenderKit.getSteckbrief(sid);
          if (!sb) return;
          const card = el(`<div class="card vertiefung-card"><div class="vertiefung-title">${sb.title}</div></div>`);
          const sections = [
            ['Definition', sb.definition, sIdx === 0],
            ['💡 Wertschöpfung', sb.wertschoepfung, false],
            ['⚠️ Herausforderungen', sb.herausforderungen, false],
            ['🎯 Angreifbarkeit', sb.angreifbarkeit, false],
            ['📖 Praxisbeispiel (Deep Dive)', sb.fallbeispiel, false],
            ['→ Ausblick', sb.ausblick, false]
          ];
          sections.forEach(([label, text, open]) => {
            if (!text) return;
            card.appendChild(el(`<details class="vertiefung-section"${open ? ' open' : ''}>
              <summary>${label}</summary>
              <div class="vertiefung-text">${window.RenderKit.highlightGlossary(text)}</div>
            </details>`));
          });
          const meta = [
            ['Erlösmodell', sb.erloesmodell], ['Regulierung', sb.regulierung],
            ['Kundensegment', sb.kundensegment], ['Differenzierung', sb.differenzierung]
          ].filter(([, v]) => v);
          if (meta.length) {
            card.appendChild(el(`<details class="vertiefung-section">
              <summary>Steckbrief-Daten</summary>
              <div class="vertiefung-text">${meta.map(([k, v]) => `<div class="vertiefung-meta-row"><strong>${k}:</strong> ${window.RenderKit.highlightGlossary(v)}</div>`).join('')}</div>
            </details>`));
          }
          container.appendChild(card);
        });
        container.appendChild(nextBtn('Weiter zu den Fragen'));
      } else if (screen.type === 'WORKED_EXAMPLE') {
        const card = el(`<div class="card"><div class="step-label">Schritt ${screen.index + 1}</div><div class="worked-example-text">${window.RenderKit.highlightGlossary(screen.step.text)}</div><div class="we-question"></div></div>`);
        container.appendChild(card);
        renderGradable(card.querySelector('.we-question'), screen.step.questionId);
      } else if (screen.type === 'RETRIEVAL') {
        const card = el('<div class="card"><div class="retrieval-question"></div></div>');
        container.appendChild(card);
        renderGradable(card.querySelector('.retrieval-question'), screen.questionId);
      } else if (screen.type === 'TRANSFER') {
        const card = el(`<div class="card"><div class="feedback-banner info">🔄 Transfer — wende das Gelernte auf einen neuen Zusammenhang an.</div><div class="transfer-question"></div></div>`);
        container.appendChild(card);
        renderGradable(card.querySelector('.transfer-question'), screen.questionId);
      } else if (screen.type === 'MERKE_SATZ') {
        renderMerkeSatz(unit, container, () => { index++; renderScreen(); });
      } else if (screen.type === 'SUMMARY') {
        renderSummary();
      }
    }

    function renderGradable(mount, questionId) {
      const item = LERN_QUIZ_ITEMS[questionId];
      if (!item) { mount.innerHTML = '<p>Frage nicht gefunden.</p>'; return; }
      const holder = el('<div></div>');
      mount.appendChild(holder);
      window.QuizFormats.render(item, holder, (result) => {
        answers[questionId] = result;
        callbacks.onAnswer(item, result);
        const btnWrap = el('<div class="gradable-next"></div>');
        mount.appendChild(btnWrap);
        btnWrap.appendChild(nextBtn());
      });
    }

    function renderMerkeSatz(unit, container, onDone) {
      container.innerHTML = '';
      container.appendChild(el(`<div class="player-phase-label">${phaseLabel('MERKE_SATZ')}</div>`));
      const card = el(`<div class="card">
        <div class="question-text">${unit.merkeDirEinenSatz.prompt}</div>
        <textarea class="satz-textarea" placeholder="Dein Satz…"></textarea>
      </div>`);
      container.appendChild(card);
      const btnCompare = el('<button class="btn-primary">Mit Musterantwort vergleichen</button>');
      container.appendChild(btnCompare);
      btnCompare.addEventListener('click', () => {
        btnCompare.remove();
        const box = el(`<div class="musterantwort-box"><span class="ma-label">Musterantwort</span>${unit.merkeDirEinenSatz.musterantwort}</div>`);
        card.appendChild(box);
        container.appendChild(nextBtn('Zur Zusammenfassung'));
      });
    }

    function renderSummary() {
      const gradableIds = [
        ...unit.workedExample.steps.map((s) => s.questionId),
        ...unit.retrievalItemIds,
        unit.transferItemId
      ];
      const correctCount = gradableIds.filter((id) => answers[id] && answers[id].correct).length;
      const transferOk = !!(answers[unit.transferItemId] && answers[unit.transferItemId].correct);

      container.innerHTML = `
        <div class="hero"><h2>Einheit abgeschlossen</h2><p>${unit.title}</p></div>
        <div class="summary-stat-row">
          <div class="summary-stat"><div class="summary-stat-n">${correctCount}/${gradableIds.length}</div><div class="summary-stat-label">Richtig</div></div>
          <div class="summary-stat"><div class="summary-stat-n">${transferOk ? '✓' : '×'}</div><div class="summary-stat-label">Transfer</div></div>
        </div>
      `;
      const btnDone = el('<button class="btn-primary">Zur Übersicht</button>');
      container.appendChild(btnDone);
      btnDone.addEventListener('click', () => callbacks.onComplete({ gradableIds, correctCount, total: gradableIds.length, transferOk }));
    }

    renderScreen();
  }

  window.LernEngine = { UnitPlayer };
})();
