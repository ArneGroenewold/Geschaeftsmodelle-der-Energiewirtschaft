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
      frage: "Warum investiert E.ON massiv in Wallbox-, Wärmepumpen- und PV-Angebote für Bestandskunden, obwohl das Kerngeschäft Strom kaum Marge bringt?",
      optionen: [
        { text: "Weil beim Bestandskunden keine Akquisitionskosten anfallen und die Zusatzmarge dieser Produkte die dünne Strommarge um ein Vielfaches übersteigt.", korrekt: true, erklaerung: "Genau das ist der Cross-Selling-Hebel: Der Kunde ist schon da, und eine Wallbox oder ein PV-Pachtvertrag bringt mehr als viele Jahre Strommarge." },
        { text: "Weil die Wallbox den Stromverbrauch des Kunden erhöht und E.ON dadurch mehr kWh-Marge verdient.", korrekt: false, erklaerung: "Klingt plausibel, greift aber zu kurz: Bei 1–2 ct/kWh bringt selbst der Mehrverbrauch eines E-Autos (~2.500 kWh/Jahr) nur ~25–50 € zusätzlich – die Gerätemarge und Vertragsbindung sind der eigentliche Hebel." },
        { text: "Weil §41a EnWG Versorger verpflichtet, ihren Kunden Komplettlösungen für Elektromobilität anzubieten.", korrekt: false, erklaerung: "§41a verpflichtet nur zu dynamischen Tarifen, nicht zu Hardware-Angeboten – das Cross-Selling ist eine rein wirtschaftliche Entscheidung." }
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
        { text: "Weil sie nie aktiv einen Vertrag abgeschlossen haben und ein Wechsel für sie keinen erkennbaren Mehrwert verspricht – Trägheit statt Entscheidung.", korrekt: true, erklaerung: "Genau das ist die 'stille' Trägheit des Grundversorgungsstatus – ohne aktiven Impuls bleiben Kunden im GVT, selbst wenn er teurer ist." },
        { text: "Weil der GVT als einziger Tarif eine gesetzlich garantierte Preisobergrenze bietet, die vielen Kunden Sicherheit gibt.", korrekt: false, erklaerung: "Der GVT hat keine gesetzliche Preisobergrenze – er ist nur transparent kalkulierbar (StromGVV), kann aber jederzeit angepasst werden und ist oft teurer als Sondertarife." },
        { text: "Weil die Kündigungsfrist in der Grundversorgung mehrere Monate beträgt und einen schnellen Wechsel praktisch verhindert.", korrekt: false, erklaerung: "Das Gegenteil stimmt: Die Grundversorgung ist mit zwei Wochen Frist besonders leicht kündbar – die Hürde ist psychologisch (Trägheit), nicht vertraglich." }
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
  "Q-VOLL-R6": {
    id: "Q-VOLL-R6", unitId: "U-VOLL", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Sind 'Vollversorger' und 'Grundversorger' dasselbe?",
      optionen: [
        { text: "Nein – Vollversorgung beschreibt die Vertragsform (Lieferant deckt den gesamten Bedarf), Grundversorgung ist ein gesetzlicher Status nach §36 EnWG. Jeder Grundversorger ist Vollversorger, aber nicht umgekehrt.", korrekt: true, erklaerung: "Genau: Auch Tibber oder Octopus liefern 'Vollversorgung' im Vertragssinn – Grundversorger ist aber nur, wer im Netzgebiet die meisten Haushaltskunden hat und deshalb per Gesetz jeden Vertragslosen beliefern muss." },
        { text: "Ja – beide Begriffe bezeichnen den gesetzlich bestellten Lieferanten eines Netzgebiets, nur in unterschiedlichen Gesetzen.", korrekt: false, erklaerung: "Nein – nur die Grundversorgung ist ein gesetzlicher Status (§36 EnWG). 'Vollversorgung' ist keine gesetzliche Bestellung, sondern beschreibt lediglich, dass der Lieferant den kompletten Bedarf des Kunden deckt." },
        { text: "Nein – Vollversorger beliefern Haushalte, Grundversorger ausschließlich Gewerbe- und Industriekunden.", korrekt: false, erklaerung: "Umgekehrt wird ein Schuh draus: Die Grundversorgung gilt gerade für Haushaltskunden (in Niederspannung); Industriekunden mit strukturierter Beschaffung sind das klassische Gegenbeispiel zur Vollversorgung." }
      ]
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
      frage: "Die App wählt für das E-Auto-Laden meist Stunden tief in der Nacht. Was ist der Grund?",
      optionen: [
        { text: "Der Börsen-Spotpreis ist nachts meist am niedrigsten – geringe Nachfrage trifft oft auf hohen Windstromanteil.", korrekt: true, erklaerung: "Genau – niedrige Nachfrage und viel Windstrom drücken den Spotpreis in der Nacht meist deutlich. Die App optimiert rein auf den stündlichen Preis." },
        { text: "Nachts gelten niedrigere Netzentgelte, die den Strompreis für den Kunden senken.", korrekt: false, erklaerung: "Plausibel klingend, aber falsch: Netzentgelte sind (noch) zeitunabhängig fix – die Ersparnis kommt allein aus dem schwankenden Börsenpreis. Zeitvariable Netzentgelte (§14a) sind erst im Kommen." },
        { text: "Tibber kauft nachts größere Strommengen im Voraus ein und gibt den Mengenrabatt weiter.", korrekt: false, erklaerung: "Tibber kauft nicht auf Vorrat mit Rabatt – der stündliche EPEX-Spotpreis wird 1:1 ohne Aufschlag oder Abschlag durchgereicht." }
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
      frage: "§41a EnWG validiert Tibbers Modell – warum ist derselbe Paragraph zugleich eine Bedrohung für Tibber?",
      optionen: [
        { text: "Weil dynamische Tarife zur Pflicht für alle Lieferanten werden – Stadtwerke und Vollversorger können das einstige Alleinstellungsmerkmal dann mit ihrer bestehenden Kundenbasis bündeln.", korrekt: true, erklaerung: "Genau das beschreibt die Angreifbarkeit: Der First-Mover-Vorteil verschwindet, wenn das Produkt zur Pflichtausstattung wird – verteidigungsfähig bleiben nur App-Qualität und Ökosystem." },
        { text: "Weil §41a Höchstgrenzen für Grundgebühren einführt, die Tibbers Abo-Modell direkt begrenzen.", korrekt: false, erklaerung: "§41a regelt keine Grundgebühren-Obergrenzen – er verpflichtet Lieferanten lediglich, dynamische Tarife anzubieten." },
        { text: "Weil §41a die Weitergabe stündlicher Börsenpreise an Haushaltskunden an strenge Risikoprüfungen knüpft, die Tibbers Kostenvorteil auffressen.", korrekt: false, erklaerung: "Solche Risikoprüfungen sieht §41a nicht vor – die Bedrohung liegt nicht in Auflagen für Tibber, sondern darin, dass alle Wettbewerber dasselbe Produkt anbieten müssen." }
      ]
    }
  },
  "Q-TIBBER-R5": {
    id: "Q-TIBBER-R5", unitId: "U-TIBBER", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-01", "L3-VERTRIEB-NEO-03"],
    data: { steckbriefId: "L3-VERTRIEB-NEO-01", distraktorSteckbriefId: "L3-VERTRIEB-NEO-03" }
  },
  "Q-TIBBER-R6": {
    id: "Q-TIBBER-R6", unitId: "U-TIBBER", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-01"],
    data: {
      szenario: "Ein Tibber-Kunde kündigt nach genau 12 Monaten. Die Akquise hatte 100 € gekostet (CAC), das Abo bringt 5,99 €/Monat. Wie viel Verlust macht Tibber mit diesem Kunden (in €, gerundet)? Und ab welchem Monat wäre der Kunde profitabel geworden?",
      eingabefelder: [{ key: "verlust", label: "Verlust mit diesem Kunden", einheit: "€" }, { key: "breakeven", label: "Breakeven ab Monat", einheit: "" }],
      loesung: { verlust: { wert: 28, toleranz: 3 }, breakeven: { wert: 17, toleranz: 1 } },
      rechenweg: ["Erlös in 12 Monaten = 12 × 5,99 € = 71,88 €.", "Verlust = 100 € CAC − 71,88 € ≈ 28 €.", "Breakeven: 100 € ÷ 5,99 €/Monat ≈ 16,7 → ab dem 17. Monat ist der Kunde profitabel.", "Genau deshalb ist niedriger Churn für Tibber überlebenswichtig: Jeder Kunde, der vor Monat 17 geht, ist ein Verlustgeschäft."]
    }
  },
  "Q-TIBBER-T1": {
    id: "Q-TIBBER-T1", unitId: "U-TIBBER", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERTRIEB-NEO-01", "L3-VERTRIEB-VOLL-01"],
    data: {
      frage: "Ein klassischer Vollversorger überlegt, kurzfristig ein eigenes Tibber-ähnliches Abo-Produkt zu launchen. Was aus der Vollversorger-Lerneinheit erklärt, warum das nicht über Nacht gelingt?",
      optionen: [
        { text: "Der Vollversorger müsste seine IT-Altlasten (z.B. SAP IS-U) durch eine Architektur ersetzen, die stündliche Abrechnung und Automatisierung überhaupt technisch kann.", korrekt: true, erklaerung: "Genau das wurde in der Vollversorger-Einheit als Herausforderung genannt: IT-Legacy erfordert eine teure, mehrjährige Migration, bevor dynamische Tarife im Massengeschäft überhaupt möglich sind." },
        { text: "Ein Abo-Produkt würde die bestehende kWh-Marge des Vollversorgers kannibalisieren – das kann er sich wirtschaftlich nicht leisten.", korrekt: false, erklaerung: "Kannibalisierung ist ein reales strategisches Dilemma, aber kein technisches Hindernis – und bei 0,5–2 ct/kWh Marge ist wenig zu kannibalisieren. Die harte Hürde ist die IT-Architektur." },
        { text: "Tibbers App-Funktionen sind patentrechtlich geschützt und dürfen nicht nachgebaut werden.", korrekt: false, erklaerung: "Dynamische Tarife und Ladeoptimierung sind nicht patentgeschützt – der Schutz liegt in Ausführung, UX und Ökosystem, nicht in Schutzrechten." }
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
      frage: "Wie erklärt sich Ostroms Kündigungsquote von nur ~5%/Jahr, obwohl der Tarif im Portalvergleich oft teurer wirkt als Lockangebote?",
      optionen: [
        { text: "Kunden, die die transparente Preislogik einmal verstanden haben, durchschauen auch die Lockangebots-Mechanik anderer Anbieter – und wechseln deshalb nicht mehr.", korrekt: true, erklaerung: "Das ist Ostroms zentrale Vertrauens-These: Verständnis der Preisbildung erzeugt eine Loyalität, die ein kurzfristiger Bonuspreis nicht brechen kann." },
        { text: "Ostroms Tarif ist über die Vertragslaufzeit gerechnet fast immer der objektiv günstigste – Kunden bleiben aus reinem Preisvorteil.", korrekt: false, erklaerung: "Nein, Ostrom kommuniziert selbst 'Wir sind nicht der günstigste – aber immer fair.' Die Bindung entsteht aus Vertrauen und Verständnis, nicht aus garantierter Preisführerschaft." },
        { text: "Ostrom-Kunden erhalten einen jährlich wachsenden Treuebonus, der bei Kündigung verfällt.", korrekt: false, erklaerung: "Ostrom arbeitet gerade ohne Boni jeder Art – das ist der Kern der Positionierung. Es gibt keinen Treuebonus als Lock-in-Mechanismus." }
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
        { text: "Ein offen ausgewiesener Kostenaufschlag lässt sich von jedem Wettbewerber kopieren oder unterbieten – und ohne Hardware-Ökosystem fehlt das Lock-in.", korrekt: true, erklaerung: "Transparenz ist ein Kommunikationsversprechen, kein struktureller Schutzwall – die Nische 'ehrlich und einfach' muss über Marke verteidigt werden, nicht über Mechanik." },
        { text: "Weil Kunden Transparenz in der Praxis nicht honorieren und am Ende doch nur auf den Endpreis schauen.", korrekt: false, erklaerung: "Ostroms sehr niedriger Churn (~5%/Jahr) zeigt, dass die Zielgruppe Transparenz durchaus honoriert – das Problem ist nicht die Nachfrage, sondern die Kopierbarkeit des Versprechens." },
        { text: "Weil die EU-Preistransparenz-Vorgaben Ostroms Modell zum Marktstandard machen und damit den Aufpreis dafür verbieten.", korrekt: false, erklaerung: "EU-Vorgaben schieben den Markt zwar in Richtung Transparenz, verbieten aber keinen Aufschlag – die Bedrohung ist Nachahmung durch Wettbewerber, kein regulatorisches Verbot." }
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
      frage: "Was bedeutet dieser IT-Unterschied für die Produktivität eines Octopus-Service-Agents im Vergleich zum Sachbearbeiter eines Incumbents?",
      optionen: [
        { text: "Der Agent muss Standardfälle kaum noch anfassen, weil Kraken sie durchgängig automatisiert – er betreut dadurch ein Vielfaches der Kunden.", korrekt: true, erklaerung: "Genau das ist der Kern des Kostenvorteils: Der Agent greift nur im Ausnahmefall ein, statt jeden Vorgang manuell durch mehrere Systeme zu tragen." },
        { text: "Der Agent arbeitet schneller, weil Kraken ihm alle Kundendaten auf einer einzigen Bildschirmmaske anzeigt – die Bearbeitung selbst bleibt aber manuell.", korrekt: false, erklaerung: "Eine einheitliche Oberfläche allein wäre nur ein kleiner Effizienzgewinn – der eigentliche Hebel ist, dass Kraken Standardvorgänge komplett automatisch abwickelt, ohne dass ein Mensch sie bearbeitet." },
        { text: "Octopus verlagert Standardfälle in ein günstigeres Offshore-Servicecenter, während der Incumbent teure lokale Sachbearbeiter einsetzt.", korrekt: false, erklaerung: "Der Kostenvorteil kommt aus der Plattform-Automatisierung, nicht aus Verlagerung – Octopus wirbt im Gegenteil mit persönlichem Support-Ton ('Octopus-Kultur')." }
      ]
    }
  },
  "Q-OCTOPUS-WE2": {
    id: "Q-OCTOPUS-WE2", unitId: "U-OCTOPUS", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Wie hängen der Kostenvorteil durch Kraken und das Verdopplungswachstum in Deutschland strategisch zusammen?",
      optionen: [
        { text: "Die eingesparten Betriebskosten fließen in aggressivere Tarife, die trotzdem Marge tragen – das Wachstum verstärkt wiederum die Skaleneffekte (Flywheel).", korrekt: true, erklaerung: "Genau diese Selbstverstärkung ist der Kern: niedrigere Kosten → bessere Preise → mehr Kunden → noch niedrigere Stückkosten." },
        { text: "Die Kraken-Lizenzerlöse von Wettbewerbern subventionieren die deutschen Kampftarife quer.", korrekt: false, erklaerung: "Plausibel, aber nicht die beschriebene Mechanik: Der deutsche Preisvorteil kommt aus den eigenen niedrigen Betriebskosten je Kunde, nicht aus einer Quersubvention durch Lizenzgeschäft." },
        { text: "Octopus kauft mit den Einsparungen kleinere Wettbewerber samt Kundenbestand auf – das erklärt die Verdopplung.", korrekt: false, erklaerung: "Das deutsche Wachstum war organisch über Preis und Produkt, keine Übernahme-Serie – die Verdopplung binnen zwölf Monaten kam aus Neuakquise." }
      ]
    }
  },
  "Q-OCTOPUS-R1": {
    id: "Q-OCTOPUS-R1", unitId: "U-OCTOPUS", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Was passiert Mitte 2026 mit der Kraken-Plattform?",
      optionen: [
        { text: "Sie wird als eigenständiges Unternehmen abgespalten (Bewertung ~8,65 Mrd. $), Octopus Retail bleibt Ankerkunde mit Restbeteiligung.", korrekt: true, erklaerung: "Der Kraken-Spin-off zeigt, dass der Unternehmenswert stärker in der Software als im Energievertrieb liegt – ein Signal Richtung Plattform-Ökonomie für den gesamten Retail-Markt." },
        { text: "Sie wird mehrheitlich an E.ON verkauft, das Kraken bereits für Millionen eigener Kunden nutzt.", korrekt: false, erklaerung: "E.ON Next ist zwar ein großer Kraken-Lizenznehmer (in UK), aber es gibt keinen Verkauf an E.ON – Kraken wird als unabhängiges Unternehmen abgespalten." },
        { text: "Die Lizenzierung an Wettbewerber wird beendet, um den eigenen Kostenvorteil nicht länger zu verkaufen.", korrekt: false, erklaerung: "Das Gegenteil: Der Spin-off macht die Lizenzierung an Dritte gerade zum Hauptgeschäft – die 'eigene Waffe' wird bewusst zur Ware." }
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
      frage: "Was ist der inhaltliche Kern des Vorwurfs an HKN-basierte Konzern-Ökotarife?",
      optionen: [
        { text: "Das Wasserkraftwerk ist längst gebaut und abgeschrieben – der Zertifikatskauf löst keine einzige zusätzliche grüne Kilowattstunde und kein neues Projekt aus.", korrekt: true, erklaerung: "Genau das ist der 'Zusätzlichkeits'-Einwand: Ohne neue Investition entsteht keine neue Klimawirkung, nur eine buchhalterische Umetikettierung bestehender Erzeugung." },
        { text: "Norwegischer Wasserkraftstrom hat eine schlechtere CO₂-Bilanz als deutscher Windstrom, was die Ökobilanz des Tarifs verfälscht.", korrekt: false, erklaerung: "Wasserkraft ist CO₂-arm – das Problem ist nicht die Emissionsbilanz der Anlage, sondern dass der Zertifikatskauf nichts Neues bewirkt (fehlende Zusätzlichkeit)." },
        { text: "HKN dürfen rechtlich nur innerhalb des Erzeugungslandes verwendet werden – der grenzüberschreitende Handel ist eine Grauzone.", korrekt: false, erklaerung: "Der europaweite HKN-Handel ist ausdrücklich legal und standardisiert (RECS) – der Kritikpunkt ist inhaltlich (Greenwashing-Verdacht), nicht rechtlich." }
      ]
    }
  },
  "Q-IMPACT-R1": {
    id: "Q-IMPACT-R1", unitId: "U-IMPACT", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERTRIEB-OEKO-01"],
    data: {
      frage: "Was unterscheidet Naturstroms Beschaffung strukturell von einem Konzern-Ökotarif?",
      optionen: [
        { text: "Direktlieferverträge ausschließlich mit maximal 10 Jahre alten EE-Anlagen statt HKN-Zukauf von Altanlagen – plus Konzernunabhängigkeit ohne Atom/Kohle im Mutterkonzern.", korrekt: true, erklaerung: "Diese Kriterien schließen alle großen Versorger strukturell aus – kein Konzern mit Kohle-Vergangenheit kann sie erfüllen." },
        { text: "Naturstrom betreibt alle seine Erzeugungsanlagen selbst, während Konzerne den Strom nur einkaufen.", korrekt: false, erklaerung: "Naturstrom arbeitet primär über Direktlieferverträge mit fremden Neuanlagen, nicht über vollständigen Eigenbesitz – der Unterschied liegt im Beschaffungsmechanismus, nicht im Eigentum." },
        { text: "Naturstrom speist seinen Strom in ein physisch getrenntes Ökostromnetz ein, sodass Kunden garantiert grünen Strom aus der Steckdose beziehen.", korrekt: false, erklaerung: "Ein getrenntes Netz gibt es nicht – physikalisch bekommt jeder den gleichen Netzmix. Der Unterschied ist vertraglich (Beschaffung), nicht physikalisch." }
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
      frage: "Was genau erlaubt §4 Abs. 6 KStG einem Stadtwerk wie SWM – und was hätte ein privates Unternehmen so nicht?",
      optionen: [
        { text: "Die steuerliche Verrechnung von Gewinnen aus profitablen Sparten mit ÖPNV-Verlusten innerhalb desselben Konzerns – ein eigenständiges privates ÖPNV-Unternehmen könnte seine Verluste nicht mit branchenfremden Gewinnen verrechnen.", korrekt: true, erklaerung: "Das ist der Kern des Querverbunds: eine steuerliche Sonderstellung kommunaler Mehrsparten-Unternehmen." },
        { text: "Einen staatlichen Verlustausgleich: Der Bund erstattet kommunalen Unternehmen die ÖPNV-Defizite aus Steuermitteln.", korrekt: false, erklaerung: "§4 Abs. 6 KStG ist keine Subvention – es fließt kein Geld vom Staat. Er erlaubt nur, dass Gewinne und Verluste verschiedener Sparten steuerlich saldiert werden." },
        { text: "Eine reduzierte Konzessionsabgabe für Stadtwerke, die gleichzeitig den ÖPNV betreiben.", korrekt: false, erklaerung: "Konzessionsabgaben sind ein anderes Instrument (Zahlung an die Kommune für Wegerechte) – §4 Abs. 6 KStG regelt ausschließlich die körperschaftsteuerliche Verlustverrechnung." }
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
        { text: "30-50 Jahre, geprägt durch kommunale Identität und Vertrauen.", korrekt: true, erklaerung: "Diese sehr lange Bindungsdauer ist strukturell einzigartig gegenüber bundesweiten Vollversorgern oder Neolieferanten." },
        { text: "10-15 Jahre, entsprechend der Laufzeit der Konzessionsverträge mit der Kommune.", korrekt: false, erklaerung: "Vorsicht, Verwechslung: Konzessionsverträge (Wegerechte fürs Netz, §46 EnWG, meist 20 Jahre) regeln das Netz, nicht die Vertriebskundenbeziehung – die hält mit 30-50 Jahren sogar länger." },
        { text: "5-8 Jahre – länger als bei Discountern, aber die Energiekrise hat auch Stadtwerke-Kunden wechselwillig gemacht.", korrekt: false, erklaerung: "Die Krise hat die Wechselquote zwar zeitweise erhöht, aber die typische Stadtwerke-Kundenbeziehung ist mit 30-50 Jahren deutlich länger – oft über Generationen." }
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
      frage: "Was macht das 'Rosinenpicken' durch Neolieferanten für Stadtwerke so gefährlich, obwohl die meisten Kunden gar nicht wechseln?",
      optionen: [
        { text: "Es gehen gezielt die margenstärksten, digitalaffinen Kunden verloren – zurück bleibt eine alternde Basis, während ÖPNV-Defizite weiter aus der schrumpfenden Energiemarge finanziert werden müssen.", korrekt: true, erklaerung: "Genau diese Asymmetrie ist das Problem: Der Querverbund trägt nur, solange die Energiemarge die Verluste deckt – und die wandert selektiv ab." },
        { text: "Jeder gewechselte Kunde erhöht automatisch die Netzentgelte der verbleibenden Kunden, was eine Abwärtsspirale auslöst.", korrekt: false, erklaerung: "Der Lieferantenwechsel ändert nichts an den Netzentgelten – das Netzgeschäft (reguliert) bleibt vom Vertriebswettbewerb unberührt. Die Gefahr liegt in der Vertriebsmarge." },
        { text: "Neolieferanten übernehmen mit den Kunden auch anteilig die Konzessionsrechte am Verteilnetz.", korrekt: false, erklaerung: "Konzessionen für das Netz sind vom Vertrieb völlig getrennt (Unbundling) – ein Lieferantenwechsel berührt keinerlei Netzrechte." }
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
      frage: "Der Kunde hält die Liste für einen neutralen Marktvergleich. Was stimmt daran nicht ganz?",
      optionen: [
        { text: "Die Liste zeigt primär Tarife von Lieferanten mit Provisionsvereinbarung, und eine höhere CPA-Rate kann die Platzierung verbessern – Sichtbarkeit ist teilweise käuflich.", korrekt: true, erklaerung: "Genau das ist der Mechanismus: Das Portal optimiert auf vermittelte Verträge, nicht zwingend auf den günstigsten Preis am Gesamtmarkt. Seit einem Gerichtsverfahren 2016/2017 muss die Maklerrolle offengelegt werden." },
        { text: "Die Liste ist nach Preis korrekt sortiert, unterschlägt aber grundsätzlich alle Ökostrom-Tarife, die eigene Vertriebswege bevorzugen.", korrekt: false, erklaerung: "Ökostromanbieter wie Naturstrom sind zwar tatsächlich kaum auf Portalen präsent – aber das ist deren eigene Entscheidung, kein systematisches Unterschlagen durch das Portal. Der Kernpunkt ist die provisionsgetriebene Sortierung." },
        { text: "Das Portal zeigt bewusst zuerst teurere Tarife, um beim späteren 'Rabatt' einen Anker-Effekt zu erzeugen.", korrekt: false, erklaerung: "Diese Anker-Taktik ist nicht der beschriebene Mechanismus – das Portal lebt von vermittelten Abschlüssen (CPA), nicht von psychologischen Preisankern." }
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
        { text: "Neolieferanten, die bewusst nicht listen und über Direktmarketing wachsen, umgehen die CPA-Abhängigkeit – und Auto-Switching-Dienste brauchen das Portal nur noch zur Erstvermittlung.", korrekt: true, erklaerung: "Das sind zwei der drei im Steckbrief genannten Angriffsvektoren; der dritte ist regulatorischer Druck auf das Modell 'bezahlte Sichtbarkeit statt neutraler Vergleich'." },
        { text: "Check24 und Verivox konkurrieren sich gegenseitig die CPA-Raten herunter, bis das Modell für beide unprofitabel wird.", korrekt: false, erklaerung: "Plausibel, aber nicht der beschriebene Vektor: Das Duopol ist eher stabil, die CPA-Raten werden von Lieferanten gezahlt und sind kein Preiskampf-Feld zwischen den Portalen selbst." },
        { text: "Die Lieferanten bauen gemeinsame eigene Vergleichsplattformen auf, um die Provisionen zu sparen.", korrekt: false, erklaerung: "Ein herstellergetriebenes Gemeinschaftsportal gibt es nicht (und hätte ein Glaubwürdigkeitsproblem) – die realen Angreifer sind D2C-Neolieferanten, Auto-Switcher und die Regulierung." }
      ]
    }
  },
  "Q-VERGLEICH-R4": {
    id: "Q-VERGLEICH-R4", unitId: "U-VERGLEICH", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-VERGL-B2C-01", "L3-VERGL-B2C-02"],
    data: { steckbriefId: "L3-VERGL-B2C-01", distraktorSteckbriefId: "L3-VERGL-B2C-02" }
  },
  "Q-VERGLEICH-R5": {
    id: "Q-VERGLEICH-R5", unitId: "U-VERGLEICH", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-VERGL-B2C-01", "L3-VERTRIEB-VOLL-01"],
    data: {
      szenario: "Ein Lieferant zahlt Check24 eine CPA von 60 € pro vermitteltem Stromkunden. Der Kunde (3.500 kWh/Jahr) bringt 1,5 ct/kWh Marge und bleibt erfahrungsgemäß 18 Monate. Wie viel Marge erwirtschaftet der Kunde über die gesamte Verweildauer – und lohnt sich die Akquise?",
      eingabefelder: [{ key: "margeGesamt", label: "Marge über 18 Monate", einheit: "€" }],
      loesung: { margeGesamt: { wert: 78.75, toleranz: 6 } },
      rechenweg: ["Marge/Jahr = 1,5 ct/kWh × 3.500 kWh = 5.250 ct = 52,50 €.", "Marge über 18 Monate = 52,50 € × 1,5 = 78,75 €.", "Nach Abzug der 60 € CPA bleiben nur ~19 € – und davon sind Service- und Abrechnungskosten noch nicht bezahlt.", "Genau diese Rechnung erklärt, warum portalvermittelte Wechselkunden für Lieferanten oft ein Verlustgeschäft sind und warum Anbieter wie Tibber oder Ostrom den Portalvertrieb bewusst meiden."]
    }
  },
  "Q-VERGLEICH-T1": {
    id: "Q-VERGLEICH-T1", unitId: "U-VERGLEICH", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERGL-B2C-01", "L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Tibber vertreibt bewusst nicht über Vergleichsportale. Was aus dieser Lerneinheit erklärt, warum sich das für Tibber lohnen kann?",
      optionen: [
        { text: "Tibber spart die CPA-Provision (20-60 €/Kunde) komplett – und portalvermittelte Schnäppchenjäger wären für ein Abo-Modell mit 17 Monaten Breakeven ohnehin die falschen Kunden.", korrekt: true, erklaerung: "Beides greift ineinander: Direktvertrieb senkt die Akquisitionskosten, und die selbst gewonnenen, überzeugten Kunden bleiben länger – was bei Tibbers langer Amortisationszeit entscheidend ist." },
        { text: "Ein dynamischer Tarif ohne Preisgarantie lässt sich in den Vergleichsrechnern der Portale technisch gar nicht abbilden.", korrekt: false, erklaerung: "Portale können und wollen zunehmend auch dynamische Tarife vergleichen (§41a schafft dafür sogar neuen Bedarf) – Tibbers Verzicht ist eine strategische Entscheidung, keine technische Notwendigkeit." },
        { text: "Tibber vermeidet die Portale, weil deren AGB eine parallele App-Bindung des Kunden untersagen.", korrekt: false, erklaerung: "Solche AGB-Klauseln gibt es nicht – der Grund ist wirtschaftlich: CPA-Kosten und die falsche Kundenzielgruppe für ein langfristiges Abo-Modell." }
      ]
    }
  }

});

// ════════════════════════════════════════════════════════════════════
// MODUL 2 — ERZEUGEN & SPEICHERN
// ════════════════════════════════════════════════════════════════════
Object.assign(LERN_QUIZ_ITEMS, {

  // ── U2-MERIT ────────────────────────────────────────────────────
  "Q-MERIT-WE1": {
    id: "Q-MERIT-WE1", unitId: "U2-MERIT", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-ERZ-KONV-01"],
    data: {
      szenario: "Die Grenzkosten des Gaskraftwerks liegen bei 67 €/MWh. In der kommenden Stunde steht der EPEX-Spotpreis bei 90 €/MWh. Wie hoch ist der Spread, den das Kraftwerk je MWh verdient – und sollte es laufen?",
      eingabefelder: [{ key: "spread", label: "Spread", einheit: "€/MWh" }],
      loesung: { spread: { wert: 23, toleranz: 2 } },
      rechenweg: ["Spread = Spotpreis − Grenzkosten = 90 − 67 = 23 €/MWh.", "Da der Spread positiv ist, läuft das Kraftwerk mit voller Leistung.", "Läge der Spotpreis unter 67 €/MWh, bliebe die Anlage besser abgeschaltet – jede erzeugte MWh würde Verlust machen."]
    }
  },
  "Q-MERIT-WE2": {
    id: "Q-MERIT-WE2", unitId: "U2-MERIT", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-KONV-01"],
    data: {
      frage: "In einer Stunde liegt der Spotpreis bei 60 €/MWh – unter den Grenzkosten von 67 €/MWh. Das Kraftwerk hat hohe Fixkosten (Personal, Kapitaldienst). Was ist die richtige Entscheidung?",
      optionen: [
        { text: "Stehen bleiben – für die Fahr-Entscheidung zählen nur die variablen Grenzkosten; die Fixkosten fallen so oder so an.", korrekt: true, erklaerung: "Genau: Fixkosten sind in dieser Stunde nicht entscheidungsrelevant (sunk). Laufen würde pro MWh 7 € zusätzlichen Verlust erzeugen – stehen ist das kleinere Übel." },
        { text: "Trotzdem laufen – jede verkaufte MWh trägt wenigstens einen Teil zur Deckung der Fixkosten bei.", korrekt: false, erklaerung: "Verbreiteter Denkfehler: Bei 60 € Erlös und 67 € variablen Kosten verliert die Anlage mit jeder MWh 7 € ZUSÄTZLICH – sie deckt nichts, sie vergrößert den Verlust." },
        { text: "Auf Mindestlast drosseln, um bei Preisanstieg schneller hochfahren zu können – die Anfahrkosten wären sonst höher als der Verlust.", korrekt: false, erklaerung: "Das kann in Grenzfällen tatsächlich rational sein (Anfahrkosten!), ist aber nicht die Grundregel – im Basisfall dieser Einheit entscheidet der einfache Grenzkosten-Vergleich, und der sagt: stehen." }
      ]
    }
  },
  "Q-MERIT-R1": {
    id: "Q-MERIT-R1", unitId: "U2-MERIT", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-KONV-01"],
    data: {
      frage: "Was ist die Inframarginalrente?",
      optionen: [
        { text: "Die Differenz zwischen dem Merit-Order-Räumungspreis (den das teuerste benötigte Kraftwerk setzt) und den eigenen, niedrigeren Grenzkosten.", korrekt: true, erklaerung: "Genau: Alle Erzeuger bekommen denselben Preis – wer günstiger produziert als der Preissetzer, kassiert die Differenz als Rente." },
        { text: "Der staatlich garantierte Mindestpreis für Grundlastkraftwerke, die durchgehend am Netz sind.", korrekt: false, erklaerung: "Einen staatlichen Mindestpreis für Grundlast gibt es nicht – die Rente entsteht rein marktlich aus der Einheitspreis-Auktion." },
        { text: "Der Aufschlag, den das teuerste Kraftwerk auf seine Grenzkosten erheben darf, um Fixkosten zu decken.", korrekt: false, erklaerung: "Das preissetzende Kraftwerk bekommt gerade KEINE Rente – es erlöst nur seine Grenzkosten. Die Rente fließt an alle günstigeren Anbieter darunter." }
      ]
    }
  },
  "Q-MERIT-R2": {
    id: "Q-MERIT-R2", unitId: "U2-MERIT", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-ERZ-KONV-01"],
    data: {
      text: "In der Merit Order setzt das {{a}} noch benötigte Kraftwerk den Preis für alle. Der Merchant-Erlös eines Erzeugers ist der Spread zwischen seinen variablen {{b}} und dem {{c}}.",
      luecken: {
        a: { loesungen: ["teuerste"], erklaerung: "Das teuerste noch benötigte Kraftwerk räumt den Markt – sein Preis gilt für alle (Einheitspreisverfahren)." },
        b: { loesungen: ["Grenzkosten"], erklaerung: "Variable Grenzkosten = Brennstoff + CO₂-Zertifikat + variable O&M." },
        c: { loesungen: ["Spotpreis", "Marktpreis"], erklaerung: "Der Spotpreis an der EPEX entscheidet stündlich über Fahren oder Stehen." }
      },
      distraktoren: ["günstigste", "Vollkosten"]
    }
  },
  "Q-MERIT-R3": {
    id: "Q-MERIT-R3", unitId: "U2-MERIT", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-KONV-01"],
    data: {
      frage: "Wer greift die Knappheitsstunden-Marge der Gaskraftwerke strukturell an – und womit?",
      optionen: [
        { text: "Batteriespeicher und Flex-Aggregatoren: Sie bedienen Preisspitzen schneller und mit geringeren Grenzkosten – und glätten damit genau die Stunden, aus denen sich das Merchant-Modell refinanziert.", korrekt: true, erklaerung: "Der Angreifer braucht kein Kraftwerk, sondern Prognose- und Handelskompetenz plus Speicher-Capex. Die Verteidigungslinie der Etablierten ist der kommende Kapazitätsmarkt (StromVKG)." },
        { text: "Kohlekraftwerke, die dank gesunkener CO₂-Preise wieder niedrigere Grenzkosten haben als Gas.", korrekt: false, erklaerung: "Das Gegenteil ist die Tendenz: CO₂-Preise über 80 €/t belasten Kohle stärker als Gas, und der Kohleausstieg verknappt diese Kapazität ohnehin." },
        { text: "Neue Atomkraftwerke im EU-Ausland, deren Grundlaststrom die deutschen Preisspitzen über Interkonnektoren wegimportiert.", korrekt: false, erklaerung: "Importe dämpfen Spitzen zwar punktuell, aber der im Steckbrief beschriebene strukturelle Angreifer ist der heimische Speicherzubau mit nahezu null Grenzkosten." }
      ]
    }
  },
  "Q-MERIT-R4": {
    id: "Q-MERIT-R4", unitId: "U2-MERIT", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-ERZ-KONV-01"],
    data: {
      steckbriefId: "L3-ERZ-KONV-01",
      erklaerungenProDimension: {
        regulierung: "Reiner Wettbewerbsmarkt ohne Erlösgarantie – kein regulatorischer Schutz (der kommende Kapazitätsmarkt würde das ändern).",
        skalierbarkeit: "Jedes zusätzliche MW braucht physisches Kraftwerk – lineare Kostenstruktur, keine Plattform-Skalierung.",
        marktrisiko: "Volles Preis-Exposure: Der gesamte Erlös hängt am stündlichen Spotpreis – höchste Risikostufe.",
        digitalisierung: "Automatisierte Handelssysteme ja, aber der Kern bleibt eine thermische Anlage – begrenzt digital.",
        wettbewerb: "Merit-Order-Konkurrenz gegen alle anderen Erzeuger plus neue Speicher – intensiv.",
        nachhaltigkeit: "Fossile Erzeugung mit CO₂-Emissionen – niedrigste Stufe, auch wenn Gas als Brückentechnologie gilt."
      }
    }
  },
  "Q-MERIT-T1": {
    id: "Q-MERIT-T1", unitId: "U2-MERIT", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-KONV-01", "L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Tibber (Modul 4) verschiebt E-Auto-Ladevorgänge automatisch in günstige Nachtstunden. Was bedeutet massenhafte Lastverschiebung dieser Art für das Merchant-Geschäftsmodell der Gaskraftwerke?",
      optionen: [
        { text: "Sie glättet die Preisspitzen von der Nachfrageseite – und greift damit denselben Knappheitsstunden-Erlös an wie Batteriespeicher von der Angebotsseite.", korrekt: true, erklaerung: "Genau: Ob Speicher Strom in den Peak verkaufen oder Verbraucher ihre Last aus dem Peak verschieben – beides senkt die Spitzenpreise, aus denen sich Gaskraftwerke refinanzieren." },
        { text: "Sie hilft den Gaskraftwerken, weil nachts mehr Strom verbraucht wird und sie dann länger laufen können.", korrekt: false, erklaerung: "Die zusätzliche Nachtlast wird typischerweise von Wind (nahe null Grenzkosten) gedeckt, nicht von Gas – und die verlorenen Peak-Erlöse wiegen für Gas viel schwerer." },
        { text: "Sie ist für Erzeuger irrelevant, weil Tibber nur die Abrechnung ändert, nicht den physischen Verbrauchszeitpunkt.", korrekt: false, erklaerung: "Doch – die App steuert den tatsächlichen Ladezeitpunkt. Genau diese physische Lastverschiebung ist der Systemeffekt." }
      ]
    }
  },

  // ── U2-REGELENERGIE ─────────────────────────────────────────────
  "Q-REGEL-WE1": {
    id: "Q-REGEL-WE1", unitId: "U2-REGELENERGIE", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-KONV-02"],
    data: {
      frage: "Woran verdient das Kraftwerk in diesem FCR-Geschäft primär?",
      optionen: [
        { text: "Am Leistungspreis für die Vorhaltung – er fließt unabhängig davon, ob die Reserve je abgerufen wird.", korrekt: true, erklaerung: "Das Kraftwerk verdient am Bereitstehen, nicht am Liefern – der Leistungspreis (€/MW/h) ist die attraktive Komponente." },
        { text: "Am Arbeitspreis für die gelieferte Regelenergie – je öfter abgerufen wird, desto besser das Geschäft.", korrekt: false, erklaerung: "Plausibel, aber bei FCR ist der Arbeitspreis-Anteil nachrangig – der planbare Leistungspreis für die reine Bereitschaft trägt das Geschäft." },
        { text: "An einer Kapazitätsprämie aus dem StromVKG-Kapazitätsmarkt.", korrekt: false, erklaerung: "Vorsicht, Verwechslung: Der Kapazitätsmarkt (ab 2032 geplant) vergütet Kraftwerks-Existenz, Regelenergie vergütet kurzfristige Reaktionsbereitschaft – zwei verschiedene Instrumente." }
      ]
    }
  },
  "Q-REGEL-WE2": {
    id: "Q-REGEL-WE2", unitId: "U2-REGELENERGIE", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-KONV-02"],
    data: {
      frage: "Was hat den FCR-Preisverfall von über 25 auf zeitweise unter 10 €/MW/h ausgelöst?",
      optionen: [
        { text: "Massiver Markteintritt von Batteriespeichern, die die Produktanforderung (Reaktion <30 s) schlicht besser erfüllen als thermische Kraftwerke.", korrekt: true, erklaerung: "Batterien reagieren in Millisekunden – für sie ist FCR das natürliche Produkt. Das Überangebot drückte den Auktionspreis." },
        { text: "Die ÜNB haben ihren Regelenergiebedarf durch bessere Prognosen halbiert.", korrekt: false, erklaerung: "Der Bedarf ist relativ stabil – der Preisverfall kam von der Angebotsseite (mehr Anbieter), nicht von der Nachfrageseite." },
        { text: "Die EU hat Preisobergrenzen für Systemdienstleistungen eingeführt.", korrekt: false, erklaerung: "Es gibt keine solche Preisobergrenze – die europäische Integration (PICASSO/MARI) vergrößert zwar das Angebot, aber der Haupttreiber war der BESS-Zubau." }
      ]
    }
  },
  "Q-REGEL-R1": {
    id: "Q-REGEL-R1", unitId: "U2-REGELENERGIE", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-ERZ-KONV-02"],
    data: {
      text: "Die drei Regelenergie-Produkte nach Reaktionszeit: FCR unter {{a}}, aFRR unter {{b}}, mFRR unter 15 Minuten. Ausgeschrieben wird über die Plattform {{c}}.",
      luecken: {
        a: { loesungen: ["30 Sekunden"], erklaerung: "FCR (Frequency Containment Reserve) muss in unter 30 Sekunden voll wirken – deshalb sind Batterien hier so stark." },
        b: { loesungen: ["5 Minuten"], erklaerung: "aFRR (automatic Frequency Restoration Reserve) löst FCR nach wenigen Minuten ab." },
        c: { loesungen: ["regelleistung.net"], erklaerung: "Die gemeinsame Ausschreibungsplattform der vier deutschen ÜNB." }
      },
      distraktoren: ["15 Minuten", "EPEX SPOT"]
    }
  },
  "Q-REGEL-R2": {
    id: "Q-REGEL-R2", unitId: "U2-REGELENERGIE", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-ERZ-KONV-02"],
    data: {
      szenario: "Ein Kraftwerk hält eine Woche lang (168 Stunden) 50 MW für FCR vor. Der Leistungspreis der Auktion liegt bei 12 €/MW/h. Wie hoch ist der Vorhaltungs-Erlös dieser Woche – ganz ohne einen einzigen Abruf?",
      eingabefelder: [{ key: "erloes", label: "Wochen-Erlös", einheit: "€" }],
      loesung: { erloes: { wert: 100800, toleranz: 2000 } },
      rechenweg: ["Erlös = Leistung × Preis × Stunden = 50 MW × 12 €/MW/h × 168 h = 100.800 €.", "Dieser Betrag fließt für die reine Bereitschaft – der Arbeitspreis käme bei tatsächlichen Abrufen noch dazu.", "Bei den alten Preisen von 25 €/MW/h wären es 210.000 € gewesen – so konkret wirkt der BESS-getriebene Preisverfall."]
    }
  },
  "Q-REGEL-R3": {
    id: "Q-REGEL-R3", unitId: "U2-REGELENERGIE", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-KONV-02"],
    data: {
      frage: "Warum weichen Großkraftwerke auf aFRR/mFRR aus, statt den FCR-Markt zurückzuerobern?",
      optionen: [
        { text: "Bei längeren Abrufen über Minuten bis Stunden sind Batterien wegen ihrer begrenzten Energiekapazität strukturell im Nachteil – dort zählt dauerhafte Lieferfähigkeit.", korrekt: true, erklaerung: "Eine 1-Stunden-Batterie ist nach einer Stunde Volllast-Abruf leer; ein Gaskraftwerk läuft weiter. Genau deshalb sind aFRR/mFRR die verteidigungsfähigen Segmente." },
        { text: "aFRR und mFRR zahlen gesetzlich festgelegte, höhere Leistungspreise als FCR.", korrekt: false, erklaerung: "Es gibt keine gesetzlich festgelegten Preise – alle Produkte werden auktioniert. Der Unterschied liegt in der Wettbewerbsintensität, nicht in einer Preisgarantie." },
        { text: "Batteriespeicher dürfen für aFRR und mFRR nicht präqualifiziert werden.", korrekt: false, erklaerung: "Doch, sie dürfen und tun es zunehmend – aber die Produktanforderung (Energie über längere Zeit) passt schlechter zu ihrer Physik als FCR." }
      ]
    }
  },
  "Q-REGEL-R4": {
    id: "Q-REGEL-R4", unitId: "U2-REGELENERGIE", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-KONV-02"],
    data: {
      frage: "Welche neuen Systemdienstleistungen bleiben voraussichtlich eine Domäne thermischer Kraftwerke – und warum?",
      optionen: [
        { text: "Trägheitsemulation, Kurzschlussleistung und Blindleistung – dafür braucht es rotierende Synchronmaschinen, die Wechselrichter-basierte Anlagen physikalisch nicht gleichwertig liefern.", korrekt: true, erklaerung: "Die rotierende Masse einer Turbine stabilisiert die Frequenz inhärent – das ist die verbleibende physikalische Nische der Thermalkraftwerke." },
        { text: "Schwarzstartfähigkeit – nur Kohlekraftwerke können ein kollabiertes Netz wieder aufbauen.", korrekt: false, erklaerung: "Schwarzstart ist wichtig, aber gerade nicht kohlespezifisch – Wasserkraft, Gasturbinen und zunehmend auch Batterien mit Grid-Forming-Wechselrichtern können das." },
        { text: "Die Spannungshaltung im Verteilnetz, die per Gesetz Großkraftwerken vorbehalten ist.", korrekt: false, erklaerung: "Eine solche gesetzliche Reservierung gibt es nicht – Spannungshaltung leisten zunehmend auch dezentrale Anlagen und regelbare Ortsnetztrafos." }
      ]
    }
  },
  "Q-REGEL-T1": {
    id: "Q-REGEL-T1", unitId: "U2-REGELENERGIE", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-KONV-02", "L3-ERZ-KONV-01"],
    data: {
      frage: "Batteriespeicher tauchen als Angreifer sowohl in der Merit-Order-Einheit (Spotmarkt-Spitzen) als auch hier (FCR) auf. Was ist der gemeinsame Mechanismus?",
      optionen: [
        { text: "Sie erfüllen die jeweilige Kernanforderung (Schnelligkeit bzw. Flexibilität) mit nahezu null Grenzkosten – und drücken damit genau die Preise, aus denen sich die etablierten Anbieter refinanzieren.", korrekt: true, erklaerung: "Ein Muster, zwei Märkte: Der Speicher braucht weder Brennstoff noch CO₂-Zertifikate und unterbietet damit strukturell jede thermische Anlage, wo immer seine Physik zum Produkt passt." },
        { text: "Sie werden über das EEG subventioniert und können deshalb unter ihren echten Kosten anbieten.", korrekt: false, erklaerung: "Grid-Scale-Batterien erhalten keine EEG-Vergütung – sie sind reine Merchant-Anlagen. Ihr Vorteil ist physikalisch-ökonomisch, nicht subventionsgetrieben." },
        { text: "Sie umgehen die Präqualifikationspflicht und können dadurch schneller in die Märkte eintreten.", korrekt: false, erklaerung: "Auch Batterien müssen vollständig präqualifiziert werden – der Markteintritt ist regelkonform, nur eben technisch überlegen." }
      ]
    }
  },

  // ── U2-EEG ──────────────────────────────────────────────────────
  "Q-EEG-WE1": {
    id: "Q-EEG-WE1", unitId: "U2-EEG", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-ERZ-EE-01"],
    data: {
      szenario: "Anzulegender Wert (AW) des Windparks: 6 ct/kWh. Referenzmarktwert (RMW) diesen Monat: 4 ct/kWh. Wie hoch ist die Marktprämie je kWh, die der Betreiber zusätzlich zum Börsenerlös erhält?",
      eingabefelder: [{ key: "praemie", label: "Marktprämie", einheit: "ct/kWh" }],
      loesung: { praemie: { wert: 2, toleranz: 0.2 } },
      rechenweg: ["Marktprämie = AW − RMW = 6 − 4 = 2 ct/kWh.", "Der Betreiber bekommt: Börsenerlös (≈ RMW bei durchschnittlicher Vermarktung) + 2 ct Prämie ≈ 6 ct gesamt — der AW wirkt wie ein garantierter Mindesterlös.", "Steigt der RMW über 6 ct, sinkt die Prämie auf null — der Betreiber behält aber den höheren Markterlös (Upside)."]
    }
  },
  "Q-EEG-WE2": {
    id: "Q-EEG-WE2", unitId: "U2-EEG", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-EE-01"],
    data: {
      frage: "Woran verdient der Direktvermarkter bei dieser Intraday-Optimierung?",
      optionen: [
        { text: "An der Outperformance: Verkauft er besser als der pauschale Monats-RMW unterstellt, behält er typischerweise 20–40% der Differenz als Erfolgsanteil – plus Managementfee.", korrekt: true, erklaerung: "Die Marktprämie geht vollständig an den Anlagenbetreiber – der Direktvermarkter lebt von Fee und Outperformance-Share." },
        { text: "An der Marktprämie selbst, die er als Vermarktungsdienstleister vom ÜNB ausgezahlt bekommt.", korrekt: false, erklaerung: "Verbreiteter Irrtum: Die Prämie fließt an den Anlagenbetreiber, nicht an den Vermarkter – der verdient nur an seiner Vermarktungsleistung." },
        { text: "Am Weiterverkauf des Windstroms mit Aufschlag an eigene Endkunden.", korrekt: false, erklaerung: "Direktvermarkter verkaufen an die Börse, nicht an Endkunden – das Endkundengeschäft ist ein völlig anderes Geschäftsmodell (Modul 4)." }
      ]
    }
  },
  "Q-EEG-R1": {
    id: "Q-EEG-R1", unitId: "U2-EEG", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-ERZ-EE-01"],
    data: {
      text: "Anlagen über {{a}} müssen ihren Strom direkt vermarkten. Die gleitende Marktprämie berechnet sich als {{b}} minus {{c}}; der erste Wert stammt aus der BNetzA-Ausschreibung und ist 20 Jahre gesichert.",
      luecken: {
        a: { loesungen: ["100 kW"], erklaerung: "Seit dem EEG 2021 gilt die Direktvermarktungspflicht ab 100 kW installierter Leistung." },
        b: { loesungen: ["anzulegender Wert", "AW", "anzulegendem Wert"], erklaerung: "Der AW ist das Ausschreibungsergebnis – die eigentliche 'Förderhöhe'." },
        c: { loesungen: ["Referenzmarktwert", "RMW"], erklaerung: "Der RMW ist der durchschnittliche monatliche Börsenwert der jeweiligen Technologie." }
      },
      distraktoren: ["30 kW", "Spotpreis"]
    }
  },
  "Q-EEG-R2": {
    id: "Q-EEG-R2", unitId: "U2-EEG", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-EE-01"],
    data: {
      frage: "Was regelt §51 EEG (verschärft durch das Solarspitzengesetz 2025) – und wen trifft es?",
      optionen: [
        { text: "Bei negativen Börsenpreisen entfällt der anzulegende Wert – das Preisrisiko dieser Stunden liegt damit beim Anlagenbetreiber, für Neuanlagen praktisch ab der ersten negativen Stunde.", korrekt: true, erklaerung: "Je mehr EE einspeist, desto häufiger werden negative Stunden – §51 macht Speicher- und Flexibilitätskompetenz für Betreiber immer wichtiger." },
        { text: "Anlagen müssen bei negativen Preisen zwangsabgeregelt werden, erhalten dafür aber eine Entschädigung vom ÜNB.", korrekt: false, erklaerung: "Verwechslung mit Redispatch/Einspeisemanagement: §51 regelt keinen Eingriff, sondern streicht schlicht die Förderung in negativen Stunden – abregeln oder weiterlaufen entscheidet der Betreiber wirtschaftlich selbst." },
        { text: "Negative Gebote in BNetzA-Ausschreibungen sind unzulässig – kein Bieter darf unter 0 ct/kWh bieten.", korrekt: false, erklaerung: "§51 betrifft den laufenden Betrieb bei negativen BÖRSENpreisen, nicht die Ausschreibungsgebote." }
      ]
    }
  },
  "Q-EEG-R3": {
    id: "Q-EEG-R3", unitId: "U2-EEG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-EE-01"],
    data: {
      frage: "Warum senkt ein Portfolio aus 10.000 Anlagen die Kosten des Direktvermarkters überproportional?",
      optionen: [
        { text: "Prognosefehler einzelner Anlagen gleichen sich statistisch aus (Wind Nord vs. Solar Süd) – die Abweichung zwischen Fahrplan und Ist sinkt auf 2–3%, und mit ihr die teuren Ausgleichsenergiekosten.", korrekt: true, erklaerung: "Diversifikation ist der Skaleneffekt dieses Geschäfts: Nicht der Einkauf wird billiger, sondern der Prognosefehler kleiner." },
        { text: "Die Börse gewährt Großvermarktern Mengenrabatte auf die Handelsentgelte.", korrekt: false, erklaerung: "Handelsentgelte sind für alle gleich und ohnehin marginal – der echte Hebel liegt in der Ausgleichsenergie." },
        { text: "Die BNetzA vergibt an große Portfolien höhere anzulegende Werte.", korrekt: false, erklaerung: "Der AW hängt am Ausschreibungsgebot der einzelnen Anlage, nicht an der Portfoliogröße des Vermarkters." }
      ]
    }
  },
  "Q-EEG-R4": {
    id: "Q-EEG-R4", unitId: "U2-EEG", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-ERZ-EE-01"],
    data: {
      steckbriefId: "L3-ERZ-EE-01",
      erklaerungenProDimension: {
        regulierung: "Der 20 Jahre gesicherte AW ist ein starker regulatorischer Schutz – deshalb die hohe Einstufung.",
        skalierbarkeit: "Direktvermarktungs-Portfolien skalieren gut über Software, aber jede Anlage braucht individuelle SCADA-Anbindung.",
        marktrisiko: "Der AW puffert das Preisrisiko weitgehend ab – nur §51-Stunden und Prognosefehler bleiben beim Betreiber.",
        digitalisierung: "Wetter-ML-Modelle und Intraday-Automatisierung sind zentral, aber die Anlage selbst ist klassische Technik.",
        wettbewerb: "Der Direktvermarktungsmarkt konsolidiert zum Oligopol (Next Kraftwerke/Shell >35%) – moderater Wettbewerb.",
        nachhaltigkeit: "Kern der Energiewende – höchste Stufe."
      }
    }
  },
  "Q-EEG-T1": {
    id: "Q-EEG-T1", unitId: "U2-EEG", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-EE-01", "L3-VERGL-B2C-02"],
    data: {
      frage: "Der Direktvermarkter verdient einen Erfolgsanteil (20–40%) an der Outperformance gegenüber dem Referenzwert. Welches Modell aus Modul 4 folgt derselben Erlöslogik?",
      optionen: [
        { text: "Wechselpilot – die Erfolgsprovision als Anteil der für den Kunden erzielten Ersparnis.", korrekt: true, erklaerung: "Beide verdienen performance-basiert: ein Prozentsatz des Mehrwerts, den sie gegenüber einer Referenz (Monats-RMW bzw. alter Tarif) erwirtschaften." },
        { text: "Check24 – die CPA-Provision pro vermitteltem Neukunden.", korrekt: false, erklaerung: "CPA ist eine einmalige, feste Transaktionsgebühr – unabhängig davon, wie gut der vermittelte Tarif für den Kunden tatsächlich ist. Das ist gerade NICHT performance-basiert." },
        { text: "Tibber – die fixe monatliche Abogebühr.", korrekt: false, erklaerung: "Das Abo ist bewusst von jeder Leistungsgröße entkoppelt – das Gegenteil eines Erfolgsanteils." }
      ]
    }
  },

  // ── U2-PPA ──────────────────────────────────────────────────────
  "Q-PPA-WE1": {
    id: "Q-PPA-WE1", unitId: "U2-PPA", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-ERZ-EE-02"],
    data: {
      szenario: "Financial PPA mit Strike Price 55 €/MWh. In dieser Stunde: Börsenpreis 70 €/MWh. Wie hoch ist die Differenzzahlung je MWh – und überlege dir: wer zahlt an wen?",
      eingabefelder: [{ key: "differenz", label: "Differenzzahlung", einheit: "€/MWh" }],
      loesung: { differenz: { wert: 15, toleranz: 1 } },
      rechenweg: ["Differenz = Börsenpreis − Strike = 70 − 55 = 15 €/MWh.", "Der Börsenpreis liegt ÜBER dem Strike → der Erzeuger (RWE) zahlt die 15 €/MWh an BASF aus. BASF zahlt real 70 an seinen Lieferanten, bekommt 15 zurück → effektiv 55.", "Bei einem Börsenpreis von 40 €/MWh liefe es umgekehrt: BASF zahlt 15 €/MWh an RWE – und landet wieder bei effektiv 55. Der Strike wirkt in beide Richtungen."]
    }
  },
  "Q-PPA-WE2": {
    id: "Q-PPA-WE2", unitId: "U2-PPA", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-EE-02"],
    data: {
      frage: "Warum verbessert der 15-Jahres-PPA die Finanzierungskonditionen für den Windpark spürbar (~1–2% Zinsvorteil)?",
      optionen: [
        { text: "Die Bank sieht statt eines offenen Marktpreisrisikos einen kalkulierbaren, vertraglich gesicherten Cashflow – und bepreist das Kreditrisiko entsprechend niedriger.", korrekt: true, erklaerung: "Bei 20 Jahren Laufzeit summiert sich 1–2% Zinsvorteil zu einem erheblichen Teil der Projektrendite – der PPA ist primär ein Finanzierungsinstrument." },
        { text: "PPA-finanzierte Projekte erhalten von der KfW automatisch zinsvergünstigte Förderkredite.", korrekt: false, erklaerung: "Es gibt keine automatische KfW-Kopplung an PPAs – der Zinsvorteil entsteht rein aus der Risikobewertung der finanzierenden Bank." },
        { text: "Die Bank erhält den erzeugten Strom als physische Sicherheit und kann ihn bei Ausfall selbst vermarkten.", korrekt: false, erklaerung: "Banken besichern über Projektrechte und Cashflow-Abtretung, nicht über physischen Strom – beim Financial PPA fließt ohnehin kein Strom an Vertragspartner." }
      ]
    }
  },
  "Q-PPA-R1": {
    id: "Q-PPA-R1", unitId: "U2-PPA", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-EE-02"],
    data: {
      frage: "Was unterscheidet ein Financial PPA von einem Physical PPA?",
      optionen: [
        { text: "Beim Financial PPA fließt kein Strom zwischen den Parteien – nur die Differenz zum Strike Price wird bilateral ausgeglichen; Anlage und Abnehmer handeln physisch weiter mit Börse bzw. Lieferant.", korrekt: true, erklaerung: "Deshalb dominieren Financial PPAs in Deutschland: kein Lieferantenwechsel, keine Bilanzkreis-Komplexität – ein reines Preissicherungsgeschäft (CfD)." },
        { text: "Financial PPAs sind kürzer (1–3 Jahre) und dienen der kurzfristigen Preisabsicherung, Physical PPAs der langfristigen.", korrekt: false, erklaerung: "Beide Formen laufen typisch 10–15 Jahre – der Unterschied liegt im Mechanismus (Differenzausgleich vs. physische Lieferung), nicht in der Laufzeit." },
        { text: "Nur Physical PPAs erfüllen die RE100-Anforderungen, weil dort echter Grünstrom fließt.", korrekt: false, erklaerung: "Auch Financial PPAs zählen für RE100/CSRD – entscheidend ist der Herkunftsnachweis und die Zusätzlichkeit der Anlage, nicht der physische Lieferweg." }
      ]
    }
  },
  "Q-PPA-R2": {
    id: "Q-PPA-R2", unitId: "U2-PPA", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-ERZ-EE-02"],
    data: {
      text: "Das größte Strukturierungsproblem von EE-PPAs ist das {{a}}-Risiko: Das Erzeugungsprofil der Anlage passt selten zur {{b}} des Industriekunden. Beim Financial PPA wird die Differenz zwischen Börsenpreis und {{c}} ausgeglichen.",
      luecken: {
        a: { loesungen: ["Shape"], erklaerung: "Shape-Risiko: Solar liefert mittags, die Fabrik läuft nachts – die Lücke muss teuer residual beschafft werden." },
        b: { loesungen: ["Last", "Industrielast"], erklaerung: "Das Lastprofil des Abnehmers bestimmt, wie gut das EE-Profil passt." },
        c: { loesungen: ["Strike Price", "Strike"], erklaerung: "Der vereinbarte Festpreis, um den herum die Differenzzahlungen laufen." }
      },
      distraktoren: ["Bonitäts", "Arbeitspreis"]
    }
  },
  "Q-PPA-R3": {
    id: "Q-PPA-R3", unitId: "U2-PPA", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-EE-02"],
    data: {
      frage: "Wodurch ist die Strukturierungsmarge im PPA-Geschäft angreifbar – und wer bleibt verteidigungsfähig?",
      optionen: [
        { text: "PPA-Matching-Plattformen und Standardverträge (EFET) drücken die Intermediärsgebühr, große Abnehmer bauen eigene PPA-Desks – verteidigungsfähig bleiben Player mit eigener Bilanz, die Shape-/Kreditrisiko übernehmen und Firming als Produkt bündeln.", korrekt: true, erklaerung: "Wer nur vermittelt, wird zum austauschbaren Broker – wer Risiken auf die eigene Bilanz nimmt (Utilities, große Händler), verkauft etwas, das eine Plattform nicht kopieren kann." },
        { text: "Die BNetzA plant eine Deckelung der PPA-Vermittlungsgebühren analog zur Netzentgeltregulierung.", korrekt: false, erklaerung: "PPAs sind bilaterale Verträge außerhalb der Entgeltregulierung – der Druck auf die Marge kommt vom Wettbewerb, nicht vom Regulierer." },
        { text: "EE-Anlagen fallen ab 2027 zurück in die EEG-Vollvergütung, wodurch der PPA-Markt austrocknet.", korrekt: false, erklaerung: "Das Gegenteil ist der Trend: Auslaufende EEG-Anlagen und sinkende Ausschreibungswerte treiben immer mehr Volumen in den PPA-Markt." }
      ]
    }
  },
  "Q-PPA-R4": {
    id: "Q-PPA-R4", unitId: "U2-PPA", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-KONV-03", "L3-ERZ-EE-02"],
    data: {
      frage: "Warum verdrängen EE-PPAs die konventionellen PPAs zunehmend aus dem Markt?",
      optionen: [
        { text: "Steigende CO₂-Kosten fressen den Preisvorteil fossiler Bandlieferung auf, und Abnehmer mit Dekarbonisierungszielen zahlen gezielt für grüne Herkunft.", korrekt: true, erklaerung: "Dem konventionellen PPA bleibt die Nische als 24/7-Backup-Komponente hybrider Lieferkonstrukte – als eigenständiges Produkt verliert es seinen Käufermarkt." },
        { text: "Konventionelle PPAs sind seit der EU-Strommarktreform nur noch mit Laufzeiten unter 3 Jahren zulässig.", korrekt: false, erklaerung: "Eine solche Laufzeitbeschränkung existiert nicht – die Verdrängung ist marktgetrieben (CO₂-Kosten + Nachfragepräferenz), nicht regulatorisch verordnet." },
        { text: "EE-PPAs sind wegen der EEG-Förderung immer billiger als konventionelle PPAs.", korrekt: false, erklaerung: "Corporate PPAs laufen gerade OHNE EEG-Förderung – ihr Preisvorteil kommt aus gesunkenen EE-Gestehungskosten, nicht aus Subventionen." }
      ]
    }
  },
  "Q-PPA-T1": {
    id: "Q-PPA-T1", unitId: "U2-PPA", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-EE-02", "L3-VERTRIEB-NEO-02"],
    data: {
      frage: "Corporate PPAs werben mit 'Additionality' (die Anlage entsteht nur durch den Vertrag). Welches Konzept aus Modul 4 entspricht dem – und mit demselben Gegner?",
      optionen: [
        { text: "Die Zusätzlichkeit bei Fünf Grad und Naturstrom: echte neue Klimawirkung bzw. Neuanlagen-Verträge – jeweils in Abgrenzung zum billigen HKN-Zertifikat ohne Zusatzeffekt.", korrekt: true, erklaerung: "Gleiches Muster auf B2B- wie B2C-Ebene: Der Premium-Preis rechtfertigt sich nur, wenn nachweislich etwas Neues entsteht – der gemeinsame Gegner ist das Altanlagen-HKN-Greenwashing." },
        { text: "Ostroms Preistransparenz: Beide Modelle leben davon, dem Kunden die Kalkulation vollständig offenzulegen.", korrekt: false, erklaerung: "Transparenz ist ein anderes Wertversprechen – bei Additionality geht es um Wirkungsnachweis, nicht um Kalkulationsoffenlegung." },
        { text: "Der Stadtwerke-Querverbund: Beide sichern langfristige Investitionen durch interne Quersubvention ab.", korrekt: false, erklaerung: "Der Querverbund ist ein steuerlicher Verrechnungsmechanismus innerhalb eines Konzerns – mit dem Zusätzlichkeitsnachweis gegenüber Kunden hat er nichts zu tun." }
      ]
    }
  },

  // ── U2-SPEICHER ─────────────────────────────────────────────────
  "Q-SPEICHER-WE1": {
    id: "Q-SPEICHER-WE1", unitId: "U2-SPEICHER", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-ERZ-SPEICHER-01"],
    data: {
      szenario: "Der Speicher nutzt seine vollen 15 MWh für einen Arbitrage-Zyklus: günstig laden, im Abendpeak entladen. Der Spread beträgt 30 €/MWh. Wie viel bringt dieser eine Zyklus?",
      eingabefelder: [{ key: "erloes", label: "Zyklus-Erlös", einheit: "€" }],
      loesung: { erloes: { wert: 450, toleranz: 30 } },
      rechenweg: ["Erlös = Kapazität × Spread = 15 MWh × 30 €/MWh = 450 €.", "Das läuft parallel zum FCR-Leistungspreis der reservierten Kapazität – Stacking heißt: beide Erlösströme gleichzeitig.", "Bei ~300 Zyklen im Jahr und schwankenden Spreads (15–50 €/MWh) wird klar, warum die Marktwahl je Stunde den Jahreserlös bestimmt."]
    }
  },
  "Q-SPEICHER-WE2": {
    id: "Q-SPEICHER-WE2", unitId: "U2-SPEICHER", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-SPEICHER-01"],
    data: {
      frage: "Wie erklären sich 30–50% Erlösunterschied zwischen zwei baugleichen Batterien?",
      optionen: [
        { text: "Durch die Optimierungsgüte der Software: Sie entscheidet stündlich, welcher Markt (FCR, Arbitrage, aFRR) den höheren Grenzerlös bietet – schlechte Optimierung lässt Erlöse schlicht liegen.", korrekt: true, erklaerung: "Der Algorithmus ist der eigentliche Wettbewerbsvorteil, nicht die Hardware – deshalb entstehen asset-leichte Optimierer als eigenes Geschäftsmodell." },
        { text: "Durch unterschiedliche Degradation: Die schlechtere Batterie hat bereits Kapazität verloren.", korrekt: false, erklaerung: "Degradation wirkt über Jahre und erklärt einstellige Prozentunterschiede – nicht 30–50% zwischen baugleichen, gleichaltrigen Anlagen." },
        { text: "Durch die Netzentgelte, die je nach Anschlusspunkt stark variieren.", korrekt: false, erklaerung: "Am selben Netzknoten (wie im Szenario) sind die Anschlussbedingungen identisch – und der große Hebel liegt ohnehin auf der Erlös-, nicht der Kostenseite." }
      ]
    }
  },
  "Q-SPEICHER-R1": {
    id: "Q-SPEICHER-R1", unitId: "U2-SPEICHER", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-SPEICHER-01"],
    data: {
      frage: "Warum ist der größte Angreifer des BESS-Geschäftsmodells der eigene Erfolg?",
      optionen: [
        { text: "Jedes zusätzliche BESS glättet die Preisspitzen und drückt die FCR-Preise – First Movers ernten hohe Spreads, Nachzügler kaufen in fallende Erlöskurven.", korrekt: true, erklaerung: "Der Markt kannibalisiert sich selbst: Genau die Volatilität, von der Speicher leben, wird durch Speicherzubau reduziert." },
        { text: "Die Batteriehersteller erhöhen die Preise, sobald die Nachfrage steigt – der Capex-Vorteil verschwindet.", korrekt: false, erklaerung: "Das Gegenteil passiert: Li-Ion-Kosten fallen mit ~15% Lernrate pro Verdopplung – die Hardware wird billiger, nicht teurer." },
        { text: "Die ÜNB begrenzen die Zahl der Präqualifikationen pro Marktgebiet.", korrekt: false, erklaerung: "Eine solche Mengenbegrenzung gibt es nicht – der Erlösdruck entsteht durch Marktmechanik, nicht durch Zugangsbeschränkung." }
      ]
    }
  },
  "Q-SPEICHER-R2": {
    id: "Q-SPEICHER-R2", unitId: "U2-SPEICHER", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-ERZ-SPEICHER-02"],
    data: {
      text: "Beim Heimspeicher-VPP hält der Kunde z.B. {{a}} Ladestand für den Aggregator frei. Die Regelenergie-Erlöse werden etwa im Verhältnis 60:40 zugunsten des {{b}} geteilt; der Kunde erhält im Gegenzug oft eine {{c}} statt einer kWh-Abrechnung.",
      luecken: {
        a: { loesungen: ["20%"], erklaerung: "Typisch 20% State of Charge – die freie Kapazität wird zum Poolbaustein." },
        b: { loesungen: ["Aggregators", "Aggregator"], erklaerung: "Der Aggregator trägt Präqualifikation, Handel und Technik – dafür der größere Anteil." },
        c: { loesungen: ["Flatrate"], erklaerung: "Die Sonnen-Flatrate ist das Binde-Instrument: fixer Monatsbetrag, mehrjährige Kundenbindung." }
      },
      distraktoren: ["80%", "Einmalzahlung"]
    }
  },
  "Q-SPEICHER-R3": {
    id: "Q-SPEICHER-R3", unitId: "U2-SPEICHER", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-SPEICHER-02"],
    data: {
      frage: "Warum kann ein einzelner 10-kWh-Heimspeicher nicht selbst an den Regelenergiemärkten teilnehmen?",
      optionen: [
        { text: "Die Präqualifikation erfordert Mindestgrößen und Nachweise, die nur ein gebündeltes Portfolio erfüllt – erst Tausende Einheiten ergeben ein marktfähiges Regelenergie-Asset.", korrekt: true, erklaerung: "Genau das ist die Existenzberechtigung des Aggregators: 10.000 Heimspeicher ≈ 100 MWh präqualifizierbare Flex-Kapazität." },
        { text: "Heimspeicher reagieren zu langsam für die 30-Sekunden-Anforderung von FCR.", korrekt: false, erklaerung: "Im Gegenteil – Batterien reagieren in Millisekunden. Das Problem ist die Größe, nicht die Geschwindigkeit." },
        { text: "Privatpersonen dürfen aus energierechtlichen Gründen keine Systemdienstleistungen erbringen.", korrekt: false, erklaerung: "Ein grundsätzliches Verbot gibt es nicht – praktisch scheitert es an Mindestlosgrößen, Messtechnik und Prozessanforderungen, die der Aggregator übernimmt." }
      ]
    }
  },
  "Q-SPEICHER-R4": {
    id: "Q-SPEICHER-R4", unitId: "U2-SPEICHER", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-ERZ-SPEICHER-01"],
    data: {
      steckbriefId: "L3-ERZ-SPEICHER-01",
      erklaerungenProDimension: {
        regulierung: "Reines Merchant-Geschäft ohne Erlösgarantien – kein regulatorischer Schutz.",
        skalierbarkeit: "Projekte lassen sich seriell entwickeln, aber jedes MW braucht physisches Capex – mittlere Skalierbarkeit.",
        marktrisiko: "FCR-Preisverfall und Arbitrage-Volatilität – hohes, selbstkannibalisierendes Marktrisiko.",
        digitalisierung: "Der Optimierungsalgorithmus IST das Geschäftsmodell – höchste Stufe.",
        wettbewerb: "Explosiver Zubau, viele Player, fallende Markteintrittshürden – intensiv.",
        nachhaltigkeit: "Speicher sind der Schlüssel-Enabler für hohe EE-Anteile – hoher Beitrag."
      }
    }
  },
  "Q-SPEICHER-R5": {
    id: "Q-SPEICHER-R5", unitId: "U2-SPEICHER", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-ERZ-SPEICHER-02", "L3-ERZ-SPEICHER-01"],
    data: { steckbriefId: "L3-ERZ-SPEICHER-02", distraktorSteckbriefId: "L3-ERZ-SPEICHER-01" }
  },
  "Q-SPEICHER-T1": {
    id: "Q-SPEICHER-T1", unitId: "U2-SPEICHER", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-SPEICHER-02", "L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Die Sonnen-Flatrate entkoppelt die Stromrechnung vom Verbrauch. Welches Modell aus Modul 4 folgt derselben Erlöslogik – und welches wäre das Gegenbeispiel?",
      optionen: [
        { text: "Tibber folgt derselben Logik (fixer Monatsbetrag, von der Energiemenge entkoppelt) – das Gegenbeispiel ist Ostrom, dessen fixer Aufschlag pro kWh gerade an der Menge hängt.", korrekt: true, erklaerung: "Die Unterscheidung Abo (mengenunabhängig) vs. Aufschlag je kWh (mengenabhängig) ist eine der wichtigsten Erlöslogik-Trennlinien im Energievertrieb." },
        { text: "Check24 folgt derselben Logik – die CPA-Provision ist ebenfalls vom Stromverbrauch des Kunden entkoppelt.", korrekt: false, erklaerung: "Die CPA ist zwar verbrauchsunabhängig, aber einmalig pro Vermittlung – eine Flatrate ist dagegen ein wiederkehrender Erlös aus einer laufenden Beziehung. Die Logiken sind grundverschieden." },
        { text: "Der Stadtwerke-Querverbund – auch dort ist die Rechnung vom Verbrauch entkoppelt.", korrekt: false, erklaerung: "Nein, Stadtwerke rechnen klassisch je kWh ab – der Querverbund betrifft die interne Gewinnverwendung, nicht die Tarifstruktur." }
      ]
    }
  },

  // ── U2-GROSSKLEIN ───────────────────────────────────────────────
  "Q-GROSSKLEIN-WE1": {
    id: "Q-GROSSKLEIN-WE1", unitId: "U2-GROSSKLEIN", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-ERZ-EE-03"],
    data: {
      szenario: "1 GW installierte Leistung bei 3.000 € je kW Investitionskosten. Wie hoch ist das Gesamt-Capex des Offshore-Parks in Milliarden Euro?",
      eingabefelder: [{ key: "capex", label: "Capex", einheit: "Mrd. €" }],
      loesung: { capex: { wert: 3, toleranz: 0.2 } },
      rechenweg: ["1 GW = 1.000.000 kW.", "Capex = 1.000.000 kW × 3.000 €/kW = 3 Mrd. €.", "Dieses Kapital ist über Jahre gebunden, bevor die erste kWh verkauft wird – ohne den 20 Jahre gesicherten Ausschreibungspreis würde keine Bank ein solches Risiko finanzieren."]
    }
  },
  "Q-GROSSKLEIN-WE2": {
    id: "Q-GROSSKLEIN-WE2", unitId: "U2-GROSSKLEIN", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-EE-04"],
    data: {
      frage: "Was unterscheidet den EWS-Sonnencent strukturell von einem Konzern-Ökotarif?",
      optionen: [
        { text: "Der Mechanismus liegt im Tarif selbst: Ein fester Betrag je verkaufter kWh fließt automatisch in neue bürgereigene Anlagen – statt dass der grüne Charakter über zugekaufte HKN hergestellt wird.", korrekt: true, erklaerung: "Der Kunde finanziert Neuanlagen mit, ohne selbst aktiv zu werden – die Zahlung erzeugt direkt neue Erzeugung, nicht nur ein Zertifikat." },
        { text: "Der Sonnencent ist eine freiwillige Spende, die Kunden zusätzlich zur Rechnung leisten können.", korrekt: false, erklaerung: "Gerade nicht – er ist fest in den Tarif eingebaut. Die Wirkung hängt nicht vom Spendenverhalten ab, das ist der Clou." },
        { text: "Der Sonnencent ersetzt die EEG-Umlage für EWS-Kunden.", korrekt: false, erklaerung: "Die EEG-Finanzierung läuft seit 2022 über den Bundeshaushalt – der Sonnencent ist ein davon unabhängiges, genossenschaftseigenes Förderinstrument." }
      ]
    }
  },
  "Q-GROSSKLEIN-R1": {
    id: "Q-GROSSKLEIN-R1", unitId: "U2-GROSSKLEIN", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-EE-03"],
    data: {
      frage: "Warum gilt der O&M-Betrieb (Wartung) als profitabelste Phase eines Offshore-Projekts?",
      optionen: [
        { text: "Er macht 20–25% der gesamten Projekterlöse über 20 Jahre aus – und ohne funktionierende Wartung erreicht der Park seine 4.000–4.500 Volllaststunden gar nicht.", korrekt: true, erklaerung: "Bau ist Durchlaufgeschäft mit Lieferkettenrisiko – der planbare, margenstarke Teil ist der jahrzehntelange Betrieb." },
        { text: "O&M-Verträge werden staatlich bezuschusst, um die Verfügbarkeit kritischer Infrastruktur zu sichern.", korrekt: false, erklaerung: "Es gibt keinen O&M-Zuschuss – die Marge entsteht aus langfristigen Serviceverträgen und Spezialisierungsvorteilen (Schiffe, Techniker, Ersatzteile)." },
        { text: "In der Betriebsphase entfallen die Netzentgelte, die während des Baus fällig waren.", korrekt: false, erklaerung: "Erzeuger zahlen in Deutschland ohnehin keine Einspeise-Netzentgelte – die O&M-Marge hat mit Netzentgelten nichts zu tun." }
      ]
    }
  },
  "Q-GROSSKLEIN-R2": {
    id: "Q-GROSSKLEIN-R2", unitId: "U2-GROSSKLEIN", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-EE-03"],
    data: {
      frage: "Die hohen Eintrittsbarrieren schützen Offshore-Entwickler vor Newcomern – aber nicht vor wem?",
      optionen: [
        { text: "Vor Öl- und Gaskonzernen (BP, TotalEnergies) mit günstigerem Kapital, die die Gebotslogik in Auktionen verschoben haben – während die Marge zugleich in die Lieferkette (Turbinen, Kabel, Schiffe) wandert.", korrekt: true, erklaerung: "Der Angriff kommt nicht von unten (Startups), sondern von der Kapitalseite – und die Engpass-Lieferanten halten die Preissetzungsmacht." },
        { text: "Vor chinesischen Turbinenherstellern, die eigene Parks in der deutschen Nordsee entwickeln.", korrekt: false, erklaerung: "Chinesische Hersteller drücken auf die Turbinenpreise, treten aber bislang nicht als Parkentwickler in deutschen Ausschreibungen auf – der beschriebene Angreifer ist Big Oil." },
        { text: "Vor Bürgerenergiegenossenschaften, die über Sonderquoten bevorzugten Zugang zu Offshore-Flächen erhalten.", korrekt: false, erklaerung: "Offshore-Sonderquoten für Genossenschaften gibt es nicht – die Kapitalintensität schließt kleine Akteure hier faktisch aus (anders als onshore)." }
      ]
    }
  },
  "Q-GROSSKLEIN-R3": {
    id: "Q-GROSSKLEIN-R3", unitId: "U2-GROSSKLEIN", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-ERZ-EE-03"],
    data: {
      text: "Die deutschen Offshore-Ziele: {{a}} bis 2030 und {{b}} bis 2045 (Stand heute: ~8 GW). Die Volllaststunden in der Nordsee liegen bei {{c}} pro Jahr – deutlich über Onshore-Wind.",
      luecken: {
        a: { loesungen: ["30 GW"], erklaerung: "Das WindSeeG-Ziel für 2030 – fast eine Vervierfachung des heutigen Bestands." },
        b: { loesungen: ["70 GW"], erklaerung: "Das Langfristziel 2045 macht die Nordsee zur europäischen Energiedrehscheibe." },
        c: { loesungen: ["4.000–4.500", "4000-4500", "4.000 bis 4.500"], erklaerung: "Offshore-Wind läuft fast doppelt so viele Volllaststunden wie gute Onshore-Standorte." }
      },
      distraktoren: ["15 GW", "2.000"]
    }
  },
  "Q-GROSSKLEIN-R4": {
    id: "Q-GROSSKLEIN-R4", unitId: "U2-GROSSKLEIN", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-EE-04"],
    data: {
      frage: "Worin liegt der strukturelle Kapitalkostenvorteil einer Bürgerenergiegenossenschaft?",
      optionen: [
        { text: "Genossenschaftseinlagen sind günstiges, geduldiges Kapital: Mitglieder erwarten moderate Dividenden statt Marktrenditen – und sind zugleich loyale Kunden (Churn <5%).", korrekt: true, erklaerung: "Die Doppelrolle Mitglied = Kapitalgeber = Kunde ersetzt teures Fremdkapital und teures Marketing gleichzeitig." },
        { text: "Genossenschaften sind von der Körperschaftsteuer befreit und können dadurch günstiger kalkulieren.", korrekt: false, erklaerung: "Eine generelle Steuerbefreiung gibt es nicht – Genossenschaften zahlen regulär Körperschaftsteuer (nur Rückvergütungen an Mitglieder sind teils begünstigt)." },
        { text: "Die KfW vergibt an Energiegenossenschaften zinsfreie Sonderkredite.", korrekt: false, erklaerung: "Zinsfreie Sonderprogramme für Genossenschaften existieren nicht – der Vorteil kommt aus den Einlagen der eigenen Mitglieder." }
      ]
    }
  },
  "Q-GROSSKLEIN-T1": {
    id: "Q-GROSSKLEIN-T1", unitId: "U2-GROSSKLEIN", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-EE-04", "L3-VERTRIEB-OEKO-01"],
    data: {
      frage: "Bürgerenergiegenossenschaften und Premium-Ökostromanbieter (Modul 4) verteidigen sich mit demselben Muster gegen Konzern-Kopien. Welches?",
      optionen: [
        { text: "Strukturelle Kriterien, die ein Konzern nicht erfüllen KANN: Konzernunabhängigkeit, demokratische Mitbestimmung, Neuanlagen-Direktverträge – kopierbar wäre nur das Marketing, nicht die Substanz.", korrekt: true, erklaerung: "Naturstroms 'kein Atom/Kohle im Mutterkonzern' und die Genossenschaftsstruktur schließen große Versorger per Definition aus – das ist der seltene Fall eines wirklich nicht kopierbaren Differenzierungsmerkmals." },
        { text: "Exklusive EEG-Fördersätze, die nur werteorientierten Anbietern zustehen.", korrekt: false, erklaerung: "Das EEG kennt keine Werte-Boni – die Förderlogik ist anbieterneutral. Der Schutz liegt in der Organisationsform, nicht in der Förderung." },
        { text: "Beide sichern sich über langfristige Exklusivverträge mit den Netzbetreibern ihrer Region ab.", korrekt: false, erklaerung: "Exklusivverträge zwischen Lieferanten und Netzbetreibern wären ein Unbundling-Verstoß – Netz und Vertrieb sind strikt getrennt." }
      ]
    }
  }

});

