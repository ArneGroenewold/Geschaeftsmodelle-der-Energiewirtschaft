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
        { text: "Weil §41a EnWG jeden Grundversorger gesetzlich verpflichtet, seinen Kunden aktiv Komplettlösungen für Elektromobilität und Wärmepumpen anzubieten.", korrekt: false, erklaerung: "§41a verpflichtet nur zu dynamischen Tarifen, nicht zu Hardware-Angeboten – das Cross-Selling ist eine rein wirtschaftliche Entscheidung." }
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
        { text: "Er darf als per Gesetz bestellter einziger Anbieter in seiner Region exklusiv Strom an alle Haushalte verkaufen und ist dabei vor jedem Wettbewerb geschützt.", korrekt: false, erklaerung: "Der Strommarkt ist liberalisiert – jeder Haushalt kann frei zwischen Anbietern wechseln, der Grundversorger hat kein Exklusivrecht." },
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
        { text: "Ja – beide Begriffe bezeichnen exakt denselben gesetzlich bestellten Lieferanten eines Netzgebiets, nur benannt in unterschiedlichen Gesetzen, sodass Grundversorger und Ersatzversorger immer dasselbe Unternehmen mit denselben Pflichten sind.", korrekt: false, erklaerung: "Nein – nur die Grundversorgung ist ein gesetzlicher Status (§36 EnWG). 'Vollversorgung' ist keine gesetzliche Bestellung, sondern beschreibt lediglich, dass der Lieferant den kompletten Bedarf des Kunden deckt." },
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
        { text: "Die CSRD-Berichtspflicht für unternehmerische Nachhaltigkeitsberichte, die Tibber zu aufwändigen jährlichen ESG-Reportings zwingt.", korrekt: false, erklaerung: "CSRD betrifft Unternehmensberichterstattung zu ESG-Themen, nicht dynamische Stromtarife." }
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
        { text: "Weil §41a die Weitergabe stündlicher Börsenpreise an Haushaltskunden an so strenge Risikoprüfungen und Dokumentationspflichten knüpft, dass diese den gesamten Kostenvorteil von Tibbers schlankem Modell wieder auffressen.", korrekt: false, erklaerung: "Solche Risikoprüfungen sieht §41a nicht vor – die Bedrohung liegt nicht in Auflagen für Tibber, sondern darin, dass alle Wettbewerber dasselbe Produkt anbieten müssen." }
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
        { text: "aWATTar ist als einziger dynamischer Anbieter Eigentümer eines eigenen Ökostrom-Kraftwerks und kann seinen Kunden den Strom deshalb ohne Zwischenhändler liefern.", korrekt: false, erklaerung: "aWATTar betreibt kein eigenes Kraftwerk – das Modell basiert auf reinem Preis-Pass-Through plus API." },
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
        { text: "Beide verlangen als einzige Anbieter am Markt eine feste Mindestvertragslaufzeit von 24 Monaten und binden ihre Kunden damit deutlich länger als jeder klassische Vollversorger.", korrekt: false, erklaerung: "Weder Tibber noch Ostrom verlangen lange Mindestvertragslaufzeiten – beide werben im Gegenteil mit Flexibilität." },
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
        { text: "Octopus kauft mit den erzielten Kosteneinsparungen laufend kleinere Wettbewerber samt deren gesamtem Kundenbestand auf – allein diese Zukäufe erklären die Verdopplung der Kundenzahl.", korrekt: false, erklaerung: "Das deutsche Wachstum war organisch über Preis und Produkt, keine Übernahme-Serie – die Verdopplung binnen zwölf Monaten kam aus Neuakquise." }
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
        { text: "Vollversorger dürfen laut EnWG aus Gründen des Datenschutzes und der Versorgungssicherheit grundsätzlich keine cloudbasierte Abrechnungssoftware einsetzen.", korrekt: false, erklaerung: "Es gibt kein gesetzliches Verbot für Cloud-Software bei Energieversorgern." },
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
        { text: "Nur rund 20.000 Verträge – damit ein reines, wirtschaftlich unbedeutendes Nischenprodukt ganz ohne Massenmarktrelevanz oder Wachstumsperspektive.", korrekt: false, erklaerung: "LichtBlick ist mit ~1,7 Mio. Verträgen tatsächlich einer der größten Lieferanten Deutschlands, kein Nischenanbieter." },
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
        { text: "Beide sind in Wahrheit Tochterunternehmen desselben großen Energiekonzerns und stimmen ihre Ökostrom-Angebote zentral miteinander ab.", korrekt: false, erklaerung: "Octopus und Fünf Grad sind unabhängige, nicht verbundene Unternehmen." }
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
        { text: "Einen staatlichen Verlustausgleich: Der Bund erstattet den kommunalen Stadtwerken sämtliche ÖPNV- und Bäder-Defizite vollständig aus Steuermitteln, sodass der Querverbund gar nicht nötig wäre und die Energiesparte ihre Gewinne behalten dürfte.", korrekt: false, erklaerung: "§4 Abs. 6 KStG ist keine Subvention – es fließt kein Geld vom Staat. Er erlaubt nur, dass Gewinne und Verluste verschiedener Sparten steuerlich saldiert werden." },
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
        { text: "Die Fernwärme-Investitionen des Stadtwerks werden regelmäßig komplett eingestellt, sobald der defizitäre ÖPNV im Querverbund wieder Verluste schreibt.", korrekt: false, erklaerung: "Der Querverbund funktioniert in die andere Richtung: profitable Sparten stützen den defizitären ÖPNV, nicht umgekehrt." }
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
        { text: "Jeder abgewanderte Kunde erhöht automatisch und unmittelbar die Netzentgelte aller verbleibenden Kunden im Gebiet, was diese ebenfalls zum Wechsel treibt und so eine sich selbst verstärkende Abwärtsspirale auslöst.", korrekt: false, erklaerung: "Der Lieferantenwechsel ändert nichts an den Netzentgelten – das Netzgeschäft (reguliert) bleibt vom Vertriebswettbewerb unberührt. Die Gefahr liegt in der Vertriebsmarge." },
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
        { text: "Es gibt keinen Unterschied – beide Formen von Trägheit sind vollkommen identisch, gesetzlich vorgeschrieben und lassen sich von den Anbietern in keiner Weise geschäftlich beeinflussen oder nutzen.", korrekt: false, erklaerung: "Der GVT-Mechanismus ist rechtlich (§36 EnWG), die Stadtwerke-Bindung ist primär kulturell/vertrauensbasiert – das sind unterschiedliche Ursachen." },
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
        { text: "Die Liste ist zwar nach Preis korrekt sortiert, unterschlägt aber grundsätzlich alle Ökostrom-Tarife und solche Anbieter, die keine Provision zahlen, weil die eigenen Vertriebspartner bevorzugt werden.", korrekt: false, erklaerung: "Ökostromanbieter wie Naturstrom sind zwar tatsächlich kaum auf Portalen präsent – aber das ist deren eigene Entscheidung, kein systematisches Unterschlagen durch das Portal. Der Kernpunkt ist die provisionsgetriebene Sortierung." },
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
        { text: "Wechselpilot arbeitet im Hintergrund nur mit einem einzigen, fest verbundenen Lieferanten zusammen und optimiert den Kunden deshalb ausschließlich in dessen Tarife.", korrekt: false, erklaerung: "Wechselpilot vergleicht wie ein Portal über den gesamten Markt, überwacht diesen aber kontinuierlich statt nur punktuell." }
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
        { text: "Check24 und Verivox konkurrieren sich in einem ruinösen Preiskampf gegenseitig die CPA-Provisionsraten immer weiter herunter, bis das Vermittlungsmodell am Ende für beide Portale dauerhaft unprofitabel wird.", korrekt: false, erklaerung: "Plausibel, aber nicht der beschriebene Vektor: Das Duopol ist eher stabil, die CPA-Raten werden von Lieferanten gezahlt und sind kein Preiskampf-Feld zwischen den Portalen selbst." },
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
        { text: "Ein dynamischer Tarif ohne feste Preisgarantie lässt sich in den preisbasierten Vergleichsrechnern der Portale technisch gar nicht sauber abbilden und taucht deshalb in den Rankings grundsätzlich nicht auf.", korrekt: false, erklaerung: "Portale können und wollen zunehmend auch dynamische Tarife vergleichen (§41a schafft dafür sogar neuen Bedarf) – Tibbers Verzicht ist eine strategische Entscheidung, keine technische Notwendigkeit." },
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
        { text: "Neue Atomkraftwerke im benachbarten EU-Ausland, deren billiger Grundlaststrom über die Interkonnektoren nach Deutschland fließt und dort die abendlichen Preisspitzen zuverlässig wegimportiert, bevor Speicher reagieren.", korrekt: false, erklaerung: "Importe dämpfen Spitzen zwar punktuell, aber der im Steckbrief beschriebene strukturelle Angreifer ist der heimische Speicherzubau mit nahezu null Grenzkosten." }
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
        { text: "Die vier ÜNB haben ihren Regelenergiebedarf durch deutlich bessere Wind- und Solarprognosen in den letzten Jahren nahezu halbiert und in ruhigen Zeiten ganz ausgesetzt.", korrekt: false, erklaerung: "Der Bedarf ist relativ stabil – der Preisverfall kam von der Angebotsseite (mehr Anbieter), nicht von der Nachfrageseite." },
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
        { text: "aFRR und mFRR zahlen gesetzlich festgelegte, deutlich höhere Leistungspreise als FCR, weil ihre Aktivierung technisch anspruchsvoller ist und länger vorgehalten werden muss.", korrekt: false, erklaerung: "Es gibt keine gesetzlich festgelegten Preise – alle Produkte werden auktioniert. Der Unterschied liegt in der Wettbewerbsintensität, nicht in einer Preisgarantie." },
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
        { text: "Schwarzstartfähigkeit – nur große Kohle- und Kernkraftwerke können nach einem Blackout ein vollständig kollabiertes Übertragungsnetz eigenständig und ohne Fremdspannung wieder aufbauen.", korrekt: false, erklaerung: "Schwarzstart ist wichtig, aber gerade nicht kohlespezifisch – Wasserkraft, Gasturbinen und zunehmend auch Batterien mit Grid-Forming-Wechselrichtern können das." },
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
        { text: "Sie umgehen die aufwändige Präqualifikationspflicht der ÜNB und können dadurch schneller und mit weniger regulatorischem Aufwand als thermische Kraftwerke in die lukrativen Regelleistungsmärkte eintreten.", korrekt: false, erklaerung: "Auch Batterien müssen vollständig präqualifiziert werden – der Markteintritt ist regelkonform, nur eben technisch überlegen." }
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
        { text: "An der Marktprämie selbst, die der Direktvermarkter als beauftragter Vermarktungsdienstleister direkt vom zuständigen ÜNB ausgezahlt bekommt und anteilig als Provision einbehält.", korrekt: false, erklaerung: "Verbreiteter Irrtum: Die Prämie fließt an den Anlagenbetreiber, nicht an den Vermarkter – der verdient nur an seiner Vermarktungsleistung." },
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
        { text: "Anlagen müssen bei negativen Börsenpreisen zwangsweise abgeregelt werden, erhalten dafür aber weiterhin eine volle Entschädigung vom ÜNB, sodass für den Betreiber praktisch kein Erlösrisiko entsteht.", korrekt: false, erklaerung: "Verwechslung mit Redispatch/Einspeisemanagement: §51 regelt keinen Eingriff, sondern streicht schlicht die Förderung in negativen Stunden – abregeln oder weiterlaufen entscheidet der Betreiber wirtschaftlich selbst." },
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
        { text: "Die Strombörse gewährt großen Direktvermarktern gestaffelte Mengenrabatte auf die Handelsentgelte, sodass mit jeder zusätzlich gebündelten Anlage die Transaktionskosten je MWh sinken und die Marge steigt.", korrekt: false, erklaerung: "Handelsentgelte sind für alle gleich und ohnehin marginal – der echte Hebel liegt in der Ausgleichsenergie." },
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
        { text: "Die Bank erhält den erzeugten Strom als physische Sicherheit hinterlegt und kann ihn bei einem Zahlungsausfall des Projekts selbst am Markt vermarkten, was ihr Kreditrisiko absichert.", korrekt: false, erklaerung: "Banken besichern über Projektrechte und Cashflow-Abtretung, nicht über physischen Strom – beim Financial PPA fließt ohnehin kein Strom an Vertragspartner." }
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
        { text: "Financial PPAs sind grundsätzlich kürzer (1–3 Jahre) und dienen nur der kurzfristigen Preisabsicherung, während Physical PPAs die langfristige, über zehn Jahre laufende Belieferung mit tatsächlichem Grünstrom regeln.", korrekt: false, erklaerung: "Beide Formen laufen typisch 10–15 Jahre – der Unterschied liegt im Mechanismus (Differenzausgleich vs. physische Lieferung), nicht in der Laufzeit." },
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
        { text: "Ostroms radikale Preistransparenz: Beide Modelle leben im Kern davon, dem Endkunden die gesamte Beschaffungs-Kalkulation bis auf den Cent vollständig offenzulegen und daraus Vertrauen zu schöpfen.", korrekt: false, erklaerung: "Transparenz ist ein anderes Wertversprechen – bei Additionality geht es um Wirkungsnachweis, nicht um Kalkulationsoffenlegung." },
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
        { text: "Durch unterschiedliche Zell-Degradation: Die ertragsschwächere Batterie hat über die Jahre bereits spürbar nutzbare Kapazität verloren und kann deshalb pro Zyklus weniger Energie vermarkten als die neuere Anlage.", korrekt: false, erklaerung: "Degradation wirkt über Jahre und erklärt einstellige Prozentunterschiede – nicht 30–50% zwischen baugleichen, gleichaltrigen Anlagen." },
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
        { text: "Privatpersonen dürfen aus energierechtlichen und haftungsrechtlichen Gründen grundsätzlich keine netzstabilisierenden Systemdienstleistungen erbringen, das ist ausschließlich zertifizierten Netzbetreibern vorbehalten.", korrekt: false, erklaerung: "Ein grundsätzliches Verbot gibt es nicht – praktisch scheitert es an Mindestlosgrößen, Messtechnik und Prozessanforderungen, die der Aggregator übernimmt." }
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
        { text: "Check24 folgt exakt derselben Logik – die einmalige CPA-Provision je vermitteltem Kunden ist ebenfalls vollständig vom späteren Stromverbrauch des Kunden entkoppelt und fällt nur bei Vertragsabschluss an.", korrekt: false, erklaerung: "Die CPA ist zwar verbrauchsunabhängig, aber einmalig pro Vermittlung – eine Flatrate ist dagegen ein wiederkehrender Erlös aus einer laufenden Beziehung. Die Logiken sind grundverschieden." },
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
        { text: "Der Sonnencent ist eine rein freiwillige Spende, die umweltbewusste Kunden auf Wunsch zusätzlich zu ihrer normalen Stromrechnung leisten können und die der Anbieter dann gesammelt in neue Anlagen investiert.", korrekt: false, erklaerung: "Gerade nicht – er ist fest in den Tarif eingebaut. Die Wirkung hängt nicht vom Spendenverhalten ab, das ist der Clou." },
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
        { text: "O&M-Verträge für Windparks werden staatlich bezuschusst, um die dauerhafte Verfügbarkeit dieser kritischen Energie-Infrastruktur auch bei schwacher Marktlage abzusichern.", korrekt: false, erklaerung: "Es gibt keinen O&M-Zuschuss – die Marge entsteht aus langfristigen Serviceverträgen und Spezialisierungsvorteilen (Schiffe, Techniker, Ersatzteile)." },
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
        { text: "Vor allem vor Bürgerenergiegenossenschaften, die über gesetzliche Sonderquoten einen bevorzugten und vergünstigten Zugang zu den knappen Offshore-Flächen erhalten und damit die Konzerne aus den Auktionen verdrängen.", korrekt: false, erklaerung: "Offshore-Sonderquoten für Genossenschaften gibt es nicht – die Kapitalintensität schließt kleine Akteure hier faktisch aus (anders als onshore)." }
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
        { text: "Genossenschaften sind grundsätzlich von der Körperschaft- und Gewerbesteuer befreit und können ihre Projekte dadurch strukturell günstiger kalkulieren als gewinnorientierte Konzerne.", korrekt: false, erklaerung: "Eine generelle Steuerbefreiung gibt es nicht – Genossenschaften zahlen regulär Körperschaftsteuer (nur Rückvergütungen an Mitglieder sind teils begünstigt)." },
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
        { text: "Beide sichern ihre Position vor allem über langfristige Exklusivverträge mit den Verteilnetzbetreibern ihrer jeweiligen Region ab, die Wettbewerbern den Netzzugang über Jahre praktisch verwehren.", korrekt: false, erklaerung: "Exklusivverträge zwischen Lieferanten und Netzbetreibern wären ein Unbundling-Verstoß – Netz und Vertrieb sind strikt getrennt." }
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
        { text: "Weil der Netzbetreiber seine Erlöse per langfristigem Termingeschäft an der Börse gegen sämtliche Strompreisschwankungen vollständig absichert und dadurch unabhängig von der Marktentwicklung kalkulieren kann.", korrekt: false, erklaerung: "Netzbetreiber handeln keinen Strom — sie haben schlicht gar kein Preis-Exposure, deshalb braucht es auch keine Absicherung." },
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
        { text: "Beide verdienen letztlich an der Merit Order, nur auf unterschiedlichen Spannungsebenen des Netzes – der ÜNB auf Höchstspannung, der VNB im Verteilnetz, jeweils über den Börsenpreis.", korrekt: false, erklaerung: "Die Merit Order betrifft nur die Erzeugung — der Netzbetreiber verdient völlig unabhängig davon an regulierten Entgelten." },
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
        { text: "Das konventionelle PPA, weil es dem Betreiber langfristige Festpreise garantiert und ihn damit vollständig gegen jedes kurzfristige Redispatch-Risiko im Netz absichert.", korrekt: false, erklaerung: "Ein PPA ist ein Preissicherungsvertrag ohne Bezug zum lokalen Netzengpass — es kann Redispatch nicht ersetzen." },
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
        { text: "Das Stadtwerk hat weniger Eigenkapital hinterlegt, als gesetzlich für zugelassene Stromlieferanten vorgeschrieben ist, und verliert deshalb vorübergehend seine Belieferungserlaubnis.", korrekt: false, erklaerung: "Unterdeckung ist ein energiewirtschaftlicher, kein bilanzieller Begriff — es geht um Strommengen pro Stunde, nicht um Eigenkapital." },
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
        { text: "Durch neue private Wettbewerber, die eigene Bilanzkreis- und Ausgleichsenergiesysteme vollständig parallel zum ÜNB aufbauen und betreiben, den Marktteilnehmern günstigere Konditionen anbieten und dem ÜNB so schrittweise sein reguliertes Monopol entziehen.", korrekt: false, erklaerung: "Das Bilanzkreissystem ist ein natürliches Monopol des ÜNB — niemand baut ein Konkurrenzsystem; angegriffen wird die Analytik-Schnittstelle." },
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
        { text: "Tibber kann durch seine App und die smarte Steuerung der Kundengeräte die Ausgleichsenergiepreise des ÜNB direkt senken und diese Einsparung als Erlösquelle an sich selbst weiterreichen.", korrekt: false, erklaerung: "Einzelne Lieferanten setzen die Ausgleichsenergiepreise nicht — Tibber kann nur die eigene Abweichung minimieren, nicht den Preis beeinflussen." }
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
        { text: "Er kassiert die den Kunden gewährten Netzentgeltnachlässe im Gegenzug selbst als zusätzliche Einnahme, weil der Netzbetreiber ihm die reduzierten Entgelte über einen Ausgleichsmechanismus voll erstattet.", korrekt: false, erklaerung: "Umgekehrt — der Netzentgeltnachlass ist eine Zahlung AN den Kunden, keine Einnahme des VNB." },
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
        { text: "Der grundzuständige Messstellenbetreiber (gMSB) misst ausschließlich Strom, während der intelligente Messstellenbetreiber (iMSB) allein für Gas und Wärme zuständig ist.", korrekt: false, erklaerung: "Die Unterscheidung ist rechtlich (grundzuständig vs. wettbewerblich), nicht nach Energieträger." },
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
        { text: "Die BNetzA selbst, die den Verteilnetzbetreibern die §14a-Steuerungsbefugnis über die Kundengeräte mittelfristig wieder entziehen und stattdessen zentral bei den Übertragungsnetzbetreibern bündeln will, um Missbrauch zu verhindern.", korrekt: false, erklaerung: "Die BNetzA hat §14a gerade eingeführt — die Spannung liegt zwischen netzdienlicher (VNB) und marktlicher (Aggregator) Steuerung, nicht in einem Entzug." }
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
        { text: "Der Heimspeicher kann aus technischen und abrechnungsrechtlichen Gründen immer nur von einer einzigen Partei gleichzeitig genutzt werden, nie parallel vom Eigenheimbesitzer für den Eigenverbrauch und vom Aggregator für Netzdienstleistungen – beide Nutzungen schließen sich physikalisch aus.", korrekt: false, erklaerung: "Technisch ist geteilte Nutzung möglich (z.B. 20% für VPP, Rest für Eigenverbrauch) — der Konflikt ist die Steuerungspriorität, nicht die physische Exklusivität." },
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
        { text: "Die BNetzA versteigert die regionalen Verteilnetze alle 20 Jahre in einem offenen Bieterverfahren neu an den finanzstärksten Meistbietenden, unabhängig vom bisherigen Betreiber.", korrekt: false, erklaerung: "Es gibt keine BNetzA-Versteigerung — die Kommune vergibt die Wegekonzession selbst, das ist ein kommunalrechtliches Verfahren." },
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
        { text: "Die Kommune kann als kommunale Netzbetreiberin die lokalen Netzentgelte politisch frei senken, um bei ihren Bürgern als Wählern zu punkten, und die Mindereinnahmen aus dem allgemeinen Haushalt ausgleichen.", korrekt: false, erklaerung: "Auch ein kommunaler VNB ist an die ARegV gebunden — die Entgelte sind reguliert, nicht politisch frei setzbar." },
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
        { text: "Die Kommune besitzt das Verteilnetz zwar formal selbst, lässt es aber vollständig von einem privaten Energiekonzern betreiben, der dafür die gesamte regulierte Rendite vereinnahmt.", korrekt: false, erklaerung: "Das wäre ein Pacht-/Betriebsführungsmodell — beim Eigenbetrieb macht die Kommune alles selbst." },
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
        { text: "Kleine Netzbetreiber müssen laut ARegV einen gesetzlich festgelegten Strafzuschlag auf ihre Netzentgelte zahlen, der sie gegenüber großen, effizienteren Betreibern gezielt benachteiligt.", korrekt: false, erklaerung: "Einen Strafzuschlag gibt es nicht — der Nachteil entsteht indirekt über den Effizienzvergleich, nicht über eine Abgabe." },
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
        { text: "Weil die Verteilnetze zum Konzessionsende gesetzlich vollständig technisch erneuert werden müssen und während dieser Umbauphase vorübergehend stillstehen, was ihren Wert drückt.", korrekt: false, erklaerung: "Das Netz läuft im Betreiberübergang normal weiter — der Angriffspunkt ist rechtlich-wirtschaftlich (Vergabe), nicht technisch." }
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
        { text: "Beide sind als regulierte Monopole vom Wettbewerb durch Neolieferanten wie Tibber oder Octopus vollständig geschützt und müssen sich daher um Kundenabwanderung keinerlei Sorgen machen.", korrekt: false, erklaerung: "Das Vertriebsgeschäft der Stadtwerke ist sehr wohl angreifbar (Rosinenpicken) — nur das Netz ist Monopol. Der gemeinsame Vorteil ist der Querverbund, nicht Wettbewerbsfreiheit." },
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
        { text: "Die ersten angeschlossenen H2-Kunden zahlen einen einmaligen Strafaufschlag auf ihren Netzanschluss, der die gesamte Wasserstoff-Fernleitung sofort und vollständig finanziert, sodass spätere Kunden gar keine Netzentgelte mehr zahlen müssen.", korrekt: false, erklaerung: "Das Gegenteil ist der Zweck: Die Anfangskunden zahlen zunächst niedrige Entgelte — genau deshalb springt der Staat als Zwischenfinanzierer ein." },
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
        { text: "Ein plötzlicher technischer Totalausfall des gesamten deutschen Gasnetzes, ausgelöst durch die gleichzeitige Umstellung aller Leitungen auf Wasserstoff, der die Versorgung schlagartig zusammenbrechen lässt.", korrekt: false, erklaerung: "Death Spiral ist ein ökonomischer, kein technischer Begriff — es geht um die Entgeltdynamik, nicht um einen Blackout." },
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
        { text: "Durch neue, komplett privat finanzierte H2-Fernleitungsnetze, die parallel zum regulierten Kernnetz verlegt werden und mit eigenen, ungeregelten Durchleitungstarifen in direkte Preiskonkurrenz zum staatlichen Netz treten.", korrekt: false, erklaerung: "Das Kernnetz ist als nationales Monopol konzipiert — paralleler Netzbau ist unwahrscheinlich; die Konkurrenz kommt von anderen Transportformen, nicht von Konkurrenznetzen." },
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
        { text: "Beide finanzieren ihre milliardenschweren Infrastrukturinvestitionen vollständig über kurzfristige, volatile Spotmarkterlöse statt über langfristig regulierte Netzentgelte und tragen damit das volle Marktrisiko selbst.", korrekt: false, erklaerung: "Das Gegenteil — gerade weil Spoterlöse zu unsicher wären, brauchen beide langfristige Absicherungsinstrumente." },
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

