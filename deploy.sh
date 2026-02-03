#!/usr/bin/env sh

# Arrêter en cas d'erreur
set -e

# Build du projet
echo "🔨 Building project..."
npm run build

# Naviguer dans le dossier de build
cd dist

# Initialiser un repo git dans dist
echo "📦 Initializing git in dist folder..."
git init
git add -A
git commit -m 'deploy'

# Déployer sur GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
# ⚠️ IMPORTANT : Remplacez <USERNAME> et <REPO> par vos informations
# Exemple : git push -f git@github.com:joel-ndjanga/portfolio.git main:gh-pages
git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -

echo "✅ Deployment complete!"
echo "Your site will be available at: https://<USERNAME>.github.io/<REPO>/"
