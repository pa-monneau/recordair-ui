# Publication npm du design system Record'air

## Commandes

Tester sans modifier de version ni publier :

```bash
npm run release:publish -- --dry-run
```

Publier un patch :

```bash
npm run release:publish -- patch
```

Publier sans confirmation interactive, utile dans une CI ou un terminal deja
prepare :

```bash
NPM_TOKEN=... npm run release:publish -- patch --yes
```

Si le token npm est stocke dans le Keychain macOS sous
`recordair-npm-token`, le script le lit automatiquement :

```bash
npm run release:publish -- patch --yes
```

Reprendre une publication interrompue apres un bump deja applique :

```bash
npm run release:publish -- --no-bump --yes
```

Le script :

- refuse par defaut de publier depuis un worktree sale ;
- lance `npm run typecheck` puis `npm run build` ;
- verifie l'auth npm avant de bump une nouvelle version ;
- bump le workspace root et tous les packages avec `npm version --workspaces`;
- saute les versions deja presentes sur npm pour reprendre une publication
  partielle ;
- fait un `npm pack --workspaces --dry-run` avant de publier les packages
  manquants.

## Auth npm

Une cle SSH ne sert pas a publier sur npm. Elle peut authentifier GitHub pour
`git push`, mais `npm publish` utilise l'auth npm : session `npm login`, token
npm, ou Trusted Publishing OIDC.

Options :

- **Token npm granulaire avec write + Bypass 2FA** : automatise le publish local
  via `NPM_TOKEN` ou le Keychain macOS (`recordair-npm-token`). Reversible en
  revoquant le token ou en supprimant l'entree Keychain. Risque principal :
  credential long-lived, donc ne jamais le versionner et preferer une expiration
  courte + scope limite aux packages `@recordair/*`.
- **Trusted Publishing OIDC via GitHub Actions** : meilleur choix long terme.
  Pas de secret long-lived ; npm accepte uniquement un workflow autorise.
  Reversible depuis les settings npm du package. C'est plus de setup initial,
  mais plus propre pour publier sans navigateur.

Reco : pour publier depuis ton Mac aujourd'hui, token granulaire limite et
expire est acceptable. Pour automatiser durablement sans 2FA navigateur, je
prendrais Trusted Publishing OIDC avec un workflow GitHub tag-based ou manuel.

Le script refuse volontairement de retomber sur une session `npm login` locale :
si le token Keychain est absent ou mauvais, il doit echouer avant publication
plutot que declencher une authentification navigateur.
