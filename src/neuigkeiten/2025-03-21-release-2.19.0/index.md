---
draft: false
layout: layout-neuigkeiten
date: 2025-06-18
title: Zeiterfassung 2.19.0 – Verbesserte Arbeitszeiteinstellungen & privilegierte Benutzeransicht
author: Andreas Weigel
release-version: 2.19.0
teaserImage: /static/teaser/2025-03-21/ZE-Release-2.19.0.png
description: Mit Version 2.19.0 können Arbeitszeiten nun auf 0 Stunden gesetzt werden. Zudem gibt es Verbesserungen für privilegierte Nutzer und die Behebung eines Fehlers bei der Berechtigungsänderung.
---

Release **2.19.0** der Zeiterfassung bringt spannende Neuerungen für die **Arbeitszeiterfassung** und die **Benutzeransichten**. Ebenso wurde ein Fehler bei der Berechtigungsänderung behoben.

<!-- more -->

## ✨ Enhancements

### 🕐 Arbeitszeit auf 0 Stunden setzen

🔗 [#1146 – Arbeitszeit auf 0 Stunden setzen können](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1146)

Ab sofort können Nutzer ihre **Arbeitszeit auf 0 Stunden setzen**. Diese Funktion ist besonders nützlich, wenn eine Person an einem bestimmten Tag nicht arbeitet, beispielsweise bei einem **freien Tag** oder **Urlaub**. Statt manuell mit Stunden zu arbeiten, kann nun einfach „0 Stunden“ eingetragen werden.

> **Warum ist das wichtig?**  
Die Möglichkeit, Arbeitszeiten auf 0 Stunden zu setzen, vereinfacht die Zeiterfassung und macht die Anwendung flexibler bei der Verwaltung von Abwesenheiten.

---

### 👤 Startseitenansicht einer anderen Person für privilegierte Nutzer

🔗 [#1119 – Startseitenansicht anderer Person für privilegierte Person](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1119)

Privilegierte Nutzer haben jetzt die Möglichkeit, die **Startseitenansicht** einer anderen Person zu sehen. Dies ist besonders für **Vorgesetzte** oder **HR-Administratoren** nützlich, die die **Arbeitszeiten** ihrer Mitarbeiter:innen überwachen und verwalten müssen.

> **Warum ist das wichtig?**  
Diese Erweiterung verbessert die **Benutzerverwaltung** und ermöglicht es den verantwortlichen Personen, schnell einen Überblick über die Arbeitszeiterfassung ihrer Mitarbeiter zu bekommen.

---

## 🐞 Bugs

### ⚠️ Fehler bei der Berechtigungsänderung

🔗 [#1153 – Ändern von Berechtigungen zeigt Fehler an obwohl Berechtigung geändert wird](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1153)

Ein Fehler, der beim Ändern von Berechtigungen auftrat, wurde behoben. Obwohl die Berechtigung tatsächlich geändert wurde, zeigte die Anwendung einen **Fehler** an, was zu Verwirrung bei den Nutzern führte. Dieser Bug wurde nun behoben, sodass Berechtigungsänderungen korrekt angezeigt werden.

> **Warum ist das wichtig?**  
Fehler bei der Berechtigungsverwaltung können zu Unsicherheit führen, besonders in sicherheitskritischen Bereichen wie der **Zeiterfassung**. Die Behebung dieses Bugs sorgt für eine verlässliche und transparente Benutzererfahrung.

---

## ✅ Fazit

**Release 2.19.0** bringt wichtige Erweiterungen und Fehlerbehebungen für die Zeiterfassungssoftware. Die Möglichkeit, **Arbeitszeiten auf 0 Stunden zu setzen**, sowie die verbesserte **Startseitenansicht für privilegierte Nutzer** machen das Tool noch benutzerfreundlicher. Zudem wurde ein kritischer Bug bei der Berechtigungsänderung behoben, was die Zuverlässigkeit der Anwendung weiter erhöht.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 2.19.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/zeiterfassung/releases/tag/zeiterfassung-2.19.0)
