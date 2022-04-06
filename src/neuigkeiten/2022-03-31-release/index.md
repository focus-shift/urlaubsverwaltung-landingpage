---
draft: false
layout: layout-neuigkeiten
date: 2022-03-31
title: Benutzerspezifische Stammdaten
author: Tobias Schneider
release-version: 4.35.0
teaserImage: /static/update.jpg
---

Hinterlege eine Personalnummer und weitere Informationen für deine Mitarbeitende.

<!-- more -->

### Benutzerspezifische Stammdaten

Die Urlaubsverwaltung kann nun Stammdaten! Was bedeutet das genau? Es ist im Konto einer Person möglich zusätzliche Informationen
wie die **Personalnummer** und **Zusatzinformation** zu hinterlegen. Zum Hinzufügen oder Bearbeiten einer dieser Information,
könnt ihr über das Konto einer Person bei den __Stammdaten__ auf den Stift klicken und schon kann es losgehen.  

<div class="flex my-8 gap-4 flex-col md:flex-row">
    <figure>
        <img
          src="basedata-account-overview.png"
          alt="Eingabe der Stammdaten"
          decoding="async"
          loading="lazy"
          class="rounded-lg"
        />
        <figcaption class="text-sm text-center">Stammdatenformular</figcaption>
    </figure>
    <figure>
        <img
          src="basedata-input.png"
          alt="Eingabe der Stammdaten"
          decoding="async"
          loading="lazy"
          class="rounded-lg"
        />
        <figcaption class="text-sm text-center">Übersicht der Stammdaten</figcaption>
    </figure>
</div>

Nachdem ihr die Informationen gespeichert habt, werden diese angezeigt

* im Konto,
* in der Benutzerübersicht,
* bei den Krankmeldungen,
* in der Abwesenheitsstatistik und dessen CSV-Export
* sowie in anderen Übersichten.

<div class="flex my-8 gap-4 flex-col md:flex-row">
    <figure>
        <picture>
            <source srcset="benutzeruebersicht.avif" type="image/avif" />
            <img
              src="benutzeruebersicht.png"
              alt="Benutzeruebersicht mit Personalnummer"
              decoding="async"
              loading="lazy"
              class="rounded-lg"
            />
        </picture>
        <figcaption class="text-sm text-center">Benutzerübersicht mit Personalnummer.</figcaption>
    </figure>
    <figure>
        <picture>
            <source srcset="krankmeldungen.avif" type="image/avif" />
            <img
              src="krankmeldungen.png"
              alt="Krankmeldungen mit Personalnummer"
              decoding="async"
              loading="lazy"
              class="rounded-lg"
            />
        </picture>
      <figcaption class="text-sm text-center">Krankmeldungen mit Personalnummer.</figcaption>
    </figure>
    <figure>
        <picture>
            <source srcset="abwesenheitsstatistik.avif" type="image/avif" />
            <img
              src="abwesenheitsstatistik.png"
              alt="Abwesenheitsstatistik mit Personalnummer"
              decoding="async"
              loading="lazy"
              class="rounded-lg"
            />
        </picture>
        <figcaption class="text-sm text-center">Abwesenheitsstatistik mit Personalnummer.</figcaption>
    </figure>
</div>

Wir freuen uns über dein Feedback an <a href="mailto:info@urlaubsverwaltung.cloud?subject=Feedback">info@urlaubsverwaltung.cloud</a>.