// ════════════════════════════════════════════════════════════════════
// MODUL 3 — DIE NETZE
// ════════════════════════════════════════════════════════════════════
Object.assign(LERN_QUIZ_ITEMS, {

  // ── U3-AREGV ────────────────────────────────────────────────────
  "Q-AREGV-WE1": {
    id: "Q-AREGV-WE1", unitId: "U3-AREGV", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-UNB-NETZ-01"],
    data: {
      szenario: "Ein Netzbetreiber investiert 10 Mrd. € in eine neue Leitung. Die BNetzA gesteht darauf eine kalkulatorische Eigenkapitalrendite von 5,07% (Neuanlagen) zu. Wie hoch ist der jährliche regulierte Renditezufluss aus dieser Investition (in Mio. €, vereinfacht auf die volle Basis gerechnet)?",
      eingabefelder: [{ key: "rendite", label: "Jährliche Rendite", einheit: "Mio. €" }],
      loesung: { rendite: { wert: 507, toleranz: 20 } },
      rechenweg: ["Rendite = Investition × EK-Zinssatz = 10.000 Mio. € × 5,07% = 507 Mio. € pro Jahr.", "Dieser Zufluss wiederholt sich über die regulatorische Nutzungsdauer (35–40 Jahre) — deshalb ist Investieren für einen Netzbetreiber attraktiv.", "(Vereinfachung: In der Praxis wird die RAB über die Nutzungsdauer abgeschrieben, die Rendite bezieht sich auf den jeweiligen Restbuchwert.)"]
    }
  },
  "Q-AREGV-WE2": {
    id: "Q-AREGV-WE2", unitId: "U3-AREGV", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-UNB-NETZ-01"],
    data: {
      frage: "Der Netzbetreiber wirtschaftet in seinen Betriebskosten günstiger als der von der BNetzA gesetzte Benchmark-Referenzwert. Was passiert?",
      optionen: [
        { text: "Er darf die Einsparung für die Dauer der Regulierungsperiode (mehrere Jahre) als zusätzlichen Gewinn behalten, bevor der Wert neu festgesetzt wird.", korrekt: true, erklaerung: "Genau dieser Nachlauf ist der eingebaute Effizienzanreiz der Anreizregulierung — Kostensenkung lohnt sich, weil die Erlösobergrenze nicht sofort mitsinkt." },
        { text: "Die BNetzA senkt sofort die Erlösobergrenze, sodass der Vorteil vollständig an die Netznutzer weitergegeben wird.", korrekt: false, erklaerung: "Das wäre eine reine Kostendurchreichung ohne Anreiz — die ARegV lässt dem Betreiber die Einsparung bewusst für die Periode, um Effizienz zu belohnen." },
        { text: "Der Betreiber muss die Differenz als 'Übergewinn' an einen Netzentgelt-Ausgleichsfonds abführen.", korrekt: false, erklaerung: "Einen solchen Fonds gibt es nicht — die Effizienzrendite bleibt beim Betreiber bis zur nächsten Kostenprüfung." }
      ]
    }
  },
  "Q-AREGV-R1": {
    id: "Q-AREGV-R1", unitId: "U3-AREGV", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-UNB-NETZ-01"],
    data: {
      frage: "Was bedeutet die RAB (regulatorische Kapitalbasis) für die Erlöse eines Netzbetreibers?",
      optionen: [
        { text: "Sie ist der verzinste Kapitalstock: Auf sie gewährt die BNetzA die kalkulatorische Eigenkapitalrendite — je größer die RAB, desto höher der erlaubte Return.", korrekt: true, erklaerung: "Deshalb erhöht jede genehmigte Investition die RAB und damit die Erlösobergrenze über die gesamte Nutzungsdauer." },
        { text: "Sie ist die maximale Strommenge, die der Netzbetreiber pro Jahr durchleiten darf.", korrekt: false, erklaerung: "Netzbetreiber haben keine Mengenobergrenze — die RAB ist eine Kapitalgröße (Anlagevermögen), keine Energiemenge." },
        { text: "Sie ist der gesetzlich fixierte Gewinn, den jeder Netzbetreiber unabhängig von Investitionen erhält.", korrekt: false, erklaerung: "Es gibt keinen fixen Pauschalgewinn — der Return hängt an der Höhe der (investitionsgetriebenen) Kapitalbasis." }
      ]
    }
  },
  "Q-AREGV-R2": {
    id: "Q-AREGV-R2", unitId: "U3-AREGV", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-UNB-NETZ-01"],
    data: {
      text: "Die {{a}} legt per Anreizregulierung (ARegV) eine {{b}} fest. Das Netzentgelt ergibt sich, indem man diese durch die transportierte {{c}} teilt.",
      luecken: {
        a: { loesungen: ["BNetzA", "Bundesnetzagentur"], erklaerung: "Die Bundesnetzagentur ist der Regulierer, der die Erlösobergrenze genehmigt." },
        b: { loesungen: ["Erlösobergrenze", "EOG"], erklaerung: "Die Erlösobergrenze (EOG) begrenzt die Gesamteinnahmen des Netzbetreibers." },
        c: { loesungen: ["Energiemenge", "Menge"], erklaerung: "Entgelt = Erlösobergrenze / Menge — deshalb ist die Mengenerosion (weniger Durchleitung) ein Problem." }
      },
      distraktoren: ["EU-Kommission", "Anlagenzahl"]
    }
  },
  "Q-AREGV-R3": {
    id: "Q-AREGV-R3", unitId: "U3-AREGV", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-UNB-NETZ-01"],
    data: {
      frage: "Warum trägt ein regulierter Netzbetreiber 'kein Marktrisiko, aber Regulierungsrisiko'?",
      optionen: [
        { text: "Sein Erlös hängt nicht vom Strompreis oder Wettbewerb ab, sondern von der BNetzA-Festlegung — deren Änderung (z.B. niedrigerer EK-Zins, neue NEST/AgNes-Regeln) ist das eigentliche Risiko.", korrekt: true, erklaerung: "Jede Regulierungsperiode ist faktisch eine Neuverhandlung der Marge — das ersetzt das Marktrisiko durch politisch-regulatorische Unsicherheit." },
        { text: "Weil er per Termingeschäft gegen alle Strompreisschwankungen abgesichert ist.", korrekt: false, erklaerung: "Netzbetreiber handeln keinen Strom — sie haben schlicht gar kein Preis-Exposure, deshalb braucht es auch keine Absicherung." },
        { text: "Weil der Staat jeden Verlust des Netzbetreibers ausgleicht.", korrekt: false, erklaerung: "Eine staatliche Verlustgarantie gibt es nicht — die Erlösobergrenze sichert die Erlösseite, aber die BNetzA kann die Konditionen verschärfen." }
      ]
    }
  },
  "Q-AREGV-R4": {
    id: "Q-AREGV-R4", unitId: "U3-AREGV", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-UNB-NETZ-01"],
    data: {
      steckbriefId: "L3-UNB-NETZ-01",
      erklaerungenProDimension: {
        regulierung: "Reguliertes Monopol mit gesicherter Erlösobergrenze — höchster Regulierungsschutz aller Geschäftsmodelle.",
        skalierbarkeit: "Netz ist an physische Trassen gebunden, keine Plattform-Skalierung — niedrigste Stufe.",
        marktrisiko: "Kein Preis- oder Mengenrisiko im Marktsinn (Erlös ist reguliert garantiert) — niedrigste Stufe.",
        digitalisierung: "Systemführung ist digital, aber der Kern bleibt physische Infrastruktur — mittel-niedrig.",
        wettbewerb: "Natürliches Monopol, kein direkter Wettbewerb — niedrigste Stufe.",
        nachhaltigkeit: "Das Netz ist Enabler der Energiewende (HGÜ-Ausbau), aber selbst kein grünes Produkt — mittel."
      }
    }
  },
  "Q-AREGV-R5": {
    id: "Q-AREGV-R5", unitId: "U3-AREGV", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-UNB-NETZ-01", "L3-VNB-KLASSISCH-01"],
    data: { steckbriefId: "L3-UNB-NETZ-01", distraktorSteckbriefId: "L3-VNB-KLASSISCH-01" }
  },
  "Q-AREGV-T1": {
    id: "Q-AREGV-T1", unitId: "U3-AREGV", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-UNB-NETZ-01", "L3-ERZ-KONV-01"],
    data: {
      frage: "Ein Merchant-Gaskraftwerk (Modul 2) und ein Übertragungsnetzbetreiber stehen für zwei gegensätzliche Erlöslogiken. Worin?",
      optionen: [
        { text: "Das Kraftwerk trägt volles Marktrisiko (Erlös = schwankender Spread), der Netzbetreiber trägt keins (Erlös = regulierte Obergrenze) — dafür Regulierungsrisiko.", korrekt: true, erklaerung: "Merchant vs. Reguliert ist die grundlegendste Erlöstyp-Unterscheidung der Energiewirtschaft — maximales Marktrisiko gegen maximalen Regulierungsschutz." },
        { text: "Beide verdienen an der Merit Order, nur auf unterschiedlichen Spannungsebenen.", korrekt: false, erklaerung: "Die Merit Order betrifft nur die Erzeugung — der Netzbetreiber verdient völlig unabhängig davon an regulierten Entgelten." },
        { text: "Beide sind reguliert, das Kraftwerk über das EEG, das Netz über die ARegV.", korrekt: false, erklaerung: "Ein Merchant-Gaskraftwerk erhält gerade keine EEG-Förderung — es ist reines Marktgeschäft. Nur das Netz ist reguliert." }
      ]
    }
  },

  // ── U3-REDISPATCH ───────────────────────────────────────────────
  "Q-REDISPATCH-WE1": {
    id: "Q-REDISPATCH-WE1", unitId: "U3-REDISPATCH", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-UNB-NETZ-02"],
    data: {
      frage: "Warum bleibt die Gesamteinspeisung ins Netz beim Redispatch konstant, obwohl der Windpark gedrosselt wird?",
      optionen: [
        { text: "Weil südlich des Engpasses gleichzeitig ein Kraftwerk um denselben Betrag hochgefahren wird — es wird nur der Erzeugungsort verschoben, nicht die Menge.", korrekt: true, erklaerung: "Genau das ist die Idee: Der Engpass ist ein Transport-, kein Mengenproblem. Down im Norden + Up im Süden = Netz entlastet, Versorgung gesichert." },
        { text: "Weil die abgeregelte Windenergie in einer Batterie zwischengespeichert und später eingespeist wird.", korrekt: false, erklaerung: "Redispatch speichert nichts — die Windenergie geht in dieser Stunde verloren (der Betreiber bekommt sie nur vergütet), ein anderes Kraftwerk springt ein." },
        { text: "Weil der Verbrauch südlich des Engpasses automatisch gesenkt wird.", korrekt: false, erklaerung: "Redispatch greift auf der Erzeugungsseite ein (Kraftwerke hoch/runter), nicht am Verbrauch." }
      ]
    }
  },
  "Q-REDISPATCH-WE2": {
    id: "Q-REDISPATCH-WE2", unitId: "U3-REDISPATCH", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-UNB-NETZ-02"],
    data: {
      frage: "Was ist die eigentliche Ursache für die Verfünffachung des Redispatch-Volumens seit 2014?",
      optionen: [
        { text: "Der Netzausbau hinkt dem EE-Zubau strukturell 5–10 Jahre hinterher — es wird viel Windstrom im Norden erzeugt, aber die Leitungen nach Süden fehlen.", korrekt: true, erklaerung: "Redispatch ist das Symptom des Netzausbaustaus; Projekte wie SuedLink sollen das strukturell lösen." },
        { text: "Die Kraftwerke werden absichtlich falsch eingesetzt, um höhere Erstattungen zu kassieren.", korrekt: false, erklaerung: "Redispatch wird vom ÜNB angeordnet, nicht von Kraftwerken ausgelöst — die Ursache ist physikalischer Netzengpass, kein Missbrauch." },
        { text: "Die Strommnachfrage ist seit 2014 um das Fünffache gestiegen.", korrekt: false, erklaerung: "Die Stromnachfrage ist weitgehend stabil — nicht der Verbrauch, sondern die räumliche Diskrepanz zwischen Erzeugung (Nord) und Last (Süd) treibt das Volumen." }
      ]
    }
  },
  "Q-REDISPATCH-R1": {
    id: "Q-REDISPATCH-R1", unitId: "U3-REDISPATCH", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-UNB-NETZ-02"],
    data: {
      frage: "Bekommt der abgeregelte Windpark beim Redispatch Geld?",
      optionen: [
        { text: "Ja — die entgangene Erzeugung (Ausfallarbeit) wird ihm erstattet, inklusive der EEG-Vergütung, die er sonst erhalten hätte.", korrekt: true, erklaerung: "Sonst würde niemand in Windkraft in engpassgefährdeten Regionen investieren — die Erstattung hält das Investitionssignal aufrecht." },
        { text: "Nein — abgeregelte Anlagen tragen den Netzengpass als eigenes Risiko.", korrekt: false, erklaerung: "Das wäre investitionsfeindlich; tatsächlich wird die Ausfallarbeit erstattet und über die Netzentgelte sozialisiert." },
        { text: "Nur wenn die Abregelung länger als 24 Stunden dauert.", korrekt: false, erklaerung: "Es gibt keine solche Mindestdauer — jede angeordnete Abregelung wird erstattet." }
      ]
    }
  },
  "Q-REDISPATCH-R2": {
    id: "Q-REDISPATCH-R2", unitId: "U3-REDISPATCH", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-UNB-NETZ-02"],
    data: {
      text: "Beim Redispatch weist der ÜNB nördlich des Engpasses '{{a}}' (Einspeisung reduzieren) und südlich '{{b}}' (Einspeisung erhöhen) an. Die Kosten dafür werden über die {{c}} auf alle Verbraucher umgelegt.",
      luecken: {
        a: { loesungen: ["Einsatz-Down", "Down"], erklaerung: "Einsatz-Down: die Anlage vor dem Engpass drosselt." },
        b: { loesungen: ["Einsatz-Up", "Up"], erklaerung: "Einsatz-Up: eine Anlage hinter dem Engpass springt ein." },
        c: { loesungen: ["Netzentgelte", "Netzentgelt"], erklaerung: "Sozialisierung über die Netzentgelte — deshalb zahlen alle Stromkunden mit." }
      },
      distraktoren: ["Einsatz-Stopp", "EEG-Umlage"]
    }
  },
  "Q-REDISPATCH-R3": {
    id: "Q-REDISPATCH-R3", unitId: "U3-REDISPATCH", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-UNB-NETZ-02"],
    data: {
      frage: "Warum sanken die Netzengpasskosten von ~4,2 Mrd. € (2022) auf ~3,1 Mrd. € (2023), obwohl das Eingriffsvolumen weiter stieg?",
      optionen: [
        { text: "Gesunkene Brennstoffpreise: Die per Einsatz-Up hochgefahrenen (meist Gas-)Kraftwerke waren 2023 deutlich billiger im Betrieb als im Krisenjahr 2022.", korrekt: true, erklaerung: "Die Kosten hängen an zwei Faktoren — Eingriffsmenge UND Brennstoffpreis. 2023 überwog der Preisrückgang das Mengenwachstum." },
        { text: "Der Netzausbau war 2023 abgeschlossen, sodass weniger eingegriffen werden musste.", korrekt: false, erklaerung: "Im Gegenteil — das Eingriffsvolumen stieg weiter; SuedLink & Co. sind erst gegen Ende der 2020er fertig." },
        { text: "Die BNetzA hat 2023 eine Kostenobergrenze für Redispatch eingeführt.", korrekt: false, erklaerung: "Eine solche Obergrenze existiert nicht — der Rückgang kam allein aus niedrigeren Brennstoffpreisen." }
      ]
    }
  },
  "Q-REDISPATCH-R4": {
    id: "Q-REDISPATCH-R4", unitId: "U3-REDISPATCH", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-UNB-NETZ-02"],
    data: {
      steckbriefId: "L3-UNB-NETZ-02",
      erklaerungenProDimension: {
        regulierung: "Vollständig regulierter, gesetzlich verankerter Prozess (§13/14 EnWG) — höchste Stufe.",
        skalierbarkeit: "An das physische Netz gebunden, keine Skalierung im Plattformsinn — niedrigste Stufe.",
        marktrisiko: "Reine Kostenerstattung ohne Marktexposure für den ÜNB — niedrigste Stufe.",
        digitalisierung: "Standardisierte Datenkommunikation zwischen ÜNB und 900+ VNBs, Prognose-Software zentral — relativ hoch.",
        wettbewerb: "Hoheitliche Aufgabe des ÜNB, kein Wettbewerb — niedrigste Stufe.",
        nachhaltigkeit: "Ermöglicht hohe EE-Einspeisung trotz Netzengpässen (Enabler), aber selbst kein grünes Produkt — mittel."
      }
    }
  },
  "Q-REDISPATCH-T1": {
    id: "Q-REDISPATCH-T1", unitId: "U3-REDISPATCH", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-UNB-NETZ-02", "L3-ERZ-SPEICHER-01"],
    data: {
      frage: "Lokale Flexmärkte und 'Nutzen statt Abregeln' sollen Redispatch teilweise ersetzen. Welches Asset aus Modul 2 profitiert davon am direktesten?",
      optionen: [
        { text: "Der Batteriespeicher: Er kann überschüssigen Windstrom vor dem Engpass aufnehmen, statt dass abgeregelt wird — und ihn später wieder abgeben.", korrekt: true, erklaerung: "'Nutzen statt Abregeln' verwandelt Redispatch-Kosten in ein Marktsignal, das Speicher am Engpass wirtschaftlich macht — Modul 2 trifft Modul 3." },
        { text: "Das konventionelle PPA, weil es langfristige Festpreise bietet.", korrekt: false, erklaerung: "Ein PPA ist ein Preissicherungsvertrag ohne Bezug zum lokalen Netzengpass — es kann Redispatch nicht ersetzen." },
        { text: "Die Bürgerenergiegenossenschaft, weil sie lokal verankert ist.", korrekt: false, erklaerung: "Lokale Verankerung allein löst keinen Netzengpass — dafür braucht es steuerbare Flexibilität (Speicher/Last), nicht eine Organisationsform." }
      ]
    }
  },

  // ── U3-BILANZ ───────────────────────────────────────────────────
  "Q-BILANZ-WE1": {
    id: "Q-BILANZ-WE1", unitId: "U3-BILANZ", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-UNB-NETZ-03"],
    data: {
      frage: "Was ist die 'Unterdeckung' im Bilanzkreis des Stadtwerks?",
      optionen: [
        { text: "Die Kunden verbrauchen mehr, als das Stadtwerk für diese Stunde angemeldet (prognostiziert) hatte — die Differenz muss als Ausgleichsenergie beschafft werden.", korrekt: true, erklaerung: "Der Bilanzkreis muss stündlich ausgeglichen sein; jede Abweichung nach oben ist eine teuer nachzukaufende Unterdeckung." },
        { text: "Das Stadtwerk hat weniger Eigenkapital als gesetzlich für Lieferanten vorgeschrieben.", korrekt: false, erklaerung: "Unterdeckung ist ein energiewirtschaftlicher, kein bilanzieller Begriff — es geht um Strommengen pro Stunde, nicht um Eigenkapital." },
        { text: "Das Stadtwerk hat zu wenige Kunden, um seinen Bilanzkreis zu füllen.", korrekt: false, erklaerung: "Die Kundenzahl ist irrelevant — Unterdeckung entsteht durch Prognosefehler, nicht durch Portfoliogröße." }
      ]
    }
  },
  "Q-BILANZ-WE2": {
    id: "Q-BILANZ-WE2", unitId: "U3-BILANZ", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-UNB-NETZ-03"],
    data: {
      szenario: "Ein Stadtwerk mit 500 GWh Jahresabsatz hat einen durchschnittlichen Prognosefehler von 1%. Die Ausgleichsenergie kostet im Schnitt 60 €/MWh mehr als der geplante Beschaffungspreis. Wie hoch sind die jährlichen Mehrkosten durch den Prognosefehler (in €)?",
      eingabefelder: [{ key: "kosten", label: "Mehrkosten/Jahr", einheit: "€" }],
      loesung: { kosten: { wert: 300000, toleranz: 30000 } },
      rechenweg: ["Fehlmenge = 1% von 500 GWh = 5 GWh = 5.000 MWh.", "Mehrkosten = 5.000 MWh × 60 €/MWh = 300.000 €.", "Ein Wettbewerber mit 0,5% Prognosefehler hätte nur die Hälfte — deshalb ist Prognosegüte ein direkter, harter Margenhebel."]
    }
  },
  "Q-BILANZ-R1": {
    id: "Q-BILANZ-R1", unitId: "U3-BILANZ", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-UNB-NETZ-03"],
    data: {
      frage: "Ist Ausgleichsenergie für den ÜNB ein Gewinnmodell?",
      optionen: [
        { text: "Nein — für den ÜNB ist es ein Nullsummen-Durchleitungssystem; die Zahlungen fließen zwischen den Bilanzkreisen, nicht in die ÜNB-Kasse.", korrekt: true, erklaerung: "Der ÜNB organisiert nur den Ausgleich; sein Nutzen ist Systemstabilität und Datenqualität, kein Handelsgewinn." },
        { text: "Ja — der ÜNB verdient an der Spanne zwischen Unterdeckungs- und Überdeckungspreis.", korrekt: false, erklaerung: "Diese Spanne wird nicht vom ÜNB vereinnahmt — das System ist als Nullsumme konstruiert, nicht als Ertragsquelle." },
        { text: "Ja — der ÜNB erhält eine gesetzliche Provision auf jede MWh Ausgleichsenergie.", korrekt: false, erklaerung: "Eine solche Provision existiert nicht; die Prozesskosten deckt der ÜNB über die regulierten Netzentgelte, nicht über Ausgleichsenergie." }
      ]
    }
  },
  "Q-BILANZ-R2": {
    id: "Q-BILANZ-R2", unitId: "U3-BILANZ", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-UNB-NETZ-03"],
    data: {
      text: "Jeder Lieferant führt einen {{a}} beim ÜNB und meldet stündlich einen Fahrplan. Weicht der reale Verbrauch ab, entsteht {{b}}. Die geplante Umstellung von stündlicher auf {{c}}-Bilanzierung ist ein EU-Ziel.",
      luecken: {
        a: { loesungen: ["Bilanzkreis"], erklaerung: "Der Bilanzkreis ist das Konto, auf dem Einspeisung und Entnahme ausgeglichen werden müssen." },
        b: { loesungen: ["Ausgleichsenergie"], erklaerung: "Ausgleichsenergie ist der Preis für die Abweichung vom Fahrplan." },
        c: { loesungen: ["15-Minuten", "viertelstündliche", "15-Minuten-"], erklaerung: "Die 15-Minuten-Bilanzierung erhöht die Genauigkeit — und die Anforderungen an Prognose und IT." }
      },
      distraktoren: ["Sparplan", "Sekunden"]
    }
  },
  "Q-BILANZ-R3": {
    id: "Q-BILANZ-R3", unitId: "U3-BILANZ", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-UNB-NETZ-03"],
    data: {
      frage: "Wodurch ist die Bilanzkreis-Wertschöpfung des ÜNB angreifbar?",
      optionen: [
        { text: "Durch 'BKV-as-a-Service'-Dienstleister: Über offene APIs (MaBiS 2.0) übernehmen Dritte für kleine Lieferanten die Prognose und das Ausgleichsenergie-Risikomanagement — die wertschöpfende Analytik entsteht bei ihnen, nicht beim ÜNB.", korrekt: true, erklaerung: "Dem ÜNB bleibt die Infrastrukturrolle; die margenträchtige Optimierung wandert zu spezialisierten Dienstleistern." },
        { text: "Durch neue Wettbewerber, die eigene Bilanzkreissysteme parallel zum ÜNB betreiben.", korrekt: false, erklaerung: "Das Bilanzkreissystem ist ein natürliches Monopol des ÜNB — niemand baut ein Konkurrenzsystem; angegriffen wird die Analytik-Schnittstelle." },
        { text: "Durch Verbraucher, die ihren Strom ohne Bilanzkreis direkt an der Börse kaufen.", korrekt: false, erklaerung: "Auch Börsenstrom läuft über Bilanzkreise — man kann das System nicht umgehen, nur die Dienstleistung darüber auslagern." }
      ]
    }
  },
  "Q-BILANZ-R4": {
    id: "Q-BILANZ-R4", unitId: "U3-BILANZ", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-UNB-NETZ-03"],
    data: {
      steckbriefId: "L3-UNB-NETZ-03",
      erklaerungenProDimension: {
        regulierung: "Bilanzkreismanagement ist eine regulierte ÜNB-Hoheitsaufgabe (StromNZV/MaBiS) — höchste Stufe.",
        skalierbarkeit: "An die zentrale Marktinfrastruktur gebunden, keine Plattform-Skalierung — niedrigste Stufe.",
        marktrisiko: "Für den ÜNB ein Nullsummen-Durchleitungssystem ohne eigenes Marktexposure — niedrigste Stufe.",
        digitalisierung: "Datenintensiv, Umstellung auf API-basierte Echtzeit-Kommunikation (MaBiS 2.0) — relativ hoch.",
        wettbewerb: "Zentrale Monopolfunktion des ÜNB, kein Wettbewerb — niedrigste Stufe.",
        nachhaltigkeit: "Neutrale Marktinfrastruktur ohne direkten Energiewende-Beitrag — niedrig."
      }
    }
  },
  "Q-BILANZ-T1": {
    id: "Q-BILANZ-T1", unitId: "U3-BILANZ", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-UNB-NETZ-03", "L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Tibber (Modul 4) steuert Verbrauch automatisch in günstige Stunden. Welchen doppelten Vorteil hat das für Tibbers Bilanzkreis?",
      optionen: [
        { text: "Gesteuerte Lasten sind besser prognostizierbar UND lassen sich gezielt dorthin verschieben, wo Tibber ohnehin Strom eingeplant hat — beides senkt die Ausgleichsenergiekosten.", korrekt: true, erklaerung: "Steuerbarkeit reduziert den Prognosefehler an der Wurzel — ein unterschätzter Nebeneffekt des Tibber-Modells, der direkt auf die Bilanzkreis-Marge wirkt." },
        { text: "Tibber muss als App-Anbieter keinen Bilanzkreis führen.", korrekt: false, erklaerung: "Doch — Tibber ist ein Stromlieferant und führt einen Bilanzkreis wie jeder andere; die Steuerbarkeit hilft ihm nur, ihn genauer zu treffen." },
        { text: "Tibber kann durch die App die Ausgleichsenergiepreise des ÜNB senken.", korrekt: false, erklaerung: "Einzelne Lieferanten setzen die Ausgleichsenergiepreise nicht — Tibber kann nur die eigene Abweichung minimieren, nicht den Preis beeinflussen." }
      ]
    }
  },

  // ── U3-14A ──────────────────────────────────────────────────────
  "Q-14A-WE1": {
    id: "Q-14A-WE1", unitId: "U3-14A", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VNB-NEU-01"],
    data: {
      frage: "Darf der VNB die Wallbox per §14a komplett abschalten?",
      optionen: [
        { text: "Nein — er darf sie nur auf eine Mindestleistung von 4,2 kW dimmen (max. 2h am Stück); das Auto lädt langsamer, aber es lädt weiter.", korrekt: true, erklaerung: "Der 'Modulationsrahmen' garantiert eine Mindestleistung — vollständige Abschaltung ist nicht erlaubt, das schützt den Kunden." },
        { text: "Ja — bei akuter Netzüberlastung darf die Wallbox vollständig vom Netz getrennt werden.", korrekt: false, erklaerung: "§14a erlaubt nur Dimmen auf 4,2 kW, keine Vollabschaltung — der Kunde behält immer eine nutzbare Mindestleistung." },
        { text: "Ja, aber nur nachts zwischen 0 und 6 Uhr.", korrekt: false, erklaerung: "Es gibt kein festes Zeitfenster — die Steuerung erfolgt situativ bei lokalem Engpass, begrenzt auf 4,2 kW und max. 2h am Stück." }
      ]
    }
  },
  "Q-14A-WE2": {
    id: "Q-14A-WE2", unitId: "U3-14A", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VNB-NEU-01"],
    data: {
      frage: "Warum rechnet sich §14a für den VNB gleich doppelt?",
      optionen: [
        { text: "Er spart den teuren Trafo-Ausbau (30.000–100.000 €) UND die dafür nötige Steuer-Infrastruktur (CLS) wird regulatorisch als RAB-relevantes Betriebsmittel anerkannt — er darf sie also verzinsen.", korrekt: true, erklaerung: "Capex-Vermeidung plus verzinsbares Smart-Grid-Investment: der VNB gewinnt auf der Kosten- und der Erlösseite gleichzeitig." },
        { text: "Er kassiert die Netzentgeltnachlässe der Kunden als zusätzliche Einnahme.", korrekt: false, erklaerung: "Umgekehrt — der Netzentgeltnachlass ist eine Zahlung AN den Kunden, keine Einnahme des VNB." },
        { text: "Er verkauft die abgeregelte Energie an der Börse weiter.", korrekt: false, erklaerung: "§14a regelt Netzsteuerung, keinen Energiehandel — der VNB handelt aus Unbundling-Gründen ohnehin keinen Strom." }
      ]
    }
  },
  "Q-14A-R1": {
    id: "Q-14A-R1", unitId: "U3-14A", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VNB-KLASSISCH-02"],
    data: {
      frage: "Was ist der Unterschied zwischen gMSB und iMSB beim Messstellenbetrieb?",
      optionen: [
        { text: "Der grundzuständige gMSB (per Default der VNB) baut automatisch ein; ein wettbewerblicher iMSB (z.B. inexogy, ista) kann den Kunden aktiv abwerben.", korrekt: true, erklaerung: "Der gMSB ist der Default mit reguliertem Entgelt, der iMSB muss über Mehrwertdienste überzeugen — eine klassische Opt-out-Hürde." },
        { text: "gMSB messen Strom, iMSB messen Gas und Wärme.", korrekt: false, erklaerung: "Die Unterscheidung ist rechtlich (grundzuständig vs. wettbewerblich), nicht nach Energieträger." },
        { text: "gMSB sind privat, iMSB sind staatlich.", korrekt: false, erklaerung: "Beide sind Marktrollen; der gMSB ist meist der (kommunale oder private) VNB, der iMSB ein wettbewerblicher Anbieter — mit Eigentum hat das nichts zu tun." }
      ]
    }
  },
  "Q-14A-R2": {
    id: "Q-14A-R2", unitId: "U3-14A", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VNB-NEU-01", "L3-VNB-KLASSISCH-02"],
    data: {
      text: "Voraussetzung für die §14a-Steuerung ist das intelligente Messsystem mit einem {{a}} (SMGW). Als Gegenleistung fürs Dimmen erhält der Kunde einen {{b}} von 100–190 €/Jahr. Statt einen Trafo für {{c}} auszubauen, verschiebt der VNB die Investition.",
      luecken: {
        a: { loesungen: ["Smart Meter Gateway", "SMGW", "Gateway"], erklaerung: "Das SMGW ist die sichere Kommunikationszentrale des intelligenten Messsystems." },
        b: { loesungen: ["Netzentgeltnachlass", "Nachlass"], erklaerung: "Der Netzentgeltnachlass entschädigt den Kunden für die Steuerbarkeit." },
        c: { loesungen: ["30.000–100.000 €", "30000-100000", "30.000 bis 100.000 €"], erklaerung: "Genau diesen Trafo-Ausbau vermeidet oder verschiebt das Lastmanagement." }
      },
      distraktoren: ["Ladekabel", "Bonuszertifikat"]
    }
  },
  "Q-14A-R3": {
    id: "Q-14A-R3", unitId: "U3-14A", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VNB-NEU-01"],
    data: {
      frage: "Wer greift die Steuerungshoheit des VNB über die flexiblen Geräte an — und mit welchem Ziel?",
      optionen: [
        { text: "Aggregatoren, HEMS-Anbieter und Neolieferanten wollen dieselben Geräte marktlich (nach Börsenpreis) statt netzdienlich steuern — wer die Kundenschnittstelle besitzt, bestimmt, wessen Optimierung Vorrang hat.", korrekt: true, erklaerung: "§14a ist eine Schnittstelle, kein fertiges Geschäftsmodell — der Kampf um die Gerätesteuerung ist ein Kampf um die Kundenschnittstelle." },
        { text: "Andere VNB, die in fremde Netzgebiete expandieren wollen.", korrekt: false, erklaerung: "VNB haben Gebietsmonopole und expandieren nicht in fremde Netze — der Angriff kommt von marktlichen Flex-Vermarktern, nicht von anderen Netzbetreibern." },
        { text: "Die BNetzA, die den VNB die §14a-Steuerung wieder entziehen will.", korrekt: false, erklaerung: "Die BNetzA hat §14a gerade eingeführt — die Spannung liegt zwischen netzdienlicher (VNB) und marktlicher (Aggregator) Steuerung, nicht in einem Entzug." }
      ]
    }
  },
  "Q-14A-R4": {
    id: "Q-14A-R4", unitId: "U3-14A", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-VNB-NEU-01"],
    data: {
      steckbriefId: "L3-VNB-NEU-01",
      erklaerungenProDimension: {
        regulierung: "Regulatorisch verankert (§14a, BK6-22-300), aber weniger monopolistisch geschützt als das Kernnetzentgelt — hoch, nicht maximal.",
        skalierbarkeit: "Mehr sVE-Anschlüsse ohne proportionalen Capex möglich — mittlere Skalierbarkeit durch Flex statt Kupfer.",
        marktrisiko: "Regulierte Capex-Vermeidung ohne Marktexposure — niedrigste Stufe.",
        digitalisierung: "CLS/SMGW-Steuerung ist hochdigital — das Netz lernt steuern statt bauen, höchste Stufe.",
        wettbewerb: "Netzbetrieb bleibt Monopol, aber die Gerätesteuerung ist umkämpft (Aggregatoren) — niedrig.",
        nachhaltigkeit: "Ermöglicht mehr Wärmepumpen und E-Autos am selben Netz — hoher Enabler-Beitrag."
      }
    }
  },
  "Q-14A-T1": {
    id: "Q-14A-T1", unitId: "U3-14A", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VNB-NEU-01", "L3-ERZ-SPEICHER-02"],
    data: {
      frage: "Der Heimspeicher (Modul 2) wird vom Aggregator marktlich gesteuert, der VNB will ihn per §14a netzdienlich steuern. Worin besteht der Grundkonflikt?",
      optionen: [
        { text: "Beide wollen dasselbe Gerät steuern, aber nach unterschiedlicher Logik: der Aggregator nach Börsenpreis (maximaler Erlös), der VNB nach Netzzustand (Engpassvermeidung) — die Priorisierung ist regulatorisch noch nicht abschließend geklärt.", korrekt: true, erklaerung: "Genau diese Doppelsteuerung ist die offene Flanke: Modul 2 (Flex-Vermarktung) und Modul 3 (Netzsteuerung) greifen auf dasselbe physische Asset zu." },
        { text: "Der Heimspeicher kann technisch nur von einer Partei gleichzeitig genutzt werden, nie von beiden.", korrekt: false, erklaerung: "Technisch ist geteilte Nutzung möglich (z.B. 20% für VPP, Rest für Eigenverbrauch) — der Konflikt ist die Steuerungspriorität, nicht die physische Exklusivität." },
        { text: "§14a verbietet Heimspeichern die Teilnahme an virtuellen Kraftwerken.", korrekt: false, erklaerung: "Kein solches Verbot — §14a und VPP-Teilnahme koexistieren, ihre Koordination ist nur noch nicht vollständig geregelt." }
      ]
    }
  },

  // ── U3-BETREIB ──────────────────────────────────────────────────
  "Q-BETREIB-WE1": {
    id: "Q-BETREIB-WE1", unitId: "U3-BETREIB", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VNB-BETREIB-05"],
    data: {
      frage: "Was ermöglicht der Kommune überhaupt, das Netz am Konzessionsende zurückzukaufen?",
      optionen: [
        { text: "Die Konzession (§46 EnWG) — das Wegerecht fürs Netz — wird nur befristet (meist 20 Jahre) vergeben; bei Auslauf kann die Kommune neu vergeben oder selbst übernehmen.", korrekt: true, erklaerung: "Das befristete Konzessionsrecht ist der einzige reguläre Hebel, mit dem ein sonst festes Netzmonopol den Betreiber wechseln kann." },
        { text: "Die BNetzA versteigert die Netze alle 20 Jahre neu an den Meistbietenden.", korrekt: false, erklaerung: "Es gibt keine BNetzA-Versteigerung — die Kommune vergibt die Wegekonzession selbst, das ist ein kommunalrechtliches Verfahren." },
        { text: "Jeder Netzbetreiber muss sein Netz nach 20 Jahren gesetzlich abgeben.", korrekt: false, erklaerung: "Es gibt keine Abgabepflicht — der Betreiber kann sich um die Konzession erneut bewerben; die Kommune entscheidet." }
      ]
    }
  },
  "Q-BETREIB-WE2": {
    id: "Q-BETREIB-WE2", unitId: "U3-BETREIB", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VNB-BETREIB-01", "L3-VNB-BETREIB-05"],
    data: {
      frage: "Was ist die zentrale finanzielle Motivation hinter einer Rekommunalisierung?",
      optionen: [
        { text: "Der regulierte, planbare Return auf die RAB fließt in den kommunalen Haushalt statt an einen externen Netzkonzern — plus Steuerungshoheit über die lokale Wärme-/Energiewende.", korrekt: true, erklaerung: "Das Netz ist eine stabile, regulierte Ertragsquelle — sie in kommunale Hand zu holen, verbindet finanzielle mit strategischen Motiven." },
        { text: "Die Kommune kann als Netzbetreiberin die Netzentgelte frei senken, um Wähler zu gewinnen.", korrekt: false, erklaerung: "Auch ein kommunaler VNB ist an die ARegV gebunden — die Entgelte sind reguliert, nicht politisch frei setzbar." },
        { text: "Rekommunalisierte Netze sind von der ARegV-Regulierung befreit.", korrekt: false, erklaerung: "Nein — die Regulierung gilt unabhängig vom Eigentümer; nur der Empfänger des Returns ändert sich." }
      ]
    }
  },
  "Q-BETREIB-R1": {
    id: "Q-BETREIB-R1", unitId: "U3-BETREIB", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VNB-BETREIB-01"],
    data: {
      frage: "Was kennzeichnet den kommunalen Eigenbetrieb als Betreibermodell?",
      optionen: [
        { text: "Eigentum, operativer Betrieb und Konzession liegen vollständig in einer Hand (Kommune/Stadtwerk) — volle vertikale Integration, voller Return bleibt im Konzern.", korrekt: true, erklaerung: "Kein Pacht- oder Betriebsführungsentgelt geht an Dritte ab; dafür trägt die Kommune die volle Kapitalbindung." },
        { text: "Die Kommune besitzt das Netz, lässt es aber von einem privaten Konzern betreiben.", korrekt: false, erklaerung: "Das wäre ein Pacht-/Betriebsführungsmodell — beim Eigenbetrieb macht die Kommune alles selbst." },
        { text: "Ein privater Investor besitzt das Netz, die Kommune hält nur die Konzession.", korrekt: false, erklaerung: "Das ist die Asset-Trennung (Pachtmodell) — der Eigenbetrieb hält gerade alles selbst zusammen." }
      ]
    }
  },
  "Q-BETREIB-R2": {
    id: "Q-BETREIB-R2", unitId: "U3-BETREIB", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VNB-BETREIB-05"],
    data: {
      text: "Die Netzkonzession nach {{a}} EnWG wird für meist {{b}} Jahre vergeben. Läuft sie aus, kann die Kommune das Netz zurückkaufen — dieser Vorgang heißt {{c}}.",
      luecken: {
        a: { loesungen: ["§46", "Paragraph 46", "46"], erklaerung: "§46 EnWG regelt die Wegenutzungsrechte (Konzessionen) für Strom- und Gasnetze." },
        b: { loesungen: ["20"], erklaerung: "20 Jahre ist die übliche maximale Konzessionslaufzeit." },
        c: { loesungen: ["Rekommunalisierung"], erklaerung: "Rekommunalisierung: Rückkauf des Netzes in kommunale Hand nach Konzessionsende." }
      },
      distraktoren: ["§14a", "10"]
    }
  },
  "Q-BETREIB-R3": {
    id: "Q-BETREIB-R3", unitId: "U3-BETREIB", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VNB-BETREIB-01"],
    data: {
      frage: "Warum bestraft der ARegV-Effizienzbenchmark kleine kommunale Eigenbetriebe strukturell?",
      optionen: [
        { text: "Ihnen fehlen die Skaleneffekte größerer VNB; im Benchmarking gegen effizientere, größere Netzbetreiber schneiden sie schlechter ab und erhalten niedrigere anerkannte Kosten.", korrekt: true, erklaerung: "Genau deshalb suchen kleine Eigenbetriebe unter Capex-Druck zunehmend Kooperations- oder Betriebsführungsmodelle." },
        { text: "Kleine Betreiber müssen einen gesetzlichen Strafzuschlag auf ihre Netzentgelte zahlen.", korrekt: false, erklaerung: "Einen Strafzuschlag gibt es nicht — der Nachteil entsteht indirekt über den Effizienzvergleich, nicht über eine Abgabe." },
        { text: "Die BNetzA erlaubt kleinen Betreibern keine Investitionen in die RAB.", korrekt: false, erklaerung: "Auch kleine Betreiber dürfen investieren — das Problem ist die Effizienzbewertung ihrer Betriebskosten, nicht ein Investitionsverbot." }
      ]
    }
  },
  "Q-BETREIB-R4": {
    id: "Q-BETREIB-R4", unitId: "U3-BETREIB", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VNB-BETREIB-05", "L3-VNB-BETREIB-01"],
    data: {
      frage: "Warum ist gerade das Konzessionsende der 'natürliche Angriffszeitpunkt' auf einen etablierten Netzbetreiber?",
      optionen: [
        { text: "Weil das Netzmonopol sonst fest ist — nur beim Auslaufen der befristeten Konzession kann die Kommune neu vergeben, rekommunalisieren oder einen anderen Betreiber wählen.", korrekt: true, erklaerung: "Zwischen zwei Konzessionsrunden ist der Betreiber praktisch unangreifbar; die Vergabe alle ~20 Jahre ist das einzige reguläre Wechselfenster." },
        { text: "Weil die BNetzA am Konzessionsende die Erlösobergrenze auf null setzt.", korrekt: false, erklaerung: "Die ARegV-Regulierung läuft betreiberunabhängig weiter — sie wird durch das Konzessionsende nicht ausgesetzt." },
        { text: "Weil Netze am Konzessionsende technisch erneuert werden müssen und dabei stillstehen.", korrekt: false, erklaerung: "Das Netz läuft im Betreiberübergang normal weiter — der Angriffspunkt ist rechtlich-wirtschaftlich (Vergabe), nicht technisch." }
      ]
    }
  },
  "Q-BETREIB-T1": {
    id: "Q-BETREIB-T1", unitId: "U3-BETREIB", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VNB-BETREIB-01", "L3-VERTRIEB-STADTWERK-01"],
    data: {
      frage: "Der kommunale Netz-Eigenbetrieb und das Stadtwerke-Mehrsparten-Modell (Modul 4) teilen einen strukturellen Vorteil. Welchen?",
      optionen: [
        { text: "Den Querverbund: Das regulierte Netz liefert stabile Erträge, die im kommunalen Konzern mit anderen Sparten (Wärme, ÖPNV) verrechnet und für die lokale Energiewende eingesetzt werden können.", korrekt: true, erklaerung: "Beide Male ist die stabile, regulierte Netzbasis der Anker, der defizitärere Sparten und langfristige Investitionen trägt — Modul 3 und Modul 4 beschreiben zwei Seiten desselben Stadtwerke-Konstrukts." },
        { text: "Beide sind vom Wettbewerb durch Neolieferanten vollständig geschützt.", korrekt: false, erklaerung: "Das Vertriebsgeschäft der Stadtwerke ist sehr wohl angreifbar (Rosinenpicken) — nur das Netz ist Monopol. Der gemeinsame Vorteil ist der Querverbund, nicht Wettbewerbsfreiheit." },
        { text: "Beide dürfen ihre Preise frei kalkulieren.", korrekt: false, erklaerung: "Das Netz ist streng reguliert (ARegV) — gerade nicht frei kalkulierbar. Der Vorteil liegt in der Ertragsstabilität, nicht in Preisfreiheit." }
      ]
    }
  },

  // ── U3-GAS ──────────────────────────────────────────────────────
  "Q-GAS-WE1": {
    id: "Q-GAS-WE1", unitId: "U3-GAS", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-GAS-FNB-02"],
    data: {
      frage: "Worin besteht das Henne-Ei-Problem beim H2-Kernnetz?",
      optionen: [
        { text: "Niemand bezieht Wasserstoff, solange keine Leitung da ist — aber niemand baut die Leitung, solange keine zahlenden Kunden da sind.", korrekt: true, erklaerung: "Genau dieses klassische Infrastruktur-Dilemma soll das Amortisationskonto durchbrechen." },
        { text: "Wasserstoff kann technisch nicht durch bestehende Gasleitungen transportiert werden.", korrekt: false, erklaerung: "Rund 60% des Kernnetzes sind umgewidmete Gasleitungen — technisch geht es, das Problem ist die Marktanlaufphase." },
        { text: "Es gibt zu wenige FNB, die eine H2-Leitung bauen könnten.", korrekt: false, erklaerung: "Die etablierten Gas-FNB (OGE, Gascade …) stehen bereit — das Hindernis ist das Investitionsrisiko der Anlaufphase, nicht ein Mangel an Betreibern." }
      ]
    }
  },
  "Q-GAS-WE2": {
    id: "Q-GAS-WE2", unitId: "U3-GAS", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-GAS-FNB-02"],
    data: {
      frage: "Wer trägt beim Amortisationskonto das Hauptrisiko der Anlaufphase — und warum ist das clever?",
      optionen: [
        { text: "Der Staat trägt die frühe Kostenlücke vorübergehend; steigt die Auslastung, zahlt der FNB die Vorfinanzierung über höhere H2-Netzentgelte zurück — das senkt das FNB-Investitionsrisiko und beschleunigt den Netzbau.", korrekt: true, erklaerung: "Das Modell verlagert das Henne-Ei-Risiko auf den Staat, der es am besten tragen kann, ohne den FNB von der Rückzahlung zu entbinden." },
        { text: "Die ersten H2-Kunden zahlen einen Strafaufschlag, der die gesamte Leitung sofort finanziert.", korrekt: false, erklaerung: "Das Gegenteil ist der Zweck: Die Anfangskunden zahlen zunächst niedrige Entgelte — genau deshalb springt der Staat als Zwischenfinanzierer ein." },
        { text: "Der FNB verzichtet dauerhaft auf jede Rendite aus dem H2-Netz.", korrekt: false, erklaerung: "Der FNB erhält weiterhin einen regulierten Return — das Konto überbrückt nur die ertragsschwache Anlaufphase, es enteignet den Betreiber nicht." }
      ]
    }
  },
  "Q-GAS-R1": {
    id: "Q-GAS-R1", unitId: "U3-GAS", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-GAS-FNB-01"],
    data: {
      frage: "Was ist die 'Death Spiral' des Erdgasnetzes?",
      optionen: [
        { text: "Sinkende Durchleitungsmengen (durch Elektrifizierung) bei fixen Netzkosten treiben das Entgelt je Kunde nach oben, was weitere Kunden zum Ausstieg motiviert — ein sich selbst verstärkender Sog.", korrekt: true, erklaerung: "Weil das Entgelt = Fixkosten / Menge ist, wirkt jede abwandernde Kilowattstunde verteuernd auf die verbleibenden — der klassische Netz-Teufelskreis." },
        { text: "Ein plötzlicher technischer Totalausfall des gesamten Gasnetzes.", korrekt: false, erklaerung: "Death Spiral ist ein ökonomischer, kein technischer Begriff — es geht um die Entgeltdynamik, nicht um einen Blackout." },
        { text: "Der Rückgang der Gaspreise unter die Förderkosten.", korrekt: false, erklaerung: "Es geht um Netzentgelte (Durchleitung), nicht um den Gas-Rohstoffpreis." }
      ]
    }
  },
  "Q-GAS-R2": {
    id: "Q-GAS-R2", unitId: "U3-GAS", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-GAS-FNB-02"],
    data: {
      text: "Das H2-Kernnetz umfasst rund {{a}} km, davon etwa {{b}} umgewidmete Erdgasleitungen (Repurposing). Die Vorfinanzierung sichert ein {{c}}, das der Staat in der Anlaufphase stützt.",
      luecken: {
        a: { loesungen: ["9.040", "9040"], erklaerung: "Rund 9.040 km wurden von der BNetzA im Oktober 2024 genehmigt." },
        b: { loesungen: ["60%"], erklaerung: "~60% Repurposing bestehender Leitungen — Betreiber mit geeignetem Rohrnetz haben einen Vorteil." },
        c: { loesungen: ["Amortisationskonto", "Amortisationskontomodell"], erklaerung: "Das Amortisationskonto überbrückt die ertragsschwache Anlaufphase." }
      },
      distraktoren: ["50.000", "20%"]
    }
  },
  "Q-GAS-R3": {
    id: "Q-GAS-R3", unitId: "U3-GAS", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-GAS-FNB-02"],
    data: {
      frage: "Wodurch könnte das H2-Kernnetz-Modell trotz staatlicher Absicherung angreifbar werden?",
      optionen: [
        { text: "Durch alternative Logistiken (Ammoniak-/LOHC-Importe über Häfen, On-site-Elektrolyse), die Ankerkunden abfangen, bevor das Netz sie erreicht — und durch einen H2-Hochlauf, der hinter dem Amortisationspfad zurückbleibt.", korrekt: true, erklaerung: "Bleibt die Nachfrage aus, wird die Refinanzierung politisch angreifbar — das Modell hängt am Vertrauen, dass künftige Nutzer die heutigen Vorleistungen tragen." },
        { text: "Durch neue private H2-Fernleitungsnetze, die in direkte Preiskonkurrenz treten.", korrekt: false, erklaerung: "Das Kernnetz ist als nationales Monopol konzipiert — paralleler Netzbau ist unwahrscheinlich; die Konkurrenz kommt von anderen Transportformen, nicht von Konkurrenznetzen." },
        { text: "Durch die BNetzA, die dem Kernnetz die Regulierung entzieht.", korrekt: false, erklaerung: "Die Regulierung ist die Grundlage des Modells — das Risiko liegt in der Marktnachfrage, nicht in einem Regulierungsentzug." }
      ]
    }
  },
  "Q-GAS-R4": {
    id: "Q-GAS-R4", unitId: "U3-GAS", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-GAS-FNB-02"],
    data: {
      steckbriefId: "L3-GAS-FNB-02",
      erklaerungenProDimension: {
        regulierung: "Reguliertes Infrastrukturmonopol mit staatlicher Absicherung — höchste Stufe.",
        skalierbarkeit: "An physische Pipelines gebunden, aber mit Repurposing-Hebel — niedrig-mittel.",
        marktrisiko: "Abhängig vom H2-Hochlauf; das Amortisationskonto dämpft, eliminiert das Nachfragerisiko aber nicht — mittel.",
        digitalisierung: "Verdichtersteuerung und Kapazitätsvermarktung digital, Kern bleibt physisch — mittel.",
        wettbewerb: "Nationales Monopol beim Netz, Konkurrenz nur durch alternative Logistik — niedrig.",
        nachhaltigkeit: "Rückgrat der Wasserstoffwirtschaft für Stahl/Chemie — höchste Stufe."
      }
    }
  },
  "Q-GAS-T1": {
    id: "Q-GAS-T1", unitId: "U3-GAS", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-GAS-FNB-02", "L3-ERZ-EE-03"],
    data: {
      frage: "Das H2-Kernnetz und die Offshore-Windprojekte (Modul 2) lösen dasselbe Grundproblem auf ähnliche Weise. Welches?",
      optionen: [
        { text: "Beide sind extrem kapitalintensiv und werden erst durch eine staatlich/regulatorisch abgesicherte, langfristige Erlösgarantie finanzierbar (Amortisationskonto bzw. 20-Jahres-Ausschreibungspreis).", korrekt: true, erklaerung: "Milliardeninfrastruktur mit langem Vorlauf braucht ein Instrument, das das offene Marktrisiko in einen bankfähigen Cashflow verwandelt — das eint H2-Netz und Offshore-Wind." },
        { text: "Beide finanzieren sich vollständig über kurzfristige Spotmarkterlöse.", korrekt: false, erklaerung: "Das Gegenteil — gerade weil Spoterlöse zu unsicher wären, brauchen beide langfristige Absicherungsinstrumente." },
        { text: "Beide sind reine Merchant-Geschäfte ohne staatliche Beteiligung.", korrekt: false, erklaerung: "Beide sind das Gegenteil von Merchant — reguliert bzw. staatlich abgesichert, um die Kapitalintensität überhaupt finanzierbar zu machen." }
      ]
    }
  }

});

