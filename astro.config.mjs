// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Debe coincidir con `url` en src/config/site.ts.
  site: 'https://mydiess.vercel.app',
  // Sin esto, Astro elimina los saltos de línea entre texto y etiquetas en
  // línea y se pegan palabras ("lugar.<strong>Los días…").
  compressHTML: false,
  // URLs sin barra final ni .html (`/soporte`), que es lo que sirve Vercel
  // con `cleanUrls`. Así la URL canónica coincide con la que se visita.
  trailingSlash: 'never',
  build: { format: 'file' },
});
