import { CONFIG, whatsappLink, WHATSAPP_MESSAGES } from "./config.js";
import { PRODUCTS, KITS, NIVELES, AREAS, getProductById } from "./products.js";
import { getIcon } from "./icons.js";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

function formatPrice(product) {
  if (product.precio == null) return "A cotizar";
  const formatted = priceFormatter.format(product.precio);
  return product.precioDesde ? `Desde ${formatted}` : formatted;
}

function labelFor(list, id) {
  return list.find((item) => item.id === id)?.label ?? id;
}

function productCard(product, { isKit = false } = {}) {
  const icon = getIcon(product.icono, { decorative: false, label: product.nombre }) ?? "";
  const nivelesTxt = product.niveles.map((n) => labelFor(NIVELES, n)).join(" · ");
  const areasTxt = product.areas.map((a) => labelFor(AREAS, a)).join(" · ");
  const msg = isKit ? WHATSAPP_MESSAGES.kit(product.nombre) : WHATSAPP_MESSAGES.producto(product.nombre);
  const waHref = whatsappLink(msg);

  const includeList = isKit
    ? `<ul class="card__includes">${product.incluye
        .map((id) => `<li>${getProductById(id)?.nombre ?? id}</li>`)
        .join("")}</ul>`
    : "";

  return `
    <article class="card" data-niveles="${product.niveles.join(",")}" data-areas="${product.areas.join(",")}">
      ${product.destacado ? `<span class="card__ribbon">Destacado</span>` : ""}
      <div class="card__media" style="--card-accent: var(--area-${product.areas[0]}, var(--color-primary))">
        ${icon}
      </div>
      <div class="card__body">
        ${isKit ? `<span class="card__badge">Kit</span>` : ""}
        <h3 class="card__title">${product.nombre}</h3>
        <p class="card__desc">${product.descripcionCorta}</p>
        ${includeList}
        <p class="card__meta"><strong>Nivel:</strong> ${nivelesTxt}</p>
        <p class="card__meta"><strong>Área:</strong> ${areasTxt}</p>
        <p class="card__price">${formatPrice(product)}</p>
      </div>
      <div class="card__actions">
        <a class="btn btn--whatsapp" href="${waHref}" target="_blank" rel="noopener noreferrer">
          ${getIcon("whatsapp", { size: 20 })}
          <span>Pedir por WhatsApp</span>
        </a>
        <a class="btn btn--ghost" href="${CONFIG.instagramUrl}" target="_blank" rel="noopener noreferrer">
          ${getIcon("instagram", { size: 18 })}
          <span>Consultar por Instagram</span>
        </a>
      </div>
    </article>
  `;
}

function renderFilters() {
  const nivelWrap = document.getElementById("filtro-niveles");
  const areaWrap = document.getElementById("filtro-areas");

  nivelWrap.innerHTML = NIVELES.map(
    (n) => `
      <label class="chip">
        <input type="checkbox" name="nivel" value="${n.id}" />
        <span>${n.label}</span>
      </label>`
  ).join("");

  areaWrap.innerHTML = AREAS.map(
    (a) => `
      <label class="chip">
        <input type="checkbox" name="area" value="${a.id}" />
        <span>${a.label}</span>
      </label>`
  ).join("");
}

function renderCatalog() {
  const grid = document.getElementById("catalogo-grid");
  grid.innerHTML = PRODUCTS.map((p) => productCard(p)).join("");
}

function renderKits() {
  const grid = document.getElementById("kits-grid");
  grid.innerHTML = KITS.map((k) => productCard(k, { isKit: true })).join("");
}

function getChecked(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((el) => el.value);
}

function applyFilters() {
  const niveles = getChecked("nivel");
  const areas = getChecked("area");
  const cards = document.querySelectorAll("#catalogo-grid .card");
  let visible = 0;

  cards.forEach((card) => {
    const cardNiveles = card.dataset.niveles.split(",");
    const cardAreas = card.dataset.areas.split(",");
    const nivelOk = niveles.length === 0 || niveles.some((n) => cardNiveles.includes(n));
    const areaOk = areas.length === 0 || areas.some((a) => cardAreas.includes(a));
    const show = nivelOk && areaOk;
    card.hidden = !show;
    if (show) visible += 1;
  });

  document.getElementById("catalogo-empty").hidden = visible !== 0;
  document.getElementById("catalogo-count").textContent =
    visible === 1 ? "1 producto" : `${visible} productos`;
}

function wireFilters() {
  document.getElementById("filtros").addEventListener("change", applyFilters);
  document.getElementById("filtros-reset").addEventListener("click", () => {
    document.querySelectorAll('#filtros input[type="checkbox"]').forEach((el) => (el.checked = false));
    applyFilters();
  });
}

function wireMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function wireThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const stored = (() => {
    try {
      return localStorage.getItem("cread3d-theme");
    } catch {
      return null;
    }
  })();
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
    toggle.setAttribute("aria-pressed", String(stored === "dark"));
  }

  toggle.addEventListener("click", () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    toggle.setAttribute("aria-pressed", String(next === "dark"));
    try {
      localStorage.setItem("cread3d-theme", next);
    } catch {
      /* localStorage puede no estar disponible (modo privado); no es crítico */
    }
  });
}

function wireHeaderShadow() {
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 4);
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function wireStaticCtas() {
  document.querySelectorAll("[data-wa-institucional]").forEach((el) => {
    el.href = whatsappLink(WHATSAPP_MESSAGES.institucional());
  });
  document.querySelectorAll("[data-wa-inclusiva]").forEach((el) => {
    el.href = whatsappLink(WHATSAPP_MESSAGES.inclusiva());
  });
  document.querySelectorAll("[data-wa-general]").forEach((el) => {
    el.href = whatsappLink(WHATSAPP_MESSAGES.general());
  });
  document.querySelectorAll("[data-ig-link]").forEach((el) => {
    el.href = CONFIG.instagramUrl;
  });
  document.querySelectorAll("[data-ig-handle]").forEach((el) => {
    el.textContent = CONFIG.instagramHandle;
  });
  document.querySelectorAll("[data-prices-updated]").forEach((el) => {
    el.textContent = CONFIG.pricesUpdatedAt;
  });
  document.querySelectorAll("[data-coverage]").forEach((el) => {
    el.textContent = CONFIG.coverage;
  });
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const emailRow = document.getElementById("footer-email-row");
  if (emailRow) {
    if (CONFIG.email) {
      emailRow.querySelector("[data-email]").textContent = CONFIG.email;
      emailRow.querySelector("[data-email]").href = `mailto:${CONFIG.email}`;
    } else {
      emailRow.hidden = true;
    }
  }
}

function init() {
  renderFilters();
  renderCatalog();
  renderKits();
  wireFilters();
  wireMobileNav();
  wireThemeToggle();
  wireHeaderShadow();
  wireStaticCtas();
  applyFilters();
}

document.addEventListener("DOMContentLoaded", init);