// ════════════════════════════════════════════════════════════════════
// MODUL 6 — PROSUMER & NEUE SPIELER
// ════════════════════════════════════════════════════════════════════
Object.assign(LERN_QUIZ_ITEMS, {

  // ── U6-PV ───────────────────────────────────────────────────────
  "Q-PV-WE1": {
    id: "Q-PV-WE1", unitId: "U6-PV", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-HAUS-01"],
    data: {
      szenario: "Der Haushalt bezieht Strom für 30 ct/kWh und bekommt für Einspeisung 8,2 ct/kWh. Wie groß ist der Wertunterschied (in ct/kWh), wenn er eine kWh selbst verbraucht statt sie einzuspeisen?",
      eingabefelder: [{ key: "diff", label: "Wertunterschied", einheit: "ct/kWh" }],
      loesung: { diff: { wert: 21.8, toleranz: 1 } },
      rechenweg: ["Selbstverbrauch spart den Bezugspreis: 30 ct/kWh.", "Einspeisung bringt nur die Vergütung: 8,2 ct/kWh.", "Unterschied = 30 − 8,2 = 21,8 ct/kWh — genau diese Differenz macht Eigenverbrauch so viel wertvoller als Einspeisung."]
    }
  },
  "Q-PV-WE2": {
    id: "Q-PV-WE2", unitId: "U6-PV", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-PROSUM-HAUS-01"],
    data: {
      frage: "Der Speicher erzeugt keine einzige kWh. Warum steigert er den Wert der PV-Anlage trotzdem so stark?",
      optionen: [
        { text: "Er verschiebt mittags erzeugten Überschuss in den Abend, sodass er selbst verbraucht statt für ~8 ct eingespeist wird — jede verschobene kWh springt auf ~30 ct Wert.", korrekt: true, erklaerung: "Der Speicher ist ein Wert-Verschieber, kein Erzeuger: Er hebt die Eigenverbrauchsquote von ~30% auf 60–80%." },
        { text: "Er erhöht die Einspeisevergütung, weil gespeicherter Strom höher vergütet wird.", korrekt: false, erklaerung: "Gespeicherter Strom bekommt keine höhere Einspeisevergütung — der Vorteil ist der vermiedene Netzbezug, nicht eine bessere Vergütung." },
        { text: "Er verbessert den Wirkungsgrad der Solarmodule.", korrekt: false, erklaerung: "Der Modulwirkungsgrad bleibt unverändert — der Speicher wirkt rein auf die zeitliche Nutzung, nicht auf die Erzeugung." }
      ]
    }
  },
  "Q-PV-R1": {
    id: "Q-PV-R1", unitId: "U6-PV", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-HAUS-01"],
    data: {
      frage: "Wie verändert ein Heimspeicher die Eigenverbrauchsquote typischerweise?",
      optionen: [
        { text: "Von 25–35% (ohne Speicher) auf 60–80% (mit Speicher).", korrekt: true, erklaerung: "Diese Verdopplung der Eigenverbrauchsquote ist der Kern des wirtschaftlichen Speichervorteils." },
        { text: "Von 60% auf praktisch 100%.", korrekt: false, erklaerung: "100% sind unrealistisch — auch mit Speicher bleibt ein Rest, der eingespeist oder zugekauft wird; realistisch sind 60–80%." },
        { text: "Sie bleibt unverändert, der Speicher erhöht nur die Einspeisung.", korrekt: false, erklaerung: "Genau das Gegenteil — der Speicher senkt die Einspeisung und erhöht den Eigenverbrauch." }
      ]
    }
  },
  "Q-PV-R2": {
    id: "Q-PV-R2", unitId: "U6-PV", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-HAUS-01"],
    data: {
      text: "Für den Prosumer ist {{a}} wirtschaftlich optimal, weil der Bezugspreis (~30 ct/kWh) deutlich über der {{b}} (~8,2 ct/kWh) liegt. Die Amortisationszeit einer PV+Speicher-Anlage liegt bei {{c}} Jahren.",
      luecken: {
        a: { loesungen: ["Eigenverbrauch", "maximaler Eigenverbrauch"], erklaerung: "Maximaler Eigenverbrauch spart den teuren Netzbezug." },
        b: { loesungen: ["Einspeisevergütung"], erklaerung: "Die Einspeisevergütung ist deutlich niedriger als der Bezugspreis." },
        c: { loesungen: ["8–12", "8-12", "8 bis 12"], erklaerung: "8–12 Jahre (2024) — sinkt mit fallenden Solarkosten weiter." }
      },
      distraktoren: ["Netzeinspeisung", "20–30"]
    }
  },
  "Q-PV-R3": {
    id: "Q-PV-R3", unitId: "U6-PV", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-HAUS-01"],
    data: {
      frage: "Warum ist der PV-Eigenverbrauch 'kein Geschäftsmodell mit Burggraben, sondern ein regulatorisch begünstigter Arbitrage-Case'?",
      optionen: [
        { text: "Der Vorteil beruht auf der Differenz zwischen Bezugspreis und Einspeisevergütung; sinkt die Vergütung und greift die §51-Nullvergütung, wandert der Wert zur Flexibilität — und die Marge zu Ökosystem-Anbietern wie Enpal oder Tibber.", korrekt: true, erklaerung: "Der einzelne Prosumer hat keinen Schutzwall — die Wertschöpfung verschiebt sich zu denen, die Hardware, Tarif und Optimierung bündeln." },
        { text: "Weil PV-Anlagen technisch leicht zu kopieren sind und deshalb jeder eine bauen kann.", korrekt: false, erklaerung: "Die Kopierbarkeit der Hardware ist nicht der Punkt — es geht um die regulatorisch getriebene Preisdifferenz, die den Case trägt und erodieren kann." },
        { text: "Weil der Eigenverbrauch gesetzlich verboten werden soll.", korrekt: false, erklaerung: "Eigenverbrauch bleibt erlaubt und gefördert — die Angreifbarkeit liegt in der schrumpfenden Arbitrage, nicht in einem Verbot." }
      ]
    }
  },
  "Q-PV-R4": {
    id: "Q-PV-R4", unitId: "U6-PV", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-PROSUM-HAUS-01"],
    data: {
      steckbriefId: "L3-PROSUM-HAUS-01",
      erklaerungenProDimension: {
        regulierung: "Einspeisevergütung ist gesetzlich, aber sinkend und ohne echten Schutz — niedrig.",
        skalierbarkeit: "Millionen Eigenheime als Markt, aber jede Anlage einzeln installiert — mittel-hoch.",
        marktrisiko: "Der Eigenverbrauchsvorteil ist stabil, kaum Preisexposure für den Prosumer — niedrigste Stufe.",
        digitalisierung: "Smart-Home-Integration möglich, aber kein digital-natives Produkt — mittel.",
        wettbewerb: "Viele Installateure und Hersteller, harter Preiswettbewerb — hoch.",
        nachhaltigkeit: "Direkte dezentrale EE-Erzeugung — höchste Stufe."
      }
    }
  },
  "Q-PV-T1": {
    id: "Q-PV-T1", unitId: "U6-PV", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-PROSUM-HAUS-01", "L3-ERZ-SPEICHER-02"],
    data: {
      frage: "Der Heimspeicher steigert beim Prosumer den Eigenverbrauch — beim Heimspeicher-VPP (Modul 2) wird dieselbe Batterie zusätzlich vermarktet. Wie ergänzen sich die beiden Werthebel?",
      optionen: [
        { text: "Der Speicher liefert zuerst den Eigenverbrauchsvorteil (~22 ct/kWh Differenz); die freigehaltene Restkapazität (z.B. 20%) bringt darüber hinaus VPP-Erlöse — zwei Erlösschichten auf demselben Gerät.", korrekt: true, erklaerung: "Genau dieses Stacking macht das Ökosystem-Modell (Sonnen-Flatrate) attraktiv: Eigenverbrauch plus Flex-Vermarktung aus einer Batterie." },
        { text: "Sie schließen sich aus — ein Speicher kann entweder Eigenverbrauch ODER VPP, nie beides.", korrekt: false, erklaerung: "Sie koexistieren: Der Großteil dient dem Eigenverbrauch, ein reservierter Anteil dem VPP — genau das ist das Sonnen-Modell." },
        { text: "Die VPP-Vermarktung ersetzt den Eigenverbrauchsvorteil vollständig.", korrekt: false, erklaerung: "Der Eigenverbrauch bleibt der Haupthebel; die VPP-Erlöse kommen aus der kleinen freigehaltenen Reserve obendrauf." }
      ]
    }
  },

  // ── U6-BALKON ───────────────────────────────────────────────────
  "Q-BALKON-WE1": {
    id: "Q-BALKON-WE1", unitId: "U6-BALKON", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-HAUS-02"],
    data: {
      frage: "Was hat sich seit dem Solarpaket I (2024) bei der Anmeldung eines Balkonkraftwerks geändert?",
      optionen: [
        { text: "Die Anmeldung beim Netzbetreiber entfällt — es genügt die vereinfachte Registrierung im Marktstammdatenregister (MaStR).", korrekt: true, erklaerung: "Diese Entbürokratisierung ist ein zentraler Treiber des Balkonkraftwerk-Booms (>500.000 Anlagen 2024)." },
        { text: "Balkonkraftwerke müssen seither von einer Elektrofachkraft installiert werden.", korrekt: false, erklaerung: "Im Gegenteil — plug-and-play ohne Handwerker ist gerade der Kern; die Regeln wurden vereinfacht, nicht verschärft." },
        { text: "Die Leistungsgrenze wurde auf 300 W gesenkt.", korrekt: false, erklaerung: "Umgekehrt — die Grenze wurde 2024 auf 800 W angehoben; eine weitere Anhebung auf 2.000 W wird diskutiert." }
      ]
    }
  },
  "Q-BALKON-WE2": {
    id: "Q-BALKON-WE2", unitId: "U6-BALKON", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-PROSUM-HAUS-02"],
    data: {
      frage: "Warum lohnt sich beim Balkonkraftwerk fast nur der direkte Eigenverbrauch, nicht die Einspeisung?",
      optionen: [
        { text: "Überschuss, der ins Netz zurückfließt, wird ohne Zweirichtungszähler praktisch nicht vergütet — der Wert entsteht nur, wenn der Strom sofort im Haushalt verbraucht wird.", korrekt: true, erklaerung: "Deshalb dimensioniert man Balkonkraftwerke auf die Grundlast (Kühlschrank, Router), die immer läuft." },
        { text: "Weil eingespeister Balkonstrom gesetzlich verboten ist.", korrekt: false, erklaerung: "Einspeisung ist nicht verboten, sie wird nur ohne passenden Zähler nicht vergütet — ein wirtschaftlicher, kein rechtlicher Grund." },
        { text: "Weil Balkonkraftwerke nur nachts Strom erzeugen.", korrekt: false, erklaerung: "Sie erzeugen tagsüber bei Sonne — der Punkt ist die fehlende Vergütung für Überschuss, nicht die Erzeugungszeit." }
      ]
    }
  },
  "Q-BALKON-R1": {
    id: "Q-BALKON-R1", unitId: "U6-BALKON", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-HAUS-02"],
    data: {
      frage: "Wer verdient am Balkonkraftwerk-Boom — und wie viel?",
      optionen: [
        { text: "Hersteller (Anker, EcoFlow) an einer dünnen Hardware-Marge auf ein Massenprodukt, Plattformen (Amazon, Aldi) an der Verkaufs-/Marktplatz-Provision — der eigentliche Nutzen bleibt beim Kunden.", korrekt: true, erklaerung: "Reines Commodity mit Preisverfall: harte Konkurrenz, flache Marge, kaum Differenzierung." },
        { text: "Die Netzbetreiber über hohe Anmeldegebühren.", korrekt: false, erklaerung: "Die Netzbetreiber-Anmeldung ist gerade entfallen — sie verdienen daran nichts." },
        { text: "Die Stromlieferanten über einen Balkonkraftwerk-Aufschlag im Tarif.", korrekt: false, erklaerung: "Es gibt keinen solchen Aufschlag — Balkonstrom senkt im Gegenteil den Netzbezug des Kunden." }
      ]
    }
  },
  "Q-BALKON-R2": {
    id: "Q-BALKON-R2", unitId: "U6-BALKON", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-HAUS-02"],
    data: {
      text: "Ein Balkonkraftwerk liefert maximal {{a}} W Wechselrichterleistung und kostet {{b}} €. Es macht Eigenerzeugung erstmals für {{c}} ohne eigenes Dach zugänglich.",
      luecken: {
        a: { loesungen: ["800"], erklaerung: "800 W Wechselrichterleistung seit der Gesetzesänderung 2024." },
        b: { loesungen: ["300–600", "300-600", "300 bis 600"], erklaerung: "300–600 € — sehr niedrige Einstiegshürde, Amortisation in 3–5 Jahren." },
        c: { loesungen: ["Mieter", "Mieter und Wohnungseigentümer"], erklaerung: "Mieter ohne Dachfläche sind die neue Zielgruppe, die vorher keine PV nutzen konnte." }
      },
      distraktoren: ["3.000", "Industriekunden"]
    }
  },
  "Q-BALKON-R3": {
    id: "Q-BALKON-R3", unitId: "U6-BALKON", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-HAUS-02"],
    data: {
      frage: "Wodurch ist das Balkonkraftwerk-Geschäft nach oben hin angreifbar?",
      optionen: [
        { text: "Sobald Mini-PV mit Speicher und Messkonzept wächst, konkurriert sie mit 'richtiger' Dach-PV samt professionellem Ökosystem — die Grenze zum größeren, margenstärkeren Segment verschwimmt.", korrekt: true, erklaerung: "Das Commodity-Segment wird von oben (Dach-PV-Ökosysteme) und von der Kostenseite (asiatische Hersteller, Discounter) zugleich gedrückt." },
        { text: "Durch ein drohendes EU-weites Verbot von Steckersolar.", korrekt: false, erklaerung: "Die EU-Solarstrategie fördert Prosumer-Modelle — ein Verbot steht nicht im Raum." },
        { text: "Weil Balkonkraftwerke technisch nicht mit Smart Homes kompatibel sind.", korrekt: false, erklaerung: "Sie lassen sich in Smart-Home-Plattformen (Tibber, Home Assistant) integrieren — das ist sogar ein Wachstumspfad, kein Hindernis." }
      ]
    }
  },
  "Q-BALKON-R4": {
    id: "Q-BALKON-R4", unitId: "U6-BALKON", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-PROSUM-HAUS-02"],
    data: {
      steckbriefId: "L3-PROSUM-HAUS-02",
      erklaerungenProDimension: {
        regulierung: "Kaum Regulierung, seit 2024 sogar entbürokratisiert — niedrigste Stufe.",
        skalierbarkeit: "Massenprodukt über Online-/Discounter-Vertrieb, plug-and-play — höchste Stufe.",
        marktrisiko: "Für den Käufer risikoarm (fixe Einsparung); für den Hersteller Commodity-Risiko — aus Modellsicht niedrig.",
        digitalisierung: "App-Anbindung optional, aber die Hardware ist simpel — mittel.",
        wettbewerb: "Extrem hart: viele Hersteller, Discounter, Preisverfall — höchste Stufe.",
        nachhaltigkeit: "Direkte dezentrale Solarerzeugung, demokratisiert PV — höchste Stufe."
      }
    }
  },
  "Q-BALKON-T1": {
    id: "Q-BALKON-T1", unitId: "U6-BALKON", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-PROSUM-HAUS-02", "L3-VERGL-B2C-01"],
    data: {
      frage: "Balkonkraftwerk und Tarifvergleichsportal (Modul 4) sind völlig verschiedene Geschäfte, teilen aber eine strukturelle Schwäche. Welche?",
      optionen: [
        { text: "Beide sind Commodity-nah mit dünner Differenzierung: Das Balkonkraftwerk konkurriert über den Preis austauschbarer Hardware, das Portal über die Provisionshöhe austauschbarer Vermittlung — Marge entsteht nur über Skalierung, nicht über einen Burggraben.", korrekt: true, erklaerung: "Beide leben von Masse statt von Verteidigungsfähigkeit — ein wiederkehrendes Muster margenschwacher Intermediäre und Commodities." },
        { text: "Beide sind streng reguliert wie ein Netzbetreiber.", korrekt: false, erklaerung: "Beide sind gerade schwach reguliert — das ist Teil ihres harten Wettbewerbs, nicht ein Schutz." },
        { text: "Beide brauchen Milliarden-Capex wie ein Offshore-Windpark.", korrekt: false, erklaerung: "Beide sind asset-leicht bzw. geringinvestiv — das Gegenteil kapitalintensiver Modelle." }
      ]
    }
  },

  // ── U6-MIETERSTROM ──────────────────────────────────────────────
  "Q-MIETERSTROM-WE1": {
    id: "Q-MIETERSTROM-WE1", unitId: "U6-MIETERSTROM", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-PROSUM-MIETER-01"],
    data: {
      frage: "Welche Rolle übernimmt der Mieterstrom-Dienstleister (z.B. Buzzn) für den Vermieter?",
      optionen: [
        { text: "Er wird für den Vermieter zum Energielieferanten mit allen EnWG-Pflichten (Bilanzkreis, Marktkommunikation, GPKE) — gegen eine Marge auf den an die Mieter verkauften Strom.", korrekt: true, erklaerung: "Der Vermieter will die Lieferantenrolle nicht selbst tragen; der Dienstleister nimmt sie ihm gegen Marge ab." },
        { text: "Er kauft dem Vermieter die PV-Anlage ab und betreibt sie auf eigene Rechnung.", korrekt: false, erklaerung: "Die Anlage bleibt meist beim Vermieter — der Dienstleister übernimmt die Lieferanten- und Abrechnungsrolle, nicht das Anlageneigentum." },
        { text: "Er senkt die Netzentgelte des gesamten Gebäudes.", korrekt: false, erklaerung: "Netzentgelte setzt der Dienstleister nicht — der Mieterstromvorteil kommt aus dem Direktverbrauch und dem Zuschlag, nicht aus Entgeltsenkung." }
      ]
    }
  },
  "Q-MIETERSTROM-WE2": {
    id: "Q-MIETERSTROM-WE2", unitId: "U6-MIETERSTROM", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-MIETER-02"],
    data: {
      frage: "Warum verdient Lumenaza bei der GGV an Software statt an Strom?",
      optionen: [
        { text: "Bei der GGV wird niemand zum Energielieferanten — der Solarstrom wird nur über einen virtuellen Zähler anteilig gutgeschrieben; Lumenaza verkauft die Abrechnungsplattform als SaaS an die WEG, der Reststrom läuft über die eigenen Lieferanten der Mieter.", korrekt: true, erklaerung: "Kein GPKE, keine Bilanzkreispflicht — das Geschäft ist Software, nicht Stromhandel." },
        { text: "Weil Lumenaza gesetzlich keinen Strom verkaufen darf.", korrekt: false, erklaerung: "Nicht ein Verbot, sondern das GGV-Modell selbst verzichtet auf die Lieferantenrolle — deshalb bleibt nur die Software-Ebene." },
        { text: "Weil Solarstrom in der GGV kostenlos abgegeben werden muss.", korrekt: false, erklaerung: "Der Strom wird sehr wohl bewertet und gutgeschrieben — nur eben ohne dass Lumenaza als Lieferant Marge nimmt; es verdient an der Plattformgebühr." }
      ]
    }
  },
  "Q-MIETERSTROM-R1": {
    id: "Q-MIETERSTROM-R1", unitId: "U6-MIETERSTROM", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-MIETER-01"],
    data: {
      frage: "Welche Preisvorgabe gilt beim Mieterstrom nach §42a EnWG?",
      optionen: [
        { text: "Der Mieterstromtarif muss mindestens 10% unter dem lokalen Grundversorgungstarif liegen.", korrekt: true, erklaerung: "Diese verpflichtende Preisuntergrenze soll sicherstellen, dass Mieter tatsächlich profitieren." },
        { text: "Der Tarif muss exakt dem Grundversorgungstarif entsprechen.", korrekt: false, erklaerung: "Er muss mindestens 10% darunter liegen — Gleichpreisigkeit wäre kein Mieterstromvorteil." },
        { text: "Der Tarif ist frei wählbar, ohne jede Vorgabe.", korrekt: false, erklaerung: "Es gibt sehr wohl eine gesetzliche Untergrenze (10% Rabatt) — sonst gäbe es das Mieterstromprivileg nicht." }
      ]
    }
  },
  "Q-MIETERSTROM-R2": {
    id: "Q-MIETERSTROM-R2", unitId: "U6-MIETERSTROM", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-MIETER-01", "L3-PROSUM-MIETER-02"],
    data: {
      text: "Mieterstrom läuft über {{a}} EnWG — der Anbieter wird Energielieferant. Die einfachere Alternative {{b}} EnWG (seit 2024) verzichtet darauf. Zusätzlich gibt es beim Mieterstrom den {{c}} nach §21 EEG (~1,6–2,6 ct/kWh).",
      luecken: {
        a: { loesungen: ["§42a", "42a", "Paragraph 42a"], erklaerung: "§42a EnWG ist das klassische Mieterstromprivileg." },
        b: { loesungen: ["§42b", "42b", "Paragraph 42b"], erklaerung: "§42b EnWG regelt die Gemeinschaftliche Gebäudeversorgung (GGV)." },
        c: { loesungen: ["Mieterstromzuschlag", "Zuschlag"], erklaerung: "Der Mieterstromzuschlag ist eine zusätzliche EEG-Förderung obendrauf." }
      },
      distraktoren: ["§14a", "Netzbonus"]
    }
  },
  "Q-MIETERSTROM-R3": {
    id: "Q-MIETERSTROM-R3", unitId: "U6-MIETERSTROM", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-MIETER-01", "L3-PROSUM-MIETER-02"],
    data: {
      frage: "Wie 'unterhöhlt' die GGV das klassische Mieterstrommodell von innen?",
      optionen: [
        { text: "Vermieter, die nicht Energielieferant werden wollen, weichen auf die einfachere GGV aus; SaaS-Anbieter bieten die GGV-Abwicklung günstig an und nehmen den Vollservice-Mieterstromern ihr Kernargument 'wir nehmen euch die Komplexität ab'.", korrekt: true, erklaerung: "Die regulatorische Vereinfachung entwertet genau die Dienstleistung, für die Mieterstrom-Vollservicer bezahlt wurden." },
        { text: "Die GGV verbietet klassischen Mieterstrom.", korrekt: false, erklaerung: "Beide bestehen parallel — die GGV verdrängt marktlich, nicht per Verbot." },
        { text: "Die GGV zahlt höhere Mieterstromzuschläge.", korrekt: false, erklaerung: "Die GGV verzichtet gerade auf das Lieferantenmodell; sie konkurriert über Einfachheit, nicht über höhere Zuschläge." }
      ]
    }
  },
  "Q-MIETERSTROM-R4": {
    id: "Q-MIETERSTROM-R4", unitId: "U6-MIETERSTROM", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-PROSUM-COMMUNITY-01"],
    data: {
      frage: "Was ist der ökonomische Kern einer lokalen Energie-Community (EU EMD Art. 16)?",
      optionen: [
        { text: "Strom, der die Community nicht verlässt (lokal erzeugt und verbraucht), zahlt reduzierte Netzentgelte — die Einsparung (8–15 ct/kWh) wird zwischen Erzeuger und Verbraucher geteilt.", korrekt: true, erklaerung: "Ohne die Netzentgelt-Privilegierung lokalen Verbrauchs fehlt dem Modell der ökonomische Kern — genau das ist auch seine Angreifbarkeit (AgNes-Diskussion)." },
        { text: "Die Community erhält eine staatliche Pauschalförderung pro Mitglied.", korrekt: false, erklaerung: "Es gibt keine Kopfpauschale — der Vorteil entsteht aus vermiedenen Netzentgelten für lokalen Stromfluss." },
        { text: "Mitglieder werden von der Stromsteuer befreit.", korrekt: false, erklaerung: "Keine Stromsteuerbefreiung — der Hebel ist die Netzentgeltreduktion für lokal gehandelten Strom." }
      ]
    }
  },
  "Q-MIETERSTROM-R5": {
    id: "Q-MIETERSTROM-R5", unitId: "U6-MIETERSTROM", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-MIETER-01", "L3-PROSUM-MIETER-02"],
    data: { steckbriefId: "L3-PROSUM-MIETER-01", distraktorSteckbriefId: "L3-PROSUM-MIETER-02" }
  },
  "Q-MIETERSTROM-T1": {
    id: "Q-MIETERSTROM-T1", unitId: "U6-MIETERSTROM", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-PROSUM-MIETER-02", "L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Die GGV-Plattform (Lumenaza) und Octopus' Kraken (Modul 4) folgen demselben strategischen Prinzip. Welchem?",
      optionen: [
        { text: "Beide verkaufen Software statt Strom: Sie kommoditisieren einen aufwendigen Abwicklungsprozess (GGV-Abrechnung bzw. Versorger-Backoffice) als skalierbare Plattform und verdienen an der Effizienz, nicht an der kWh.", korrekt: true, erklaerung: "Der Wandel von Commodity- zu Plattform-/SaaS-Erlösen ist ein Leitmotiv der ganzen Branche — von der WEG bis zum Millionen-Versorger." },
        { text: "Beide werden zum Energielieferanten mit voller EnWG-Pflicht.", korrekt: false, erklaerung: "Gerade nicht — beide vermeiden bzw. modernisieren die Lieferantenlast und verkaufen die Abwicklung als Software." },
        { text: "Beide leben ausschließlich von staatlichen Zuschlägen.", korrekt: false, erklaerung: "Beide verdienen an Plattform-/SaaS-Erlösen, nicht an Subventionen." }
      ]
    }
  },

  // ── U6-ENPAL ────────────────────────────────────────────────────
  "Q-ENPAL-WE1": {
    id: "Q-ENPAL-WE1", unitId: "U6-ENPAL", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-PROSUM-MIETER-03"],
    data: {
      frage: "Warum kann der Enpal-Kunde ab dem ersten Monat sparen, obwohl er eine Miete zahlt?",
      optionen: [
        { text: "Die eingesparten Stromkosten (weil ein Teil des Bedarfs aus eigener Solarerzeugung statt teurem Netzbezug kommt) übersteigen die monatliche Mietrate.", korrekt: true, erklaerung: "Miete < Einsparung ab Monat 1 — das ist das zentrale Verkaufsargument des Mietmodells ohne Kapitaleinsatz." },
        { text: "Weil Enpal die Stromrechnung des Kunden komplett übernimmt.", korrekt: false, erklaerung: "Enpal übernimmt nicht die Stromrechnung — der Kunde spart, weil er weniger Netzstrom zukaufen muss." },
        { text: "Weil die Miete staatlich zu 100% erstattet wird.", korrekt: false, erklaerung: "Es gibt keine vollständige Mieterstattung — der Vorteil entsteht rein aus den vermiedenen Stromkosten." }
      ]
    }
  },
  "Q-ENPAL-WE2": {
    id: "Q-ENPAL-WE2", unitId: "U6-ENPAL", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-MIETER-03"],
    data: {
      frage: "Warum bekommt Enpal für die Vorfinanzierung besonders günstiges Kapital?",
      optionen: [
        { text: "Der über 20 Jahre durch EEG-Vergütung und Mietraten abgesicherte Cashflow gilt institutionellen Investoren (Green Bonds, KfW) als risikoarm — das senkt die Zinsen.", korrekt: true, erklaerung: "Planbare, langfristige Cashflows sind bankfähig — dasselbe Prinzip wie bei PPAs und Offshore-Ausschreibungen." },
        { text: "Weil Enpal als Unicorn keine Zinsen zahlen muss.", korrekt: false, erklaerung: "Auch Unicorns zahlen Zinsen — der Vorteil kommt aus der Cashflow-Sicherheit, nicht aus dem Startup-Status." },
        { text: "Weil der Staat alle Enpal-Kredite garantiert.", korrekt: false, erklaerung: "Es gibt keine pauschale Staatsgarantie — die niedrigen Zinsen resultieren aus der Risikobewertung des abgesicherten Cashflows." }
      ]
    }
  },
  "Q-ENPAL-R1": {
    id: "Q-ENPAL-R1", unitId: "U6-ENPAL", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-MIETER-03"],
    data: {
      frage: "Was ist laut Steckbrief Enpals eigentlicher Wachstumsengpass?",
      optionen: [
        { text: "Die eigene Installationsflotte (3.000+ Mitarbeiter) — jeder Neukunde braucht physische Installateure vor Ort, und dieser Flaschenhals wächst langsamer als die Nachfrage.", korrekt: true, erklaerung: "Nicht Kapital, sondern Handwerkerkapazität limitiert das Wachstum — ein physischer Engpass in einem Finanzierungs-getriebenen Modell." },
        { text: "Fehlende Nachfrage nach dem kapitalfreien Einstieg.", korrekt: false, erklaerung: "Die Nachfrage ist gerade der Treiber — der Engpass ist die Installationskapazität, sie zu bedienen." },
        { text: "Ein gesetzliches Verbot von PV-Mietmodellen.", korrekt: false, erklaerung: "PV-Miete ist erlaubt und wächst stark — kein Verbot; der Engpass ist operativ (Installateure)." }
      ]
    }
  },
  "Q-ENPAL-R2": {
    id: "Q-ENPAL-R2", unitId: "U6-ENPAL", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-PROSUM-MIETER-03"],
    data: {
      text: "Enpal vermietet PV, Speicher, Wallbox und Wärmepumpe als {{a}} ab ~79 €/Monat über {{b}} Jahre. Refinanziert wird die Vorfinanzierung über {{c}} an institutionelle Investoren.",
      luecken: {
        a: { loesungen: ["Bundle"], erklaerung: "Das Bundle maximiert den Share-of-Wallet je Kunde." },
        b: { loesungen: ["20"], erklaerung: "20-Jahres-Verträge liefern den stabilen, bankfähigen Cashflow." },
        c: { loesungen: ["Green Bonds", "Green-Bonds", "Grüne Anleihen"], erklaerung: "Green Bonds bringen günstiges Kapital dank abgesichertem Cashflow." }
      },
      distraktoren: ["Einmalkauf", "5"]
    }
  },
  "Q-ENPAL-R3": {
    id: "Q-ENPAL-R3", unitId: "U6-ENPAL", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-PROSUM-MIETER-03"],
    data: {
      frage: "Was ist der schärfste Angriff auf das Enpal-Mietmodell?",
      optionen: [
        { text: "Fallende Hardwarepreise stärken den Kauf-Case: Warum 20 Jahre mieten, was deutlich billiger geworden ist? Dazu kommt die Zinsabhängigkeit des vorfinanzierten Modells.", korrekt: true, erklaerung: "Sinkende Anschaffungskosten untergraben die Grundlogik 'kein Kapital nötig' — die Verteidigung liegt im Ökosystem und der Installationskapazität." },
        { text: "Ein Verbot von Green Bonds in der EU.", korrekt: false, erklaerung: "Green Bonds werden gefördert, nicht verboten — die Bedrohung ist der attraktiver werdende Direktkauf, nicht ein Finanzierungsverbot." },
        { text: "Der komplette Wegfall der EEG-Einspeisevergütung.", korrekt: false, erklaerung: "Die Vergütung sinkt, fällt aber nicht komplett weg; der Hauptangriff ist der günstiger werdende Kauf-Case." }
      ]
    }
  },
  "Q-ENPAL-R4": {
    id: "Q-ENPAL-R4", unitId: "U6-ENPAL", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-PROSUM-MIETER-03"],
    data: {
      steckbriefId: "L3-PROSUM-MIETER-03",
      erklaerungenProDimension: {
        regulierung: "Nutzt EEG-Cashflows, aber kein regulatorischer Schutz des Modells — niedrig.",
        skalierbarkeit: "Skaliert über Kapital und Bundles, aber durch physische Installation gebremst — mittel-hoch.",
        marktrisiko: "20-Jahres-Verträge und Green-Bond-Finanzierung dämpfen, aber Zinsabhängigkeit bleibt — niedrig-mittel.",
        digitalisierung: "Energiemanagement (1KOMMA5° 'Heartbeat'), aber Kern ist physische Installation — mittel-hoch.",
        wettbewerb: "Regionale Installateure von unten, Utilities mit Bundles von oben — mittel.",
        nachhaltigkeit: "Bringt PV, Speicher und Wärmepumpe kapitalfrei in Haushalte — höchste Stufe."
      }
    }
  },
  "Q-ENPAL-T1": {
    id: "Q-ENPAL-T1", unitId: "U6-ENPAL", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-PROSUM-MIETER-03", "L3-ERZ-EE-03"],
    data: {
      frage: "Enpal und ein Offshore-Windpark (Modul 2) sind völlig verschieden groß — nutzen aber dasselbe Finanzierungsprinzip. Welches?",
      optionen: [
        { text: "Beide verwandeln langfristig gesicherte Cashflows (Mietraten+EEG bzw. 20-Jahres-Ausschreibungspreis) in bankfähige Sicherheiten und finanzieren so kapitalintensive Vorleistungen günstig vor.", korrekt: true, erklaerung: "Ob Green Bond für tausende Hausanlagen oder Projektfinanzierung für einen Windpark: Cashflow-Sicherheit senkt die Kapitalkosten — dasselbe Prinzip in völlig anderem Maßstab." },
        { text: "Beide verkaufen ihren Strom direkt an Endkunden mit Marge.", korrekt: false, erklaerung: "Enpal vermietet Hardware, der Windpark speist ins Netz ein — der gemeinsame Nenner ist die Finanzierungslogik, nicht der Vertrieb." },
        { text: "Beide sind reine Merchant-Modelle ohne jede Absicherung.", korrekt: false, erklaerung: "Das Gegenteil — beide beruhen gerade auf langfristiger Cashflow-Absicherung, die die Finanzierung erst ermöglicht." }
      ]
    }
  },

  // ── U6-CPO ──────────────────────────────────────────────────────
  "Q-CPO-WE1": {
    id: "Q-CPO-WE1", unitId: "U6-CPO", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-EMOB-CPO-01"],
    data: {
      szenario: "Eine HPC-Ladesäule läuft bei 6% Auslastung. Wie viele Stunden pro Tag (24h) wird sie im Schnitt tatsächlich genutzt? (Ergebnis in Stunden, gerundet auf eine Nachkommastelle)",
      eingabefelder: [{ key: "stunden", label: "Nutzung pro Tag", einheit: "h" }],
      loesung: { stunden: { wert: 1.44, toleranz: 0.2 } },
      rechenweg: ["Nutzung = 6% × 24 h = 0,06 × 24 = 1,44 h.", "Die Säule steht also rund 22,5 Stunden am Tag ungenutzt, während Capex und Netzanschluss durchlaufen.", "Erst ab ~20% Auslastung (~4,8 h/Tag) kippt die Rechnung in den Breakeven — das erklärt den Roaming-Zwang."]
    }
  },
  "Q-CPO-WE2": {
    id: "Q-CPO-WE2", unitId: "U6-CPO", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-EMOB-CPO-01"],
    data: {
      frage: "Warum integriert ein CPO seine Säulen freiwillig in fremde eMSP-Apps (Roaming)?",
      optionen: [
        { text: "Der Roaming-Strom füllt die Auslastungslücke, die mit reinen Eigenkunden nie zu schließen wäre — passiver Umsatz ohne eigene Kundenpflege.", korrekt: true, erklaerung: "Bei 6–12% Auslastung ist jede zusätzliche Ladung wertvoll; Roaming bringt Volumen ohne Marketingaufwand." },
        { text: "Weil er gesetzlich verpflichtet ist, alle fremden Apps zuzulassen.", korrekt: false, erklaerung: "Es gibt keine solche Pflicht — Roaming ist eine wirtschaftliche Entscheidung zur Auslastungssteigerung." },
        { text: "Weil Roaming-Kunden höhere Preise zahlen als Direktkunden.", korrekt: false, erklaerung: "Beim Roaming erhält der CPO nur einen Nettobetrag — der Vorteil ist das Zusatzvolumen, nicht ein höherer Preis." }
      ]
    }
  },
  "Q-CPO-R1": {
    id: "Q-CPO-R1", unitId: "U6-CPO", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-EMOB-CPO-01"],
    data: {
      frage: "Ab welcher Auslastung erreicht eine öffentliche Ladesäule typischerweise den Breakeven — und wo liegt sie 2024?",
      optionen: [
        { text: "Breakeven ab ~20% Auslastung; der Durchschnitt liegt 2024 aber erst bei 6–12%.", korrekt: true, erklaerung: "Diese Lücke ist das Kernproblem der CPO-Wirtschaftlichkeit und der Grund für das Hühner-Ei-Rennen mit dem EV-Hochlauf." },
        { text: "Breakeven ab 5%; die meisten Säulen sind längst profitabel.", korrekt: false, erklaerung: "Der Breakeven liegt deutlich höher (~20%), und die meisten Säulen sind bei 6–12% noch nicht profitabel." },
        { text: "Breakeven ab 60%; kaum eine Säule erreicht das je.", korrekt: false, erklaerung: "60% wäre unrealistisch hoch — der Breakeven liegt bei ~20%, erreichbar mit wachsendem EV-Bestand." }
      ]
    }
  },
  "Q-CPO-R2": {
    id: "Q-CPO-R2", unitId: "U6-CPO", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-EMOB-CPO-01"],
    data: {
      text: "Eine HPC-Ladesäule kostet inkl. Netzanschluss {{a}} € — der {{b}} kann über 50% des Investments ausmachen. Roaming läuft über das Protokoll {{c}}.",
      luecken: {
        a: { loesungen: ["30.000–60.000", "30000-60000", "30.000 bis 60.000"], erklaerung: "30.000–60.000 € für eine HPC-Säule (150–350 kW)." },
        b: { loesungen: ["Netzanschluss"], erklaerung: "Der Netzanschluss ist oft der größte Einzelkostenblock." },
        c: { loesungen: ["OCPI"], erklaerung: "OCPI (Open Charge Point Interface) ermöglicht das eMSP-Roaming." }
      },
      distraktoren: ["3.000", "OCPP"]
    }
  },
  "Q-CPO-R3": {
    id: "Q-CPO-R3", unitId: "U6-CPO", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-EMOB-CPO-01"],
    data: {
      frage: "Warum ist die asset-schwere CPO-Position gegen asset-leichte Angreifer strukturell schwach?",
      optionen: [
        { text: "eMSP-/Roaming-Aggregatoren übernehmen die margenstärkste Endkundenbeziehung und den App-Layer ohne eigenes Infrastruktur-Capex; OEMs (Tesla, VW/Elli) bauen parallel eigene Netze — der CPO kann zum reinen Hardware-Betreiber degradiert werden.", korrekt: true, erklaerung: "Wer Capex und Auslastungsrisiko trägt, aber nicht die Kundenschnittstelle hält, verliert die Marge an die Aggregatoren darüber." },
        { text: "Weil CPOs gesetzlich keine eigenen Apps betreiben dürfen.", korrekt: false, erklaerung: "CPOs dürfen eigene Apps betreiben (EnBW mobility+) — die Schwäche ist wirtschaftlich (Roaming-Aggregatoren, OEM-Netze), nicht rechtlich." },
        { text: "Weil öffentliche Ladesäulen technisch schnell veralten.", korrekt: false, erklaerung: "Der Angriff kommt über die Kundenschnittstelle und parallele Netze, nicht primär über technische Veralterung." }
      ]
    }
  },
  "Q-CPO-R4": {
    id: "Q-CPO-R4", unitId: "U6-CPO", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-EMOB-CPO-01"],
    data: {
      steckbriefId: "L3-EMOB-CPO-01",
      erklaerungenProDimension: {
        regulierung: "AFID/AFIR schreiben Ausbau vor, aber kein Erlösschutz — mittel.",
        skalierbarkeit: "Jeder Standort braucht eigenes Capex und Netzanschluss — mittel.",
        marktrisiko: "Auslastungsrisiko (6–12% vs. 20% Breakeven) belastet — mittel.",
        digitalisierung: "App, Roaming (OCPI), Abrechnung sind digital — relativ hoch.",
        wettbewerb: "200+ CPOs, OEM-Netze, eMSP-Aggregatoren — hoch.",
        nachhaltigkeit: "Ermöglicht E-Mobilität, Enabler der Verkehrswende — hoch."
      }
    }
  },
  "Q-CPO-T1": {
    id: "Q-CPO-T1", unitId: "U6-CPO", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-EMOB-CPO-01", "L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Der CPO verliert Marge an die App-Schicht (eMSP), Octopus (Modul 4) verdient gerade AN der Software-Schicht (Kraken). Was lehrt der Vergleich?",
      optionen: [
        { text: "Wert und Marge wandern zur Software-/Kundenschnittstelle, weg von der physischen Infrastruktur — wer nur die Hardware betreibt (Säule, Kraftwerk), wird zum austauschbaren Backend derer, die die Schnittstelle kontrollieren.", korrekt: true, erklaerung: "Dasselbe Muster wie in Modul 5 (Kampf um die Flex-Schnittstelle): Die Plattform-/App-Ebene ist der strukturelle Gewinner." },
        { text: "Physische Infrastruktur ist immer profitabler als Software.", korrekt: false, erklaerung: "Das Gegenteil zeigen beide Fälle — die asset-leichte Software-/App-Schicht gewinnt die Marge." },
        { text: "Beide Modelle sind gescheitert.", korrekt: false, erklaerung: "Keins ist gescheitert — die Lehre ist die Verschiebung der Marge zur Schnittstelle, nicht ein Scheitern." }
      ]
    }
  },

  // ── U6-THG ──────────────────────────────────────────────────────
  "Q-THG-WE1": {
    id: "Q-THG-WE1", unitId: "U6-THG", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-EMOB-THG-01"],
    data: {
      frage: "Was genau verkauft der Pooler (carbonify) an das Mineralölunternehmen?",
      optionen: [
        { text: "Zertifizierte THG-Minderungen: Die (pauschale) Strommenge des E-Autos wird beim UBA als CO₂-Einsparung anerkannt und gebündelt an quotenverpflichtete Firmen verkauft.", korrekt: true, erklaerung: "Der Pooler handelt mit dem Nachweis vermiedener Emissionen — ein rein regulatorisch geschaffenes Gut." },
        { text: "Den tatsächlichen Ladestrom des E-Autos physisch.", korrekt: false, erklaerung: "Es wird kein physischer Strom verkauft, sondern das Zertifikat über die anerkannte CO₂-Minderung." },
        { text: "Eine Beteiligung am E-Auto des Halters.", korrekt: false, erklaerung: "Der Halter behält sein Auto — verkauft wird nur der zertifizierte Umweltvorteil seiner E-Mobilität." }
      ]
    }
  },
  "Q-THG-WE2": {
    id: "Q-THG-WE2", unitId: "U6-THG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-EMOB-THG-01"],
    data: {
      frage: "Warum ist die Zahlungsbereitschaft der Mineralölunternehmen 'regulatorisch nach oben verankert'?",
      optionen: [
        { text: "Ohne genügend zugekaufte Zertifikate müssten sie eine Pönale von 600 €/t CO₂ zahlen — dieser Strafpreis bildet die Obergrenze dessen, was sie für Zertifikate zu zahlen bereit sind.", korrekt: true, erklaerung: "Die Pönale ist der Anker: Zertifikate sind attraktiv, solange sie billiger als die Strafe sind." },
        { text: "Weil der Staat den Zertifikatspreis gesetzlich festsetzt.", korrekt: false, erklaerung: "Der Preis ist nicht festgesetzt, er schwankt stark — nur die Pönale bildet eine obere Orientierung." },
        { text: "Weil Mineralölfirmen die Prämie steuerlich voll absetzen können.", korrekt: false, erklaerung: "Der Anker ist die Vermeidung der 600-€-Pönale, nicht ein Steuereffekt." }
      ]
    }
  },
  "Q-THG-R1": {
    id: "Q-THG-R1", unitId: "U6-THG", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-EMOB-THG-01"],
    data: {
      frage: "Auf welcher gesetzlichen Grundlage beruht die THG-Quote?",
      optionen: [
        { text: "§37a BImSchG — er verpflichtet Inverkehrbringer fossiler Kraftstoffe, ihre Treibhausgasintensität jährlich steigend zu mindern.", korrekt: true, erklaerung: "Die THG-Quote ist ein rein regulatorisch geschaffener Markt zwischen E-Mobilität und Mineralölwirtschaft." },
        { text: "Dem EEG §21 (Einspeisevergütung).", korrekt: false, erklaerung: "Das EEG betrifft Strom-Einspeisung, nicht die Kraftstoff-Treibhausgasminderung — das ist das BImSchG." },
        { text: "Der ARegV (Anreizregulierung Netze).", korrekt: false, erklaerung: "Die ARegV regelt Netzentgelte, nicht die THG-Quote." }
      ]
    }
  },
  "Q-THG-R2": {
    id: "Q-THG-R2", unitId: "U6-THG", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-EMOB-THG-01"],
    data: {
      text: "E-Auto-Halter lassen ihre pauschale Strommenge beim {{a}} zertifizieren, meist über {{b}}-Dienstleister. Die Prämie lag 2026 bei {{c}} €, nach einem Absturz auf unter 100 € in 2023/24.",
      luecken: {
        a: { loesungen: ["UBA", "Umweltbundesamt"], erklaerung: "Das Umweltbundesamt (UBA) zertifiziert die THG-Minderung." },
        b: { loesungen: ["Pooling", "Pool"], erklaerung: "Pooling-Dienstleister bündeln tausende Fahrzeugscheine." },
        c: { loesungen: ["300–450", "300-450", "300 bis 450"], erklaerung: "300–450 € (2026), stark schwankend je nach Quotenpreis und Modell." }
      },
      distraktoren: ["BNetzA", "1.000–2.000"]
    }
  },
  "Q-THG-R3": {
    id: "Q-THG-R3", unitId: "U6-THG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-EMOB-THG-01"],
    data: {
      frage: "Warum beschreibt der Steckbrief das THG-Geschäft als 'weniger Vermittlung als Rohstoffhandel mit Jahreszyklus'?",
      optionen: [
        { text: "Der Pooler kauft beim Fahrzeughalter zum Fixpreis (Garantieprämie) und verkauft in einen politisch gemachten, volatilen Markt — wer 2023 auf Höchstpreisbasis garantierte, verkaufte später in einen um zwei Drittel eingebrochenen Markt.", korrekt: true, erklaerung: "Garantiemodelle verlagern das Preisrisiko zum Pooler — genau wie bei einem Rohstoffhändler mit offener Position." },
        { text: "Weil der Pooler physische Rohstoffe (Lithium, Kupfer) handelt.", korrekt: false, erklaerung: "Es geht um Zertifikate, nicht um physische Rohstoffe — die Analogie liegt im Preisrisiko der offenen Position, nicht im Handelsgut." },
        { text: "Weil die Prämie täglich wie ein Aktienkurs schwankt.", korrekt: false, erklaerung: "Der Zyklus ist jährlich (UBA-Zertifizierung pro Jahr), nicht täglich — das Risiko ist die Preisentwicklung über Monate." }
      ]
    }
  },
  "Q-THG-R4": {
    id: "Q-THG-R4", unitId: "U6-THG", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-EMOB-THG-01"],
    data: {
      steckbriefId: "L3-EMOB-THG-01",
      erklaerungenProDimension: {
        regulierung: "Zu 100% regulatorisch geschaffen (§37a BImSchG) — höchste Stufe, aber maximal politikabhängig.",
        skalierbarkeit: "Digitaler UBA-Prozess, jeder Fahrzeugschein grenzkostenarm — hoch.",
        marktrisiko: "Extrem volatiler, politisch getriebener Quotenpreis (Absturz 2023/24) — hoch.",
        digitalisierung: "Self-Service-Upload und Abwicklung sind digital — relativ hoch.",
        wettbewerb: "Billiger Markteintritt, viele Pooler, Vergleichsportale — hoch.",
        nachhaltigkeit: "Fördert E-Mobilität finanziell, aber indirekt und mitnahmeanfällig — mittel."
      }
    }
  },
  "Q-THG-T1": {
    id: "Q-THG-T1", unitId: "U6-THG", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-EMOB-THG-01", "L3-ERZ-EE-01"],
    data: {
      frage: "Die THG-Quote und die EEG-Marktprämie (Modul 2) sind beide staatlich geschaffene Erlösquellen. Was unterscheidet ihr Risikoprofil fundamental?",
      optionen: [
        { text: "Die EEG-Marktprämie sichert dem Anlagenbetreiber einen anzulegenden Wert über 20 Jahre (planbar); die THG-Prämie hängt an einem jährlich neu volatilen, politisch getriebenen Quotenpreis ohne langfristige Garantie.", korrekt: true, erklaerung: "Beide sind regulatorisch, aber die eine ist langfristig gesichert, die andere kurzfristig-spekulativ — deshalb ist THG das viel wackeligere Geschäft." },
        { text: "Beide sind gleich sicher, weil beide vom Staat kommen.", korrekt: false, erklaerung: "Staatlicher Ursprung heißt nicht gleiche Sicherheit — die 20-Jahres-Garantie des AW unterscheidet sich fundamental vom volatilen Quotenpreis." },
        { text: "Die THG-Quote ist über 20 Jahre garantiert, die EEG-Prämie nur jährlich.", korrekt: false, erklaerung: "Genau umgekehrt — der EEG-AW ist 20 Jahre gesichert, die THG-Prämie schwankt jährlich stark." }
      ]
    }
  }

});

