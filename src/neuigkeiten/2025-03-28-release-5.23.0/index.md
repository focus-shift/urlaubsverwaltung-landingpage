---
draft: false
layout: layout-neuigkeiten.hbs
date: 2025-06-25
title: Urlaubsverwaltung 5.23.0 – Abwesenheitsstatistik einsehen und Fehlerbehebungen
author: Andreas Weigel
release-version: 5.23.0
teaserImage: /static/teaser/2025-03-21/UV-Release-5.22.0.png
description: Release 5.23.0 ermöglicht es Benutzern, die Abwesenheitsstatistik einzusehen, und behebt Fehler bei den Demodaten und der Erstellung von negativen Überstunden.
---

Das **Release 5.23.0** der **Urlaubsverwaltung** bringt spannende neue **Funktionen** sowie einige **Fehlerbehebungen**. Besonders hervorzuheben ist die Möglichkeit für Benutzer, die **Abwesenheitsstatistik** einzusehen, sowie Updates an der **docker-compose.yaml** für eine aktuellere Konfiguration. Es wurden zudem Bugs bezüglich der **Demodaten-Duplizierung** und der **negativen Überstunden** behoben.

<!-- more -->

## Verbesserungen

### Abwesenheitsstatistik für Benutzende einsehbar

Mit diesem Update können Benutzer nun eine **Abwesenheitsstatistik** einsehen, die es ihnen ermöglicht, ihre vergangenen und geplanten Abwesenheiten schnell zu überprüfen. Diese Funktion bietet eine Übersicht über **Urlaubstage**, **Krankmeldungen** und andere relevante Abwesenheiten und hilft dabei, eine bessere Übersicht und Planung zu gewährleisten.

> **Warum ist das wichtig?**  
> Diese Funktion erleichtert Benutzern die **Selbstkontrolle** über ihre **Abwesenheitszeiten** und fördert eine transparentere Verwaltung von Urlaub und Krankheitstagen. Besonders nützlich für **Personalabteilungen** und **Mitarbeiter**, die ihre Abwesenheiten genau im Blick behalten müssen.

---

## Fehlerbehebungen

### Initiales Anlegen von negativen Überstunden mit Minus (-10 z.B) nicht möglich

Mit diesem Update wird der Fehler behoben, der es unmöglich machte, **negative Überstunden** zu erstellen (z.B. -10 Stunden). Jetzt können **negative Überstunden** korrekt angelegt werden, was für **Überstundenabbau** oder **Guthaben** von Bedeutung ist.

> **Warum ist das wichtig?**  
> Für die **Überstundenverwaltung** ist es entscheidend, dass sowohl **positive als auch negative Stunden** korrekt erfasst werden können. Mit diesem Fix können Unternehmen **negative Überstunden** zur Reduzierung von Arbeitszeitguthaben oder Abbau von Überstunden nutzen.

---

## Fazit

Das **Release 5.23.0** bietet einige nützliche **Erweiterungen**, insbesondere die Möglichkeit für Benutzer, ihre **Abwesenheitsstatistik** einzusehen. Zudem wurden ein wichtiger **Fehler** behoben: **Anlage von negativen Überstunden**.

👉 Zur vollständigen Release-Übersicht:  
[Release 5.23.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.23.0)
