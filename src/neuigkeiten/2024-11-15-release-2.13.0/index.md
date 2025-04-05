---
draft: false
layout: layout-neuigkeiten
date: 2025-04-11
title: Zeiterfassung 2.13.0 – Verbesserungen bei Berichten und Bugfixes
author: Andreas Weigel
release-version: 2.13.0
teaserImage: /static/teaser/2024-11-15/ZE-Release-2.13.0.png
description: Release 2.13.0 bringt wichtige Verbesserungen bei der Anzeige der Arbeitszeiten und behebt Fehler in den Sollzeiten von Berichten.
---

Das **Release 2.13.0** der Zeiterfassung bringt wichtige **Verbesserungen** bei der Darstellung von Arbeitszeiten und behebt einen Fehler, der die Sollzeiten in Berichten betraf. Mit dieser Version werden Berichte nun noch genauer und nützlicher, was die Nutzung für alle Anwender optimiert.

<!-- more -->

## ✨ Enhancements

### 📊 Berichte: Noch zu leistende Arbeitszeit / Mehr geleistete Arbeitszeit zu ausgewählten Personen anzeigen

🔗 [#878 – Verbesserte Anzeige der Arbeitszeiten in Berichten](https://github.com/urlaubsverwaltung/zeiterfassung/pull/878)

Eine der wichtigsten Verbesserungen in diesem Release ist die erweiterte Funktionalität für **Berichte**. Nun können für **ausgewählte Personen** sowohl die **noch zu leistende Arbeitszeit** als auch die **mehr geleistete Arbeitszeit** angezeigt werden. Diese Erweiterung sorgt dafür, dass Nutzer und Administratoren eine präzisere Übersicht über die Arbeitszeiten erhalten, was die Planung und Verwaltung von Arbeitsstunden noch einfacher und effizienter macht.

> **Warum ist das wichtig?**  
Die präzise Anzeige von Arbeitszeiten ist ein entscheidender Faktor für das **Zeitmanagement** und die **Effizienz** in Unternehmen. Mit dieser Funktion können nun auch detailliertere Analysen der Arbeitszeit durchgeführt werden.

---

## 🐞 Bugs

### 🚧 Falsche Sollzeiten in Berichten bei Tagen mit halben Abwesenheiten

🔗 [#930 – Fehler bei Sollzeiten in Berichten bei halben Abwesenheiten](https://github.com/urlaubsverwaltung/zeiterfassung/pull/930)

Ein **Bug** in der Berechnung der **Sollzeiten** in Berichten wurde behoben. Zuvor trat der Fehler auf, dass bei Tagen mit **halben Abwesenheiten** die Sollzeiten nicht korrekt angezeigt wurden. Mit diesem Fix wird nun sichergestellt, dass **halbe Abwesenheiten** korrekt berücksichtigt werden und die Sollzeiten in den Berichten präzise sind.

> **Warum ist das wichtig?**  
Die korrekte Darstellung von **Sollzeiten** ist essenziell für die **Arbeitszeitabrechnung** und die Planung von Abwesenheiten. Dieser Fix sorgt dafür, dass keine **Ungenauigkeiten** mehr auftreten, die zu Fehlern in der Abrechnung führen könnten.

---

## ✅ Fazit

**Release 2.13.0** bringt mit der verbesserten Darstellung der **noch zu leistenden** und **mehr geleisteten Arbeitszeiten** in Berichten eine nützliche Erweiterung für die Zeiterfassung. Darüber hinaus wurde ein Bug behoben, der die Sollzeiten in Berichten bei **halben Abwesenheiten** fehlerhaft anzeigte.

Die neue Version sorgt somit für noch genauere Berichte und eine verbesserte Benutzererfahrung.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 2.13.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/zeiterfassung/releases/tag/zeiterfassung-2.13.0)
