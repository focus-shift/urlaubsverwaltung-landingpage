---
layout: layout-subpage
---

![](https://img.shields.io/badge/status-deprecated-yellow) 

Die Urlaubsverwaltung kann an einen Google Kalender angebunden werden, dazu sind folgende Dinge nötig

1. **Google Kalender API** aktivieren ([Enable and disable APIs](https://cloud.google.com/apis/docs/enable-disable-apis))
2. Die **OAuth2 Client Id** als Webanwendung konfigurieren (https://console.developers.google.com).
3. Das **OAuth2 Client Secret** bekommt man durch die Konfiguration des OAuth Clients.
4. Die **Kalender ID** ist die sogenannte "Kalenderadresse" die man in den Kalender Details findet.
5. Die **Weiterleitungs-URL** muss beim OAuth Client als "Autorisierte Weiterleitungs-URL" angegeben werden.
