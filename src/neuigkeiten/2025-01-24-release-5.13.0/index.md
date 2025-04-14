---
draft: false
layout: layout-neuigkeiten.hbs
date: 2025-05-07
title: Urlaubsverwaltung 5.13.0 – Einfachere API-Abfrage für Überstundenabbau
author: Andreas Weigel
release-version: 5.13.0
teaserImage: /static/teaser/2025-01-24/UV-Release-5.13.0.png
description: Mit Version 5.13.0 wird die API der Urlaubsverwaltung verbessert - Überstundenabbau über mehrere Tage lässt sich jetzt leichter und konsistenter abfragen.
---

Das neue **Release 5.13.0** der Urlaubsverwaltung bringt eine gezielte, aber wirkungsvolle Verbesserung für alle, die **mit der API arbeiten**: Die Abfrage von **mehrtägigem Überstundenabbau** ist jetzt klarer, strukturierter und einfacher.

<!-- more -->

## Verbesserungen

### Überstundenabbau über mehrere Tage per API leichter abfragen

In vielen Fällen wollen externe Tools oder Dienste Informationen über **Überstundenabbau** auslesen – insbesondere, wenn dieser über **mehrere Tage hinweg** erfolgt. Vor diesem Release war die Abfrage solcher Vorgänge technisch umständlich und teilweise uneinheitlich.

**Was wurde verbessert?**

- Vereinfachung der API-Struktur bei der Rückgabe von mehrtägigem Überstundenabbau
- Einheitliche Darstellung im JSON-Format
- Klarere Trennung von Urlaub und Überstundenabbau

**Vorteile für Entwickler:innen:**

- Weniger manuelle Nachbearbeitung der Daten
- Bessere Integration in externe Anwendungen oder Reportingsysteme
- Solide Grundlage für Automatisierungen und Statistiken

## Fazit

**Release 5.13.0** richtet sich insbesondere an **Entwickler:innen** und **API-Nutzer:innen**: Die überarbeitete API erleichtert die Arbeit mit **mehrtägigem Überstundenabbau** und sorgt für mehr Konsistenz und Effizienz.

<sub>Zur vollständigen Release-Übersicht: [Release 5.13.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.13.0)</sub>
