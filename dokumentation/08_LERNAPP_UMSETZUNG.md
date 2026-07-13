# Lern-App „Energiewirtschaft meistern" — Umsetzungsdokumentation (As-Built)

> **Stand:** Juli 2026 (Sessions 21–22) · **Status:** MVP live
> **Konzept:** `07_LERNAPP_KONZEPT.md` (Sollzustand) — dieses Dokument beschreibt den **Istzustand** und die Pflegeprozesse.
> **Live-URL:** https://arnegroenewold.github.io/Geschaeftsmodelle-der-Energiewirtschaft/lern-app/
> **Repository:** https://github.com/ArneGroenewold/Geschaeftsmodelle-der-Energiewirtschaft (Branch `master`, GitHub Pages aus Root)

---

## 1. Was ist umgesetzt (MVP + Iteration 2)

- **Modul 4 „Verkaufen"** komplett: 7 Lerneinheiten über die 11 Steckbriefe der Domänen `L1-VERTRIEB` und `L1-VERGLEICH`, 54 Quiz-Items.
- **Einheiten-Flow** nach Konzept §4: Hook → Kernidee (mit Geldfluss-Diagramm) → **Vertiefung** (voller Wiki-Steckbrief lesbar in der App, seit Iteration 2) → Worked Example (2 Schritte mit Zwischenfragen) → Retrieval (4–6 Fragen) → Transfer (1 Frage, referenziert frühere Einheit) → „Merke dir einen Satz" (Freitext + Musterantwort, unbewertet) → Zusammenfassung.
- **5 Quiz-Formate:** Multiple Choice, Lückentext (Tap-Wortbank), BMC-Puzzle (Bausteine + Distraktor-Steckbrief), Radar-Schätzen (6 Slider + Overlay), Fallbeispiel-Rechnung (Zahleneingabe mit Toleranz). Feedback-Regel eingehalten: **jede** Antwortoption hat eine Erklärung, nie nur richtig/falsch.
- **Leitner-Spaced-Repetition:** 5 Boxen, Intervalle 1/3/7/16/35 Tage; Karten entstehen lazy beim ersten Beantworten (Quiz-Items + automatisch abgeleitete Glossar-Karten). Täglicher Review-Stapel (max. 18 Karten), Streak-Zählung.
- **Fortschritts-Screen:** Einheiten, Streak, heute fällige Karten, XP; Export/Import des Fortschritts als JSON-Datei (Sicherheitsnetz gegen iOS-Speicherbereinigung).
- **PWA:** manifest.json, iOS-Meta-Tags, Icons (180/192/512/512-maskable), selbst gehostete Fonts, Service Worker mit Cache-first (Shell) und Network-first (data.js). Installierbar via Safari → „Zum Home-Bildschirm", offline lauffähig.

**Bewusst noch nicht umgesetzt** (Konzept §11, Stufen 2–4): Module 1–3 und 5–8, Bossquiz, Disruptor-Modus, Falschaussage-finden, Wer-bin-ich, Timeline-Ordnen, Szenario-Missionen, Confidence-Rating, Lernkarte, Kompetenz-Radar des Lerners, Zertifizierungs-Quiz, Update-Quiz, Einstufungstest, Rollen-Lernpfade (Personas), Dark Mode.

---

## 2. Architektur & Dateien

```
lern-app/
├── index.html            Shell; lädt ../app/data.js UNVERÄNDERT, dann die App-Skripte
├── lern.css              Design-Tokens (kopiert aus app/style.css :root) + mobile-first Komponenten
├── lern-data.js          LERN_MODULES, LERN_UNITS (Curriculum, redaktionell)
├── lern-quiz-items.js    LERN_QUIZ_ITEMS (54 Items) + Validierungs-Snippet (Konsole)
├── lern-engine.js        UnitPlayer-State-Machine (Screen-Sequenz je Einheit)
├── quiz-formats.js       5 Renderer/Grader (render(item, container, onGraded))
├── leitner.js            Scheduling, Due-Queue, Streak (window.LernLeitner)
├── storage.js            localStorage-Wrapper, Export/Import (window.LernStorage)
├── main.js               App-Shell: Navigation, Unit-Start, Review-Session, Fortschritt, SW-Registrierung
├── shared/
│   ├── render-kit.js     PORTIERTE Kopien aus app/app.js: buildBMC, buildRadarSVG (Dual-Overlay),
│   │                     Glossar-Highlight/-Popover, getSteckbrief(id) — siehe Abschnitt 4!
│   └── flow-diagram.js   Geldfluss-Diagramm-Renderer (Box+Pfeil-SVG)
├── manifest.json / sw.js PWA; sw.js enthält CACHE_NAME (Release-Hebel, siehe Abschnitt 5)
└── assets/{fonts,icons}/ Selbst gehostete woff2 + PNG-Icons
```