// ════════════════════════════════════════════════════════════════════
// MODUL 1 — DAS SPIELFELD
// ════════════════════════════════════════════════════════════════════
Object.assign(LERN_QUIZ_ITEMS, {

  // ── U1-BOERSE ───────────────────────────────────────────────────
  "Q-BOERSE-WE1": {
    id: "Q-BOERSE-WE1", unitId: "U1-BOERSE", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-HANDEL-BOERSE-01"],
    data: {
      frage: "Wie entsteht in der Day-Ahead-Auktion der Strompreis für eine bestimmte Stunde?",
      optionen: [
        { text: "Ein Algorithmus ermittelt den markträumenden Preis, bei dem sich Angebot und Nachfrage der Gebote decken.", korrekt: true, erklaerung: "Angebot und Nachfrage treffen sich in einer einheitlichen Auktion — daraus ergibt sich ein Preis pro Stunde, der für alle gilt." },
        { text: "Die Börse legt den Preis nach eigenen Kostenkalkulationen fest und schlägt eine regulierte Marge auf die Erzeugungskosten auf.", korrekt: false, erklaerung: "Die Börse setzt keinen Preis — sie führt nur die Gebote der Teilnehmer zusammen; der Preis ist ein Marktergebnis." },
        { text: "Die BNetzA genehmigt jeden Stundenpreis im Voraus.", korrekt: false, erklaerung: "Börsenpreise sind nicht genehmigungspflichtig — sie entstehen frei im Auktionsverfahren; die BNetzA überwacht nur die Marktintegrität." }
      ]
    }
  },
  "Q-BOERSE-WE2": {
    id: "Q-BOERSE-WE2", unitId: "U1-BOERSE", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-HANDEL-BOERSE-01"],
    data: {
      frage: "Warum ist das Geschäft der Börse unabhängig von der Höhe des Strompreises?",
      optionen: [
        { text: "Sie verdient an einer festen Transaktionsgebühr je gehandelter MWh, unabhängig von der Höhe des Strompreises.", korrekt: true, erklaerung: "Reine Infrastrukturrolle: Die Börse kassiert Volumen-basiert, trägt aber selbst kein Preisrisiko." },
        { text: "Weil sie den Strom günstig einkauft und teuer weiterverkauft.", korrekt: false, erklaerung: "Die Börse handelt nicht auf eigene Rechnung — sie vermittelt nur und nimmt eine Gebühr, ohne selbst zu kaufen/verkaufen." },
        { text: "Weil der Staat ihr einen festen Gewinn garantiert.", korrekt: false, erklaerung: "Es gibt keine staatliche Gewinngarantie — die Stabilität kommt aus dem gebührenbasierten Volumengeschäft." }
      ]
    }
  },
  "Q-BOERSE-R1": {
    id: "Q-BOERSE-R1", unitId: "U1-BOERSE", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-HANDEL-BOERSE-01"],
    data: {
      frage: "Was handelt EPEX SPOT, was EEX?",
      optionen: [
        { text: "EPEX SPOT handelt kurzfristig (Day-Ahead, Intraday), EEX die Termingeschäfte (Futures, CO₂).", korrekt: true, erklaerung: "Spot vs. Termin ist die Grundaufteilung des Börsenhandels — kurzfristige Lieferung vs. Absicherung in die Zukunft." },
        { text: "EPEX SPOT nur Gas, EEX nur Strom.", korrekt: false, erklaerung: "Die Trennung verläuft nicht nach Energieträger, sondern nach Fristigkeit (Spot vs. Termin)." },
        { text: "EPEX SPOT für Privatkunden, EEX für Industrie.", korrekt: false, erklaerung: "Börsen handeln nicht mit Privatkunden — beide bedienen professionelle Marktteilnehmer, aufgeteilt nach Spot- und Terminhandel." }
      ]
    }
  },
  "Q-BOERSE-R2": {
    id: "Q-BOERSE-R2", unitId: "U1-BOERSE", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-HANDEL-BOERSE-01"],
    data: {
      text: "Die Börse verdient an einer {{a}} von 0,03–0,15 €/MWh und trägt selbst {{b}}. Ihr wichtigster Schutz vor Konkurrenz ist der {{c}}: Liquidität zieht Liquidität.",
      luecken: {
        a: { loesungen: ["Transaktionsgebühr", "Gebühr"], erklaerung: "Die volumenbasierte Transaktionsgebühr ist die Erlösquelle." },
        b: { loesungen: ["kein Marktpreisrisiko", "kein Preisrisiko", "kein Risiko"], erklaerung: "Als reine Infrastruktur trägt die Börse kein eigenes Preisrisiko." },
        c: { loesungen: ["Netzwerkeffekt"], erklaerung: "Der Netzwerkeffekt macht eine liquide Börse für Newcomer nahezu uneinholbar." }
      },
      distraktoren: ["Handelsmarge", "volles Preisrisiko"]
    }
  },
  "Q-BOERSE-R3": {
    id: "Q-BOERSE-R3", unitId: "U1-BOERSE", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-HANDEL-BOERSE-01"],
    data: {
      frage: "Warum wächst das Handelsvolumen an der Börse strukturell mit dem EE-Anteil?",
      optionen: [
        { text: "Volatile Wind-/Solareinspeisung erzeugt mehr kurzfristigen Ausgleichsbedarf, also mehr Intraday-Handel.", korrekt: true, erklaerung: "Mehr EE = mehr Prognoseunsicherheit = mehr kurzfristiger Handel = mehr Transaktionen für die Börse." },
        { text: "Weil erneuerbarer Strom laut EEG gesetzlich verpflichtend über die Strombörse verkauft und dort vorrangig vergütet werden muss.", korrekt: false, erklaerung: "Es gibt keine Börsenpflicht für EE-Strom — das Volumen wächst durch den realen Ausgleichsbedarf, nicht durch Zwang." },
        { text: "Weil die Börse bei EE-Strom höhere Gebühren verlangt.", korrekt: false, erklaerung: "Die Gebühr hängt nicht an der Erzeugungsart — es ist schlicht das höhere Transaktionsvolumen, das den Umsatz treibt." }
      ]
    }
  },
  "Q-BOERSE-R4": {
    id: "Q-BOERSE-R4", unitId: "U1-BOERSE", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-HANDEL-BOERSE-01"],
    data: {
      steckbriefId: "L3-HANDEL-BOERSE-01",
      erklaerungenProDimension: {
        regulierung: "Reguliert (MiFID II, REMIT), aber kein Erlösschutz-Monopol — mittel.",
        skalierbarkeit: "Plattform-Netzwerkeffekt, Grenzkosten pro Transaktion nahe null — höchste Stufe.",
        marktrisiko: "Reine Infrastrukturrolle ohne Preis-Exposure — niedrigste Stufe.",
        digitalisierung: "Vollautomatischer, latenzkritischer Handel — höchste Stufe.",
        wettbewerb: "De-facto-Dominanz durch Liquidität, wenig direkter Wettbewerb — niedrig.",
        nachhaltigkeit: "Neutrale Marktinfrastruktur, kein direkter Energiewende-Beitrag — niedrig."
      }
    }
  },
  "Q-BOERSE-T1": {
    id: "Q-BOERSE-T1", unitId: "U1-BOERSE", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-HANDEL-BOERSE-01", "L3-VERGL-B2C-01"],
    data: {
      frage: "Die Strombörse und ein Tarifvergleichsportal (Modul 4) sind beide Plattformen mit Netzwerkeffekt. Was unterscheidet ihre Neutralität fundamental?",
      optionen: [
        { text: "Die Börse bildet den Preis neutral, das Vergleichsportal optimiert auf provisionsträchtige Vermittlung.", korrekt: true, erklaerung: "Beide sind Plattformen, aber die Börse verdient völlig ergebnisneutral an jeder Transaktion, während das Portal ein Anreizproblem hat (CPA statt bester Preis)." },
        { text: "Beide manipulieren den Preis zu ihren Gunsten.", korrekt: false, erklaerung: "Die Börse manipuliert nicht — sie ermittelt den markträumenden Preis neutral; nur das Portal hat einen Provisionsanreiz." },
        { text: "Es gibt keinen Unterschied: Beide sind reine Vermittler ohne Eigeninteresse, die nur eine feste Provision je Abschluss erhalten.", korrekt: false, erklaerung: "Das Portal hat sehr wohl ein Eigeninteresse (Provision) — genau das unterscheidet es von der ergebnisneutralen Börse." }
      ]
    }
  },

  // ── U1-PROP ─────────────────────────────────────────────────────
  "Q-PROP-WE1": {
    id: "Q-PROP-WE1", unitId: "U1-PROP", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-HANDEL-PORTFOLIO-01"],
    data: {
      frage: "Der Trader erwartet mehr Wind als der Markt. Was ist die logische Position?",
      optionen: [
        { text: "Heute auf Termin verkaufen und morgen günstiger zurückkaufen, wenn der Markt den fallenden Preis einpreist.", korrekt: true, erklaerung: "Mehr Wind → niedrigerer Preis erwartet → hoch verkaufen, tief zurückkaufen. Die Differenz ist der Gewinn." },
        { text: "Sofort möglichst viel Strom auf Vorrat kaufen, weil viel Wind im Netz den Börsenpreis erfahrungsgemäß nach oben treibt.", korrekt: false, erklaerung: "Genau falsch herum: Viel Windangebot senkt den Preis — man will verkaufen, nicht kaufen." },
        { text: "Gar nichts tun, weil Wetter nicht handelbar ist.", korrekt: false, erklaerung: "Wetter ist im Stromhandel gerade der zentrale Werttreiber — bessere Prognosen sind die Alpha-Quelle." }
      ]
    }
  },
  "Q-PROP-WE2": {
    id: "Q-PROP-WE2", unitId: "U1-PROP", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-HANDEL-PORTFOLIO-01"],
    data: {
      frage: "Wozu dient das VAR-Limit (Value at Risk) beim Prop Trading?",
      optionen: [
        { text: "Es begrenzt den möglichen Verlust — der Trader darf nur so viel Risiko eingehen, wie das Budget erlaubt.", korrekt: true, erklaerung: "Risikodisziplin ist überlebenswichtig: Auch die beste Prognose liegt manchmal falsch, das VAR-Limit verhindert existenzbedrohende Verluste." },
        { text: "Es garantiert dem Trader einen Mindestgewinn.", korrekt: false, erklaerung: "VAR garantiert keinen Gewinn — es begrenzt den möglichen Verlust, das ist etwas völlig anderes." },
        { text: "Es legt fest, wie hoch die Handelsgebühr an die Börse ist.", korrekt: false, erklaerung: "VAR ist ein Risikomaß, keine Gebührenregel — es steuert die erlaubte Positionsgröße." }
      ]
    }
  },
  "Q-PROP-R1": {
    id: "Q-PROP-R1", unitId: "U1-PROP", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-HANDEL-PORTFOLIO-01"],
    data: {
      frage: "Was ist der Clean Spark Spread?",
      optionen: [
        { text: "Die Differenz zwischen Strompreis und Gasverstromungskosten (Gaspreis + CO₂) — die Gaskraftwerks-Marge.", korrekt: true, erklaerung: "Der Clean Spark Spread misst, ob sich Gasverstromung lohnt — Kern vieler Spread-Trading-Strategien." },
        { text: "Die Gebühr, die die Börse pro Transaktion erhebt.", korrekt: false, erklaerung: "Das ist die Transaktionsgebühr — der Clean Spark Spread ist die Erzeugungsmarge Strom vs. Gas+CO₂." },
        { text: "Der Unterschied zwischen Day-Ahead- und Intraday-Preis.", korrekt: false, erklaerung: "Das wäre ein zeitlicher Spread — der Clean Spark Spread bezieht sich auf Strom vs. Gasverstromungskosten." }
      ]
    }
  },
  "Q-PROP-R2": {
    id: "Q-PROP-R2", unitId: "U1-PROP", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-HANDEL-PORTFOLIO-01"],
    data: {
      text: "Die einzige nachhaltige Gewinnquelle im Prop Trading ist ein {{a}} — z.B. ein besseres {{b}}. Alle Positionen unterliegen der {{c}}-Meldepflicht an die ACER.",
      luecken: {
        a: { loesungen: ["Informationsvorsprung", "Vorsprung"], erklaerung: "Nur wer mehr oder schneller weiß, verdient dauerhaft — sonst preist der Markt alles ein." },
        b: { loesungen: ["Wettermodell", "Prognosemodell", "Prognose"], erklaerung: "EE-Prognosemodelle sind die wichtigste Alpha-Quelle im Stromhandel." },
        c: { loesungen: ["REMIT"], erklaerung: "REMIT verpflichtet zur Meldung von Handelsdaten an die europäische Regulierungsagentur ACER." }
      },
      distraktoren: ["Glücksfaktor", "MaBiS"]
    }
  },
  "Q-PROP-R3": {
    id: "Q-PROP-R3", unitId: "U1-PROP", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-HANDEL-PORTFOLIO-01"],
    data: {
      frage: "Warum werden Informationsvorsprünge im Energiehandel 'systematisch wegkommoditisiert'?",
      optionen: [
        { text: "ML-Prognosen, Satellitendaten und Latenz sind käuflich — sobald ein Vorsprung verfügbar ist, verschwindet die Marge.", korrekt: true, erklaerung: "Der Markt lernt: Jeder verkäufliche Vorteil wird zum Standard, weshalb Desks ständig den nächsten Vorsprung suchen müssen." },
        { text: "Weil die BNetzA jegliche Informationsvorsprünge im Stromhandel gesetzlich verbietet und Verstöße mit Lizenzentzug ahndet.", korrekt: false, erklaerung: "Legale Analysevorteile sind erlaubt (nur Insiderhandel ist verboten) — sie verschwinden ökonomisch durch Verbreitung, nicht per Verbot." },
        { text: "Weil Trader ihre Modelle offenlegen müssen.", korrekt: false, erklaerung: "Modelle sind Geschäftsgeheimnisse — der Vorsprung erodiert durch käufliche Daten/Tools, nicht durch Offenlegungspflicht." }
      ]
    }
  },
  "Q-PROP-R4": {
    id: "Q-PROP-R4", unitId: "U1-PROP", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-HANDEL-PORTFOLIO-01", "L3-HANDEL-BOERSE-01"],
    data: { steckbriefId: "L3-HANDEL-PORTFOLIO-01", distraktorSteckbriefId: "L3-HANDEL-BOERSE-01" }
  },
  "Q-PROP-T1": {
    id: "Q-PROP-T1", unitId: "U1-PROP", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-HANDEL-PORTFOLIO-01", "L3-AGG-VPP-01"],
    data: {
      frage: "Prop Trading und das EE-Direktvermarktungs-VPP (Modul 5) leben beide von Prognosegüte. Was unterscheidet ihr Geschäftsmodell dennoch grundlegend?",
      optionen: [
        { text: "Der Prop-Trader trägt das Marktrisiko selbst (Merchant), das VPP verdient risikoarm eine Fee für fremde Anlagen.", korrekt: true, erklaerung: "Prognose ist die gemeinsame Kernkompetenz; der Unterschied liegt darin, ob man das Risiko selbst trägt (Prop) oder als Dienstleister vermeidet (VPP)." },
        { text: "Beide sind reine Dienstleister ohne eigenes Preisrisiko, die ihre Erlöse allein aus festen Vermittlungsgebühren beziehen.", korrekt: false, erklaerung: "Der Prop-Trader trägt sehr wohl volles Marktrisiko auf dem Eigenbuch — nur das VPP ist der risikoarme Dienstleister." },
        { text: "Beide handeln ausschließlich mit CO₂-Zertifikaten.", korrekt: false, erklaerung: "Prop Trading und VPP handeln primär Strom/Prognose; CO₂ ist ein separater Markt (HKN/EU ETS)." }
      ]
    }
  },

  // ── U1-ZERTIFIKATE ──────────────────────────────────────────────
  "Q-ZERTIFIKATE-WE1": {
    id: "Q-ZERTIFIKATE-WE1", unitId: "U1-ZERTIFIKATE", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-HANDEL-ZERTIF-01"],
    data: {
      szenario: "Ein Händler kauft Massen-HKN für 0,30 €/MWh ein und verkauft Premium-HKN (Zusätzlichkeit) für 4,50 €/MWh. Wie groß ist die Marge je MWh in Euro?",
      eingabefelder: [{ key: "marge", label: "Marge", einheit: "€/MWh" }],
      loesung: { marge: { wert: 4.2, toleranz: 0.3 } },
      rechenweg: ["Marge = Verkaufspreis − Einkaufspreis = 4,50 − 0,30 = 4,20 €/MWh.", "Der Preisunterschied entsteht rein durch die Zusätzlichkeit: Massen-HKN aus Altanlagen sind im Überangebot, Premium-HKN aus Neuanlagen sind knapp und CSRD-getrieben gefragt.", "Genau diese Spanne zwischen billigem Alt-HKN und teurem Neu-HKN ist das Handelsgeschäft."]
    }
  },
  "Q-ZERTIFIKATE-WE2": {
    id: "Q-ZERTIFIKATE-WE2", unitId: "U1-ZERTIFIKATE", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-HANDEL-ZERTIF-01"],
    data: {
      frage: "Warum kostet ein Premium-HKN aus einer neuen Solaranlage ein Vielfaches eines Massen-HKN?",
      optionen: [
        { text: "Es erfüllt die Zusätzlichkeit: Der Kauf hat neue EE-Kapazität mitfinanziert — anders als ein HKN aus einer Altanlage.", korrekt: true, erklaerung: "Zusätzlichkeit ist der Werttreiber: Nur wenn durch die Zahlung neue Erzeugung entsteht, ist die Klimawirkung echt." },
        { text: "Weil Solarstrom physikalisch hochwertiger als Wasserkraft ist und daher am Markt einen höheren Herkunftsnachweis-Preis erzielt.", korrekt: false, erklaerung: "Physikalisch ist Strom Strom — der Preisunterschied kommt aus der Zusätzlichkeit des Zertifikats, nicht aus der Stromqualität." },
        { text: "Weil Premium-HKN gesetzlich vorgeschrieben sind.", korrekt: false, erklaerung: "Sie sind nicht vorgeschrieben — die höhere Zahlungsbereitschaft entsteht durch CSRD-Druck und den Wunsch nach echter Zusätzlichkeit." }
      ]
    }
  },
  "Q-ZERTIFIKATE-R1": {
    id: "Q-ZERTIFIKATE-R1", unitId: "U1-ZERTIFIKATE", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-HANDEL-ZERTIF-01"],
    data: {
      frage: "Was ist der EU ETS — im Gegensatz zum HKN-Markt?",
      optionen: [
        { text: "Ein Pflichtmarkt: Erzeuger und Industrie müssen für jede Tonne CO₂ ein Zertifikat kaufen — HKN sind dagegen freiwillig.", korrekt: true, erklaerung: "Pflicht vs. freiwillig, Emissionen bepreisen vs. Herkunft nachweisen — zwei grundverschiedene Zertifikatemärkte." },
        { text: "Ein freiwilliges System zur Kennzeichnung von Ökostrom.", korrekt: false, erklaerung: "Das beschreibt HKN — der EU ETS ist der verpflichtende CO₂-Emissionshandel." },
        { text: "Eine staatliche Förderung für Solaranlagen.", korrekt: false, erklaerung: "Der EU ETS ist ein Emissionshandelssystem, keine Förderung — er verteuert CO₂-intensive Erzeugung." }
      ]
    }
  },
  "Q-ZERTIFIKATE-R2": {
    id: "Q-ZERTIFIKATE-R2", unitId: "U1-ZERTIFIKATE", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-HANDEL-ZERTIF-01"],
    data: {
      text: "{{a}} bescheinigen die grüne Herkunft von 1 MWh und werden getrennt vom physischen Strom gehandelt. Der Preistreiber ist die {{b}}. Der {{c}} dagegen verpflichtet Erzeuger, für jede Tonne CO₂ ein Zertifikat zu kaufen.",
      luecken: {
        a: { loesungen: ["HKN", "Herkunftsnachweise", "Herkunftsnachweis"], erklaerung: "Herkunftsnachweise (HKN/GO) laufen im separaten RECS-System." },
        b: { loesungen: ["Zusätzlichkeit"], erklaerung: "Zusätzlichkeit (Additionality) macht den Preisunterschied zwischen Alt- und Neu-HKN." },
        c: { loesungen: ["EU ETS", "Emissionshandel"], erklaerung: "Der EU-Emissionshandel bepreist CO₂ als Pflichtmarkt." }
      },
      distraktoren: ["Netzentgelte", "Regionalität"]
    }
  },
  "Q-ZERTIFIKATE-R3": {
    id: "Q-ZERTIFIKATE-R3", unitId: "U1-ZERTIFIKATE", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-HANDEL-ZERTIF-01"],
    data: {
      frage: "Was ist '24/7 CFE' (Carbon-Free Energy) und warum verändert es den HKN-Markt?",
      optionen: [
        { text: "Stündliches Matching von Verbrauch und grüner Erzeugung statt Jahresbilanz — es entwertet die pauschale Jahres-HKN-Logik.", korrekt: true, erklaerung: "24/7 CFE erhöht den Anspruch von 'grün übers Jahr' auf 'grün in jeder Stunde' — ein Technologie-Angriff auf den klassischen HKN-Handel." },
        { text: "Eine gesetzliche Vorschrift, dass konventionelle Kraftwerke zur Versorgungssicherheit rund um die Uhr im Dauerbetrieb laufen müssen.", korrekt: false, erklaerung: "CFE betrifft das zeitgleiche Matching von Verbrauch und grüner Erzeugung, keine Betriebspflicht für Kraftwerke." },
        { text: "Ein Rabattprogramm der Börse für Nachtstrom.", korrekt: false, erklaerung: "CFE ist ein Herkunftsnachweis-Standard (stündliche Zusätzlichkeit), kein Börsenrabatt." }
      ]
    }
  },
  "Q-ZERTIFIKATE-R4": {
    id: "Q-ZERTIFIKATE-R4", unitId: "U1-ZERTIFIKATE", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-HANDEL-ZERTIF-01"],
    data: {
      steckbriefId: "L3-HANDEL-ZERTIF-01",
      erklaerungenProDimension: {
        regulierung: "Rahmen durch RED III / EU ETS, aber der Handel selbst ist wettbewerblich — mittel.",
        skalierbarkeit: "Rein digitaler Zertifikatehandel, hoch skalierbar — höchste Stufe.",
        marktrisiko: "HKN- und EUA-Preise schwanken (Überangebot, CO₂-Preis) — mittel.",
        digitalisierung: "Registerbasiert, zunehmend granular (24/7) — mittel-hoch.",
        wettbewerb: "Massen-HKN-Geschäft ist margenarm und leicht angreifbar — mittel.",
        nachhaltigkeit: "Premium-Zusätzlichkeit finanziert echte EE, Massen-HKN kaum — mittel-hoch."
      }
    }
  },
  "Q-ZERTIFIKATE-T1": {
    id: "Q-ZERTIFIKATE-T1", unitId: "U1-ZERTIFIKATE", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-HANDEL-ZERTIF-01", "L3-VERTRIEB-NEO-02"],
    data: {
      frage: "Der Premium-HKN-Markt und das Fünf-Grad-Modell (Modul 4) drehen sich um denselben Begriff. Welchen — und warum ist er der gemeinsame Angriff auf Greenwashing?",
      optionen: [
        { text: "Zusätzlichkeit: Nur eine Zahlung, die tatsächlich neue Klimawirkung auslöst, hat echten Wert — nicht das billige Altanlagen-HKN.", korrekt: true, erklaerung: "Zusätzlichkeit ist der rote Faden gegen Greenwashing — vom B2B-Zertifikatehandel bis zum B2C-Ökostromtarif." },
        { text: "Beide Geschäftsmodelle leben davon, möglichst billige Massen-Herkunftsnachweise aus Skandinavien einzukaufen und ungeprüft weiterzureichen.", korrekt: false, erklaerung: "Genau das Gegenteil — beide grenzen sich vom billigen Massen-HKN ab und verkaufen geprüfte Zusätzlichkeit." },
        { text: "Beide sind Pflichtmärkte wie der EU ETS.", korrekt: false, erklaerung: "Premium-HKN und Fünf Grad sind freiwillige Modelle — der Pflichtmarkt ist allein der EU ETS." }
      ]
    }
  },

  // ── U1-BNETZA ───────────────────────────────────────────────────
  "Q-BNETZA-WE1": {
    id: "Q-BNETZA-WE1", unitId: "U1-BNETZA", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-MARKT-BNETZA-01"],
    data: {
      frage: "Was ist ein 'Festlegungsverfahren' der BNetzA?",
      optionen: [
        { text: "Ein Verfahren, in dem die BNetzA verbindliche Marktregeln setzt (z.B. §14a, dynamische Tarife) — oft über 2–5 Jahre.", korrekt: true, erklaerung: "Festlegungen sind das zentrale Gestaltungsinstrument: Sie schaffen die Spielregeln, nach denen alle Marktakteure arbeiten." },
        { text: "Die jährliche behördliche Festlegung des Strom-Endkundenpreises für alle Haushalte und Gewerbekunden im jeweiligen Netzgebiet.", korrekt: false, erklaerung: "Endkundenpreise legt die BNetzA nicht fest — sie gestaltet die Marktregeln, nicht die Preise." },
        { text: "Die Genehmigung einzelner Börsengeschäfte.", korrekt: false, erklaerung: "Börsengeschäfte werden nicht einzeln genehmigt — Festlegungen sind übergreifende Regelwerke." }
      ]
    }
  },
  "Q-BNETZA-WE2": {
    id: "Q-BNETZA-WE2", unitId: "U1-BNETZA", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-MARKT-BNETZA-01"],
    data: {
      frage: "Warum ist die Langsamkeit der BNetzA-Verfahren (2–5 Jahre) für die Energiewende ein Problem?",
      optionen: [
        { text: "Marktregeln (H2, V2G, Flexmärkte) entstehen langsamer als Technik und Ausbaubedarf — Regulierung als Tempo-Engpass.", korrekt: true, erklaerung: "Die Energiewende braucht schnelle Regelanpassungen; mehrjährige Verfahren bremsen neue Geschäftsmodelle strukturell aus." },
        { text: "Weil die BNetzA dadurch zu hohe Gewinne macht.", korrekt: false, erklaerung: "Die BNetzA macht keine Gewinne — sie ist gebührenfinanziert; das Problem ist Geschwindigkeit, nicht Profit." },
        { text: "Weil lange Verfahren die Strompreise direkt erhöhen.", korrekt: false, erklaerung: "Nicht der Preis, sondern die Innovations- und Ausbaugeschwindigkeit leidet — Regeln kommen zu spät für den Bedarf." }
      ]
    }
  },
  "Q-BNETZA-R1": {
    id: "Q-BNETZA-R1", unitId: "U1-BNETZA", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-MARKT-BNETZA-01"],
    data: {
      frage: "Welche dieser Aufgaben gehört NICHT zur BNetzA?",
      optionen: [
        { text: "Den Endkundenstrompreis für Haushalte festsetzen.", korrekt: true, erklaerung: "Genau das macht die BNetzA nicht — Endkundenpreise bildet der Wettbewerb; die BNetzA reguliert Netze und Marktregeln." },
        { text: "Erlösobergrenzen der Netzbetreiber nach ARegV festlegen.", korrekt: false, erklaerung: "Das ist eine Kernaufgabe der BNetzA (Netzregulierung)." },
        { text: "EEG-Ausschreibungen für Solar und Wind durchführen.", korrekt: false, erklaerung: "Auch das übernimmt die BNetzA — die Ausschreibungen bestimmen die anzulegenden Werte." }
      ]
    }
  },
  "Q-BNETZA-R2": {
    id: "Q-BNETZA-R2", unitId: "U1-BNETZA", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-MARKT-BNETZA-01", "L3-MARKT-BNETZA-02"],
    data: {
      text: "Die BNetzA hat {{a}} — ihr Wert liegt in der Qualität der Regeln, nicht in einem Umsatz. Auf europäischer Ebene entwickelt {{b}} gemeinsame Network Codes, und {{c}} ist die gemeinsame Regelenergie-Plattform der vier deutschen ÜNB.",
      luecken: {
        a: { loesungen: ["keine eigene Erlöslogik", "keine Erlöslogik", "kein Geschäftsmodell"], erklaerung: "Als Behörde verkauft die BNetzA nichts — sie ist gebührenfinanziert." },
        b: { loesungen: ["ENTSO-E"], erklaerung: "ENTSO-E koordiniert die europäischen ÜNB und setzt technische Standards." },
        c: { loesungen: ["regelleistung.net"], erklaerung: "regelleistung.net bündelt die FCR/aFRR/mFRR-Ausschreibungen." }
      },
      distraktoren: ["hohe Handelsmargen", "EPEX SPOT"]
    }
  },
  "Q-BNETZA-R3": {
    id: "Q-BNETZA-R3", unitId: "U1-BNETZA", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-MARKT-BNETZA-02"],
    data: {
      frage: "Warum senkt die gemeinsame Plattform regelleistung.net die Leistungspreise gegenüber vier getrennten nationalen Märkten?",
      optionen: [
        { text: "Bündelung erhöht die Liquidität: mehr Anbieter im selben Markt drücken die Preise — wie der Netzwerkeffekt einer Börse.", korrekt: true, erklaerung: "Ein größerer, gemeinsamer Markt ist wettbewerbsintensiver und effizienter als vier kleine, fragmentierte." },
        { text: "Weil der Staat die Preise dort deckelt.", korrekt: false, erklaerung: "Es gibt keinen Preisdeckel — der Effekt kommt aus der höheren Liquidität und dem stärkeren Wettbewerb." },
        { text: "Weil am Ende der geplanten Marktkonsolidierung nur noch ein einziger staatlicher Übertragungsnetzbetreiber übrig bleiben soll.", korrekt: false, erklaerung: "Es bleiben vier ÜNB — sie teilen sich nur eine gemeinsame Ausschreibungsplattform." }
      ]
    }
  },
  "Q-BNETZA-R4": {
    id: "Q-BNETZA-R4", unitId: "U1-BNETZA", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-MARKT-BNETZA-01"],
    data: {
      steckbriefId: "L3-MARKT-BNETZA-01",
      erklaerungenProDimension: {
        regulierung: "Die BNetzA IST der Regulierer — maximale Stufe.",
        skalierbarkeit: "Behörde mit begrenzter Kapazität, wächst langsamer als die Aufgaben — niedrigste Stufe.",
        marktrisiko: "Keine Markt- oder Preisexposition (gebührenfinanziert) — niedrigste Stufe.",
        digitalisierung: "Zunehmend digitale Marktüberwachung, aber verfahrensgetrieben — mittel.",
        wettbewerb: "Hoheitliche Monopolfunktion, kein Wettbewerb — niedrigste Stufe.",
        nachhaltigkeit: "Gestaltet den Rahmen der Energiewende, aber selbst kein grünes Produkt — mittel."
      }
    }
  },
  "Q-BNETZA-T1": {
    id: "Q-BNETZA-T1", unitId: "U1-BNETZA", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-MARKT-BNETZA-01", "L3-UNB-NETZ-01"],
    data: {
      frage: "Netzbetreiber (Modul 3) tragen 'kein Marktrisiko, aber Regulierungsrisiko'. Wie hängt das mit der BNetzA zusammen?",
      optionen: [
        { text: "Die BNetzA ist die Quelle dieses Risikos: Ihre Festlegungen (Erlösobergrenze, EK-Zins, NEST/AgNes) bestimmen die Netzmarge.", korrekt: true, erklaerung: "Das Regulierungsrisiko der Netze IST das Gestaltungshandeln der BNetzA — beide Module beschreiben zwei Seiten derselben Beziehung." },
        { text: "Die BNetzA garantiert den Netzbetreibern per Gesetz einen festen jährlichen Gewinn, unabhängig von deren Investitionsentscheidungen.", korrekt: false, erklaerung: "Gerade nicht — die BNetzA kann die Konditionen ändern; darin besteht das Regulierungsrisiko." },
        { text: "Die BNetzA handelt Strom für die Netzbetreiber an der Börse.", korrekt: false, erklaerung: "Die BNetzA handelt keinen Strom — sie reguliert; Netzbetreiber handeln aus Unbundling-Gründen ohnehin keinen Strom." }
      ]
    }
  },

  // ── U1-KAPAZITAET ───────────────────────────────────────────────
  "Q-KAPAZITAET-WE1": {
    id: "Q-KAPAZITAET-WE1", unitId: "U1-KAPAZITAET", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-MARKT-DESIGN-01"],
    data: {
      frage: "Was ist das 'Missing Money'-Problem im Energy-Only-Market?",
      optionen: [
        { text: "Backup-Kraftwerke laufen zu selten, als dass die wenigen Knappheitspreise ihre Fixkosten decken — die Refinanzierung fehlt.", korrekt: true, erklaerung: "Ohne Kapazitätsvergütung entsteht eine Finanzierungslücke für dringend benötigte, selten laufende Kraftwerke." },
        { text: "Kunden zahlen ihre Stromrechnungen nicht.", korrekt: false, erklaerung: "'Missing Money' meint die Refinanzierungslücke der Kraftwerke, nicht ausbleibende Kundenzahlungen." },
        { text: "Die Börse selbst verliert bei dauerhaft niedrigen Strompreisen Geld und muss dann über einen Kapazitätsmarkt gestützt werden.", korrekt: false, erklaerung: "Die Börse trägt kein Preisrisiko — 'Missing Money' betrifft die Kraftwerksbetreiber, nicht die Börse." }
      ]
    }
  },
  "Q-KAPAZITAET-WE2": {
    id: "Q-KAPAZITAET-WE2", unitId: "U1-KAPAZITAET", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-MARKT-DESIGN-01"],
    data: {
      szenario: "Ein H2-ready-Peaker mit 400 MW erhält im Kapazitätsmarkt einen Leistungspreis von 65.000 €/MW und Jahr. Wie hoch ist die jährliche Kapazitätsvergütung (in Mio. €)?",
      eingabefelder: [{ key: "verguetung", label: "Kapazitätsvergütung", einheit: "Mio. €" }],
      loesung: { verguetung: { wert: 26, toleranz: 2 } },
      rechenweg: ["Vergütung = Leistung × Preis = 400 MW × 65.000 €/MW = 26.000.000 € = 26 Mio. €.", "Dieser Betrag fließt allein fürs Bereitstehen — zusätzlich zu den (seltenen) Erlösen aus dem tatsächlichen Stromverkauf.", "Genau diese planbare Zahlung macht den Bau eines nur selten laufenden Backup-Kraftwerks überhaupt erst finanzierbar."]
    }
  },
  "Q-KAPAZITAET-R1": {
    id: "Q-KAPAZITAET-R1", unitId: "U1-KAPAZITAET", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-MARKT-DESIGN-01"],
    data: {
      frage: "Was ist mit StromVKG / Kraftwerksstrategie beschlossen?",
      optionen: [
        { text: "Der Einstieg in den Kapazitätsmarkt: ~12 GW H2-ready ab 2026, weitere Auktionen 2027/2029, Vollbetrieb ab 2032.", korrekt: true, erklaerung: "Nach der EU-Grundsatzeinigung (Jan. 2026) ist der Fahrplan gesetzt — Deutschland verlässt das reine Energy-Only-Design." },
        { text: "Die sofortige Abschaltung aller Gaskraftwerke.", korrekt: false, erklaerung: "Das Gegenteil — es geht um den Neubau H2-ready-steuerbarer Kapazität als Backup, nicht um Abschaltung." },
        { text: "Ein Verbot des Stromhandels an der Börse.", korrekt: false, erklaerung: "Der Börsenhandel bleibt — der Kapazitätsmarkt ergänzt ihn um eine Vergütung fürs Bereitstehen." }
      ]
    }
  },
  "Q-KAPAZITAET-R2": {
    id: "Q-KAPAZITAET-R2", unitId: "U1-KAPAZITAET", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-MARKT-DESIGN-01"],
    data: {
      text: "Im heutigen {{a}}-Design refinanzieren sich Kraftwerke nur über Strompreise. Ein Kapazitätsmarkt zahlt zusätzlich einen {{b}} fürs Bereitstehen. Neue Anlagen müssen {{c}} sein.",
      luecken: {
        a: { loesungen: ["Energy-Only-Market", "Energy-Only", "EOM"], erklaerung: "Der Energy-Only-Market vergütet nur gelieferte Energie, nicht Bereitschaft." },
        b: { loesungen: ["Leistungspreis"], erklaerung: "Der Leistungspreis (€/MW/Jahr) ist die Kapazitätsvergütung fürs Vorhalten." },
        c: { loesungen: ["H2-ready", "H2 ready", "wasserstofffähig"], erklaerung: "H2-ready-Pflicht sichert, dass die Kapazität später emissionsfrei laufen kann." }
      },
      distraktoren: ["Kapazitätsmarkt", "kohlebefeuert"]
    }
  },
  "Q-KAPAZITAET-R3": {
    id: "Q-KAPAZITAET-R3", unitId: "U1-KAPAZITAET", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-MARKT-DESIGN-01"],
    data: {
      frage: "Warum ist der Kapazitätsmarkt laut Angreifbarkeits-Analyse eher ein 'Verteilungskampf' als ein reiner Wettbewerb?",
      optionen: [
        { text: "Batterien, Demand Response und Auslandskapazitäten drängen in die technologieoffenen Auktionen und drücken die Clearing-Preise der Peaker.", korrekt: true, erklaerung: "Wer alles zulässt, verteilt den Topf breiter; die Gaskraftwerke konkurrieren plötzlich mit Speichern und Lastflexibilität um dieselbe Vergütung." },
        { text: "Weil der Staat den gesamten Kapazitätsmarkt per Ausschreibung einem einzigen großen Kraftwerksbetreiber exklusiv zuteilt und andere ausschließt.", korrekt: false, erklaerung: "Der Markt ist technologieoffen und wettbewerblich — kein Einzelzuschlag; genau die Konkurrenz vieler Techniken ist der Punkt." },
        { text: "Weil Kapazitätsmärkte in der EU verboten sind.", korrekt: false, erklaerung: "Sie sind unter EU-Beihilferecht erlaubt (Art. 22) — der Streit ist die Ausgestaltung, kein Verbot." }
      ]
    }
  },
  "Q-KAPAZITAET-R4": {
    id: "Q-KAPAZITAET-R4", unitId: "U1-KAPAZITAET", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-MARKT-DESIGN-01"],
    data: {
      steckbriefId: "L3-MARKT-DESIGN-01",
      erklaerungenProDimension: {
        regulierung: "Vollständig regulatorisch geschaffener Mechanismus (StromVKG, EU-Beihilferecht) — höchste Stufe.",
        skalierbarkeit: "An physische Kraftwerkskapazität gebunden — niedrig.",
        marktrisiko: "Planbare Kapazitätsvergütung reduziert das Marktrisiko der Betreiber — niedrig-mittel.",
        digitalisierung: "Ausschreibungsverfahren, keine digital-native Wertschöpfung — niedrig.",
        wettbewerb: "Technologieoffene Auktion, aber begrenzter Bieterkreis — niedrig-mittel.",
        nachhaltigkeit: "H2-ready-Pflicht sichert Klimapfad, aber (zunächst) fossiler Backup — mittel."
      }
    }
  },
  "Q-KAPAZITAET-T1": {
    id: "Q-KAPAZITAET-T1", unitId: "U1-KAPAZITAET", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-MARKT-DESIGN-01", "L3-ERZ-KONV-02"],
    data: {
      frage: "Der Kapazitätsmarkt und die Regelenergie (Modul 2) folgen demselben Grundprinzip. Welchem?",
      optionen: [
        { text: "Verdienen am Bereitstehen statt am Liefern — Regelenergie wie Kapazitätsmarkt vergüten Verfügbarkeit, nicht gelieferte Energie.", korrekt: true, erklaerung: "Beide vergüten Verfügbarkeit statt gelieferte Energie — das Kapazitätsmarkt-Prinzip ist für Regelenergie längst etabliert, für reine Backup-Erzeugung neu." },
        { text: "Beide Mechanismen vergüten ausschließlich den tatsächlich gelieferten Strom und zahlen nichts für die bloße Bereitstellung von Leistung.", korrekt: false, erklaerung: "Genau das Gegenteil — beide vergüten primär das Bereitstehen, nicht die gelieferte Menge." },
        { text: "Beide sind reine Börsengeschäfte ohne Vergütungskomponente.", korrekt: false, erklaerung: "Beide haben eine Leistungspreis-Komponente außerhalb des Spotmarkts — das ist ihr gemeinsamer Kern." }
      ]
    }
  },

  // ── U1-FLEXMARKT ────────────────────────────────────────────────
  "Q-FLEXMARKT-WE1": {
    id: "Q-FLEXMARKT-WE1", unitId: "U1-FLEXMARKT", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-MARKT-DESIGN-02"],
    data: {
      frage: "Warum ist es für den VNB oft günstiger, Flexibilität zu kaufen als einen Trafo zu bauen?",
      optionen: [
        { text: "Lokale Flexibilität kostet 20–50 €/MWh, Netzausbau 100.000–500.000 €/km — 'Flex first' spart teure Investitionen.", korrekt: true, erklaerung: "Wenn ein Engpass nur wenige Stunden im Jahr auftritt, ist gekaufte Flexibilität viel billiger als dauerhaftes Kupfer." },
        { text: "Weil der VNB für den Einkauf von Flexibilität keine Genehmigung braucht, für einen neuen Trafo dagegen ein langes Verfahren.", korrekt: false, erklaerung: "Der Hauptgrund ist der Kostenvergleich, nicht die Genehmigung — Flex ist schlicht deutlich günstiger für seltene Engpässe." },
        { text: "Weil gekaufte Flexibilität die Netzentgelte erhöht.", korrekt: false, erklaerung: "Im Gegenteil — vermiedener Netzausbau dämpft die Kosten; Flex ist die günstigere Option." }
      ]
    }
  },
  "Q-FLEXMARKT-WE2": {
    id: "Q-FLEXMARKT-WE2", unitId: "U1-FLEXMARKT", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-MARKT-DESIGN-02"],
    data: {
      frage: "Was ist das ungelöste 'Doppelnutzungs'-Problem lokaler Flexmärkte?",
      optionen: [
        { text: "Dieselbe Batterie darf nicht zugleich ÜNB und VNB zugesagt werden — technisch heute nicht sicher ausschließbar.", korrekt: true, erklaerung: "Ohne saubere Koordination droht eine Ressource doppelt verkauft zu werden, was die Systemsicherheit gefährdet." },
        { text: "Dass zwei VNB dieselbe Leitung nutzen wollen.", korrekt: false, erklaerung: "Es geht um die doppelte Vermarktung derselben Flexibilität an ÜNB und VNB, nicht um geteilte Leitungen." },
        { text: "Dass Kunden ihre Wallbox und Wärmepumpe möglichst gleichzeitig nutzen, um ihren Eigenverbrauch am Netz zu maximieren.", korrekt: false, erklaerung: "Das Problem ist die doppelte Marktzusage einer Flex-Ressource, nicht der gleichzeitige Gerätebetrieb." }
      ]
    }
  },
  "Q-FLEXMARKT-R1": {
    id: "Q-FLEXMARKT-R1", unitId: "U1-FLEXMARKT", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-MARKT-DESIGN-02"],
    data: {
      frage: "Warum ist der Regulierer der 'größte Wettbewerber' lokaler Flexmärkte?",
      optionen: [
        { text: "§14a und Redispatch lösen dieselben Engpässe ohne Markt — sie machen Flexmärkte überflüssig, bevor Liquidität entsteht.", korrekt: true, erklaerung: "Ein regulierter Zwangszugriff (§14a) konkurriert direkt mit einem freiwilligen Marktmechanismus um dieselbe Flexibilität." },
        { text: "Weil die BNetzA selbst Flexibilität von den Kunden einkauft und sie anschließend an der Strombörse gewinnbringend weiterverkauft.", korrekt: false, erklaerung: "Die BNetzA handelt nicht — sie stellt mit §14a nur ein reguliertes Alternativinstrument bereit." },
        { text: "Weil lokale Flexmärkte gesetzlich verboten sind.", korrekt: false, erklaerung: "Sie sind erlaubt und werden pilotiert — die Konkurrenz ist das regulierte §14a-Instrument, kein Verbot." }
      ]
    }
  },
  "Q-FLEXMARKT-R2": {
    id: "Q-FLEXMARKT-R2", unitId: "U1-FLEXMARKT", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-MARKT-DESIGN-03"],
    data: {
      text: "Ein liquider {{a}}-Spotmarkt existiert noch nicht — gehandelt wird bilateral. {{b}} überbrückt als staatlicher Zwischenmarkt: Der Bund kauft Importmengen zu Festpreis und verkauft sie per Auktion weiter. Etablierte Börsen wie {{c}} haben beim späteren Spotmarkt den natürlichen Vorteil.",
      luecken: {
        a: { loesungen: ["H2", "Wasserstoff"], erklaerung: "Ein H2-Spotmarkt braucht erst genug Liquidität, um zu funktionieren." },
        b: { loesungen: ["H2Global", "H2 Global"], erklaerung: "H2Global ist der staatlich organisierte Zwischenmarkt für Import-Wasserstoff." },
        c: { loesungen: ["EEX"], erklaerung: "Die EEX hat mit ihrer bestehenden Börseninfrastruktur den Startvorteil für H2-Futures." }
      },
      distraktoren: ["CO2", "SMARD"]
    }
  },
  "Q-FLEXMARKT-R3": {
    id: "Q-FLEXMARKT-R3", unitId: "U1-FLEXMARKT", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-MARKT-DESIGN-03"],
    data: {
      frage: "Warum gibt es für Wasserstoff noch keinen echten Börsen-Spotmarkt?",
      optionen: [
        { text: "Das Handelsvolumen ist noch zu gering — ohne kritische Liquidität lohnt kein Börsenprodukt; H2 läuft bilateral.", korrekt: true, erklaerung: "Börsen brauchen viele Teilnehmer und Volumen; solange H2-Markt und -Infrastruktur klein sind, dominieren bilaterale Verträge." },
        { text: "Weil Wasserstoff physikalisch nicht handelbar ist.", korrekt: false, erklaerung: "H2 ist handelbar — es fehlt nur die Marktliquidität und Infrastruktur, nicht die grundsätzliche Handelbarkeit." },
        { text: "Weil die EU den H2-Handel verboten hat.", korrekt: false, erklaerung: "Die EU fördert den H2-Markt (RED III, H2Global) — das Hindernis ist fehlende Liquidität, kein Verbot." }
      ]
    }
  },
  "Q-FLEXMARKT-R4": {
    id: "Q-FLEXMARKT-R4", unitId: "U1-FLEXMARKT", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-MARKT-DESIGN-02"],
    data: {
      steckbriefId: "L3-MARKT-DESIGN-02",
      erklaerungenProDimension: {
        regulierung: "Regulatorisch gerahmt (Clean Energy Package, §14a), aber noch nicht ausgereift — mittel-hoch.",
        skalierbarkeit: "Plattformbasiert, potenziell über viele Netzgebiete skalierbar — mittel-hoch.",
        marktrisiko: "Transaktionsbasiert, wenig eigenes Preisrisiko der Plattform — niedrig-mittel.",
        digitalisierung: "Marktplattform mit Echtzeit-Matching, hochdigital — höchste Stufe.",
        wettbewerb: "Noch Pilotstadium, wenige Anbieter, aber Standardkampf um 900 DSOs — niedrig-mittel.",
        nachhaltigkeit: "'Flex first' vermeidet Netzausbau und integriert mehr EE — hoch."
      }
    }
  },
  "Q-FLEXMARKT-T1": {
    id: "Q-FLEXMARKT-T1", unitId: "U1-FLEXMARKT", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-MARKT-DESIGN-02", "L3-VNB-NEU-01"],
    data: {
      frage: "Lokale Flexmärkte und §14a (Modul 3) lösen dasselbe Netzproblem auf gegensätzliche Weise. Wie?",
      optionen: [
        { text: "Der Flexmarkt kauft Flexibilität marktlich, §14a greift reguliert per Zwangsdimmung ein — Markt vs. Hoheit für denselben Zweck.", korrekt: true, erklaerung: "Beide vermeiden teuren Netzausbau, aber das eine über einen freiwilligen Preis, das andere über ein reguliertes Eingriffsrecht — genau deshalb konkurrieren sie." },
        { text: "Beide bauen zwingend einen neuen Trafo.", korrekt: false, erklaerung: "Beide vermeiden gerade den Trafo-Ausbau — das ist ihr gemeinsamer Zweck, nur der Weg (Markt vs. Regulierung) unterscheidet sich." },
        { text: "§14a EnWG ist ein handelbares Börsenprodukt, während der lokale Flexmarkt lediglich eine unverbindliche Behördenauflage darstellt.", korrekt: false, erklaerung: "Umgekehrt: §14a ist das regulierte Instrument, der lokale Flexmarkt der marktliche Mechanismus." }
      ]
    }
  }

});

