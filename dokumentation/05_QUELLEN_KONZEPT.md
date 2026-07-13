# Quellen-Feature — Konzept & Pflege (seit v2.4)

> **Zweck:** Belegbarkeit der Schlüsselzahlen. Schließt Roadmap-Punkt 4 („Quellenangaben an Schlüsselzahlen ergänzen") und bedient direkt die Persona-Bedarfe von **Dr. Schmitt** (A3 — „Vertrauen in die Quellen") und **Frau Berger** (A4 — Glaubwürdigkeit im Kundentermin). Eingeführt als **Pilot** (analog BMC v1.8 und Fallbeispiele v2.1), zunächst an den fachlich kritischsten/korrigierten Kennzahlen.

---

## 1. Designentscheidung

Gewählt: **zentrales Quellenregister + Inline-Fußnotenmarker**.

Eine Quelle wird **einmal** zentral in `GM_QUELLEN` (in `data.js`, direkt nach `GM_GLOSSARY`) gepflegt und über kurze Marker `[[Q:id]]` im Fließtext beliebig oft referenziert. Das ist sparsam, weil dieselbe Quelle (z. B. die BNetzA-Festlegung zum EK-Zinssatz) in mehreren Steckbriefen auftaucht, aber nur an einer Stelle gepflegt und datiert werden muss.

**Verworfene Alternativen:**
- *Quellenblock pro Steckbrief* — einfacheres Datenmodell, aber redundante Mehrfachpflege derselben Quelle und höherer optischer Ballast.
- *Bloßes Feld „Stand & Hauptquellen" pro Steckbrief* — billigst, aber zu grob: man sieht nicht, welche konkrete Zahl woher stammt.

Das Register-plus-Marker-Modell trifft den Punkt zwischen Aufwand und Präzision und **nutzt die vorhandene Glossar-Infrastruktur** (Inline-Hervorhebung + Klick-Popover + eigene Übersichtsseite) nahezu vollständig wieder — minimaler neuer Rendercode, kein neues Architektur-Pattern.

---

## 2. Datenmodell (`data.js`)

```js
const GM_QUELLEN = [
  { id: "bnetza-ekzins",
    kurz: "BNetzA — Eigenkapitalzinssatz 4. Regulierungsperiode (…)",
    herausgeber: "Bundesnetzagentur",
    typ: "Behörde",                 // Gesetz | Behörde | EU-Recht | Unternehmen
    url: "https://www.bundesnetzagentur.de/…",
    stand: "2021 (BGH-bestätigt 2023)" },
  …
];
```

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `id` | ja | kebab-case, eindeutig; Referenz im Marker `[[Q:id]]` |
| `kurz` | ja | Kurztitel der Quelle (im Popover + auf der Quellen-Seite als Überschrift) |
| `herausgeber` | ja | wer die Quelle veröffentlicht (BNetzA, BMJ, EU-Rat, Unternehmen …) |
| `typ` | ja | Filterkategorie auf der Quellen-Seite |
| `url` | empfohlen | Link zur Primärquelle (öffnet in neuem Tab) |
| `stand` | empfohlen | Datums-/Versionsstand — zentral für die Glaubwürdigkeit |

**Marker im Fließtext:** direkt hinter der belegten Zahl, z. B.
`… 5,07 % Neu / 3,51 % Alt [[Q:bnetza-ekzins]] …`. Erlaubt sind die Felder, die durch `highlightGlossary()` laufen (Definition, Tiefenfelder, Fallbeispiel, Meta-Felder).

---

## 3. Rendering (`app.js`)

