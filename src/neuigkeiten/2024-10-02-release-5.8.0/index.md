---
draft: false
layout: layout-neuigkeiten
date: 2024-10-02
title: Urlaubsverwaltung 5.8.0 – Kubernetes-Upgrade & Verbesserte Krankmeldungsverwaltung
author: Andreas Weigel
release-version: 5.8.0
teaserImage: /static/teaser/2024-10-02/UV-Release-5.8.0.png
description: Mit Release 5.8.0 wird die Urlaubsverwaltung fit für Kubernetes 1.19 und höher. Zudem gibt es eine Erweiterung bei den Krankmeldungen für mehr Flexibilität.
---

Das **Release 5.8.0** bringt bedeutende Verbesserungen in zwei Bereichen: **Kubernetes-Unterstützung** und die **Krankmeldungsverwaltung**. Beide Features zielen darauf ab, die **Betriebsstabilität** und **Benutzerfreundlichkeit** der Urlaubsverwaltung weiter zu erhöhen.

<!-- more -->

## ✨ Enhancements

### ⚙️ Kubernetes-Upgrade: Startprobe und Unterstützung für ältere Versionen entfernt

🔗 [#4919 – Add startup probe and remove support for k8s <= 1.18 in chart from 6.0.0](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/4919)

Die Kubernetes-Unterstützung wird auf die Version **1.19** und höher fokussiert. Wichtige Änderungen:

- **Startprobe (Startup Probe)**: Für eine verbesserte **Kubernetes-Integration** wurde die Startprobe hinzugefügt, die sicherstellt, dass die Anwendung vollständig hochgefahren ist, bevor sie für den Traffic bereitsteht.
- **Kompatibilität mit Kubernetes <= 1.18 entfernt**: In dieser Version wird die Unterstützung für ältere Kubernetes-Versionen (<= 1.18) nicht mehr gewahrt, um mit neueren Versionen und deren Funktionen kompatibel zu bleiben.

> **Warum ist das wichtig?**  
Die aktuelle Kubernetes-Version unterstützt mehr moderne Features und Sicherheitsupdates, und diese Änderungen helfen dabei, die Urlaubsverwaltung auf einer stabileren und leistungsfähigeren Grundlage auszuführen.

---

### 🏥 Erweiterung der Krankmeldung: Mehr Flexibilität für bestehende Krankmeldungen

🔗 [#4313 – Eigene bestehende Krankmeldung erweitern](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/4313)

Diese Erweiterung erlaubt es, **bestehende Krankmeldungen zu bearbeiten** und flexibel anzupassen. Die wichtigsten Neuerungen:

- Nutzer können **bereits angelegte Krankmeldungen** nachträglich erweitern.
- Bessere Anpassungsmöglichkeiten, wenn sich etwa der Zeitraum oder der Status einer Krankmeldung ändert.

> **Warum ist das wichtig?**  
Diese Funktion ermöglicht eine flexiblere Handhabung von Krankmeldungen und ist besonders hilfreich, wenn Änderungen nachträglich erforderlich sind, z. B. bei einer Verlängerung der Krankheitsdauer oder der Anpassung der Entgeltfortzahlung.

---

## ✅ Fazit

Release **5.8.0** liefert zwei große Neuerungen: Mit der **Kubernetes-Upgrade**-Anpassung bleibt die Urlaubsverwaltung auf dem neuesten Stand und bietet **verbesserte Betriebsstabilität**. Gleichzeitig sorgt die **Erweiterung der Krankmeldung** für eine noch **benutzerfreundlichere Verwaltung von Krankheitsfällen**.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 5.8.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.8.0)
