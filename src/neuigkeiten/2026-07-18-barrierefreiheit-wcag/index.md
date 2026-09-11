---
draft: true
layout: layout-neuigkeiten.hbs
date: 2026-07-18
title: Barrierefreiheit ist keine Checkbox – unser Weg zu WCAG 2.2
author: Tobias Schneider
teaserImage: /static/urlaubsverwaltung.png
description: Urlaubsverwaltung und Zeiterfassung testen wir automatisiert gegen WCAG 2.0 (A, AA) und WCAG 2.2 (AA) – bei jeder Auslieferung, auf jeder Seite. Ein Zwischenstand und eine Bitte um Feedback.
---

Gute Software funktioniert für alle – auch für Menschen, die auf einen Screenreader, reine Tastaturbedienung oder ausreichend Kontrast angewiesen sind. Deshalb ist Barrierefreiheit für uns kein einmaliges Projekt, sondern ein fester Bestandteil unserer Entwicklung von Urlaubsverwaltung und Zeiterfassung.

<!-- more -->

## Was wir automatisiert testen

Bei jeder Auslieferung crawlen wir automatisiert alle erreichbaren Seiten der Anwendung und prüfen sie mit [axe-core](https://github.com/dequelabs/axe-core) gegen die Erfolgskriterien von:

- **WCAG 2.0, Stufe A** (`wcag2a`)
- **WCAG 2.0, Stufe AA** (`wcag2aa`)
- **WCAG 2.2, Stufe AA** (`wcag22aa`)

Das passiert nicht nur einmal im Jahr oder stichprobenartig, sondern als fester Bestandteil unserer CI-Pipeline – in drei Browser-Engines (Chromium, Firefox, WebKit). Findet der Test eine Verletzung eines dieser Kriterien, schlägt der Build fehl. Ein Feature mit neuen Barrieren kann dadurch gar nicht erst bei euch landen.

## Ehrlich bleiben: was das bedeutet – und was nicht

So ein automatisierter Test ist kein Persilschein. Werkzeuge wie axe-core finden zuverlässig einen großen Teil typischer Probleme – fehlende Labels, zu geringe Kontraste, falsche ARIA-Attribute, nicht erreichbare Elemente per Tastatur. Sie ersetzen aber keine vollständige Prüfung durch Expert:innen oder durch Menschen, die tatsächlich mit assistiven Technologien arbeiten. Genau das ist unser nächster Schritt.

Was heute schon gilt: Jede Seite, die wir ausliefern, hat automatisiert gegen WCAG 2.0 A/AA und WCAG 2.2 AA bestanden. Und wir haben das nicht als "Nice-to-have" irgendwo abgehakt, sondern als Gate, das ein Release verhindern kann.

## Für euch als Team

Wenn in eurem Unternehmen Menschen mit Einschränkungen arbeiten oder arbeiten könnten, ist das keine Randnotiz, sondern Teil dessen, wofür Urlaubsverwaltung und Zeiterfassung gebaut sind: für den ganzen Betrieb, nicht nur für die Mehrheit.

Die Details zu Umfang, Prüfdatum, geprüften Kriterien und eingesetzten Technologien pflegen wir in unserer <a href="/barrierefreiheit/">Erklärung zur Barrierefreiheit</a>. Diese Seite ist bewusst kein Marketing-Badge, sondern ein Nachweis, den wir regelmäßig aktualisieren.

## Hilf uns, besser zu werden

Wir wissen, dass wir noch nicht fertig sind. Wenn du auf eine Barriere stößt – egal ob in der Urlaubsverwaltung, der Zeiterfassung oder auf dieser Website – schreib uns an <a href="mailto:info@urlaubsverwaltung.cloud?subject=Feedback%20Barrierefreiheit">info@urlaubsverwaltung.cloud</a>. Jeder Hinweis hilft uns, die Software für mehr Menschen nutzbar zu machen.
