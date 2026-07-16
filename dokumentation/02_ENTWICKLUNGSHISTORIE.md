# Entwicklungs- & Entscheidungshistorie

> **Zweck:** Festhalten, welche inhaltlichen und gestalterischen Entscheidungen getroffen wurden und warum. Verhindert, dass in späteren Sessions bereits verworfene Wege erneut beschritten werden.

---

## Chronologie der Sessions

### Session 1 — Konzeption & Grundgerüst (v1.0)
- Ausgangsidee: Geschäftsmodell-Wiki für die deutsche Energiewirtschaft, mit besonderem Fokus auf **Lieferanten** (insb. Differenzierung Neolieferanten wie Tibber/Fünf Grad vs. Großversorger), Netzbetreiber, Erzeuger, Handel.
- **Strukturentscheidung:** Zwei-Achsen-Logik — Wertschöpfungsstufe × Geschäftsmodelltyp.
- Standardisierter Steckbrief eingeführt (Kernleistung, Erlösmodell, Regulierung, Kundensegment, Differenzierung, Enabler, Wettbewerb).
- Gleiche technische Architektur wie frühere Wiki-Projekte (index/style/app/data).

### Session 2 — Analytische Features (v1.1)
- Radar-Charts (6 Dimensionen), Vergleichsmatrix, Akteursgraph hinzugefügt.
- Erlöstyp-Klassifikation eingeführt (Reguliert/Merchant/Fee-based/Subscription).

### Session 3 — Erweiterung & Werkzeuge (v1.2)
- Neue Domänen: Projektentwicklung & EPC, Energiefinanzierung, eMobility.
- Regulierungs-Timeline (2021–2032) und Export (Markdown/CSV) ergänzt.

### Session 4 — Inhaltliche Tiefe (v1.3)
- **Wichtige Entscheidung:** Jeder Steckbrief erhält drei Tiefenfelder: *Wertschöpfungslogik*, *Strategische Herausforderungen*, *Markttrends & Ausblick*. Das hebt das Wiki von einer Übersicht zu einem Analyseinstrument.

### Session 5 — Vollständigkeit Dienstleistungen (v1.4)
- Neue Domänen: Vergleichsplattformen (Verivox/Check24 — explizit gewünscht), Beratung/Consulting (inkl. eigenes Segment Capgemini Invent), Energierecht (BBH, §46-Konzessionsrecht), Versicherung (Anlagen + Cyber/KRITIS), Contracting (Industrie).

### Session 6 — Markt & Prosumer (v1.5)
- Neue Domänen: Prosumer & dezentrale Versorgung (PV, Balkonkraftwerk, Mieterstrom §42a, GGV §42b, Enpal/1KOMMA5°, Energy Communities), Energiemärkte & Market Design (BNetzA, ENTSO-E, Kapazitätsmechanismus, lokale Flexmärkte, H2-Marktdesign).

### Session 7 — Kollegentauglichkeit (v1.6)
- Methodik-/Onboarding-Seite (erklärt Struktur, Felder, Erlöstypen, Radar-Dimensionen, Quellen).
- Volltext-Suche auf alle Felder erweitert (vorher fehlten die Tiefenfelder).
- Print-CSS für saubere Steckbrief-Ausdrucke.

### Session 8 — Professionalisierung / Projektdoku
- Anlage des Projektordners mit Kontext-, Personas-, Historie-, BMC- und README-Dateien.

### Session 9 — Kritisches Challenging & Lückenschluss VNB (v1.7, diese Session)
- **Auslöser:** Auftraggeber wollte den Inhalt "weiter gechallenged" sehen, vermisste Betreibermodelle für Verteilnetzbetreiber und wünschte mittelfristig eine klare Herausarbeitung, wo Geschäftsmodelle angreifbar sind oder bereits angegriffen werden.
- **Neue Capability-Gruppe `L2-VNB-BETREIB`** ("Betreiber- & Eigentumsmodelle") in der Domäne Verteilnetz: 5 neue Steckbriefe zu Rekommunalisierung (Hamburg 2013/2014, Berlin 2019–2021/BEN), gemischtwirtschaftlichen Modellen (Thüga/Singen), Konzessionsmodellen ohne Eigentumsübergang und Mehr-Kommunen-Trägerschaften (Westfalen Weser Netz). Alle Fakten vorab recherchegestützt verifiziert.
- **Neue Analyse-Persona B6 — Disruptor/Markteindringling** in `01_PERSONAS.md`: ergänzt die bestehende Kritiker-Persona (B2) um eine explizit angriffsorientierte Perspektive ("wer greift das Modell bereits an, mit welchem Hebel?") statt nur Schwächen zu benennen.
- **Neues Pilotfeld `angreifbarkeit`** im Steckbrief-Schema (dokumentiert in `03_DATENMODELL_TECHNIK.md`): bewusst als Pilot auf 5 exponierte Steckbriefe begrenzt (klassischer Vollversorger, CPO Ladeinfrastruktur, Mieterstrom, VPP, Vergleichsplattformen) statt sofortigem Rollout auf alle 71 Steckbriefe — Aufwand/Qualität gegen Vollständigkeit bewusst abgewogen, Ausweitung ist eine spätere Entscheidung.
- App.js (Rendering, Suche, Markdown-Export) und style.css (eigene Akzentfarbe/Hervorhebung) um das neue Feld erweitert.
- Kennzahlen v1.7: 19 Domänen, 32 Capability-Gruppen, 71 Steckbriefe, 223 Akteure.

