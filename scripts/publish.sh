#!/usr/bin/env bash
#
# Publishes the project to GitHub in one command.
#
# Points the repository at your GitHub remote and pushes the entire history in a
# single operation. Git sends every commit in one transfer.
#
# Before running this, create an EMPTY repository at https://github.com/new
# (no README, no .gitignore, no licence).
#
#   ./scripts/publish.sh https://github.com/MatiasViillalba/word-c2.git

set -euo pipefail

REMOTE_URL="${1:-}"
BRANCH="${2:-main}"

if [ -z "$REMOTE_URL" ]; then
  echo "usage: $0 <remote-url> [branch]" >&2
  exit 64
fi

cd "$(dirname "$0")/.."

if ! command -v git >/dev/null 2>&1; then
  echo "git is not installed or not on PATH." >&2
  exit 1
fi

if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  echo "This folder has no commits yet. Nothing to publish." >&2
  exit 1
fi

COMMITS=$(git rev-list --count HEAD)
echo
echo "Repository has ${COMMITS} commits ready to publish."

CURRENT=$(git rev-parse --abbrev-ref HEAD)
[ "$CURRENT" = "$BRANCH" ] || git branch -M "$BRANCH"

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
  echo "Remote 'origin' updated to ${REMOTE_URL}"
else
  git remote add origin "$REMOTE_URL"
  echo "Remote 'origin' set to ${REMOTE_URL}"
fi

echo
echo "Pushing all ${COMMITS} commits in one go..."
echo

if ! git push -u origin "$BRANCH"; then
  echo
  echo "The push was rejected."
  echo "The usual cause is that the GitHub repository is not empty."
  echo "Either delete and recreate it empty, or run:"
  echo "  git push --force -u origin ${BRANCH}"
  exit 1
fi

git push origin --tags >/dev/null 2>&1 || true

WEB_URL="${REMOTE_URL%.git}"
echo
echo "Published."
echo
echo "Next, turn on GitHub Pages so you can install the app on your iPhone:"
echo "  1. Open  ${WEB_URL}/settings/pages"
echo "  2. Source: \"Deploy from a branch\""
echo "  3. Branch: ${BRANCH}, folder: / (root), then Save"
echo "  4. Wait about a minute, then open the URL Pages gives you IN SAFARI"
echo "  5. Share button -> Add to Home Screen"
echo
