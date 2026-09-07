// ============================================================================
// CONFIGURACIÓN DEL SITIO — Cread 3D
// Único lugar donde vive el contacto y los textos de marca.
// Ver README.md → "Qué completar" para la lista de pendientes del dueño.
// ============================================================================

export const CONFIG = {
  brandName: "Cread 3D",
  tagline: "Material didáctico impreso en 3D para el sistema educativo",

  // Número de WhatsApp en formato internacional, SOLO dígitos (sin +, sin espacios).
  whatsappNumber: "541139513718",

  instagramHandle: "@cread_3d",
  instagramUrl: "https://instagram.com/cread_3d",

  // Email de contacto. Dejar en null para ocultarlo del footer.
  email: "thia4085@gmail.com",

  // PLACEHOLDER: zona de cobertura / envíos. Se muestra en "Compra institucional" y el footer.
  coverage: "Envíos a todo el país. Zona de CABA y GBA con entrega coordinada.",

  // Se muestra junto al catálogo. Actualizar cada vez que se revisen precios.
  pricesUpdatedAt: "septiembre 2026",

  // PLACEHOLDER — dirección real para el JSON-LD LocalBusiness (SEO). Puede dejarse vacío.
  address: {
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "AR",
  },
};

/** Arma un link de WhatsApp con mensaje pre-cargado y URL-encodeado. */
export function whatsappLink(message) {
  const digits = CONFIG.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  producto: (nombre) => `Hola ${CONFIG.brandName} 👋 Me interesa: ${nombre}. ¿Precio y disponibilidad?`,
  kit: (nombre) => `Hola ${CONFIG.brandName} 👋 Me interesa el ${nombre}. ¿Precio y disponibilidad?`,
  institucional: () => `Hola ${CONFIG.brandName} 👋 Soy de [institución] y quiero un presupuesto por volumen.`,
  inclusiva: () => `Hola ${CONFIG.brandName} 👋 Quiero consultar por la línea de educación inclusiva y adaptaciones a medida.`,
  general: () => `Hola ${CONFIG.brandName} 👋 Quiero hacer una consulta.`,
};