Kein Build, kein Framework, kein npm — gleiche Philosophie wie das Wiki. Persistenz: zwei localStorage-Keys (`lernapp.leitner.v1`, `lernapp.progress.v1`), jeweils mit `schemaVersion`.

**Wichtig (Deployment-Kopplung):** `lern-app/` muss ein Geschwisterordner von `app/` bleiben — `index.html` lädt `../app/data.js` relativ. GitHub Pages deployt den gesamten Repo-Root, damit ist das automatisch erfüllt.

---

## 3. Synchronisation Wiki ↔ App (die zentrale Garantie)

**Prinzip „Ein Fakt, eine Quelle" (Konzept §9):** Die App enthält **keine Kopie** der Wiki-Inhalte. Sie lädt `app/data.js` zur Laufzeit und liest daraus: Steckbrief-Texte für die Vertiefungs-Screens, BMC-Felder für das BMC-Puzzle, `radar`-Werte für Radar-Schätzen, `GM_GLOSSARY` für Glossar-Karten und Popover. Ändert sich das Wiki, ändert sich die App **automatisch mit** — der Service Worker holt `data.js` bewusst network-first.

**Was redaktionell in der App liegt** (und damit driften KANN): Hooks, Kernideen, Worked-Example-Texte, Quizfragen samt Erklärungen, Musterantworten. Dafür gibt es zwei Schutzmechanismen:

1. **Traceability:** Jedes Quiz-Item trägt `steckbriefIds` (und ggf. `quellenIds`). Beim Fakten-Refresh des Wikis lassen sich alle betroffenen Items finden — in der Browser-Konsole z.B.:
   ```js
   Object.values(LERN_QUIZ_ITEMS).filter(i => i.steckbriefIds.includes("L3-VERTRIEB-NEO-01"))
   ```
2. **Laufzeit-Validierung:** `lern-quiz-items.js` prüft bei jedem App-Start, dass alle `unitId`-, `questionId`- und `steckbriefId`-Referenzen auflösen, und loggt das Ergebnis in die Konsole (`lern-data.js Validierung OK: …`). Wird ein Steckbrief im Wiki umbenannt/gelöscht, schlägt das sofort sichtbar fehl.

**Checkliste bei jedem Wiki-Fakten-Refresh** (Ergänzung zum halbjährlichen Prozess aus `00_PROJEKTKONTEXT.md`):
1. Geänderte Steckbrief-IDs notieren.
2. Betroffene Quiz-Items per Konsolen-Filter (oben) finden und Zahlen/Aussagen in `data`-Feldern gegenprüfen — v.a. Fallbeispiel-Rechnungen (harte Zahlen in `loesung`/`rechenweg`) und Lückentexte.
3. App lokal öffnen, Validierungs-Log prüfen.
4. `sw.js` → `CACHE_NAME` hochzählen, committen, pushen.

---

## 4. Bekannte, bewusste Duplikation: `shared/render-kit.js`

`app/app.js` ist eine geschlossene IIFE — ihre Funktionen sind nicht importierbar, und das Wiki soll unangetastet bleiben. Deshalb enthält `shared/render-kit.js` **portierte Kopien** von `buildBMC`, `buildRadarSVG` (erweitert um Zwei-Serien-Overlay) und der Glossar-Logik (~150 Zeilen). **Konsequenz:** Ändert sich die Render-Logik im Wiki (nicht die Daten!), muss `render-kit.js` manuell nachgezogen werden. Das betrifft nur Logik-Änderungen an diesen drei Stellen — Datenänderungen in `data.js` wirken automatisch.

---

## 5. Release-Prozess (jede Änderung an der App)

1. Dateien in `lern-app/` ändern (ausschließlich über Datei-Tools, Wiki-Konvention gilt auch hier).
2. Lokal testen: statischen Server im Projektordner starten (z.B. `python -m http.server` oder VS-Code Live Server — Service Worker brauchen http(s), `file://` genügt nicht), `http://localhost:PORT/lern-app/` öffnen, Konsolen-Validierung + betroffene Flows prüfen.
3. **`sw.js` → `CACHE_NAME` hochzählen** (`lernapp-shell-v2` → `v3` …). Das ist der gesamte Cache-Busting-Mechanismus — ohne Bump liefern installierte PWAs die alte Version aus dem Cache.
4. `git commit` + `git push` → GitHub Pages deployt automatisch (~1 Minute).
5. **Update auf dem iPhone:** App mit Internetverbindung öffnen (neuer SW installiert sich im Hintergrund), schließen, erneut öffnen → neue Version aktiv.

