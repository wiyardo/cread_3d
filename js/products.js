// ============================================================================
// CATÁLOGO — Cread 3D
// PLACEHOLDER: los 8 productos y 2 kits de este archivo son de ejemplo
// (nombres, descripciones, niveles, áreas e imágenes son realistas para el
// rubro pero los precios son de muestra). Reemplazar por el catálogo real.
// Ver README.md → "Qué completar".
//
// Campos por producto:
//   id            slug único (se usa en el mensaje de WhatsApp y en "incluye" de los kits)
//   tipo          "producto" | "kit"
//   nombre        string
//   descripcionCorta  para qué sirve, 1-2 líneas
//   niveles       lista de: sala-3 | sala-4 | sala-5 | primer-ciclo | segundo-ciclo
//   areas         lista de: matematica | lengua | ciencias | motricidad-sensorial | inclusiva | efemerides
//   precio        número en ARS, o null si es "a cotizar"
//   precioDesde   boolean → si es true se antepone "Desde" al precio
//   icono         key que usa js/icons.js para el ilustración del producto
//   destacado     boolean → muestra una cinta "Destacado"
//   incluye       (solo kits) lista de ids de productos que integran el kit
// ============================================================================

export const NIVELES = [
  { id: "sala-3", label: "Sala de 3" },
  { id: "sala-4", label: "Sala de 4" },
  { id: "sala-5", label: "Sala de 5" },
  { id: "primer-ciclo", label: "Primer ciclo" },
  { id: "segundo-ciclo", label: "Segundo ciclo" },
];

export const AREAS = [
  { id: "matematica", label: "Matemática" },
  { id: "lengua", label: "Lengua" },
  { id: "ciencias", label: "Ciencias" },
  { id: "motricidad-sensorial", label: "Motricidad y sensorial" },
  { id: "inclusiva", label: "Educación inclusiva" },
  { id: "efemerides", label: "Efemérides y estacionales" },
];

export const PRODUCTS = [
  {
    id: "numeros-letras-3d",
    tipo: "producto",
    nombre: "Números y letras manipulables",
    descripcionCorta: "Piezas para tocar, ordenar y armar las primeras palabras y cantidades.",
    niveles: ["sala-4", "sala-5", "primer-ciclo"],
    areas: ["matematica", "lengua"],
    precio: 9800,
    precioDesde: true,
    icono: "numeros-letras",
    destacado: false,
  },
  {
    id: "regletas-base-10",
    tipo: "producto",
    nombre: "Regletas y base 10",
    descripcionCorta: "Sistema completo para trabajar unidades, decenas y centenas de forma concreta.",
    niveles: ["sala-5", "primer-ciclo", "segundo-ciclo"],
    areas: ["matematica"],
    precio: 15400,
    precioDesde: true,
    icono: "regletas",
    destacado: true,
  },
  {
    id: "figuras-cuerpos-geometricos",
    tipo: "producto",
    nombre: "Figuras y cuerpos geométricos",
    descripcionCorta: "Set para explorar formas 2D y 3D con las manos, ideal para las primeras clasificaciones.",
    niveles: ["sala-3", "sala-4", "sala-5", "primer-ciclo"],
    areas: ["matematica"],
    precio: 11200,
    precioDesde: true,
    icono: "geometria",
    destacado: false,
  },
  {
    id: "secuenciador-rutinas",
    tipo: "producto",
    nombre: "Secuenciador de rutinas diarias",
    descripcionCorta: "Tarjetas y soportes para anticipar el día, pensado para las salas más chicas.",
    niveles: ["sala-3", "sala-4"],
    areas: ["motricidad-sensorial", "lengua"],
    precio: 8600,
    precioDesde: true,
    icono: "secuenciador",
    destacado: false,
  },
  {
    id: "encastres-motricidad-fina",
    tipo: "producto",
    nombre: "Encastres de motricidad fina",
    descripcionCorta: "Piezas de distintos tamaños para ejercitar pinza y coordinación.",
    niveles: ["sala-3", "sala-4"],
    areas: ["motricidad-sensorial"],
    precio: 7400,
    precioDesde: true,
    icono: "encastres",
    destacado: false,
  },
  {
    id: "domino-puntos",
    tipo: "producto",
    nombre: "Dominó de puntos y cantidades",
    descripcionCorta: "Juego para asociar números, puntos y cantidades jugando en grupo.",
    niveles: ["sala-4", "sala-5", "primer-ciclo"],
    areas: ["matematica"],
    precio: 6900,
    precioDesde: false,
    icono: "domino",
    destacado: false,
  },
  {
    id: "alfabeto-braille-relieve",
    tipo: "producto",
    nombre: "Alfabeto braille en relieve",
    descripcionCorta: "Abecedario en braille y tinta para trabajar lectoescritura inclusiva en el aula.",
    niveles: ["sala-5", "primer-ciclo", "segundo-ciclo"],
    areas: ["inclusiva", "lengua"],
    precio: 13500,
    precioDesde: true,
    icono: "braille",
    destacado: true,
  },
  {
    id: "mapa-haptico-escuela",
    tipo: "producto",
    nombre: "Mapa háptico del aula o la escuela",
    descripcionCorta: "Maqueta táctil a medida para que un alumno con discapacidad visual recorra el espacio antes de pisarlo.",
    niveles: ["primer-ciclo", "segundo-ciclo"],
    areas: ["inclusiva"],
    precio: null,
    precioDesde: false,
    icono: "mapa-haptico",
    destacado: true,
  },
];

export const KITS = [
  {
    id: "kit-iniciacion-matematica",
    tipo: "kit",
    nombre: "Kit Iniciación Matemática",
    descripcionCorta: "Números, figuras geométricas y dominó de cantidades en un solo pack para arrancar el año.",
    niveles: ["sala-4", "sala-5"],
    areas: ["matematica"],
    precio: 24500,
    precioDesde: true,
    icono: "kit-matematica",
    destacado: true,
    incluye: ["numeros-letras-3d", "figuras-cuerpos-geometricos", "domino-puntos"],
  },
  {
    id: "kit-aula-inclusiva",
    tipo: "kit",
    nombre: "Kit Aula Inclusiva",
    descripcionCorta: "Braille en relieve y mapa háptico pensados para acompañar a un alumno con discapacidad visual.",
    niveles: ["primer-ciclo", "segundo-ciclo"],
    areas: ["inclusiva"],
    precio: null,
    precioDesde: false,
    icono: "kit-inclusiva",
    destacado: true,
    incluye: ["alfabeto-braille-relieve", "mapa-haptico-escuela"],
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
