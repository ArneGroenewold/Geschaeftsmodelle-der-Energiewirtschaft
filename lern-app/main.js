// ══════════════════════════════════════════════════════════
// main.js — App-Shell: Navigation (Home/Review/Fortschritt), Unit-Start,
// Review-Session, Progress-Anzeige. Verdrahtet lern-engine.js, leitner.js,
// storage.js, quiz-formats.js, render-kit.js miteinander.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  const DEBUG = new URLSearchParams(location.search).get('debug') === '1';

  // Boss-/Zertifizierungsquiz-Parameter (siehe 07_LERNAPP_KONZEPT.md §8).
  const BOSS_SIZE = 10;          // Fragen je Bossquiz
  const BOSS_PASS = 0.7;         // ≥70% zum Bestehen
  const CERT_PER_MODULE = 5;     // Fragen je Modul im Zertifizierungsquiz
  const CERT_PASS = 0.75;        // ≥75% gesamt
  const CERT_MODULE_MIN = 0.5;   // kein Modul unter 50%

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

  // ── Boss-/Zertifizierungs-Statushelfer ──────────────────────────
  function moduleAllUnitsDone(mod) {
    return mod.unitIds.every((id) => progressState.units[id]);
  }
  function bossPassed(moduleId) {
    const b = progressState.bossQuizzes[moduleId];
    return !!(b && b.passed);
  }
  function allBossPassed() {
    return LERN_MODULES.every((m) => bossPassed(m.id));
  }

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

  // Merkt sich, welche Module aufgeklappt sind (nur zur Laufzeit, Default: eingeklappt).
  const expandedModules = {};

  // ── Home: Modul- und Einheitenliste (Akkordeon) ─────────────────
  function renderHome() {
    viewHome.innerHTML = '';
    viewHome.appendChild(el(`<div class="hero"><h2>⚡ Energiewirtschaft meistern</h2><p>Wähle ein Modul — jede Einheit passt in eine Kaffeepause (5–10 Minuten).</p></div>`));

    // Gesamtfortschritt über alle Module
    const allUnits = LERN_MODULES.flatMap((m) => m.unitIds);
    const allDone = allUnits.filter((id) => progressState.units[id]).length;
    const totalPct = allUnits.length ? Math.round((allDone / allUnits.length) * 100) : 0;
    viewHome.appendChild(el(`<div class="overall-progress">
      <div class="overall-progress-head"><span>Gesamtfortschritt</span><span class="overall-progress-pct">${totalPct}%</span></div>
      <div class="module-progress-bar"><div class="module-progress-fill" style="width:${totalPct}%"></div></div>
      <div class="module-progress-label">${allDone} / ${allUnits.length} Einheiten abgeschlossen</div>
    </div>`));

    LERN_MODULES.forEach((mod) => {
      const units = mod.unitIds.map(findUnit);
      const doneCount = units.filter((u) => progressState.units[u.id]).length;
      const pct = Math.round((doneCount / units.length) * 100);
      const isOpen = !!expandedModules[mod.id];

      const card = el(`<div class="module-card ${isOpen ? 'open' : ''}">
        <button class="module-header" type="button" aria-expanded="${isOpen}">
          <div class="module-header-main">
            <div class="module-card-title">${mod.title}</div>
            <p class="module-card-desc">${mod.description}</p>
            <div class="module-progress-bar"><div class="module-progress-fill" style="width:${pct}%"></div></div>
            <div class="module-progress-label">${pct}% — ${doneCount} / ${units.length} Einheiten</div>
          </div>
          <div class="module-chevron">▸</div>
        </button>
        <div class="unit-list"></div>
      </div>`);
      const list = card.querySelector('.unit-list');

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

      // Bossquiz-Zeile am Ende der Einheitenliste
      const boss = progressState.bossQuizzes[mod.id];
      const bossUnlocked = moduleAllUnitsDone(mod) || DEBUG;
      const bossState = boss && boss.passed
        ? `bestanden (${Math.round(boss.bestScore * 100)}%)`
        : bossUnlocked ? 'freigeschaltet' : 'erst alle Einheiten abschließen';
      const bossRow = el(`<div class="unit-row boss-row ${boss && boss.passed ? 'done' : ''} ${bossUnlocked ? '' : 'locked'}">
        <div class="unit-row-check">${boss && boss.passed ? '🏆' : '🔒'}</div>
        <div class="unit-row-title">Bossquiz — ${mod.title}</div>
        <div class="unit-row-meta">${bossState}</div>
      </div>`);
      if (bossUnlocked) {
        bossRow.querySelector('.unit-row-check').textContent = boss && boss.passed ? '🏆' : '⚔️';
        bossRow.addEventListener('click', () => startBossQuiz(mod.id));
      }
      list.appendChild(bossRow);

      card.querySelector('.module-header').addEventListener('click', () => {
        expandedModules[mod.id] = !expandedModules[mod.id];
        card.classList.toggle('open', expandedModules[mod.id]);
        card.querySelector('.module-header').setAttribute('aria-expanded', expandedModules[mod.id]);
      });

      viewHome.appendChild(card);
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

  // ── Bossquiz ────────────────────────────────────────────────────
  function startBossQuiz(moduleId) {
    const mod = LERN_MODULES.find((m) => m.id === moduleId);
    const itemIds = window.QuizSession.buildBossSet(moduleId, BOSS_SIZE);
    showView('player');
    viewPlayer.innerHTML = '';
    viewPlayer.appendChild(el(`<div class="hero"><h2>⚔️ Bossquiz</h2><p>${mod.title} — ${itemIds.length} gemischte Fragen. Bestehen ab ${Math.round(BOSS_PASS * 100)}%.</p></div>`));
    const sessionWrap = el('<div></div>');
    viewPlayer.appendChild(sessionWrap);
    window.QuizSession.run({
      container: sessionWrap,
      itemIds,
      onAnswer(item, result) {
        window.LernLeitner.recordResult(leitnerState, item.id, !!result.correct);
        persist();
        updateStreakPill();
      },
      onComplete(res) {
        const score = res.total ? res.correct / res.total : 0;
        const passed = score >= BOSS_PASS;
        const prev = progressState.bossQuizzes[moduleId];
        progressState.bossQuizzes[moduleId] = {
          passed: passed || (prev && prev.passed) || false,
          bestScore: Math.max(score, (prev && prev.bestScore) || 0),
          lastScore: score,
          attempts: ((prev && prev.attempts) || 0) + 1,
          lastAt: new Date().toISOString()
        };
        progressState.xp = (progressState.xp || 0) + res.correct * 5 + (passed ? 30 : 0);
        persist();
        renderQuizResult(viewPlayer, {
          title: passed ? '🏆 Bossquiz bestanden!' : 'Bossquiz nicht bestanden',
          score, correct: res.correct, total: res.total, passed,
          passLabel: `${Math.round(BOSS_PASS * 100)}% nötig`,
          onDone: () => showView('home')
        });
      }
    });
  }

  // ── Zertifizierungsquiz ─────────────────────────────────────────
  function startCertification() {
    const itemIds = window.QuizSession.buildCertificationSet(CERT_PER_MODULE);
    showView('player');
    viewPlayer.innerHTML = '';
    viewPlayer.appendChild(el(`<div class="hero"><h2>🎓 Zertifizierung</h2><p>${itemIds.length} Fragen aus allen 8 Modulen. Bestehen ab ${Math.round(CERT_PASS * 100)}% — und kein Modul unter ${Math.round(CERT_MODULE_MIN * 100)}%.</p></div>`));
    const sessionWrap = el('<div></div>');
    viewPlayer.appendChild(sessionWrap);
    window.QuizSession.run({
      container: sessionWrap,
      itemIds,
      onAnswer(item, result) {
        window.LernLeitner.recordResult(leitnerState, item.id, !!result.correct);
        persist();
        updateStreakPill();
      },
      onComplete(res) {
        const score = res.total ? res.correct / res.total : 0;
        const moduleScores = {};
        Object.entries(res.perModule).forEach(([mid, v]) => { moduleScores[mid] = v.total ? v.correct / v.total : 0; });
        const weakestModule = Math.min(...Object.values(moduleScores));
        const passed = score >= CERT_PASS && weakestModule >= CERT_MODULE_MIN;
        const prev = progressState.certification;
        progressState.certification = {
          passed: passed || (prev && prev.passed) || false,
          lastScore: score,
          bestScore: Math.max(score, (prev && prev.bestScore) || 0),
          moduleScores,
          attempts: ((prev && prev.attempts) || 0) + 1,
          lastAt: new Date().toISOString(),
          passedAt: passed ? new Date().toISOString() : (prev && prev.passedAt) || null
        };
        progressState.xp = (progressState.xp || 0) + res.correct * 5 + (passed ? 100 : 0);
        persist();
        if (passed) {
          renderCertificate(score, moduleScores);
        } else {
          renderCertFailure(viewPlayer, { score, moduleScores, correct: res.correct, total: res.total });
        }
      }
    });
  }

  function renderQuizResult(container, { title, score, correct, total, passed, passLabel, onDone }) {
    container.innerHTML = '';
    container.appendChild(el(`<div class="hero"><h2>${title}</h2></div>`));
    container.appendChild(el(`<div class="summary-stat-row">
      <div class="summary-stat"><div class="summary-stat-n">${Math.round(score * 100)}%</div><div class="summary-stat-label">${passLabel}</div></div>
      <div class="summary-stat"><div class="summary-stat-n">${correct}/${total}</div><div class="summary-stat-label">Richtig</div></div>
    </div>`));
    container.appendChild(el(`<div class="feedback-banner ${passed ? 'correct' : 'incorrect'}">${passed ? '✓ Bestanden — starkes Ergebnis!' : '✗ Noch nicht bestanden — wiederhole die schwächeren Einheiten und versuch es erneut.'}</div>`));
    const btn = el('<button class="btn-primary">Zur Übersicht</button>');
    btn.addEventListener('click', onDone);
    container.appendChild(btn);
  }

  function renderCertFailure(container, { score, moduleScores, correct, total }) {
    container.innerHTML = '';
    container.appendChild(el(`<div class="hero"><h2>Zertifizierung nicht bestanden</h2><p>Gesamt ${Math.round(score * 100)}% (${correct}/${total}). Nötig: ${Math.round(CERT_PASS * 100)}% und kein Modul unter ${Math.round(CERT_MODULE_MIN * 100)}%.</p></div>`));
    const weak = el('<div class="card"><div class="step-label">Schwächenanalyse — hier gezielt wiederholen</div></div>');
    LERN_MODULES.forEach((m) => {
      const s = moduleScores[m.id];
      if (s === undefined) return;
      const cls = s < CERT_MODULE_MIN ? 'incorrect' : (s < CERT_PASS ? '' : 'correct');
      weak.appendChild(el(`<div class="cert-module-row ${cls}"><span>${m.title}</span><span>${Math.round(s * 100)}%</span></div>`));
    });
    container.appendChild(weak);
    const btn = el('<button class="btn-primary">Zur Übersicht</button>');
    btn.addEventListener('click', () => showView('progress'));
    container.appendChild(btn);
  }

  function renderCertificate(score, moduleScores) {
    viewPlayer.innerHTML = '';
    const saved = progressState.certification || {};
    let name = saved.name || '';
    const dateStr = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
    const faktenStand = (typeof GM_FAKTEN_STAND !== 'undefined' ? GM_FAKTEN_STAND : 'Juli 2026');

    function draw() {
      viewPlayer.innerHTML = '';
      const wrap = el('<div></div>');
      wrap.appendChild(el(`<div class="hero"><h2>🎓 Bestanden!</h2><p>Herzlichen Glückwunsch — du hast die Zertifizierung mit ${Math.round(score * 100)}% bestanden.</p></div>`));
      const nameField = el(`<div class="card"><label class="calc-field"><span>Name für das Zertifikat</span><input type="text" class="cert-name-input" placeholder="Dein Name" value="${name.replace(/"/g, '&quot;')}"></label></div>`);
      wrap.appendChild(nameField);

      const cert = el(`<div class="certificate" id="certificate">
        <div class="cert-badge">⚡</div>
        <div class="cert-kicker">Zertifikat</div>
        <div class="cert-title">Energiewirtschaft meistern</div>
        <div class="cert-name">${name || '—'}</div>
        <div class="cert-body">hat die Zertifizierungsprüfung über alle acht Module der Geschäftsmodelle in der Energiewirtschaft erfolgreich bestanden.</div>
        <div class="cert-scoreline">Gesamtergebnis: <strong>${Math.round(score * 100)}%</strong></div>
        <div class="cert-modules"></div>
        <div class="cert-footer">
          <span>${dateStr}</span>
          <span>Faktenstand: ${faktenStand}</span>
        </div>
      </div>`);
      const cm = cert.querySelector('.cert-modules');
      LERN_MODULES.forEach((m) => {
        const s = moduleScores[m.id];
        if (s === undefined) return;
        cm.appendChild(el(`<div class="cert-mod"><span>${m.title}</span><span>${Math.round(s * 100)}%</span></div>`));
      });
      wrap.appendChild(cert);

      const printBtn = el('<button class="btn-primary">Zertifikat drucken / als PDF speichern</button>');
      printBtn.addEventListener('click', () => window.print());
      const doneBtn = el('<button class="btn-secondary">Zur Übersicht</button>');
      doneBtn.addEventListener('click', () => showView('progress'));
      wrap.appendChild(printBtn);
      wrap.appendChild(doneBtn);
      viewPlayer.appendChild(wrap);

      nameField.querySelector('.cert-name-input').addEventListener('input', (e) => {
        name = e.target.value;
        cert.querySelector('.cert-name').textContent = name || '—';
        progressState.certification.name = name;
        persist();
      });
    }
    draw();
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

    // ── Zertifizierung ──
    const bossCount = LERN_MODULES.filter((m) => bossPassed(m.id)).length;
    const cert = progressState.certification;
    const certCard = el('<div class="module-card cert-card"><div style="padding:16px"></div></div>');
    const inner = certCard.firstElementChild;
    inner.appendChild(el(`<div class="module-card-title">🎓 Zertifizierung</div>`));
    if (cert && cert.passed) {
      inner.appendChild(el(`<p class="module-card-desc">Bestanden mit ${Math.round(cert.bestScore * 100)}%. Du kannst dein Zertifikat erneut ansehen oder die Prüfung wiederholen.</p>`));
      const viewBtn = el('<button class="btn-primary">Zertifikat ansehen</button>');
      viewBtn.addEventListener('click', () => { showView('player'); renderCertificate(cert.bestScore, cert.moduleScores || {}); });
      inner.appendChild(viewBtn);
      const againBtn = el('<button class="btn-secondary">Prüfung wiederholen</button>');
      againBtn.addEventListener('click', startCertification);
      inner.appendChild(againBtn);
    } else if (allBossPassed() || DEBUG) {
      inner.appendChild(el(`<p class="module-card-desc">Alle ${LERN_MODULES.length} Bossquiz bestanden — die Abschlussprüfung ist freigeschaltet: ${CERT_PER_MODULE * LERN_MODULES.length} Fragen aus allen Modulen.</p>`));
      const startBtn = el('<button class="btn-primary">Zertifizierung starten</button>');
      startBtn.addEventListener('click', startCertification);
      inner.appendChild(startBtn);
    } else {
      inner.appendChild(el(`<p class="module-card-desc">Bestehe zuerst alle Bossquiz, um die Abschlussprüfung freizuschalten.</p>`));
      inner.appendChild(el(`<div class="module-progress-bar"><div class="module-progress-fill" style="width:${Math.round(bossCount / LERN_MODULES.length * 100)}%"></div></div>`));
      inner.appendChild(el(`<div class="module-progress-label">${bossCount} / ${LERN_MODULES.length} Bossquiz bestanden</div>`));
    }
    viewProgress.appendChild(certCard);

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