// ════════════════════════════════════════════════════════════════════
// MODUL 7 — WÄRME, H2 & INDUSTRIE
// ════════════════════════════════════════════════════════════════════
Object.assign(LERN_QUIZ_ITEMS, {

  // ── U7-FERNWAERME ───────────────────────────────────────────────
  "Q-FERNWAERME-WE1": {
    id: "Q-FERNWAERME-WE1", unitId: "U7-FERNWAERME", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-WAERME-FERN-01"],
    data: {
      frage: "Warum kann ein Fernwärmekunde den Anbieter nicht wechseln wie beim Strom?",
      optionen: [
        { text: "Fernwärme ist ein natürliches Netzmonopol — es gibt nur das eine Rohr unter der Straße, ein paralleles Wärmenetz wäre unwirtschaftlich.", korrekt: true, erklaerung: "Anders als beim Strom (ein Netz, viele Lieferanten) ist beim Wärmenetz Betrieb und Belieferung untrennbar an die eine Leitung gebunden." },
        { text: "Weil der Wechsel gesetzlich verboten ist.", korrekt: false, erklaerung: "Es ist kein Verbot — es fehlt schlicht die physische Alternative; ein zweites Wärmenetz wäre unwirtschaftlich." },
        { text: "Weil Fernwärme immer günstiger ist als jede Alternative.", korrekt: false, erklaerung: "Nicht der Preis bindet den Kunden, sondern die Monopolinfrastruktur — die individuelle Wärmepumpe ist gerade die entstehende Alternative." }
      ]
    }
  },
  "Q-FERNWAERME-WE2": {
    id: "Q-FERNWAERME-WE2", unitId: "U7-FERNWAERME", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-WAERME-FERN-01"],
    data: {
      frage: "Was verlangt GWB §35b vom Fernwärmeversorger?",
      optionen: [
        { text: "Einen Dekarbonisierungsfahrplan mit mindestens 50% erneuerbarer Wärme bis 2030 — also Umstieg von Kohle auf Großwärmepumpen, Abwärme oder Geothermie.", korrekt: true, erklaerung: "Das Monopol bekommt seit 2024 eine grüne Bedingung: Investieren in EE-Wärmequellen wird Pflicht." },
        { text: "Eine sofortige Halbierung des Wärmepreises.", korrekt: false, erklaerung: "§35b betrifft den EE-Anteil der Wärme, nicht den Preis — der wird über die Missbrauchskontrolle begrenzt." },
        { text: "Die Öffnung des Wärmenetzes für konkurrierende Anbieter.", korrekt: false, erklaerung: "Eine Netzöffnung wie beim Strom gibt es bei Fernwärme nicht — §35b verlangt Dekarbonisierung, keine Marktöffnung." }
      ]
    }
  },
  "Q-FERNWAERME-R1": {
    id: "Q-FERNWAERME-R1", unitId: "U7-FERNWAERME", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-WAERME-FERN-01"],
    data: {
      frage: "Was regelt das Wärmeplanungsgesetz (WPG)?",
      optionen: [
        { text: "Kommunen müssen Wärmepläne erstellen (Großstädte bis 2026, alle bis 2028), die festlegen, wo Fernwärme, Wärmepumpe oder H2 die langfristige Lösung ist.", korrekt: true, erklaerung: "Das WPG schafft Planungssicherheit: Wo Fernwärme vorgesehen ist, sind Investitionen abgesichert." },
        { text: "Es schreibt jedem Haushalt eine Wärmepumpe vor.", korrekt: false, erklaerung: "Das WPG plant Gebiete, es verordnet keine bestimmte Heizung je Haushalt — das regelt eher das GEG." },
        { text: "Es deckelt bundesweit den Fernwärmepreis.", korrekt: false, erklaerung: "Das WPG betrifft die kommunale Gebietsplanung, keine Preisregulierung." }
      ]
    }
  },
  "Q-FERNWAERME-R2": {
    id: "Q-FERNWAERME-R2", unitId: "U7-FERNWAERME", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-WAERME-FERN-01"],
    data: {
      text: "Fernwärme ist ein natürliches {{a}} und deckt rund {{b}} des deutschen Wärmebedarfs. Der eigentliche Angreifer des Modells ist die individuelle {{c}}.",
      luecken: {
        a: { loesungen: ["Netzmonopol", "Monopol"], erklaerung: "Ein zweites Wärmenetz wäre unwirtschaftlich — daher Monopol." },
        b: { loesungen: ["14%"], erklaerung: "Rund 14% des Wärmebedarfs laufen über Fernwärme." },
        c: { loesungen: ["Wärmepumpe"], erklaerung: "Die individuelle Wärmepumpe ist die Substitutionskonkurrenz, nicht ein anderer Fernwärmeanbieter." }
      },
      distraktoren: ["Wettbewerbsmarkt", "50%"]
    }
  },
  "Q-FERNWAERME-R3": {
    id: "Q-FERNWAERME-R3", unitId: "U7-FERNWAERME", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-WAERME-FERN-01"],
    data: {
      frage: "Wie verschärft die Preistransparenz-Pflicht (Fernwärme-Verordnung 2024) die 'Todesspirale' des Fernwärmenetzes?",
      optionen: [
        { text: "Sichtbare, hohe Preise motivieren zahlungskräftige Kunden zum Ausstieg auf eigene Wärmepumpen — die Netzfixkosten verteilen sich auf immer weniger Verbleibende, was den Preis weiter treibt.", korrekt: true, erklaerung: "Dieselbe Death-Spiral-Logik wie beim Gasnetz: sinkende Mengen bei fixen Kosten → steigende Preise → weitere Abwanderung." },
        { text: "Transparente Preise senken automatisch die Kosten des Betreibers.", korrekt: false, erklaerung: "Transparenz senkt keine Kosten — sie macht hohe Preise nur sichtbar und beschleunigt den Ausstieg." },
        { text: "Sie verpflichtet Kunden, im Netz zu bleiben.", korrekt: false, erklaerung: "Das Gegenteil — Transparenz erleichtert dem Kunden die Ausstiegsentscheidung, sie bindet ihn nicht." }
      ]
    }
  },
  "Q-FERNWAERME-R4": {
    id: "Q-FERNWAERME-R4", unitId: "U7-FERNWAERME", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-WAERME-FERN-01"],
    data: {
      steckbriefId: "L3-WAERME-FERN-01",
      erklaerungenProDimension: {
        regulierung: "Reguliertes Monopol mit Missbrauchskontrolle und neuen Dekarbonisierungspflichten — hoch.",
        skalierbarkeit: "An das physische Wärmenetz gebunden, keine Skalierung — niedrigste Stufe.",
        marktrisiko: "Gebundene Kunden, aber Substitutionsrisiko durch Wärmepumpen — niedrig-mittel.",
        digitalisierung: "Klassische Netzinfrastruktur, wenig digital — niedrig.",
        wettbewerb: "Kein direkter Wettbewerber im Gebiet (Monopol) — niedrigste Stufe.",
        nachhaltigkeit: "Potenzial für grüne Wärme (Abwärme, Geothermie), heute oft noch fossil — mittel."
      }
    }
  },
  "Q-FERNWAERME-T1": {
    id: "Q-FERNWAERME-T1", unitId: "U7-FERNWAERME", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-WAERME-FERN-01", "L3-GAS-FNB-01"],
    data: {
      frage: "Fernwärmenetz und Erdgasnetz (Modul 3) teilen dieselbe strukturelle Bedrohung. Welche?",
      optionen: [
        { text: "Die Death Spiral: Elektrifizierung (Wärmepumpe) entzieht beiden Netzen Mengen; bei fixen Netzkosten steigen die Entgelte je Verbleibendem, was weitere Abwanderung auslöst.", korrekt: true, erklaerung: "Beide sind netzgebundene Wärme-/Gasmonopole, die durch die Elektrifizierung von innen erodieren — dasselbe Muster in zwei Sektoren." },
        { text: "Beide werden durch neue Konkurrenznetze angegriffen.", korrekt: false, erklaerung: "Parallele Netze baut niemand — der Angriff ist die Substitution (Elektrifizierung), nicht ein Konkurrenznetz." },
        { text: "Beide verlieren ihr Monopol durch Marktöffnung wie beim Strom.", korrekt: false, erklaerung: "Weder Fernwärme noch Gasverteilung werden für konkurrierende Lieferanten geöffnet — die Bedrohung ist die Mengenerosion, nicht Marktöffnung." }
      ]
    }
  },

  // ── U7-WASSERSTOFF ──────────────────────────────────────────────
  "Q-WASSERSTOFF-WE1": {
    id: "Q-WASSERSTOFF-WE1", unitId: "U7-WASSERSTOFF", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-WAERME-PTX-01"],
    data: {
      szenario: "Die Gestehungskosten für grünen H2 liegen bei 2,70 €/kg. Ein Industriekunde ist nur bereit, den Grau-Wasserstoff-Preis von 1,80 €/kg zu zahlen. Wie groß ist die Lücke je kg, die eine Subvention schließen muss?",
      eingabefelder: [{ key: "luecke", label: "Subventionslücke", einheit: "€/kg" }],
      loesung: { luecke: { wert: 0.9, toleranz: 0.15 } },
      rechenweg: ["Lücke = Gestehungskosten − Zahlungsbereitschaft = 2,70 − 1,80 = 0,90 €/kg.", "(Der oft genannte Bereich 3–7 €/kg ergibt sich, wenn der Marktpreis-Anspruch höher oder die Gestehungskosten bei teurerem Strom höher liegen.)", "Diese Lücke schließen heute IPCEI/H2Global aus Bundesmitteln — das eigentliche 'Geschäft' ist die Subventions-Arbitrage."]
    }
  },
  "Q-WASSERSTOFF-WE2": {
    id: "Q-WASSERSTOFF-WE2", unitId: "U7-WASSERSTOFF", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-WAERME-PTX-01"],
    data: {
      frage: "Warum ist der hohe Marktpreis von grünem H2 (6–10 €/kg) irreführend für die Wirtschaftlichkeit?",
      optionen: [
        { text: "Kein Industriekunde zahlt diesen Preis freiwillig, solange grauer H2 für 1,5–2 €/kg verfügbar ist — der 'Marktpreis' ist eher ein Angebotspreis, keine echte Zahlungsbereitschaft.", korrekt: true, erklaerung: "Die Zahlungsbereitschaft orientiert sich am fossilen Alternativpreis; die Differenz muss subventioniert werden, sonst gibt es keine Abnahme." },
        { text: "Weil der Marktpreis die Stromkosten nicht enthält.", korrekt: false, erklaerung: "Die Gestehungskosten (2,70 €/kg) enthalten die Stromkosten bereits — das Problem ist die fehlende Zahlungsbereitschaft, nicht die Kalkulation." },
        { text: "Weil grüner H2 technisch minderwertig ist.", korrekt: false, erklaerung: "Grüner und grauer H2 sind chemisch identisch — der Unterschied ist die Herstellung (CO₂-frei vs. fossil), nicht die Qualität." }
      ]
    }
  },
  "Q-WASSERSTOFF-R1": {
    id: "Q-WASSERSTOFF-R1", unitId: "U7-WASSERSTOFF", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-WAERME-PTX-01"],
    data: {
      frage: "Was sind die wichtigsten Abnehmer für grünen Wasserstoff?",
      optionen: [
        { text: "Stahl (Direktreduktion), Chemie (Ammoniak), Raffinerien und Schwerverkehr — Bereiche, die sich schwer direkt elektrifizieren lassen.", korrekt: true, erklaerung: "H2 ist dort sinnvoll, wo Strom nicht direkt genutzt werden kann (Hochtemperatur, chemischer Rohstoff, schwere Mobilität)." },
        { text: "Privathaushalte zum Heizen und E-Auto-Laden.", korrekt: false, erklaerung: "Für Heizung (Wärmepumpe) und Pkw (Batterie) ist Direktelektrifizierung effizienter — H2 wird dort gerade NICHT priorisiert." },
        { text: "Rechenzentren zur Stromversorgung.", korrekt: false, erklaerung: "Rechenzentren nutzen Strom direkt — die H2-Prioritätsmärkte sind Stahl, Chemie und Schwerverkehr." }
      ]
    }
  },
  "Q-WASSERSTOFF-R2": {
    id: "Q-WASSERSTOFF-R2", unitId: "U7-WASSERSTOFF", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-WAERME-PTX-01"],
    data: {
      text: "Ein Elektrolyseur wandelt {{a}}-Strom in Wasserstoff (Wirkungsgrad ~70%). Die Subventionslücke wird über {{b}} und {{c}} aus Bundesmitteln geschlossen, bis grüner H2 um 2030+ wettbewerbsfähig wird.",
      luecken: {
        a: { loesungen: ["EE", "erneuerbaren", "grünen"], erklaerung: "Nur mit erneuerbarem Strom ist der Wasserstoff 'grün'." },
        b: { loesungen: ["IPCEI"], erklaerung: "IPCEI Hydrogen ist ein europäisches Förderprogramm." },
        c: { loesungen: ["H2Global", "H2 Global"], erklaerung: "H2Global schließt die Lücke über garantierte Abnahmepreise." }
      },
      distraktoren: ["Kohle", "EEG-Umlage"]
    }
  },
  "Q-WASSERSTOFF-R3": {
    id: "Q-WASSERSTOFF-R3", unitId: "U7-WASSERSTOFF", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-WAERME-PTX-01"],
    data: {
      frage: "Warum kann ein Elektrolyseur zusätzlich als flexibler Großverbraucher Geld verdienen?",
      optionen: [
        { text: "Er kann bei negativen oder sehr niedrigen Strompreisen hochfahren und bei hohen Preisen drosseln — das macht ihn zu einem idealen Demand-Response-Asset (doppelter Nutzen).", korrekt: true, erklaerung: "Der Elektrolyseur verbindet H2-Produktion mit Systemdienstleistung — er nutzt genau die Stunden, in denen Strom im Überfluss da ist." },
        { text: "Weil er den erzeugten Wasserstoff sofort wieder zu Strom macht.", korrekt: false, erklaerung: "Rückverstromung wäre hochgradig ineffizient — der Flexibilitätswert liegt im gesteuerten Stromverbrauch, nicht in der Rückwandlung." },
        { text: "Weil er als Kraftwerk Regelenergie einspeist.", korrekt: false, erklaerung: "Der Elektrolyseur ist ein Verbraucher, kein Erzeuger — sein Flexibilitätswert liegt im steuerbaren Verbrauch (Demand Response)." }
      ]
    }
  },
  "Q-WASSERSTOFF-R4": {
    id: "Q-WASSERSTOFF-R4", unitId: "U7-WASSERSTOFF", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-WAERME-PTX-01"],
    data: {
      steckbriefId: "L3-WAERME-PTX-01",
      erklaerungenProDimension: {
        regulierung: "Fördergetrieben (IPCEI, RED III), aber kein regulatorischer Erlösschutz — mittel.",
        skalierbarkeit: "Skaleneffekte in Elektrolyse (Lernrate ~15%), aber physische Anlagen — mittel.",
        marktrisiko: "Ohne Subvention nicht wettbewerbsfähig; Import-/Preisrisiko hoch — hoch.",
        digitalisierung: "Anlagensteuerung, aber kein digital-natives Geschäft — mittel.",
        wettbewerb: "Noch jung, wenige Player, aber Importkonkurrenz droht — niedrig-mittel.",
        nachhaltigkeit: "Schlüssel zur Dekarbonisierung von Stahl/Chemie — höchste Stufe."
      }
    }
  },
  "Q-WASSERSTOFF-T1": {
    id: "Q-WASSERSTOFF-T1", unitId: "U7-WASSERSTOFF", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-WAERME-PTX-01", "L3-GAS-FNB-02"],
    data: {
      frage: "Die grüne H2-Produktion (dieses Modul) und das H2-Kernnetz (Modul 3) hängen voneinander ab. Wie?",
      optionen: [
        { text: "Henne-Ei: Elektrolyseure brauchen das Kernnetz, um H2 zu den Abnehmern zu bringen; das Kernnetz braucht Elektrolyseure als Einspeiser — beide werden nur durch staatliche Absicherung (Subvention bzw. Amortisationskonto) parallel hochgefahren.", korrekt: true, erklaerung: "Erzeugung und Transport sind wechselseitig abhängig — genau deshalb koordiniert der Staat beide Seiten über Fördermechanismen." },
        { text: "Sie stehen in direkter Konkurrenz um dieselben Kunden.", korrekt: false, erklaerung: "Sie sind komplementär, nicht konkurrierend — der eine erzeugt, der andere transportiert denselben Wasserstoff." },
        { text: "Das Kernnetz ersetzt die Elektrolyseure vollständig.", korrekt: false, erklaerung: "Ein Netz erzeugt keinen Wasserstoff — es transportiert nur; die Elektrolyseure bleiben die Quelle." }
      ]
    }
  },

  // ── U7-PROCUREMENT ──────────────────────────────────────────────
  "Q-PROCUREMENT-WE1": {
    id: "Q-PROCUREMENT-WE1", unitId: "U7-PROCUREMENT", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-CONTRACT-MGMT-01"],
    data: {
      frage: "Was ist die §64-EEG-Befreiung, die der Berater prüft?",
      optionen: [
        { text: "Eine Entlastung stromintensiver Industrie von Umlagen — bei hohem Verbrauch schnell ein Millionenbetrag, weshalb der Beratungs-ROI extrem hoch ist.", korrekt: true, erklaerung: "Für energieintensive Betriebe ist die §64-Prüfung oft der größte Einzelhebel — ein Antrag, viel Ersparnis." },
        { text: "Eine Befreiung von der Umsatzsteuer auf Strom.", korrekt: false, erklaerung: "§64 EEG betrifft die EEG-bezogene Umlagenbelastung stromintensiver Industrie, nicht die Umsatzsteuer." },
        { text: "Ein Rabatt der Börse für Großabnehmer.", korrekt: false, erklaerung: "§64 ist eine regulatorische Entlastung, kein Börsenrabatt." }
      ]
    }
  },
  "Q-PROCUREMENT-WE2": {
    id: "Q-PROCUREMENT-WE2", unitId: "U7-PROCUREMENT", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-01"],
    data: {
      szenario: "Ein Betrieb senkt durch Lastverschiebung seine maximale Bezugsleistung um 1,5 MW. Das leistungsabhängige Netzentgelt beträgt 90.000 €/MW und Jahr. Wie hoch ist die jährliche Netzentgeltersparnis (in €)?",
      eingabefelder: [{ key: "ersparnis", label: "Ersparnis/Jahr", einheit: "€" }],
      loesung: { ersparnis: { wert: 135000, toleranz: 10000 } },
      rechenweg: ["Ersparnis = reduzierte Leistung × Leistungspreis = 1,5 MW × 90.000 €/MW = 135.000 €.", "Entscheidend: Der Gesamtverbrauch (kWh) bleibt gleich — gesenkt wird nur die teure SpitzenLEISTUNG (kW).", "Genau deshalb lohnt sich Lastspitzen-Optimierung, ohne dass ein einziges Produkt weniger produziert wird."]
    }
  },
  "Q-PROCUREMENT-R1": {
    id: "Q-PROCUREMENT-R1", unitId: "U7-PROCUREMENT", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-CONTRACT-MGMT-01"],
    data: {
      frage: "Warum senkt eine reduzierte Lastspitze die Netzentgelte, obwohl der Gesamtverbrauch gleich bleibt?",
      optionen: [
        { text: "Ein Teil der Netzentgelte ist leistungsabhängig (€/MW Höchstlast) — wer seine höchste Bezugsleistung senkt, zahlt weniger, unabhängig von der verbrauchten Menge.", korrekt: true, erklaerung: "Netzentgelte haben eine Arbeits- (kWh) UND eine Leistungskomponente (kW) — Letztere wird über die Jahreshöchstlast bemessen." },
        { text: "Weil weniger Spitzenlast automatisch weniger kWh bedeutet.", korrekt: false, erklaerung: "Nein — die kWh bleiben gleich, nur die zeitliche Verteilung ändert sich; gespart wird die Leistungskomponente." },
        { text: "Weil die BNetzA einen Rabatt für flexible Kunden gewährt.", korrekt: false, erklaerung: "Es ist kein Rabatt — die Ersparnis ergibt sich strukturell aus der leistungsbasierten Entgeltkomponente." }
      ]
    }
  },
  "Q-PROCUREMENT-R2": {
    id: "Q-PROCUREMENT-R2", unitId: "U7-PROCUREMENT", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-CONTRACT-MGMT-01"],
    data: {
      text: "Energieeinkaufsberater senken die Energiekosten typisch um {{a}} — über Hedging, Netzentgelt-Optimierung und Umlagenbefreiungen wie {{b}} EEG. Bezahlt werden sie oft per {{c}} auf die nachgewiesene Einsparung.",
      luecken: {
        a: { loesungen: ["5–15%", "5-15%", "5 bis 15%"], erklaerung: "5–15% der Energiekosten sind der typische Einsparhebel." },
        b: { loesungen: ["§64", "Paragraph 64", "64"], erklaerung: "§64 EEG entlastet stromintensive Industrie." },
        c: { loesungen: ["Erfolgshonorar"], erklaerung: "Das Erfolgshonorar koppelt die Beratervergütung direkt an das Ergebnis." }
      },
      distraktoren: ["50–60%", "§14a"]
    }
  },
  "Q-PROCUREMENT-R3": {
    id: "Q-PROCUREMENT-R3", unitId: "U7-PROCUREMENT", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-01"],
    data: {
      frage: "Wodurch ist die reine Tranchenbeschaffungs-Beratung angreifbar — und wo verteidigt sich die Marge?",
      optionen: [
        { text: "Große Verbraucher bauen eigene Beschaffungsteams auf (Insourcing) und digitale Plattformen automatisieren das Standardgeschäft; die Marge hält nur in der Komplexität — Netzentgelt, Umlagenbefreiung, PPA-Strukturierung.", korrekt: true, erklaerung: "Die einfache Tranchenbeschaffung ist Commodity; verteidigungsfähig ist nur die regulatorisch-komplexe Optimierung." },
        { text: "Durch ein Verbot der Energieberatung.", korrekt: false, erklaerung: "Es gibt kein solches Verbot — die Angreifer sind Insourcing und Automatisierung, nicht die Regulierung." },
        { text: "Weil die BNetzA die Beratungshonorare deckelt.", korrekt: false, erklaerung: "Beratungshonorare sind nicht gedeckelt — der Druck kommt aus Insourcing und Plattform-Automatisierung." }
      ]
    }
  },
  "Q-PROCUREMENT-R4": {
    id: "Q-PROCUREMENT-R4", unitId: "U7-PROCUREMENT", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-01", "L3-CONTRACT-MGMT-02"],
    data: { steckbriefId: "L3-CONTRACT-MGMT-01", distraktorSteckbriefId: "L3-CONTRACT-MGMT-02" }
  },
  "Q-PROCUREMENT-T1": {
    id: "Q-PROCUREMENT-T1", unitId: "U7-PROCUREMENT", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-CONTRACT-MGMT-01", "L3-VERGL-B2B-01"],
    data: {
      frage: "Der Energieeinkaufsberater und die B2B-Ausschreibungsplattform (Modul 4) konkurrieren teils um dasselbe Geschäft. Wo liegt der Unterschied — und die Verteidigung des Beraters?",
      optionen: [
        { text: "Die Plattform automatisiert die standardisierbare Tranchenbeschaffung; der Berater verteidigt sich über die nicht-automatisierbare Komplexität (Netzentgelt-, §64-, PPA-Optimierung) — genau dort, wo die Margen liegen.", korrekt: true, erklaerung: "Digitalisierbar ist das Standardgeschäft; die individuelle regulatorische Optimierung bleibt Beratung — eine wiederkehrende Grenze zwischen Plattform und Beratung." },
        { text: "Es gibt keinen Unterschied, beide machen dasselbe.", korrekt: false, erklaerung: "Die Plattform kann Standardausschreibungen, aber nicht die komplexe regulatorische Optimierung des Beraters." },
        { text: "Der Berater ist immer billiger als die Plattform.", korrekt: false, erklaerung: "Bei Standardbeschaffung ist die Plattform günstiger — der Berater rechtfertigt sich über Mehrwert in der Komplexität, nicht über den Preis." }
      ]
    }
  },

  // ── U7-EPC ──────────────────────────────────────────────────────
  "Q-EPC-WE1": {
    id: "Q-EPC-WE1", unitId: "U7-EPC", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-CONTRACT-MGMT-02"],
    data: {
      frage: "Wie kommt das Krankenhaus ohne eigenes Budget zu neuer Effizienztechnik?",
      optionen: [
        { text: "Der Contractor finanziert vor; das Krankenhaus refinanziert die Investition aus den garantierten Energieeinsparungen — sein laufendes Budget ändert sich zunächst kaum, nur die Kostenstruktur verschiebt sich.", korrekt: true, erklaerung: "EPC verwandelt eine Investition in einen aus Einsparungen bezahlten Servicevertrag — das Kapital kommt vom Contractor." },
        { text: "Der Staat schenkt dem Krankenhaus die Anlage.", korrekt: false, erklaerung: "Es ist kein Geschenk — der Contractor finanziert vor und refinanziert sich aus den Einsparungen." },
        { text: "Das Krankenhaus nimmt einen normalen Bankkredit auf.", korrekt: false, erklaerung: "Gerade nicht — der Witz des EPC ist, dass der Contractor die Finanzierung und das Risiko übernimmt, nicht das Krankenhaus." }
      ]
    }
  },
  "Q-EPC-WE2": {
    id: "Q-EPC-WE2", unitId: "U7-EPC", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-02"],
    data: {
      frage: "Wer trägt beim Guaranteed-Savings-Modell das Risiko, wenn die Einsparung ausbleibt?",
      optionen: [
        { text: "Der Contractor — er muss die Differenz zur garantierten Mindesteinsparung aus eigener Tasche ausgleichen; das Performance-Risiko liegt bei ihm.", korrekt: true, erklaerung: "Genau diese Garantie macht EPC für Kunden attraktiv: Sie zahlen nur, wenn die Einsparung wirklich eintritt." },
        { text: "Das Krankenhaus trägt das volle Risiko.", korrekt: false, erklaerung: "Beim Guaranteed-Savings-Modell übernimmt gerade der Contractor das Performance-Risiko, nicht der Kunde." },
        { text: "Der Staat springt bei Fehlbeträgen ein.", korrekt: false, erklaerung: "Keine Staatsgarantie — der Contractor haftet vertraglich für die garantierte Einsparung." }
      ]
    }
  },
  "Q-EPC-R1": {
    id: "Q-EPC-R1", unitId: "U7-EPC", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-CONTRACT-MGMT-02"],
    data: {
      frage: "Was ist der Unterschied zwischen 'Shared Savings' und 'Guaranteed Savings' beim EPC?",
      optionen: [
        { text: "Bei Shared Savings werden die Einsparungen zwischen Contractor und Kunde geteilt; bei Guaranteed Savings garantiert der Contractor eine Mindesteinsparung und trägt das Performance-Risiko.", korrekt: true, erklaerung: "Zwei Risiko-/Ertragsaufteilungen desselben Grundmodells — geteilte Einsparung vs. garantierte Mindesteinsparung." },
        { text: "Shared Savings ist für Kommunen, Guaranteed Savings für Industrie — sonst identisch.", korrekt: false, erklaerung: "Die Unterscheidung ist die Risiko-/Ertragsstruktur, nicht die Kundengruppe." },
        { text: "Bei beiden zahlt der Kunde die Investition sofort selbst.", korrekt: false, erklaerung: "Bei beiden finanziert der Contractor vor — der Unterschied liegt in der Aufteilung von Einsparung und Risiko." }
      ]
    }
  },
  "Q-EPC-R2": {
    id: "Q-EPC-R2", unitId: "U7-EPC", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-CONTRACT-MGMT-02"],
    data: {
      text: "Beim Energy Performance Contracting refinanziert sich der Dienstleister ausschließlich aus garantierten {{a}}. Der Einsparungsnachweis erfolgt nach dem {{b}}-Standard. Typische Vertragslaufzeiten liegen bei {{c}} Jahren.",
      luecken: {
        a: { loesungen: ["Energieeinsparungen", "Einsparungen"], erklaerung: "Die Refinanzierung kommt allein aus den erzielten Einsparungen." },
        b: { loesungen: ["IPMVP"], erklaerung: "IPMVP ist der internationale Standard für Messung und Verifizierung (M&V)." },
        c: { loesungen: ["8–15", "8-15", "8 bis 15"], erklaerung: "Lange Laufzeiten sind nötig, um langsam amortisierende Maßnahmen mitzufinanzieren." }
      },
      distraktoren: ["Fördermitteln", "1–2"]
    }
  },
  "Q-EPC-R3": {
    id: "Q-EPC-R3", unitId: "U7-EPC", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-02"],
    data: {
      frage: "Was ist die 'offene Flanke' des EPC-Modells?",
      optionen: [
        { text: "Messen & Verifizieren (M&V): Der Einsparungsnachweis ist aufwendig und streitanfällig — wer Einsparungen nicht wasserdicht belegt, verliert Marge und Reputation.", korrekt: true, erklaerung: "Da die ganze Refinanzierung an der nachgewiesenen Einsparung hängt, ist der M&V-Streit das zentrale Risiko." },
        { text: "Dass Effizienztechnik technisch nicht funktioniert.", korrekt: false, erklaerung: "Die Technik funktioniert — die Schwierigkeit ist der belastbare NACHWEIS der Einsparung, nicht die Technik selbst." },
        { text: "Dass Kunden kein Interesse an Effizienz haben.", korrekt: false, erklaerung: "Das Interesse ist da (Kosten sparen) — die Flanke ist der Nachweis der Einsparung über lange Vertragslaufzeiten." }
      ]
    }
  },
  "Q-EPC-R4": {
    id: "Q-EPC-R4", unitId: "U7-EPC", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-CONTRACT-MGMT-02"],
    data: {
      steckbriefId: "L3-CONTRACT-MGMT-02",
      erklaerungenProDimension: {
        regulierung: "Von EED/GEG getrieben, aber kein Erlösschutz — niedrig-mittel.",
        skalierbarkeit: "Jedes Projekt ist individuell (Gebäude, M&V), begrenzt skalierbar — mittel.",
        marktrisiko: "Performance-Risiko beim Contractor, aber vertraglich abgesichert — niedrig-mittel.",
        digitalisierung: "IoT-Monitoring ermöglicht kontinuierliche M&V — mittel.",
        wettbewerb: "Etablierte ESCOs plus Hersteller mit eigener Finanzierung — mittel.",
        nachhaltigkeit: "Direkte Energieeinsparung und Effizienz — höchste Stufe."
      }
    }
  },
  "Q-EPC-T1": {
    id: "Q-EPC-T1", unitId: "U7-EPC", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-CONTRACT-MGMT-02", "L3-PROSUM-MIETER-03"],
    data: {
      frage: "EPC (dieses Modul) und das Enpal-Mietmodell (Modul 6) folgen demselben Grundprinzip. Welchem?",
      optionen: [
        { text: "Beide nehmen dem Kunden die Vorabinvestition ab und refinanzieren sich aus dem laufenden Nutzen (Einsparung bzw. Miete < Stromkostenersparnis) — 'Energiewende ohne eigenes Kapital'.", korrekt: true, erklaerung: "Contracting und Miete lösen dasselbe Problem: Kapitalmangel des Kunden; der Anbieter finanziert vor und verdient über die Zeit." },
        { text: "Beide verkaufen dem Kunden die Anlage sofort zum vollen Preis.", korrekt: false, erklaerung: "Genau das Gegenteil — beide vermeiden die Vorabinvestition des Kunden, das ist ihr gemeinsamer Kern." },
        { text: "Beide sind reine Beratungsmodelle ohne Finanzierung.", korrekt: false, erklaerung: "Beide beinhalten gerade die Vorfinanzierung durch den Anbieter — das unterscheidet sie von reiner Beratung." }
      ]
    }
  },

  // ── U7-EIGENVERSORGUNG ──────────────────────────────────────────
  "Q-EIGENVERSORGUNG-WE1": {
    id: "Q-EIGENVERSORGUNG-WE1", unitId: "U7-EIGENVERSORGUNG", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-03"],
    data: {
      szenario: "Ein Stahlwerk verbraucht 100 GWh/Jahr und deckt davon alles aus eigener Erzeugung direkt am Ort. Das vermiedene Netzentgelt beträgt 8 ct/kWh. Wie hoch ist die jährliche Netzentgelt-Ersparnis (in Mio. €)?",
      eingabefelder: [{ key: "ersparnis", label: "Ersparnis/Jahr", einheit: "Mio. €" }],
      loesung: { ersparnis: { wert: 8, toleranz: 0.5 } },
      rechenweg: ["100 GWh = 100.000.000 kWh.", "Ersparnis = 100.000.000 kWh × 8 ct/kWh = 800.000.000 ct = 8.000.000 € = 8 Mio. €.", "Diese Ersparnis kommt allein aus der vermiedenen Netzdurchleitung — der Strompreis selbst ist dabei nebensächlich."]
    }
  },
  "Q-EIGENVERSORGUNG-WE2": {
    id: "Q-EIGENVERSORGUNG-WE2", unitId: "U7-EIGENVERSORGUNG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-03"],
    data: {
      frage: "Warum ist die regulatorische Vorprüfung (§3 Nr. 19 EEG) für das Eigenversorgungsprojekt so entscheidend?",
      optionen: [
        { text: "Nur bei striktem räumlichem Zusammenhang von Erzeugung und Verbrauch greift die Netzentgeltbefreiung — verfehlt das Projekt die Kriterien knapp, entfällt die gesamte 8-Mio.-Ersparnis.", korrekt: true, erklaerung: "Die ganze Wirtschaftlichkeit hängt an der korrekten Einordnung — deshalb verdient der Berater gerade an dieser Prüfung." },
        { text: "Weil ohne Prüfung die Anlage technisch nicht läuft.", korrekt: false, erklaerung: "Technisch läuft sie auch ohne Prüfung — es geht um die regulatorische Anerkennung der Netzentgeltbefreiung." },
        { text: "Weil die BNetzA sonst den Bau verbietet.", korrekt: false, erklaerung: "Der Bau ist erlaubt — die Prüfung entscheidet über die Befreiung und damit die Wirtschaftlichkeit, nicht über die Genehmigung an sich." }
      ]
    }
  },
  "Q-EIGENVERSORGUNG-R1": {
    id: "Q-EIGENVERSORGUNG-R1", unitId: "U7-EIGENVERSORGUNG", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-CONTRACT-MGMT-03"],
    data: {
      frage: "Was ist der größte wirtschaftliche Hebel der industriellen Eigenversorgung?",
      optionen: [
        { text: "Die Netzentgelt-Vermeidung: Direkt vor Ort verbrauchter Eigenstrom umgeht die Netzdurchleitung und spart ~8 ct/kWh.", korrekt: true, erklaerung: "Nicht der Strompreis, sondern das vermiedene Netzentgelt ist der dominante Einsparhebel." },
        { text: "Die EEG-Einspeisevergütung für den gesamten erzeugten Strom.", korrekt: false, erklaerung: "Eigenversorgung zielt auf Direktverbrauch, nicht auf Einspeisung — der Hebel ist die Netzentgeltvermeidung, nicht die Vergütung." },
        { text: "Ein staatlicher Investitionszuschuss für Industrieanlagen.", korrekt: false, erklaerung: "Der Kernhebel ist strukturell (vermiedene Netzentgelte), nicht ein Zuschuss." }
      ]
    }
  },
  "Q-EIGENVERSORGUNG-R2": {
    id: "Q-EIGENVERSORGUNG-R2", unitId: "U7-EIGENVERSORGUNG", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-CONTRACT-MGMT-03"],
    data: {
      text: "Bei der Eigenversorgung (§3 Nr. 19 EEG) versorgt eine eigene Anlage die {{a}} Verbrauchsstätte. Eine {{b}} (§3 Nr. 12 EnWG) verbindet Erzeuger und Abnehmer ohne öffentliches Netz. Der Hauptvorteil ist die vermiedene {{c}}.",
      luecken: {
        a: { loesungen: ["angrenzende", "unmittelbar angrenzende", "räumlich zusammenhängende"], erklaerung: "Nur bei räumlichem Zusammenhang greift die Befreiung." },
        b: { loesungen: ["Direktleitung"], erklaerung: "Die Direktleitung ist eine private Leitung ohne öffentliches Netz." },
        c: { loesungen: ["Netzentgelt", "Netzentgelte", "Netzdurchleitung"], erklaerung: "Die vermiedenen Netzentgelte sind der größte Hebel." }
      },
      distraktoren: ["entfernte", "Börsengebühr"]
    }
  },
  "Q-EIGENVERSORGUNG-R3": {
    id: "Q-EIGENVERSORGUNG-R3", unitId: "U7-EIGENVERSORGUNG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-CONTRACT-MGMT-03"],
    data: {
      frage: "Warum ist die industrielle Eigenversorgung selbst der Angreifer — und wo ist sie verwundbar?",
      optionen: [
        { text: "Sie entzieht Netz und Lieferanten die Mengen; verwundbar ist sie regulatorisch — jede Netzentgeltreform (AgNes: Kostenbeteiligung der Erzeuger, faire Kostenverteilung) kann die Wirtschaftlichkeit der Umgehung kippen.", korrekt: true, erklaerung: "Das Modell lebt von einer regulatorischen Lücke (Netzentgeltbefreiung), die durch die AgNes-Reform verkleinert werden könnte." },
        { text: "Sie ist verwundbar, weil Eigenstrom technisch unzuverlässig ist.", korrekt: false, erklaerung: "Die Verwundbarkeit ist regulatorisch (Entgeltreform), nicht technisch — Eigenerzeugung erhöht sogar die Resilienz." },
        { text: "Sie ist gar nicht angreifbar, weil sie unabhängig vom Netz ist.", korrekt: false, erklaerung: "Gerade die Netz-Unabhängigkeit ist der regulatorische Streitpunkt: Wer das Netz umgeht, aber im Notfall braucht, steht in der AgNes-Debatte." }
      ]
    }
  },
  "Q-EIGENVERSORGUNG-R4": {
    id: "Q-EIGENVERSORGUNG-R4", unitId: "U7-EIGENVERSORGUNG", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-CONTRACT-MGMT-03"],
    data: {
      steckbriefId: "L3-CONTRACT-MGMT-03",
      erklaerungenProDimension: {
        regulierung: "Lebt von regulatorischen Befreiungen, die reformgefährdet sind (AgNes) — mittel.",
        skalierbarkeit: "Jedes Projekt ist standortgebunden und einzeln zu genehmigen — niedrig.",
        marktrisiko: "Kostenvermeidung statt Marktexposure, aber Regulierungsrisiko — niedrig-mittel.",
        digitalisierung: "Anlagen-Engineering, kein digital-natives Geschäft — mittel.",
        wettbewerb: "Nischenmarkt mit spezialisierten Engineering-Partnern — niedrig.",
        nachhaltigkeit: "Eigen-EE am Verbrauchsort, hoher Beitrag — mittel-hoch."
      }
    }
  },
  "Q-EIGENVERSORGUNG-T1": {
    id: "Q-EIGENVERSORGUNG-T1", unitId: "U7-EIGENVERSORGUNG", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-CONTRACT-MGMT-03", "L3-VERTRIEB-STADTWERK-01"],
    data: {
      frage: "Industrielle Eigenversorgung und der Stadtwerke-Querverbund (Modul 4) sind beide von Regulierungsreformen bedroht. Was ist der gemeinsame Kern der Bedrohung?",
      optionen: [
        { text: "Beide beruhen auf einem strukturellen Kostenvorteil, der aus der aktuellen Regel-/Steuersystematik stammt (Netzentgeltbefreiung bzw. §4-Abs.-6-KStG-Querverbund) — jede Reform dieser Systematik kann den Vorteil entwerten.", korrekt: true, erklaerung: "Beide Modelle sind 'regulatorische Konstruktionen': ihr Vorteil ist kein Marktvorteil, sondern ein Regel-Vorteil, der politisch angreifbar ist." },
        { text: "Beide sind durch neue Wettbewerber am Markt bedroht.", korrekt: false, erklaerung: "Die Bedrohung ist regulatorisch (Reform der Systematik), nicht neue Marktkonkurrenz." },
        { text: "Beide verlieren Kunden an Neolieferanten.", korrekt: false, erklaerung: "Der gemeinsame Nenner ist die Abhängigkeit von einer regulatorisch-steuerlichen Sonderstellung, nicht der Endkundenwettbewerb." }
      ]
    }
  }

});

