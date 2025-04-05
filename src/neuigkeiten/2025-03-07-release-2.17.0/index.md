---
draft: false
layout: layout-neuigkeiten
date: 2025-05-30
title: Zeiterfassung 2.17.0 – Verbesserte Sortierung & privilegierte Benutzerfunktionen
author: Andreas Weigel
release-version: 2.17.0
teaserImage: /static/teaser/2025-03-07/ZE-Release-2.17.0.png
description: Release 2.17.0 bietet neue Funktionen zur Sortierung von Personen und Zeiteinträgen sowie Verbesserungen bei der Zeiterfassung für privilegierte Benutzer. Zudem wurde ein Bug behoben, bei dem bearbeitete Zeitslots nicht mehr hervorgehoben wurden.
---

Das **Release 2.17.0** bringt wichtige Erweiterungen zur **Zeiterfassung und Benutzerverwaltung**. Neue Funktionen für die **Sortierung von Personen und Zeiteinträgen** sowie **verbesserte Rechte für privilegierte Nutzer** machen die Anwendung noch benutzerfreundlicher und leistungsfähiger. Zudem wurde ein Fehler behoben, der die Anzeige von bearbeiteten Zeitslots betraf.

<!-- more -->

## ✨ Enhancements

### 📜 Sortierung von Personen (z.B. auf der Personen-Seite)

🔗 [#218 – Sortierung von Personen](https://github.com/urlaubsverwaltung/zeiterfassung/pull/218)

Ab sofort können die **Personen auf der Personen-Seite** nun sortiert werden. Diese Funktion macht es deutlich einfacher, schnell die benötigte Person in einer großen Liste zu finden und optimiert somit die Benutzererfahrung, besonders in größeren Teams.

> **Warum ist das wichtig?**  
Für **Verwaltungsaufgaben** und **HR-Management** in größeren Organisationen ist es entscheidend, eine gut strukturierte und durchsuchbare Liste von Personen zu haben. Diese Funktion ermöglicht eine schnelle Navigation und eine bessere Übersicht.

---

### ⏱️ Sortierung von Zeiteinträgen anhand der Startzeit

🔗 [#1026 – Sortierung von Zeiteinträgen anhand der Startzeit](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1026)

Zeiteinträge können nun nach der **Startzeit** anstatt der **Erfassungszeit** sortiert werden. Diese neue Sortierungsoption erleichtert es, die Zeiteinträge nach ihrer tatsächlichen **Arbeitszeit** und nicht nach dem Zeitpunkt der Erfassung zu ordnen.

> **Warum ist das wichtig?**  
Die **Startzeit** ist oft relevanter für die **Projekt- und Arbeitszeiterfassung** als die Zeit der Erfassung. Diese Änderung hilft dabei, einen genaueren Überblick über den Verlauf des Arbeitstags und die geleisteten Stunden zu erhalten.

---

### ✍️ Zeiteintrag bei Berichten bearbeiten können als privilegierte Person

🔗 [#1118 – Zeiteintrag bei Berichten bearbeiten](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1118)

Jetzt können **privilegierte Personen**, wie Vorgesetzte oder Administratoren, **Zeiteinträge bei Berichten bearbeiten**. Dies ermöglicht eine einfache Korrektur von fehlerhaften oder ungenauen Zeiteinträgen, ohne dass die betroffenen Mitarbeiter:innen die Änderung vornehmen müssen.

> **Warum ist das wichtig?**  
Für **HR-Abteilungen** und **Vorgesetzte** ist es wichtig, die **Berichte zu überprüfen** und gegebenenfalls Anpassungen vorzunehmen. Diese Funktion ermöglicht es, Zeiteinträge zentral zu korrigieren und die Genauigkeit der Daten sicherzustellen.

---

### 🛠️ Zeiterfassung für Mitarbeitende als privilegierte Benutzende

🔗 [#206 – Zeiterfassung für Mitarbeitende als privilegierte Benutzende](https://github.com/urlaubsverwaltung/zeiterfassung/pull/206)

Mitarbeitende können nun als **privilegierte Benutzende** **Zeiterfassungen** verwalten. Diese Erweiterung bietet den Nutzern zusätzliche Rechte, die es ihnen ermöglichen, ihre eigenen Zeiteinträge zu bearbeiten und zu verwalten, was besonders für **freiberufliche Mitarbeitende** oder **Teamleiter** von Bedeutung ist.

> **Warum ist das wichtig?**  
Es wird mehr Flexibilität geboten, indem den **Mitarbeitenden** erweiterte Rechte zur Verwaltung ihrer **Arbeitszeiterfassung** gewährt werden. Diese Funktion fördert die **Autonomie** der Mitarbeiter und vereinfacht den Arbeitsablauf.

---

## 🐞 Bugs

### ⚠️ Bearbeiteter, noch nicht gespeicherter Zeitslot wird nicht mehr hervorgehoben

🔗 [#1106 – Bearbeiteter, noch nicht gespeicherter Zeitslot wird nicht mehr hervorgehoben](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1106)

Ein Fehler, bei dem **bearbeitete, aber noch nicht gespeicherte Zeitslots** nicht mehr hervorgehoben wurden, wurde behoben. Zuvor war es schwierig, Änderungen an Zeitslots zu erkennen, bevor sie gespeichert wurden. Dieser Bugfix sorgt dafür, dass bearbeitete Zeitslots weiterhin visuell hervorgehoben bleiben.

> **Warum ist das wichtig?**  
Die visuelle Hervorhebung von **unterschiedlichen Zeitslots** ist wichtig, damit Nutzer erkennen können, welche Einträge geändert wurden. So wird der **Bearbeitungsstatus** klar und ermöglicht eine effizientere Verwaltung der Zeiterfassung.

---

## ✅ Fazit

**Release 2.17.0** bringt eine Reihe von Verbesserungen in der **Zeiterfassungssoftware**, die die Benutzerfreundlichkeit und Verwaltung von Arbeitszeiten weiter verbessern. Mit den neuen Funktionen zur **Sortierung von Personen und Zeiteinträgen** sowie den erweiterten Rechten für **privilegierte Benutzer** wird die Anwendung noch leistungsfähiger. Der behobene Bug bei der Hervorhebung bearbeiteter Zeitslots sorgt für eine noch genauere **Zeiterfassungsverwaltung**.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 2.17.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/zeiterfassung/releases/tag/zeiterfassung-2.17.0)
