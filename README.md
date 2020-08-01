# Urlaubsverwaltung

Landing Page für die [Open Source Urlaubsverwaltung](https://github.com/synyx/urlaubsverwaltung)

## Development

Was du benötigst:

- Spaß an der Arbeit :o)
- NodeJS Version 12.x
  - die genaue Version findest du in der [.nvmrc](.nvmrc) Datei
  - am besten installierst du dir ein Tool zum verwalten verschiedener NodeJS Versionen wie z. B. [node version manager (nvm)](https://github.com/creationix/nvm) oder [nodenv](https://github.com/nodenv/nodenv)

Hast du NodeJS installiert und dieses Repository geklont kannst du direkt loswerkeln.

```bash

git clone git@github.com:synyx/urlaubsverwaltung-landingpage.git
cd urlaubsverwaltung-landingpage
npm ci
npm run dev
```

`npm run watch` startet einen Server und baut nach dem Bearbeiten von Dateien alles neu. Im Browsers kannst du nach manuellem neuladen deine Änderungen begutachten.

## Homepage bauen

```bash
npm run build
```

Das Skript baut alle benötigten statischen Ressourcen für die Homepage (_.html, _.js, \*.css Assets).
