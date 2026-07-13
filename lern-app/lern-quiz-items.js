// ══════════════════════════════════════════════════════════
// lern-quiz-items.js — Quiz-Item-Registry für LERN_QUIZ_ITEMS (Modul 4).
// Getrennt von lern-data.js für Übersichtlichkeit; erweitert dasselbe Objekt.
// Jedes Item trägt steckbriefIds für Rückverfolgbarkeit bei Fakten-Refreshs
// (siehe 07_LERNAPP_KONZEPT.md §9).
// ══════════════════════════════════════════════════════════

Object.assign(LERN_QUIZ_ITEMS, {

  // ── U-VOLL ──────────────────────────────────────────────────────
  "Q-VOLL-WE1": {
    id: "Q-VOLL-WE1", unitId: "U-VOLL", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      szenario: "Ein E.ON-Haushaltskunde verbraucht 3.500 kWh/Jahr bei einem Endkundenpreis von 32 ct/kWh. Netzentgelte betragen 8 ct/kWh, Steuern/Umlagen 6 ct/kWh, Beschaffungskosten am Großhandelsmarkt 16 ct/kWh. Wie hoch ist die Marge des Versorgers in ct/kWh und in Euro pro Jahr?",
      eingabefelder: [{ key: "margeCt", label: "Marge", einheit: "ct/kWh" }, { key: "margeJahr", label: "Marge gesamt", einheit: "€/Jahr" }],
      loesung: { margeCt: { wert: 2, toleranz: 0.3 }, margeJahr: { wert: 70, toleranz: 10 } },
      rechenweg: ["Marge/kWh = Endkundenpreis − Netzentgelte − Steuern/Umlagen − Beschaffungskosten = 32 − 8 − 6 − 16 = 2 ct/kWh.", "Marge/Jahr = 2 ct/kWh × 3.500 kWh = 7.000 ct = 70 €."]
    }
  },
  "Q-VOLL-WE2": {
    id: "Q-VOLL-WE2", unitId: "U-VOLL", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Warum lohnt sich für E.ON ausgerechnet der Zusatzverkauf einer Wallbox an einen bestehenden Kunden besonders?",
      optionen: [
        { text: "Weil dafür kein neuer Kunde akquiriert werden muss und die Zusatzmarge die dünne Strommarge deutlich übersteigt.", korrekt: true, erklaerung: "Genau das ist der Hebel: Akquisitionskosten entfallen, die Zusatzmarge ist ein Vielfaches der 1-2 ct/kWh Strommarge." },
        { text: "Weil Wallboxen gesetzlich an den Grundversorger gebunden sind.", korrekt: false, erklaerung: "Es gibt keine gesetzliche Bindung – Kunden können Wallboxen frei bei jedem Anbieter kaufen." },
        { text: "Weil der Stromverbrauch durch die Wallbox die Netzentgelte des Versorgers senkt.", korrekt: false, erklaerung: "Netzentgelte gehen an den Netzbetreiber, nicht an den Versorger – sie werden durch mehr Verbrauch nicht für den Versorger günstiger." }
      ]
    }
  },
  "Q-VOLL-R1": {
    id: "Q-VOLL-R1", unitId: "U-VOLL", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Was bedeutet der Grundversorgungsstatus (§36 EnWG) für einen Versorger konkret?",
      optionen: [
        { text: "Er beliefert automatisch Haushalte ohne aktiven Vertrag zum Grundversorgungstarif – ohne dass der Kunde aktiv wechseln musste.", korrekt: true, erklaerung: "Richtig – Grundversorger ist per Gesetz der Anbieter mit den meisten Kunden im Netzgebiet, er übernimmt automatisch alle vertragslosen Haushalte." },
        { text: "Er darf als einziger Anbieter in einer Region Strom verkaufen.", korrekt: false, erklaerung: "Der Strommarkt ist liberalisiert – jeder Haushalt kann frei zwischen Anbietern wechseln, der Grundversorger hat kein Exklusivrecht." },
        { text: "Er muss seinen Strom günstiger als alle Wettbewerber anbieten.", korrekt: false, erklaerung: "Der GVT ist nicht staatlich reguliert und oft sogar teurer als Sondertarife – nur transparent kalkulierbar nach StromGVV." }
      ]
    }
  },
  "Q-VOLL-R2": {
    id: "Q-VOLL-R2", unitId: "U-VOLL", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Wie hoch ist die typische Einzelhandelsmarge eines Vollversorgers je verkaufter kWh?",
      optionen: [
        { text: "0,5–2 ct/kWh", korrekt: true, erklaerung: "Das ist die im Steckbrief genannte typische Marge – extrem dünn im Vergleich zu Netzentgelten oder Beschaffungskosten." },
        { text: "10–15 ct/kWh", korrekt: false, erklaerung: "Das wäre eine für den Massenmarkt völlig unrealistische Marge – bei diesem Aufschlag wäre der Versorger sofort unterbietbar." },
        { text: "30–40 ct/kWh", korrekt: false, erklaerung: "Das liegt in der Größenordnung des gesamten Endkundenpreises, nicht der Marge allein." }
      ]
    }
  },
  "Q-VOLL-R3": {
    id: "Q-VOLL-R3", unitId: "U-VOLL", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      text: "Vom Endkundenpreis gehen zuerst die {{a}} an den Netzbetreiber und {{b}} an den Staat ab. Der größte Einzelposten sind meist die {{c}} am Großhandelsmarkt. Übrig bleibt eine sehr dünne Retail-{{d}}.",
      luecken: {
        a: { loesungen: ["Netzentgelte"], erklaerung: "Netzentgelte fließen an den Netzbetreiber, nicht an den Versorger." },
        b: { loesungen: ["Steuern und Umlagen", "Steuern", "Umlagen"], erklaerung: "Steuern und Umlagen sind staatlich festgelegte Bestandteile des Strompreises." },
        c: { loesungen: ["Beschaffungskosten"], erklaerung: "Die Beschaffungskosten am Großhandelsmarkt sind meist der größte Kostenblock." },
        d: { loesungen: ["Marge"], erklaerung: "Die verbleibende Marge ist mit 0,5-2 ct/kWh sehr klein." }
      },
      distraktoren: ["Dividende", "Baukosten"]
    }
  },
  "Q-VOLL-R4": {
    id: "Q-VOLL-R4", unitId: "U-VOLL", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Warum bleiben viele Kunden jahrelang im teureren Grundversorgungstarif (GVT), obwohl ein Sondertarif günstiger wäre?",
      optionen: [
        { text: "Weil ein Wechsel für sie keinen erkennbaren Mehrwert verspricht und sie nie aktiv einen Vertrag abgeschlossen haben.", korrekt: true, erklaerung: "Genau das ist die 'stille' Trägheit des Grundversorgungsstatus – ohne aktiven Impuls bleiben Kunden im GVT, selbst wenn er teurer ist." },
        { text: "Weil ein Wechsel aus dem GVT gesetzlich verboten ist.", korrekt: false, erklaerung: "Ein Wechsel ist jederzeit möglich – GPKE regelt den Prozess, es gibt kein Verbot." },
        { text: "Weil der GVT immer der günstigste verfügbare Tarif ist.", korrekt: false, erklaerung: "Der GVT ist oft teurer als Sondertarife – er ist nur transparent kalkulierbar, nicht zwingend günstig." }
      ]
    }
  },
  "Q-VOLL-R5": {
    id: "Q-VOLL-R5", unitId: "U-VOLL", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      steckbriefId: "L3-VERTRIEB-VOLL-01",
      erklaerungenProDimension: {
        regulierung: "Der Grundversorgungsstatus ist rechtlich verankert (§36 EnWG), aber der Wettbewerb um Sondertarife ist voll liberalisiert – daher nur mittlerer Regulierungsschutz.",
        skalierbarkeit: "Millionen Kunden lassen sich über dieselbe IT-Infrastruktur bedienen – klassische Skaleneffekte im Massengeschäft.",
        marktrisiko: "Die Beschaffungskosten sind Großhandelspreisen ausgesetzt, aber die dünne Marge wird meist über Vorbeschaffungsstrategien abgesichert.",
        digitalisierung: "SAP-IS-U-Altlasten und papierlastige Prozesse prägen viele Vollversorger noch stark – geringe Digitalisierung.",
        wettbewerb: "Vergleichsportale und Neolieferanten sorgen für sehr hohe Wettbewerbsintensität um jeden Kunden.",
        nachhaltigkeit: "Reiner Commodity-Stromverkauf ohne besonderen Nachhaltigkeitsbeitrag über den Strommix hinaus."
      }
    }
  },
  "Q-VOLL-T1": {
    id: "Q-VOLL-T1", unitId: "U-VOLL", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Ein Fitnessstudio lässt Mitgliedschaften nach Ablauf automatisch in einen teureren Standardtarif laufen, wenn niemand aktiv kündigt oder wechselt. Welche Logik aus dieser Lerneinheit erkennst du hier wieder?",
      optionen: [
        { text: "Die Trägheit vertragsloser bzw. nicht aktiv verwalteter Kunden wird zur stillen Einnahmequelle – wie beim Grundversorgungstarif.", korrekt: true, erklaerung: "Exakt dieselbe Mechanik: Ohne aktiven Wechselimpuls bleiben Kunden im teureren Standardtarif, unabhängig vom Anbieter." },
        { text: "Das Fitnessstudio handelt rechtswidrig, weil es keine Genehmigung für automatische Vertragsverlängerung hat.", korrekt: false, erklaerung: "Automatische Vertragsverlängerungen sind in vielen Branchen üblich und rechtlich zulässig – die Analogie liegt in der Kundenträgheit, nicht in der Rechtswidrigkeit." },
        { text: "Das hat nichts mit dem Grundversorgungsmodell zu tun, da es sich um unterschiedliche Branchen handelt.", korrekt: false, erklaerung: "Die Branche ist irrelevant – die strukturelle Logik (Trägheit ohne aktiven Wechsel kostet den Kunden Geld) ist identisch." }
      ]
    }
  },

  // ── U-TIBBER ────────────────────────────────────────────────────
  "Q-TIBBER-WE1": {
    id: "Q-TIBBER-WE1", unitId: "U-TIBBER", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Warum verschiebt die Tibber-App das Laden des E-Autos ausgerechnet in die Nachtstunden?",
      optionen: [
        { text: "Weil dort die Strompreise an der Börse meist am niedrigsten sind – oft wegen hohem Windstromanteil bei geringer Nachfrage.", korrekt: true, erklaerung: "Genau – niedrige Nachfrage und viel Windstrom drücken den Spotpreis in der Nacht meist deutlich." },
        { text: "Weil Tibber nachts eine höhere eigene Marge auf den Strompreis aufschlägt.", korrekt: false, erklaerung: "Tibber schlägt zu keiner Uhrzeit eine Marge auf den Strompreis auf – der Spotpreis wird 1:1 durchgereicht." },
        { text: "Weil das Nachtladen gesetzlich vorgeschrieben ist.", korrekt: false, erklaerung: "Es gibt keine gesetzliche Nachtlade-Pflicht – die Optimierung ist rein wirtschaftlich durch die App gesteuert." }
      ]
    }
  },
  "Q-TIBBER-WE2": {
    id: "Q-TIBBER-WE2", unitId: "U-TIBBER", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-01"],
    data: {
      szenario: "Tibber gewinnt einen Kunden für durchschnittlich 100 € Akquisitionskosten (CAC). Der Kunde zahlt 5,99 €/Monat Abogebühr. Nach wie vielen Monaten hat sich der Kunde für Tibber amortisiert?",
      eingabefelder: [{ key: "monate", label: "Amortisationsdauer", einheit: "Monate" }],
      loesung: { monate: { wert: 16.7, toleranz: 2 } },
      rechenweg: ["Amortisationsdauer = CAC ÷ monatlicher Abogebühr = 100 € ÷ 5,99 €/Monat ≈ 16,7 Monate.", "Das entspricht knapp anderthalb Jahren – das Modell trägt sich nur, wenn die Kündigungsquote in dieser Zeit niedrig bleibt."]
    }
  },
  "Q-TIBBER-R1": {
    id: "Q-TIBBER-R1", unitId: "U-TIBBER", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-NEO-01", "L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Was ist der zentrale Unterschied zwischen Tibbers Erlösmodell und dem eines klassischen Vollversorgers?",
      optionen: [
        { text: "Tibber verdient an einer fixen monatlichen Abogebühr statt an einer Marge pro verkaufter kWh.", korrekt: true, erklaerung: "Richtig – das ist die fundamentale Umkehrung: Subscription statt Commodity-Marge." },
        { text: "Tibber verkauft ausschließlich Ökostrom, ein Vollversorger nicht.", korrekt: false, erklaerung: "Die Stromherkunft ist nicht der Kernunterschied des Geschäftsmodells – der Unterschied liegt im Erlösmechanismus." },
        { text: "Tibber ist als Grundversorger reguliert, ein Vollversorger nicht.", korrekt: false, erklaerung: "Umgekehrt: Vollversorger sind typischerweise Grundversorger, Tibber ist ein Sondertarif-Anbieter ohne Grundversorgungsstatus." }
      ]
    }
  },
  "Q-TIBBER-R2": {
    id: "Q-TIBBER-R2", unitId: "U-TIBBER", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-01"],
    data: {
      text: "Tibbers Erlös von rund {{a}} €/Monat ist vollständig von der verbrauchten {{b}} entkoppelt. Voraussetzung für volle Automatisierung ist ein {{c}}, das seit 2025 schrittweise Pflicht wird.",
      luecken: {
        a: { loesungen: ["6", "5,99"], erklaerung: "Die Abogebühr liegt bei 5,99 €/Monat (Stand 2025)." },
        b: { loesungen: ["Energiemenge", "Strommenge", "kWh"], erklaerung: "Der Erlös hängt nicht davon ab, wie viel Strom der Kunde verbraucht." },
        c: { loesungen: ["Smart Meter", "intelligentes Messsystem", "iMSys"], erklaerung: "Ohne Smart Meter (iMSys) ist keine stündliche Abrechnung und Steuerung möglich." }
      },
      distraktoren: ["Ladekabel", "Balkonkraftwerk"]
    }
  },
  "Q-TIBBER-R3": {
    id: "Q-TIBBER-R3", unitId: "U-TIBBER", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Welche regulatorische Entwicklung validiert Tibbers Modell für den Massenmarkt?",
      optionen: [
        { text: "§41a EnWG – die Pflicht zu dynamischen Tarifen, zunächst für große Versorger, ab 2025 für alle Lieferanten.", korrekt: true, erklaerung: "Genau dieser Paragraph zwingt den gesamten Markt in Richtung stündlicher Preislogik, die Tibber schon vorher anbot." },
        { text: "Das EEG, weil es Ökostrom-Erzeugung fördert.", korrekt: false, erklaerung: "Das EEG betrifft die Förderung von Erneuerbaren-Erzeugung, nicht die Tarifstruktur von Lieferanten." },
        { text: "Die CSRD-Berichtspflicht für Nachhaltigkeitsberichte.", korrekt: false, erklaerung: "CSRD betrifft Unternehmensberichterstattung zu ESG-Themen, nicht dynamische Stromtarife." }
      ]
    }
  },
  "Q-TIBBER-R4": {
    id: "Q-TIBBER-R4", unitId: "U-TIBBER", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Warum schmilzt Tibbers regulatorischer Vorsprung durch §41a langfristig?",
      optionen: [
        { text: "Weil dynamische Tarife zur Pflicht für alle Lieferanten werden – auch Stadtwerke und Vollversorger können sie dann anbieten.", korrekt: true, erklaerung: "Genau das beschreibt die Angreifbarkeit: Der Vorsprung war ein First-Mover-Vorteil, der durch die Pflicht für alle verschwindet." },
        { text: "Weil Tibber die Lizenz für dynamische Tarife verliert.", korrekt: false, erklaerung: "Es gibt keine Lizenzbeschränkung für dynamische Tarife, die Tibber verlieren könnte." },
        { text: "Weil die EPEX-Börse dynamische Tarife verbietet.", korrekt: false, erklaerung: "Die Strombörse verbietet keine Tarifform – sie ist im Gegenteil die Grundlage für dynamische Preise." }
      ]
    }
  },
  "Q-TIBBER-R5": {
    id: "Q-TIBBER-R5", unitId: "U-TIBBER", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-01", "L3-VERTRIEB-NEO-03"],
    data: { steckbriefId: "L3-VERTRIEB-NEO-01", distraktorSteckbriefId: "L3-VERTRIEB-NEO-03" }
  },
  "Q-TIBBER-T1": {
    id: "Q-TIBBER-T1", unitId: "U-TIBBER", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-01", "L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Ein klassischer Vollversorger überlegt, kurzfristig ein eigenes Tibber-ähnliches Abo-Produkt zu launchen. Was aus der Vollversorger-Lerneinheit erklärt, warum das nicht über Nacht gelingt?",
      optionen: [
        { text: "Der Vollversorger müsste seine IT-Altlasten (z.B. SAP IS-U) durch eine Architektur ersetzen, die stündliche Abrechnung und Automatisierung überhaupt technisch kann.", korrekt: true, erklaerung: "Genau das wurde in der Vollversorger-Einheit als Herausforderung genannt: IT-Legacy erfordert eine teure Migration, bevor dynamische Tarife überhaupt möglich sind." },
        { text: "Der Vollversorger darf laut EnWG keine Abo-Modelle anbieten.", korrekt: false, erklaerung: "Es gibt kein gesetzliches Verbot von Abo-Modellen für Vollversorger." },
        { text: "Der Vollversorger hat keine Kunden mit Smart Metern und kann deshalb nie ein solches Produkt anbieten.", korrekt: false, erklaerung: "Der Smart-Meter-Rollout betrifft alle Versorger gleichermaßen und schreitet voran – das ist eine zeitliche, keine dauerhafte Hürde." }
      ]
    }
  },

  // ── U-TRANSPARENZ ───────────────────────────────────────────────
  "Q-TRANSPARENZ-WE1": {
    id: "Q-TRANSPARENZ-WE1", unitId: "U-TRANSPARENZ", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-03"],
    data: {
      frage: "Was steht NICHT auf der Rechnung eines Ostrom-Kunden?",
      optionen: [
        { text: "Ein Lockpreis für das erste Jahr, der danach automatisch steigt.", korrekt: true, erklaerung: "Richtig – genau das vermeidet Ostrom bewusst; die Rechnung ist in Monat 1 wie in Monat 25 nach demselben Schema aufgebaut." },
        { text: "Der EPEX-Monatsdurchschnittspreis.", korrekt: false, erklaerung: "Dieser Posten steht explizit und transparent auf der Rechnung." },
        { text: "Die Netzentgelte des Netzgebiets.", korrekt: false, erklaerung: "Auch dieser Posten ist Teil der vier transparent ausgewiesenen Rechnungsposten." }
      ]
    }
  },
  "Q-TRANSPARENZ-WE2": {
    id: "Q-TRANSPARENZ-WE2", unitId: "U-TRANSPARENZ", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-NEO-03"],
    data: {
      frage: "Warum liegt Ostroms Kündigungsquote bei nur ~5%/Jahr, obwohl der Tarif im direkten Vergleich mit einem Lockangebot oft teurer wirkt?",
      optionen: [
        { text: "Kunden, die einmal die transparente Preislogik verstanden haben, lassen sich kaum noch von einem neuen Lockangebot eines anderen Anbieters überzeugen.", korrekt: true, erklaerung: "Das ist Ostroms zentrale Vertrauens-These: Verständnis der Preisbildung erzeugt Loyalität, die Lockangebote nicht brechen können." },
        { text: "Ostrom verlangt eine mehrjährige Mindestvertragslaufzeit.", korrekt: false, erklaerung: "Ostrom wirbt explizit mit dem Verzicht auf Lockangebote UND Vertragsbindung – die niedrige Kündigungsquote kommt aus Vertrauen, nicht aus Zwang." },
        { text: "Ostrom ist gesetzlich vor Kündigungen geschützt.", korrekt: false, erklaerung: "Es gibt keinen gesetzlichen Kündigungsschutz für Energielieferanten." }
      ]
    }
  },
  "Q-TRANSPARENZ-R1": {
    id: "Q-TRANSPARENZ-R1", unitId: "U-TRANSPARENZ", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-04"],
    data: {
      frage: "Was ist das Alleinstellungsmerkmal von aWATTar gegenüber Tibber und Ostrom?",
      optionen: [
        { text: "Eine öffentliche, kostenlose API mit Preisen 24h im Voraus – bewusst keine eigene App, um jede Vendor-Lock-in zu vermeiden.", korrekt: true, erklaerung: "Genau das unterscheidet aWATTar: maximale Offenheit über eine Entwickler-Schnittstelle statt eines eigenen geschlossenen Ökosystems." },
        { text: "aWATTar ist der einzige Anbieter mit einem eigenen Ökostrom-Kraftwerk.", korrekt: false, erklaerung: "aWATTar betreibt kein eigenes Kraftwerk – das Modell basiert auf reinem Preis-Pass-Through plus API." },
        { text: "aWATTar bietet als einziger Anbieter eine Preisgarantie über 5 Jahre.", korrekt: false, erklaerung: "Im Gegenteil – aWATTar verzichtet wie Ostrom bewusst auf Preisgarantien und Lockangebote." }
      ]
    }
  },
  "Q-TRANSPARENZ-R2": {
    id: "Q-TRANSPARENZ-R2", unitId: "U-TRANSPARENZ", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-03", "L3-VERTRIEB-NEO-04"],
    data: {
      text: "Ostrom positioniert sich explizit gegen {{a}}, die Lockangebote bevorzugen. aWATTar verzichtet komplett auf eine eigene {{b}} und setzt stattdessen auf eine öffentliche {{c}}, die von einer Entwickler-Community genutzt wird.",
      luecken: {
        a: { loesungen: ["Vergleichsportale"], erklaerung: "Ostrom vertreibt bewusst nicht über Vergleichsportale, weil diese Lockangebote bevorzugen." },
        b: { loesungen: ["App"], erklaerung: "aWATTar hat explizit keine eigene App entwickelt." },
        c: { loesungen: ["API"], erklaerung: "Die offene API ist aWATTars zentrales Differenzierungsmerkmal." }
      },
      distraktoren: ["Filiale", "Community-Karte"]
    }
  },
  "Q-TRANSPARENZ-R3": {
    id: "Q-TRANSPARENZ-R3", unitId: "U-TRANSPARENZ", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-03"],
    data: {
      frage: "Warum ist 'Transparenz' laut Angreifbarkeits-Analyse kein dauerhaft verteidigungsfähiger Wettbewerbsvorteil für Ostrom?",
      optionen: [
        { text: "Ein offen ausgewiesener Kostenaufschlag lässt sich von jedem Wettbewerber genauso leicht kopieren oder unterbieten.", korrekt: true, erklaerung: "Transparenz ist ein Kommunikationsversprechen, kein technischer oder rechtlicher Schutzwall – jeder Wettbewerber kann dieselbe Offenlegung anbieten." },
        { text: "Transparenz ist inzwischen gesetzlich nur noch Ostrom erlaubt.", korrekt: false, erklaerung: "Es gibt kein Exklusivrecht auf transparente Preisausweisung – im Gegenteil, EU-Regulierung fördert sie für alle Anbieter." },
        { text: "Ostrom hat inzwischen sein transparentes Preismodell aufgegeben.", korrekt: false, erklaerung: "Ostrom hält weiterhin an seinem transparenten Preismodell fest – die Angreifbarkeit liegt in der fehlenden Kopierschutzwirkung, nicht in einer Modelländerung." }
      ]
    }
  },
  "Q-TRANSPARENZ-R4": {
    id: "Q-TRANSPARENZ-R4", unitId: "U-TRANSPARENZ", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-04"],
    data: {
      steckbriefId: "L3-VERTRIEB-NEO-04",
      erklaerungenProDimension: {
        regulierung: "Wie bei allen Neolieferanten kein regulatorischer Schutz – reiner Wettbewerbsmarkt.",
        skalierbarkeit: "Ohne eigene App und mit Community-Support skaliert das Modell sehr kosteneffizient, ist aber auf eine Nischenzielgruppe begrenzt.",
        marktrisiko: "Reiner Preis-Pass-Through ohne eigene Marge auf die Energiemenge – geringes eigenes Preisrisiko.",
        digitalisierung: "Die offene API und Integration in Home-Assistant/ioBroker sind hochgradig digital-nativ.",
        wettbewerb: "Tibber hat aWATTar durch stärkeres Marketing und Ökosystem überholt – mittlere Wettbewerbsintensität in der DIY-Nische.",
        nachhaltigkeit: "Fördert indirekt Verbrauchsverschiebung in Zeiten hoher EE-Erzeugung, aber ohne eigenes Klimaprodukt."
      }
    }
  },
  "Q-TRANSPARENZ-T1": {
    id: "Q-TRANSPARENZ-T1", unitId: "U-TRANSPARENZ", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-03", "L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Tibber verdient an einem Abo für Automatisierung, Ostrom an einem fixen Aufschlag für Transparenz. Was ist der gemeinsame strategische Nenner beider Modelle gegenüber einem klassischen Vollversorger?",
      optionen: [
        { text: "Beide verzichten auf verdeckte, variable Kalkulationslogik und machen den Kunden zum Partner statt zum reinen Abnehmer einer intransparenten Marge.", korrekt: true, erklaerung: "Beide Modelle sind eine bewusste Abkehr vom klassischen Modell – nur der Wertkern (Automatisierung vs. Vertrauen) unterscheidet sich." },
        { text: "Beide verlangen als einzige Anbieter eine Mindestvertragslaufzeit von 24 Monaten.", korrekt: false, erklaerung: "Weder Tibber noch Ostrom verlangen lange Mindestvertragslaufzeiten – beide werben im Gegenteil mit Flexibilität." },
        { text: "Beide sind reguliert wie Grundversorger.", korrekt: false, erklaerung: "Keiner von beiden hat Grundversorgungsstatus – sie sind reine Sondertarif-Anbieter im Wettbewerb." }
      ]
    }
  },

  // ── U-OCTOPUS ───────────────────────────────────────────────────
  "Q-OCTOPUS-WE1": {
    id: "Q-OCTOPUS-WE1", unitId: "U-OCTOPUS", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Warum kann ein Octopus-Service-Agent ein Vielfaches der Kunden betreuen, die bei einem klassischen Versorger auf einen Sachbearbeiter kommen?",
      optionen: [
        { text: "Weil Kraken Standardprozesse wie Umzug/Zählerwechsel als einen durchgängigen, automatisierten Vorgang abbildet statt vieler manueller Schritte in getrennten Systemen.", korrekt: true, erklaerung: "Genau das ist der Kern des Kostenvorteils: Prozessautomatisierung statt Alt-IT-Fragmentierung." },
        { text: "Weil Octopus in Deutschland weniger Kunden hat als die Konkurrenz.", korrekt: false, erklaerung: "Das Gegenteil ist der Fall – Octopus ist in Deutschland stark gewachsen (>1 Mio. Kunden seit Sept. 2025)." },
        { text: "Weil Octopus den Kundenservice komplett outsourct.", korrekt: false, erklaerung: "Der Effizienzgewinn kommt aus der eigenen Kraken-Plattform, nicht aus Outsourcing." }
      ]
    }
  },
  "Q-OCTOPUS-WE2": {
    id: "Q-OCTOPUS-WE2", unitId: "U-OCTOPUS", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Was macht Octopus mit den durch Kraken eingesparten Betriebskosten strategisch?",
      optionen: [
        { text: "Investiert sie in aggressivere Tarife, die trotzdem dieselbe Marge tragen wie teurere Angebote der Konkurrenz.", korrekt: true, erklaerung: "Das ist das Flywheel: niedrigere Kosten -> aggressivere Preise -> mehr Wachstum -> mehr Skaleneffekte." },
        { text: "Zahlt sie vollständig als Dividende an Aktionäre aus.", korrekt: false, erklaerung: "Der Steckbrief beschreibt eine Wachstumsstrategie über Preisaggressivität, nicht eine Dividendenstrategie." },
        { text: "Investiert sie ausschließlich in TV-Werbung.", korrekt: false, erklaerung: "Die Differenzierung liegt im Kostenvorteil und in Bundles, nicht primär in Werbeausgaben." }
      ]
    }
  },
  "Q-OCTOPUS-R1": {
    id: "Q-OCTOPUS-R1", unitId: "U-OCTOPUS", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Was passiert Mitte 2026 mit der Kraken-Plattform?",
      optionen: [
        { text: "Sie wird als eigenständiges Unternehmen abgespalten (Bewertung ~8,65 Mrd. $), Octopus Retail bleibt Ankerkunde mit Restbeteiligung.", korrekt: true, erklaerung: "Der Kraken-Spin-off zeigt, dass der Unternehmenswert stärker in der Software als im Energievertrieb liegt." },
        { text: "Sie wird eingestellt, weil sie zu teuer im Betrieb ist.", korrekt: false, erklaerung: "Im Gegenteil – Kraken wird als eigenständiges, hochbewertetes Unternehmen abgespalten, nicht eingestellt." },
        { text: "Sie wird exklusiv nur noch für Octopus selbst genutzt, nicht mehr lizenziert.", korrekt: false, erklaerung: "Kraken wird bereits an mehrere Wettbewerber (EDF, E.ON Next, Origin, Tokyo Gas) lizenziert und bleibt das auch nach dem Spin-off." }
      ]
    }
  },
  "Q-OCTOPUS-R2": {
    id: "Q-OCTOPUS-R2", unitId: "U-OCTOPUS", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-05", "L3-VERTRIEB-VOLL-01"],
    data: { steckbriefId: "L3-VERTRIEB-NEO-05", distraktorSteckbriefId: "L3-VERTRIEB-VOLL-01" }
  },
  "Q-OCTOPUS-R3": {
    id: "Q-OCTOPUS-R3", unitId: "U-OCTOPUS", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-05"],
    data: {
      steckbriefId: "L3-VERTRIEB-NEO-05",
      erklaerungenProDimension: {
        regulierung: "Wie alle Neolieferanten kein regulatorischer Schutz – voller Wettbewerb, zusätzlich abhängig vom Smart-Meter-Rollout.",
        skalierbarkeit: "Kraken ist explizit für massives, plattformbasiertes Wachstum gebaut – sehr hohe Skalierbarkeit, auch als Lizenzprodukt.",
        marktrisiko: "Dünne, bewusst aggressiv kalkulierte Marge bei Hyperwachstum – moderates Preis-/Margenrisiko.",
        digitalisierung: "Kraken ist eine Cloud-native Plattform – Digitalisierung ist der Kern des gesamten Geschäftsmodells.",
        wettbewerb: "Aggressive Wachstumsstrategie in einem intensiven Markt mit Tibber, Vollversorgern und Discountern.",
        nachhaltigkeit: "Bundles um Wärmepumpe und EV fördern Sektorkopplung, ohne dass Nachhaltigkeit der Kernwertversprechen ist."
      }
    }
  },
  "Q-OCTOPUS-R4": {
    id: "Q-OCTOPUS-R4", unitId: "U-OCTOPUS", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-05"],
    data: {
      text: "Octopus Energy überschritt in Deutschland im {{a}} die Marke von {{b}} Kunden. Der Kern des Modells ist die Plattform {{c}}, die auch an Wettbewerber lizenziert wird.",
      luecken: {
        a: { loesungen: ["September 2025", "Sept. 2025", "September"], erklaerung: "Die 1-Mio.-Marke wurde im September 2025 überschritten." },
        b: { loesungen: ["1 Mio.", "einer Million", "1 Million"], erklaerung: "Die deutsche Kundenzahl verdoppelte sich binnen zwölf Monaten auf über 1 Mio." },
        c: { loesungen: ["Kraken"], erklaerung: "Kraken ist Octopus' selbst entwickeltes Cloud-Kernsystem." }
      },
      distraktoren: ["Neptun", "2 Mio."]
    }
  },
  "Q-OCTOPUS-T1": {
    id: "Q-OCTOPUS-T1", unitId: "U-OCTOPUS", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-05", "L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Ein Vollversorger mit SAP-IS-U-Altlasten beobachtet Octopus' Wachstum. Was aus der Vollversorger-Einheit erklärt, warum er Octopus' Kostenvorteil nicht einfach 'nachbauen' kann?",
      optionen: [
        { text: "Die Migration von Alt-IT zu einer Kraken-ähnlichen Architektur ist eine mehrjährige, teure Transformation – kein Software-Update über Nacht.", korrekt: true, erklaerung: "Das deckt sich mit der in der Vollversorger-Einheit genannten Herausforderung: IT-Legacy erfordert eine grundlegende Neuarchitektur, keine schnelle Anpassung." },
        { text: "Vollversorger dürfen laut EnWG keine Cloud-Software nutzen.", korrekt: false, erklaerung: "Es gibt kein gesetzliches Verbot für Cloud-Software bei Energieversorgern." },
        { text: "Octopus hat ein Patent auf automatisierte Kundenprozesse.", korrekt: false, erklaerung: "Der Vorteil liegt in der Plattformarchitektur und Ausführung, nicht in einem rechtlichen Patentschutz." }
      ]
    }
  },

  // ── U-IMPACT ────────────────────────────────────────────────────
  "Q-IMPACT-WE1": {
    id: "Q-IMPACT-WE1", unitId: "U-IMPACT", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-02"],
    data: {
      szenario: "Ein Haushalt mit 3.500 kWh Jahresverbrauch zahlt bei Fünf Grad einen Aufpreis von 2,5 ct/kWh gegenüber dem Marktdurchschnitt. Wie hoch ist der jährliche Mehrbetrag in Euro?",
      eingabefelder: [{ key: "mehrbetrag", label: "Jährlicher Mehrbetrag", einheit: "€" }],
      loesung: { mehrbetrag: { wert: 87.5, toleranz: 20 } },
      rechenweg: ["Mehrbetrag = Aufpreis × Jahresverbrauch = 2,5 ct/kWh × 3.500 kWh = 8.750 ct = 87,50 €.", "Davon fließen ca. 0,5 ct/kWh (~17,50 €) direkt in das Klimaprojekt, der Rest ist reguläre Retail-Marge."]
    }
  },
  "Q-IMPACT-WE2": {
    id: "Q-IMPACT-WE2", unitId: "U-IMPACT", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-NEO-02"],
    data: {
      frage: "Warum kann ein Konzern-Ökotarif mit HKN-Zertifikaten aus einem 30 Jahre alten norwegischen Wasserkraftwerk keine 'neue' Klimawirkung nachweisen?",
      optionen: [
        { text: "Weil das Wasserkraftwerk ohnehin schon längst gebaut und abgeschrieben ist – der Zertifikatskauf finanziert keine zusätzliche Erzeugung oder neues Projekt.", korrekt: true, erklaerung: "Genau das ist der 'Zusätzlichkeits'-Einwand: Ohne neue Investition entsteht keine zusätzliche Klimawirkung." },
        { text: "Weil norwegischer Strom physikalisch nicht nach Deutschland fließen kann.", korrekt: false, erklaerung: "Das Stromnetz ist europäisch verbunden – die physikalische Herkunft ist ohnehin nicht das Kernproblem, sondern die fehlende Zusätzlichkeit." },
        { text: "Weil HKN-Zertifikate gesetzlich verboten sind.", korrekt: false, erklaerung: "HKN-Zertifikate sind ein legales, etabliertes System (RECS) – der Kritikpunkt ist inhaltlich, nicht rechtlich." }
      ]
    }
  },
  "Q-IMPACT-R1": {
    id: "Q-IMPACT-R1", unitId: "U-IMPACT", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-OEKO-01"],
    data: {
      frage: "Was unterscheidet Naturstroms Beschaffung strukturell von einem Konzern-Ökotarif?",
      optionen: [
        { text: "Direktlieferverträge ausschließlich mit maximal 10 Jahre alten EE-Anlagen statt HKN-Zukauf von Altanlagen.", korrekt: true, erklaerung: "Das ist Naturstroms strengster Qualitätsstandard, der große Versorger strukturell ausschließt." },
        { text: "Naturstrom liefert ausschließlich Strom aus dem Ausland.", korrekt: false, erklaerung: "Im Gegenteil – der Fokus liegt gerade auf deutschen bzw. europäischen Neuanlagen mit Zusätzlichkeit." },
        { text: "Naturstrom garantiert einen niedrigeren Preis als jeder Konzerntarif.", korrekt: false, erklaerung: "Naturstrom positioniert sich als Premium-Anbieter mit Glaubwürdigkeitsprämie, nicht als Billiganbieter." }
      ]
    }
  },
  "Q-IMPACT-R2": {
    id: "Q-IMPACT-R2", unitId: "U-IMPACT", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-OEKO-01"],
    data: {
      frage: "Wie groß ist ungefähr LichtBlicks Kundenbasis, und was zeigt das über das Premium-Ökostrom-Segment?",
      optionen: [
        { text: "~1,7 Mio. Verträge – zeigt, dass Ökostrom-Spezialisierung auch im Massenmarkt skalieren kann, wenn auch mit weicheren Kriterien als Naturstrom.", korrekt: true, erklaerung: "LichtBlick ist unter den fünf größten Stromlieferanten Deutschlands – ein Beleg, dass Ökostrom-Fokus kein reines Nischenmodell bleiben muss." },
        { text: "~20.000 Verträge – ein reines Nischenprodukt ohne Massenmarktrelevanz.", korrekt: false, erklaerung: "LichtBlick ist mit ~1,7 Mio. Verträgen tatsächlich einer der größten Lieferanten Deutschlands, kein Nischenanbieter." },
        { text: "LichtBlick beliefert ausschließlich Geschäftskunden.", korrekt: false, erklaerung: "LichtBlick ist primär auf den B2C-Massenmarkt ausgerichtet." }
      ]
    }
  },
  "Q-IMPACT-R3": {
    id: "Q-IMPACT-R3", unitId: "U-IMPACT", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-OEKO-01"],
    data: {
      text: "Naturstrom und Green Planet Energy schließen sich strukturell von Konzernwettbewerb ab durch drei Kriterien: Direktlieferverträge nur mit {{a}}, Konzernunabhängigkeit ohne {{b}}-Strom im Mutterkonzern, und einen Teil des Erlöses für {{c}}.",
      luecken: {
        a: { loesungen: ["Neuanlagen"], erklaerung: "Maximal 10 Jahre alte Anlagen, keine HKN von Altanlagen." },
        b: { loesungen: ["Atom", "Atom/Kohle", "Kohle"], erklaerung: "Konzernunabhängigkeit bedeutet: kein Atom- oder Kohlestrom im Mutterkonzern." },
        c: { loesungen: ["Ausbauförderung"], erklaerung: "Ein Teil des Erlöses fließt in den Ausbau neuer EE-Anlagen." }
      },
      distraktoren: ["Werbebudget", "Filialnetz"]
    }
  },
  "Q-IMPACT-R4": {
    id: "Q-IMPACT-R4", unitId: "U-IMPACT", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-02"],
    data: {
      steckbriefId: "L3-VERTRIEB-NEO-02",
      erklaerungenProDimension: {
        regulierung: "Keine besonderen regulatorischen Vorgaben über die üblichen Stromkennzeichnungspflichten hinaus – geringer Regulierungsschutz.",
        skalierbarkeit: "Die begrenzte Zahl geeigneter Naturschutzprojekte in Deutschland limitiert das Wachstum – mittlere Skalierbarkeit.",
        marktrisiko: "Enge, aber zahlungsbereite Zielgruppe mit geringer Preissensitivität mindert das Marktrisiko etwas.",
        digitalisierung: "Wirkungsreporting und Jahresberichte sind digital, aber kein technologiegetriebenes Kernprodukt.",
        wettbewerb: "Viele Anbieter können ähnliche Klimaprojekt-Bundles auflegen – moderate bis hohe Nachahmungsgefahr.",
        nachhaltigkeit: "Messbare Zusätzlichkeit als expliziter Markenkern – sehr hoher Beitrag zur Energiewende."
      }
    }
  },
  "Q-IMPACT-T1": {
    id: "Q-IMPACT-T1", unitId: "U-IMPACT", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-02", "L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Octopus differenziert sich über einen Kostenvorteil (Kraken), Fünf Grad über eine geprüfte Zusatzwirkung. Was verbindet beide Strategien trotzdem?",
      optionen: [
        { text: "Beide suchen eine Differenzierung, die ein reiner Preisvergleich auf Vergleichsportalen nicht abbilden kann.", korrekt: true, erklaerung: "Beide Modelle entziehen sich bewusst dem reinen ct/kWh-Vergleich – einmal über operative Exzellenz, einmal über glaubwürdige Wirkung." },
        { text: "Beide verlangen den niedrigsten Preis am Markt.", korrekt: false, erklaerung: "Octopus ist preisaggressiv, aber Fünf Grad verlangt explizit einen Aufpreis – 'billigster Preis' ist nicht der gemeinsame Nenner." },
        { text: "Beide sind Tochterunternehmen desselben Konzerns.", korrekt: false, erklaerung: "Octopus und Fünf Grad sind unabhängige, nicht verbundene Unternehmen." }
      ]
    }
  },

  // ── U-STADTWERK ─────────────────────────────────────────────────
  "Q-STADTWERK-WE1": {
    id: "Q-STADTWERK-WE1", unitId: "U-STADTWERK", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-STADTWERK-01"],
    data: {
      frage: "Was genau erlaubt §4 Abs. 6 KStG einem Stadtwerk wie SWM?",
      optionen: [
        { text: "Steuerliche Verrechnung von Gewinnen aus profitablen Sparten (Strom-/Gas-/Wärmenetz) mit Verlusten aus dem ÖPNV innerhalb desselben Konzerns.", korrekt: true, erklaerung: "Das ist der Kern des Querverbunds – eine Möglichkeit, die ein eigenständiges privates ÖPNV-Unternehmen so nicht hätte." },
        { text: "Eine Befreiung von der Umsatzsteuer auf Fernwärme.", korrekt: false, erklaerung: "§4 Abs. 6 KStG betrifft die körperschaftsteuerliche Verlustverrechnung zwischen Sparten, nicht die Umsatzsteuer." },
        { text: "Ein Monopol auf den lokalen ÖPNV-Betrieb.", korrekt: false, erklaerung: "Der Paragraph regelt eine steuerliche Verrechnungsmöglichkeit, kein Marktzugangsmonopol." }
      ]
    }
  },
  "Q-STADTWERK-WE2": {
    id: "Q-STADTWERK-WE2", unitId: "U-STADTWERK", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-STADTWERK-01"],
    data: {
      frage: "Was bedeutet der Querverbund für Investitionsentscheidungen bei SWM konkret?",
      optionen: [
        { text: "Investitionen in Fernwärme vs. ÖPNV werden intern im selben Konzern abgewogen statt zwischen zwei unabhängigen Unternehmen verhandelt.", korrekt: true, erklaerung: "Genau das erklärt, warum SWM sich z.B. eine ambitionierte Geothermie-Fernwärme-Strategie leisten kann, die ein rein gewinnorientierter Betreiber so kaum querfinanzieren würde." },
        { text: "Der Stadtrat hat gar keinen Einfluss auf diese Entscheidungen.", korrekt: false, erklaerung: "Der Stadtrat ist im Gegenteil die letzte politische Entscheidungsinstanz bei diesen Abwägungen." },
        { text: "Fernwärme-Investitionen werden komplett eingestellt, sobald der ÖPNV Verluste macht.", korrekt: false, erklaerung: "Der Querverbund funktioniert in die andere Richtung: profitable Sparten stützen den defizitären ÖPNV, nicht umgekehrt." }
      ]
    }
  },
  "Q-STADTWERK-R1": {
    id: "Q-STADTWERK-R1", unitId: "U-STADTWERK", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-STADTWERK-01"],
    data: {
      frage: "Wie lange dauern typische Kundenbeziehungen bei Stadtwerken laut Steckbrief?",
      optionen: [
        { text: "30-50 Jahre, geprägt durch kommunale Identität.", korrekt: true, erklaerung: "Diese sehr lange Bindungsdauer ist strukturell einzigartig gegenüber bundesweiten Vollversorgern oder Neolieferanten." },
        { text: "1-2 Jahre, ähnlich wie bei Neolieferanten.", korrekt: false, erklaerung: "Das Gegenteil ist der Fall – Stadtwerke-Kundenbeziehungen sind besonders langfristig und stabil." },
        { text: "Es gibt keine Kundenbindung, da alle Kunden gesetzlich jährlich neu zugeteilt werden.", korrekt: false, erklaerung: "Es gibt keine gesetzliche Neuzuteilung – die lange Bindung entsteht aus kommunaler Identität und Vertrauen." }
      ]
    }
  },
  "Q-STADTWERK-R2": {
    id: "Q-STADTWERK-R2", unitId: "U-STADTWERK", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-STADTWERK-01"],
    data: {
      text: "Stadtwerke liefern typischerweise Strom, Gas, {{a}}, Wasser und oft {{b}} aus einer Hand. Der finanzielle Mechanismus dahinter heißt {{c}}.",
      luecken: {
        a: { loesungen: ["Wärme"], erklaerung: "Wärme (Fernwärme) ist eine der klassischen Stadtwerke-Sparten." },
        b: { loesungen: ["ÖPNV"], erklaerung: "Viele Stadtwerke betreiben auch den öffentlichen Nahverkehr." },
        c: { loesungen: ["Querverbund"], erklaerung: "Der Querverbund ist der steuerlich anerkannte Quersubventionsmechanismus." }
      },
      distraktoren: ["Franchise", "Outsourcing"]
    }
  },
  "Q-STADTWERK-R3": {
    id: "Q-STADTWERK-R3", unitId: "U-STADTWERK", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-STADTWERK-01", "L3-VERTRIEB-NEO-01"],
    data: { steckbriefId: "L3-VERTRIEB-STADTWERK-01", distraktorSteckbriefId: "L3-VERTRIEB-NEO-01" }
  },
  "Q-STADTWERK-R4": {
    id: "Q-STADTWERK-R4", unitId: "U-STADTWERK", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-STADTWERK-01"],
    data: {
      frage: "Was greift laut Angreifbarkeits-Analyse gezielt die träge, loyale Stadtwerke-Kundenbasis an?",
      optionen: [
        { text: "Vergleichsportale und Neolieferanten picken die wechselwilligen, margenstärksten Kunden heraus ('Rosinenpicken').", korrekt: true, erklaerung: "Genau das beschreibt die Angreifbarkeit – die stabile Basis bleibt zwar meist treu, aber die margenstärksten, wechselwilligen Kunden werden gezielt abgeworben." },
        { text: "Der Bund verbietet Stadtwerken den Betrieb von Wärmenetzen.", korrekt: false, erklaerung: "Es gibt kein solches Verbot – im Gegenteil, Wärmenetze werden als wachsendes Alleinstellungsmerkmal genannt." },
        { text: "Stadtwerke verlieren automatisch ihre Konzession nach 10 Jahren.", korrekt: false, erklaerung: "Konzessionslaufzeiten sind länger und nicht der im Steckbrief genannte Angriffsvektor." }
      ]
    }
  },
  "Q-STADTWERK-T1": {
    id: "Q-STADTWERK-T1", unitId: "U-STADTWERK", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-STADTWERK-01", "L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Sowohl ein klassischer Vollversorger als auch ein Stadtwerk haben eine 'träge' Kundenbasis. Was unterscheidet die Ursache dieser Trägheit strukturell?",
      optionen: [
        { text: "Beim Vollversorger entsteht Trägheit vor allem durch den automatischen Grundversorgungsstatus, beim Stadtwerk zusätzlich durch jahrzehntelange kommunale Identität und Vertrauen.", korrekt: true, erklaerung: "Beide Mechanismen erzeugen Trägheit, aber die Stadtwerke-Bindung ist zusätzlich emotional/lokal verankert, nicht nur administrativ-rechtlich wie beim GVT." },
        { text: "Es gibt keinen Unterschied – beide Formen von Trägheit sind identisch und gesetzlich vorgeschrieben.", korrekt: false, erklaerung: "Der GVT-Mechanismus ist rechtlich (§36 EnWG), die Stadtwerke-Bindung ist primär kulturell/vertrauensbasiert – das sind unterschiedliche Ursachen." },
        { text: "Stadtwerke-Kunden sind gesetzlich zum Vertragsverbleib verpflichtet.", korrekt: false, erklaerung: "Es gibt keine gesetzliche Wechselpflicht oder -verbot – jeder Kunde kann frei wechseln." }
      ]
    }
  },

  // ── U-VERGLEICH ─────────────────────────────────────────────────
  "Q-VERGLEICH-WE1": {
    id: "Q-VERGLEICH-WE1", unitId: "U-VERGLEICH", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERGL-B2C-01"],
    data: {
      frage: "Wonach richtet sich in erster Linie, welche Tarife ein Vergleichsportal einem Nutzer prominent anzeigt?",
      optionen: [
        { text: "Vor allem nach bestehenden Provisionsvereinbarungen mit Lieferanten – eine höhere CPA-Rate kann zu besserer Platzierung führen.", korrekt: true, erklaerung: "Genau das ist der im Steckbrief beschriebene Mechanismus: Sichtbarkeit ist teilweise käuflich, unabhängig vom zugrunde liegenden Tarif." },
        { text: "Ausschließlich nach dem niedrigsten Gesamtpreis über alle am Markt verfügbaren Tarife.", korrekt: false, erklaerung: "Das wäre ein rein neutraler Vergleich – tatsächlich beeinflusst die Provisionshöhe die Platzierung mit." },
        { text: "Nach dem CO₂-Fußabdruck des jeweiligen Tarifs.", korrekt: false, erklaerung: "Nachhaltigkeit ist kein primäres Ranking-Kriterium der beschriebenen CPA-Portale." }
      ]
    }
  },
  "Q-VERGLEICH-WE2": {
    id: "Q-VERGLEICH-WE2", unitId: "U-VERGLEICH", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-VERGL-B2B-01"],
    data: {
      szenario: "Ein B2B-Maschinenbauer mit 5 GWh Jahresverbrauch findet über energie.de einen Lieferanten. Die Brokergebühr beträgt 0,03 ct/kWh auf das vermittelte Volumen. Wie hoch ist die Brokergebühr in Euro?",
      eingabefelder: [{ key: "gebuehr", label: "Brokergebühr", einheit: "€" }],
      loesung: { gebuehr: { wert: 1500, toleranz: 300 } },
      rechenweg: ["5 GWh = 5.000.000 kWh.", "Brokergebühr = 5.000.000 kWh × 0,03 ct/kWh = 150.000 ct = 1.500 €."]
    }
  },
  "Q-VERGLEICH-R1": {
    id: "Q-VERGLEICH-R1", unitId: "U-VERGLEICH", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERGL-B2C-02"],
    data: {
      frage: "Was ist der zentrale Unterschied zwischen einem klassischen Vergleichsportal (Verivox/Check24) und Wechselpilot?",
      optionen: [
        { text: "Wechselpilot übernimmt per Kundenvollmacht den Tarifwechsel dauerhaft und jährlich, statt nur einmalig zu vermitteln.", korrekt: true, erklaerung: "Das ist die entscheidende Weiterentwicklung: Recurring Abo-Erlös statt einmaliger CPA-Provision." },
        { text: "Wechselpilot verlangt vom Kunden keine Vollmacht.", korrekt: false, erklaerung: "Im Gegenteil – die Kundenvollmacht ist die zentrale Grundlage des Wechselpilot-Modells." },
        { text: "Wechselpilot arbeitet nur mit einem einzigen Lieferanten zusammen.", korrekt: false, erklaerung: "Wechselpilot vergleicht wie ein Portal über den gesamten Markt, überwacht diesen aber kontinuierlich statt nur punktuell." }
      ]
    }
  },
  "Q-VERGLEICH-R2": {
    id: "Q-VERGLEICH-R2", unitId: "U-VERGLEICH", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERGL-B2C-01", "L3-VERGL-B2C-02", "L3-VERGL-B2B-01"],
    data: {
      text: "Verivox/Check24 verdienen an einer {{a}}, die der Lieferant pro vermitteltem Neukunden zahlt. Wechselpilot verdient stattdessen an einer {{b}}. Im B2B-Segment heißt die vergleichbare Gebühr {{c}}.",
      luecken: {
        a: { loesungen: ["CPA-Provision", "Cost-per-Acquisition-Provision", "Provision"], erklaerung: "CPA = Cost per Acquisition, eine einmalige Vermittlungsprovision." },
        b: { loesungen: ["Abogebühr", "monatlichen Abogebühr", "Abo-Gebühr"], erklaerung: "Wechselpilot verlangt eine laufende Abogebühr (oder Erfolgsprovision)." },
        c: { loesungen: ["Brokergebühr"], erklaerung: "Im B2B-Segment heißt die vermittlungsbasierte Gebühr Brokergebühr." }
      },
      distraktoren: ["Grundgebühr", "Netzentgelt"]
    }
  },
  "Q-VERGLEICH-R3": {
    id: "Q-VERGLEICH-R3", unitId: "U-VERGLEICH", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VERGL-B2C-01"],
    data: {
      frage: "Warum sind Vergleichsportale wie Verivox/Check24 selbst angreifbar, obwohl sie die Vollversorger-Marge angreifen?",
      optionen: [
        { text: "Neolieferanten wie Tibber, die bewusst nicht auf Portalen listen und über Direktmarketing wachsen, umgehen die CPA-Abhängigkeit vollständig.", korrekt: true, erklaerung: "Das ist einer der drei im Steckbrief genannten Angriffsvektoren – Direct-to-Consumer-Wachstum ohne Portal-Provisionsabhängigkeit." },
        { text: "Vergleichsportale dürfen laut EnWG keine Provisionen mehr verlangen.", korrekt: false, erklaerung: "Es gibt kein solches gesetzliches Verbot – Provisionsmodelle sind weiterhin zulässig, nur transparenzpflichtig." },
        { text: "Alle Energielieferanten haben sich zusammengeschlossen, um Vergleichsportale zu boykottieren.", korrekt: false, erklaerung: "Es gibt keinen bekannten koordinierten Boykott – viele Lieferanten nutzen Portale weiterhin aktiv." }
      ]
    }
  },
  "Q-VERGLEICH-R4": {
    id: "Q-VERGLEICH-R4", unitId: "U-VERGLEICH", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-VERGL-B2C-01", "L3-VERGL-B2C-02"],
    data: { steckbriefId: "L3-VERGL-B2C-01", distraktorSteckbriefId: "L3-VERGL-B2C-02" }
  },
  "Q-VERGLEICH-T1": {
    id: "Q-VERGLEICH-T1", unitId: "U-VERGLEICH", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERGL-B2C-01", "L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Tibber vertreibt bewusst nicht über Vergleichsportale. Was aus dieser Lerneinheit erklärt, warum sich das für Tibber lohnen kann?",
      optionen: [
        { text: "Tibber spart die CPA-Provision (20-60 €/Kunde) komplett, was bei einem eh schon dünnen Abo-Erlös strukturell viel ausmacht.", korrekt: true, erklaerung: "Genau das ist der Zusammenhang: Direktvertrieb vermeidet die CPA-Kosten, die bei Tibbers CAC-Rechnung (~100 €/Kunde) sonst noch höher ausfallen würden." },
        { text: "Vergleichsportale listen grundsätzlich keine Neolieferanten.", korrekt: false, erklaerung: "Portale listen durchaus auch Neolieferanten – es ist eine bewusste strategische Entscheidung Tibbers, nicht eine Ausgrenzung durch die Portale." },
        { text: "Tibber hat exklusiv das Recht, außerhalb von Portalen zu werben.", korrekt: false, erklaerung: "Es gibt kein Exklusivrecht – jeder Anbieter kann sich für oder gegen Portalvertrieb entscheiden." }
      ]
    }
  }

});