Versionierung läuft über **Git** (Commits/History), nicht über ZIP-Stände wie beim Wiki — das Repo ist die Wahrheit. Die Wiki-ZIP-Konvention bleibt für das Wiki bestehen.

---

## 6. Datenstrukturen (Referenz für Content-Erweiterung)

**Lerneinheit** (`LERN_UNITS`): `{ id, moduleId, title, primarySteckbriefId, vertiefungSteckbriefIds[], hook:{text}, kernidee:{text, geldfluss:{nodes,edges}}, workedExample:{steckbriefId, steps:[{text, questionId}]}, retrievalItemIds[], transferItemId, merkeDirEinenSatz:{prompt, musterantwort} }`

**Quiz-Item** (`LERN_QUIZ_ITEMS`, Registry nach id): `{ id, unitId, format, bloom:"K1".."K4", steckbriefIds[], quellenIds[], data:{…} }` — `data` je Format:
- `mc`: `{ frage, optionen:[{text, korrekt, erklaerung}] }` (Optionen werden zur Laufzeit gemischt)
- `lueckentext`: `{ text mit {{key}}, luecken:{key:{loesungen[], erklaerung}}, distraktoren[] }`
- `bmc-puzzle`: `{ steckbriefId, distraktorSteckbriefId }` (Inhalte kommen live aus data.js)
- `radar-schaetzen`: `{ steckbriefId, erklaerungenProDimension:{6 Achsen} }` (Ist-Werte live aus `item.radar`)
- `fallbeispiel-rechnung`: `{ szenario, eingabefelder:[{key,label,einheit}], loesung:{key:{wert,toleranz}}, rechenweg[] }`

**Autorenleitfaden** (aus Konzept §9 + Praxis der Sessions 21/22): Fragen pro Modul mit Claude aus den Steckbrief-JSONs generieren, Feld-Mapping: `fallbeispiel`→Rechnung, `definition`/`erloesmodell`→Lückentext, `herausforderungen`/`angreifbarkeit`→MC, `bmc_*`→Puzzle, `radar`→Schätzen. **Qualitätsregeln aus dem Nutzerfeedback (Session 22):** (1) Worked-Example-Texte dürfen die Antwort der Zwischenfrage nicht vorwegnehmen; (2) keine Giveaway-Distraktoren („ist gesetzlich verboten") — Distraktoren müssen plausible Fehlannahmen sein, deren Erklärung selbst Lernwert hat; (3) mindestens 40% der Items auf K3/K4.

---

## 7. Verifikations-Checkliste (nach größeren Änderungen)

- [ ] Konsole: `lern-data.js Validierung OK` (keine Waisen-Referenzen), keine Laufzeitfehler
- [ ] Eine Einheit komplett durchspielen (alle Screen-Typen)
- [ ] Ein Review mit `?debug=1` → „Reviews jetzt fällig stellen" durchspielen
- [ ] Fortschritt überlebt Reload (localStorage)
- [ ] Offline-Test: DevTools „Offline" bzw. Flugmodus nach zweimaligem Online-Laden
- [ ] iPhone: Update angekommen (zweimal öffnen), Standalone-Darstellung intakt

---

## 8. Roadmap (Konzept §11, priorisierter Vorschlag)

1. **Modul 1 „Das Spielfeld"** (Strommarkt-Grundlagen: Merit Order, Börse, Bilanzkreise) — laut Konzept das Fundament, ohne das andere Module in der Tiefe schwer verständlich sind; alle weiteren Module setzen es voraus.
2. **Bossquiz-Mechanik** (schwerer, mischt alle Einheiten eines Moduls; Freischalt-Logik) — ab 2 Modulen sinnvoll.
3. **Weitere Module** in Konzept-Reihenfolge (2 Erzeugen & Speichern, 5 Flexibilität, 6 Prosumer …) — je Modul: Einheiten-Zuschnitt, ~8–10 Items/Einheit nach Autorenleitfaden.
4. **Disruptor-Modus + Szenario-Missionen** (K4-Formate, machen laut Konzept „am meisten Spaß").
5. **Stufe 3:** Zertifizierungs-Quiz (Pool ≥200 Fragen nötig → erst nach mehreren Modulen), Confidence-Rating.
6. **Stufe 4:** Einstufungstest, Rollen-Lernpfade entlang der Personas (`01_PERSONAS.md`), Kollegen-Verteilung.
