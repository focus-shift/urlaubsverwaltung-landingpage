---
draft: false
layout: layout-neuigkeiten
date: 2025-06-11
title: Zeiterfassung 2.18.0 – Verbesserte PostgreSQL-Performance & Bugfixes
author: Andreas Weigel
release-version: 2.18.0
teaserImage: /static/teaser/2025-03-14/ZE-Release-2.18.0.png
description: Release 2.18.0 verbessert die Performance der PostgreSQL-Datenbank und behebt mehrere Fehler, darunter Probleme bei der Personensuche und ein Syntaxfehler im Turbo.js-Skript.
---

Das **Release 2.18.0** bringt wichtige Verbesserungen für die **Performance** der Zeiterfassungssoftware, insbesondere im Bereich der **Datenbankoptimierung**. Außerdem wurden mehrere **Bugs** behoben, die die Benutzererfahrung beeinträchtigten.

<!-- more -->

## ✨ Enhancements

### ⚙️ Foreign Key Indexing und Performance-Optimierung in PostgreSQL

🔗 [#1144 – Foreign Key Indexing and Performance in PostgreSQL](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1144)

Im Rahmen dieses Updates wurde die **PostgreSQL-Datenbankoptimierung** weiter vorangetrieben. Speziell wurde der **Foreign Key Indexing** verbessert, was zu einer höheren Datenbankleistung und schnelleren Abfragen führt.

> **Warum ist das wichtig?**  
Die Performance von **PostgreSQL** wird durch die Indizierung von Fremdschlüsseln erheblich gesteigert. Dies führt zu schnelleren Datenbankabfragen, besonders in größeren Systemen mit vielen Verknüpfungen zwischen Tabellen. Die Optimierung sorgt für eine **flüssigere Benutzererfahrung** bei der Arbeit mit großen Datenmengen.

---

## 🐞 Bugs

### 🔍 Suche nach einer Person mit Vorname und Nachname ergibt keine Treffer

🔗 [#1142 – Suche nach einer Person mit Vorname und Nachname ergibt keine Treffer](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1142)

Ein Problem bei der **Personensuche** wurde behoben. Bisher war es nicht möglich, eine Person korrekt zu finden, wenn man sowohl den **Vornamen** als auch den **Nachnamen** eingab. Dieser Fehler führte dazu, dass keine Treffer angezeigt wurden, obwohl die Person in der Datenbank existierte.

> **Warum ist das wichtig?**  
Die Korrektur dieses Bugs stellt sicher, dass die **Suche nach Mitarbeitern** oder Nutzern nun wie erwartet funktioniert. Gerade bei großen Teams ist eine **schnelle und präzise Personensuche** entscheidend für die effiziente Zeiterfassung.

---

### ⚠️ Uncaught SyntaxError: Unexpected token 'export' bei turbo.js

🔗 [#1140 – Uncaught SyntaxError: Unexpected token 'export' at turbo.js](https://github.com/urlaubsverwaltung/zeiterfassung/pull/1140)

Ein weiterer Fehler, der in der Anwendung auftrat, wurde ebenfalls behoben. Der **SyntaxError** im `turbo.js`-Skript verhinderte, dass die Anwendung korrekt geladen wurde. Der Fehler trat auf, wenn der Browser den Export-Befehl nicht korrekt verarbeitete.

> **Warum ist das wichtig?**  
Die Behebung dieses Syntaxfehlers stellt sicher, dass die **Benutzeroberfläche** ohne Probleme funktioniert und die Anwendung nun in allen gängigen Browsern korrekt dargestellt wird.

---

## ✅ Fazit

**Release 2.18.0** bringt mit der Verbesserung des **PostgreSQL-Indexing** eine wichtige **Performance-Steigerung**, die die Anwendung schneller und effizienter macht. Die behobenen **Bugs** sorgen für eine verbesserte Benutzererfahrung, insbesondere bei der **Personensuche** und der **Fehlerbehebung im JavaScript**.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 2.18.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/zeiterfassung/releases/tag/zeiterfassung-2.18.0)
