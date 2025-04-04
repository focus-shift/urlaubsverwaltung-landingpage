---
draft: false
layout: layout-neuigkeiten
date: 2025-02-07
title: Urlaubsverwaltung 5.16.0 – Neue API-Funktionen und stabilere Hintergrundprozesse
author: Andreas Weigel
release-version: 5.16.0
teaserImage: /static/teaser/2025-02-07/UV-Release-5.16.0.png
description: Die Version 5.16.0 bringt neue API-Endpunkte zur Personenabfrage, nutzt standardisierte Spring-Scheduler-Logik und behebt einen Fehler im HATEOAS-Link-System.
---

Mit **Release 5.16.0** legt die Urlaubsverwaltung den Schwerpunkt auf **erweiterte API-Funktionalitäten** sowie eine stabilere **TaskScheduler-Integration** für geplante Hintergrundaufgaben. Außerdem wurde ein Bug im Bereich der HATEOAS-Links behoben, der die Nutzung des Abwesenheitsendpunkts störte.

<!-- more -->

## ✨ Enhancements

### 👥 [API|Persons] Abruf aller Personen via API

🔗 [#5125 – Ability to retrieve all persons via the Api](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5125)

Die API wurde erweitert: Es ist nun möglich, **alle Benutzer:innen** im System über einen API-Endpunkt abzufragen.

**Was ist neu?**
- Neuer API-Endpunkt `/api/persons`
- Zugriff auf alle im System registrierten Personen (je nach Berechtigung)

**Warum nützlich?**  
👉 Erleichtert **Integration in externe Systeme**  
👉 Bessere Möglichkeiten für automatisierte Auswertungen und Synchronisation

---

### ✅ [API|Persons] Abruf des Aktiv-Status einer Person

🔗 [#5126 – Ability to retrieve person active status via API](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5126)

Zusätzlich zum Zugriff auf alle Personen kann über die API jetzt auch der **Aktivitätsstatus (active/inactive)** jeder Person abgefragt werden.

**Nutzen:**
- Übersicht über aktive Benutzer:innen
- Grundlage für automatisierte Bereinigungen oder Reports

---

### 🧵 Verwendung des Spring `TaskScheduler` Interfaces

🔗 [#5132 – Use TaskScheduler interface to get the default TaskScheduler](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5132)

Die Anwendung verwendet nun explizit das `TaskScheduler`-Interface von Spring, um standardkonforme und flexible Hintergrundverarbeitung zu ermöglichen.

**Warum wichtig?**  
👉 Mehr Flexibilität für geplante Aufgaben  
👉 Bessere Kompatibilität mit Spring Boot-Konventionen  
👉 Robuste und zukunftssichere Architektur

---

## 🐞 Bugfixes

### 🔗 HATEOAS-Links im Absence-Endpoint repariert

🔗 [#5121 – Fix: Absence endpoint HATEOAS links](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5121)

Ein Fehler im **Abwesenheitsendpunkt (`/api/absences`)** wurde behoben: Die generierten **HATEOAS-Links** waren unvollständig bzw. fehlerhaft. Dadurch konnten manche Clients die Verlinkung nicht korrekt interpretieren.

**Ergebnis:**  
✅ HATEOAS-Integration ist nun wieder vollständig und konsistent

---

## ✅ Fazit

Mit Version **5.16.0** macht die Urlaubsverwaltung ihre API deutlich leistungsfähiger und besser integrierbar: Der Zugriff auf Personen und deren Status ist nun umfassender möglich – perfekt für externe Tools oder Synchronisierungen. Gleichzeitig sorgt die verbesserte Architektur bei geplanten Tasks und der Fix im HATEOAS-System für mehr **Stabilität** und **Zukunftssicherheit**.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 5.16.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.16.0)