### Session 10 — Business Model Canvas Pilot (v1.8, diese Session)
- **Auslöser:** Auftraggeber wollte einen Piloten für den seit `04_BUSINESS_MODEL_CANVAS.md` (Session 5/6) konzeptionell vorgeschlagenen BMC sehen, plus eine Einschätzung, ob sich das in diesem Kontext lohnt.
- Umgesetzt: Variante A („pragmatischer Einstieg") — Toggle „📋 Canvas" im Detail-View je Steckbrief, `buildBMC()` mappt rein algorithmisch aus bestehenden Feldern (keine neuen Pflichtfelder, kein Mehraufwand pro Steckbrief). Funktioniert deshalb sofort für alle 71 Steckbriefe.
- Heuristische Stichwortsuche für Kanäle/Kundenbeziehungen/Kostenstruktur (im Schema nicht explizit erfasst); ohne Treffer wird die Datenlücke rot markiert statt verschwiegen.
- Qualitätscheck an 5 strukturell unterschiedlichen Steckbriefen (Tibber, Vollversorger, VPP, Mieterstrom, BNetzA) deckte zwei substanzielle Schwächen auf, dokumentiert in `04_BUSINESS_MODEL_CANVAS.md` Abschnitt 6: (1) Feld „Schlüsselpartner" aus `akteure` ist eher „vergleichbare Marktakteure"/Wettbewerber als echte Partner; (2) der BMC-Rahmen passt konzeptionell nicht auf institutionelle Steckbriefe (z.B. BNetzA) — wird aber unauffällig trotzdem befüllt. Im Zuge dessen ein Dedup-Fix ergänzt (derselbe Satz landete teils in zwei Feldern gleichzeitig).
- Bewusst nicht gemacht: keine neuen Schema-Felder, kein Rollout-Zwang — Canvas ist optional zuschaltbar, Fließtext bleibt Standardansicht.
- Methodik-Seite um Erklärung des Canvas-Piloten und das fehlende Feld „Angreifbarkeit" in der Feldübersicht ergänzt (Lücke aus Session 9 nachgezogen).

### Session 11 — Typ-Markierung Unternehmen/Institution (v1.9, diese Session)
- **Auslöser:** Direkte Umsetzung einer der beiden Empfehlungen aus der Session-10-Einschätzung (Auftraggeber bat um direkte Umsetzung, ohne Rückfrage).
- Neues optionales Feld `istUnternehmen: false` an den beiden Steckbriefen, die im Qualitätscheck als klare institutionelle Stresstests identifiziert wurden: `L3-MARKT-BNETZA-01` (BNetzA) und `L3-MARKT-BNETZA-02` (ENTSO-E/regelleistung.net).
- app.js: Canvas-Button wird für diese Steckbriefe nicht mehr gerendert (auch der BMC-Grid-Container entfällt vollständig), stattdessen erscheint ein erklärender Hinweis-Tag „📋 Canvas n/a".
- Bewusste Abgrenzung: Die Marktdesign-Steckbriefe (Kapazitätsmechanismus, lokale Flexmärkte, H2-Marktdesign) wurden NICHT markiert — sie sind Grenzfälle (Mechanismen mit echten Unternehmen als Teilnehmern), keine eindeutigen Institutionen.
- Die zweite, deutlich aufwändigere Empfehlung aus Session 10 (Nachpflege der 3 BMC-Lückenfelder für alle unternehmensförmigen Steckbriefe) ist bewusst NICHT in dieser Session umgesetzt — das wäre ein inhaltlicher Schreibaufwand für bis zu ~65 Steckbriefe und sollte wie frühere große Inhaltsaufgaben erst im Umfang abgestimmt werden (Pilot vs. Vollrollout).

### Session 12 — BMC-Vollrollout, Faktencheck & Glossar (v2.0, diese Session)
- **Auslöser:** Direkte Umsetzung der zweiten, in Session 11 bewusst zurückgestellten Empfehlung ("Gerne direkt vollständig umsetzen"), gefolgt von kritischem Nutzerfeedback zu Detailtiefe, Abkürzungen und Faktentreue.
- **BMC-Vollrollout:** Die drei Lückenfelder `bmc_kanaele`, `bmc_kundenbeziehung`, `bmc_kostenstruktur` für alle 69 unternehmensförmigen Steckbriefe redaktionell ergänzt (zuvor nur heuristisch aus Fließtext geraten). Die 2 institutionellen Steckbriefe (BNetzA, ENTSO-E) bleiben bewusst ausgenommen. `buildBMC()` in app.js bevorzugt jetzt die expliziten Felder, die Stichwort-Heuristik bleibt Fallback.
- **Faktencheck auf Nutzerhinweis:** Auftraggeber hinterfragte gezielt die Schreibweise „EON" und die Zuordnung von **ista**. Recherche ergab: „E.ON" (mit Punkten) war bereits korrekt, keine Änderung nötig. ista war jedoch tatsächlich falsch zugeordnet — gelistet als Akteur bei Wärmepumpen-Contracting (`L3-DIGITAL-PLATTFORM-02`, korrigiert zu Stiebel Eltron) und bei Energieeinkaufs-Optimierung (`L3-CONTRACT-MGMT-01`, korrigiert zu enviaM), aber fehlend beim tatsächlich richtigen Geschäftsmodell Messstellenbetrieb iMSB/gMSB (`L3-VNB-KLASSISCH-02`, dort ergänzt). Bestätigt damit den Nutzerhinweis vollständig — ista's Kerngeschäft ist Submetering/Heizkostenabrechnung und zunehmend wettbewerblicher Messstellenbetrieb, nicht Wärmepumpen oder Energieeinkauf.
- **Glossar-Feature:** Neues `GM_GLOSSARY`-Array (~106 Begriffe, 8 Themenkategorien: Recht & Regulierung DE, EU-Recht, Institutionen & Märkte, Markt- & Regelenergie, Netz & Technik, Sektorkopplung & Mobilität, Finanzierung & Verträge, Sonstige Begriffe). Umgesetzt als (1) eigene durchsuchbare/filterbare Glossar-Seite und (2) automatische Inline-Hervorhebung aller Glossarbegriffe im Fließtext (Steckbriefe, BMC-Grid, Timeline) mit Klick-Popover, das die Definition direkt an der Stelle zeigt — Auslöser war der Hinweis, dass das Wiki für junge wie erfahrene Kollegen gleichermaßen funktionieren soll und viele Abkürzungen bislang unerklärt blieben.
- **Offene Frage an den Auftraggeber, nicht in dieser Session umgesetzt:** Ob Fallbeispiele/Case Studies pro Geschäftsmodell ergänzt werden sollen. Einschätzung: sinnvoll als gezielter Pilot an einigen wenigen, besonders aussagekräftigen Steckbriefen (analog zum Vorgehen bei „Angreifbarkeit" in Session 9 und dem BMC-Piloten in Session 10) statt sofortigem Vollrollout auf alle 71 Steckbriefe — Umfang und Auswahl sollten erst abgestimmt werden, bevor Schreibaufwand entsteht.
- Kennzahlen v2.0: unverändert 19 Domänen, 32 Capability-Gruppen, 71 Steckbriefe, 223 Akteure; neu ~106 Glossarbegriffe.

### Session 13 — Praxisbeispiele / Deep Dive (v2.1, diese Session)
- **Auslöser:** Direkte Beauftragung nach meiner Einschätzung aus Session 12 ("Mach gerne erstmal 6-8 Steckbriefe"), mit zwei wichtigen Präzisierungen des Auftraggebers gegenüber meinem ursprünglichen Vorschlag: (1) Die Fallbeispiele sollen ein echter **Deep Dive** sein — konkret und praxisnah, nicht die knappe 2-3-Satz-Variante, die ich vorgeschlagen hatte; (2) das Wiki soll insgesamt **wie ein Lehrbuch wirken, das auch Spaß macht** — eine explizite Vorgabe zu Ton und Erlebnis, nicht nur zu Inhalt.
- **Neues Feld `fallbeispiel`** (Schema in `03_DATENMODELL_TECHNIK.md`) an 8 bewusst diversen Steckbriefen aus 8 verschiedenen Domänen ergänzt: Tibber (`L3-VERTRIEB-NEO-01`), Next Kraftwerke (`L3-AGG-VPP-01`), WEMAG-Batteriespeicher Schwerin (`L3-ERZ-SPEICHER-01`), Stromnetz Hamburg/Rekommunalisierung (`L3-VNB-BETREIB-05`), Check24 (`L3-VERGL-B2C-01`), Ionity (`L3-EMOB-CPO-01`), EWS Schönau (`L3-ERZ-EE-04`), 50Hertz/Redispatch (`L3-UNB-NETZ-02`).
- **Recherchedisziplin:** Anders als bei den übrigen Tiefenfeldern wurde hier nicht aus Bestandswissen synthetisiert, sondern jedes Fallbeispiel vorab per Web-Recherche gegen Primär-/Wikipedia-Quellen verifiziert (Gründungsjahre, Finanzierungsrunden, Kennzahlen, Gerichtsurteile, Investitionssummen) — eine direkte Konsequenz aus dem ista-Vorfall in Session 12, der gezeigt hatte, dass unverifizierte Fakten in diesem Wiki nicht akzeptabel sind, sobald sie konkret genug zum Nachprüfen sind.
- **Eigenes Rendering statt Wiederverwendung des `angreifbarkeit`-Stils:** Neue CSS-Klasse `item-deep-section--fallbeispiel` mit "Deep Dive"-Badge und Lehrbuch-Sidebar-Optik (Farbverlauf, abgesetzte Box statt Fließtext-Absatz) — bewusste Umsetzung der "Spaß"-Vorgabe durch visuelle Differenzierung, nicht nur durch Text.
- Vollständig in Suche, Markdown-Export und Methodik-Feldübersicht integriert (anders als der ältere `angreifbarkeit`-Pilot, der laut `03_DATENMODELL_TECHNIK.md` an dieser Stelle noch eine offene Lücke hatte).
- **Bewusst nicht umgesetzt:** Vollrollout auf alle 71 Steckbriefe — der Recherche-Aufwand pro Fallbeispiel ist ungleich höher als bei den anderen Feldern, daher bleibt es vorerst bei den 8 Pilot-Steckbriefen, analog zum Vorgehen bei `angreifbarkeit` (Session 9) und dem BMC-Piloten (Session 10).
- Kennzahlen v2.1: unverändert 19 Domänen, 32 Capability-Gruppen, 71 Steckbriefe, 223 Akteure, ~106 Glossarbegriffe; neu 8 Praxisbeispiele.
- **Korrekturschleife (gleiche Session):** Der erste Entwurf der 8 Praxisbeispiele geriet trotz korrekter Faktenlage inhaltlich zu einer Unternehmenschronologie (Gründungsjahr → Finanzierungsrunden → Meilensteine) — der Auftraggeber stoppte das explizit: "Inhaltlich ist es eher eine Unternehmenshistorie ... keine Zusammenfassung von Wikipedia." Alle 8 Texte wurden daraufhin umgeschrieben: weg von Chronologie, hin zu einem konkreten Rechenbeispiel/Ablauf, der die Erlös- oder Kostenmechanik des Geschäftsmodells Schritt für Schritt zeigt (z.B. ein einzelner Ladevorgang bei Ionity, ein einzelner Redispatch-Eingriff bei 50Hertz, ein einzelner Tarifwechsel-Fall bei Check24). Unternehmensname und Eckdaten sind Anker, nicht Inhalt. Festgehalten in `03_DATENMODELL_TECHNIK.md`.

---

## Bewusste Entscheidungen (Do's)

- **Sprache:** Durchgängig Deutsch, fachlich-präzise, keine Übervereinfachung.
- **Tiefenfelder beibehalten:** Wertschöpfung/Herausforderungen/Ausblick sind das Alleinstellungsmerkmal.
- **ZIP-Auslieferung:** Immer alle Dateien gemeinsam, Version mit Bindestrich im Dateinamen.
- **Helles, editoriales Design:** DM Serif Display + DM Sans.
- **Lokal lauffähig:** Keine Server-/Build-Abhängigkeit, kein localStorage.

## Verworfene Wege (Don'ts)

- **Kein Dark Mode / kein verkleinertes Design** — wurde in einem früheren Schwester-Projekt (Energiehandel-Wiki) explizit abgelehnt; helles, professionelles Layout ist gesetzt.
- **Keine Maturity-/Gap-Assessment-Features** — wurden in Schwester-Projekten als „zu komplex" verworfen; hier bewusst nicht eingebaut.
- **Kein endloser Inhaltsausbau mehr** — ab v1.6 gilt das Wiki inhaltlich als weitgehend vollständig; Fokus auf Nutzbarkeit statt mehr Steckbriefe. Ausnahme v1.7: gezielter Lückenschluss (VNB-Betreibermodelle) und Pilotfeld „Angreifbarkeit" auf explizite Anforderung — bewusst eng begrenzt, kein genereller Rückfall in unbegrenzten Inhaltsausbau.

---

## Wiederkehrendes Muster im Feedback

Der Auftraggeber hat in mehreren Sessions **von Usability-Features zurück auf Inhaltstiefe** umgelenkt — Inhalt hatte konsistent Priorität vor Komfortfeatures. Erst nach erreichter inhaltlicher Vollständigkeit (v1.5) wurde Kollegentauglichkeit (v1.6) angegangen. Diese Reihenfolge respektieren.

Seit Session 12 zusätzlich bestätigt: Der Auftraggeber prüft Faktentreue aktiv nach (Unternehmensnamen, Zuordnungen) und erwartet, dass Hinweise recherchegestützt verifiziert statt pauschal bestätigt oder abgewiesen werden — im konkreten Fall (ista) war der Hinweis korrekt. Große Schreibaufwände (BMC-Felder, Fallbeispiele) werden konsistent zuerst im Umfang abgestimmt oder als Pilot vorgeschlagen, bevor ein Vollrollout über alle 71 Steckbriefe erfolgt.

Session 13 ergänzt das Muster um eine Nuance: Wenn ich selbst einen Umsetzungsvorschlag mache (hier: knappe 2-3-Satz-Fallbeispiele), korrigiert der Auftraggeber gezielt das Anspruchsniveau nach oben ("Deep Dive", "konkret und praxisnah"), nicht den Umfang — die Pilotgröße (6-8 Steckbriefe) wird dabei unverändert akzeptiert. Außerdem hat der Auftraggeber hier erstmals eine explizite Ton-/Erlebnis-Vorgabe für das Gesamtwiki gemacht ("wie ein Lehrbuch, das auch Spaß machen soll") — das sollte bei künftigen Feature-Entscheidungen mitgedacht werden, nicht nur bei Inhaltsfragen.

Wichtige Lehre aus der Korrekturschleife in Session 13: "Konkretes Beispiel" und "Fakten über ein Unternehmen" sind für den Auftraggeber zwei unterschiedliche Dinge. Bei "Praxisbeispiel"/"Deep Dive"-artigen Anforderungen künftig immer zuerst fragen bzw. selbst prüfen: Zeigt der Text die *Mechanik* des Geschäftsmodells (wie fließt Geld/Energie, Schritt für Schritt, an einem konkreten Rechenbeispiel) — oder rutscht er in eine Unternehmenschronologie ab, nur weil die zugrundeliegenden Fakten (Gründung, Finanzierung, Meilensteine) gut recherchiert und verfügbar sind? Gute Recherche ist notwendig, aber die Auswahl, was davon in den Text kommt, muss konsequent der Mechanik dienen, nicht der Vollständigkeit der Unternehmensgeschichte.

### Session 14 — Vollrollout `fallbeispiel` auf alle 69 Steckbriefe (v2.2, diese Session)
- **Auslöser:** Direkte, kurze Beauftragung nach der Korrekturschleife in Session 13: "Bitte setz das jetzt für alle Geschäftsmodelle um!" — der Auftraggeber entschied sich damit für den vollständigen Rollout, den Session 13 noch als offene Frage zurückgestellt hatte.
- **Umfang:** `fallbeispiel` für alle 61 bis dahin fehlenden Steckbriefe ergänzt (alle Domänen außer den 8 Session-13-Piloten und den 2 institutionellen BNetzA/ENTSO-E-Steckbriefen, analog zur etablierten Ausnahmeregel bei den BMC-Feldern). Damit jetzt vollständig: 69 von 69 unternehmensförmigen Steckbriefen.
- **Methodik:** Anders als in Session 13 wurde hier bewusst **nicht** erneut extern recherchiert (kein Web-Fetch pro Steckbrief) — stattdessen wurde die in Session 13 korrigierte Mechanik-Vorgabe direkt umgesetzt, indem jedes Fallbeispiel ausschließlich Zahlen und Akteure verwendet, die im selben Steckbrief bereits in `wertschoepfung`, `erloesmodell` oder `definition` etabliert waren. Das vermeidet das Risiko neuer, ungeprüfter Fakten (vgl. ista-Vorfall Session 12) bei einem Rollout dieser Größenordnung und hält den Anspruch "Mechanik statt Historie" konsequent durch.
- **Bug während des Rollouts:** Nach einem Edit auf `L3-CONTRACT-MGMT-01` zeigte eine Bash-Validierung (`node -c`, `wc -l`) eine offenbar abgeschnittene Datei. Diagnose ergab: keine echte Dateikorruption, sondern die wiederkehrende Bash-Mount-Staleness aus früheren Sessions — der Read-Tool-Zugriff auf dieselbe Datei zeigte den vollständigen, korrekten Inhalt bis zum Dateiende. Bestätigt erneut: Bei Zweifeln an der Dateiintegrität ist der Read-Tool-Stand maßgeblich, nicht der Bash-Mount, der mit Verzögerung synchronisiert.
- Kennzahlen v2.2: unverändert 19 Domänen, 32 Capability-Gruppen, 71 Steckbriefe, 223 Akteure, ~106 Glossarbegriffe; `fallbeispiel` jetzt 69 (zuvor 8).

### Session 15 — Vollständige Faktenprüfung & Korrektur-Release (v2.3, diese Session)
- **Auslöser:** Auftraggeber bat um eine vollständige inhaltlich-fachliche Überprüfung aller Steckbriefe vor Auslieferung ("inhaltliche Fehler wären mehr als ärgerlich"), ausdrücklich auch aus Sicht der hinterlegten Personas (v.a. Dr. Schmitt = Korrektheit). Anschließend Auftrag, **alle** gefundenen Fehler zu beheben und eine neue Version inkl. ZIP auszuliefern.
- **Vorgehen:** Komplette `data.js` (alle 71 Steckbriefe + Glossar + Timeline) gelesen und geprüft; kritische/änderbare Fakten per Websuche verifiziert (Eigentümer, Rechtsstände, Schwellenwerte, Kosten). Korrekturen mit verifizierendem Python-Skript angewendet (jede Fundstelle muss exakt 1× matchen) — robuster als ~60 Einzel-Edits.
- **Korrigierte Sachfehler (Auswahl):**
  - **Next Kraftwerke gehört Shell** (seit 2021), nicht RWE — war durchgängig falsch (Definitionen, Akteurslisten, Angreifbarkeit). Verwechslung mit der ebenfalls Shell-eigenen Sonnen.
  - **SuedLink**-Vorhabenträger sind **TenneT/TransnetBW** (nicht Amprion); Kosten ~10 Mrd. € statt 5 Mrd.
  - **ARegV-EK-Zinssatz 4. Periode**: korrekt **5,07 % Neuanlagen / 3,51 % Altanlagen** (vorher inkonsistent „6,91 % Alt / 5,07 % Neu", Mischung zweier Regulierungsperioden).
  - **EWS Schönau**: interner Widerspruch behoben (Definition „~55.000" vs. Fallbeispiel „~224.000 Kunden" → einheitlich ~224.000).
  - **RWE/innogy** als B2C-Vollversorger ersetzt (innogy-Privatkundengeschäft ging 2019/20 an E.ON; RWE betreibt kein B2C-Retail mehr).
  - **§41a statt §41b** für dynamische Tarife (11×); Schwelle **>100.000 Kunden** (ab 2025 alle Lieferanten), nicht 200.000.
  - **CSRD**: EU-Omnibus / „Stop-the-clock"-Richtlinie (2025) ergänzt — Welle 2 (>250 MA) um zwei Jahre verschoben (frühestens GJ 2027), Schwellen angehoben; Timeline-Event und Plattform-These entsprechend relativiert.
  - **GGV (§42b EnWG)** seit **Mai 2024** (Solarpaket I), nicht 2023; Balkonkraftwerk-Anmeldung: VNB-Meldung entfällt, nur noch Marktstammdatenregister.
  - **V2G-Pflicht ab 2027** korrekt der **AFIR** zugeordnet (bidirektionale Kommunikation, keine Nutzungspflicht), nicht „EU EMD Art. 20".
  - **H2-Kernnetz** ~9.040 km genehmigt (Okt 2024), nicht 9.700 km; **§51 EEG** Negativpreis-Regel aktualisiert (Solarspitzengesetz 2025).
  - **Redispatch/Netzengpassmanagement**: 2023 ~3,1 Mrd. € (Rückgang), Rekord 2022 ~4,2 Mrd. € — vorher „4,1 Mrd. € 2023 (Rekord)".
  - **EU ETS**: Gebäude/Verkehr über separates **ETS2 ab 2027** (nicht „Phase 5 ab 2031"); CBAM Zahlpflicht ab 2026, Freizuteilungs-Auslauf bis 2034.
  - Zahlen aktualisiert: **Tibber** 5,99 €/Monat (statt 9,95 €); **Enpal** ~100.000 Kunden / >300.000 Einheiten (statt „>200.000 Kunden"); **Mieterstromzuschlag** ~1,6–2,6 ct/kWh (statt 0,5–1); **EPEX** Volumen präzisiert; **discovergy → inexogy**.
- **Wiederkehrende Bash-Mount-Staleness (vgl. Session 14) trat erneut auf** — diesmal mit Folge: Ein Bash-Schreibvorgang (`fix_data.py`) operierte auf einer veraltet-abgeschnittenen Mount-Kopie der `data.js` und trunkierte dadurch beim Zurücksync die reale Datei am Ende (letzter Steckbrief + Akteurs-Index-IIFE). **Behoben**, indem das Dateiende exakt aus dem zuvor per Read-Tool gelesenen Originalstand rekonstruiert wurde; Verifikation via `node --check` + Strukturzählung (19 Domänen / 71 Steckbriefe / 222 Akteure) + Grep auf Alt-/Neufundstellen. **Lehre verschärft:** Bei dieser Datei niemals Bash-Schreibvorgänge auf Basis eines Bash-Reads ausführen, ohne den Read-Tool-Stand als Wahrheit gegenzuprüfen; Editiergrundlage ist immer der Read-Tool-Inhalt.
- Kennzahlen v2.3: 19 Domänen, 32 Capability-Gruppen, 71 Steckbriefe, **222 Akteure** (–1 durch Akteurs-Umbenennungen/Zusammenführung, z. B. innogy→E.ON), ~106 Glossarbegriffe; keine strukturellen/funktionalen App-Änderungen (nur Inhaltskorrekturen + Header-/Doku-Versionsbump).

### Session 16 — Quellen-Feature (Pilot) (v2.4, diese Session)
- **Auslöser:** Direkt im Anschluss an die v2.3-Faktenkorrektur folgte der Auftraggeber dem Vorschlag, Roadmap-Punkt 4 („Quellenangaben an Schlüsselzahlen") als Pilot umzusetzen.
- **Designentscheidung:** Zentrales Quellenregister (`GM_QUELLEN`) + Inline-Marker `[[Q:id]]` statt Quellenblock-pro-Steckbrief (DRY) — bewusst die bestehende Glossar-Infrastruktur wiederverwendet (Inline-Hervorhebung, Klick-Popover, eigene Übersichtsseite), damit minimaler neuer Rendercode und kein neues Pattern. Begründung und Pflege-Workflow in `dokumentation/05_QUELLEN_KONZEPT.md`.
- **Umfang:** `GM_QUELLEN` mit 12 belegten Primär-/Behörden-/Gesetzesquellen; 12 Inline-Marker exakt an den in Session 15 korrigierten Kennzahlen (Korrektur + Beleg in einem Zug). Quellen-Typen: Gesetz / Behörde / EU-Recht / Unternehmen. Neue Quellen-Seite (Tab) mit Suche + Typ-Filter.
- **Technik:** `data.js` (Register + Marker + Version v2.4), `app.js` (`highlightGlossary` um Marker-Ersetzung erweitert, `showSourcePopover`, `getQuellenMap`, `renderQuellen`, Tab-/View-Verdrahtung), `index.html` (Tab + View-Container), `style.css` (`.source-ref`-Badge + Popover-Link + dezente Print-Variante). Bewusst nur additiv — keine bestehende Funktion verändert.
- **Validierung:** `node --check` für `data.js` und `app.js` bestanden; per Skript geprüft, dass alle 12 Marker-IDs im Register existieren (keine Waisen) und jede Quelle referenziert ist (keine ungenutzten Einträge).
- **Bash-Mount-Staleness diesmal beherrscht:** Konsequent **alle** Datei-Änderungen über das Edit/Write-Tool (Windows-Seite) statt über Bash-Writes — dadurch keine Trunkierung wie in Session 15. Die Shell-Sicht zog diesmal vollständig nach (beide JS-Dateien `node --check`-clean), das ZIP wurde nach Verifikation gebaut.
- Kennzahlen v2.4: unverändert 19 Domänen / 71 Steckbriefe / ~106 Glossarbegriffe / 222 Akteure; **neu: 12 belegte Quellen** (Pilot, ausbaufähig).

### Session 17 — Browser-QA + Quellen-Ausweitung + window-Bugfix (v2.5, diese Session)
- **Auftrag:** Punkt 1 (Browser-QA-Pass) und Punkt 3 (Quellen-Pilot ausweiten) gemeinsam.
- **QA-Pass (headless):** Claude in Chrome war nicht verbunden, daher rigoroser Funktionstest in einer DOM-Simulation (jsdom): App initialisieren, alle 8 Tabs anklicken (Inhalt prüfen), Navigation in Steckbriefe, Suche (entprellt), Glossar- und Quellen-Popover. Ergebnis: alle Tabs rendern, Suche liefert Treffer, Popover öffnen, **0 Laufzeitfehler**. Nur echte Pixel/CSS/Print nicht abgedeckt (bräuchte echten Browser).
- **Latenter Bug gefunden & behoben:** `app.js` liest an mehreren Stellen `window.GM_GLOSSARY/GM_QUELLEN/GM_TIMELINE`. Da diese in `data.js` per `const` deklariert sind, werden sie laut ECMAScript **nicht** zu `window`-Eigenschaften — d.h. **Glossar-Inline-Hervorhebung, Glossar-Seite und Timeline-Seite blieben in echten Browsern leer** (das Haupt-Wiki nutzt `GM_DATA` bare und funktionierte). Fix: zu Beginn der `app.js`-IIFE werden die Register explizit auf `window` gespiegelt. Nach dem Fix rendern Glossar-Seite (106 Karten), Timeline und Inline-Hervorhebung (97 Begriffe) — verifiziert aus dem entpackten ZIP. Statischer Scan bestätigte: keine weiteren `window.<Global>`-Stolperstellen.
- **Quellen-Pilot erweitert:** 12 → **18 Quellen / 19 Marker**. Neue Quellen ausschließlich mit verifizierter Primärquelle (gesetze-im-internet: WindSeeG §1, EEG §4, WindBG, GEG, WPG; BNetzA-Pressemitteilung H2-Kernnetz). Beim VNB-Investitionsbedarf (375 Mrd. €) bewusst **kein** Punkt-Beleg gesetzt, weil Studien eine methodikabhängige Spanne (~207–328 Mrd. Verteilnetz / ~651 Mrd. gesamt) zeigen — Beleg nur, wo Quelle und Zahl sauber zusammenpassen.
- **Validierung:** `node --check` (true file), Marker-IDs vollständig im Register aufgelöst, jsdom-Funktionstest aus dem ZIP bestanden.
- **Mount-Staleness:** trat bei `data.js`/`app.js` erneut auf (Shell-Read zeigt trunkiert); da alle Edits über die Datei-Tools liefen, blieb die reale Windows-Datei intakt — ZIP wurde aus per Read-Tool verifiziertem/rekonstruiertem Stand gebaut.
- Kennzahlen v2.5: 19 Domänen / 71 Steckbriefe / ~106 Glossar / 222 Akteure; **18 belegte Quellen, 19 Marker**.

### Session 18 — Fakten-Refresh Juli 2026, Angreifbarkeit-Vollrollout & Doku-Sync (v2.6, diese Session)
- **Auslöser:** Auftraggeber bat um eine Gesamtüberprüfung des Wikis mit Verbesserungsvorschlägen; nach dem Review-Bericht folgte der Auftrag, **alles außer Verteilung/Hosting** direkt umzusetzen.
- **Review-Ergebnis (Kurzfassung):** Struktur und App waren sauber (alle Kennzahlen konsistent, keine Waisen-Marker, keine fehlenden Pflichtfelder); Hauptbefunde waren (1) veraltete Doku (`00_PROJEKTKONTEXT.md` stand noch auf v1.6!), (2) drei fachliche Lücken durch Regulierungsentwicklungen seit v2.5 und (3) offene Pilot-Ausrollungen.
- **Fachliche Updates (alle Websearch-verifiziert, Stand Juli 2026):**
  - **CSRD-Omnibus final:** RL (EU) 2026/470 (Amtsblatt Feb. 2026, in Kraft März 2026) — CSRD-Pflicht nur noch >1.000 MA **und** >450 Mio. € Umsatz (~90 % weniger Pflichtunternehmen), ESRS-Datenpunkte −61 %, Welle-1-Übergang optional bis GJ 2027. ESG-Plattform-Steckbrief (Definition, Ausblick, Herausforderungen, Kundensegment, Fallbeispiel — dort war ein 300-MA-Unternehmen als berichtspflichtig beschrieben, jetzt nicht mehr korrekt), Fünf-Grad-KMU-Passage, Timeline und Quelle `csrd-omnibus` aktualisiert.
  - **NEST/AgNes:** NEST-Festlegungen der BNetzA (Dez. 2025, 5. Regulierungsperiode Strom ab 2029, ab 6. Periode 3 Jahre) und AgNes-Netzentgeltreform (Eckpunkte Mai 2026, u.a. Netzkosten-Beteiligung von Erzeugern) in ÜNB-/VNB-Steckbriefe, Glossar, Timeline und Quellenregister eingearbeitet.
  - **Kraftwerksstrategie/StromVKG:** EU-Grundsatzeinigung Jan. 2026, 12-GW-Ausschreibungen 2026, Auktionen 2027/2029 (~41 GW bis 2031), umfassender Kapazitätsmarkt ab 2032. Kapazitätsmechanismus-Steckbrief und Gaskraftwerks-Ausblick aktualisiert.
- **Timeline-Ausbau:** +11 Events (Solarspitzengesetz & NEST 2025; CSRD-Omnibus, CBAM-Zahlpflicht, 12-GW-Ausschreibung, AgNes 2026; ETS2-Start & Kapazitätsmarkt-Konzept 2027; neues Jahr 2029 mit 5. RP und dritter Auktion; Kapazitätsmarkt-Vollbetrieb 2032). Jetzt 42 Events, Lücke 2029 geschlossen.
- **Angreifbarkeit-Vollrollout (5 → 69):** Alle 64 fehlenden unternehmensförmigen Steckbriefe erhielten das Feld, nach der Session-14-Methodik (ausschließlich aus Steckbrief-Bestandsfakten und Marktlogik abgeleitet, keine neuen ungeprüften Zahlen; Cross-Referenzen zwischen Steckbriefen wie im Pilot). Methodik-Feldübersicht entsprechend von „Pilot (5)" auf vollständig umgestellt.
- **Quellen-Ausbau:** +3 Quellen (`nest-festlegung`, `agnes-reform`, `stromvkg`), `csrd-omnibus` auf die finale Richtlinie umgestellt; jetzt **21 Quellen / 34 Inline-Marker**. Glossar +5 Begriffe (NEST, AgNes, StromVKG, ETS2, VSME) → ~111.
- **Neu: `GM_FAKTEN_STAND`** („Juli 2026") — sichtbar im Sidebar-Footer und auf der Methodik-Seite; bedient Dr. Schmitts Vertrauensfrage und etabliert den Fakten-Review als wiederkehrenden Prozess (Empfehlung: halbjährlich).
- **Doku-Sync:** `00_PROJEKTKONTEXT.md` von v1.6 (!) vollständig auf v2.6 neu geschrieben; `01_PERSONAS.md` (§41b→§41a im B1-Beispiel, erledigte Roadmap-Verweise), `03_DATENMODELL_TECHNIK.md` (Angreifbarkeit-Status war doppelt veraltet: Feld ist seit v1.7 sehr wohl in App/Suche/Export integriert), `05_QUELLEN_KONZEPT.md` und `README.md` aktualisiert.
- **Bash-Mount-Staleness erneut aufgetreten** (Shell-Sicht zeigte nach den Edits eine abgeschnittene data.js beim alten Byte-Stand); wie etabliert: alle Edits ausschließlich über Datei-Tools, Read-Tool-Stand als Wahrheit verifiziert, ZIP nach Mount-Sync gebaut.
- Kennzahlen v2.6: 19 Domänen / 32 Capability-Gruppen / 71 Steckbriefe / 222 Akteure / ~111 Glossarbegriffe / 21 Quellen / 42 Timeline-Events; `angreifbarkeit` **69** (zuvor 5), `fallbeispiel` 69.

### Session 19 — Lücken-Review Akteure/Modelle + Benchmarking-Konzept (v2.7, diese Session)
- **Auftrag:** (1) Wiki „auf Herz und Nieren" auf Vollständigkeit prüfen — sind die relevanten alten wie neuen Unternehmen genannt (explizit: Octopus Energy)? (2) Konzept entwickeln, wie ein **Geschäftsmodell-Benchmarking für den Kundeneinsatz** aussehen könnte (langfristiges Ziel: aus dem Wiki ein Werkzeug machen).
- **Review-Ergebnis:** Struktur/Kennzahlen konsistent, aber echte inhaltliche Lücken: **Octopus Energy/Kraken komplett abwesend** (größte Einzellücke — sowohl als Akteur wie als Geschäftsmodell-Typ „Software-Lizenzierung"), **LichtBlick fehlte vollständig** (immerhin ~1,7 Mio. Verträge, Top-5-Lieferant), dazu Fastned, Tesla Supercharger, Kyon Energy, Entrix, terralayr, Tesvolt, trawa, Aira; als fehlende Modelle identifiziert: Utility-OS-Lizenzierung, BESS-Optimierung/Route-to-Market (bisher nur implizit im BESS-Steckbrief), THG-Quotenhandel.
- **Vier neue Steckbriefe** (alle Fakten websearch-verifiziert Juli 2026, vollständig mit BMC-Feldern, Fallbeispiel, Angreifbarkeit, Radar):
  - `L3-VERTRIEB-NEO-05` **Octopus Energy – Tech-Versorger mit Kraken-Plattform** (DE >1 Mio. Kunden Sept. 2025, Verdopplung in 12 Monaten; dynamicOctopus 15-min-EPEX, Octopus Heat; Kraken-Spin-off Mitte 2026 bei ~8,65 Mrd. $).
  - `L3-DIGITAL-PLATTFORM-03` **Utility-OS-Lizenzierung (Kraken-Modell)** (>70 Mio. kontrahierte Accounts, ~500 Mio. $ gesicherter Jahresumsatz; Lizenznehmer EDF/E.ON Next/Origin/Tokyo Gas; Wettbewerber powercloud, Lynqtech, Kaluza, SAP; SAP-IS-U-Ablösung als Markttreiber).
  - `L3-AGG-VPP-03` **Batteriespeicher-Optimierung & Route-to-Market** (Entrix, Enspired, terralayr, Habitat Energy; Fee+Outperformance vs. Tolling/Floor; Kyon-Rahmenverträge als Fallbeispiel; terralayr-ETF „mehrere Optimierer parallel").
  - `L3-EMOB-THG-01` **THG-Quotenhandel & -Pooling** in neuer Capability-Gruppe `L2-EMOB-THG` (§37a BImSchG; Prämien 2026 ~300–450 € nach Tief <100 € 2023/24; Pönale 600 €/t als Zahlungsanker; Preisverfall-Episode als Risikolektion im Fallbeispiel).
- **Akteur-Ergänzungen in Bestand:** LichtBlick (Eneco) inkl. Satz im Premium-Ökostrom-Definitionstext (Einordnung: Massenmarkt-Skalierung mit weicheren Kriterien als Naturstrom/EWS); Fastned + Tesla Supercharger (CPO); Kyon Energy, Tesvolt (BESS/Speicher-Gruppe); Aira (WP-Contracting); trawa (B2B-Ausschreibungsplattform); Octopus Energy (Neolieferanten-Gruppe).
- **Glossar +4:** THG-Quote, Utility-OS, Route-to-Market, Tolling → ~115. **Quellen +2:** `kraken-spinoff` (Octopus-PM Sept. 2025), `thg-quote` (ADAC, Stand Juli 2026; neuer Quellen-Typ „Verband" — Typ-Filter der Quellen-Seite ist datengetrieben, kein Codeeintrag nötig) → 23 Quellen / 40 Marker. **Timeline +1:** Kraken-Spin-off 2026 → 43 Events.
- **Namenskonvention beachtet:** Konzern in Klammern wie etabliert („Sonnen (Shell)") → „LichtBlick (Eneco)", „Kraken (Octopus)", „Kaluza (OVO)".
- **Methodik-Texte in `app.js`:** „69 unternehmensförmige" → „73 (seit v2.7)" an beiden Stellen.
- **Neu: `dokumentation/06_BENCHMARKING_KONZEPT.md`** — Konzept für ein Geschäftsmodell-Benchmarking als Beratungswerkzeug auf Basis der Wiki-Daten (Zielbild, Bewertungsdimensionen, Kunden-Workflow, Ausbaustufen vom Workshop-Artefakt bis zum interaktiven Tool). Roadmap-Punkt 9 im README ergänzt.
- **Bash-Mount-Staleness erneut** (Shell-Sicht trunkiert bei altem Byte-Stand, diesmal auch app.js): wie etabliert alle Edits über Datei-Tools, Verifikation über Read-Tool + nachgezogenen Mount.
- Kennzahlen v2.7: 19 Domänen / **33** Capability-Gruppen / **75** Steckbriefe (73 unternehmensförmig) / **240** Akteure / ~115 Glossarbegriffe / **23** Quellen / **43** Timeline-Events; `angreifbarkeit` 73, `fallbeispiel` 73.


### Session 20 — Lern-App-Konzept (Juli 2026)
- Konzeptdokument für eine Babbel-artige Lern-App auf Basis der Wiki-Inhalte erstellt (`07_LERNAPP_KONZEPT.md`): 8 Module, 5+ Aufgabenformate, Leitner-Spaced-Repetition, Zertifizierungs-Quiz; Hybrid-Prinzip „Ein Fakt, eine Quelle" (App lädt data.js unverändert, redaktionelle Lernschicht darüber). Umsetzung via Claude Code geplant, MVP-Schnitt: Modul 4 „Verkaufen".

### Session 21 — Lern-App MVP + GitHub-Deployment (Juli 2026)
- **MVP komplett umgesetzt** in neuem Ordner `lern-app/` (Wiki unangetastet): 7 Lerneinheiten für Modul 4 „Verkaufen" (11 Steckbriefe aus L1-VERTRIEB + L1-VERGLEICH), 51 Quiz-Items in 5 Formaten (MC, Lückentext, BMC-Puzzle, Radar-Schätzen, Fallbeispiel-Rechnung), Leitner-Engine (5 Boxen, 1/3/7/16/35 Tage, localStorage), Fortschritts-Screen mit Export/Import, PWA (manifest, Service Worker, iOS-Meta-Tags, selbst gehostete Fonts, generierte Icons).
- **Architekturentscheidungen:** data.js wird per relativem Script-Tag unverändert geladen (Single Source of Truth); app.js-Renderlogik (buildBMC, buildRadarSVG, Glossar) als dokumentierte portierte Kopie in `lern-app/shared/render-kit.js`, da die Wiki-IIFE nicht importierbar ist; localStorage statt IndexedDB (MVP-Datenvolumen klein, geringste Reibung).
- **Zwei Bugs beim Browser-Test gefunden und behoben:** (1) `window.LERN_QUIZ_ITEMS`-Zugriffe schlugen fehl, weil const-Deklarationen nicht auf window landen (gleiche Falle wie Wiki-Session 17!) — auf bare Bezeichner umgestellt; (2) Zeitzonen-Bug im Leitner-Scheduler (lokales Datums-Parsing + UTC-Serialisierung verlor einen Tag) — auf durchgängige UTC-Rechnung umgestellt.
- **Verteilung gelöst (Roadmap-Punkt 1 für die App):** Projektordner als Git-Repo initialisiert und auf GitHub veröffentlicht (ArneGroenewold/Geschaeftsmodelle-der-Energiewirtschaft), GitHub Pages aktiviert. App auf iPhone via Safari „Zum Home-Bildschirm" installiert, offline verifiziert. Stolperstein dokumentiert: GitHub-Pages-URLs sind case-sensitive.

### Session 22 — Lern-App Iteration 2 nach Nutzerfeedback (Juli 2026)
- **Nutzerfeedback:** Mehr Inhaltstiefe in der App (Wiki soll nicht nötig sein), Fragen zu leicht / Antworten teils vorgesagt, Begriffsklärung Vollversorgung vs. Grundversorgung angefragt.
- **Vertiefungs-Screen** je Einheit ergänzt: voller Wiki-Steckbrief (Definition, Wertschöpfung, Herausforderungen, Angreifbarkeit, Praxisbeispiel, Ausblick, Meta) als aufklappbare Sektionen, live aus data.js gerendert — keine zweite Pflegestelle.
- **Fachkorrektur:** Vollversorgung (Vertragsform: Lieferant deckt gesamten Bedarf) sauber von Grundversorgung (gesetzlicher Status nach §36 EnWG) unterschieden; Kernidee + neue Prüfungsfrage dazu. Dabei **Faktenfehler im Wiki selbst gefunden und in data.js korrigiert:** „§36 EnWG: günstigster Anbieter nach Kundenzahl" → „der Anbieter mit den meisten Haushaltskunden im Netzgebiet".
- **Fragenqualität:** Worked-Example-Texte entschärft (Antworten werden nicht mehr vorweggenommen), Giveaway-Distraktoren („ist gesetzlich verboten", „hat ein Patent") durch plausible Fehlannahmen mit eigenem Lernwert ersetzt; 3 neue K2/K3-Items (Grundversorger/Vollversorger-MC, Tibber-Churn-Rechnung, CPA-vs-Kundenmarge-Rechnung) → 54 Items.
- **Release-Mechanik etabliert:** `sw.js` CACHE_NAME hochzählen = Cache-Busting für installierte PWAs; Update erreicht das iPhone durch zweimaliges Öffnen mit Internetverbindung.
- **Neu: `08_LERNAPP_UMSETZUNG.md`** — As-Built-Doku der App (Architektur, Wiki-Sync-Garantien inkl. Fakten-Refresh-Checkliste, Release-Prozess, Autorenleitfaden, Roadmap).
- **Lehre bekräftigt:** Der Versuch, diese Historie per PowerShell-Add-Content zu ergänzen, hat Backtick-Inhalte verschluckt (bash-Interpolation) — die bestehende Konvention „Dateiänderungen ausschließlich über Datei-Tools" gilt uneingeschränkt auch für Markdown-Doku.

### Session 24 — Lern-App Module 3, 5 & 6 (Juli 2026)
- **Auftrag:** „Mach mit den genannten Modulen weiter" — die drei zuvor vorgeschlagenen Module Die Netze, Flexibilität, Prosumer nacheinander bauen.
- **Modul 3 „Die Netze"** (6 Einheiten über `L1-UNB`/`L1-VNB`/`L1-GAS`): ARegV-Regulierung (RAB/Erlösobergrenze/Effizienzbenchmark), Redispatch & Engpassmanagement, Bilanzkreise & Ausgleichsenergie, §14a & Messstellenbetrieb, Betreibermodelle & Rekommunalisierung, Gas- & H2-Kernnetz. 43 Items.
- **Modul 5 „Flexibilität ist das neue Öl"** (5 Einheiten über `L1-AGG` + `L1-EMOB`-V2G): virtuelles Kraftwerk (Next Kraftwerke), Demand Response (Industrie), Route-to-Market/Tolling (Entrix/terralayr), Vehicle-to-Grid, plus K4-Synthese-Einheit „Wer kontrolliert die Flexibilität?". 35 Items.
- **Modul 6 „Prosumer & neue Spieler"** (6 Einheiten über `L1-PROSUMER` + `L1-EMOB`): PV-Eigenverbrauch, Balkonkraftwerk, Mieterstrom vs. GGV (inkl. Energy Community), Enpal-PV-Miete, Ladeinfrastruktur/CPO, THG-Quote. 43 Items.
- **Gesamt jetzt: 5 Module, 30 Einheiten, 218 Quiz-Items** — der für ein Zertifizierungs-Quiz nötige Pool von ≥200 Fragen ist damit erreicht.
- **Didaktik:** Transfer-Fragen verweben die Module systematisch (Merchant vs. Reguliert; VPP↔EEG-Marktprämie; Tolling↔PPA-Floor; §14a-Steuerungskonflikt↔Heimspeicher-VPP; CPO-Margenverlust↔Octopus-Kraken; THG↔EEG-Risikoprofil) — Ziel: Modelle unterscheiden statt Inselwissen.
- **Verifikation je Modul:** Browser-Durchlauf (Validierungs-Log ohne Waisen, BMC-Puzzle 9/9, Rechenaufgaben inkl. Dezimalergebnis grün, keine Konsolenfehler), `sw.js` CACHE_NAME v4→v5→v6, je ein Commit + Push.
- **Kleiner Testartefakt-Fix in S23-Übertrag:** Zwei Retrieval-Items (Q-BILANZ-R4, Q-BETREIB-R4) waren zunächst in den Listen referenziert, aber nicht geschrieben — von der Laufzeit-Validierung sofort gemeldet und ergänzt (Beleg, dass die Validierung greift).

### Session 25 — Lern-App: Akkordeon/Prozentfortschritt + Module 1, 7, 8 (alle 8 komplett) (Juli 2026)
- **Auftrag:** (1) alle Module fertigstellen, (2) Themen unter den Kapiteln standardmäßig einklappen, (3) prozentualer Fortschritt.
- **UX-Umbau des Home-Screens** (`main.js`, `lern.css`): Module sind jetzt ein **Akkordeon** — standardmäßig eingeklappt, Klick auf die Modul-Überschrift klappt die Einheiten auf/zu (Chevron dreht). Neuer **Gesamtfortschritts-Balken mit Prozentzahl** oben; jede Modulkarte zeigt zusätzlich ihren Prozentstand.
- **Modul 1 „Das Spielfeld"** (6 Einheiten, an erste Stelle gesetzt) über `L1-HANDEL` + `L1-MARKT`: Strombörse (EPEX/EEX), Prop Trading, CO₂ & Herkunft (HKN/EU ETS), BNetzA & Regulierung, Kapazitätsmarkt, lokale Flex- & H2-Marktdesign. 42 Items. (Bewusst auf Marktinstitutionen/Handel fokussiert, da Merit Order und Bilanzkreise schon in Modul 2/3 stecken.)
- **Modul 7 „Wärme, H2 & Industrie"** (5 Einheiten) über `L1-WAERME` + `L1-CONTRACT`: Fernwärme-Monopol, grüner Wasserstoff (Subventionsrennen), Energieeinkauf, Effizienz-Contracting (EPC), industrielle Eigenversorgung. 35 Items.
- **Modul 8 „Das Ökosystem drumherum"** (6 Einheiten) über `L1-PROJ`/`L1-FINANZ`/`L1-BERATUNG`/`L1-RECHT`/`L1-VERSICH`/`L1-DIGITAL`: Projektentwicklung (Develop-to-Sell), Non-Recourse-Projektfinanzierung, Strategieberatung, §46-Konzessionsrecht, EE-Versicherung, Utility-OS/Kraken. 42 Items.
- **Gesamt jetzt: alle 8 Konzept-Module, 47 Einheiten, 337 Quiz-Items.** Damit ist das Curriculum aus `07_LERNAPP_KONZEPT.md` §3 vollständig umgesetzt.
- **Verifikation je Modul:** Browser-Durchlauf (Validierung ohne Waisen, BMC-Puzzle 9/9, Rechenaufgaben grün, keine Konsolenfehler), Akkordeon-/Prozent-Test (8 Modulkarten, eingeklappt, Aufklappen funktioniert). `sw.js` CACHE_NAME v7 (UX) → v8 (M1) → v9 (M7) → v10 (M8), je ein Commit + Push.
- **Institutionelle Steckbriefe** (BNetzA `istUnternehmen:false`, ohne bmc/fallbeispiel/angreifbarkeit): bewusst kein BMC-Puzzle/Fallbeispiel darauf gesetzt; die Vertiefungs-Screens rendern nur die vorhandenen Felder (der `if(!text)return`-Guard in lern-engine.js greift).

### Session 26 — Bossquiz, Zertifizierungsquiz + QA-Durchlauf (Juli 2026)
- **Auftrag:** Boss- und Zertifizierungsquiz bauen, danach Qualitätschecks und Optimierungen.
- **Neuer wiederverwendbarer `quiz-session.js`:** spielt beliebige Item-Listen sequenziell ab (wie ein Review, aber als bewertetes Set), sammelt Ergebnisse je Modul; Helfer für stratifizierte Auswahl (`buildBossSet`, `buildCertificationSet`).
- **Bossquiz je Modul:** 10 gemischte, bloom-gewichtete Fragen aus allen Einheiten; Bestehen ab 70%; Zeile am Ende der aufgeklappten Modulkarte, freigeschaltet nach Abschluss aller Moduleinheiten. Ergebnis in `progressState.bossQuizzes`.
- **Zertifizierungsquiz:** 40 Fragen (5 je Modul, stratifiziert), freigeschaltet nach allen 8 bestandenen Bossquiz; Bestehen ab 75% gesamt UND kein Modul unter 50%. Bei Bestehen **druckbares Zertifikat** (Name, Datum, Gesamtscore, Modul-Aufschlüsselung, `GM_FAKTEN_STAND`, Print-CSS); bei Nichtbestehen Schwächenanalyse. Erworbenes Zertifikat bleibt bei fehlgeschlagenen Wiederholungen erhalten. `progressState.certification`.
- **Storage-Schema** um `bossQuizzes` + `certification` erweitert (sanfte `migrateProgress`-Migration, kein Versionssprung); `?debug=1` schaltet Boss/Zert zum Testen frei.
- **QA-Durchlauf (automatisiertes Browser-Skript über alle 337 Items):** 0 strukturelle Fehler (MC genau 1 Lösung + Erklärungen, keine Distraktor=Lösung-Kollisionen, Rechnungslösungen numerisch mit Toleranz, Radar-/BMC-Steckbriefe existent), 0 doppelte Fragen. Kennzahlen: Format-Verteilung MC 219 / Lückentext 47 / Rechnung 25 / Radar 35 / BMC 11; **Bloom 54% K3/K4** (Ziel ≥40% übererfüllt); 38/47 Transferfragen modulübergreifend.
- **Optimierungen:** Namensfeld im Zertifikat im Druck ausgeblendet (`.cert-name-field`), Auswahl-Helper `pickVaried` vereinfacht. `sw.js` CACHE_NAME v11 (Boss/Zert) → v12 (QA-Feinschliff). Verifiziert im Browser: Bossquiz 100% bestanden+persistiert, Zertifikat gerendert + Namenseingabe, Fail-Pfad, Sperrlogik ohne Debug, keine Konsolenfehler.

### Session 23 — Lern-App Modul 2 „Erzeugen & Speichern" (Juli 2026)
- **Auftrag:** Nächstes Modul bauen (Nutzer wählte Modul 2), Sync-/Doku-Fragen geklärt (Sync-Garantien und Pflegeprozesse waren bereits in `08_LERNAPP_UMSETZUNG.md` dokumentiert).
- **Modul 2 umgesetzt:** 6 Lerneinheiten über die 9 `L1-ERZ`-Steckbriefe — Merit Order (Merchant-Erzeugung), Regelenergie/Systemdienstleistungen, EEG-Marktprämie, PPAs (konventionell + Corporate), Batteriespeicher-Stacking (Grid-Scale + Heimspeicher-VPP), Offshore-Wind + Bürgerenergiegenossenschaft. **43 neue Quiz-Items → gesamt 2 Module, 13 Einheiten, 97 Items.** Bewusster didaktischer Bogen „Wie fließt das Geld durch die Erzeugung?" mit Transfer-Fragen, die auf Modul 4 zurückverweisen (z.B. EEG-Outperformance ↔ Wechselpilot-Erfolgsprovision, Sonnen-Flatrate ↔ Tibber-Abo).
- **Home-Screen generalisiert:** von Einzelmodul-Titel auf Modul-Auswahlliste mit Beschreibungen umgestellt (`main.js`, `renderHome`); neue CSS-Klasse `module-card-desc`.
- **Fairness-Bug im BMC-Puzzle gefunden & behoben:** `buildBMC` erzeugt für Schlüsselaktivitäten und Schlüsselressourcen identischen Text (beide = `wertschoepfung`) → zwei optisch gleiche Karten, die der Grader über einen versteckten Key unterschied (Münzwurf für den Lerner). Grader auf Text-Vergleich (`placedCard.text === bmc[k]`) umgestellt — betrifft rückwirkend auch Modul 4. Verifiziert: BMC-Puzzle nun 9/9 lösbar.
- **Verifikation:** Browser-Durchlauf aller Screen-Typen der Merit-Einheit + Speicher-Einheit (inkl. korrekt gelöster Rechenaufgabe und BMC-Puzzle), Validierungs-Log „13 Einheiten, 97 Quiz-Items" ohne Waisen-Referenzen, keine Konsolenfehler. `sw.js` CACHE_NAME → v3.
- **Doku:** `08_LERNAPP_UMSETZUNG.md` (Kennzahlen + Modul-Blaupause in Roadmap), diese Historie.

### Session 27 — Detaillierter QA-Check + Längen-Bias-Fix aller MC-Items (Juli 2026)
- **Auftrag:** Vollständiger inhaltlicher Quality-Check, Namensprüfung, Weiterentwicklungsvorschläge; danach den gefundenen Hauptmangel „komplett beheben".
- **QA-Befunde:** (1) Alle 25 Rechenaufgaben mathematisch nachgerechnet — korrekt. (2) Unternehmensnamen geprüft: „Fünf Grad" (`L3-VERTRIEB-NEO-02`) und „1KOMMA5°" (`L3-PROSUM-MIETER-03`) sind überall korrekt/konsistent; der vom Auftraggeber vermutete String „1,5 Grad" existiert nicht — kein Änderungsbedarf, offene Rückfrage, wo er gesehen wurde. (3) **Hauptmangel: Längen-Bias.** In 97% der 219 MC-Items war die richtige Option die längste — „nimm die längste Antwort" war eine funktionierende Rate-Strategie (die korrekten Optionen waren als Mini-Erklärungen ausformuliert, die Distraktoren als kurze Einzeiler).
- **Entscheidung des Auftraggebers (AskUserQuestion):** Effizient & robust beheben — pro Item **einen Distraktor plausibel elaborieren** (bleibt klar falsch, adressiert aber eine echte Fehlvorstellung → auch didaktisch stärker), sodass in ~2/3 der Items ein Distraktor die längste Option wird. Ziel: „correct = längste" ≈ Zufallsniveau (33% bei 3 Optionen).
- **Umsetzung modulweise (je ein Commit, Browser-Verifikation nach SW-Cache-Clear):** M1 27→8, M2 25→6, M3 29→10, M4 30→11, M5 23→8, M6 28→8, M7 22→8, M8 28→11 (Items mit correct=längste). **Gesamt: 97% → 32%** (70/219) — Rate-Strategie neutralisiert. ~130 Distraktoren umgeschrieben; alle bleiben faktisch falsch, richtige Optionen inhaltlich unverändert (Modul 1 zusätzlich vorab gekürzt). Keine Konsolenfehler, 337 Items laden fehlerfrei.
- **Methodik-Notiz:** Reines Kürzen der richtigen Optionen genügte NICHT (der Zähler „correct=längste" fällt erst, wenn ein Distraktor ≥ der richtigen Option wird) — daher der Distraktor-Verlängerungs-Ansatz. Verifikations-Skript zählt je Modul `correct.length > max(distraktor.length)`.
- **Release:** `sw.js` CACHE_NAME v12 → v13.
- **Doku:** `08_LERNAPP_UMSETZUNG.md`, `README.md`, diese Historie.
