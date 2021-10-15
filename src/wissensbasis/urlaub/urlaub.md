---
layout: layout-subpage
---

## Workflow bei Urlaubsanträgen

![Workflow bei Urlaubsanträgen](urlaub.png)

## Wer genehmigt Urlaub?

Der Urlaub kann entweder vom Abteilungsleiter des Mitarbeiters oder von
globalen Chefs genehmigt werden.

## Wird der im Urlaubsantrag ausgewählte Vertreter informiert?

Der Vertreter erhält eine Mitteilung per E-Mail, vorausgesetzt der
E-Mail-Versand ist unter dem Menüpunkt "Einstellungen" aktiviert und korrekt
konfiguriert.

## Wer wird informiert, wenn ein Urlaubsantrag gestellt wurde?

Wenn ein Urlaubsantrag gestellt wurde, erhalten sowohl Abteilungsleiter des
Mitarbeiters als auch globale Chefs eine E-Mail-Benachrichtigung.
(vorausgesetzt bei diesen Personen ist die entsprechende E-Mail-Benachrichtigung
aktiviert)

Voraussetzung: Der E-Mail-Versand ist unter dem Menüpunkt "Einstellungen"
aktiviert und korrekt konfiguriert.

## Wer wird informiert, wenn ein Urlaubsantrag genehmigt wurde?

Wenn ein Urlaubsantrag genehmigt wurde, erhalten sowohl der betroffene
Mitarbeiter als auch die Office Nutzer eine E-Mail-Benachrichtigung.
(vorausgesetzt beim Office ist entsprechende E-Mail-Benachrichtigung aktiviert)

Voraussetzung: Der E-Mail-Versand ist unter dem Menüpunkt "Einstellungen"
aktiviert und korrekt konfiguriert.

## Wer wird informiert, wenn ein Urlaubsantrag abgelehnt wurde?

Wenn ein Urlaubsantrag abgelehnt wurde, erhält nur der betroffene Mitarbeiter
eine E-Mail.

## Wie funktioniert der zweistufige Genehmigungsprozess von Urlaubsanträgen?

Der einfache Genehmigungsprozess für Urlaubsanträge sieht vor, dass
Urlaubsanträge von einem Abteilungsleiter oder Chef genehmigt werden.

Beim zweistufigen Genehmigungsprozess wäre der Urlaubsantrag nach der
Genehmigung durch den zuständigen Abteilungsleiter nur vorläufig genehmigt.
Die endgültige Freigabe erfolgt durch einen Benutzer mit der Berechtigung zur
Freigabe.

Voraussetzungen: Wie beim Abteilungsleiter muss der Freigabe Verantwortliche der
Abteilung zugeordnet sein, für deren Mitarbeiter er zuständig ist. Des Weiteren
muss der zweistufige Genehmigungsprozess für die einzelnen Abteilungen aktiviert
werden. So lassen sich beide Workflows für jeweils verschiedene Abteilungen
nutzen.

## Wie kann ich die Art des Urlaubs bei einem Urlaubsantrag bearbeiten?

Aktuell ist es noch nicht möglich, bestehende Urlaubsanträge zu bearbeiten.
(offenes Issue #12)

Um die Art des Urlaubs bei einem Urlaubsantrag zu bearbeiten, gibt es folgende
Möglichkeiten:

**Oberfläche**:
Als privilegierter Benutzer den Urlaubsantrag stornieren und einen neuen
Urlaubsantrag mit der korrekten Art des Urlaubs für den gleichen Zeitraum
stellen.

**Datenbank**:
In der Datenbank der Urlaubsverwaltung in der Tabelle `Application` den
entsprechenden Urlaubsantrag heraussuchen und den Wert im Feld `VacationType_id`
anpassen auf die ID der gewünschten Urlaubsart, z.B. `3000` für `UNPAIDLEAVE`.
Welche ID hier eingetragen werden muss, kann in der Tabelle `VacationType`
nachgesehen werden.

## Wie funktioniert der Übergang zwischen zwei Jahren?

Der Urlaub der im bisherigen Jahr noch nicht genommen wurde wird in das folgende Jahr übernommen. Diese Übernahme passiert in den Standard-Einstellungen am 1.1. des Folgejahres um 05:00 Uhr.
Der übernommene Resturlaub beinhaltet alle bis zum 31.12. nicht genommenen Urlaubstage. Dieser Resturlaub kann dann bis zum Ende des Monats März genommen werden.

![Urlaubsvertretung am Antrag](vertretung.png)

## Kann eine Urlaubsvertretung angegeben werden?

Ja, bei der Antragsstellung können optional eine oder mehrere Urlaubsvertretungen angegeben werden. Für jede Vertretung kann eine eigene Notiz hinterlegt werden. Die ausgewählten Personen werden über die Vertretung per E-Mail benachrichtigt. Außerdem ist für die Vertretung unter dem Menü-Punkt "Urlaub" im Abschnitt "Aktuelle und zukünftige Vertretungen" eine Übersicht aller Vertretungen einsehbar.

![Übersicht zu aktuellen und zukünftigen Vertretungen](uebersicht-vertretungen.png)

## Technische Dokumentation für Application Status

![application-status](tech-application-status.png)
