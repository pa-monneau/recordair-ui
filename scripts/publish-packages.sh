#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

BUMP="patch"
DRY_RUN=false
YES=false
ALLOW_DIRTY=false
SKIP_VERIFY=false
TAG="latest"
KEYCHAIN_SERVICE="${NPM_TOKEN_KEYCHAIN_SERVICE:-recordair-npm-token}"
NO_BUMP=false

usage() {
  cat <<'EOF'
Usage:
  npm run release:publish -- [patch|minor|major|<version>] [options]
  ./scripts/publish-packages.sh [patch|minor|major|<version>] [options]

Bump la version du workspace root et des packages, verifie, puis publie les
packages npm publics du design system Record'air.

Options:
  --tag <tag>       Dist-tag npm a publier. Defaut: latest.
  --dry-run         Verifie build + contenu des packages sans bump ni publish.
  --yes             Ne demande pas de confirmation avant le publish.
  --no-bump         Publie les versions actuelles sans les incrementer.
  --allow-dirty     Autorise une release depuis un worktree deja modifie.
  --skip-verify     Saute typecheck/build. A eviter hors urgence.
  -h, --help        Affiche cette aide.

Auth:
  - Session locale npm: npm login, puis ce script.
  - Token automation: NPM_TOKEN=... npm run release:publish -- patch --yes
  - Keychain macOS: service recordair-npm-token lu si NPM_TOKEN est absent.

Le token doit rester hors git.
EOF
}

die() {
  echo "Erreur: $1" >&2
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --tag)
      shift
      [[ $# -gt 0 ]] || die "--tag attend une valeur"
      TAG="$1"
      ;;
    --tag=*)
      TAG="${1#*=}"
      ;;
    --dry-run)
      DRY_RUN=true
      ;;
    --yes|-y)
      YES=true
      ;;
    --no-bump)
      NO_BUMP=true
      ;;
    --allow-dirty)
      ALLOW_DIRTY=true
      ;;
    --skip-verify)
      SKIP_VERIFY=true
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    -*)
      die "option inconnue: $1"
      ;;
    *)
      BUMP="$1"
      ;;
  esac
  shift
done

case "$BUMP" in
  major|minor|patch|premajor|preminor|prepatch|prerelease|[0-9]*.[0-9]*.[0-9]*)
    ;;
  *)
    die "bump invalide: $BUMP"
    ;;
esac

[[ -f package.json ]] || die "package.json introuvable"
[[ -f package-lock.json ]] || die "package-lock.json introuvable"
[[ -d packages ]] || die "dossier packages introuvable"

if [[ "$DRY_RUN" == false && "$NO_BUMP" == false && "$ALLOW_DIRTY" == false ]] && [[ -n "$(git status --porcelain)" ]]; then
  die "worktree sale. Commit/stash les changements ou ajoute --allow-dirty."
fi

echo "Packages a publier:"
npm pkg get name version --workspaces
echo

if [[ "$SKIP_VERIFY" == false ]]; then
  npm run typecheck
  npm run build
fi

if [[ "$DRY_RUN" == true ]]; then
  npm pack --cache .npm-cache --workspaces --dry-run
  echo
  echo "Dry-run termine: aucune version modifiee, aucun package publie."
  exit 0
fi

if [[ "$YES" == false ]]; then
  read -r -p "Publier les packages apres bump '$BUMP' avec tag '$TAG' ? [y/N] " answer
  [[ "$answer" == "y" || "$answer" == "Y" ]] || die "publish annule"
fi

if [[ -z "${NPM_TOKEN:-}" ]] && command -v security >/dev/null 2>&1; then
  NPM_TOKEN="$(security find-generic-password -a "$USER" -s "$KEYCHAIN_SERVICE" -w 2>/dev/null || true)"
fi

if [[ -n "${NPM_TOKEN:-}" ]]; then
  TMP_NPMRC="$(mktemp)"
  trap 'rm -f "$TMP_NPMRC"' EXIT
  [[ -f .npmrc ]] && cat .npmrc > "$TMP_NPMRC"
  printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" >> "$TMP_NPMRC"
  export NPM_CONFIG_USERCONFIG="$TMP_NPMRC"
fi

if ! npm whoami >/dev/null 2>&1; then
  die "auth npm introuvable. Connecte-toi avec npm login ou stocke le token dans le Keychain ($KEYCHAIN_SERVICE)."
fi

if [[ "$NO_BUMP" == false ]]; then
  npm version "$BUMP" --workspaces --include-workspace-root --no-git-tag-version
else
  echo "Bump ignore: publication des versions actuelles."
fi

echo
echo "Versions a publier:"
npm pkg get name version --workspaces
echo

npm pack --cache .npm-cache --workspaces --dry-run

published_count=0
skipped_count=0

while IFS= read -r package_json; do
  package_dir="$(dirname "$package_json")"
  package_name="$(node -p "require('./${package_json}').name")"
  package_version="$(node -p "require('./${package_json}').version")"

  if npm view "${package_name}@${package_version}" version >/dev/null 2>&1; then
    echo "Skip: ${package_name}@${package_version} existe deja sur npm."
    skipped_count=$((skipped_count + 1))
    continue
  fi

  npm publish "$package_dir" --access public --tag "$TAG"
  published_count=$((published_count + 1))
done < <(find packages -mindepth 2 -maxdepth 2 -name package.json | sort)

echo
echo "Publication terminee: ${published_count} publie(s), ${skipped_count} deja present(s)."
