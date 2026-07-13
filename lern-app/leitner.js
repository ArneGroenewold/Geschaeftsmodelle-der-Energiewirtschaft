// ══════════════════════════════════════════════════════════
// leitner.js — Spaced-Repetition-Engine (Leitner, 5 Boxen)
// Intervalle 1/3/7/16/35 Tage, siehe 07_LERNAPP_KONZEPT.md §6.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  const INTERVALS = [null, 1, 3, 7, 16, 35]; // Index = Box (1-5), Box 0 ungenutzt
  const MAX_BOX = 5;
  const SESSION_CAP = 18;

  // Alles in UTC gerechnet, um lokale Zeitzonen-Verschiebungen beim Runden
  // auf Kalendertage zu vermeiden (dateISO + 'T00:00:00' würde als LOKALE
  // Zeit geparst, aber toISOString() gibt UTC zurück — je nach Zeitzone
  // verliert/gewinnt man dadurch einen Tag).
  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }
  function addDaysISO(dateISO, days) {
    const [y, m, d] = dateISO.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() + days);
    return dt.toISOString().slice(0, 10);
  }

  function getCard(state, cardId) {
    return state.cards[cardId] || null;
  }

  function ensureCard(state, cardId) {
    if (!state.cards[cardId]) {
      state.cards[cardId] = { box: 1, dueDate: todayISO(), lastReviewedAt: null, reps: 0, lapses: 0 };
    }
    return state.cards[cardId];
  }

  // Ergebnis eines Formats (auch nicht-binäre wie Lückentext/Radar) wird VOR
  // diesem Aufruf auf ein boolean reduziert (siehe quiz-formats.js `toLeitnerBoolean`).
  function recordResult(state, cardId, correct) {
    const card = ensureCard(state, cardId);
    const today = todayISO();
    card.reps += 1;
    card.lastReviewedAt = new Date().toISOString();
    if (correct) {
      card.box = Math.min(card.box + 1, MAX_BOX);
    } else {
      card.box = 1;
      card.lapses += 1;
    }
    card.dueDate = addDaysISO(today, INTERVALS[card.box]);

    // Streak: ein Review-Tag zählt einmal, unabhängig von der Kartenzahl.
    if (state.streak.lastReviewDate !== today) {
      const yesterday = addDaysISO(today, -1);
      state.streak.count = state.streak.lastReviewDate === yesterday ? state.streak.count + 1 : 1;
      state.streak.lastReviewDate = today;
    }
    return card;
  }

  function buildDueQueue(state, { cap = SESSION_CAP, forceAllDue = false } = {}) {
    const today = todayISO();
    const due = Object.entries(state.cards)
      .filter(([, c]) => forceAllDue || c.dueDate <= today)
      .sort((a, b) => (a[1].box - b[1].box) || (a[1].dueDate < b[1].dueDate ? -1 : 1))
      .map(([id]) => id);
    return due.slice(0, cap);
  }

  function dueCountToday(state) {
    const today = todayISO();
    return Object.values(state.cards).filter((c) => c.dueDate <= today).length;
  }

  // Debug-Affordanz (nur mit ?debug=1): alle Fälligkeitsdaten auf heute zurückdatieren,
  // damit die Review-Flow manuell getestet werden kann, ohne einen echten Tag zu warten.
  function forceAllDueNow(state) {
    const today = todayISO();
    Object.values(state.cards).forEach((c) => { c.dueDate = today; });
  }

  window.LernLeitner = {
    INTERVALS, MAX_BOX, SESSION_CAP,
    todayISO, addDaysISO,
    getCard, ensureCard, recordResult,
    buildDueQueue, dueCountToday, forceAllDueNow
  };
})();
