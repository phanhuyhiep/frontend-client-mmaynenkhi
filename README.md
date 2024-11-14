# frontend client máy nén khí

1. **Create base project by react + vite**

```bash
npm create vite@latest my-react-app -- --template react
```

2. **Install dependencies**

```bash
npm install
```

3. **Run project**

```bash
npm run dev
```

4. **Build project**

```bash
npm run build
```
```bash
npx serve -s dist
```

5. **Deploy github pages**
```bash
npm install gh-pages --save-dev
```

```bash
"homepage": "https://phanhuyhiep.github.io/frontend-client-mmaynenkhi",
// NPM
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
}
// YARN
"scripts": {
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build",
}
```

```bash
#NPM
npm run deploy
# YARN
yarn run deploy
```

```bash
// chỉ chạy trên môi trường production
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/frontend-client-mmaynenkhi/' : '/',
  }
})
```

