# Urlaubsverwaltung

Landing Page für die [Open Source Urlaubsverwaltung](https://github.com/synyx/urlaubsverwaltung)

## Development

Was du benötigst:

- Spaß an der Arbeit :o)
- NodeJS Version 14.x
  - die genaue Version findest du in der [.nvmrc](.nvmrc) Datei
  - am besten installierst du dir ein Tool zum Verwalten verschiedener NodeJS Versionen wie z. B. [node version manager (nvm)](https://github.com/creationix/nvm) oder [nodenv](https://github.com/nodenv/nodenv)

Hast du NodeJS installiert und dieses Repository geklont kannst du direkt loswerkeln.

```bash

git clone --depth 1 git@github.com:focus-shift/urlaubsverwaltung-landingpage.git
cd urlaubsverwaltung-landingpage
npm ci
npm run dev
```

`npm run dev` startet einen Server und baut nach dem Bearbeiten von Dateien alles neu.

## Homepage bauen

Eine optimierte Version der Landingpage kannst du bauen mit:

```bash
npm run build
```

## Deployment

Jeder commit auf den Branch `main` wird automatisiert gebaut, auf den `gh-pages` branch gemerged und damit live genommen.

siehe `.github/workflows/deployment.yml`
