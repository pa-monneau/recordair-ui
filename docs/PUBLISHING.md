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

Le script :

- refuse par defaut de publier depuis un worktree sale ;
- lance `npm run typecheck` puis `npm run build` ;
- bump le workspace root et tous les packages avec `npm version --workspaces`;
- verifie que les versions n'existent pas deja sur npm ;
- fait un `npm pack --workspaces --dry-run` avant `npm publish --workspaces`.

## Auth npm

Une cle SSH ne sert pas a publier sur npm. Elle peut authentifier GitHub pour
`git push`, mais `npm publish` utilise l'auth npm : session `npm login`, token
npm, ou Trusted Publishing OIDC.

Options :

- **Session locale `npm login`** : simple pour un poste de dev, mais peut
  redemander du 2FA selon la configuration du compte ou du package.
  Reversible facilement avec `npm logout`.
- **Token npm granulaire avec write + Bypass 2FA** : automatise le publish local
  via `NPM_TOKEN`. Reversible en revoquant le token. Risque principal :
  credential long-lived, donc ne jamais le versionner et preferer une expiration
  courte + scope limite aux packages `@recordair/*`.
- **Trusted Publishing OIDC via GitHub Actions** : meilleur choix long terme.
  Pas de secret long-lived ; npm accepte uniquement un workflow autorise.
  Reversible depuis les settings npm du package. C'est plus de setup initial,
  mais plus propre pour publier sans navigateur.

Reco : pour publier depuis ton Mac aujourd'hui, token granulaire limite et
expire est acceptable. Pour automatiser durablement sans 2FA navigateur, je
prendrais Trusted Publishing OIDC avec un workflow GitHub tag-based ou manuel.
