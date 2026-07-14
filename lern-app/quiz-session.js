// ══════════════════════════════════════════════════════════
// quiz-session.js — wiederverwendbarer Runner für zusammenhängende
// Quiz-Sessions (Bossquiz, Zertifizierungsquiz). Spielt eine Liste von
// Quiz-Item-IDs nacheinander ab, sammelt die Ergebnisse und ruft am
// Ende onComplete auf. Nutzt quiz-formats.js für Rendering/Grading.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Alle bewertbaren Quiz-Item-IDs eines Moduls (über seine Einheiten).
  function moduleItemIds(moduleId) {
    const mod = LERN_MODULES.find((m) => m.id === moduleId);
    if (!mod) return [];
    const unitSet = new Set(mod.unitIds);
    return Object.values(LERN_QUIZ_ITEMS)
      .filter((i) => unitSet.has(i.unitId))
      .map((i) => i.id);
  }

  // Wählt aus einem Pool eine Anzahl Items, bevorzugt Format- und Bloom-Vielfalt
  // sowie höhere Bloom-Stufen (K3/K4) für "schwerere" Quizze.
  function pickVaried(itemIds, count, { preferHardBloom = true } = {}) {
    const items = itemIds.map((id) => LERN_QUIZ_ITEMS[id]).filter(Boolean);
    const shuffled = shuffle(items);
    // Sortierung: erst nach Bloom (K4>K3>K2>K1) falls gewünscht, sonst zufällig.
    const bloomRank = { K4: 4, K3: 3, K2: 2, K1: 1 };
    if (preferHardBloom) {
      shuffled.sort((a, b) => (bloomRank[b.bloom] || 0) - (bloomRank[a.bloom] || 0));
    }
    const picked = shuffled.slice(0, count);
    return shuffle(picked).map((i) => i.id); // final mischen für Format-/Bloom-Interleaving
  }

  // Baut ein stratifiziertes Zertifizierungs-Set: je Modul `perModule` Items.
  function buildCertificationSet(perModule) {
    const set = [];
    LERN_MODULES.forEach((mod) => {
      const pool = moduleItemIds(mod.id);
      set.push(...pickVaried(pool, Math.min(perModule, pool.length), { preferHardBloom: false }));
    });
    return shuffle(set);
  }

  // Baut ein Bossquiz-Set für ein Modul.
  function buildBossSet(moduleId, count) {
    const pool = moduleItemIds(moduleId);
    return pickVaried(pool, Math.min(count, pool.length), { preferHardBloom: true });
  }

  // Spielt die Session ab. opts:
  //   { container, itemIds, onAnswer(item,result), onComplete({correct,total,perModule,answers}) }
  function run(opts) {
    const { container, itemIds } = opts;
    const answers = []; // {itemId, moduleId, correct}
    let index = 0;

    function moduleOfItem(item) {
      const unit = LERN_UNITS.find((u) => u.id === item.unitId);
      return unit ? unit.moduleId : null;
    }

    function renderProgress() {
      const bar = el('<div class="player-progress"></div>');
      for (let i = 0; i < itemIds.length; i++) {
        const seg = el('<div class="player-progress-seg"></div>');
        if (i < index) seg.classList.add('filled');
        bar.appendChild(seg);
      }
      return bar;
    }

    function next() { index++; renderCurrent(); }

    function renderCurrent() {
      window.scrollTo(0, 0);
      container.innerHTML = '';
      if (index >= itemIds.length) { finish(); return; }
      container.appendChild(renderProgress());
      container.appendChild(el(`<div class="player-phase-label">Frage ${index + 1} / ${itemIds.length}</div>`));
      const item = LERN_QUIZ_ITEMS[itemIds[index]];
      const card = el('<div class="card"></div>');
      container.appendChild(card);
      window.QuizFormats.render(item, card, (result) => {
        answers.push({ itemId: item.id, moduleId: moduleOfItem(item), correct: !!result.correct });
        if (opts.onAnswer) opts.onAnswer(item, result);
        const btn = el('<button class="btn-primary">Weiter</button>');
        btn.addEventListener('click', next);
        container.appendChild(btn);
      });
    }

    function finish() {
      const correct = answers.filter((a) => a.correct).length;
      const perModule = {};
      answers.forEach((a) => {
        if (!a.moduleId) return;
        if (!perModule[a.moduleId]) perModule[a.moduleId] = { correct: 0, total: 0 };
        perModule[a.moduleId].total += 1;
        if (a.correct) perModule[a.moduleId].correct += 1;
      });
      opts.onComplete({ correct, total: answers.length, perModule, answers });
    }

    renderCurrent();
  }

  window.QuizSession = { run, moduleItemIds, buildBossSet, buildCertificationSet };
})();
