---
draft: false
layout: layout-neuigkeiten
date: 2025-04-30
title: Urlaubsverwaltung 5.11.0 – Neue Rollen-Zuweisung via Full-Scope Claim Mapping
author: Andreas Weigel
release-version: 5.11.0
teaserImage: /static/teaser/2025-01-10/UV-Release-5.11.0.png
description: Release 5.11.0 bringt einen neuen `RolesFromClaimMapper`, der Querschnittsberechtigungen über Claims aus Identity Providern erlaubt – ideal für zentrale Rollensteuerung.
---

In der Version **5.11.0** der Urlaubsverwaltung steht alles im Zeichen der **Integration von Identity Providern (IdPs)** und einer flexiblen, zentralen Verwaltung von Rollen und Berechtigungen.

<!-- more -->

## ✨ Enhancement

### 🆕 Neuer `RolesFromClaimMapper` für Full-Scope-Rollen aus Claims

🔗 [#5067 – Neuer 'RolesFromClaimMapper' um Querschnitts-Berechtigungen via Full-Scope zu erhalten](https://github.com/urlaubsverwaltung/urlaubsverwaltung/pull/5067)

Mit diesem Release wird ein **neuer Mapper für Rollen aus Claims** eingeführt, der besonders für Setups mit zentraler Rollensteuerung über einen Identity Provider (z.B. Keycloak, Auth0, Azure AD) relevant ist.

**Was macht der Mapper?**
- Er liest Rolleninformationen direkt aus einem **Claim im Token** (z.B. `realm_access.roles`)
- Unterstützt das **Full-Scope-Mapping**, also die systemweite Berechtigung auf Grundlage externer Rollen
- Ermöglicht die **automatische Zuweisung von Urlaubsverwaltungs-Rollen** wie `OFFICE`, `BOSS`, `DEPARTMENT_HEAD` etc.

**Vorteile:**
- Zentrale Verwaltung aller Rollen in einem externen IdP
- Kein manuelles Rollenmapping in der Urlaubsverwaltung notwendig
- Ideal für große Organisationen mit Single Sign-On und rollenbasierter Zugriffskontrolle

---

## ⚙️ Für wen ist das interessant?

Dieses Feature richtet sich vor allem an:
- Admins, die **SSO über OAuth2/OpenID Connect** integriert haben
- Unternehmen mit **zentralem Rollen- und Berechtigungsmanagement**
- Nutzer:innen, die die Urlaubsverwaltung in eine bestehende IT-Infrastruktur einbetten

---

## ✅ Fazit

**Release 5.11.0** erweitert die Authentifizierungs- und Autorisierungsoptionen erheblich. Der neue `RolesFromClaimMapper` bringt die Flexibilität, **Rollen automatisiert und zentral** zu steuern – ein wichtiger Schritt für den professionellen und sicheren Einsatz in Unternehmen.

👉 Zur vollständigen Release-Übersicht:  
🔗 [Release 5.11.0 auf GitHub ansehen](https://github.com/urlaubsverwaltung/urlaubsverwaltung/releases/tag/urlaubsverwaltung-5.11.0)
