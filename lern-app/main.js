// ══════════════════════════════════════════════════════════
// main.js — App-Shell: Navigation (Home/Review/Fortschritt), Unit-Start,
// Review-Session, Progress-Anzeige. Verdrahtet lern-engine.js, leitner.js,
// storage.js, quiz-formats.js, render-kit.js miteinander.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  const DEBUG = new URLSearchParams(location.search).get('debug') === '1';

  const viewHome = document.getElementById('view-home');
  const viewPlayer = document.getElementById('view-player');
  const viewReview = document.getElementById('view-review');
  const viewProgress = document.getElementById('view-progress');
  const views = { home: viewHome, player: viewPlayer, review: viewReview, progress: viewProgress };

  let leitnerState = window.LernStorage.loadLeitner();
  let progressState = window.LernStorage.loadProgress();

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function persist() {
    window.LernStorage.saveLeitner(leitnerState);
    window.LernStorage.saveProgress(progressState);
  }

  function findUnit(unitId) { return LERN_UNITS.find((u) => u.id === unitId); }

  function showView(name) {
    Object.entries(views).forEach(([key, node]) => { node.hidden = key !== name; });
    document.querySelectorAll('.bottom-nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === name));
    if (name === 'home') renderHome();
    if (name === 'review') renderReview();
    if (name === 'progress') renderProgress();
  }

  function updateStreakPill() {
    document.getElementById('streak-count').textContent = leitnerState.streak.count || 0;
  }

  // ── Home: Modul- und Einheitenliste ─────────────────────────────
  function renderHome() {
    viewHome.innerHTML = '';
    viewHome.appendChild(el(`<div class="hero"><h2>⚡ Energiewirtschaft meistern</h2><p>Wähle ein Modul — jede Einheit passt in eine Kaffeepause (5–10 Minuten).</p></div>`));

    LERN_MODULES.forEach((mod) => {
      const units = mod.unitIds.map(findUnit);
      const doneCount = units.filter((u) => progressState.units[u.id]).length;
      const pct = Math.round((doneCount / units.length) * 100);

      const card = el(`<div class="module-card">
        <div class="module-card-title">${mod.title}</div>
        <p class="module-card-desc">${mod.description}</p>
        <div class="module-progress-bar"><div class="module-progress-fill" style="width:${pct}%"></div></div>
        <div class="module-progress-label">${doneCount} / ${units.length} Einheiten abgeschlossen</div>
      </div>`);
      viewHome.appendChild(card);

      const list = el('<div class="unit-list"></div>');
      units.forEach((u) => {
        const done = !!progressState.units[u.id];
        const row = el(`<div class="unit-row ${done ? 'done' : ''}">
          <div class="unit-row-check">${done ? '✓' : ''}</div>
          <div class="unit-row-title">${u.title}</div>
          <div class="unit-row-meta">${done ? 'erledigt' : 'starten'}</div>
        </div>`);
        row.addEventListener('click', () => startUnit(u.id));
        list.appendChild(row);
      });
      viewHome.appendChild(list);
    });
  }

  function startUnit(unitId) {
    const unit = findUnit(unitId);
    showView('player');
    viewPlayer.innerHTML = '';
    new window.LernEngine.UnitPlayer(unit, viewPlayer, {
      onAnswer(item, result) {
        const leitnerBoolean = result.correct;
        window.LernLeitner.recordResult(leitnerState, item.id, leitnerBoolean);
        // Auto-generierte Glossar-Karten (zero-cost Leitner-Karten, Konzept §6/§9).
        const text = JSON.stringify(item.data);
        window.RenderKit.findGlossaryTermsIn(text).forEach((term) => {
          window.LernLeitner.ensureCard(leitnerState, `glossary:${term}`);
        });
        persist();
        updateStreakPill();
      },
      onComplete({ correctCount, total, transferOk }) {
        progressState.units[unitId] = {
          completedAt: new Date().toISOString(),
          retrievalCorrect: correctCount,
          retrievalTotal: total,
          transferCorrect: transferOk
        };
        progressState.xp = (progressState.xp || 0) + correctCount * 10 + (transferOk ? 20 : 0);
        persist();
        showView('home');
      }
    });
  }

  // ── Review (Leitner) ────────────────────────────────────────────
  function renderReview() {
    viewReview.innerHTML = '';
    const dueCount = window.LernLeitner.dueCountToday(leitnerState);
    viewReview.appendChild(el(`<div class="hero"><h2>🔁 Review</h2><p>Tägliche Wiederholung nach dem Leitner-Prinzip — max. 5 Minuten.</p></div>`));

    if (DEBUG) {
      const dbgBtn = el('<button class="btn-secondary">🐞 Reviews jetzt fällig stellen (Debug)</button>');
      dbgBtn.addEventListener('click', () => { window.LernLeitner.forceAllDueNow(leitnerState); persist(); renderReview(); });
      viewReview.appendChild(dbgBtn);
    }

    const queue = window.LernLeitner.buildDueQueue(leitnerState);
    if (!queue.length) {
      viewReview.appendChild(el(`<div class="review-empty"><div class="re-emoji">🌿</div><p>${dueCount ? 'Keine Karten mehr fällig für heute.' : 'Nichts fällig — komm morgen wieder vorbei.'}</p></div>`));
      return;
    }
    runReviewSession(queue, 0);
  }

  function runReviewSession(queue, i) {
    viewReview.innerHTML = '';
    if (i >= queue.length) {
      viewReview.appendChild(el(`<div class="review-empty"><div class="re-emoji">🎉</div><p>Review-Stapel erledigt!</p></div>`));
      const btn = el('<button class="btn-primary">Zur Übersicht</button>');
      btn.addEventListener('click', () => showView('home'));
      viewReview.appendChild(btn);
      return;
    }
    viewReview.appendChild(el(`<div class="review-counter">Karte ${i + 1} / ${queue.length}</div>`));
    const cardId = queue[i];
    const card = el('<div class="card"></div>');
    viewReview.appendChild(card);

    if (cardId.startsWith('glossary:')) {
      const term = cardId.slice('glossary:'.length);
      const g = (window.GM_GLOSSARY || GM_GLOSSARY || []).find((x) => x.term === term);
      if (!g) { runReviewSession(queue, i + 1); return; }
      card.innerHTML = `<div class="question-text">${g.term}${g.full ? ' — ' + g.full : ''}</div>`;
      const revealBtn = el('<button class="btn-primary">Definition zeigen</button>');
      card.appendChild(revealBtn);
      revealBtn.addEventListener('click', () => {
        revealBtn.remove();
        card.appendChild(el(`<div class="option-explain" style="display:block">${g.definition}</div>`));
        const wrap = el('<div class="summary-stat-row" style="margin-top:14px"></div>');
        const yes = el('<button class="btn-primary">Wusste ich ✓</button>');
        const no = el('<button class="btn-secondary">Wusste ich nicht ✗</button>');
        wrap.appendChild(yes); wrap.appendChild(no);
        card.appendChild(wrap);
        yes.addEventListener('click', () => { window.LernLeitner.recordResult(leitnerState, cardId, true); persist(); updateStreakPill(); runReviewSession(queue, i + 1); });
        no.addEventListener('click', () => { window.LernLeitner.recordResult(leitnerState, cardId, false); persist(); updateStreakPill(); runReviewSession(queue, i + 1); });
      });
    } else {
      const item = LERN_QUIZ_ITEMS[cardId];
      if (!item) { runReviewSession(queue, i + 1); return; }
      window.QuizFormats.render(item, card, (result) => {
        window.LernLeitner.recordResult(leitnerState, cardId, result.correct);
        persist();
        updateStreakPill();
        const nextBtn = el('<button class="btn-primary">Weiter</button>');
        viewReview.appendChild(nextBtn);
        nextBtn.addEventListener('click', () => runReviewSession(queue, i + 1));
      });
    }
  }

  // ── Progress screen ─────────────────────────────────────────────
  function renderProgress() {
    viewProgress.innerHTML = '';
    const unitsDone = Object.keys(progressState.units).length;
    const totalUnits = LERN_UNITS.length;
    const dueToday = window.LernLeitner.dueCountToday(leitnerState);
    const cardCount = Object.keys(leitnerState.cards).length;

    viewProgress.appendChild(el(`<div class="hero"><h2>📊 Fortschritt</h2></div>`));
    const grid = el('<div class="progress-grid"></div>');
    grid.appendChild(el(`<div class="progress-tile"><div class="progress-tile-n">${unitsDone}/${totalUnits}</div><div class="progress-tile-label">Einheiten</div></div>`));
    grid.appendChild(el(`<div class="progress-tile"><div class="progress-tile-n">${leitnerState.streak.count || 0}</div><div class="progress-tile-label">Tage-Streak</div></div>`));
    grid.appendChild(el(`<div class="progress-tile"><div class="progress-tile-n">${dueToday}</div><div class="progress-tile-label">Heute fällig</div></div>`));
    grid.appendChild(el(`<div class="progress-tile"><div class="progress-tile-n">${progressState.xp || 0}</div><div class="progress-tile-label">XP</div></div>`));
    viewProgress.appendChild(grid);

    const tools = el('<div class="data-tools"></div>');
    const exportBtn = el('<button class="btn-secondary">Fortschritt exportieren</button>');
    const importBtn = el('<button class="btn-secondary">Fortschritt importieren</button>');
    const fileInput = el('<input type="file" accept="application/json" style="display:none">');
    tools.appendChild(exportBtn); tools.appendChild(importBtn); tools.appendChild(fileInput);
    viewProgress.appendChild(tools);

    exportBtn.addEventListener('click', () => {
      const data = window.LernStorage.exportAll();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `lernapp-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
    });
    importBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          window.LernStorage.importAll(JSON.parse(reader.result));
          leitnerState = window.LernStorage.loadLeitner();
          progressState = window.LernStorage.loadProgress();
          updateStreakPill();
          renderProgress();
        } catch (e) { alert('Import fehlgeschlagen: ' + e.message); }
      };
      reader.readAsText(file);
    });
  }

  // ── Bottom nav ───────────────────────────────────────────────────
  document.querySelectorAll('.bottom-nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });

  // ── Init ─────────────────────────────────────────────────────────
  window.LernStorage.requestPersistence();
  window.RenderKit.bindGlossaryPopover();
  updateStreakPill();
  showView('home');

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((e) => console.warn('SW-Registrierung fehlgeschlagen', e));
    });
  }
})();
