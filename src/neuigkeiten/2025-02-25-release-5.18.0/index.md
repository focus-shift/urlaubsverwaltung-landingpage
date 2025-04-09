---
draft: false
layout: layout-neuigkeiten.hbs
date: 2025-05-28
title: Urlaubsverwaltung 5.18.0 veröffentlicht – mit Demo-Banner, stabilerem Dark Mode und Zeitzonen-Fix
author: Andreas Weigel
release-version: 5.18.0
teaserImage: /static/teaser/2025-02-25/UV-Release-5.18.0.png
description: Version 5.18.0 bringt ein Info-Banner für Demo-Daten, unveränderliche Listen im Code und behebt Fehler im Dark Mode, bei Outlook-Sync und beim Text zu Sonderurlaub.
---

Die Version **5.18.0** der Urlaubsverwaltung legt den Fokus darauf die **Stabilität** und **Nutzerfreundlichkeit** zu erhöhen.

<!-- more -->

## Fehlerbehebungen

### Dark Mode mit deaktiviertem Gravatar wird nicht korrekt angezeigt

Ein Darstellungsproblem im **Dark Mode**, das auftrat, wenn der **Gravatar deaktiviert** war, wurde behoben. Die Benutzeroberfläche zeigt nun wieder alle Elemente korrekt an – auch ohne Nutzerbilder.

---

### Kalenderfreigabe: Fehlerhafte Konvertierung der Zeitzone

Ein Fehler in der **Kalenderfreigabe** wurde behoben: Urlaube wurden unter Umständen in der falschen **Zeitzone** angezeigt. Jetzt stimmt die Zeitangabe wieder mit der realen Abwesenheit überein.

---

### Text zu Sonderurlaub gemäß BGB § 616 inkorrekt in Spezialfällen

Der angezeigte Hinweistext bei **Sonderurlaub gemäß BGB § 616** war in Fällen mit **Tarifverträgen oder betrieblichen Regelungen** nicht korrekt. Dies wurde nun angepasst, sodass die juristische Information wieder präzise ist.

---

## Fazit

Release **5.18.0** stärkt die Urlaubsverwaltung gleich mehrfach: Mit besserer **Entwicklungsumgebung**, mehr **Code-Stabilität** und gezielten **Fehlerbehebungen**, die das tägliche Arbeiten spürbar verbessern. Auch kleine Details – wie Zeitzonen oder Hinweise zu Sonderurlaub – wurden optimiert, damit alles noch reibungsloser funktioniert.

👉 Zur vollständigen Release-Übersicht:  
[Release 5.18.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.18.0)
