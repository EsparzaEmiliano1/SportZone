# 🚀 Guía de Despliegue - SportZone

## 1. Despliegue del Backend (Node.js) en Railway

### Pasos:
1. **Ir a Railway.app**
   ```
   https://railway.app
   ```

2. **Conectar repositorio GitHub**
   - Selecciona tu repositorio `SportZone`

3. **Crear servicio Backend**
   - New Project → GitHub Repo
   - Selecciona la rama `master`

4. **Configurar variables de entorno**
   - En Railway, agrega las variables:
   ```
   DB_HOST=roundhouse.proxy.rlwy.net
   DB_USER=root
   DB_PASSWORD=YXfniVVsaSnLpTheojAxkluWIIFMATFU
   DB_NAME=railway
   DB_PORT=31125
   ```

5. **Deploy automático**
   - Railway detectará `railway.json` y `package.json`
   - Ejecutará automáticamente: `npm start`

### Verificar Backend
```bash
curl https://tu-backend-en-railway.railway.app/api/health
```

---

## 2. Despliegue del Frontend (Angular) en GitHub Pages

### Opción A: Usando el script deploy.sh (Linux/Mac)
```bash
cd frontend
bash deploy.sh
```

### Opción B: Manual (Windows)
```bash
cd frontend
npm run build:prod
cd dist/frontend/browser
# Crear .nojekyll
echo "" > .nojekyll
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/EsparzaEmiliano1/SportZone.git master:gh-pages
```

### Opción C: Usar GitHub Actions
Crear `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: cd frontend && npm install
      
      - name: Build
        run: cd frontend && npm run build:prod
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/dist/frontend/browser
          publish_branch: gh-pages

      - name: Configure Pages source to gh-pages
        uses: actions/github-script@v7
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          script: |
            const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
            await github.rest.request('PUT /repos/{owner}/{repo}/pages', {
              owner,
              repo,
              source: { branch: 'gh-pages', path: '/' }
            });
```

---

## 3. URLs de Producción

| Servicio | URL |
|----------|-----|
| Frontend | https://esparzaemiliano1.github.io/SportZone/ |
| Backend API | https://tu-railway-app.railway.app |
| Health Check | https://tu-railway-app.railway.app/api/health |

---

## 4. Actualizar URLs en Frontend

En `src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://tu-backend-en-railway.railway.app/api'
};
```

---

## 5. Variables de entorno del Backend

El backend lee de `.env`:
```
DB_HOST=roundhouse.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=YXfniVVsaSnLpTheojAxkluWIIFMATFU
DB_NAME=railway
DB_PORT=31125
PORT=3000
```

Railway automáticamente detecta `PORT=3000` si se especifica.

---

## ✅ Checklist de Despliegue

- [ ] Backend deployado en Railway y conectado a BD
- [ ] Frontend en GitHub Pages funcionando
- [ ] Variables de entorno configuradas en Railway
- [ ] CORS habilitado en el backend
- [ ] Base href correcto en Angular (`/SportZone/`)
- [ ] Health check respondiendo
- [ ] API endpoints accesibles desde el frontend
