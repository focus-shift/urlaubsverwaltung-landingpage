---
draft: false
layout: layout-neuigkeiten
date: 2025-04-18
title: Zeiterfassung 2.14.0 – Neue Feiertage und Bugfixes
author: Andreas Weigel
release-version: 2.14.0
teaserImage: /static/teaser/2024-12-06/ZE-Release-2.14.0.png
description: Release 2.14.0 bringt neue Feiertage für Washington, D.C., Virginia und Maryland sowie Bugfixes für verbesserte Stabilität.
---

Das **Release 2.14.0** der Zeiterfassung bringt spannende neue Funktionen und wichtige Bugfixes mit sich. Besonders hervorzuheben sind die **neuen Feiertage** für **Washington, D.C., Virginia und Maryland**, die nun offiziell in der Zeiterfassung berücksichtigt werden. Zusätzlich wurden einige Bugs behoben, die die Nutzung der Software noch zuverlässiger machen.

<!-- more -->

## ✨ Enhancements

### 📅 USA Feiertage – Washington, D.C., Virginia und Maryland

🔗 [#987 – USA Feiertage: Washington, D.C., Virginia und Maryland](https://github.com/urlaubsverwaltung/zeiterfassung/pull/987)

Mit diesem Release wurden die **USA Feiertage** für **Washington, D.C., Virginia und Maryland** in die Zeiterfassung integriert. Nutzer aus diesen Regionen können nun problemlos ihre **Feiertage** in der Zeiterfassungssoftware eintragen und verwalten. Dies sorgt für eine verbesserte Anpassung der Anwendung an die regionalen Gegebenheiten und ermöglicht eine genauere Erfassung der Arbeitszeiten in diesen Gebieten.

> **Warum ist das wichtig?**  
Durch die Berücksichtigung regionaler Feiertage können Unternehmen und Mitarbeiter nun ihre **Urlaubs- und Arbeitszeiterfassung** genau und konform zu den gesetzlichen Vorgaben in diesen Regionen durchführen.

---

## 🐞 Bugs

### 🚧 [Workflow] "Upload artifacts of failed tests" nur ausführen, wenn Dateien vorhanden sind

🔗 [#963 – Workflow Bugfix: Upload artifacts of failed tests nur ausführen, wenn Dateien vorhanden sind](https://github.com/urlaubsverwaltung/zeiterfassung/pull/963)

Ein Fehler im **CI/CD-Workflow** wurde behoben, der dazu führte, dass der Schritt "Upload artifacts of failed tests" auch dann ausgeführt wurde, wenn keine Dateien vorhanden waren. Jetzt wird dieser Schritt nur noch ausgelöst, wenn tatsächlich **Fehlerdateien** vorhanden sind, was den Prozess optimiert und Ressourcen spart.

### 🚧 Avatar nicht verfügbar, wenn Name mit Leerzeichen beginnt/endet

🔗 [#970 – Avatar Bugfix: Fehler bei Leerzeichen im Avatar-Namen](https://github.com/urlaubsverwaltung/zeiterfassung/pull/970)

Ein weiterer Bug wurde behoben, der dazu führte, dass der **Avatar** eines Nutzers nicht angezeigt wurde, wenn der **Name des Nutzers** mit einem Leerzeichen begann oder endete. Dieser Fehler wurde korrigiert, sodass Avatare jetzt auch bei Leerzeichen korrekt dargestellt werden.

> **Warum ist das wichtig?**  
Ein funktionierender Avatar ist nicht nur für die Benutzererfahrung wichtig, sondern trägt auch zur **Visibilität** und **Zugehörigkeit** der Nutzer innerhalb der Software bei. Mit diesem Fix wird die Anzeige von Avataren jetzt zuverlässig und korrekt gewährleistet.

---

## ✅ Fazit

**Release 2.14.0** bringt mit der Integration der **USA Feiertage** für Washington, D.C., Virginia und Maryland eine wichtige Anpassung für Nutzer aus diesen Regionen. Dazu wurden auch mehrere **Bugfixes** durchgeführt, die die Stabilität und Benutzerfreundlichkeit der Zeiterfassung weiter verbessern.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 2.14.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/zeiterfassung/releases/tag/zeiterfassung-2.14.0)
