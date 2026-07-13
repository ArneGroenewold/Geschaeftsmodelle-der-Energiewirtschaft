// ══════════════════════════════════════════════════════════
// storage.js — localStorage-Wrapper für Leitner- und Fortschritts-State
// Zwei getrennte Keys (klein, unabhängig migrierbar), siehe 07_LERNAPP_KONZEPT.md §10.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  const LEITNER_KEY = 'lernapp.leitner.v1';
  const PROGRESS_KEY = 'lernapp.progress.v1';

  function emptyLeitnerState() {
    return { schemaVersion: 1, cards: {}, streak: { count: 0, lastReviewDate: null } };
  }
  function emptyProgressState() {
    return { schemaVersion: 1, units: {}, xp: 0 };
  }

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback();
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.schemaVersion !== 1) return fallback();
      return parsed;
    } catch (e) {
      console.warn('storage: konnte', key, 'nicht lesen, verwende leeren Zustand', e);
      return fallback();
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('storage: konnte', key, 'nicht schreiben (voller Speicher?)', e);
    }
  }

  const Storage = {
    loadLeitner() { return readJSON(LEITNER_KEY, emptyLeitnerState); },
    saveLeitner(state) { writeJSON(LEITNER_KEY, state); },
    loadProgress() { return readJSON(PROGRESS_KEY, emptyProgressState); },
    saveProgress(state) { writeJSON(PROGRESS_KEY, state); },

    // Fortschritt exportieren/importieren als eine JSON-Datei — Sicherheitsnetz
    // gegen iOS-Speicherbereinigung bei Speicherdruck (siehe Konzept §10, Plan §5).
    exportAll() {
      return {
        exportedAt: new Date().toISOString(),
        leitner: this.loadLeitner(),
        progress: this.loadProgress()
      };
    },
    importAll(data) {
      if (!data || !data.leitner || !data.progress) throw new Error('Ungültige Backup-Datei');
      this.saveLeitner(data.leitner);
      this.saveProgress(data.progress);
    },

    requestPersistence() {
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist().catch(() => {});
      }
    }
  };

  window.LernStorage = Storage;
})();
