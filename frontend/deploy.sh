#!/bin/bash

# Build the Angular app with the correct base href
echo "Building Angular app for GitHub Pages..."
npm run build:prod

# Navigate to the dist folder
cd dist/frontend/browser

# Create .nojekyll to prevent Jekyll processing
touch .nojekyll

# Initialize git repo if not already done
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push -f https://github.com/EsparzaEmiliano1/SportZone.git master:gh-pages

echo "✅ Deployment to GitHub Pages complete!"
echo "Visit: https://esparzaemiliano1.github.io/SportZone/"