// ════════════════════════════════════════════════════════════════════
// MODUL 8 — DAS ÖKOSYSTEM DRUMHERUM
// ════════════════════════════════════════════════════════════════════
Object.assign(LERN_QUIZ_ITEMS, {

  // ── U8-DEVELOP ──────────────────────────────────────────────────
  "Q-DEVELOP-WE1": {
    id: "Q-DEVELOP-WE1", unitId: "U8-DEVELOP", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-PROJ-WIND-01"],
    data: {
      szenario: "Ein Projektierer verkauft ein fertig genehmigtes 30-MW-Windprojekt für 300.000 €/MW. Die Entwicklungskosten lagen bei 4 Mio. €. Wie hoch ist der Verkaufserlös (in Mio. €) und der Rohgewinn (in Mio. €)?",
      eingabefelder: [{ key: "erloes", label: "Verkaufserlös", einheit: "Mio. €" }, { key: "gewinn", label: "Rohgewinn", einheit: "Mio. €" }],
      loesung: { erloes: { wert: 9, toleranz: 0.5 }, gewinn: { wert: 5, toleranz: 0.5 } },
      rechenweg: ["Verkaufserlös = 30 MW × 300.000 €/MW = 9.000.000 € = 9 Mio. €.", "Rohgewinn = Erlös − Entwicklungskosten = 9 − 4 = 5 Mio. €.", "Kapitalleicht: Gebunden waren nur die 4 Mio. € Entwicklungskosten, keine Baukosten — genau das macht die Strategie so hebelstark."]
    }
  },
  "Q-DEVELOP-WE2": {
    id: "Q-DEVELOP-WE2", unitId: "U8-DEVELOP", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-PROJ-WIND-01"],
    data: {
      frage: "Warum ist ein großes exklusiv gepachtetes Flächennetzwerk der eigentliche Schutzwall des Projektierers?",
      optionen: [
        { text: "Jede gesicherte Fläche ist eine Option auf ein künftiges Genehmigungsverfahren, die Wettbewerbern verschlossen bleibt — Fläche und Genehmigung sind der knappe Engpass.", korrekt: true, erklaerung: "Ohne Fläche kein Projekt; wer die knappen geeigneten Flächen exklusiv hält, kontrolliert die Pipeline." },
        { text: "Weil größere Flächen automatisch höhere Einspeisevergütungen bekommen.", korrekt: false, erklaerung: "Die Vergütung hängt am Ausschreibungsgebot, nicht an der Fläche — der Wert liegt in der exklusiven Genehmigungsoption." },
        { text: "Weil man auf großen Flächen billiger baut.", korrekt: false, erklaerung: "Der Projektierer baut gar nicht selbst — er verkauft das genehmigte Projekt; der Flächenwert liegt in der Genehmigungsoption." }
      ]
    }
  },
  "Q-DEVELOP-R1": {
    id: "Q-DEVELOP-R1", unitId: "U8-DEVELOP", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-PROJ-WIND-01"],
    data: {
      frage: "Was ist das Kernasset, das ein Develop-to-Sell-Projektierer verkauft?",
      optionen: [
        { text: "Das Bündel aus Genehmigungen und Gutachten (BImSchG, Netzanschluss, Artenschutz), das den Bau erlaubt — die Anlage selbst existiert noch nicht.", korrekt: true, erklaerung: "Der Projektierer verkauft ein baureifes, genehmigtes Projektrecht, kein fertiges Kraftwerk." },
        { text: "Die fertig gebaute und ans Netz angeschlossene Windturbine.", korrekt: false, erklaerung: "Develop-to-Sell verkauft VOR dem Bau — der Investor errichtet die Anlage danach selbst." },
        { text: "Einen langfristigen Stromliefervertrag.", korrekt: false, erklaerung: "Verkauft wird das genehmigte Projektrecht, nicht der spätere Stromvertrag." }
      ]
    }
  },
  "Q-DEVELOP-R2": {
    id: "Q-DEVELOP-R2", unitId: "U8-DEVELOP", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-PROJ-WIND-01"],
    data: {
      text: "Der Projektierer sichert {{a}}, holt die {{b}}-Genehmigung ein und verkauft das fertige Projekt für 150.000–400.000 €/MW an einen {{c}}.",
      luecken: {
        a: { loesungen: ["Flächen", "Fläche"], erklaerung: "Flächensicherung per Pacht/Kauf ist der erste Schritt." },
        b: { loesungen: ["BImSchG"], erklaerung: "Die BImSchG-Genehmigung ist das zentrale, jahrelange Genehmigungsverfahren." },
        c: { loesungen: ["Investor", "Fonds", "Infrastrukturfonds"], erklaerung: "Käufer sind Infrastrukturfonds, Versorger oder Stadtwerke." }
      },
      distraktoren: ["Kunden", "GPKE"]
    }
  },
  "Q-DEVELOP-R3": {
    id: "Q-DEVELOP-R3", unitId: "U8-DEVELOP", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-PROJ-WIND-01"],
    data: {
      frage: "Wodurch wird die Develop-to-Sell-Marge zunehmend angegriffen?",
      optionen: [
        { text: "Utilities und Fonds kaufen ganze Projektpipelines im Voraus (Forward Deals) und drücken die Einzelverkaufsmarge; aggressive Flächensicherer treiben die Pachtpreise hoch.", korrekt: true, erklaerung: "Der Wettbewerb um Fläche und der Direktkauf von Pipelines verkleinern die Knappheitsprämie der Entwickler." },
        { text: "Durch ein Verbot des Projektrechte-Handels.", korrekt: false, erklaerung: "Der Handel mit genehmigten Projekten ist erlaubt und üblich — der Druck kommt aus Wettbewerb, nicht aus einem Verbot." },
        { text: "Weil Genehmigungen inzwischen kostenlos erteilt werden.", korrekt: false, erklaerung: "Genehmigungsverfahren bleiben teuer und langwierig — genau darin liegt ja der Wert; angegriffen wird die Marge über Forward Deals und Flächenkonkurrenz." }
      ]
    }
  },
  "Q-DEVELOP-R4": {
    id: "Q-DEVELOP-R4", unitId: "U8-DEVELOP", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-PROJ-WIND-01"],
    data: {
      steckbriefId: "L3-PROJ-WIND-01",
      erklaerungenProDimension: {
        regulierung: "Vom Genehmigungsrecht abhängig, aber kein Erlösschutz — niedrig.",
        skalierbarkeit: "Jedes Projekt einzeln zu entwickeln und zu genehmigen — niedrig.",
        marktrisiko: "Entwicklungsrisiko (Genehmigung, Klagen), aber kapitalleicht — mittel.",
        digitalisierung: "Genehmigungs- und Flächenmanagement, wenig digital-nativ — niedrig.",
        wettbewerb: "Harter Flächen- und Pipeline-Wettbewerb — hoch.",
        nachhaltigkeit: "Ermöglicht den EE-Zubau direkt — höchste Stufe."
      }
    }
  },
  "Q-DEVELOP-T1": {
    id: "Q-DEVELOP-T1", unitId: "U8-DEVELOP", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-PROJ-WIND-01", "L3-ERZ-EE-03"],
    data: {
      frage: "Der Develop-to-Sell-Projektierer und der Offshore-Windentwickler (Modul 2) unterscheiden sich in einem entscheidenden Punkt. Welchem?",
      optionen: [
        { text: "Der Develop-to-Sell-Projektierer ist kapitalleicht (verkauft vor dem Bau, bindet nur Entwicklungskosten); der Offshore-Entwickler ist extrem kapitalintensiv (Milliarden-Capex) und behält oft den 20-jährigen O&M-Betrieb als profitabelste Phase.", korrekt: true, erklaerung: "Onshore-Projektentwicklung monetarisiert die Genehmigung und steigt aus; Offshore trägt Milliarden und verdient über Jahrzehnte am Betrieb — zwei gegensätzliche Kapitalstrategien." },
        { text: "Beide behalten die Anlage 20 Jahre und betreiben sie selbst.", korrekt: false, erklaerung: "Der Develop-to-Sell-Projektierer verkauft gerade vor dem Betrieb — nur der Offshore-Entwickler behält oft den Betrieb." },
        { text: "Beide sind reine Merchant-Stromhändler.", korrekt: false, erklaerung: "Weder der eine noch der andere ist primär Stromhändler — der eine handelt Projektrechte, der andere baut und betreibt Anlagen." }
      ]
    }
  },

  // ── U8-PROJEKTFINANZ ────────────────────────────────────────────
  "Q-PROJEKTFINANZ-WE1": {
    id: "Q-PROJEKTFINANZ-WE1", unitId: "U8-PROJEKTFINANZ", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-FINANZ-PROJEKT-01"],
    data: {
      frage: "Was bedeutet 'Non-Recourse' bei der Projektfinanzierung?",
      optionen: [
        { text: "Das Darlehen ist ausschließlich durch die Projekt-Cashflows besichert — bei Ausfall hat die Bank keinen Rückgriff auf das sonstige Vermögen des Investors (Sponsor).", korrekt: true, erklaerung: "Das Risiko ist auf das Projekt begrenzt; genau deshalb sind die gesicherten EEG-Cashflows als Sicherheit so wichtig." },
        { text: "Dass der Investor überhaupt kein Eigenkapital einbringen muss.", korrekt: false, erklaerung: "Der Sponsor bringt sehr wohl 20–30% Eigenkapital ein — 'Non-Recourse' betrifft die Haftung, nicht den Eigenkapitalanteil." },
        { text: "Dass die Bank das Projekt selbst betreibt.", korrekt: false, erklaerung: "Die Bank finanziert nur — betrieben wird das Projekt vom SPV; Non-Recourse meint die begrenzte Haftung." }
      ]
    }
  },
  "Q-PROJEKTFINANZ-WE2": {
    id: "Q-PROJEKTFINANZ-WE2", unitId: "U8-PROJEKTFINANZ", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-FINANZ-PROJEKT-01"],
    data: {
      frage: "Warum wird aus 10% Projektrendite eine Eigenkapitalrendite von 25–40%?",
      optionen: [
        { text: "Leverage-Hebel: Weil 75% günstiges Fremdkapital (4–5%) eingesetzt wird, bleibt die Differenz zwischen Projekt- und Fremdkapitalrendite überproportional beim kleinen Eigenkapitalanteil.", korrekt: true, erklaerung: "Je höher der Fremdkapitalanteil bei positiver Zinsdifferenz, desto stärker der Hebel auf die Eigenkapitalrendite." },
        { text: "Weil die EEG-Vergütung 40% beträgt.", korrekt: false, erklaerung: "Die EEG-Vergütung sichert nur den Cashflow — die hohe EK-Rendite entsteht durch den Fremdkapitalhebel, nicht durch die Vergütungshöhe." },
        { text: "Weil die Bank dem Investor einen Bonus zahlt.", korrekt: false, erklaerung: "Es gibt keinen Bonus — die hohe EK-Rendite ist ein rein rechnerischer Hebeleffekt der Kapitalstruktur." }
      ]
    }
  },
  "Q-PROJEKTFINANZ-R1": {
    id: "Q-PROJEKTFINANZ-R1", unitId: "U8-PROJEKTFINANZ", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-FINANZ-PROJEKT-01"],
    data: {
      frage: "Warum vergibt die Bank für EE-Projekte einen so hohen Fremdkapitalanteil (70–80%) zu niedrigen Zinsen?",
      optionen: [
        { text: "Die EEG-Cashflows sind über 20 Jahre gesetzlich gesichert — das ergibt ein stabiles Rating und ein geringes Ausfallrisiko, anders als bei einem normalen Unternehmenskredit.", korrekt: true, erklaerung: "Die Cashflow-Sicherheit ist die Grundlage der günstigen, hohen Fremdfinanzierung — dasselbe Prinzip wie bei PPAs und Kapazitätsmarkt." },
        { text: "Weil die Bank das Projekt bei Ausfall gewinnbringend weiterverkaufen kann.", korrekt: false, erklaerung: "Der Weiterverkauf ist unsicher — der Grund für die günstige Finanzierung ist der gesicherte laufende Cashflow, nicht der Restwert." },
        { text: "Weil der Staat jeden Kredit garantiert.", korrekt: false, erklaerung: "Es gibt keine pauschale Staatsgarantie — die Sicherheit kommt aus den regulierten EEG-Cashflows." }
      ]
    }
  },
  "Q-PROJEKTFINANZ-R2": {
    id: "Q-PROJEKTFINANZ-R2", unitId: "U8-PROJEKTFINANZ", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-FINANZ-PROJEKT-02"],
    data: {
      text: "Ein {{a}} ist eine Anleihe, deren Erlöse nur in grüne Projekte fließen. ESG-Investoren fragen sie stärker nach, was den Zinssatz um 2–10 Basispunkte senkt — das sogenannte {{b}}. Verifiziert wird das über eine {{c}}.",
      luecken: {
        a: { loesungen: ["Green Bond", "Green-Bond", "grüne Anleihe"], erklaerung: "Green Bonds binden die Mittelverwendung an grüne Projekte." },
        b: { loesungen: ["Greenium"], erklaerung: "Das Greenium ist der Zinsvorteil aus der höheren ESG-Nachfrage." },
        c: { loesungen: ["Second-Party-Opinion", "Second Party Opinion", "SPO"], erklaerung: "Eine SPO (z.B. Sustainalytics) bestätigt die Grünheit der Anleihe." }
      },
      distraktoren: ["Pfandbrief", "Malus"]
    }
  },
  "Q-PROJEKTFINANZ-R3": {
    id: "Q-PROJEKTFINANZ-R3", unitId: "U8-PROJEKTFINANZ", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-FINANZ-PROJEKT-01"],
    data: {
      frage: "Wodurch geraten Banken im Projektfinanzierungsgeschäft unter Druck — und wo verteidigen sie sich?",
      optionen: [
        { text: "Debt Funds und institutionelle Direktkreditgeber bieten schneller und mit höherem Leverage; verteidigungsfähig ist die Strukturierungskompetenz bei neuen Asset-Klassen (BESS, H2, Ladeinfrastruktur), deren Cashflows noch nicht standardisiert sind.", korrekt: true, erklaerung: "Standardfinanzierung wird zur Ware; das komplexe Neuland (Speicher, H2) bleibt Bankgeschäft." },
        { text: "Weil die BNetzA die Projektfinanzierung reguliert.", korrekt: false, erklaerung: "Projektfinanzierung ist Bankgeschäft, nicht BNetzA-reguliert — der Druck kommt von alternativen Kreditgebern." },
        { text: "Weil EE-Projekte keine Finanzierung mehr brauchen.", korrekt: false, erklaerung: "Der Kapitalbedarf ist riesig — der Wettbewerb kommt von neuen Kreditgebern, nicht von wegfallendem Bedarf." }
      ]
    }
  },
  "Q-PROJEKTFINANZ-R4": {
    id: "Q-PROJEKTFINANZ-R4", unitId: "U8-PROJEKTFINANZ", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-FINANZ-PROJEKT-01"],
    data: {
      steckbriefId: "L3-FINANZ-PROJEKT-01",
      erklaerungenProDimension: {
        regulierung: "Bankregulierung (Basel IV) prägt, aber kein Erlösschutz — mittel.",
        skalierbarkeit: "Standardisierte Strukturen über viele Projekte skalierbar — mittel-hoch.",
        marktrisiko: "Cashflow-besichert und diversifiziert, geringes Ausfallrisiko — niedrigste Stufe.",
        digitalisierung: "Relationship- und Strukturierungsgeschäft, wenig digital — niedrig.",
        wettbewerb: "Banken vs. Debt Funds vs. Direktkreditgeber — mittel.",
        nachhaltigkeit: "Finanziert EE-Ausbau, aber selbst neutral — mittel."
      }
    }
  },
  "Q-PROJEKTFINANZ-T1": {
    id: "Q-PROJEKTFINANZ-T1", unitId: "U8-PROJEKTFINANZ", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-FINANZ-PROJEKT-01", "L3-ERZ-EE-02"],
    data: {
      frage: "Projektfinanzierung (dieses Modul) und Corporate PPA (Modul 2) hängen eng zusammen. Wie verstärken sie sich?",
      optionen: [
        { text: "Ein PPA liefert den langfristig gesicherten Cashflow, den die Non-Recourse-Finanzierung als Sicherheit braucht — der PPA macht das Projekt bankfähig, die Finanzierung macht den Bau möglich.", korrekt: true, erklaerung: "PPA und Projektfinanzierung sind zwei Zahnräder desselben Getriebes: Cashflow-Sicherung ermöglicht günstige Fremdfinanzierung." },
        { text: "Sie konkurrieren um dieselben Investoren und schließen sich aus.", korrekt: false, erklaerung: "Sie ergänzen sich — der PPA ist gerade die Cashflow-Grundlage für die Finanzierung, kein Konkurrent." },
        { text: "Beide ersetzen die EEG-Förderung durch Börsenhandel.", korrekt: false, erklaerung: "Beide sichern Cashflows ab (statt sie dem Spotmarkt auszusetzen) — das Gegenteil von reinem Börsenhandel." }
      ]
    }
  },

  // ── U8-BERATUNG ─────────────────────────────────────────────────
  "Q-BERATUNG-WE1": {
    id: "Q-BERATUNG-WE1", unitId: "U8-BERATUNG", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-BERAT-STRAT-01"],
    data: {
      frage: "Was bringt McKinsey in ein Kohleausstiegs-Mandat vor allem ein?",
      optionen: [
        { text: "Benchmarks aus 50+ vergleichbaren Transformationsprojekten weltweit — wie andere Versorger umgebaut haben, mit welchen Strukturen und Fehlern.", korrekt: true, erklaerung: "Die externe Vergleichsperspektive aus vielen Projekten ist ein Kernwert der Top-Beratung." },
        { text: "Eigenes Kapital zur Finanzierung des Umbaus.", korrekt: false, erklaerung: "Berater bringen kein Kapital — sie bringen Wissen, Benchmarks und Legitimation." },
        { text: "Fertige Genehmigungen für neue Windparks.", korrekt: false, erklaerung: "Genehmigungen liefert der Projektentwickler, nicht der Strategieberater." }
      ]
    }
  },
  "Q-BERATUNG-WE2": {
    id: "Q-BERATUNG-WE2", unitId: "U8-BERATUNG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-BERAT-STRAT-01"],
    data: {
      frage: "Warum ist die 'politische Legitimation' oft der wichtigste Wert einer Top-Beratung?",
      optionen: [
        { text: "Eine unbequeme Entscheidung (z.B. profitable Kohleblöcke stilllegen) lässt sich im Vorstand mit dem Briefkopf einer Top-Beratung leichter gegen interne Widerstände durchsetzen als mit demselben Rat aus dem eigenen Haus.", korrekt: true, erklaerung: "Externe Autorität senkt den internen Widerstand — ein oft unterschätzter, aber realer Wert der Beratung." },
        { text: "Weil Berater die Entscheidung rechtlich verbindlich machen.", korrekt: false, erklaerung: "Berater haben keine rechtliche Entscheidungsgewalt — ihr Wert ist die Legitimation, nicht die Rechtsverbindlichkeit." },
        { text: "Weil der Vorstand die Verantwortung vollständig an die Berater abgibt.", korrekt: false, erklaerung: "Die Verantwortung bleibt beim Vorstand — die Beratung erleichtert nur die interne Durchsetzung." }
      ]
    }
  },
  "Q-BERATUNG-R1": {
    id: "Q-BERATUNG-R1", unitId: "U8-BERATUNG", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-BERAT-STRAT-01"],
    data: {
      frage: "Wie verdienen Top-Strategieberatungen ihr Geld?",
      optionen: [
        { text: "Über Tagessätze (Partner 5.000–12.000 €/Tag) oder Pauschalmandate für strategische Projekte.", korrekt: true, erklaerung: "Das Beratungsgeschäft ist zeit-/mandatsbasiert, nicht erfolgs- oder produktbasiert." },
        { text: "Über eine Provision auf den verkauften Strom ihrer Klienten.", korrekt: false, erklaerung: "Berater handeln keinen Strom und bekommen keine Strommarge — sie verkaufen ihre Zeit/Expertise." },
        { text: "Über Eigenkapitalbeteiligungen an den beratenen Konzernen.", korrekt: false, erklaerung: "Klassische Strategieberatung nimmt keine Beteiligungen — sie rechnet Tagessätze ab." }
      ]
    }
  },
  "Q-BERATUNG-R2": {
    id: "Q-BERATUNG-R2", unitId: "U8-BERATUNG", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-BERAT-STRAT-01"],
    data: {
      text: "Der Wert der Top-Beratung entsteht aus externen {{a}}, temporärer Talent-Verstärkung und politischer {{b}}. Über {{c}} des Umsatzes wird mit Bestandskunden erzielt.",
      luecken: {
        a: { loesungen: ["Benchmarks", "Vergleichsdaten"], erklaerung: "Vergleichsdaten aus vielen Projekten sind ein zentraler Werthebel." },
        b: { loesungen: ["Legitimation"], erklaerung: "Legitimation erleichtert die interne Durchsetzung von Entscheidungen." },
        c: { loesungen: ["70%"], erklaerung: "Über 70% des Umsatzes kommt von wiederkehrenden Bestandskunden." }
      },
      distraktoren: ["Krediten", "10%"]
    }
  },
  "Q-BERATUNG-R3": {
    id: "Q-BERATUNG-R3", unitId: "U8-BERATUNG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-BERAT-STRAT-01"],
    data: {
      frage: "Welcher Teil des Beratungsgeschäfts ist am stärksten von KI-Automatisierung bedroht?",
      optionen: [
        { text: "Die Leverage-Pyramide aus Junior-Beratern (Analyse- und Slide-Arbeit) — genau diese kommoditisieren KI-Tools; verteidigungsfähig bleiben C-Level-Zugang und Transaktionsnähe.", korrekt: true, erklaerung: "Die standardisierbare Analysearbeit ist das erste Automatisierungsopfer; die Beziehungs- und Legitimationsebene bleibt." },
        { text: "Der Partner-Zugang zum Vorstand.", korrekt: false, erklaerung: "Gerade der C-Level-Zugang ist verteidigungsfähig — bedroht ist die Junior-Analysearbeit darunter." },
        { text: "Die politische Legitimationsfunktion.", korrekt: false, erklaerung: "Legitimation lässt sich nicht automatisieren — sie ist Teil der verteidigungsfähigen Ebene." }
      ]
    }
  },
  "Q-BERATUNG-R4": {
    id: "Q-BERATUNG-R4", unitId: "U8-BERATUNG", format: "bmc-puzzle", bloom: "K3",
    steckbriefIds: ["L3-BERAT-STRAT-01", "L3-CONTRACT-MGMT-01"],
    data: { steckbriefId: "L3-BERAT-STRAT-01", distraktorSteckbriefId: "L3-CONTRACT-MGMT-01" }
  },
  "Q-BERATUNG-T1": {
    id: "Q-BERATUNG-T1", unitId: "U8-BERATUNG", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-BERAT-STRAT-01", "L3-CONTRACT-MGMT-01"],
    data: {
      frage: "Strategieberatung und Energieeinkaufsberatung (Modul 7) sind beide Beratung — aber mit gegensätzlichem Erlösmodell. Wie?",
      optionen: [
        { text: "Die Strategieberatung rechnet zeitbasiert (Tagessätze) für Grundsatzentscheidungen ab; die Einkaufsberatung arbeitet oft erfolgsbasiert (Honorar als % der nachgewiesenen Einsparung) — Zeit vs. Ergebnis.", korrekt: true, erklaerung: "Zwei Beratungsarten, zwei Vergütungslogiken: Die eine verkauft Urteil/Legitimation, die andere messbare Einsparung." },
        { text: "Beide arbeiten ausschließlich auf Erfolgshonorar.", korrekt: false, erklaerung: "Die Strategieberatung rechnet gerade zeitbasiert ab — Erfolgshonorar ist typisch für die Einkaufsberatung." },
        { text: "Beide verkaufen Software statt Beratung.", korrekt: false, erklaerung: "Beide sind Beratungsmodelle, keine Softwareanbieter — der Unterschied liegt in der Vergütungslogik." }
      ]
    }
  },

  // ── U8-RECHT ────────────────────────────────────────────────────
  "Q-RECHT-WE1": {
    id: "Q-RECHT-WE1", unitId: "U8-RECHT", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-RECHT-KANZLEI-02"],
    data: {
      frage: "Warum können §46-Konzessionsverfahren für Kanzleien so lukrativ sein?",
      optionen: [
        { text: "Ein einzelnes streitiges Verfahren kann sich über Jahre bis vor BGH/OLG ziehen und erzeugt kontinuierliche Mandatsumsätze weit über eine einmalige Vertragsberatung hinaus.", korrekt: true, erklaerung: "Hohe Streitwerte (Netzwert 100–500 Mio. €) plus jahrelange Verfahren ergeben Mehrjahresmandate." },
        { text: "Weil die Kanzlei am Netzwert prozentual beteiligt wird.", korrekt: false, erklaerung: "Kanzleien rechnen Stundensätze/Pauschalen ab, keine Netzwert-Beteiligung — der Hebel ist die Verfahrensdauer." },
        { text: "Weil §46-Verfahren gesetzlich mit Mindesthonoraren belegt sind.", korrekt: false, erklaerung: "Es gibt keine gesetzlichen Mindesthonorare hier — der Wert entsteht aus Spezialisierung und Verfahrensdauer." }
      ]
    }
  },
  "Q-RECHT-WE2": {
    id: "Q-RECHT-WE2", unitId: "U8-RECHT", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-RECHT-KANZLEI-02"],
    data: {
      frage: "Worin liegt der eigentliche ökonomische Hebel einer §46-Spezialkanzlei wie BBH?",
      optionen: [
        { text: "In der genauen Kenntnis der sich ständig ändernden BGH-Rechtsprechung zur Diskriminierungsfreiheit — sie erlaubt, Verfahren so zu gestalten, dass sie später nicht wegen Verfahrensfehlern angefochten werden können.", korrekt: true, erklaerung: "Aktuelle Rechtsprechungskenntnis ist die Eintrittsbarriere: Sie schützt sowohl Bieter als auch Kommunen vor teuren Verfahrensfehlern." },
        { text: "In der Fähigkeit, das Netz selbst zu betreiben.", korrekt: false, erklaerung: "Kanzleien betreiben keine Netze — ihr Wert ist die rechtliche Verfahrensführung." },
        { text: "In günstigeren Netzentgelten für ihre Mandanten.", korrekt: false, erklaerung: "Netzentgelte setzt die BNetzA — die Kanzlei gestaltet das Konzessionsverfahren rechtssicher, nicht die Entgelte." }
      ]
    }
  },
  "Q-RECHT-R1": {
    id: "Q-RECHT-R1", unitId: "U8-RECHT", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-RECHT-KANZLEI-02"],
    data: {
      frage: "Was regelt §46 EnWG?",
      optionen: [
        { text: "Die Vergabe von Strom-/Gasverteilnetz-Konzessionen (Wegenutzungsrechte), die Kommunen alle ~20 Jahre neu ausschreiben.", korrekt: true, erklaerung: "§46 ist die Rechtsgrundlage der Konzessionsvergabe — der Anknüpfungspunkt für Rekommunalisierung (vgl. Modul 3)." },
        { text: "Die Höhe der Netzentgelte.", korrekt: false, erklaerung: "Netzentgelte regelt die ARegV (§21), nicht §46 — dieser betrifft die Wegekonzession." },
        { text: "Die technischen Anschlussbedingungen für Kraftwerke.", korrekt: false, erklaerung: "§46 betrifft die Konzession (Wegerecht), nicht technische Anschlussregeln." }
      ]
    }
  },
  "Q-RECHT-R2": {
    id: "Q-RECHT-R2", unitId: "U8-RECHT", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-RECHT-KANZLEI-02"],
    data: {
      text: "§46-Konzessionen werden alle {{a}} Jahre neu vergeben; der Netzwert eines mittelgroßen VNB liegt bei {{b}} Mio. €. Ein gewonnenes Mandat kann {{c}} Jahre Dauermandat bedeuten.",
      luecken: {
        a: { loesungen: ["20"], erklaerung: "20 Jahre ist die übliche Konzessionslaufzeit." },
        b: { loesungen: ["100–500", "100-500", "100 bis 500"], erklaerung: "Hohe Streitwerte machen das Feld lukrativ." },
        c: { loesungen: ["5–15", "5-15", "5 bis 15"], erklaerung: "Ein gewonnenes Verfahren bindet den Betreiber langfristig an die Kanzlei." }
      },
      distraktoren: ["5", "1–2"]
    }
  },
  "Q-RECHT-R3": {
    id: "Q-RECHT-R3", unitId: "U8-RECHT", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-RECHT-KANZLEI-02"],
    data: {
      frage: "Warum ist das §46-Geschäft trotz hoher Margen strukturell wackelig?",
      optionen: [
        { text: "Es ist ein zyklisches Nischenmonopol — zwischen den 20-jährigen Konzessionswellen bricht das Mandatsvolumen ein, und große Kanzleien kaufen sich per Lateral Hire in die Nische ein.", korrekt: true, erklaerung: "Die Nachfrage kommt in Wellen; in den Tälern trägt die Spezialisierung kaum, was das Modell verwundbar macht." },
        { text: "Weil §46-Verfahren gesetzlich abgeschafft werden.", korrekt: false, erklaerung: "§46 bleibt bestehen (die Welle hält bis ~2030 an) — die Schwäche ist die Zyklizität, keine Abschaffung." },
        { text: "Weil Kommunen keine Beratung mehr brauchen.", korrekt: false, erklaerung: "Kommunen brauchen weiterhin Beratung — das Problem ist die schwankende Verfahrensfrequenz, nicht wegfallende Nachfrage." }
      ]
    }
  },
  "Q-RECHT-R4": {
    id: "Q-RECHT-R4", unitId: "U8-RECHT", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-RECHT-KANZLEI-02"],
    data: {
      steckbriefId: "L3-RECHT-KANZLEI-02",
      erklaerungenProDimension: {
        regulierung: "Das gesamte Geschäft lebt vom Regulierungsrecht (§46, BGH) — höchste Stufe.",
        skalierbarkeit: "Hochspezialisierte Einzelmandate, kaum skalierbar — niedrigste Stufe.",
        marktrisiko: "Zyklisch, aber pro Mandat kalkulierbar — niedrig-mittel.",
        digitalisierung: "Klassische Rechtsberatung, kaum digital — niedrigste Stufe.",
        wettbewerb: "Wenige Spezialisten, hohe Eintrittsbarrieren — niedrig-mittel.",
        nachhaltigkeit: "Verfahrensrecht ohne direkten Klimabezug — niedrig."
      }
    }
  },
  "Q-RECHT-T1": {
    id: "Q-RECHT-T1", unitId: "U8-RECHT", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-RECHT-KANZLEI-02", "L3-VNB-BETREIB-05"],
    data: {
      frage: "Die §46-Konzessionskanzlei (dieses Modul) und die Rekommunalisierung (Modul 3) beschreiben dieselbe Situation aus zwei Blickwinkeln. Welche?",
      optionen: [
        { text: "Das Auslaufen der Netzkonzession: Modul 3 sah den wirtschaftlich-strategischen Rückkauf durch die Kommune, dieses Modul die juristische Begleitung genau dieses jahrelangen Konzessionsverfahrens.", korrekt: true, erklaerung: "Rekommunalisierung ist der Anlass, das §46-Mandat die anwaltliche Dienstleistung dazu — zwei Seiten desselben Vorgangs." },
        { text: "Beide beschreiben den Bau eines neuen Kraftwerks.", korrekt: false, erklaerung: "Es geht um die Netzkonzession, nicht um Kraftwerksbau." },
        { text: "Beide betreffen den Stromvertrieb an Endkunden.", korrekt: false, erklaerung: "Beide betreffen das Netz (Konzession/Eigentum), nicht den Endkundenvertrieb." }
      ]
    }
  },

  // ── U8-VERSICHERUNG ─────────────────────────────────────────────
  "Q-VERSICHERUNG-WE1": {
    id: "Q-VERSICHERUNG-WE1", unitId: "U8-VERSICHERUNG", format: "fallbeispiel-rechnung", bloom: "K3",
    steckbriefIds: ["L3-VERSICH-ENERGIE-01"],
    data: {
      szenario: "Ein Windpark hat einen Anlagenwert von 4 Mio. €. Die Jahresprämie beträgt 0,4% der Versicherungssumme. Wie hoch ist die Jahresprämie in Euro?",
      eingabefelder: [{ key: "praemie", label: "Jahresprämie", einheit: "€" }],
      loesung: { praemie: { wert: 16000, toleranz: 1500 } },
      rechenweg: ["Prämie = 0,4% × 4.000.000 € = 0,004 × 4.000.000 = 16.000 €.", "Dafür sind Sturm-, Blitz-, Maschinenschäden UND die Betriebsunterbrechung (entgangene Erträge) abgedeckt.", "Ein Teil dieses Risikos gibt der Versicherer an einen Rückversicherer (Munich Re) weiter."]
    }
  },
  "Q-VERSICHERUNG-WE2": {
    id: "Q-VERSICHERUNG-WE2", unitId: "U8-VERSICHERUNG", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-VERSICH-ENERGIE-01"],
    data: {
      frage: "Warum gibt der Erstversicherer (Allianz) einen Teil des Risikos an einen Rückversicherer (Munich Re) weiter?",
      optionen: [
        { text: "Damit ein Großschaden — etwa ein Sturm, der mehrere Anlagen eines Parks gleichzeitig trifft — nicht die Bilanz des Erstversicherers gefährdet.", korrekt: true, erklaerung: "Rückversicherung verteilt Klumpenrisiken; ohne sie könnte ein einzelnes Extremwetterereignis den Erstversicherer überfordern." },
        { text: "Weil der Erstversicherer gesetzlich keine Windparks versichern darf.", korrekt: false, erklaerung: "Er darf — Rückversicherung ist eine freiwillige Risikoverteilung, kein Verbot." },
        { text: "Weil Munich Re höhere Prämien beim Kunden durchsetzt.", korrekt: false, erklaerung: "Der Rückversicherer hat keinen Kundenkontakt — es geht um Risikoverteilung, nicht um Preisdurchsetzung." }
      ]
    }
  },
  "Q-VERSICHERUNG-R1": {
    id: "Q-VERSICHERUNG-R1", unitId: "U8-VERSICHERUNG", format: "mc", bloom: "K1",
    steckbriefIds: ["L3-VERSICH-ENERGIE-01"],
    data: {
      frage: "Was deckt die Betriebsunterbrechungsversicherung (BU) ab?",
      optionen: [
        { text: "Die entgangenen Erträge (EEG-Vergütung + Spotmarkterlöse) während eines ungeplanten Stillstands.", korrekt: true, erklaerung: "Die BU ersetzt den Ertragsausfall — oft teurer als die reine Reparatur (Sachschaden)." },
        { text: "Nur die Reparaturkosten der beschädigten Anlage.", korrekt: false, erklaerung: "Reparaturkosten deckt die Sachversicherung — die BU deckt zusätzlich die entgangenen Erträge." },
        { text: "Die Prämien anderer Versicherungen.", korrekt: false, erklaerung: "Die BU deckt Ertragsausfall bei Stillstand, keine fremden Prämien." }
      ]
    }
  },
  "Q-VERSICHERUNG-R2": {
    id: "Q-VERSICHERUNG-R2", unitId: "U8-VERSICHERUNG", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-VERSICH-ENERGIE-01"],
    data: {
      text: "Die Jahresprämie liegt bei {{a}} der Versicherungssumme. Ein Teil des Risikos geht an einen {{b}} wie Munich Re. Der {{c}} (Aon, Marsh) verdient 8–15% Provision fürs Bündeln und Schadensmanagement.",
      luecken: {
        a: { loesungen: ["0,2–0,5%", "0,2-0,5%", "0,2 bis 0,5%"], erklaerung: "0,2–0,5% p.a. ist die typische Prämienspanne." },
        b: { loesungen: ["Rückversicherer"], erklaerung: "Der Rückversicherer übernimmt einen Teil des Risikos (Klumpenrisiko-Schutz)." },
        c: { loesungen: ["Makler"], erklaerung: "Der Makler platziert das Portfolio und managt Schäden gegen Provision." }
      },
      distraktoren: ["5–10%", "Aggregator"]
    }
  },
  "Q-VERSICHERUNG-R3": {
    id: "Q-VERSICHERUNG-R3", unitId: "U8-VERSICHERUNG", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-VERSICH-ENERGIE-01"],
    data: {
      frage: "Wodurch ist das EE-Versicherungsgeschäft angreifbar?",
      optionen: [
        { text: "Alternative Kapazitätsgeber (ILS, Captives großer Betreiber) umgehen die Underwriting-Marge, und InsurTechs bepreisen Klimarisiken datenbasiert (Sensordaten direkt aus den Anlagen) günstiger.", korrekt: true, erklaerung: "Datengetriebene Risikobepreisung und alternative Kapazität greifen die klassische Versicherungsmarge an." },
        { text: "Durch ein Verbot von Windpark-Versicherungen.", korrekt: false, erklaerung: "Versicherungen sind für die Projektfinanzierung sogar Pflicht — der Druck kommt von neuen Anbietern/Kapazität, nicht von einem Verbot." },
        { text: "Weil Windparks nicht mehr ausfallen.", korrekt: false, erklaerung: "Klimarisiken steigen sogar — die Angreifbarkeit liegt in besserer Bepreisung durch InsurTechs, nicht in wegfallendem Risiko." }
      ]
    }
  },
  "Q-VERSICHERUNG-R4": {
    id: "Q-VERSICHERUNG-R4", unitId: "U8-VERSICHERUNG", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-VERSICH-ENERGIE-01"],
    data: {
      steckbriefId: "L3-VERSICH-ENERGIE-01",
      erklaerungenProDimension: {
        regulierung: "Versicherungsaufsicht (VAG, Solvency II) prägt, kein Erlösschutz — mittel.",
        skalierbarkeit: "Portfolio-Effekte, aber jedes Risiko individuell zu underwriten — mittel.",
        marktrisiko: "Schadensrisiko durch steigende Klimaextreme — mittel.",
        digitalisierung: "Underwriting noch wenig digital, InsurTechs ändern das — niedrig-mittel.",
        wettbewerb: "Versicherer, Rückversicherer, Makler, InsurTechs — mittel.",
        nachhaltigkeit: "Ermöglicht EE-Projekte (Bankvoraussetzung), selbst neutral — mittel."
      }
    }
  },
  "Q-VERSICHERUNG-T1": {
    id: "Q-VERSICHERUNG-T1", unitId: "U8-VERSICHERUNG", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-VERSICH-ENERGIE-01", "L3-FINANZ-PROJEKT-01"],
    data: {
      frage: "Warum ist die Versicherung eine zwingende Voraussetzung für die Projektfinanzierung (Modul 8)?",
      optionen: [
        { text: "Die Bank finanziert nur gegen gesicherte Cashflows — eine BU-Versicherung schützt genau diese Erlöse bei Stillstand, weshalb Banken einen Versicherungsnachweis verlangen.", korrekt: true, erklaerung: "Versicherung und Finanzierung greifen ineinander: Ohne Absicherung des Cashflows kein günstiger Kredit." },
        { text: "Weil die Versicherung das Eigenkapital des Investors ersetzt.", korrekt: false, erklaerung: "Die Versicherung schützt den Cashflow, sie ersetzt kein Eigenkapital — sie ist eine Bedingung, kein Kapitalersatz." },
        { text: "Weil die Bank ohne Versicherung das Netz nicht anschließen darf.", korrekt: false, erklaerung: "Der Netzanschluss hat mit der Versicherung nichts zu tun — die Bank verlangt sie zum Schutz des besicherten Cashflows." }
      ]
    }
  },

  // ── U8-UTILITYOS ────────────────────────────────────────────────
  "Q-UTILITYOS-WE1": {
    id: "Q-UTILITYOS-WE1", unitId: "U8-UTILITYOS", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-DIGITAL-PLATTFORM-03"],
    data: {
      frage: "Warum migriert EDF seine 5 Mio. Kunden auf die Plattform des Konkurrenten Octopus?",
      optionen: [
        { text: "Der Cost-to-Serve-Rückstand gegenüber Octopus wurde mit jedem Jahr teurer als die Lizenzgebühr — eine defensive Entscheidung, um wettbewerbsfähig zu bleiben.", korrekt: true, erklaerung: "Die überlegene Plattform-Effizienz macht die Lizenz selbst für einen direkten Wettbewerber wirtschaftlich zwingend." },
        { text: "Weil EDF gesetzlich zur Nutzung von Kraken verpflichtet ist.", korrekt: false, erklaerung: "Es gibt keine solche Pflicht — die Entscheidung ist rein wirtschaftlich (Cost-to-Serve)." },
        { text: "Weil Octopus EDF die Kunden abgekauft hat.", korrekt: false, erklaerung: "EDF behält seine Kunden — es lizenziert nur die Software zur Verwaltung, nicht die Kundenbasis." }
      ]
    }
  },
  "Q-UTILITYOS-WE2": {
    id: "Q-UTILITYOS-WE2", unitId: "U8-UTILITYOS", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-DIGITAL-PLATTFORM-03"],
    data: {
      frage: "Warum ist die Kraken-Plattform (~8,65 Mrd. $) mehr wert als mancher Versorger mit Millionen Kunden?",
      optionen: [
        { text: "Reine SaaS-Ökonomie: wiederkehrender Lizenzumsatz je Account bei minimalen Grenzkosten und enormen Wechselhürden — solche Software-Umsätze werden mit einem Vielfachen der margenschwachen Energievertriebs-Umsätze bewertet.", korrekt: true, erklaerung: "Der Markt bewertet skalierbare, klebrige Software-Umsätze deutlich höher als dünne Commodity-Margen." },
        { text: "Weil Kraken mehr Strom verkauft als jeder Versorger.", korrekt: false, erklaerung: "Kraken verkauft gar keinen Strom — es verkauft Software; genau das ist der höher bewertete Umsatztyp." },
        { text: "Weil die Plattform physische Kraftwerke besitzt.", korrekt: false, erklaerung: "Kraken besitzt keine Kraftwerke — der Wert liegt in der skalierbaren Software, nicht in Assets." }
      ]
    }
  },
  "Q-UTILITYOS-R1": {
    id: "Q-UTILITYOS-R1", unitId: "U8-UTILITYOS", format: "mc", bloom: "K2",
    steckbriefIds: ["L3-DIGITAL-PLATTFORM-03"],
    data: {
      frage: "Was öffnet in Deutschland das Zeitfenster für Utility-OS-Anbieter wie Kraken?",
      optionen: [
        { text: "Das auslaufende SAP IS-U zwingt hunderte Versorger zur Neuentscheidung ihres Kernsystems — der größte Systemwechsel-Markt seit der Liberalisierung.", korrekt: true, erklaerung: "Das Wartungsende der Alt-IT erzeugt eine erzwungene Migrationswelle, die den Markt öffnet." },
        { text: "Ein Gesetz, das alle Versorger zur Nutzung ausländischer Software verpflichtet.", korrekt: false, erklaerung: "Kein solches Gesetz — der Treiber ist das technische Auslaufen von SAP IS-U, nicht ein Zwang." },
        { text: "Die Abschaffung der Marktkommunikation.", korrekt: false, erklaerung: "Die Marktkommunikation (GPKE/MaBiS) bleibt und ist sogar ein Lokalisierungsaufwand für ausländische Plattformen." }
      ]
    }
  },
  "Q-UTILITYOS-R2": {
    id: "Q-UTILITYOS-R2", unitId: "U8-UTILITYOS", format: "lueckentext", bloom: "K1",
    steckbriefIds: ["L3-DIGITAL-PLATTFORM-03"],
    data: {
      text: "Utility-OS wird pro {{a}} und Jahr lizenziert. Kraken hat über {{b}} Mio. kontrahierte Accounts und wird Mitte 2026 als eigenständiges Unternehmen {{c}}.",
      luecken: {
        a: { loesungen: ["Account", "Kundenkonto", "Konto"], erklaerung: "Die Lizenz wird pro Kundenkonto abgerechnet (SaaS)." },
        b: { loesungen: ["70"], erklaerung: ">70 Mio. Accounts weltweit auf Kraken." },
        c: { loesungen: ["abgespalten", "ausgegliedert", "als Spin-off abgespalten"], erklaerung: "Der Spin-off löst den Interessenkonflikt (Versorger mieten beim Wettbewerber Octopus)." }
      },
      distraktoren: ["MWh", "7"]
    }
  },
  "Q-UTILITYOS-R3": {
    id: "Q-UTILITYOS-R3", unitId: "U8-UTILITYOS", format: "mc", bloom: "K3",
    steckbriefIds: ["L3-DIGITAL-PLATTFORM-03"],
    data: {
      frage: "Was war die größte Angriffsfläche von Kraken — und wie wird sie geschlossen?",
      optionen: [
        { text: "Der Interessenkonflikt: Versorger zögerten, ihr Kernsystem vom Wettbewerber Octopus zu mieten; der Spin-off 2026 macht Kraken zum unabhängigen Unternehmen und schließt genau diese Flanke.", korrekt: true, erklaerung: "Solange Kraken zu Octopus gehörte, finanzierte jeder Lizenznehmer seinen eigenen Angreifer — der Spin-off entkoppelt das." },
        { text: "Dass Kraken technisch nicht funktioniert.", korrekt: false, erklaerung: "Kraken funktioniert nachweislich (Octopus läuft selbst darauf) — die Flanke war der Interessenkonflikt, nicht die Technik." },
        { text: "Dass die Plattform zu billig ist.", korrekt: false, erklaerung: "Der Preis war nicht das Problem — der Interessenkonflikt mit dem Wettbewerber Octopus war die Angriffsfläche." }
      ]
    }
  },
  "Q-UTILITYOS-R4": {
    id: "Q-UTILITYOS-R4", unitId: "U8-UTILITYOS", format: "radar-schaetzen", bloom: "K4",
    steckbriefIds: ["L3-DIGITAL-PLATTFORM-03"],
    data: {
      steckbriefId: "L3-DIGITAL-PLATTFORM-03",
      erklaerungenProDimension: {
        regulierung: "Kein Regulierungsschutz, aber regulierungsnah (Marktkommunikation) — niedrig.",
        skalierbarkeit: "SaaS in Reinform, jeder Account fast grenzkostenfrei — höchste Stufe.",
        marktrisiko: "Migrationsrisiko, aber vertraglich gesicherte Umsätze — niedrig-mittel.",
        digitalisierung: "Cloud-Kernplattform, digital-nativ — höchste Stufe.",
        wettbewerb: "Kraken vs. SAP vs. powercloud/Lynqtech — mittel.",
        nachhaltigkeit: "Effizientere Versorger-IT, aber selbst kein grünes Produkt — mittel."
      }
    }
  },
  "Q-UTILITYOS-T1": {
    id: "Q-UTILITYOS-T1", unitId: "U8-UTILITYOS", format: "mc", bloom: "K4",
    steckbriefIds: ["L3-DIGITAL-PLATTFORM-03", "L3-VERTRIEB-NEO-05"],
    data: {
      frage: "Utility-OS (dieses Modul) und Octopus als Versorger (Modul 4) sind zwei Seiten derselben Strategie. Welche — und was ist die 'strategische Ironie'?",
      optionen: [
        { text: "Octopus nutzt Kraken selbst als Cost-to-Serve-Waffe im Endkundenmarkt UND lizenziert sie an Wettbewerber — die Ironie: Jeder Incumbent, der lizenziert, finanziert die Weiterentwicklung genau der Plattform, die ihn als Octopus-Angreifer am meisten bedroht.", korrekt: true, erklaerung: "Doppelte Monetarisierung derselben Software — als eigene Waffe und als Produkt, das die Konkurrenz mitfinanziert." },
        { text: "Octopus und Kraken sind völlig unabhängige Unternehmen ohne Bezug.", korrekt: false, erklaerung: "Kraken IST Octopus' Plattform — genau diese Verbindung ist der Kern (und wird durch den Spin-off entkoppelt)." },
        { text: "Kraken ersetzt den Stromvertrieb vollständig durch Software.", korrekt: false, erklaerung: "Kraken betreibt den Vertrieb effizienter, ersetzt ihn aber nicht — die Ironie liegt in der Doppelrolle als Waffe und Lizenzprodukt." }
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
