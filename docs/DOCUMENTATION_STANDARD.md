# Standard de documentation des composants

Chaque export public doit avoir une entrée Storybook et documenter les éléments suivants.

## Primitive

- Rôle et cas d'usage.
- Props publiques et valeurs par défaut.
- Variantes visuelles.
- États : défaut, hover, focus, disabled, loading, erreur et vide selon le composant.
- Accessibilité : nom accessible, navigation clavier et sémantique.
- Exemple d'import et code copiable.
- Tokens consommés, sans valeur visuelle en dur.

## Pattern

- Intention métier sans dépendance à l'infrastructure.
- Primitives `ui-core` assemblées.
- DTO ou props attendues.
- Événements émis vers l'application.
- États responsive, vide, chargement et erreur.
- Limites : ce qui reste volontairement dans Record'air.

## Critères de sortie

Un composant est documenté lorsque :

1. son rendu principal existe dans Storybook ;
2. ses variantes utiles sont visibles ;
3. la page Docs affiche le code ;
4. TypeScript décrit son contrat public ;
5. le contrôle d'accessibilité ne remonte pas d'erreur bloquante ;
6. aucune dépendance applicative interdite ne fuit dans le package.
