---
draft: false
layout: layout-neuigkeiten
date: 2024-11-22
title: Urlaubsverwaltung 5.9.0 – Verbesserte UI-Testabdeckung & optimierte Feiertagsberechnung
author: Andreas Weigel
release-version: 5.9.0
teaserImage: /static/teaser/2024-11-22/UV-Release-5.9.0.png
description: Mit Version 5.9.0 verbessert sich die Testqualität durch umfassende Browserabdeckung. Zudem werden gesetzliche Feiertage nun automatisch über die Jollyday-Bibliothek gepflegt.
---

Release **5.9.0** der Urlaubsverwaltung bringt Verbesserungen in zwei zentralen Bereichen: **Teststabilität durch browserübergreifende UI-Tests** und eine **vereinfachte Feiertagsverwaltung** mithilfe der bewährten Bibliothek **Jollyday**.

<!-- more -->

## ✨ Enhancements

### 🌐 [Workflows] UI-Tests jetzt in allen gängigen Browsern

🔗 [#4969 – run all UI tests with all browsers](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/4969)

Um die Qualität der Benutzeroberfläche weiter zu sichern, laufen nun sämtliche **UI-Tests in allen unterstützten Browsern**. Das bedeutet:

- Stabilere Cross-Browser-Kompatibilität
- Schnellere Fehlererkennung bei Layout oder Verhalten
- Verbesserte Sicherheit bei Rollouts neuer Funktionen

🧪 Unterstützt werden z. B.:
- Chromium
- Firefox
- WebKit (Safari)

> **Fazit:** Höhere Testabdeckung führt zu robusterer UX für alle Nutzer:innen – unabhängig vom eingesetzten Browser.

---

### 📅 Feiertage automatisch via Jollyday verwaltet

🔗 [#4959 – use public holidays from Jollyday instead of custom logic](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/4959)

Die Berechnung von gesetzlichen Feiertagen wurde auf eine neue Grundlage gestellt: Die Urlaubsverwaltung nutzt nun die etablierte Open-Source-Bibliothek [Jollyday](https://github.com/svendiedrichsen/jollyday).

**Vorteile:**
- Zuverlässige und aktuelle Feiertagsdaten für viele Länder und Regionen
- Keine manuelle Pflege mehr nötig
- Bessere Zukunftssicherheit und Wartbarkeit

> **Hintergrund:** Jollyday deckt eine Vielzahl von Regionen ab und wird aktiv gepflegt – ein solides Fundament für internationale Nutzung.

---

## ✅ Fazit

**Release 5.9.0** ist ein weiterer Qualitätsschritt: Die Anwendung wird durch umfassende **automatisierte UI-Tests** robuster und gleichzeitig durch **Jollyday**-Integration deutlich wartungsärmer in der Feiertagsverwaltung. Das freut sowohl Entwickler:innen als auch Administrator:innen.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 5.9.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.9.0)
