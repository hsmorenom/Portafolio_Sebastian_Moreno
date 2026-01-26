import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [tailwindcss()],
    base: '/Portafolio_Sebastian_Moreno/',
    build: {
        outDir: 'docs'
    }
})
