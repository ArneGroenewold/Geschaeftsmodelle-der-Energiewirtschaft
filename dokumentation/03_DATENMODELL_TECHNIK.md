# Technische Referenz — Datenmodell & Erweiterung

> **Zweck:** Technische Anleitung, um Inhalte korrekt zu ergänzen oder zu ändern. Für Claude und technisch versierte Mitwirkende.

---

## Datei-Aufbau

```
gm-wiki/
├── index.html    (~150 Zeilen)  Struktur, Tabs, View-Container
├── style.css     (~540 Zeilen)  Styles inkl. Methodik, Glossar + Print
├── app.js        (~1320 Zeilen) Logik: render*, switchTab, Suche, Export, Glossar
└── data.js       (~1850 Zeilen) Inhalte inkl. GM_GLOSSARY
```

## data.js — Struktur

Drei Hauptobjekte:

1. `GM_WIKI_VERSION` — String, z.B. `"v2.6 · Juli 2026"`; daneben `GM_FAKTEN_STAND` (seit v2.6) — Datum des letzten vollständigen Fakten-Reviews, wird im Header und auf der Methodik-Seite angezeigt
2. `GM_DATA` — Array von Domänen (siehe Schema unten)
3. abgeleitet: `GM_ACTORS_INDEX` (automatisch aufgebaut), `GM_TIMELINE`, `GM_ERLOESTYPEN`, `GM_GLOSSARY` (seit v2.0), `GM_QUELLEN` (seit v2.4, siehe `05_QUELLEN_KONZEPT.md`)

### Schema eines L3-Geschäftsmodells (Item)

```javascript
{
  id: "L3-XXX-YY-NN",        // eindeutig, Schema L3-{Domäne}-{Cap}-{Nr}
  title: "...",
  definition: "...",          // Pflicht. Was, wer, Marktstruktur, Zahlen
  wertschoepfung: "...",      // 💡 Wo entsteht Marge, welche Hebel
  herausforderungen: "...",   // ⚠ Risiken, Schwächen
  ausblick: "...",            // → Entwicklung 3–5 Jahre
  angreifbarkeit: "...",      // 🎯 Seit v2.6 für alle 69 unternehmensförmigen Steckbriefe befüllt
                               // (Pilot seit v1.7). Wo ist Marge ungeschützt, wer greift bereits an,
                               // mit welchem Hebel? Disruptor-Lens (Persona B6)
  fallbeispiel: "...",         // 📖 Optional (seit v2.1, seit v2.2 für alle 69 unternehmens-
                               // förmigen Steckbriefe befüllt). Konkretes, durchgerechnetes
                               // Beispiel anhand eines realen Akteurs — zeigt die Mechanik
                               // des Geschäftsmodells, keine Unternehmenschronologie ("Deep Dive")
  erloesmodell: "...",        // Konkret, mit Zahlen wo möglich
  regulierung: "...",         // EnWG/EEG/ARegV/EU-Paragraphen
  kundensegment: "...",       // B2C/B2B/B2G/Prosumer
  differenzierung: "...",     // Wettbewerbsfaktoren
  status: "aktiv",            // "aktiv" | "emerging" | "planned"
  istUnternehmen: false,      // Optional (seit v1.9). Nur setzen, wenn das Item KEIN
                               // Unternehmen ist (Institution/Marktinfrastruktur, z.B. BNetzA).
                               // Fehlt das Feld → Default true. Blendet den BMC-Canvas-Button aus.
  bmc_kanaele: "...",          // Optional (seit v2.0). BMC-Baustein "Channels": über welche
                               // Kanäle erreicht das Modell seine Kunden (App, Vertrieb, Plattform)?
  bmc_kundenbeziehung: "...",  // Optional (seit v2.0). BMC-Baustein "Customer Relationships":
                               // Self-Service, Community, persönliche Beratung, Vertragsbindung?
  bmc_kostenstruktur: "...",   // Optional (seit v2.0). BMC-Baustein "Cost Structure": die
                               // wichtigsten Kostenblöcke (nicht 1:1 = wertschoepfung-Marge-Logik)
  radar: {                    // je Wert 1–5 (Skala siehe Methodik-Seite)
    regulierung: 3,
    skalierbarkeit: 4,
    marktrisiko: 2,
    digitalisierung: 5,
    wettbewerb: 3,
    nachhaltigkeit: 4
  },
  erloesTyp: "Subscription",  // "Reguliert"|"Merchant"|"Fee-based"|"Subscription"
  akteure: ["Firma A","Firma B"]  // werden automatisch in Akteurs-Index verlinkt
}
```

