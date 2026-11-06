import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { contentApiPlugin } from './vite-plugins/content-api.mjs';

// O Sharp falha de forma intermitente ao subir o servidor de dev, e as imagens
// quebram. A otimização fica só no build, que continua usando o Sharp.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), contentApiPlugin()],
  },
  ...(isDev && { image: { service: passthroughImageService() } }),

  site: 'https://analuvidi.github.io',
  integrations: [sitemap(), react()]
});