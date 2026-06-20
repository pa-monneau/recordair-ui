# @recordair/theme-recordair

Tokens Record'air pour Tailwind CSS v4. Ce package expose les couleurs sémantiques, espacements, tailles, typographies, rayons et ombres utilisés par les composants `@recordair`.

## Installation recommandée

```bash
npm install @recordair/theme-recordair @recordair/ui-core @recordair/ui-patterns tailwindcss
```

## Configuration Tailwind CSS v4

Tailwind ignore `node_modules` pendant sa détection automatique. Importez le thème et déclarez les packages de composants dans la feuille CSS globale.

Pour `app/globals.css` :

```css
@import "tailwindcss";
@import "@recordair/theme-recordair";

@source "../node_modules/@recordair/ui-core/dist";
@source "../node_modules/@recordair/ui-patterns/dist";
```

Pour `src/app/globals.css`, utilisez `../../node_modules` :

```css
@source "../../node_modules/@recordair/ui-core/dist";
@source "../../node_modules/@recordair/ui-patterns/dist";
```

Les chemins sont relatifs au fichier CSS. Si vous utilisez uniquement `ui-core`, retirez la directive concernant `ui-patterns`.

## Personnalisation

Surchargez les variables sources après l'import du thème :

```css
:root {
  --recordair-color-brand-primary: var(--color-brand-project);
  --recordair-color-brand-gradient-from: var(--color-brand-project);
  --recordair-color-brand-gradient-to: var(--color-accent-project);
  --recordair-font-sans: var(--font-project);
}
```

## Dépannage

Si les couleurs de fond globales sont présentes mais que les composants restent sans espacements, bordures ou rayons, le thème est chargé mais les directives `@source` ne pointent pas vers les dossiers `dist`. Corrigez leur chemin, supprimez `.next`, puis redémarrez le serveur.

Guide complet : [Record'air Design System](https://www.npmjs.com/package/@recordair/theme-recordair).

## Licence

Licence propriétaire, tous droits réservés. Voir le fichier `LICENSE` inclus dans le package.
