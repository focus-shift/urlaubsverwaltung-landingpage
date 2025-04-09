---
draft: false
layout: layout-neuigkeiten.hbs
date: 2025-06-11
title: Zeiterfassung 2.18.0 – Verbesserte PostgreSQL-Performance & Bugfixes
author: Andreas Weigel
release-version: 2.18.0
teaserImage: /static/teaser/2025-03-14/ZE-Release-2.18.0.png
description: Release 2.18.0 verbessert die Performance der Zeiterfassung und behebt mehrere Fehler, darunter Probleme bei der Personensuche.
---

Das **Release 2.18.0** bringt wichtige Verbesserungen für die **Performance** der Zeiterfassung, insbesondere im Bereich der **Datenbankoptimierung**. Außerdem wurden mehrere **Fehler** behoben, die die Benutzererfahrung beeinträchtigten.

<!-- more -->

## Verbesserungen

### Die Zeiterfassung wird schneller

Im Rahmen dieses Updates wurde die **Datenbankoptimierung** weiter vorangetrieben. Speziell wurde der **Zugriffe** verbessert, was zu einer höheren Leistung und schnelleren Abfragen führt.

> **Warum ist das wichtig?**  
> Die Performance von **Datenbank** wird durch die Indizierung von Fremdschlüsseln erheblich gesteigert. Dies führt zu schnelleren Datenbankabfragen, besonders in größeren Systemen mit vielen Verknüpfungen zwischen Tabellen. Die Optimierung sorgt für eine **flüssigere Benutzererfahrung** bei der Arbeit mit großen Datenmengen.

---

## Fehlerbehebungen

### Suche nach einer Person mit Vorname und Nachname ergab keine Treffer

Ein Problem bei der **Personensuche** wurde behoben. Bisher war es nicht möglich, eine Person korrekt zu finden, wenn man sowohl den **Vornamen** als auch den **Nachnamen** eingab. Dieser Fehler führte dazu, dass keine Treffer angezeigt wurden, obwohl die Person in der Datenbank existierte.

> **Warum ist das wichtig?**  
> Die Korrektur dieses Bugs stellt sicher, dass die **Suche nach Mitarbeitern** oder Nutzern nun wie erwartet funktioniert. Gerade bei großen Teams ist eine **schnelle und präzise Personensuche** entscheidend für die effiziente Zeiterfassung.

---

## Fazit

**Release 2.18.0** bringt mit der Verbesserung des **PostgreSQL-Indexing** eine wichtige **Performance-Steigerung**, die die Anwendung schneller und effizienter macht. Die behobenen **Bugs** sorgen für eine verbesserte Benutzererfahrung, insbesondere bei der **Personensuche** und der **Fehlerbehebung im JavaScript**.

👉 Zur vollständigen Release-Übersicht:  
[Release 2.18.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/zeiterfassung/releases/tag/zeiterfassung-2.18.0)
