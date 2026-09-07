// ============================================================================
// ILUSTRACIONES — Cread 3D
// Iconos de línea propios en SVG inline (sin fotos de stock: no tenemos fotos
// reales de producto todavía). Estilo consistente: trazo 1.75, esquinas
// redondeadas, viewBox 0 0 48 48. Reemplazar por fotos reales cuando existan
// (ver README.md).
// ============================================================================

const STROKE = 'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';

const ICONS = {
  "numeros-letras": `
    <rect x="6" y="10" width="14" height="14" rx="3" ${STROKE}/>
    <text x="13" y="21" text-anchor="middle" font-size="12" font-family="inherit" fill="currentColor" stroke="none">1</text>
    <rect x="24" y="10" width="14" height="14" rx="3" ${STROKE}/>
    <text x="31" y="21" text-anchor="middle" font-size="12" font-family="inherit" fill="currentColor" stroke="none">B</text>
    <rect x="15" y="26" width="14" height="14" rx="3" ${STROKE}/>
    <text x="22" y="37" text-anchor="middle" font-size="12" font-family="inherit" fill="currentColor" stroke="none">2</text>
  `,
  regletas: `
    <rect x="7" y="30" width="6" height="9" rx="1.5" ${STROKE}/>
    <rect x="15" y="24" width="6" height="15" rx="1.5" ${STROKE}/>
    <rect x="23" y="17" width="6" height="22" rx="1.5" ${STROKE}/>
    <rect x="31" y="10" width="6" height="29" rx="1.5" ${STROKE}/>
  `,
  geometria: `
    <circle cx="15" cy="16" r="7" ${STROKE}/>
    <rect x="24" y="24" width="14" height="14" rx="2" ${STROKE}/>
    <path d="M8 39 L16 25 L24 39 Z" ${STROKE}/>
  `,
  secuenciador: `
    <rect x="6" y="14" width="10" height="20" rx="2" ${STROKE}/>
    <rect x="19" y="14" width="10" height="20" rx="2" ${STROKE}/>
    <rect x="32" y="14" width="10" height="20" rx="2" ${STROKE}/>
    <path d="M16 24 L19 24 M29 24 L32 24" ${STROKE}/>
    <path d="M17 21 L20 24 L17 27 M30 21 L33 24 L30 27" ${STROKE}/>
  `,
  encastres: `
    <rect x="6" y="18" width="14" height="14" rx="2" ${STROKE}/>
    <path d="M20 22 a3 3 0 0 1 0 6" ${STROKE}/>
    <rect x="26" y="10" width="14" height="14" rx="2" ${STROKE}/>
    <path d="M26 14 a3 3 0 0 0 -6 0" ${STROKE}/>
    <rect x="26" y="26" width="14" height="14" rx="2" ${STROKE}/>
  `,
  domino: `
    <rect x="6" y="12" width="16" height="24" rx="3" ${STROKE}/>
    <circle cx="10.5" cy="18" r="1.6" fill="currentColor" stroke="none"/>
    <circle cx="17.5" cy="18" r="1.6" fill="currentColor" stroke="none"/>
    <circle cx="10.5" cy="30" r="1.6" fill="currentColor" stroke="none"/>
    <circle cx="17.5" cy="30" r="1.6" fill="currentColor" stroke="none"/>
    <rect x="26" y="12" width="16" height="24" rx="3" ${STROKE}/>
    <circle cx="34" cy="20" r="1.6" fill="currentColor" stroke="none"/>
    <circle cx="30" cy="28" r="1.6" fill="currentColor" stroke="none"/>
    <circle cx="38" cy="28" r="1.6" fill="currentColor" stroke="none"/>
  `,
  braille: `
    <rect x="10" y="8" width="28" height="32" rx="4" ${STROKE}/>
    <circle cx="18" cy="17" r="2.1" fill="currentColor" stroke="none"/>
    <circle cx="30" cy="17" r="2.1" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="24" r="2.1" fill="currentColor" stroke="none"/>
    <circle cx="30" cy="24" r="2.1" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="31" r="2.1" fill="currentColor" stroke="none"/>
    <circle cx="30" cy="31" r="2.1" fill="currentColor" stroke="none"/>
  `,
  "mapa-haptico": `
    <rect x="6" y="10" width="36" height="26" rx="3" ${STROKE}/>
    <path d="M12 30 L18 20 L24 26 L30 16 L37 22" ${STROKE}/>
    <circle cx="12" cy="30" r="1.8" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="20" r="1.8" fill="currentColor" stroke="none"/>
    <circle cx="24" cy="26" r="1.8" fill="currentColor" stroke="none"/>
    <circle cx="30" cy="16" r="1.8" fill="currentColor" stroke="none"/>
    <circle cx="37" cy="22" r="1.8" fill="currentColor" stroke="none"/>
  `,
  "kit-matematica": `
    <rect x="6" y="24" width="12" height="14" rx="2" ${STROKE}/>
    <circle cx="30" cy="15" r="7" ${STROKE}/>
    <path d="M22 38 L28 26 L34 38 Z" ${STROKE}/>
  `,
  "kit-inclusiva": `
    <path d="M10 30 c0 -10 6 -18 14 -18 s14 8 14 18" ${STROKE}/>
    <circle cx="16" cy="22" r="1.8" fill="currentColor" stroke="none"/>
    <circle cx="24" cy="18" r="1.8" fill="currentColor" stroke="none"/>
    <circle cx="32" cy="22" r="1.8" fill="currentColor" stroke="none"/>
    <path d="M8 38 h32" ${STROKE}/>
  `,
  whatsapp: `
    <path d="M24 6C14.6 6 7 13.6 7 23c0 3.2.9 6.2 2.4 8.8L7 42l10.5-2.7c2.5 1.4 5.4 2.1 8.5 2.1 9.4 0 17-7.6 17-17S33.4 6 24 6Z" ${STROKE}/>
    <path d="M17.4 18.9c.4-1 1-1.9 1.5-2 .5-.1 1.2-.1 1.6.9.5 1.1 1.6 3.7 1.7 4 .1.3.2.6 0 1-.2.4-.3.6-.6 1-.3.3-.6.7-.9 1-.3.3-.6.6-.3 1.2.4.6 1.6 2.6 3.4 4.2 2.3 2.1 4.3 2.7 4.9 3 .6.3 1 .2 1.3-.1.4-.4 1.5-1.7 1.9-2.3.4-.6.8-.5 1.3-.3.5.2 3.3 1.6 3.9 1.9.6.3 1 .4 1.1.7.1.3.1 1.6-.4 3.1-.5 1.5-2.8 2.9-3.9 3-1.1.1-2.1.5-7.1-1.5-6-2.4-9.8-8.4-10.1-8.8-.3-.4-2.5-3.3-2.5-6.3 0-3 1.6-4.4 2.1-5Z" fill="currentColor" stroke="none"/>
  `,
  instagram: `
    <rect x="7" y="7" width="34" height="34" rx="10" ${STROKE}/>
    <circle cx="24" cy="24" r="9" ${STROKE}/>
    <circle cx="33.5" cy="14.5" r="2" fill="currentColor" stroke="none"/>
  `,
  check: `<path d="M8 24 L19 35 L40 12" ${STROKE}/>`,
  mail: `
    <rect x="6" y="12" width="36" height="24" rx="3" ${STROKE}/>
    <path d="M8 15 L24 28 L40 15" ${STROKE}/>
  `,
  pin: `
    <path d="M24 4c-7.7 0-14 6.2-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.8-6.3-14-14-14Z" ${STROKE}/>
    <circle cx="24" cy="18" r="5" ${STROKE}/>
  `,
  clock: `
    <circle cx="24" cy="24" r="17" ${STROKE}/>
    <path d="M24 14v10l7 5" ${STROKE}/>
  `,
  truck: `
    <rect x="4" y="16" width="24" height="16" rx="2" ${STROKE}/>
    <path d="M28 21h8l6 6v5h-14z" ${STROKE}/>
    <circle cx="13" cy="35" r="3.3" ${STROKE}/>
    <circle cx="34" cy="35" r="3.3" ${STROKE}/>
  `,
  invoice: `
    <path d="M12 6h18l6 6v30H12Z" ${STROKE}/>
    <path d="M30 6v6h6" ${STROKE}/>
    <path d="M17 22h14M17 28h14M17 34h9" ${STROKE}/>
  `,
  handshake: `
    <path d="M6 24l7-6 6 3 6-4 7 6" ${STROKE}/>
    <path d="M12 21l9 9 4-3-8-8" ${STROKE}/>
    <path d="M31 21l-9 9-4-3" ${STROKE}/>
  `,
  ruler: `
    <rect x="5" y="19" width="38" height="10" rx="2" transform="rotate(-8 24 24)" ${STROKE}/>
  `,
};

/** Devuelve el <svg> completo (inline) para una key de ícono, o null si no existe. */
export function getIcon(key, { size = 48, decorative = true, label = "" } = {}) {
  const body = ICONS[key];
  if (!body) return null;
  const a11y = decorative
    ? 'aria-hidden="true" focusable="false"'
    : `role="img" aria-label="${label.replace(/"/g, "&quot;")}"`;
  return `<svg viewBox="0 0 48 48" width="${size}" height="${size}" ${a11y}>${body}</svg>`;
}