// ── Validierung (Konsole): prüft, dass alle Referenzen auflösen ──────
(function validateLernData() {
  const errors = [];
  const unitIds = new Set(LERN_UNITS.map((u) => u.id));
  LERN_MODULES.forEach((m) => m.unitIds.forEach((id) => { if (!unitIds.has(id)) errors.push(`Modul ${m.id}: unbekannte unitId ${id}`); }));
  LERN_UNITS.forEach((u) => {
    const allQ = [
      ...u.workedExample.steps.map((s) => s.questionId),
      ...u.retrievalItemIds,
      u.transferItemId
    ];
    allQ.forEach((qid) => { if (!LERN_QUIZ_ITEMS[qid]) errors.push(`Einheit ${u.id}: unbekannte questionId ${qid}`); });
  });
  Object.values(LERN_QUIZ_ITEMS).forEach((item) => {
    (item.steckbriefIds || []).forEach((sid) => {
      const found = (typeof GM_DATA !== 'undefined' ? GM_DATA : []).some((d) => (d.capabilities || []).some((c) => (c.items || []).some((i) => i.id === sid)));
      if (!found) errors.push(`Item ${item.id}: unbekannte steckbriefId ${sid}`);
    });
  });
  if (errors.length) console.warn('lern-data.js Validierung — Probleme gefunden:', errors);
  else console.log('lern-data.js Validierung OK:', LERN_UNITS.length, 'Einheiten,', Object.keys(LERN_QUIZ_ITEMS).length, 'Quiz-Items.');
})();
