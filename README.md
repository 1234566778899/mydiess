# MyDiess — sitio web

Sitio público de **MyDiess**, la app para parejas (iOS): landing page,
soporte y las páginas legales que App Store exige para publicar la app.

Hecho con [Astro](https://astro.build) (HTML estático, sin JavaScript de
framework) y un sistema de diseño inspirado en apple.com: tipografía SF,
grises neutros, botones tipo píldora y secciones alternadas claras/oscuras.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Landing: funciones, diario y mapa, Lovebox, garabato en vivo, widgets, privacidad y cómo empezar |
| `/soporte` | Centro de ayuda con buscador y preguntas frecuentes |
| `/privacidad` | Política de privacidad (URL obligatoria para App Store) |
| `/terminos` | Términos de uso |
| `/eliminar-cuenta` | Cómo eliminar la cuenta (obligatorio para App Store) |
| `/404` | Página de error |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Despliegue en Vercel

El repo ya trae `vercel.json` (framework Astro, `cleanUrls`, cabeceras de
seguridad y caché de imágenes), así que no hay que configurar nada a mano:

1. En [vercel.com](https://vercel.com) → **Add New… → Project**.
2. Importa el repositorio `1234566778899/mydiess`.
3. Deja **Root Directory** en `./` y las opciones que detecta solas
   (Framework: Astro · Build: `astro build` · Output: `dist`).
4. **Deploy**.
5. Al conectar el dominio definitivo, actualiza `site` en
   `astro.config.mjs` y `url` en `src/config/site.ts`.

Cada push a `main` publica una versión nueva.

## ⚠️ Antes de publicar: datos pendientes

Los valores reales no se inventaron. Edita **`src/config/site.ts`** y
reemplaza todo lo marcado con `PENDIENTE`:

- `url` — dominio definitivo del sitio.
- `appStoreUrl` — enlace de la app (existe al publicarla en App Store).
- `supportEmail` y `privacyEmail` — correos reales que alguien revise.
- `legalName` — nombre legal de la persona o empresa responsable.
- `jurisdiction` — país cuyas leyes rigen los términos.
- `legalUpdatedAt` — fecha de la última revisión de los documentos legales.

También en `src/layouts/BaseLayout.astro` hay un comentario para activar el
banner de App Store (`apple-itunes-app`) cuando exista el ID de la app.

> Los textos legales describen cómo funciona la app hoy (qué datos se
> guardan, qué proveedores se usan, qué permisos se piden), pero **no son
> asesoría legal**. Conviene que los revise un abogado antes de publicar.

## Recursos

Las capturas de `public/screens/` se generan desde la app real con
`scripts/capture-onboarding-screenshots.sh` y el modo demo del proyecto iOS
(ver `CLAUDE.md` del repo de la app). Si cambia el diseño de una pantalla,
vuelve a generarlas y reemplázalas aquí.
