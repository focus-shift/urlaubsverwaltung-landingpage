---
draft: false
layout: layout-neuigkeiten.hbs
date: 2025-05-14
title: Urlaubsverwaltung 5.15.0 – Performance-Optimierung für PostgreSQL-Datenbanken
author: Andreas Weigel
release-version: 5.15.0
teaserImage: /static/teaser/2025-01-30/UV-Release-5.15.0.png
description: Version 5.15.0 verbessert die Datenbankabfragen in PostgreSQL durch gezielte Foreign Key Indexierung – ein wichtiger Schritt zu besserer Skalierbarkeit und Geschwindigkeit.
---

Mit dem **Release 5.15.0** legt die Urlaubsverwaltung den Fokus auf eine technische Optimierung im Hintergrund.

<!-- more -->

## Verbesserungen

### Verbesserte Foreign Key Indexierung in PostgreSQL

In dieser Version wurde gezielt die **Indexierung von Fremdschlüsseln** in der Datenbankstruktur überprüft und angepasst. Das Ziel: **schnellere Datenbankabfragen**, vor allem bei komplexen Joins und hoher Datenlast.

**Was wurde gemacht?**

- Analyse bestehender Foreign Keys
- Ergänzung fehlender Indizes
- Optimierung für PostgreSQL-spezifisches Verhalten

**Warum ist das wichtig?**
👉 Bei größeren Installationen mit vielen Benutzern oder Daten wächst die Belastung auf die Datenbank – hier helfen saubere Indizes, um Anfragen deutlich schneller auszuführen.  
👉 Besonders bei **Urlaubsstatistiken**, **Genehmigungsprozessen** oder **Massen-Imports** wird die Datenbank nun effizienter arbeiten.

s## Fazit

Auch wenn es auf den ersten Blick ein kleines Update ist: **Release 5.15.0** bringt eine spürbare **Verbesserung der Datenbankleistung** – vor allem für PostgreSQL-Nutzer:innen. Es ist ein technischer Meilenstein auf dem Weg zu einer noch robusteren und skalierbareren Urlaubsverwaltung.

<sub>Zur vollständigen Release-Übersicht: [Release 5.15.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.15.0)</sub>
