---
layout: layout-wissensbasis
breadcrumb:
  title: Exchange
---

![](https://img.shields.io/badge/status-deprecated-yellow) 

## Welche Bedingungen muss der Exchange Benutzer erfüllen?

Es wird die E-Mail-Adresse und das Passwort des Exchange Benutzers angegeben,
der automatisch Termine anlegen soll. Für diese Zugangsdaten muss der
Autodiscoverdienst funktionieren - am Besten dies vorher separat testen.

Außerdem muss der Benutzer über folgende Berechtigungen verfügen:
* Kalender anlegen können
* Termine im angegebenen Kalender anlegen können
* beim Anlegen von Terminen die entsprechenden Benutzer einladen können
(E-Mail-Adresse der Benutzer wird hierzu verwendet)


## Muss der konfigurierte Kalender existieren?

Bei der Synchronisierung wird überprüft, ob es bereits einen Kalender mit dem
angegebenen Namen gibt. Wenn kein Kalender mit diesem Namen existiert, wird
automatisch ein neuer angelegt.