### Radar-Skala (Referenz)

| Dimension | 1 | 5 |
|-----------|---|---|
| regulierung (Regulierungsschutz) | Vollwettbewerb | Reguliertes Monopol |
| skalierbarkeit | Linearer Kostenzuwachs | Plattform-Skalierung |
| marktrisiko | Kein Marktrisiko | Volles Preis-Exposure |
| digitalisierung | Analog | KI/Plattform-nativ |
| wettbewerb (Intensität) | Monopol | Hypercompetitiv |
| nachhaltigkeit | Keine/kontraproduktiv | Kernbeitrag Energiewende |

### Feld: `angreifbarkeit` (Pilot seit v1.7, Vollrollout in v2.6)

Viertes Tiefenfeld neben Wertschöpfung/Herausforderungen/Ausblick — beantwortet gezielt, **wo das Geschäftsmodell strukturell verwundbar ist und wer es bereits angreift** (Disruptionsrisiko). Korrespondiert mit der neuen Perspektiv-Persona B6 „Der Disruptor" (`01_PERSONAS.md`).

**Status:** Seit v2.6 für alle 69 unternehmensförmigen Steckbriefe befüllt (Pilot in v1.7 startete mit 5 exponierten Modellen: `L3-VERTRIEB-VOLL-01`, `L3-EMOB-CPO-01`, `L3-PROSUM-MIETER-01`, `L3-AGG-VPP-01`, `L3-VERGL-B2C-01`). Die beiden institutionellen Steckbriefe (`L3-MARKT-BNETZA-01/02`) sind analog zu BMC/Fallbeispiel ausgenommen. Methodik des Rollouts wie beim `fallbeispiel`-Vollrollout (v2.2): ausschließlich aus im Steckbrief bereits etablierten Fakten und Marktzusammenhängen abgeleitet, keine neuen ungeprüften Zahlen.

**Inhaltlicher Anspruch:** Nicht „welche Risiken bestehen" (das deckt `herausforderungen` bereits ab), sondern konkret: *welcher Akteurstyp* greift *welchen Teil* der Marge *mit welchem Mechanismus* an (Plattform-Layer, Aggregation, regulatorischer Eingriff, Unbundling). Cross-Referenzen auf andere Steckbrief-IDs (z.B. „vgl. L3-VERTRIEB-NEO-01") sind erwünscht, um die Wettbewerbsdynamik zwischen Modellen sichtbar zu machen.

**Integration:** Vollständig in Rendering (eigener Abschnitt im Detail-View mit Akzentfarbe), Volltextsuche und Markdown-Export integriert (seit v1.7 bzw. v2.6 in der Methodik-Feldübersicht als vollständig ausgewiesen).

### Neues Feld: `fallbeispiel` (Pilot in v2.1, Vollrollout in v2.2)

Fünftes Tiefenfeld, konzeptionell anders als die anderen vier: Statt abstrakter Analyse liefert es ein einzelnes, konkret durchgerechnetes Beispiel — anhand eines realen, im Steckbrief bereits genannten Akteurs wird gezeigt, wie das Geschäftsmodell mechanisch funktioniert. Auslöser war der Wunsch, das Wiki stärker wie ein Lehrbuch wirken zu lassen: nicht nur erklären, sondern an einem Beispiel zeigen, was in der Praxis tatsächlich getan wird.

**Status:** Seit v2.2 für alle 69 unternehmensförmigen Steckbriefe befüllt (Pilot in v2.1 startete mit 8 Steckbriefen: Tibber, Next Kraftwerke, WEMAG-Batteriespeicher, Stromnetz Hamburg, Check24, Ionity, EWS Schönau, 50Hertz). Die beiden institutionellen Steckbriefe (`L3-MARKT-BNETZA-01/02`, `istUnternehmen: false`) sind analog zu den BMC-Feldern bewusst ausgenommen.

