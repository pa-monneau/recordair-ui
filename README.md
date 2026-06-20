# Record'air Design System

Librairie React/TypeScript extraite de l'interface Record'air. Le repo produit reste une source en lecture seule : aucun fichier Record'air n'est importé au runtime et aucun chemin `@/`, service, action, route Next.js ou traduction applicative ne fuit dans les packages.

## Architecture

- `@recordair-ds/ui-core` : primitives accessibles et icônes, indépendantes de la marque.
- `@recordair-ds/theme-recordair` : tokens Record'air pour Tailwind CSS v4.
- `@recordair-ds/ui-patterns` : patterns visuels Record'air alimentés par props.
- Storybook : documentation, états interactifs et contrôle d'accessibilité.

## Catalogue

`ui-core` expose 42 primitives et sous-composants : boutons, cartes composables, formulaires, feedback, navigation par liens ou menu, accordéon, contenu éditorial, lignes clé/valeur et notation accessible.

`ui-patterns` expose 28 assemblages construits exclusivement avec ces primitives : cartes studio et réservation, formulaires structurés, détails, contenus embarqués, états d’erreur, avis, notifications, KPI, profil, en-têtes, navigation mobile, panneau d’authentification, pagination et stepper.

Le catalogue source couvre désormais 128 composants extraits ou consolidés, aucun candidat en attente et 115 composants volontairement conservés dans le produit. Ces 115 composants ne sont pas des oublis : ils restent couplés aux routes, actions, services ou règles métier de Record'air.

Le Storybook liste chaque export public dans sa famille. L’entrée `Docs` de chaque famille affiche les exemples et leur code source, ouvert par défaut. `Inventory/Record'air source` suit séparément la couverture des 243 composants du produit afin de ne pas confondre API extraite et migration complète.

Références : [catalogue complet](./docs/COMPONENT_CATALOG.md) et [standard de documentation](./docs/DOCUMENTATION_STANDARD.md).

Le scope npm `@recordair-ds` est provisoire. Le renommer avant la première publication est une opération mécanique et réversible.

## Installation dans un projet

```bash
npm install @recordair-ds/ui-core @recordair-ds/ui-patterns @recordair-ds/theme-recordair tailwindcss
```

Dans la feuille CSS globale Tailwind v4 :

```css
@import "tailwindcss";
@import "@recordair-ds/theme-recordair";
```

Le thème déclare lui-même les dossiers compilés des deux packages avec `@source`. Le projet consommateur n'a pas à safelister les classes.

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle, Field, Input } from "@recordair-ds/ui-core";
import { ProfileSectionCard } from "@recordair-ds/ui-patterns";

const Example = () => (
  <ProfileSectionCard title="Profil" subtitle="Informations publiques">
    <Field label="Nom" htmlFor="name">
      <Input id="name" />
    </Field>
    <Button>Enregistrer</Button>
  </ProfileSectionCard>
);

const CustomCard = () => (
  <Card variant="elevated">
    <CardHeader><CardTitle>Ma carte</CardTitle></CardHeader>
    <CardContent>Les patterns restent des assemblages, pas de nouvelles primitives cachées.</CardContent>
  </Card>
);

export { CustomCard, Example };
```

## Personnaliser le thème

Les primitives ne dépendent que de tokens sémantiques. Un autre projet peut remplacer le thème Record'air par un package exposant les mêmes tokens ou surcharger les variables sources :

```css
:root {
  --recordair-color-brand-primary: #3157d5;
  --recordair-color-brand-gradient-from: #3157d5;
  --recordair-color-brand-gradient-to: #7c3aed;
  --recordair-font-sans: "Geist", sans-serif;
}
```

## Développement

```bash
npm install
npm run build
npm run storybook
```

Avant publication :

```bash
npm run build-storybook
npm run pack:dry-run
```

Voir [l'inventaire de migration](./docs/MIGRATION_INVENTORY.md) pour la frontière entre design system et logique produit.
