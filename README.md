# Urlaubsverwaltung

Landing Page für die [Open Source Urlaubsverwaltung](https://github.com/urlaubsverwaltung/urlaubsverwaltung)

## Development

Was du benötigst:

- Spaß an der Arbeit :o)
- NodeJS Version 20.x
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

### git hooks (optional)

Zum Automatisieren verschiedener Dinge bietet dir das Projekt [git hooks](https://git-scm.com/book/uz/v2/Customizing-Git-Git-Hooks)
an. Diese kannst du mit folgendem Befehl installieren:

```bash
git config core.hooksPath '.githooks'
```

Die Githooks sind im [.githooks](./.githooks/) Verzeichnis zu finden.

## Homepage bauen

Eine optimierte Version der Landingpage kannst du bauen mit:

```bash
npm run build
```

### Verzeichnisstruktur

- **public**
  - enthält statische Resourcen die nicht transformiert werden müssen (z. B. favicon, robots.txt, ...)
- **src**
  - enthält den Inhalt der Webseite, CSS, JavaScript und alles was transformiert werden muss.

## Deployment

Jeder commit auf den Branch `main` wird automatisiert gebaut, auf den `gh-pages` branch gemerged und damit live genommen.

siehe `.github/workflows/deployment.yml`

## Bilder & Icons

- [Bild-Optimierung](https://squoosh.app/)
- Screenshots via [flameshot](https://flameshot.org/)
- [Icon Set](https://heroicons.com/)
