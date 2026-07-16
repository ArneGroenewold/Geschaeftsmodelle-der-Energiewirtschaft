# Lern-App „Energiewirtschaft meistern" — Umsetzungsdokumentation (As-Built)

> **Stand:** Juli 2026 (Sessions 21–26) · **Status:** live, alle 8 Module + Bossquiz + Zertifizierung
> **Konzept:** `07_LERNAPP_KONZEPT.md` (Sollzustand) — dieses Dokument beschreibt den **Istzustand** und die Pflegeprozesse.
> **Live-URL:** https://arnegroenewold.github.io/Geschaeftsmodelle-der-Energiewirtschaft/lern-app/
> **Repository:** https://github.com/ArneGroenewold/Geschaeftsmodelle-der-Energiewirtschaft (Branch `master`, GitHub Pages aus Root)

---

## 1. Was ist umgesetzt (alle 8 Module)

- **Modul 1 „Das Spielfeld"**: 6 Einheiten über `L1-HANDEL` + `L1-MARKT` (Strombörse, Prop Trading, CO₂/HKN, BNetzA/Regulierung, Kapazitätsmarkt, lokale Flex-/H2-Marktdesign), 42 Items.
- **Modul 2 „Erzeugen & Speichern"**: 6 Einheiten über `L1-ERZ` (Merit Order, Regelenergie, EEG-Marktprämie, PPAs, Batteriespeicher, Offshore/Bürgerenergie), 43 Items.
- **Modul 3 „Die Netze"**: 6 Einheiten über `L1-UNB`/`L1-VNB`/`L1-GAS` (ARegV, Redispatch, Bilanzkreise, §14a & Messstellenbetrieb, Betreibermodelle/Rekommunalisierung, Gas- & H2-Kernnetz), 43 Items.
- **Modul 4 „Verkaufen"**: 7 Einheiten über `L1-VERTRIEB` + `L1-VERGLEICH`, 54 Items.
- **Modul 5 „Flexibilität ist das neue Öl"**: 5 Einheiten über `L1-AGG` + `L1-EMOB`(V2G) (virtuelles Kraftwerk, Demand Response, Route-to-Market/Tolling, V2G, Synthese „Wer kontrolliert die Flexibilität?"), 35 Items.
- **Modul 6 „Prosumer & neue Spieler"**: 6 Einheiten über `L1-PROSUMER` + `L1-EMOB` (PV-Eigenverbrauch, Balkonkraftwerk, Mieterstrom vs. GGV, Enpal-PV-Miete, Ladeinfrastruktur, THG-Quote), 43 Items.
- **Modul 7 „Wärme, H2 & Industrie"**: 5 Einheiten über `L1-WAERME` + `L1-CONTRACT` (Fernwärme, grüner Wasserstoff, Energieeinkauf, Effizienz-Contracting, Eigenversorgung), 35 Items.
- **Modul 8 „Das Ökosystem drumherum"**: 6 Einheiten über `L1-PROJ`/`L1-FINANZ`/`L1-BERATUNG`/`L1-RECHT`/`L1-VERSICH`/`L1-DIGITAL` (Projektentwicklung, Projektfinanzierung, Strategieberatung, Konzessionsrecht, Versicherung, Utility-OS/Kraken), 42 Items.

**Gesamt: alle 8 Module, 47 Einheiten, 337 Quiz-Items.** Home-Screen zeigt die Modul-Auswahl in numerischer Reihenfolge (1–8), **standardmäßig eingeklappt** (Akkordeon), mit prozentualem Fortschritt je Modul und einem Gesamtfortschritts-Balken oben. Transfer-Fragen verknüpfen die Module bewusst quer (z.B. Börse↔Vergleichsportal-Neutralität, VPP↔EEG-Marktprämie, Tolling↔PPA-Floor, Utility-OS↔Octopus-Retail, Eigenversorgung↔Stadtwerke-Querverbund).

**Bossquiz & Zertifizierung (Session 26):**
- **Bossquiz je Modul** (`quiz-session.js`): 10 gemischte, eher schwere Fragen aus allen Einheiten des Moduls, Bestehen ab **70%**. Freigeschaltet, sobald alle Einheiten des Moduls abgeschlossen sind (Zeile am Ende der aufgeklappten Modulkarte). Ergebnis (`passed`, `bestScore`, `attempts`) in `progressState.bossQuizzes[moduleId]`.
- **Zertifizierungsquiz** (Fortschritts-Tab): freigeschaltet nach **allen 8 bestandenen Bossquiz**. **40 Fragen, 5 je Modul** stratifiziert; Bestehen ab **75% gesamt UND kein Modul unter 50%**. Bei Bestehen: **druckbares Zertifikat** (Name-Eingabe, Datum, Gesamtscore, Modul-Aufschlüsselung, `GM_FAKTEN_STAND`) via Print-CSS; bei Nichtbestehen: Schwächenanalyse je Modul. Ein einmal erworbenes Zertifikat bleibt bei fehlgeschlagenen Wiederholungen erhalten.
- **Freischaltung testen:** `?debug=1` schaltet Boss- und Zertifizierungsquiz unabhängig vom Fortschritt frei.

