---
draft: false
layout: layout-neuigkeiten
date: 2025-02-25
title: Urlaubsverwaltung 5.18.0 veröffentlicht – mit Demo-Banner, stabilerem Dark Mode und Zeitzonen-Fix
author: Andreas Weigel
release-version: 5.18.0
teaserImage: /static/teaser/2025-02-25/UV-Release-5.18.0.png
description: Version 5.18.0 bringt ein Info-Banner für Demo-Daten, unveränderliche Listen im Code und behebt Fehler im Dark Mode, bei Outlook-Sync und beim Text zu Sonderurlaub.
---

Die Version **5.18.0** der Urlaubsverwaltung legt den Fokus auf **bessere Transparenz in Entwicklungsumgebungen**, **Codequalität** und das Beheben von **Fehlern**, die Nutzer:innen im Alltag begegnet sind. Neben funktionalen Verbesserungen wurden mehrere Bugs gezielt adressiert, um die **Stabilität** und **Nutzerfreundlichkeit** zu erhöhen.

<!-- more -->

---

## ✨ Enhancements

### 🔥 Info-Banner für Demo-Daten in Entwicklungsprofilen

🔗 [#5193 – Activate info banner on demo data profile with "development"](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5193)

Ab jetzt erscheint ein deutlich sichtbares Banner, wenn mit **Demo-Daten** gearbeitet wird – speziell in **Entwicklungsprofilen**. Das sorgt für mehr Klarheit und hilft, Test- von Produktivdaten zu unterscheiden.

**Warum wichtig?**  
👉 Verhindert Verwechslungen in Testumgebungen  
👉 Unterstützt transparentes Arbeiten in Dev-/Stage-Umgebungen

---

### 🛠️ Immutable `toList()` für Collections in Streams

🔗 [#5180 – Use immutable toList() for collection streams](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5180)

Im Code wird nun überall die **unveränderbare Variante von `toList()`** genutzt, was zu stabilerem und sichererem Verhalten bei der Verarbeitung von Daten führt.

**Warum wichtig?**  
👉 Erhöht die Wartbarkeit und Sicherheit  
👉 Verhindert ungewollte Seiteneffekte durch mutierbare Daten

---

## 🐞 Bugfixes

### 🌒 Dark Mode mit deaktiviertem Gravatar wird nicht korrekt angezeigt

🔗 [#5189 – Dark Mode mit deaktiviertem Gravatar wird nicht korrekt angezeigt](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5189)

Ein Darstellungsproblem im **Dark Mode**, das auftrat, wenn der **Gravatar deaktiviert** war, wurde behoben. Die Benutzeroberfläche zeigt nun wieder alle Elemente korrekt an – auch ohne Nutzerbilder.

---

### 🕒 Outlook ICAL Sync: Fehlerhafte Konvertierung der Zeitzone

🔗 [#5175 – Fehlerhafte Konvertierung der Zeitzone beim Outlook-Export](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5175)

Ein kritischer Fehler im **ICAL-Sync mit Outlook** wurde behoben: Urlaube wurden unter Umständen in der falschen **Zeitzone** angezeigt. Jetzt stimmt die Zeitangabe wieder mit der realen Abwesenheit überein.

---

### 📄 Text zu Sonderurlaub gemäß BGB § 616 inkorrekt in Spezialfällen

🔗 [#5190 – Text zu Sonderurlaub da BGB 616 ist in bestimmten Fällen inkorrekt](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5190)

Der angezeigte Hinweistext bei **Sonderurlaub gemäß BGB § 616** war in Fällen mit **Tarifverträgen oder betrieblichen Regelungen** nicht korrekt. Dies wurde nun angepasst, sodass die juristische Information wieder präzise ist.

---

## ✅ Fazit

Release **5.18.0** stärkt die Urlaubsverwaltung gleich mehrfach: Mit besserer **Entwicklungsumgebung**, mehr **Code-Stabilität** und gezielten **Fehlerbehebungen**, die das tägliche Arbeiten spürbar verbessern. Auch kleine Details – wie Zeitzonen oder Hinweise zu Sonderurlaub – wurden optimiert, damit alles noch reibungsloser funktioniert.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 5.18.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.18.0)
