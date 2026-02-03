import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // ⚠️ IMPORTANT : Remplacez 'votre-nom-de-repo' par le nom exact de votre repository GitHub
    // Exemple : base: '/portfolio/',
    base: '/portfolio/',
})
