// ══════════════════════════════════════════════════════════
// lern-szenarien.js — Szenario-Missionen (K4-Format, Konzept §5)
//
// Verbundene Fallstudien: Der Lerner schlüpft in eine Rolle und trifft
// eine Kette strategischer Entscheidungen. Jede Option hat eine spürbare
// KONSEQUENZ (Wirkungstext) und verschiebt mehrere Kennzahlen-Dimensionen.
// Am Ende: Debrief mit Dimensions-Balken + Ergebnisstufe.
//
// Es gibt bewusst KEINE eindeutig richtige Option pro Schritt — jede
// Entscheidung ist ein Trade-off. Das trainiert Synthese/Bewertung (Bloom K4),
// nicht Faktenabruf. Inhaltlich verankert in den Wiki-Geschäftsmodellen.
//
// Schema je Mission:
//   { id, title, kurz, moduleId?, rolle, dimensionen:[{key,label,icon}],
//     schritte:[{ id, titel, situation, frage,
//                 optionen:[{ text, wirkung, bewertung:'gut'|'mittel'|'schlecht',
//                             punkte:{<dimKey>:<int>} }] }],
//     debrief:{ stufen:[{minPct, titel, text}] } }   // minPct auf 0..1, absteigend
// ══════════════════════════════════════════════════════════