**Inhaltlicher Anspruch:** Explizit kein Unternehmensporträt, keine Chronologie/Historie (Gründung, Finanzierungsrunden, Meilensteine) und keine Wikipedia-Zusammenfassung — das war der erste Entwurf in v2.1 und wurde vom Auftraggeber korrigiert ("Inhaltlich ist es eher eine Unternehmenshistorie ... keine Zusammenfassung von Wikipedia"). Stattdessen: ein konkretes Rechenbeispiel oder ein Schritt-für-Schritt-Ablauf, der zeigt, *wie das Geschäftsmodell mechanisch funktioniert* — z.B. wie sich an einem Ladevorgang, einem Redispatch-Eingriff oder einem Provisionsfall die Erlös- oder Kostenlogik konkret nachvollziehen lässt. Unternehmensname und Eckdaten dienen nur als Anker für die Mechanik, nicht als Inhalt selbst. Zahlen wurden bevorzugt aus den im selben Steckbrief bereits etablierten Feldern (`wertschoepfung`, `erloesmodell`) abgeleitet, um Konsistenz zu sichern und keine neuen, ungeprüften Fakten einzuführen.

**Rendering:** Eigene CSS-Klasse `item-deep-section--fallbeispiel` mit "Deep Dive"-Badge, bewusst optisch abgehoben (Lehrbuch-Sidebar-Look) von den übrigen, neutral gestalteten Tiefenfeldern. Vollständig in Suche, Markdown-Export und Methodik-Feldübersicht integriert (kein reiner Datenstand wie bei `angreifbarkeit`).

### Neue Felder: `bmc_kanaele`, `bmc_kundenbeziehung`, `bmc_kostenstruktur` (seit v2.0)

Schließen die drei BMC-Bausteine, die der Business Model Canvas (Pilot seit v1.8, `04_BUSINESS_MODEL_CANVAS.md`) zuvor nur heuristisch aus Fließtext geraten hat. Seit v2.0 für alle Steckbriefe mit `istUnternehmen !== false` explizit befüllt (69 von 71). `buildBMC()` in app.js nutzt diese Felder bevorzugt; die Stichwort-Heuristik bleibt als Fallback für künftige, noch nicht nachgepflegte Items aktiv.

- **`bmc_kanaele`**: Wie erreicht das Modell seine Kunden — App, Website, Vertriebsorganisation, Vergleichsportal, Makler, Direktvertrieb? Kein Duplikat von `differenzierung`, sondern der reine Vertriebs-/Kontaktweg.
- **`bmc_kundenbeziehung`**: Self-Service vs. persönliche Betreuung, Vertragsbindung/Laufzeit, Community-Elemente, Kündigungs-/Wechselverhalten.
- **`bmc_kostenstruktur`**: Die 2–4 dominanten Kostenblöcke (z.B. Capex/Netzanschluss, Personal/Vertrieb, Beschaffung, IT/Plattform) — bewusst knapper als `wertschoepfung`, das die ökonomische Logik erklärt statt nur Kosten aufzuzählen.

### GM_GLOSSARY (seit v2.0)

Flaches Array von Begriffsobjekten, unabhängig von `GM_DATA`:

```javascript
const GM_GLOSSARY = [
  {
    term: "EnWG",                              // exakte Schreibweise, wie sie im Fließtext erscheint
    full: "Energiewirtschaftsgesetz",           // optional, ausgeschriebene Form
    category: "Recht & Regulierung (DE)",       // eine von 8 festen Kategorien
    definition: "Das zentrale deutsche Gesetz, das den rechtlichen Rahmen für Strom- und Gasversorgung regelt — Netzzugang, Entflechtung, Regulierung, Verbraucherschutz."
  },
  // ...ca. 111 Einträge, 8 Kategorien (seit v2.6 u.a. NEST, AgNes, StromVKG, ETS2, VSME)
];
```

