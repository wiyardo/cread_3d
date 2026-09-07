# Cread 3D — sitio catálogo

Landing + catálogo de una sola página para **Cread 3D**, impresión 3D educativa
(Argentina). Sitio estático (HTML + CSS + JS vanilla, sin build step, sin
backend). La venta se cierra por WhatsApp/Instagram: no hay carrito ni pago
online.

## Estructura del proyecto

```
index.html          página única, todas las secciones por ancla (#catalogo, #kits, ...)
css/styles.css       design tokens + estilos (mobile-first, claro/oscuro automático)
js/config.js         ÚNICO lugar con WhatsApp, Instagram, email y textos de marca
js/products.js       ÚNICO lugar con el catálogo (productos y kits)
js/icons.js          ilustraciones propias en SVG inline (no hay fotos de stock)
js/main.js           render del catálogo, filtros combinables, wiring de WhatsApp
favicon.svg          ícono de marca (vector)
site.webmanifest     metadata PWA mínima
assets/og-image.png       imagen para que el link se vea bien en WhatsApp/Instagram
assets/apple-touch-icon.png  ícono para iOS "agregar a inicio"
```

## Editar precios y productos

Todo el catálogo vive en **`js/products.js`**. Cada producto es un objeto:

```js
{
  id: "numeros-letras-3d",       // slug único
  tipo: "producto",               // "producto" | "kit"
  nombre: "Números y letras manipulables",
  descripcionCorta: "...",        // para qué sirve, 1-2 líneas
  niveles: ["sala-4", "sala-5"],  // ver lista NIVELES en el mismo archivo
  areas: ["matematica"],          // ver lista AREAS en el mismo archivo
  precio: 9800,                   // número en ARS, o null = "A cotizar"
  precioDesde: true,               // antepone "Desde" al precio
  icono: "numeros-letras",        // key definida en js/icons.js
  destacado: false,                // muestra cinta "Destacado"
}
```

Los kits llevan además `incluye: ["id-producto-1", "id-producto-2"]`.

Los **8 productos y 2 kits de ejemplo son PLACEHOLDER** (nombres y niveles
realistas para el rubro, pero precios de muestra). Reemplazalos por el
catálogo real de Cread 3D. No hace falta tocar HTML ni CSS: la grilla, los
filtros y los kits se arman solos a partir de este archivo.

Actualizá también `pricesUpdatedAt` en `js/config.js` cada vez que revises
precios (se muestra junto al catálogo, porque en Argentina cambian seguido).

Si agregás un producto con una imagen/ícono que no existe todavía, sumalo a
`ICONS` en `js/icons.js` (mismo estilo: SVG 48×48, `stroke="currentColor"`) o
reemplazá el ícono por una foto real editando `productCard()` en `js/main.js`.

## Cambiar el número de WhatsApp, Instagram o email

Todo el contacto vive en **`js/config.js`**:

```js
whatsappNumber: "541139513718",   // solo dígitos, con código de país
instagramUrl: "https://instagram.com/cread_3d",
email: null,                       // poné tu email para que aparezca en el footer
```

Los mensajes pre-cargados de cada botón de WhatsApp (por producto, kit,
institucional, inclusiva, general) están en `WHATSAPP_MESSAGES` en el mismo
archivo.

## Qué completar (dueño del negocio)

- [x] Número de WhatsApp confirmado en `js/config.js`
- [x] Email de contacto confirmado en `js/config.js`
- [ ] Catálogo real en `js/products.js`: nombres, descripciones, niveles,
      áreas, precios — y fotos reales de producto si se quiere reemplazar los
      íconos ilustrados por fotos (ver sección siguiente)
- [ ] Kits reales y su precio en `js/products.js`
- [ ] Testimonios e instituciones reales en la sección `#testimonios` de
      `index.html` (hoy son placeholders rotulados como ejemplo — o borrar el
      contenido de `#testimonios-content` hasta tener datos reales)
- [ ] Zona de cobertura / envíos en `js/config.js` (`coverage`)
- [ ] Colores de marca/logo si existen (hoy: terracota `#a8431f` + petróleo
      `#1c4f4f`, definidos como variables CSS en `css/styles.css` — cambiar
      ahí si hay una identidad de marca ya definida)
- [ ] Dirección real (o quitar el bloque) en el JSON-LD al final del `<head>`
      de `index.html`, y el dominio real en las etiquetas `og:url` / `canonical`
- [ ] Reemplazar `assets/og-image.png` y `favicon.svg` si se define un logo
      definitivo (hay instrucciones de cómo se generaron más abajo)

## Fotos reales de producto (opcional)

Hoy cada producto usa un ícono ilustrado en vez de una foto, porque no había
fotos reales al armar el sitio. Para pasar a fotos:

1. Poner las fotos en `assets/productos/` (formato `.webp` recomendado, peso
   bajo).
2. En `js/products.js`, agregar un campo `imagen: "assets/productos/xxx.webp"`
   a cada producto.
3. En `js/main.js`, en `productCard()`, cambiar el bloque `card__media` para
   usar `<img src="${product.imagen}" alt="${product.nombre}" loading="lazy" width="..." height="...">`
   en vez de `getIcon(...)` cuando `product.imagen` exista.

## Deploy

Es un sitio 100% estático: no requiere build ni variables de entorno.

**Vercel**
```
npx vercel --prod
```
o conectar el repo desde vercel.com → "Add New Project" → Framework Preset:
**Other** (sin build command, output = raíz del repo).

**Netlify**
Conectar el repo desde app.netlify.com → build command: (vacío) → publish
directory: `.` (raíz).

**GitHub Pages**
Settings → Pages → Deploy from a branch → rama `main`, carpeta `/ (root)`.

En cualquiera de los tres, una vez que tengas el dominio final, actualizá
`canonical` y `og:url` en `index.html` con esa URL real.

## Accesibilidad y rendimiento

- HTML semántico, foco visible en todo el sitio, contraste AA verificado en
  modo claro y oscuro, navegable 100% por teclado.
- Respeta `prefers-reduced-motion` (desactiva transiciones/animación si el
  sistema lo pide) y `prefers-color-scheme` (claro/oscuro automático, con un
  botón para forzarlo manualmente).
- Sin fuentes/librerías pesadas: solo Google Fonts (Fraunces + Inter) y CSS/JS
  propio. Sin analytics ni cookies de terceros.
- Corré Lighthouse (Chrome DevTools → Lighthouse, modo Mobile) después de
  cualquier cambio grande de contenido o imágenes.

## Fase 2 (documentado, no implementado)

Fuera del alcance de este sitio, pensado para más adelante:

- Tienda con checkout y pago online (Mercado Pago / similar).
- Blog de recursos descargables para docentes.
- Buscador de texto libre sobre el catálogo.
- Versión multi-idioma.

La arquitectura actual (catálogo en un JSON/JS separado del render) está
pensada para no tener que reescribir nada si en el futuro se agrega backend:
`js/products.js` podría pasar a ser la respuesta de una API sin tocar
`index.html` ni el CSS.
