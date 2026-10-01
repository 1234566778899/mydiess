/**
 * Datos del sitio en un solo lugar.
 *
 * ⚠️ Los valores marcados con PENDIENTE son datos reales que solo el dueño
 * de la app puede definir (no se inventaron). Reemplázalos antes de
 * publicar el sitio y de enviar la app a revisión de Apple.
 */
export const site = {
  name: 'MyDiess',
  tagline: 'Su historia de amor, en un solo lugar.',
  /** Título de la portada para buscadores (con las palabras que se buscan). */
  seoTitle: 'App para parejas: recuerdos, notas de amor y aniversarios',
  description:
    'MyDiess es la app para parejas donde guardan sus recuerdos, días especiales, notas de amor y estados de ánimo, y dibujan juntos en tiempo real.',
  url: 'https://diess.site',
  /** Enlace público de la app en App Store. */
  appStoreUrl: 'https://apps.apple.com/us/app/mydiess/id6811741530',
  appStoreId: '6811741530',
  instagramUrl: 'https://www.instagram.com/mydiess.app/',
  /** PENDIENTE: correo real que se revise para soporte. */
  supportEmail: 'soporte@mydiess.app',
  /** PENDIENTE: correo para temas de privacidad (puede ser el mismo). */
  privacyEmail: 'privacidad@mydiess.app',
  /** PENDIENTE: nombre legal de la persona o empresa responsable de la app. */
  legalName: 'MyDiess',
  /** PENDIENTE: país cuyas leyes rigen los términos. */
  jurisdiction: 'México',
  /** Fecha de la última actualización de los documentos legales. */
  legalUpdatedAt: '13 de septiembre de 2026',
  minimumAge: 13,
  requirements: 'Requiere iPhone con iOS 17 o posterior.',
} as const;

export const nav = [
  { href: '/#funciones', label: 'Funciones' },
  { href: '/#diario', label: 'Diario' },
  { href: '/#lovebox', label: 'Lovebox' },
  { href: '/#garabato', label: 'Garabato en vivo' },
  { href: '/#widgets', label: 'Widgets' },
  { href: '/soporte', label: 'Soporte' },
];
