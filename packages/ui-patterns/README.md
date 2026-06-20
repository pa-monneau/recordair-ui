# @recordair/ui-patterns

Assemblages visuels réutilisables construits exclusivement avec `@recordair/ui-core` : cartes studio et réservation, formulaires structurés, détails, avis, notifications, KPI, profil, en-têtes, navigation, pagination et stepper.

Les données, liens et actions sont fournis par props. Les routes, services et règles métier Record'air restent dans l'application consommatrice.

## Installation

```bash
npm install @recordair/ui-patterns @recordair/ui-core @recordair/theme-recordair tailwindcss
```

Peer dependencies : React `18.2+` et `@recordair/ui-core@0.1.0`.

## Configuration CSS obligatoire

Dans `app/globals.css` :

```css
@import "tailwindcss";
@import "@recordair/theme-recordair";

@source "../node_modules/@recordair/ui-core/dist";
@source "../node_modules/@recordair/ui-patterns/dist";
```

Pour `src/app/globals.css`, remplacez `../node_modules` par `../../node_modules`.

## Utilisation

```tsx
import { KeyValue } from "@recordair/ui-core";
import { DetailCard } from "@recordair/ui-patterns";

const BookingDetails = () => (
  <DetailCard title="Réservation">
    <dl>
      <KeyValue label="Total" value="160 €" />
    </dl>
  </DetailCard>
);

export { BookingDetails };
```

Ajoutez `"use client"` dans le composant consommateur lorsqu'il conserve un état ou fournit des callbacks aux patterns.

## Dépannage

Si les patterns semblent être du HTML brut, vérifiez que les deux dossiers `dist` sont déclarés avec `@source`, supprimez `.next`, puis redémarrez le serveur de développement.

## Licence

Licence propriétaire, tous droits réservés. Voir le fichier `LICENSE` inclus dans le package.
