---
draft: false
layout: layout-neuigkeiten
date: 2025-05-21
title: Urlaubsverwaltung 5.17.0 – bessere Testdoku und Bugfixes für stabileres Verhalten
author: Andreas Weigel
release-version: 5.17.0
teaserImage: /static/teaser/2025-02-15/UV-Release-5.17.0.png
description: Release 5.17.0 bringt eine aktualisierte Dokumentation für UI-Tests und behebt Fehler bei asynchronen Prozessen sowie beim Umgang mit inaktiven Stellvertretungen.
---

Mit **Release 5.17.0** liefert die Urlaubsverwaltung ein kleines, aber wichtiges Update. Im Fokus stehen eine **aktualisierte UI-Test-Dokumentation** für Entwickler:innen sowie zwei **relevante Bugfixes**, die sich auf asynchrone Prozesse und die Verwaltung inaktiver Personen auswirken.

<!-- more -->

## ✨ Enhancements

### 🧪 Dokumentation der UI-Tests aktualisiert

🔗 [#5162 – UI Test Doku in README aktualisieren](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5162)

Die README wurde aktualisiert und enthält nun eine überarbeitete Anleitung zur **Ausführung und Pflege von UI-Tests**. Diese Dokumentation ist besonders hilfreich für neue Mitwirkende sowie beim Onboarding neuer Entwickler:innen.

**Was ist neu?**
- Klarere Struktur
- Konkrete Hinweise zur Testausführung
- Bessere Lesbarkeit und Verständlichkeit

**Warum wichtig?**  
👉 Erleichtert den Einstieg ins Projekt  
👉 Unterstützt nachhaltige Testqualität  
👉 Fördert Community-Beiträge

---

## 🐞 Bugfixes

### 🙈 Inaktive Stellvertretung führte zu Fehlern

🔗 [#5143 – Backup an inactive person with permission "INACTIVE"](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5143)

Ein seltener Fall, bei dem eine Person mit der Berechtigung **"INACTIVE"** als Stellvertretung (Backup) eingetragen war, führte zu inkonsistentem Verhalten. Dies wurde behoben – inaktive Personen werden nun korrekt behandelt.

**Ergebnis:**  
✅ Kein Versand oder Fehler mehr durch inaktive Accounts in Stellvertreterrollen.

---

### ⚙️ Asynchrone Verarbeitung funktionierte nicht zuverlässig

🔗 [#5131 – Enable @Async with @EnableAsync](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5131)

Die Annotation `@Async` war im Code zwar vorhanden, jedoch nicht korrekt aktiviert – die notwendige Konfiguration (`@EnableAsync`) fehlte. Dadurch wurden asynchrone Prozesse nicht wie erwartet parallel ausgeführt.

**Was wurde korrigiert?**
- Aktivierung von `@EnableAsync`
- Verbesserung der **Performance** und **Responsiveness** bei Hintergrundprozessen

---

## ✅ Fazit

Mit Release **5.17.0** wird die Urlaubsverwaltung wieder ein Stück robuster: Die **Dokumentation der UI-Tests** wurde auf Vordermann gebracht, und zwei wichtige Bugs im Bereich **Benutzerverwaltung** und **asynchrone Ausführung** wurden beseitigt. Gerade in Teams mit vielen Accounts und parallelen Prozessen macht sich dieses Update bemerkbar.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 5.17.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.17.0)