const SZENARIO_MISSIONS = [
  {
    id: 'SZ-NEO-LAUNCH',
    title: 'Dein eigener Öko-Neo-Vertrieb',
    kurz: 'Gründe den Ökostrom-Discounter »Voltano« und triff die Schlüsselentscheidungen der ersten 18 Monate. Sechs Weichenstellungen, jede mit Folgen.',
    moduleId: 'M4-VERKAUFEN',
    rolle: 'Du bist Gründer:in von »Voltano«, einem neuen Ökostrom-Vertrieb. Kein Netz, keine Kraftwerke — nur ein schlankes Team, eine App und der Anspruch, es besser zu machen als die Großversorger. In den nächsten 18 Monaten entscheidest du über Beschaffung, Produkt, Technik und Wachstum. Es gibt selten eine perfekte Wahl — nur Abwägungen.',
    dimensionen: [
      { key: 'marge', label: 'Wirtschaftlichkeit', icon: '💰' },
      { key: 'vertrauen', label: 'Kundenvertrauen', icon: '🤝' },
      { key: 'resilienz', label: 'Resilienz', icon: '🛡️' }
    ],
    schritte: [
      {
        id: 's1-beschaffung',
        titel: 'Beschaffung',
        situation: 'Bevor der erste Kunde Strom bekommt, musst du entscheiden, wie du ihn einkaufst — und wer das Preisrisiko trägt.',
        frage: 'Wie beschaffst du den Strom für die ersten 5.000 Kunden?',
        optionen: [
          { text: 'Dynamischer Tarif: den stündlichen Börsenpreis 1:1 an die Kunden weitergeben (wie Tibber).',
            wirkung: 'Kunden lieben die Transparenz und sparen bei viel Wind — aber bei der nächsten Preisspitze zahlen sie plötzlich das Dreifache und beschweren sich lautstark. Das Preisrisiko liegt komplett bei ihnen.',
            bewertung: 'mittel', punkte: { marge: 1, vertrauen: 2, resilienz: -1 } },
          { text: 'Festpreis, über Termingeschäfte an der EEX abgesichert.',
            wirkung: 'Solide: Du kaufst die erwartete Menge im Voraus und schläfst ruhig. Die Absicherung kostet Marge, und bei fallenden Preisen sitzt du auf zu teuer eingekauftem Strom — aber kalkulierbar bleibt es.',
            bewertung: 'gut', punkte: { marge: 0, vertrauen: 1, resilienz: 2 } },
          { text: 'Kurzfristig am Spotmarkt einkaufen — ungesichert, aber billig.',
            wirkung: 'Die ersten Monate mit ruhigen Preisen sehen großartig aus, deine Marge glänzt. Dann kommt eine Dunkelflaute, der Preis explodiert, und ohne Absicherung frisst eine einzige Woche deinen Jahresgewinn.',
            bewertung: 'schlecht', punkte: { marge: 2, vertrauen: 0, resilienz: -3 } }
        ]
      },
      {
        id: 's2-tarifmodell',
        titel: 'Erlösmodell',
        situation: 'Jetzt zum Erlösmodell — die Frage, wie du pro Kunde überhaupt Geld verdienst.',
        frage: 'Welches Tarifmodell wählst du?',
        optionen: [
          { text: 'Monats-Abo mit festem Grundpreis, entkoppelt von der kWh-Menge (wie Octopus/Tibber).',
            wirkung: 'Deine Einnahmen werden planbar, und du verdienst auch, wenn Kunden Strom sparen — das entschärft den Zielkonflikt mit der Energiewende. Preissensible Wechsler finden das Abo aber erst mal ungewohnt.',
            bewertung: 'gut', punkte: { marge: 2, vertrauen: 1, resilienz: 1 } },
          { text: 'Klassische Marge pro kWh — je mehr die Leute verbrauchen, desto mehr verdienst du.',
            wirkung: 'Vertraut und leicht vergleichbar. Aber dein Interesse (viel Verbrauch) steht dem Kundeninteresse (sparen) entgegen — und genau damit werben deine Wettbewerber gegen dich.',
            bewertung: 'mittel', punkte: { marge: 1, vertrauen: -1, resilienz: 0 } },
          { text: 'Gar keinen Aufschlag verlangen und dich später über Zusatzprodukte finanzieren.',
            wirkung: 'Das Wachstum explodiert, alle lieben den Preis — aber du verbrennst mit jedem Kunden Geld, und die Zusatzerlöse lassen auf sich warten. Die Investoren werden nervös.',
            bewertung: 'schlecht', punkte: { marge: -2, vertrauen: 2, resilienz: -1 } }
        ]
      },
      {
        id: 's3-gruenstrom',
        titel: 'Grüner Strom',
        situation: '»Öko« steht auf deiner Fahne. Aber wie grün ist dein Strom wirklich — und wie glaubwürdig?',
        frage: 'Wie machst du deinen Strom grün?',
        optionen: [
          { text: 'Billige Herkunftsnachweise (HKN) aus norwegischer Wasserkraft zukaufen.',
            wirkung: 'Formal ist dein Strom jetzt »100 % Öko« — für wenige Cent pro Kunde. Doch Fachjournalisten und Kunden durchschauen das Zertifikate-Modell zunehmend; ein Vergleichstest stuft dich als »Graustrom mit Ökosiegel« ein.',
            bewertung: 'mittel', punkte: { marge: 2, vertrauen: -2, resilienz: 0 } },
          { text: 'Echte Zusätzlichkeit: langfristige PPAs mit neuen Anlagen (wie Fünf Grad).',
            wirkung: 'Teurer und aufwändiger — aber du kannst glaubwürdig zeigen, dass durch dich neue Erzeugung entsteht. Genau diese Story macht dich für die wachsende Zielgruppe echter Ökokunden unangreifbar.',
            bewertung: 'gut', punkte: { marge: -1, vertrauen: 3, resilienz: 1 } },
          { text: 'Graustrom liefern, aber im Marketing »klimafreundlich« behaupten.',
            wirkung: 'Kurzfristig top: volle Marge, grünes Image. Bis eine Verbraucherzentrale klagt, die Presse »Greenwashing« titelt und dir die Kunden in Scharen davonlaufen. Ein existenzielles Reputationsrisiko.',
            bewertung: 'schlecht', punkte: { marge: 3, vertrauen: -3, resilienz: -3 } }
        ]
      },
      {
        id: 's4-technik',
        titel: 'Technik & Skalierung',
        situation: 'Mit 20.000 Kunden ersticken deine Mitarbeiter in manueller Abrechnung und Kundenservice.',
        frage: 'Wie löst du das Technik- und Abrechnungsproblem?',
        optionen: [
          { text: 'Eine fertige Utility-Plattform lizenzieren (Kraken-Modell von Octopus).',
            wirkung: 'Hohe monatliche Lizenzkosten, aber Abrechnung, Wechselprozesse und Service laufen automatisiert und skalieren mühelos. Dein Service-Level steigt, während die Kosten pro Kunde sinken.',
            bewertung: 'gut', punkte: { marge: 1, vertrauen: 2, resilienz: 2 } },
          { text: 'Eigene Software von Grund auf bauen.',
            wirkung: 'Volle Kontrolle und keine Lizenzgebühr — aber die Entwicklung verschlingt Kapital und Monate, und jeder Bug trifft direkt deine Kunden. Ein Wettrennen gegen die Zeit.',
            bewertung: 'mittel', punkte: { marge: -1, vertrauen: 0, resilienz: 0 } },
          { text: 'Weiter manuell arbeiten — Personal ist billiger als IT.',
            wirkung: 'Bei 20.000 Kunden vielleicht noch machbar, aber Fehler häufen sich, die Wartezeiten im Support explodieren und die schlechten Bewertungen auch. So lässt sich nicht skalieren.',
            bewertung: 'schlecht', punkte: { marge: 0, vertrauen: -2, resilienz: -2 } }
        ]
      },
      {
        id: 's5-wachstum',
        titel: 'Wachstum',
        situation: 'Die Investoren wollen Wachstum sehen. Wie gewinnst du die nächsten 100.000 Kunden?',
        frage: 'Welchen Wachstumskanal drehst du auf?',
        optionen: [
          { text: 'Vergleichsportale wie Check24 — Provision (CPA) je vermitteltem Kunden.',
            wirkung: 'Die Kundenzahl schießt hoch. Aber du zahlst je Abschluss eine saftige Provision, und Portal-Kunden wechseln nach dem Bonusjahr sofort weiter — teuer erkauftes, illoyales Wachstum.',
            bewertung: 'mittel', punkte: { marge: -1, vertrauen: 0, resilienz: -1 } },
          { text: 'Organisch über Weiterempfehlung und eine starke Marke.',
            wirkung: 'Langsamer, aber die Kunden bleiben und bringen Freunde mit. Deine Akquisekosten sinken pro Kohorte, und die Loyalität macht dich in Krisen widerstandsfähig — nur den Investoren dauert es zu lang.',
            bewertung: 'gut', punkte: { marge: 1, vertrauen: 2, resilienz: 2 } },
          { text: 'Aggressive Neukunden-Boni, mit Verlust finanziert.',
            wirkung: 'Die Zahlen für die nächste Finanzierungsrunde sehen spektakulär aus. Doch du kaufst dir Schnäppchenjäger ein, deine Verluste wachsen mit jedem Kunden, und beim ersten Gegenwind bricht das Kartenhaus.',
            bewertung: 'schlecht', punkte: { marge: -2, vertrauen: 0, resilienz: -2 } }
        ]
      },
      {
        id: 's6-krise',
        titel: 'Die Preiskrise',
        situation: '18 Monate später: Eine Dunkelflaute treibt die Großhandelspreise auf ein Rekordhoch. Deine Beschaffung ächzt, die Kunden sind nervös.',
        frage: 'Wie reagierst du auf die Preiskrise?',
        optionen: [
          { text: 'Transparent kommunizieren, Spartipps geben, Härtefälle kurzfristig abfedern.',
            wirkung: 'Manche Kunden ärgern sich trotzdem, aber die meisten honorieren die Ehrlichkeit und bleiben. Deine Marke geht gestärkt aus der Krise hervor — Vertrauen, das Gold wert ist.',
            bewertung: 'gut', punkte: { marge: -1, vertrauen: 3, resilienz: 2 } },
          { text: 'Preise still und leise erhöhen und auf das Kleingedruckte verweisen.',
            wirkung: 'Kurzfristig rettet es die Marge. Aber der Shitstorm in den Bewertungsportalen und die Kündigungswelle kosten dich am Ende mehr, als die Erhöhung einbringt.',
            bewertung: 'mittel', punkte: { marge: 1, vertrauen: -2, resilienz: -1 } },
          { text: 'Mit Lockpreisen neue Kunden anwerben, um schnell Liquidität zu holen.',
            wirkung: 'Ein verzweifeltes Schneeballsystem: Du kaufst teuren Neukunden-Verbrauch genau dann ein, wenn Strom am teuersten ist — der klassische Weg in die Pleite, den 2021 reihenweise Billiganbieter gegangen sind.',
            bewertung: 'schlecht', punkte: { marge: -2, vertrauen: -2, resilienz: -3 } }
        ]
      }
    ],
    debrief: {
      stufen: [
        { minPct: 0.78, titel: '🚀 Der nächste Tibber', text: 'Voltano ist auf dem Weg zur Marke: profitabel, glaubwürdig grün und krisenfest. Du hast die Trade-offs zwischen Marge, Vertrauen und Resilienz meisterhaft ausbalanciert — genau die Kunst, die echte Neo-Vertriebe von den Pleitekandidaten trennt.' },
        { minPct: 0.55, titel: '👍 Solider Nischen-Player', text: 'Voltano steht stabil da und hat eine treue Kundschaft. In einzelnen Feldern hast du Potenzial liegen lassen — aber du hast die existenziellen Fehler vermieden und ein tragfähiges Geschäft aufgebaut.' },
        { minPct: 0.35, titel: '😬 Wackliger Start', text: 'Voltano überlebt, aber auf dünnem Eis. An mehreren Weichen hast du kurzfristige Vorteile gegen langfristige Stabilität eingetauscht. Schau dir an, welche Dimension am schwächsten ist — dort liegt dein größtes Risiko.' },
        { minPct: 0, titel: '💀 Bald insolvent', text: 'Voltano reiht sich in die lange Liste der Billiganbieter ein, die in der Preiskrise untergingen. Zu oft hat die Marge über Vertrauen und Resilienz gesiegt. Genau dieses Muster hat 2021 reihenweise Neo-Vertriebe die Existenz gekostet — versuch es nochmal.' }
      ]
    }
  }
];

// Klassischer Script-Scope: global verfügbar wie LERN_MODULES (kein window-Mirror nötig).
if (typeof window !== 'undefined') window.SZENARIO_MISSIONS = SZENARIO_MISSIONS;
