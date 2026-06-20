# Inventaire de migration Record'air

Audit source en lecture seule, effectué le 20 juin 2026 sur :

`/Users/pamonneau/jarvis-starter-kit/airstudio/airstudio/components`

## État initial

- 243 fichiers de composants React.
- 14 primitives dans `components/ui`.
- 65 icônes locales.
- 123 composants liés à Next.js ou `next-intl`.
- 77 composants liés directement aux services, actions, paiements, cartes ou données Record'air.

## Lot 1 extrait

### Core

- Actions : `Button`, `LinkButton`, `IconButton`, `ButtonGroup`.
- Cartes : `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardMedia`, `CardTitle`, `CardDescription`.
- Identité : `Badge`, `Avatar`, `IconBox`.
- Formulaires : `Field`, `Input`, `SearchInput`, `Textarea`, `Checkbox`, `Radio`, `NativeSelect`, `Select`, `Toggle`, `ChoiceChip`.
- Feedback et états : `Alert`, `Modal`, `Toast`, `Spinner`, `Skeleton`, `Progress`, `EmptyState`.
- Navigation et structure : `Tabs`, `Divider`, `SubmitButton`.
- 63 exports d'icônes via Lucide, plus les sources exactes Google et X utilisées par Record'air.

Les composants client conservent leur directive `use client`. Les libellés visibles nécessaires à l'accessibilité sont des props, pas des chaînes dépendantes de `next-intl`.

### Patterns

- `BookingChip`, `FormRow`, `ProfileSectionCard`.
- `RecordairMark`, `RecordairLogo`, `RoleBadge`, `RolePickerCard`.
- `StatusPill`, `SummaryLine`, `TrendChip`.
- `BookingCard`, `Stepper`, `StudioCard`, `ReviewCard`.
- `KpiCard`, `SectionHeader`, `Pagination`, `NotificationCard`.

Les imports Next.js ont été remplacés par des éléments web standards. Les types métier issus des services ont été remplacés par des unions ou DTO locaux.

Les patterns ne redéfinissent plus les styles structurels de carte, badge, avatar, champ ou bouton. Ils composent `ui-core` et ne gardent localement que leur layout métier.

## Lots suivants

### Lot 2, composants de composition, démarré

- Navigation : shell, liens, menus mobiles, boutons d'en-tête.
- Données : KPI et pagination extraits ; tableaux, filtres et empty states restent à traiter.
- Marketplace : cartes studio, réservation et avis extraits ; galerie reste à traiter.
- Compte : sidebars, panneaux de préférences, historique de paiement.

Contrat attendu : données par props, navigation par `href` ou adaptateur, traductions par libellés injectés.

### Lot 3, adaptateurs optionnels

- Adaptateur Next.js pour `Link` et `Image`.
- Adaptateur `next-intl` pour les dictionnaires Record'air.
- Adaptateur Stripe Elements.
- Adaptateur cartographie MapLibre.

Ces adaptateurs ne doivent jamais devenir des dépendances de `ui-core`.

### Reste dans l'application

- Server Actions, appels Supabase, Stripe serveur et webhooks.
- Routing, autorisation, récupération de données et règles métier.
- Formulaires orchestrant directement une mutation produit.
- Pages et assembleurs de routes.

La frontière suit une règle simple : la librairie rend et émet des événements, l'application décide et exécute.

## Réversibilité

- Changer le thème ne touche pas aux primitives.
- Renommer le scope npm est mécanique avant publication.
- Un pattern trop spécifique peut être retiré sans casser `ui-core`.
- Record'air n'est pas encore consommateur de la librairie, donc aucun risque de régression produit pendant l'extraction.