// ════════════════════════════════════════════════════════════════════
// MODUL 5 — FLEXIBILITÄT IST DAS NEUE ÖL
// ════════════════════════════════════════════════════════════════════
Object.assign(LERN_QUIZ_ITEMS, {

  // ── U5-VPP ──────────────────────────────────────────────────────
  "Q-VPP-WE1": {
    id: "Q-VPP-WE1", unitId: "U5-VPP", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-AGG-VPP-01"],
    data: {
      frage: "Warum sinkt der Prognosefehler im großen Portfolio so stark?",
      optionen: [
        { text: "Diversifikation: Abweichungen einzelner Anlagen gleichen sich statistisch aus (eine Wolke über Bayern, Wind an der Küste) — im Mittel bleibt viel weniger Fehler übrig.", korrekt: true, erklaerung: "Genau dieser Ausgleichseffekt ist das verkaufte Produkt: 15–25% Einzelfehler werden zu 2–3% Portfoliofehler." },
        { text: "Weil das VPP für jede Anlage eine eigene, exakte Wettervorhersage kauft.", korrekt: false, erklaerung: "Bessere Wettermodelle helfen, aber der Haupteffekt ist statistischer Ausgleich über viele Anlagen — nicht perfekte Einzelprognose." },
        { text: "Weil große Portfolien von der BNetzA einen reduzierten Prognosefehler zugestanden bekommen.", korrekt: false, erklaerung: "Prognosefehler wird gemessen, nicht zugestanden — der Effekt ist real-statistisch, nicht regulatorisch." }
      ]
    }
  },
  "Q-VPP-WE2": {
    id: "Q-VPP-WE2", unitId: "U5-VPP", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-AGG-VPP-01"],
    data: {
      szenario: "Ein VPP erzielt bei 10 GW Portfolio einen Vermarktungs-Mehrerlös von 2 €/MWh über durchschnittlich 2.000 Volllaststunden. Wie groß ist der jährliche Outperformance-Pool (in Mio. €)?",
      eingabefelder: [{ key: "pool", label: "Outperformance-Pool", einheit: "Mio. €" }],
      loesung: { pool: { wert: 40, toleranz: 4 } },
      rechenweg: ["Energiemenge = 10 GW × 2.000 h = 20.000 GWh = 20 Mio. MWh.", "Pool = 20 Mio. MWh × 2 €/MWh = 40 Mio. €.", "Davon behält das VPP 20–40% als Outperformance-Share, der Rest geht an die Anlagenbetreiber — zusätzlich zur festen Managementfee."]
    }
  },
  "Q-VPP-R1": {
    id: "Q-VPP-R1", unitId: "U5-VPP", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-AGG-VPP-01"],
    data: {
      frage: "Woraus setzt sich der Erlös eines EE-Direktvermarktungs-VPP zusammen?",
      optionen: [
        { text: "Managementfee (0,15–0,45 ct/kWh) plus Outperformance-Share (20–40% des Mehrerlöses über den Referenzmarktwert).", korrekt: true, erklaerung: "Feste Fee plus erfolgsabhängiger Anteil — das VPP verdient an der besseren Vermarktung, nicht am Strom selbst." },
        { text: "Eine kWh-Marge auf den weiterverkauften Windstrom, wie bei einem Vollversorger.", korrekt: false, erklaerung: "Das VPP verkauft für die Anlagenbetreiber an die Börse, es kauft und verkauft nicht auf eigene Rechnung mit Marge — es ist ein Dienstleister." },
        { text: "Die staatliche EEG-Marktprämie, die es als Vermarkter einbehält.", korrekt: false, erklaerung: "Die Marktprämie fließt an den Anlagenbetreiber — das VPP verdient an Fee und Outperformance, nicht an der Prämie." }
      ]
    }
  },
  "Q-VPP-R2": {
    id: "Q-VPP-R2", unitId: "U5-VPP", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-AGG-VPP-01"],
    data: {
      text: "Next Kraftwerke gehört seit 2021 zu {{a}} und vermarktet über {{b}} GW. Für jede Anlage entscheidet das System stündlich zwischen {{c}}- und Intraday-Vermarktung.",
      luecken: {
        a: { loesungen: ["Shell"], erklaerung: "Shell übernahm Next Kraftwerke 2021 — was Interessenkonflikte bei konzernfremden Anlagen schafft." },
        b: { loesungen: ["14"], erklaerung: ">14 GW in 17 Ländern — europäischer Marktführer." },
        c: { loesungen: ["Day-Ahead", "Day Ahead"], erklaerung: "Day-Ahead (Preise einen Tag vorher fix) vs. Intraday (bis kurz vor Lieferung handelbar)." }
      },
      distraktoren: ["RWE", "50"]
    }
  },
  "Q-VPP-R3": {
    id: "Q-VPP-R3", unitId: "U5-VPP", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-AGG-VPP-01"],
    data: {
      frage: "Warum schmilzt das Outperformance-Potenzial der VPP langfristig — und wer verursacht das?",
      optionen: [
        { text: "Die ÜNB verbessern laufend die Referenzmarktwerte; je genauer der RMW den echten Wert trifft, desto weniger Vorsprung bleibt für die Outperformance.", korrekt: true, erklaerung: "Der Regulierer reguliert die Marge schrittweise weg — ein struktureller Gegenwind für alle Direktvermarkter." },
        { text: "Die Anlagenbetreiber kündigen massenhaft ihre Verträge wegen zu hoher Fees.", korrekt: false, erklaerung: "Die Wechselhürde nach SCADA-Integration ist hoch; das Problem ist nicht Abwanderung, sondern die sinkende RMW-Lücke." },
        { text: "Die Börse schließt den Intraday-Markt für Direktvermarkter.", korrekt: false, erklaerung: "Der Intraday-Markt bleibt offen — der Vorsprung schrumpft durch bessere Referenzwerte, nicht durch Marktzugangsverlust." }
      ]
    }
  },
  "Q-VPP-R4": {
    id: "Q-VPP-R4", unitId: "U5-VPP", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-AGG-VPP-01"],
    data: {
      steckbriefId: "L3-AGG-VPP-01",
      erklaerungenProDimension: {
        regulierung: "Kein Regulierungsschutz, aber regulierungsnah (EEG-Direktvermarktung) — niedrig.",
        skalierbarkeit: "Reine Software-Plattform, jede weitere Anlage nahezu grenzkostenfrei — höchste Stufe.",
        marktrisiko: "Fee-basiert plus Outperformance, das Kernrisiko trägt der Anlagenbetreiber — niedrig-mittel.",
        digitalisierung: "ML-Wettermodelle, SCADA, Echtzeit-Optimierung sind der Kern — höchste Stufe.",
        wettbewerb: "Oligopol mit Next Kraftwerke/RWE, aber wachsend umkämpft — mittel.",
        nachhaltigkeit: "Ermöglicht wirtschaftliche EE-Vermarktung — hoher Enabler-Beitrag."
      }
    }
  },
  "Q-VPP-T1": {
    id: "Q-VPP-T1", unitId: "U5-VPP", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-AGG-VPP-01", "L3-ERZ-EE-01"],
    data: {
      frage: "Das VPP-Geschäft und die EEG-Marktprämie (Modul 2) beschreiben dieselbe Wertschöpfung aus zwei Blickwinkeln. Wie hängen sie zusammen?",
      optionen: [
        { text: "Das VPP IST der Direktvermarkter aus der EEG-Einheit — es bündelt die Anlagen und erwirtschaftet die Outperformance gegenüber dem Referenzmarktwert, die dort beschrieben wurde.", korrekt: true, erklaerung: "Modul 2 sah es aus Sicht des Anlagenbetreibers (Marktprämie + Vermarkter), Modul 5 aus Sicht des Vermarkters (Portfolio + Outperformance) — dieselbe Mechanik." },
        { text: "Das VPP ersetzt die Marktprämie durch ein eigenes Fördersystem.", korrekt: false, erklaerung: "Das VPP fördert nichts — es vermarktet nur; die Marktprämie kommt weiterhin vom Staat an den Anlagenbetreiber." },
        { text: "Beide sind völlig unabhängig; VPP handeln nur mit Speichern, nicht mit EE-Anlagen.", korrekt: false, erklaerung: "Das EE-Direktvermarktungs-VPP handelt gerade mit Wind-/Solar-/Biogasanlagen — es ist direkt mit der Marktprämie verbunden." }
      ]
    }
  },

  // ── U5-DEMAND ───────────────────────────────────────────────────
  "Q-DEMAND-WE1": {
    id: "Q-DEMAND-WE1", unitId: "U5-DEMAND", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-AGG-VPP-02"],
    data: {
      frage: "Was genau verkauft die Aluminiumschmelze am Regelenergiemarkt?",
      optionen: [
        { text: "Die Fähigkeit, ihre Last kurzfristig und zuverlässig zu senken — eine Flexibilität, die im Produktionsprozess ohnehin steckt.", korrekt: true, erklaerung: "Demand Response monetarisiert vorhandene Flexibilität; investiert werden muss nur in Steuerung, nicht in Anlagen." },
        { text: "Überschüssigen selbst erzeugten Strom aus einem eigenen Kraftwerk.", korrekt: false, erklaerung: "Die Schmelze erzeugt keinen Strom — sie verkauft ihre Fähigkeit, Verbrauch zu drosseln, nicht Erzeugung." },
        { text: "Ihre gesamte Jahresstrommenge im Voraus zu einem Festpreis.", korrekt: false, erklaerung: "Das wäre ein PPA — Demand Response verkauft kurzfristige Laständerung, kein Energievolumen." }
      ]
    }
  },
  "Q-DEMAND-WE2": {
    id: "Q-DEMAND-WE2", unitId: "U5-DEMAND", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-AGG-VPP-02"],
    data: {
      frage: "Warum ist das Aggregator-Modell so kapitaleffizient?",
      optionen: [
        { text: "Der Aggregator investiert nur in Steuerungssoftware und SCADA-Anbindung — die eigentliche Flex-Kapazität (die Industrielast) gehört dem Kunden; Skalierung über mehr Kunden ist margenkonstant.", korrekt: true, erklaerung: "Asset-leicht: Der Aggregator monetarisiert fremde Flexibilität gegen Revenue-Share, ohne eigenes Anlagen-Capex." },
        { text: "Weil der Aggregator die Industrieanlagen kauft und selbst betreibt.", korrekt: false, erklaerung: "Genau das nicht — der Aggregator besitzt keine Anlagen, das ist der Kern des asset-leichten Modells." },
        { text: "Weil der ÜNB dem Aggregator die SCADA-Infrastruktur kostenlos stellt.", korrekt: false, erklaerung: "Die Anbindung zahlt der Aggregator selbst — sie ist aber im Verhältnis zu einem Kraftwerksbau minimal." }
      ]
    }
  },
  "Q-DEMAND-R1": {
    id: "Q-DEMAND-R1", unitId: "U5-DEMAND", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-AGG-VPP-02"],
    data: {
      frage: "Was erlaubt es einem unabhängigen Aggregator, Regelenergie zu verkaufen, ohne Energielieferant zu sein?",
      optionen: [
        { text: "Die Rolle des unabhängigen Aggregators (SOGL Art. 182 / EU Clean Energy Package) trennt Flexibilitätsvermarktung von der Stromlieferung.", korrekt: true, erklaerung: "Erst diese regulatorische Entkopplung macht das reine Aggregator-Geschäft ohne eigene Bilanzkreis-/Lieferantenrolle möglich." },
        { text: "Er muss dafür eine Banklizenz erwerben.", korrekt: false, erklaerung: "Eine Banklizenz ist irrelevant — es geht um die energierechtliche Aggregator-Rolle, nicht um Finanzaufsicht." },
        { text: "Er kauft die Regelenergie beim ÜNB und verkauft sie mit Aufschlag weiter.", korrekt: false, erklaerung: "Umgekehrt — der Aggregator bietet dem ÜNB Regelleistung an; er kauft sie nicht ein." }
      ]
    }
  },
  "Q-DEMAND-R2": {
    id: "Q-DEMAND-R2", unitId: "U5-DEMAND", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-AGG-VPP-02"],
    data: {
      text: "Typische Demand-Response-Lasten sind Elektrolyseure, Aluminiumschmelzen, Kühlhäuser und {{a}}. Der Aggregator behält einen {{b}} (20–40%), der Rest geht an den Kunden. Voraussetzung ist eine Zuverlässigkeit über {{c}} der Präqualifikationsstunden.",
      luecken: {
        a: { loesungen: ["Rechenzentren", "Rechenzentrum"], erklaerung: "Rechenzentren sind wegen ihrer steuerbaren Kühl- und USV-Lasten attraktive Flex-Quellen." },
        b: { loesungen: ["Revenue-Share", "Revenue Share"], erklaerung: "Der Revenue-Share ist die Vergütung des Aggregators ohne eigenes Asset." },
        c: { loesungen: ["99%"], erklaerung: "Reliability >99% ist die Vertrauensschwelle — ein Fehlabruf gefährdet die Kundenbeziehung." }
      },
      distraktoren: ["Privathaushalte", "50%"]
    }
  },
  "Q-DEMAND-R3": {
    id: "Q-DEMAND-R3", unitId: "U5-DEMAND", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-AGG-VPP-02"],
    data: {
      frage: "Wodurch ist der Demand-Response-Aggregator angreifbar?",
      optionen: [
        { text: "Sobald der Industriekunde selbst marktfähig wird (eigener Flex-Desk) oder sein Lieferant/Contractor die Vermarktung mitbündelt, wird der Aggregator überflüssig; VPP-Software drückt zusätzlich die Vermittlungsmarge.", korrekt: true, erklaerung: "Verteidigungsfähig ist die Präqualifikations- und Prozesskompetenz, nicht der bloße Marktzugang." },
        { text: "Durch ein Verbot unabhängiger Aggregatoren in der gesamten EU.", korrekt: false, erklaerung: "Das Gegenteil — das EU Clean Energy Package stärkt die Aggregator-Rolle; Deutschland ist nur vergleichsweise restriktiv." },
        { text: "Weil Industriekunden ihre Flexibilität technisch nicht bereitstellen können.", korrekt: false, erklaerung: "Sie können es (die Flex existiert), das ist ja die Geschäftsgrundlage — die Angreifbarkeit kommt vom möglichen Insourcing." }
      ]
    }
  },
  "Q-DEMAND-R4": {
    id: "Q-DEMAND-R4", unitId: "U5-DEMAND", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-AGG-VPP-02", "L3-AGG-VPP-01"],
    data: { steckbriefId: "L3-AGG-VPP-02", distraktorSteckbriefId: "L3-AGG-VPP-01" }
  },
  "Q-DEMAND-T1": {
    id: "Q-DEMAND-T1", unitId: "U5-DEMAND", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-AGG-VPP-02", "L3-ERZ-KONV-02"],
    data: {
      frage: "Demand Response und thermische Regelenergie (Modul 2) konkurrieren im selben Markt. Wo hat die Industrielast einen strukturellen Vorteil?",
      optionen: [
        { text: "Sie monetarisiert bereits vorhandene Flexibilität ohne eigenes Erzeugungs-Capex — während das Gaskraftwerk Brennstoff verbrennen und CO₂-Zertifikate kaufen muss, um dieselbe Regelleistung zu liefern.", korrekt: true, erklaerung: "Grenzkosten nahe null (nur kurzzeitiger Produktionsverzicht) gegen echte Brennstoff-Grenzkosten — dieselbe Kannibalisierungslogik wie beim Batteriespeicher gegen FCR." },
        { text: "Die Industrielast wird für Regelenergie gesetzlich bevorzugt vor Kraftwerken aktiviert.", korrekt: false, erklaerung: "Es gibt keine gesetzliche Bevorzugung — die Aktivierung folgt dem Merit-Order-Prinzip der Regelenergie, nicht einer Rangfolge nach Anbietertyp." },
        { text: "Industrielasten müssen keine Präqualifikation durchlaufen.", korrekt: false, erklaerung: "Doch — die aFRR-Präqualifikation ist gerade eine der Hürden; der Vorteil liegt in den niedrigen Grenzkosten, nicht in Regelbefreiung." }
      ]
    }
  },

  // ── U5-ROUTE ────────────────────────────────────────────────────
  "Q-ROUTE-WE1": {
    id: "Q-ROUTE-WE1", unitId: "U5-ROUTE", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-AGG-VPP-03"],
    data: {
      frage: "Warum baut Kyon Energy Speicher, überlässt aber das Handeln Entrix und Enspired?",
      optionen: [
        { text: "Kyons Kompetenz ist Projektentwicklung und Bau; die margenentscheidende Multimarkt-Optimierung ist ein eigenes Spezialgeschäft, das man besser einkauft als selbst aufbaut.", korrekt: true, erklaerung: "Arbeitsteilung: Asset-Bauer und asset-leichter Optimierer — jeder macht, was er am besten kann, oft mit mehreren Optimierern parallel." },
        { text: "Kyon darf als Projektentwickler gesetzlich nicht selbst an der Börse handeln.", korrekt: false, erklaerung: "Ein solches Verbot gibt es nicht — es ist eine strategische Arbeitsteilung, keine rechtliche Vorgabe." },
        { text: "Entrix und Enspired stellen die Batterien kostenlos zur Verfügung.", korrekt: false, erklaerung: "Nein — Kyon baut und besitzt die Speicher; die Optimierer liefern nur die Vermarktung." }
      ]
    }
  },
  "Q-ROUTE-WE2": {
    id: "Q-ROUTE-WE2", unitId: "U5-ROUTE", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-AGG-VPP-03"],
    data: {
      frage: "Was ist der Kern des Tolling/Floor-Modells von terralayr?",
      optionen: [
        { text: "Der Eigentümer bekommt einen garantierten Festpreis/Mindesterlös, terralayr behält den Mehrerlös und trägt dafür das Marktrisiko — das macht das Speicherprojekt bankfähig.", korrekt: true, erklaerung: "Die Risikoübernahme wandert zu dem, der sie am besten bepreisen kann; im Gegenzug wird das Projekt finanzierbar." },
        { text: "terralayr mietet die Batterie und zahlt eine umsatzabhängige Miete ohne jede Garantie.", korrekt: false, erklaerung: "Das Gegenteil des Tolling-Gedankens — der Witz ist gerade die GARANTIE für den Eigentümer, nicht eine variable Miete." },
        { text: "Der Eigentümer trägt weiterhin das volle Marktrisiko, terralayr nur die Software.", korrekt: false, erklaerung: "Beim reinen Fee-Modell ja — aber Tolling/Floor verlagert das Marktrisiko explizit zum Optimierer, das ist der Unterschied." }
      ]
    }
  },
  "Q-ROUTE-R1": {
    id: "Q-ROUTE-R1", unitId: "U5-ROUTE", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-AGG-VPP-03"],
    data: {
      frage: "Warum macht ein garantierter Floor ein Speicherprojekt 'bankfähig'?",
      optionen: [
        { text: "Fremdkapitalgeber verlangen planbare Mindest-Cashflows; ein garantierter Erlös verwandelt unsicheres Merchant-Risiko in eine finanzierbare Größe.", korrekt: true, erklaerung: "Dieselbe Logik wie bei PPAs und Offshore-Ausschreibungen: Absicherung schafft Bankfähigkeit." },
        { text: "Weil die Bank dann Miteigentümerin der Batterie wird.", korrekt: false, erklaerung: "Die Bank finanziert gegen Cashflow, nicht gegen Miteigentum — der Floor sichert den Cashflow, mehr braucht es nicht." },
        { text: "Weil ein Floor die Batterie vor technischem Ausfall schützt.", korrekt: false, erklaerung: "Ein Floor ist ein Erlös-, kein Technikversprechen — er sichert Einnahmen, nicht die Hardware." }
      ]
    }
  },
  "Q-ROUTE-R2": {
    id: "Q-ROUTE-R2", unitId: "U5-ROUTE", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-AGG-VPP-03"],
    data: {
      text: "Asset-leichte Optimierer vermarkten fremde Speicher über {{a}}, Intraday, FCR und aFRR. Beim {{b}}-Modell garantieren sie dem Eigentümer einen Festpreis und tragen das {{c}} selbst.",
      luecken: {
        a: { loesungen: ["Day-Ahead", "Day Ahead"], erklaerung: "Day-Ahead ist einer der vier gestackten Märkte." },
        b: { loesungen: ["Tolling"], erklaerung: "Tolling (oder Floor): Festpreis für Kapazität, Risiko beim Optimierer." },
        c: { loesungen: ["Marktrisiko", "Risiko"], erklaerung: "Das Merchant-Risiko wandert vom Bauherrn zum Optimierer." }
      },
      distraktoren: ["Terminmarkt", "Ausfallrisiko"]
    }
  },
  "Q-ROUTE-R3": {
    id: "Q-ROUTE-R3", unitId: "U5-ROUTE", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-AGG-VPP-03"],
    data: {
      frage: "Warum ist die Erlösbasis der Speicher-Optimierer strukturell bedroht?",
      optionen: [
        { text: "Jeder BESS-Zubau glättet die Spreads, aus denen die Outperformance stammt — der Markt kannibalisiert die eigene Erlösquelle; die Spreads von 2023/24 sind kein verlässlicher Business Case für 2030.", korrekt: true, erklaerung: "Dieselbe Selbstkannibalisierung wie beim BESS selbst (Modul 2) — mehr Speicher, flachere Spreads." },
        { text: "Die BNetzA plant, Speicher-Optimierung zu verbieten.", korrekt: false, erklaerung: "Kein Verbot in Sicht — die Bedrohung ist ökonomisch (Spread-Kompression), nicht regulatorisch." },
        { text: "Optimierer dürfen künftig nur noch einen einzigen Markt bedienen.", korrekt: false, erklaerung: "Multi-Market-Stacking bleibt erlaubt und ist gerade ihre Stärke — das Problem ist der schrumpfende Spread, nicht eine Marktbeschränkung." }
      ]
    }
  },
  "Q-ROUTE-R4": {
    id: "Q-ROUTE-R4", unitId: "U5-ROUTE", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-AGG-VPP-03"],
    data: {
      steckbriefId: "L3-AGG-VPP-03",
      erklaerungenProDimension: {
        regulierung: "Reines Marktgeschäft ohne Erlösgarantie — niedrigste Stufe.",
        skalierbarkeit: "Mehr MW unter Management auf gleicher Plattform, nahezu grenzkostenfrei — höchste Stufe.",
        marktrisiko: "Bei Tolling/Floor übernimmt der Optimierer das volle Marktrisiko — hoch.",
        digitalisierung: "KI-Multimarkt-Optimierung ist das gesamte Geschäftsmodell — höchste Stufe.",
        wettbewerb: "Viele Optimierer, laufendes Performance-Benchmarking, Konsolidierung im Gang — hoch.",
        nachhaltigkeit: "Macht Speicher wirtschaftlich und damit hohe EE-Anteile möglich — hoher Enabler-Beitrag."
      }
    }
  },
  "Q-ROUTE-T1": {
    id: "Q-ROUTE-T1", unitId: "U5-ROUTE", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-AGG-VPP-03", "L3-ERZ-EE-02"],
    data: {
      frage: "Das Tolling/Floor-Modell und der Financial PPA (Modul 2) lösen dasselbe Grundproblem. Welches?",
      optionen: [
        { text: "Beide verwandeln unsichere Markterlöse in einen gesicherten, planbaren Cashflow und machen so ein kapitalintensives Projekt (Speicher bzw. Windpark) bankfähig — die Absicherung ist das eigentliche Produkt.", korrekt: true, erklaerung: "Ob Strike Price beim PPA oder Floor beim Tolling: Beide sind Preissicherungsinstrumente, die Fremdkapital erst ermöglichen." },
        { text: "Beide eliminieren jegliches Risiko vollständig aus dem Energiesystem.", korrekt: false, erklaerung: "Das Risiko verschwindet nicht — es wandert nur zu dem Akteur, der es am besten tragen kann (PPA-Gegenpartei bzw. Optimierer)." },
        { text: "Beide sind reine Spotmarktgeschäfte ohne langfristige Bindung.", korrekt: false, erklaerung: "Das Gegenteil — beide sind gerade langfristige Absicherungen gegen den Spotmarkt." }
      ]
    }
  },

  // ── U5-V2G ──────────────────────────────────────────────────────
  "Q-V2G-WE1": {
    id: "Q-V2G-WE1", unitId: "U5-V2G", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-EMOB-V2G-01"],
    data: {
      frage: "Warum merkt der ID.-Fahrer im Alltag nichts von der V2G-Nutzung?",
      optionen: [
        { text: "Die App speist nur zurück, wenn genug Ladung übrig ist, und lädt das Auto vor der geplanten Abfahrt wieder voll — der Fahrer sieht nur die Gutschrift.", korrekt: true, erklaerung: "Intelligente Steuerung mit Abfahrtszeit-Vorgabe macht V2G für den Nutzer transparent — das ist Voraussetzung für Akzeptanz." },
        { text: "Weil V2G nur bei abgeschaltetem Fahrzeug funktioniert.", korrekt: false, erklaerung: "V2G funktioniert gerade im geparkten, angesteckten Zustand — der Punkt ist die Rückladung vor Fahrtbeginn, nicht ein Abschaltzwang." },
        { text: "Weil die zurückgespeiste Menge zu klein ist, um messbar zu sein.", korrekt: false, erklaerung: "Die Mengen sind durchaus relevant (bis zu mehrere kWh) — der Fahrer merkt nichts, weil rechtzeitig nachgeladen wird, nicht weil es zu wenig wäre." }
      ]
    }
  },
  "Q-V2G-WE2": {
    id: "Q-V2G-WE2", unitId: "U5-V2G", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-EMOB-V2G-01"],
    data: {
      szenario: "Zukunftsszenario: 10 Mio. E-Autos stellen im Schnitt je 30 kWh für V2G bereit. Wie groß ist das Gesamt-Flexibilitätspotenzial (in GWh)?",
      eingabefelder: [{ key: "potenzial", label: "V2G-Potenzial", einheit: "GWh" }],
      loesung: { potenzial: { wert: 300, toleranz: 20 } },
      rechenweg: ["Potenzial = 10.000.000 Fahrzeuge × 30 kWh = 300.000.000 kWh = 300 GWh.", "Das ist rund das Sechsfache aller deutschen Großbatteriespeicher (2024) — deshalb gilt V2G als potenziell größte Flexibilitätsquelle der 2030er.", "Der Haken: Es setzt bidirektionale Ladepunkte (AFIR ab 2027) und OEM-Kooperation voraus."]
    }
  },
  "Q-V2G-R1": {
    id: "Q-V2G-R1", unitId: "U5-V2G", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-EMOB-V2G-01"],
    data: {
      frage: "Was schreibt die AFIR ab 2027 vor — und was nicht?",
      optionen: [
        { text: "Neue Ladepunkte müssen bidirektionale Kommunikation unterstützen (technische Voraussetzung für V2G) — eine Nutzungspflicht für V2G ist es aber nicht.", korrekt: true, erklaerung: "AFIR schafft nur die technische Basis; ob der Halter V2G tatsächlich nutzt, bleibt freiwillig." },
        { text: "Jeder E-Auto-Halter muss ab 2027 sein Fahrzeug für V2G bereitstellen.", korrekt: false, erklaerung: "Keine Nutzungspflicht — AFIR betrifft die Ladepunkt-Technik, nicht das Verhalten der Halter." },
        { text: "Alle Bestandswallboxen müssen bis 2027 auf bidirektional umgerüstet werden.", korrekt: false, erklaerung: "Die Vorgabe gilt für neue Ladepunkte, nicht rückwirkend für den gesamten Bestand." }
      ]
    }
  },
  "Q-V2G-R2": {
    id: "Q-V2G-R2", unitId: "U5-V2G", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-EMOB-V2G-01"],
    data: {
      text: "Eine EV-Batterie (~60 kWh) ist rund {{a}} so groß wie ein typischer Heimspeicher. Vom Regelenergie-Erlös fließen {{b}} an den Fahrzeughalter. Der kritische Gatekeeper ist der {{c}}, der die Fahrzeug-API kontrolliert.",
      luecken: {
        a: { loesungen: ["fünfmal", "5-mal", "5x", "fünf mal"], erklaerung: "~60 kWh gegen ~10 kWh Heimspeicher — der Größenvorteil ist der Kern des V2G-Versprechens." },
        b: { loesungen: ["50–70%", "50-70%"], erklaerung: "Der Halter bekommt den Großteil, der Aggregator 30–50% für Plattform und Vermarktung." },
        c: { loesungen: ["OEM", "Hersteller"], erklaerung: "Der Fahrzeughersteller (OEM) kontrolliert den API-Zugang — die strukturelle Schwäche des unabhängigen Aggregators." }
      },
      distraktoren: ["gleich groß", "ÜNB"]
    }
  },
  "Q-V2G-R3": {
    id: "Q-V2G-R3", unitId: "U5-V2G", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-EMOB-V2G-01"],
    data: {
      frage: "Welche technische Sorge bremst V2G heute noch?",
      optionen: [
        { text: "Batteriedegradation durch bidirektionales Laden ist noch nicht vollständig gelöst — häufiges Rückspeisen könnte die Lebensdauer der teuren Fahrzeugbatterie beeinträchtigen.", korrekt: true, erklaerung: "Die Sorge um den Akku ist neben dem OEM-Gatekeeping die zweite Bremse; moderne Zellchemie und intelligente Zyklensteuerung mildern sie zunehmend." },
        { text: "Bidirektionales Laden ist physikalisch unmöglich.", korrekt: false, erklaerung: "Es funktioniert technisch bereits (Nissan Leaf, Hyundai, VW ID mit Update) — die Frage ist die Langzeitwirkung auf den Akku, nicht die Machbarkeit." },
        { text: "V2G-Strom darf gesetzlich nicht ins öffentliche Netz eingespeist werden.", korrekt: false, erklaerung: "Einspeisung ist erlaubt und geregelt — das Hemmnis ist technisch/wirtschaftlich (Degradation, OEM-Zugang), nicht ein Einspeiseverbot." }
      ]
    }
  },
  "Q-V2G-R4": {
    id: "Q-V2G-R4", unitId: "U5-V2G", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-EMOB-V2G-01"],
    data: {
      steckbriefId: "L3-EMOB-V2G-01",
      erklaerungenProDimension: {
        regulierung: "Kein Regulierungsschutz, Regulierung hinkt der Technik hinterher — niedrig.",
        skalierbarkeit: "Reine Software-Aggregation über Millionen Fahrzeuge — höchste Stufe.",
        marktrisiko: "Revenue-Share ohne eigenes Asset, Batterie gehört dem Halter — niedrig-mittel.",
        digitalisierung: "Aggregations-Plattform und Fahrzeug-API-Anbindung sind der Kern — höchste Stufe.",
        wettbewerb: "Noch wenige Player und Fahrzeugmodelle, aber OEM-getrieben — niedrig-mittel.",
        nachhaltigkeit: "Potenziell größte Flexibilitätsquelle der Energiewende — höchste Stufe."
      }
    }
  },
  "Q-V2G-T1": {
    id: "Q-V2G-T1", unitId: "U5-V2G", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-EMOB-V2G-01", "L3-ERZ-SPEICHER-02"],
    data: {
      frage: "V2G und der Heimspeicher-VPP (Modul 2) folgen demselben Aggregationsmodell. Was macht V2G potenziell überlegen — und wo ist es zugleich schwächer?",
      optionen: [
        { text: "Überlegen durch die ~5× größere Batteriekapazität je Einheit; schwächer, weil der OEM die Fahrzeug-API kontrolliert, während der Heimspeicher-Hersteller sein eigenes Gerät steuert.", korrekt: true, erklaerung: "Größenvorteil trifft Gatekeeper-Nachteil — dieselbe VPP-Mechanik, aber mit verschobener Machtverteilung an der Schnittstelle." },
        { text: "V2G ist in jeder Hinsicht überlegen, weil E-Autos ohnehin überall stehen.", korrekt: false, erklaerung: "Der OEM-Gatekeeper und die Degradationssorge sind reale Nachteile gegenüber dem stationären, herstellereigenen Heimspeicher." },
        { text: "Beide sind identisch, nur mit anderem Batterietyp.", korrekt: false, erklaerung: "Die Machtverteilung an der Steuerungsschnittstelle unterscheidet sie fundamental — beim Heimspeicher hält der Hersteller die Kontrolle, bei V2G der Auto-OEM." }
      ]
    }
  },

  // ── U5-FLEXKAMPF ────────────────────────────────────────────────
  "Q-FLEXKAMPF-WE1": {
    id: "Q-FLEXKAMPF-WE1", unitId: "U5-FLEXKAMPF", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-ERZ-SPEICHER-02"],
    data: {
      frage: "Wie macht der Hersteller aus einzelnen Heimspeichern ein marktfähiges Regelenergie-Asset?",
      optionen: [
        { text: "Er bündelt die freigehaltenen Reserven (z.B. 20% SOC je Gerät) tausender Haushalte zu einem präqualifizierten Pool — einzeln wäre jede Batterie viel zu klein.", korrekt: true, erklaerung: "Aggregation ist die Existenzberechtigung: 10.000 Heimspeicher ≈ 100 MWh handelbare Flex-Kapazität." },
        { text: "Er speist den Strom aller Speicher gleichzeitig ins Netz und verkauft ihn als Grundlast.", korrekt: false, erklaerung: "Es geht um flexible Reserve (Regelenergie), nicht um Grundlast-Einspeisung — und nur um die freigehaltenen 20%, nicht den ganzen Speicher." },
        { text: "Er verkauft die Batterien nach zwei Jahren an den ÜNB.", korrekt: false, erklaerung: "Die Batterien bleiben beim Kunden — vermarktet wird ihre Flexibilität, nicht die Hardware." }
      ]
    }
  },
  "Q-FLEXKAMPF-WE2": {
    id: "Q-FLEXKAMPF-WE2", unitId: "U5-FLEXKAMPF", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-SPEICHER-02", "L3-VNB-NEU-01"],
    data: {
      frage: "Aggregator (Markt) und VNB (§14a) greifen auf dasselbe Gerät zu. Warum ist das ein echter Konflikt und keine bloße Koordinationsfrage?",
      optionen: [
        { text: "Ihre Ziele können sich direkt widersprechen: Der Aggregator will in einer teuren Börsenstunde einspeisen, genau dann kann aber ein lokaler Netzengpass die netzdienliche Drosselung erfordern — wessen Logik Vorrang hat, ist regulatorisch offen.", korrekt: true, erklaerung: "Marktoptimum und Netzoptimum fallen nicht immer zusammen — die Priorisierung ist die zentrale offene Frage der Flex-Regulierung." },
        { text: "Es ist kein echter Konflikt, weil beide immer dasselbe wollen.", korrekt: false, erklaerung: "Gerade nicht — Börsenpreis-Logik und Netzzustand-Logik können in derselben Stunde gegensätzliche Handlungen verlangen." },
        { text: "Der Konflikt löst sich, weil §14a die Marktsteuerung grundsätzlich verbietet.", korrekt: false, erklaerung: "§14a verbietet die Marktsteuerung nicht — es gibt dem VNB nur ein Eingriffsrecht bei Engpässen; die Koexistenz beider ist ungelöst." }
      ]
    }
  },
  "Q-FLEXKAMPF-R1": {
    id: "Q-FLEXKAMPF-R1", unitId: "U5-FLEXKAMPF", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-ERZ-SPEICHER-02"],
    data: {
      frage: "Warum ist der Heimspeicher-Hersteller (Sonnen, SENEC) durch offene Aggregatoren angreifbar?",
      optionen: [
        { text: "Herstellerübergreifende Aggregatoren und HEMS-Plattformen können Flex herstellerunabhängig bündeln — der Kunde muss dann nicht mehr beim Hardware-Verkäufer ins VPP, das Lock-in bröckelt.", korrekt: true, erklaerung: "Wer die Steuerungsschicht öffnet, entkoppelt Hardware-Verkauf und Flex-Vermarktung — die margenstärkere zweite Ebene wandert weg." },
        { text: "Weil Heimspeicher gesetzlich nicht am VPP teilnehmen dürfen.", korrekt: false, erklaerung: "Sie dürfen — die Angreifbarkeit ist wirtschaftlich (offene Aggregatoren), nicht rechtlich." },
        { text: "Weil offene Aggregatoren die Batterien billiger herstellen.", korrekt: false, erklaerung: "Aggregatoren stellen keine Hardware her — sie greifen die Vermarktungsschicht an, nicht die Fertigung." }
      ]
    }
  },
  "Q-FLEXKAMPF-R2": {
    id: "Q-FLEXKAMPF-R2", unitId: "U5-FLEXKAMPF", format: "lueckentext", bloom: "K2",
    steckbriefIds: ["L3-ERZ-SPEICHER-02", "L3-VNB-NEU-01"],
    data: {
      text: "Um dasselbe Flex-Asset kämpfen mehrere: Der {{a}} steuert nach Börsenpreis, der {{b}} per §14a nach Netzzustand. Entscheidend ist, wer die {{c}} zum Gerät kontrolliert.",
      luecken: {
        a: { loesungen: ["Aggregator"], erklaerung: "Der Aggregator optimiert marktlich (maximaler Erlös)." },
        b: { loesungen: ["VNB", "Verteilnetzbetreiber"], erklaerung: "Der VNB steuert netzdienlich (Engpassvermeidung)." },
        c: { loesungen: ["Kundenschnittstelle", "Schnittstelle"], erklaerung: "Wer die Schnittstelle zum Asset hält, bestimmt die Priorisierung." }
      },
      distraktoren: ["Lieferant", "Batteriezelle"]
    }
  },
  "Q-FLEXKAMPF-R3": {
    id: "Q-FLEXKAMPF-R3", unitId: "U5-FLEXKAMPF", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-SPEICHER-02", "L3-EMOB-V2G-01"],
    data: {
      frage: "Über alle Flex-Modelle (VPP, Demand Response, BESS, V2G, Heimspeicher) hinweg: Was ist der wiederkehrende Schlüsselfaktor für die Marge?",
      optionen: [
        { text: "Die Kontrolle der Steuerungs-/Kundenschnittstelle zum Asset — nicht der Besitz der Hardware. Wer die Schnittstelle hält (App, API, Präqualifikation), verdient; der Rest wird austauschbares Backend.", korrekt: true, erklaerung: "Das ist die Kernlektion von Modul 5: Flexibilität wird durch Software und Schnittstellenkontrolle monetarisiert, nicht durch Asset-Eigentum." },
        { text: "Der physische Besitz möglichst vieler Batterien und Anlagen.", korrekt: false, erklaerung: "Gerade die asset-leichten Modelle (Optimierer, Aggregatoren) zeigen, dass Besitz nicht der Hebel ist — die Schnittstelle ist es." },
        { text: "Die Nähe zum ÜNB-Hauptsitz.", korrekt: false, erklaerung: "Geografische Nähe ist irrelevant — Flex-Märkte sind digital und überregional." }
      ]
    }
  },
  "Q-FLEXKAMPF-R4": {
    id: "Q-FLEXKAMPF-R4", unitId: "U5-FLEXKAMPF", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-ERZ-SPEICHER-02"],
    data: {
      steckbriefId: "L3-ERZ-SPEICHER-02",
      erklaerungenProDimension: {
        regulierung: "Geringer Regulierungsschutz, aber §14a-Kontext — niedrig-mittel.",
        skalierbarkeit: "Jeder verkaufte Speicher wird dauerhafter VPP-Baustein — hoch.",
        marktrisiko: "Hardware-Einmalmarge plus stabiler Flatrate-Erlös dämpfen das Risiko — niedrig-mittel.",
        digitalisierung: "App, VPP-Steuerung und Flatrate-Abrechnung sind digital-nativ — höchste Stufe.",
        wettbewerb: "OEMs, offene Aggregatoren und Neolieferanten greifen von mehreren Seiten an — mittel-hoch.",
        nachhaltigkeit: "Macht Prosumer-Flexibilität und hohe EE-Anteile nutzbar — hoch."
      }
    }
  },
  "Q-FLEXKAMPF-T1": {
    id: "Q-FLEXKAMPF-T1", unitId: "U5-FLEXKAMPF", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-ERZ-SPEICHER-02", "L3-VERTRIEB-NEO-01"],
    data: {
      frage: "Tibber (Modul 4), der Heimspeicher-Hersteller und der V2G-Aggregator ringen letztlich um dieselbe Ressource. Welche?",
      optionen: [
        { text: "Die Kontrolle über die steuerbaren Geräte im Haushalt (Wallbox, Wärmepumpe, Speicher, E-Auto) — wer diese Automatisierungsschnittstelle besitzt, macht die anderen zum austauschbaren Backend.", korrekt: true, erklaerung: "Genau davor warnt schon Tibbers Angreifbarkeit: HEMS-Plattformen und OEM-Apps besetzen dieselbe Schnittstelle. Modul 4 und Modul 5 kämpfen um denselben Kontrollpunkt." },
        { text: "Um den günstigsten Einkauf von Strom an der Börse.", korrekt: false, erklaerung: "Der Börseneinkauf ist für alle gleich — der Kampf geht um die Gerätesteuerung im Haushalt, nicht um den Beschaffungspreis." },
        { text: "Um die meisten physischen Ladesäulen im öffentlichen Raum.", korrekt: false, erklaerung: "Öffentliche Ladesäulen sind ein anderes Geschäft (CPO) — hier geht es um die steuerbaren Assets beim Endkunden zuhause." }
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
