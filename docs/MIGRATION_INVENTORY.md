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

## Lot 2 extrait

- Navigation : `NavigationList`, `LinkTabs`, `MenuSelect`, `MobileNavigation`.
- Structure : `SiteHeader`, `PageHeader`, `AuthVisualPanel`.
- Comportement générique : `ScrollAnchor`.
- Consolidations : `PasswordResetButton` vers `SubmitButton + Alert`, `ErrorPageContent` vers `ErrorState`.
- Données et contenu : `Accordion`, `ContentBlock`, `KeyValue`, `RatingStars`, `BookingField`, `DetailCard`, `EmbeddedBookingCard`, `FormCard`, `Metric`.

Les 12 candidats restants sont désormais extraits ou consolidés. L'inventaire source compte 128 éléments extraits, 0 candidat et 115 composants volontairement couplés au produit.

## Lots suivants

- Tables, galeries, messagerie et réservation seulement lorsqu'une frontière visuelle stable est démontrée.
- Sidebars et panneaux de préférences après séparation des actions et autorisations.
- Adaptateurs de framework au besoin d'un premier projet consommateur.

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
- La migration produit est progressive : chaque adaptateur local est supprimable dès que son contrat est couvert par le package.

## Retours de la migration réelle

Source de vérité des écarts observés lors de l'intégration npm dans Record'air.

### À ajouter au design system

| Écart | Comportement attendu | Impact actuel | Condition de migration |
|---|---|---|---|
| `Button` par rôle | Variante typée `artist`, `studio` ou `pro`, avec les gradients et ombres des tokens de rôle | Couvert dans la prochaine version de `ui-core` | Migrer `SignupForm`, puis supprimer le `Button` local |
| `Toast` compatible actions React | Accepter un callback `onClose` tout en documentant la migration depuis `onCloseAction`, et conserver un libellé de fermeture accessible injecté | Les formulaires de profil et studio conservent le `Toast` local | Choisir un contrat stable puis fournir un adaptateur ou une migration mécanique |
| Navigation `next-intl` | Permettre d'injecter un composant de lien dans les patterns navigants | Couvert par `as` et `linkComponent` dans la prochaine version | Migrer `Logo` et `RolePickerCard`, puis supprimer leurs copies locales |

### Résolu pendant la migration

- Les icônes Lucide utilisent leur prop native `fill`, et non l'ancienne prop locale `filled`.
- Les imports sont consolidés à une déclaration par package et par fichier.
- Les sources Tailwind des packages npm sont déclarées explicitement dans le CSS consommateur.