- `highlightGlossary(text)` ersetzt `[[Q:id]]` → `<sup class="source-ref" data-qid="id">Q</sup>` (nach der Glossar-Hervorhebung, damit sich beide nicht ins Gehege kommen).
- Klick auf ein `source-ref` öffnet via `showSourcePopover()` dasselbe Popover wie das Glossar (gleiche Positionierungslogik, gleiches Schließen mit ×/Esc/Scroll), zeigt Kurztitel, Herausgeber · Typ · Stand und „Quelle öffnen ↗".
- `renderQuellen()` baut die **Quellen-Seite** (Tab „Quellen") analog zur Glossar-Seite: Suche + Typ-Filter + Karten-Grid (Wiederverwendung der `glossar-*`-Klassen).
- `style.css`: nur `.source-ref` (Akzent-Badge) + `.gp-link` neu; Print-Variante dezent ohne Badge.

---

## 4. Umfang (v2.6: 21 Quellen / 34 Marker)

**v2.4 (12 Quellen)** bewusst an den in Session 15 **korrigierten** Kennzahlen — Korrektur und Beleg in einem Zug:

| ID | belegt | Typ |
|---|---|---|
| `bnetza-ekzins` | ARegV-EK-Zinssatz 5,07 % / 3,51 % | Behörde |
| `suedlink-tennet` | SuedLink-Träger TenneT/TransnetBW, ~10 Mrd. € | Unternehmen |
| `next-shell` | Next Kraftwerke gehört Shell | Unternehmen |
| `csrd-omnibus` | CSRD-Wellen-Verschiebung (Omnibus) | EU-Recht |
| `afir-emd` | bidirektionale Ladepunkte ab 2027 (AFIR) | EU-Recht |
| `enwg-41a` | dynamische Tarife §41a, Schwelle >100.000 | Gesetz |
| `enwg-42b` | GGV §42b seit Mai 2024 | Gesetz |
| `eeg-foerder` | Mieterstromzuschlag ~1,6–2,6 ct/kWh | Behörde |
| `netzengpass` | Redispatch-Kosten 2023/2022 | Behörde |
| `tibber` | Tibber-Grundgebühr 5,99 € | Unternehmen |
| `enpal` | Enpal ~100.000 Kunden | Unternehmen |
| `eeg-51` | §51 EEG negative Preise | Gesetz |

**v2.5 (+6 Quellen)** — regulatorische Ausbauziele & strukturelle Kennzahlen, alle mit Gesetzes-/Behörden-Primärquelle:

| ID | belegt | Typ |
|---|---|---|
| `bnetza-h2-kernnetz` | H2-Kernnetz 9.040 km / 18,9 Mrd. € (BNetzA, Okt. 2024) | Behörde |
| `windseeg-offshore` | Offshore-Ziele 30/40/70 GW (§1 WindSeeG) | Gesetz |
| `eeg-ziele` | Ausbaupfad 2030: 215 GW PV, 115 GW Wind (§4 EEG) | Gesetz |
| `windbg-flaeche` | 2 %-Flächenziel Windenergie (WindBG) | Gesetz |
| `geg-heizung` | 65 %-EE-Pflicht bei neuen Heizungen (GEG) | Gesetz |
| `wpg-waermeplanung` | kommunale Wärmeplanung, Fristen 2026/2028 (WPG) | Gesetz |

**v2.6 (+3 Quellen, 1 aktualisiert)** — Fakten-Refresh Juli 2026, regulatorische Weichenstellungen 2025/2026:

| ID | belegt | Typ |
|---|---|---|
| `nest-festlegung` | NEST-Festlegungen: Kostenregulierung, 5. Regulierungsperiode Strom ab 2029 (BNetzA, Dez. 2025) | Behörde |
| `agnes-reform` | AgNes-Eckpunkte zur Netzentgeltsystematik Strom, u.a. Erzeuger-Beteiligung (BNetzA, Mai 2026) | Behörde |
| `stromvkg` | Kraftwerksstrategie/StromVKG: 12-GW-Ausschreibungen 2026, Kapazitätsmarkt ab 2032 (BMWE, Jan. 2026) | Behörde |
| `csrd-omnibus` *(aktualisiert)* | finale Omnibus-RL (EU) 2026/470: CSRD nur noch >1.000 MA & >450 Mio. € Umsatz | EU-Recht |

Die neuen Quellen sind mit mehreren Markern verknüpft (Steckbriefe + Timeline-Events), daher der Sprung von 19 auf 34 Marker.

---

## 5. So fügt man eine Quelle hinzu (Workflow)

1. **Beleg prüfen** — möglichst Primärquelle (Gesetzestext, Behörden-/Unternehmensseite), nicht Sekundärpresse. Stand-Datum notieren.
2. In `GM_QUELLEN` einen Eintrag mit eindeutiger `id` anlegen.
3. Im Steckbrief-Feld den Marker `[[Q:id]]` direkt hinter die Zahl setzen.
4. Validieren: `node --check data.js` + Marker-IDs gegen Register prüfen (jede Marker-ID muss in `GM_QUELLEN` existieren).

## 6. Pflege & Ausbau

- **Stand-Disziplin:** Bei jeder Faktenaktualisierung auch das `stand`-Feld der Quelle pflegen — ein veralteter Beleg ist schlechter als kein Beleg.
- **Ausweitung:** Nach dem Pilot schrittweise auf weitere Schlüsselzahlen (Marktgrößen, Volllaststunden, Capex-Werte) ausrollen — bewusst kein „Beleg um jeden Preis" für weiche, qualitative Aussagen.
- **Mögliche Erweiterung:** Quellen pro Steckbrief gebündelt am Kartenende anzeigen; Export der Quellenliste pro Steckbrief (Markdown).
