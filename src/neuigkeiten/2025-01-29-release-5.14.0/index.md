---
draft: false
layout: layout-neuigkeiten
date: 2025-05-09
title: Urlaubsverwaltung 5.14.0 – Mehr Performance & gepflegter Code
author: Andreas Weigel
release-version: 5.14.0
teaserImage: /static/teaser/2025-01-29/UV-Release-5.14.0.png
description: Mit Version 5.14.0 wird die Benutzerübersicht deutlich schneller geladen, veralteter Code entfernt und die README-Dokumentation überarbeitet.
---

**Release 5.14.0** der Urlaubsverwaltung bringt einige gezielte Verbesserungen unter der Haube mit sich: Die **Benutzerübersicht** lädt jetzt spürbar schneller, veraltete Methoden wurden aufgeräumt, und auch die **README** erhielt ein kleines Update.

<!-- more -->

## ✨ Enhancements

### ⚡️ Optimierung beim Laden der Benutzerübersicht

🔗 [#4753 – Laden der Benutzerübersicht optimiert](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/4753)

Die Benutzerübersicht ist häufig der Einstiegspunkt für viele Administrierende und Vorgesetzte – umso wichtiger, dass sie **schnell und performant** lädt. In diesem Update wurde genau daran gearbeitet.

**Was wurde verbessert?**
- Datenbankzugriffe optimiert
- Reduzierung unnötiger Berechnungen und Objektinstanzen
- Verbesserte Ladezeiten insbesondere bei vielen Nutzer:innen

**Ergebnis:**  
👉 Spürbar schnellere Ladezeiten bei Zugriff auf die Benutzerliste  
👉 Mehr Übersicht ohne Wartezeit

---

### 📘 Überarbeitung der README

🔗 [#5105 – Readme operations](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5105)

Die README-Datei wurde überarbeitet, um Informationen klarer und aktueller darzustellen. Neue Nutzer:innen erhalten dadurch einen besseren Einstieg in die Anwendung.

**Highlights:**
- Aufgeräumte Struktur
- Korrekturen und konsistente Begrifflichkeiten
- Technische Hinweise aktualisiert

---

### 🧹 Entfernung veralteter `vacationDays()`-Methode

🔗 [#4752 – Remove deprecated vacationdays method](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/4752)

Die veraltete Methode `vacationDays()` wurde entfernt. Damit wird der Quellcode weiter bereinigt und modernisiert – ein kleiner, aber wichtiger Schritt in Richtung langfristiger Wartbarkeit.

**Nutzen:**
- Weniger Legacy-Code
- Klare Verantwortlichkeiten in der Codebasis
- Reduzierte Komplexität für Entwickler:innen

---

## ✅ Fazit

Mit **Version 5.14.0** wird die Urlaubsverwaltung wieder ein Stück **schneller**, **aufgeräumter** und **besser dokumentiert**. Wer viele Benutzer:innen verwaltet oder die Software weiterentwickelt, profitiert besonders von diesem Update.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 5.14.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.14.0)
