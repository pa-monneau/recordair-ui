# Catalogue des composants Record'air

## Périmètre

Le catalogue suit les 243 fichiers React présents dans le dossier `components` du produit Record'air au 20 juin 2026. Il ne crée aucune dépendance runtime vers le produit et ne modifie pas son code.

| Statut | Nombre | Signification |
|---|---:|---|
| Extrait | 128 | Disponible dans `ui-core`, `ui-patterns` ou consolidé dans un export équivalent. |
| Candidat DS | 0 | Tous les candidats identifiés ont été traités ou consolidés. |
| Couplé produit | 115 | Dépend de Next.js, des services, des actions, de Stripe, de la cartographie ou orchestre une vue produit. |

Les 128 éléments extraits comprennent 65 icônes, 70 exports publics de composants et sous-composants, ainsi que des composants source consolidés dans des exports génériques. La colonne `Export DS` de l’inventaire rend cette correspondance explicite.

## Documentation disponible

- `Core/*` : primitives rendues, variantes, contrôles et code d'utilisation.
- `Foundations/Tokens` : couleurs, espacements, typographie, rayons et ombres consommés par les composants.
- `Patterns/Record'air` : patterns déjà découplés, alimentés par des props.
- `Inventory/Record'air source` : recherche sur les 243 composants, description, chemin source, domaine, statut et dépendances.
- `docs/MIGRATION_INVENTORY.md` : frontière entre design system, adaptateurs et application.

## Règle de classification

### Extrait

Le composant possède un équivalent public dans le design system. Il ne doit importer ni route, ni action, ni service Record'air.

### Candidat DS

Le composant exprime un pattern visuel réutilisable. Son extraction doit remplacer les données et traductions applicatives par des props typées, des événements et, si nécessaire, un adaptateur de navigation.

### Couplé produit

Le composant orchestre une fonctionnalité ou dépend d'une infrastructure. Il reste dans Record'air tant qu'une frontière réutilisable claire n'est pas identifiée. Ses sous-parties visuelles peuvent néanmoins devenir des patterns.

## Suite recommandée

1. Tester les packages dans un projet consommateur distinct.
2. Migrer un premier écran Record'air derrière une branche dédiée, sans mélange avec la logique produit.
3. Extraire de nouveaux sous-patterns uniquement lorsqu'un second usage réel apparaît.
4. Garder Stripe, MapLibre, Supabase, les routes et les traductions derrière des adaptateurs optionnels.

## Réversibilité

- Le manifeste est documentaire et peut être régénéré depuis le repo source.
- Le statut d'un composant peut évoluer sans casser les packages npm.
- Un pattern spécifique peut être retiré de `ui-patterns` sans affecter `ui-core`.
- Le produit reste inchangé jusqu'à une migration explicite vers les packages publiés.
