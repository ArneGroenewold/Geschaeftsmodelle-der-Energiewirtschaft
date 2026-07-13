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
