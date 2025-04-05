---
draft: false
layout: layout-neuigkeiten
date: 2025-04-09
title: Zeiterfassung 2.12.0 – Verbesserungen bei Berichten und Fehlerbehebungen
author: Andreas Weigel
release-version: 2.12.0
teaserImage: /static/teaser/2024-10-31/ZE-Release-2.12.0.png
description: Release 2.12.0 verbessert die Handhabung von Berichten und behebt Fehler, die die Anzeige von Soll-Stunden und Übersetzungen betrafen.
---

Das **Release 2.12.0** der Zeiterfassung bringt **wichtige Verbesserungen** in Bezug auf die **Berichtsfunktionen** und behebt mehrere **Bugs**, die die korrekte Anzeige von Soll-Stunden und Übersetzungen betrafen. Diese Version stellt sicher, dass Berichte noch benutzerfreundlicher sind und genauer arbeiten.

<!-- more -->

## ✨ Enhancements

### 📊 Berichte: Beim Wechsel zwischen Woche und Monat sollen die ausgewählten Personen übernommen werden

🔗 [#920 – Verbesserte Auswahl von Personen beim Wechsel zwischen Woche und Monat in Berichten](https://github.com/urlaubsverwaltung/zeiterfassung/pull/920)

Mit diesem Update wird beim Wechsel zwischen **Wochen-** und **Monatsansicht** in den **Berichten** die Auswahl der **Personen** nun **beibehalten**. Das bedeutet, dass Anwender beim Wechsel der Ansicht nicht erneut Personen auswählen müssen, was die Bedienbarkeit und Effizienz beim Arbeiten mit Berichten erheblich verbessert.

> **Warum ist das wichtig?**  
Durch die Übernahme der **Personenwahl** wird der Arbeitsablauf effizienter, besonders für Nutzer, die regelmäßig Berichte über mehrere Zeiträume hinweg auswerten müssen. Dies spart Zeit und reduziert die Notwendigkeit zur wiederholten Auswahl von Personen.

---

## 🐞 Bugs

### 🚧 Berichte: Bei Auswahl von mehreren Personen werden die "Soll-Stunden" nicht korrekt angezeigt, wenn eine Person abwesend war

🔗 [#905 – Fehlerhafte Soll-Stunden-Anzeige bei Abwesenheit von Personen](https://github.com/urlaubsverwaltung/zeiterfassung/pull/905)

In dieser Version wurde ein Fehler behoben, der dazu führte, dass die **Soll-Stunden** in den **Berichten** bei der Auswahl von mehreren Personen nicht korrekt angezeigt wurden, wenn eine der ausgewählten Personen abwesend war. Mit diesem Fix wird die Sollzeit nun korrekt berechnet und angezeigt, selbst wenn eine Person an den betreffenden Tagen abwesend war.

> **Warum ist das wichtig?**  
Die korrekte Anzeige der **Soll-Stunden** ist für die genaue Arbeitszeiterfassung und Abrechnung von entscheidender Bedeutung. Mit diesem Fix können Anwender sicher sein, dass ihre Berichte auch bei abwesenden Mitarbeitern präzise sind.

### 🚧 Berichte: Fehlende Übersetzungen

🔗 [#914 – Fehlerhafte oder fehlende Übersetzungen in den Berichten](https://github.com/urlaubsverwaltung/zeiterfassung/pull/914)

Ein weiterer Bugfix betrifft **fehlende Übersetzungen** in den Berichten. Bei bestimmten Sprachen wurden Texte nicht korrekt angezeigt. Dieser Fehler wurde behoben, sodass nun alle wichtigen Elemente in den Berichten auch in den entsprechenden Sprachen korrekt übersetzt erscheinen.

> **Warum ist das wichtig?**  
Die Unterstützung für mehrere Sprachen ist entscheidend, um eine breite Nutzerbasis zu bedienen. Dieser Fix stellt sicher, dass die Zeiterfassungssoftware für alle Benutzer weltweit zugänglich und benutzerfreundlich bleibt.

---

## ✅ Fazit

**Release 2.12.0** verbessert mit der **übernommenen Personenauswahl** zwischen den Zeitansichten von Berichten die Benutzerfreundlichkeit erheblich. Außerdem wurden kritische **Bugs** behoben, die die Anzeige von **Soll-Stunden** bei Abwesenheiten sowie **fehlende Übersetzungen** betrafen. Mit diesen Verbesserungen und Fehlerbehebungen wird das Arbeiten mit Berichten noch präziser und komfortabler.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 2.12.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/zeiterfassung/releases/tag/zeiterfassung-2.12.0)
