# Urlaubsverwaltung

Landing Page für die [Open Source Urlaubsverwaltung](https://github.com/synyx/urlaubsverwaltung)

## Development

Was du benötigst:

- Spaß an der Arbeit :o)
- NodeJS Version 10.x
  - am besten installierst du dir ein Tool zum verwalten verschiedener NodeJS Versionen wie z. B. [node version manager (nvm)](https://github.com/creationix/nvm) oder [nodenv](https://github.com/nodenv/nodenv)

Hast du NodeJS installiert und dieses Repository geklont kannst du direkt loswerkeln.

```bash

git clone git@github.com:synyx/urlaubsverwaltung-landingpage.git
cd urlaubsverwaltung-landingpage
npm install
npm run dev
```

`npm run dev` startet einen Server und baut nach dem bearbeiten von Dateien alles neu. Im Browsers kannst du dann sofort deine Änderungen begutachten.

## Homepage bauen

```bash
npm run build
```

Das Skript baut alle benötigten statischen Resourcen für die Homepage (_.html, _.js, \*.css Assets).

Aktuell findest du diese Assets im `<rootDir>/out` Verzeichnis und kannst diese z. B. mit `npx http-server out` anschauen. [http-server](https://github.com/indexzero/http-server) startet per default einen Server auf Port 8080 (http://localhost:8080).

## FAQ

### Warum ist das Projektsetup so verrückt?

Weil wir die Chance nutzen wollen Technologien zu evaluieren ¯\\\_(ツ)\_/¯  
Eigentlich reicht es aktuell HTML und CSS selbst zu hacken... Dieses eigentlich...