**QA-Stand (Session 26):** Automatisierter Konsistenz-Check über alle 337 Items (im Browser ausführbar) — **0 strukturelle Fehler** (MC genau 1 richtige Option + Erklärungen, keine Distraktoren die zugleich Lösung sind, alle Rechnungslösungen numerisch mit Toleranz, Radar-/BMC-Steckbriefe existieren). **0 doppelte Fragen.** Bloom-Verteilung **54% K3/K4** (Konzept-Ziel ≥40% übererfüllt). 38 von 47 Transferfragen verweisen modulübergreifend.

**Längen-Bias-Fix (Session 27):** Zuvor war in **97% der 219 MC-Items die richtige Option die längste** → „nimm die längste Antwort" war eine funktionierende Rate-Strategie. Behoben, indem pro betroffenem Item **ein Distraktor plausibel elaboriert** wurde (bleibt klar falsch, adressiert eine echte Fehlvorstellung), sodass in ~2/3 der Items ein Distraktor die längste Option ist. Ergebnis: **„correct = längste" von 97% → 32%** (≈ Zufallsniveau bei 3 Optionen). Verifikations-Skript (je Modul `correct.length > max(distraktor.length)`) im Browser ausführbar. Wichtig: reines Kürzen der richtigen Optionen genügt nicht — der Zähler fällt erst, wenn ein Distraktor ≥ der richtigen Option wird.
- **Einheiten-Flow** nach Konzept §4: Hook → Kernidee (mit Geldfluss-Diagramm) → **Vertiefung** (voller Wiki-Steckbrief lesbar in der App, seit Iteration 2) → Worked Example (2 Schritte mit Zwischenfragen) → Retrieval (4–6 Fragen) → Transfer (1 Frage, referenziert frühere Einheit) → „Merke dir einen Satz" (Freitext + Musterantwort, unbewertet) → Zusammenfassung.
- **5 Quiz-Formate:** Multiple Choice, Lückentext (Tap-Wortbank), BMC-Puzzle (Bausteine + Distraktor-Steckbrief), Radar-Schätzen (6 Slider + Overlay), Fallbeispiel-Rechnung (Zahleneingabe mit Toleranz). Feedback-Regel eingehalten: **jede** Antwortoption hat eine Erklärung, nie nur richtig/falsch.
- **Szenario-Missionen (Session 28, Bloom K4):** Verbundene Fallstudien — der Lerner nimmt eine Rolle ein und trifft eine Kette strategischer Entscheidungen mit spürbaren Konsequenzen. Datengetrieben in `lern-szenarien.js` (`SZENARIO_MISSIONS`), gespielt von `szenario-engine.js` (Intro→Schritte→Debrief mit Dimensions-Balken + Ergebnisstufe). Bewusst **kein** eindeutig richtiges Item pro Schritt — Trade-offs verschieben mehrere Kennzahlen-Dimensionen; trainiert Synthese/Bewertung. Erste Mission: „Dein eigener Öko-Neo-Vertrieb" (6 Entscheidungen). Neue Missionen sind reine Redaktion (kein Engine-Code). Status in `progressState.szenarien`.
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
├── quiz-session.js       Wiederverwendbarer Multi-Item-Runner (Boss-/Zertifizierungsquiz), stratifizierte Auswahl
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

Erledigt: ~~Module 1–8~~ (S21–25), ~~Bossquiz + Zertifizierungsquiz + QA~~ (S26). **Damit sind das komplette Curriculum, die Modul-Abschlussprüfungen und die Zertifizierung aus dem Konzept umgesetzt.**

1. **Confidence-Rating** (Konzept §5): vor Auflösung „sicher / unsicher / geraten" — sicher+falsch = höchste Wiederholungspriorität. Kleiner Eingriff in `quiz-formats.js`/`leitner.js`.
2. **Disruptor-Modus + Szenario-Missionen** (K4-Formate, machen laut Konzept „am meisten Spaß").
3. **Kompetenz-Radar des Lerners** (Konzept §7): Ø-Leistung je Modul/Bloom-Stufe im 6-Achsen-Radar — die Daten (`bossQuizzes`, `certification.moduleScores`) liegen bereits vor.
4. **Stufe 4:** Einstufungstest, Rollen-Lernpfade entlang der Personas (`01_PERSONAS.md`), Teilen von Ergebnissen.
5. **Inhaltliche Pflege:** bei jedem Wiki-Fakten-Refresh die Checkliste aus §3 abarbeiten (337 Items über `steckbriefIds` rückverfolgbar). QA-Skript aus Session 26 (im Browser) vor jedem Release erneut laufen lassen.

**Muster für ein neues Modul** (aus Session 23, als Blaupause): (1) Modulobjekt in `LERN_MODULES` (`lern-data.js`) mit `unitIds`; (2) Einheiten in `LERN_UNITS` mit `vertiefungSteckbriefIds` auf die realen Steckbrief-IDs; (3) Quiz-Items in `LERN_QUIZ_ITEMS` (`lern-quiz-items.js`) nach Feld→Format-Mapping (§6), jede Einheit ~7–8 Items, mindestens ein Transfer-Item das auf ein anderes Modul verweist; (4) `sw.js` CACHE_NAME +1; (5) Browser-Test (Validierungs-Log, ein Durchlauf je neuem Format), commit + push.