**Verwendung in app.js:**
- `getGlossaryRegex()` baut eine einzige Regex aus allen `term`-Werten (längste zuerst, um Teil-Überlappungen wie „EU" vs. „EU EMD" zu vermeiden), mit Lookaround-Wortgrenzen `(?<![A-Za-zÄÖÜäöüß0-9])TERM(?![A-Za-zÄÖÜäöüß0-9])` statt `\b` — `\b` ist bei §, /, Umlauten in deutschen Abkürzungen unzuverlässig.
- `highlightGlossary(text)` wendet diese Regex auf einen Textwert an und umschließt Treffer mit `<span class="glossary-term" data-term="...">`. Wird auf alle Fließtext-Felder im Steckbrief (Definition, Wertschöpfung, Herausforderungen, Ausblick, Angreifbarkeit, Erlösmodell/Regulierung/Differenzierung), auf die BMC-Grid-Zellen und auf Timeline-Events angewendet.
- `bindGlossaryPopover()` registriert einen delegierten Klick-Handler: Klick auf `.glossary-term` öffnet eine absolut positionierte Popover-Box (`showGlossaryPopover`) mit Begriff, ausgeschriebener Form und Definition; Klick außerhalb, Escape oder Scrollen schließt sie wieder.
- `renderGlossar()` baut die eigenständige Glossar-Seite: alphabetisch sortierte Kartenliste, filterbar nach den 8 Kategorien und per Freitextsuche über Begriff/ausgeschriebene Form/Definition.

**Neue Begriffe ergänzen:** Einfach ein neues Objekt zu `GM_GLOSSARY` hinzufügen — Hervorhebung, Popover und Glossar-Seite greifen automatisch, ohne Code-Änderung in app.js. Wichtig: `term` muss exakt der Schreibweise im Fließtext entsprechen (Groß-/Kleinschreibung, Sonderzeichen).

### Erlöstypen

- **Reguliert** — staatlich genehmigte Erlösobergrenze (ARegV). Netzbetreiber.
- **Merchant** — freier Marktpreis, volles Risiko. Erzeuger, Händler, Lieferanten.
- **Fee-based** — Gebühr/Provision, energiepreisunabhängig. Beratung, Direktvermarktung, Fonds.
- **Subscription** — wiederkehrendes Abo. SaaS, O&M, Mietmodelle.

---

## Inhalte ergänzen — Schritt für Schritt

1. **Neue Domäne (L1):** Objekt mit `id, title, icon, color, description, capabilities[]` an `GM_DATA` anhängen oder via `GM_DATA.push(...)` am Dateiende.
2. **Akteurs-Index:** Wird automatisch aufgebaut. Bei nachträglichem `push` den Index-Aufbau-Block am Dateiende für die neuen Domänen erneut laufen lassen (siehe data.js Ende).
3. **Timeline-Ereignis:** Objekt zu `GM_TIMELINE` hinzufügen (`year`, `events[]` mit `id, title, desc, domains[], tags[]`).

## Validierung nach Änderungen

```bash
# Syntax + Statistik prüfen
node -e "
const vm=require('vm'),fs=require('fs');
const src=fs.readFileSync('gm-wiki/data.js','utf8')+'\nglobalThis._G=GM_DATA;';
const ctx=vm.createContext({globalThis:{}});
vm.runInContext(src,ctx);
let c=0,i=0; ctx.globalThis._G.forEach(d=>{c+=d.capabilities.length;d.capabilities.forEach(x=>i+=x.items.length);});
console.log('Domains:',ctx.globalThis._G.length,'Caps:',c,'Items:',i);
"
```

## Fallstricke

- **100KB-Shell-Limit:** `data.js` ist zu groß, um sie in einem `cat`-Heredoc zu schreiben. In Teilen schreiben oder mit `>>` anhängen.
- **const-Reassignment:** `GM_WIKI_VERSION` ist `const` — nicht am Dateiende neu zuweisen, sondern oben die Deklaration ändern.
- **Array-Fortsetzung:** Beim Aufteilen von `GM_DATA` auf mehrere Schreibvorgänge nicht versehentlich das Array mit `];` schließen und neue Objekte außerhalb anhängen. Entweder ein durchgehendes Array oder sauber `GM_DATA.push(...)` nutzen.
- **Komma zwischen Domänen-Objekten:** Häufige Fehlerquelle beim manuellen Zusammenfügen.
- **Encoding:** UTF-8, deutsche Umlaute und Sonderzeichen (·, –, §, €) müssen erhalten bleiben.

## Auslieferung

```bash
cd /mnt/user-data/outputs && rm -f gm-wiki-vX.Y.zip && zip -r gm-wiki-vX.Y.zip gm-wiki/
```
Immer ZIP + Vorschau `index.html` präsentieren. `GM_WIKI_VERSION` vorher hochzählen.
