/**
 * The Church in the Americas — Main Application
 * ArcGIS Maps SDK for JavaScript 5.0
 *
 * CONFIGURATION: To use Esri's premium basemaps (e.g. Human Geography),
 * get a free API key at https://developers.arcgis.com/ and paste it below.
 * Without a key, the app uses Esri World Light Gray Canvas tiles (no key required).
 */
const ARCGIS_API_KEY = "";

import { eras, locations, routes, figures, timeline, eraIndex } from "./data.js";
import { GENERAL_SOURCES } from "./sources.js";
import { TRADITIONS, TRADITION_INDEX, THEMES, REGIONS, COUNTRY_ES } from "./taxonomy.js";
import { lang, setLang, t, eraText, locationText, localized } from "./i18n.js";

// ============================================================
// DOM references
// ============================================================
const langSelector = document.getElementById("langSelector");
const splash = document.getElementById("splash");
const loaderBar = document.querySelector(".splash-loader-bar");

// ============================================================
// Custom Modal Helpers
// ============================================================
// Escape text placed into HTML attributes/content
const esc = (str) => String(str).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderSources(list) {
  if (!list || !list.length) return "";
  const items = list.map((src) =>
    `<li><a href="${esc(src.u)}" target="_blank" rel="noopener">${esc(src.t)}</a>${src.k === "logos" ? ' <span class="src-tag">Logos</span>' : ""}</li>`
  ).join("");
  return `<details class="event-sources"><summary>${t("sourcesLabel")} (${list.length})</summary><ul>${items}</ul></details>`;
}

// Event photo with its Wikimedia Commons credit (author · license), linked to the file page.
function renderImage(img, alt) {
  if (!img) return "";
  const credit = [img.a, img.l].filter(Boolean).map(esc).join(" · ");
  return `<figure class="event-photo">
      <a href="${esc(img.p)}" target="_blank" rel="noopener"><img src="${esc(img.s)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.closest('figure').remove()"></a>
      <figcaption>${t("imageLabel")}: ${credit ? credit + " · " : ""}<a href="${esc(img.p)}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption>
    </figure>`;
}

function openModal(id) { document.getElementById(id).classList.remove("hidden"); }
function closeModal(id) { document.getElementById(id).classList.add("hidden"); }

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.add("hidden"); });
});

document.getElementById("closeInfo").addEventListener("click", () => closeModal("infoOverlay"));
document.getElementById("closeDonate").addEventListener("click", () => closeModal("donateOverlay"));

// ============================================================
// Donate & Info
// ============================================================
function fillDonateModal() {
  document.getElementById("donateModalTitle").textContent = t("donateTitle");
  document.getElementById("donateText").textContent = t("donateText");
  document.getElementById("donateBtnLabel").textContent = t("donateButton") + " via Venmo";
  document.getElementById("donatePaypalLabel").textContent = t("donateButton") + " via PayPal";
  document.getElementById("donateQrLabel").textContent =
    lang === "es" ? "O escanea este codigo QR (Venmo):" : "Or scan this QR code (Venmo):";
  document.getElementById("donateEmailLabel").textContent = t("donateEmailLabel");
}

function fillInfoModal() {
  document.getElementById("infoModalTitle").textContent = t("infoTitle");
  const content = document.getElementById("infoModalContent");
  const legendItems = eras.map((e) =>
    `<div class="legend-item"><span class="legend-line" style="background:${e.hexColor}"></span>${eraText(e.id, "name")} (${eraText(e.id, "dateRange")})</div>`
  ).join("");
  content.innerHTML = `
    <p>${t("infoIntro")}</p>
    <div class="info-legend">
      <h4>${t("infoLegendTitle")}</h4>
      ${legendItems}
    </div>
    <div class="info-features">
      <h4>${t("infoFeaturesTitle")}</h4>
      <ul>
        <li>${t("infoFeature1")}</li>
        <li>${t("infoFeature2")}</li>
        <li>${t("infoFeature3")}</li>
        <li>${t("infoFeature4")}</li>
        <li>${t("infoFeature5")}</li>
      </ul>
    </div>
    <div class="info-features">
      <h4>${t("infoSourcesTitle")}</h4>
      <p class="info-sources-note">${t("infoSourcesNote")}</p>
      <ul class="info-sources">${GENERAL_SOURCES.map((src) => `<li><a href="${esc(src.u)}" target="_blank" rel="noopener">${esc(src.t)}</a>${src.k === "logos" ? ' <span class="src-tag">Logos</span>' : ""}</li>`).join("")}</ul>
    </div>
    <div class="info-verse">${t("infoVerse")}</div>
  `;
}

document.getElementById("btnDonate").addEventListener("click", () => { fillDonateModal(); openModal("donateOverlay"); });
document.getElementById("btnInfo").addEventListener("click", () => { fillInfoModal(); openModal("infoOverlay"); });

// ============================================================
// Language Selector Flow
// ============================================================
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const chosenLang = btn.dataset.lang;
    setLang(chosenLang);
    langSelector.classList.add("hidden");
    splash.classList.remove("hidden");
    document.getElementById("splashTitle").textContent = t("appTitle");
    document.getElementById("splashSubtitle").textContent = t("appSubtitle");
    document.getElementById("splashVerse").textContent = t("splashVerse");
    document.getElementById("splashRef").textContent = "— " + t("splashVerseRef");
    initMap();
  });
});

// ============================================================
// Splash helpers
// ============================================================
let progress = 0;
let progressInterval;

function startProgress() {
  progressInterval = setInterval(() => {
    progress += Math.random() * 12;
    if (progress > 90) progress = 90;
    loaderBar.style.width = progress + "%";
  }, 250);
}

function dismissSplash() {
  clearInterval(progressInterval);
  loaderBar.style.width = "100%";
  setTimeout(() => splash.classList.add("hidden"), 500);
}

function showError(msg) {
  clearInterval(progressInterval);
  const el = document.createElement("p");
  el.style.cssText = "color:#A34B4B;font-size:13px;margin-top:1rem;";
  el.textContent = msg;
  document.querySelector(".splash-content").appendChild(el);
}

// ============================================================
// Main init
// ============================================================
let mapInitialized = false;

async function initMap() {
  if (mapInitialized) return;
  mapInitialized = true;
  startProgress();

  setTimeout(() => {
    if (!splash.classList.contains("hidden")) { dismissSplash(); }
  }, 15000);

  applyTranslations();

  // ArcGIS imports via $arcgis.import()
  let Map, MapView, GraphicsLayer, Graphic, Point, Polyline,
    SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol,
    WebTileLayer, Basemap, esriConfig, reactiveUtils;

  try {
    [esriConfig, Map, MapView, GraphicsLayer, Graphic, Point, Polyline,
      SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol,
      WebTileLayer, Basemap, reactiveUtils,
    ] = await $arcgis.import([
      "@arcgis/core/config.js",
      "@arcgis/core/Map.js",
      "@arcgis/core/views/MapView.js",
      "@arcgis/core/layers/GraphicsLayer.js",
      "@arcgis/core/Graphic.js",
      "@arcgis/core/geometry/Point.js",
      "@arcgis/core/geometry/Polyline.js",
      "@arcgis/core/symbols/SimpleMarkerSymbol.js",
      "@arcgis/core/symbols/SimpleLineSymbol.js",
      "@arcgis/core/symbols/TextSymbol.js",
      "@arcgis/core/layers/WebTileLayer.js",
      "@arcgis/core/Basemap.js",
      "@arcgis/core/core/reactiveUtils.js",
    ]);
  } catch (err) {
    console.error("Failed to load ArcGIS modules:", err);
    showError(lang === "es"
      ? "Error al cargar el mapa. Verifica tu conexion."
      : "Failed to load map SDK. Check your connection and refresh.");
    throw err;
  }

  // Basemap: Esri World Light Gray Canvas (no API key needed)
  let mapBasemap;
  if (ARCGIS_API_KEY) {
    esriConfig.apiKey = ARCGIS_API_KEY;
    mapBasemap = "arcgis/human-geography";
  } else {
    // Esri World Light Gray Canvas tiles: public, no API key required
    // (CARTO's basemaps.cartocdn.com tiles now require an API key).
    const esriTiles = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/";
    const grayBase = new WebTileLayer({
      urlTemplate: esriTiles + "World_Light_Gray_Base/MapServer/tile/{level}/{row}/{col}",
      copyright: "Esri, HERE, Garmin, &copy; OpenStreetMap contributors",
    });
    const grayLabels = new WebTileLayer({
      urlTemplate: esriTiles + "World_Light_Gray_Reference/MapServer/tile/{level}/{row}/{col}",
    });
    mapBasemap = new Basemap({ baseLayers: [grayBase], referenceLayers: [grayLabels] });
  }

  // State
  // Filters work on individual events: a place is shown if at least one of its events matches.
  let activeEra = "all";      // "all" | era id
  let activeTrad = "all";     // "all" | tradition id (C, R, B, M, P, E, O)
  let activeTheme = "all";    // "all" | theme id
  let activeArea = "all";     // "all" | "r:<region id>" | "c:<country>"
  let colorMode = "era";      // "era" | "trad"
  let showHistoricalNames = true;
  const HOME = { center: [-75, 8], zoom: 3 };
  const areaMatch = (loc) => activeArea === "all" ||
    (activeArea.startsWith("r:") ? loc.area === activeArea.slice(2) : loc.country === activeArea.slice(2));
  // `skip` ignores one dimension (used to compute the counts shown on each filter option)
  function eventMatches(loc, e, skip) {
    return (skip === "era" || activeEra === "all" || e.era === activeEra) &&
      (skip === "trad" || activeTrad === "all" || e.traditions.includes(activeTrad)) &&
      (skip === "theme" || activeTheme === "all" || e.themes.includes(activeTheme)) &&
      (skip === "area" || areaMatch(loc));
  }
  const visibleEvents = (loc) => loc.events.filter((e) => eventMatches(loc, e));
  const isVisible = (loc) => visibleEvents(loc).length > 0;
  const filtersActive = () => activeEra !== "all" || activeTrad !== "all" || activeTheme !== "all" || activeArea !== "all";
  let stopNumbers = {};
  let selectedLocation = null;
  let orderedStops = [];
  let currentStopIndex = -1;

  // Layers
  const geoLayer = new GraphicsLayer({ title: "GeoLabels" });
  const routeLayer = new GraphicsLayer({ title: "Routes" });
  const cityLayer = new GraphicsLayer({ title: "Locations" });
  const labelLayer = new GraphicsLayer({ title: "Labels" });

  // Geographic labels
  const geoLabels = [
    { en: "CANADA", es: "CANADÁ", lat: 56, lng: -100, size: 13, color: [100, 90, 80] },
    { en: "UNITED STATES", es: "ESTADOS UNIDOS", lat: 39.5, lng: -98, size: 13, color: [100, 90, 80] },
    { en: "MEXICO", es: "MÉXICO", lat: 24, lng: -103, size: 12, color: [100, 90, 80] },
    { en: "BRAZIL", es: "BRASIL", lat: -10, lng: -53, size: 13, color: [100, 90, 80] },
    { en: "PERU", es: "PERÚ", lat: -9.5, lng: -75, size: 10, color: [100, 90, 80] },
    { en: "ARGENTINA", es: "ARGENTINA", lat: -38, lng: -66, size: 11, color: [100, 90, 80] },
    { en: "CHILE", es: "CHILE", lat: -27, lng: -71.5, size: 9, color: [100, 90, 80] },
    { en: "COLOMBIA", es: "COLOMBIA", lat: 3.5, lng: -73, size: 10, color: [100, 90, 80] },
    { en: "Caribbean Sea", es: "Mar Caribe", lat: 15, lng: -75, size: 10, italic: true, color: [70, 100, 140] },
    { en: "Gulf of\nMexico", es: "Golfo de\nMéxico", lat: 25.5, lng: -90, size: 10, italic: true, color: [70, 100, 140] },
    { en: "Atlantic\nOcean", es: "Océano\nAtlántico", lat: 28, lng: -50, size: 12, italic: true, color: [70, 100, 140] },
    { en: "Pacific\nOcean", es: "Océano\nPacífico", lat: 5, lng: -110, size: 12, italic: true, color: [70, 100, 140] },
  ];

  function drawGeoLabels() {
    geoLayer.removeAll();
    // The Esri reference layer already labels countries and oceans in English;
    // draw our own labels only to give Spanish readers Spanish names.
    if (ARCGIS_API_KEY || lang !== "es") return;
    geoLabels.forEach((geo) => {
      const text = lang === "es" ? geo.es : geo.en;
      geoLayer.add(new Graphic({
        geometry: new Point({ longitude: geo.lng, latitude: geo.lat }),
        symbol: new TextSymbol({
          text,
          color: [...geo.color, 190],
          haloColor: [240, 237, 232, 255],
          haloSize: 3,
          font: { size: geo.size, family: "Avenir Next LT Pro", weight: "bold", style: geo.italic ? "italic" : "normal" },
          horizontalAlignment: "center",
          verticalAlignment: "middle",
          lineWidth: 200,
        }),
      }));
    });
  }

  // Map & View
  const map = new Map({ basemap: mapBasemap, layers: [geoLayer, routeLayer, cityLayer, labelLayer] });

  const view = new MapView({
    container: "viewDiv",
    map,
    center: HOME.center,
    zoom: HOME.zoom,
    constraints: { minZoom: 2, maxZoom: 13 },
    popup: { autoOpenEnabled: false },
    ui: { components: ["zoom"] },
    navigation: { mouseWheelZoomEnabled: true, browserTouchPanEnabled: true },
  });

  view.ui.move("zoom", "bottom-right");
  view.when(dismissSplash).catch((err) => {
    console.error("MapView failed:", err);
    showError(lang === "es" ? "El mapa no pudo cargarse." : "Map failed to load.");
    dismissSplash();
  });

  // Drawing Helpers
  function getEraColor(eraId) { return eraIndex[eraId]?.color || [150, 150, 150]; }
  function getEraHex(eraId) { return eraIndex[eraId]?.hexColor || "#999"; }

  function getLocationSize(significance) {
    switch (significance) {
      case "major": return 16;
      case "moderate": return 13;
      default: return 11;
    }
  }

  // Stops are numbered 1..N in chronological order of each place's first matching event,
  // so the numbers on the map always match the Previous / Next counter.
  function computeStops() {
    const stops = locations.filter(isVisible)
      .map((loc) => ({ loc, first: visibleEvents(loc)[0] }))
      .sort((a, b) => a.first.year - b.first.year);
    orderedStops = stops.map((st) => st.loc);
    stopNumbers = {};
    orderedStops.forEach((l, i) => { stopNumbers[l.id] = i + 1; });
  }

  function getStopNumber(loc) { return stopNumbers[loc.id] ?? null; }

  function tradColor(id) { return TRADITION_INDEX[id]?.color || [150, 150, 150]; }

  function getStopEraColor(loc) {
    const ev = visibleEvents(loc)[0] || loc.events[0];
    if (colorMode === "trad") return tradColor(activeTrad !== "all" ? activeTrad : ev.traditions[0]);
    return getEraColor(ev.era);
  }

  // Draw Routes
  function drawRoutes() {
    routeLayer.removeAll();
    routes.forEach((route) => {
      const era = eraIndex[route.era];
      if (!era) return;
      if (activeEra !== "all" && activeEra !== route.era) return;
      if (activeTrad !== "all" || activeTheme !== "all" || activeArea !== "all") return;

      if (route.path && route.path.length > 1) {
        routeLayer.add(new Graphic({
          geometry: new Polyline({ paths: [route.path] }),
          symbol: new SimpleLineSymbol({
            color: [...era.color, 180],
            width: 2.5,
            style: "dash",
            cap: "round",
            join: "round",
          }),
          attributes: { era: route.era },
        }));
      }
    });
  }

  // ============================================================
  // Zoom-Based Labeling with Collision Detection
  // ============================================================

  const LABEL_PRIORITY = {
    "santo-domingo": 1, "mexico-city": 1, "lima": 1, "rio": 1, "quebec": 1,
    "boston": 1, "philadelphia": 1, "buenos-aires": 1, "los-angeles": 1, "belem": 1,
  };

  // Minimum zoom at which a label appears, so the continent view stays readable.
  function getLabelMinZoom(loc) {
    if (LABEL_PRIORITY[loc.id] === 1) return 3;
    if (loc.significance === "major") return 4;
    if (loc.significance === "moderate") return 5;
    return 6;
  }

  /**
   * Screen-space collision detection.
   * Given a list of candidate labels (sorted by priority), returns only those
   * whose bounding boxes don't overlap with already-placed labels.
   */
  function deconflictLabels(candidates) {
    const placed = []; // array of { x, y, w, h } screen-space boxes

    return candidates.filter((c) => {
      const screenPt = view.toScreen(new Point({ longitude: c.lng, latitude: c.lat }));
      if (!screenPt) return false;

      // Estimate label bounding box in pixels
      const charWidth = c.fontSize * 0.55;
      const w = c.text.length * charWidth + 12; // +padding
      const h = c.fontSize + 6;
      const x = screenPt.x - w / 2;
      const y = screenPt.y - c.yoffset - h;

      const box = { x, y, w, h };

      // Check overlap against all placed labels
      const overlaps = placed.some((p) =>
        box.x < p.x + p.w && box.x + box.w > p.x &&
        box.y < p.y + p.h && box.y + box.h > p.y
      );

      if (!overlaps) {
        placed.push(box);
        return true;
      }
      return false;
    });
  }

  // Draw Locations
  function drawLocations() {
    cityLayer.removeAll();
    labelLayer.removeAll();

    const zoom = view.zoom;

    // First pass: draw all markers (always visible)
    locations.forEach((loc) => {
      if (!isVisible(loc)) return;

      const markerColor = getStopEraColor(loc);
      const size = getLocationSize(loc.significance);
      const stopNumber = getStopNumber(loc);
      const point = new Point({ longitude: loc.lng, latitude: loc.lat });

      // Glow for major locations
      if (loc.significance === "major") {
        cityLayer.add(new Graphic({
          geometry: point,
          symbol: new SimpleMarkerSymbol({
            style: "circle",
            size: size + 12,
            color: [markerColor[0], markerColor[1], markerColor[2], 40],
            outline: { color: [0, 0, 0, 0], width: 0 },
          }),
          attributes: { locId: loc.id, type: "glow" },
        }));
      }

      // Location marker
      cityLayer.add(new Graphic({
        geometry: point,
        symbol: new SimpleMarkerSymbol({
          style: "circle",
          size,
          color: [...markerColor, 255],
          outline: { color: [60, 40, 50, 200], width: loc.significance === "major" ? 2.5 : 2 },
        }),
        attributes: { locId: loc.id, type: "city" },
      }));

      // Stop number inside marker
      if (stopNumber != null) {
        const numFontSize = loc.significance === "major" ? 9 : loc.significance === "moderate" ? 8 : 7;
        cityLayer.add(new Graphic({
          geometry: point,
          symbol: new TextSymbol({
            text: String(stopNumber),
            color: [255, 255, 255, 255],
            haloColor: [0, 0, 0, 120],
            haloSize: 0.5,
            font: { size: numFontSize, family: "Arial", weight: "bold" },
            yoffset: 0, xoffset: 0,
            horizontalAlignment: "center",
            verticalAlignment: "middle",
          }),
          attributes: { locId: loc.id, type: "stopNumber" },
        }));
      }
    });

    // Second pass: build label candidates, sorted by priority
    const labelCandidates = [];

    locations.forEach((loc) => {
      if (!isVisible(loc)) return;

      const minZoom = getLabelMinZoom(loc);
      if (zoom < minZoom) return;

      const size = getLocationSize(loc.significance);
      const labelText = showHistoricalNames
        ? (locationText(loc.id, "name") || loc.name)
        : (locationText(loc.id, "modernName") || loc.modernName);
      const displayText = labelText.length > 28 ? labelText.substring(0, 25) + "..." : labelText;
      const fontSize = loc.significance === "major" ? 11 : 9;

      // Priority for sorting: lower = more important
      const priority = LABEL_PRIORITY[loc.id] || (
        loc.significance === "major" ? 3 :
        loc.significance === "moderate" ? 4 : 5
      );

      labelCandidates.push({
        loc,
        text: displayText,
        fontSize,
        fontWeight: loc.significance === "major" ? "bold" : "normal",
        yoffset: size / 2 + 8,
        lat: loc.lat,
        lng: loc.lng,
        priority,
      });
    });

    // Sort by priority (most important first)
    labelCandidates.sort((a, b) => a.priority - b.priority);

    // Run collision detection to remove overlapping labels
    const visibleLabels = deconflictLabels(labelCandidates);

    // Draw surviving labels
    visibleLabels.forEach((c) => {
      const point = new Point({ longitude: c.lng, latitude: c.lat });
      labelLayer.add(new Graphic({
        geometry: point,
        symbol: new TextSymbol({
          text: c.text,
          color: [40, 25, 35, 255],
          haloColor: [255, 255, 255, 220],
          haloSize: 2,
          font: {
            size: c.fontSize,
            family: "Avenir Next LT Pro",
            weight: c.fontWeight,
          },
          yoffset: c.yoffset,
        }),
        attributes: { locId: c.loc.id, type: "label" },
      }));
    });
  }

  function refresh() {
    computeStops();
    drawGeoLabels();
    drawRoutes();
    drawLocations();
    updateFilterUI();
  }

  // ---------- Compact filter bar: Era · Tradition · Region · Theme, each a dropdown with live counts ----------
  const fbar = document.getElementById("fbar");
  const nameOf = (obj) => (lang === "es" ? obj.es : obj.en);
  const countEvents = (skip, extra) => {
    let n = 0;
    locations.forEach((loc) => loc.events.forEach((e) => { if (eventMatches(loc, e, skip) && extra(loc, e)) n++; }));
    return n;
  };
  const countForArea = (v) => { const saved = activeArea; activeArea = v; const n = countEvents(null, () => true); activeArea = saved; return n; };
  const countryLabel = (c) => (lang === "es" ? (COUNTRY_ES[c] || c) : c);
  const COUNTRIES = [...new Set(locations.map((l) => l.country))];

  const DIMS = [
    { key: "era", title: () => t("fEra"), get: () => String(activeEra), set: (v) => { activeEra = v === "all" ? "all" : parseInt(v); },
      options: () => [{ v: "all", label: t("allEras") }, ...eras.map((e) => ({ v: String(e.id), label: eraText(e.id, "shortName"), sub: eraText(e.id, "dateRange"), color: e.hexColor }))],
      count: (v) => countEvents("era", (l, e) => v === "all" || e.era === parseInt(v)) },
    { key: "trad", title: () => t("fTrad"), get: () => activeTrad, set: (v) => { activeTrad = v; },
      options: () => [{ v: "all", label: t("allTraditions") }, ...TRADITIONS.map((tr) => ({ v: tr.id, label: nameOf(tr), color: tr.hex }))],
      count: (v) => countEvents("trad", (l, e) => v === "all" || e.traditions.includes(v)) },
    { key: "area", title: () => t("fArea"), get: () => activeArea, set: (v) => { activeArea = v; },
      options: () => [{ v: "all", label: t("allRegions") }, { heading: t("regionsGroup") },
        ...REGIONS.map((r) => ({ v: "r:" + r.id, label: nameOf(r) })), { heading: t("countriesGroup") },
        ...COUNTRIES.map((c) => ({ v: "c:" + c, label: countryLabel(c) })).sort((x, y) => x.label.localeCompare(y.label, lang))],
      count: (v) => countForArea(v) },
    { key: "theme", title: () => t("fTheme"), get: () => activeTheme, set: (v) => { activeTheme = v; },
      options: () => [{ v: "all", label: t("allThemes") }, ...THEMES.map((th) => ({ v: th.id, label: nameOf(th) }))],
      count: (v) => countEvents("theme", (l, e) => v === "all" || e.themes.includes(v)) },
  ];

  const chevron = '<svg class="fbtn-chev" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const pop = document.createElement("div");
  pop.className = "fpop"; pop.setAttribute("role", "listbox"); pop.hidden = true;
  document.body.appendChild(pop);
  let openDim = null;

  function buildFilterControls() {
    fbar.innerHTML = DIMS.map((d) =>
      `<button class="fbtn" data-dim="${d.key}" aria-haspopup="listbox" aria-expanded="false"><span class="fbtn-k">${d.title()}</span><span class="fbtn-v"></span>${chevron}</button>`
    ).join("") +
      `<div class="seg" role="group" aria-label="${t("colorBy")}"><span class="seg-label">${t("colorBy")}</span><button class="seg-btn" data-color="era">${t("colorEra")}</button><button class="seg-btn" data-color="trad">${t("colorTrad")}</button></div>` +
      `<span class="result-count" aria-live="polite"></span>` +
      `<button class="clear-btn" title="${t("clearFilters")}" aria-label="${t("clearFilters")}"><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>`;
    fbar.querySelectorAll(".fbtn").forEach((b) => b.addEventListener("click", (ev) => { ev.stopPropagation(); openDim === b.dataset.dim ? closePop() : openPop(b); }));
    fbar.querySelectorAll(".seg-btn").forEach((b) => b.addEventListener("click", () => { colorMode = b.dataset.color; refresh(); if (!document.getElementById("timelinePanel").classList.contains("hidden")) buildTimelinePanel(); }));
    fbar.querySelector(".clear-btn").addEventListener("click", () => {
      activeEra = "all"; activeTrad = "all"; activeTheme = "all"; activeArea = "all";
      applyFilterChange();
    });
  }

  function openPop(btn) {
    const d = DIMS.find((x) => x.key === btn.dataset.dim);
    openDim = d.key;
    fbar.querySelectorAll(".fbtn").forEach((b) => b.setAttribute("aria-expanded", String(b === btn)));
    const cur = d.get();
    pop.innerHTML = `<div class="fpop-title">${d.title()}</div>` + d.options().map((o) => {
      if (o.heading) return `<div class="fpop-head">${o.heading}</div>`;
      const n = d.count(o.v);
      return `<button class="fopt${o.v === cur ? " sel" : ""}${n === 0 ? " empty" : ""}" role="option" aria-selected="${o.v === cur}" data-v="${o.v}">` +
        `<span class="fopt-dot"${o.color ? ` style="background:${o.color}"` : ""}></span>` +
        `<span class="fopt-l">${o.label}${o.sub ? `<small>${o.sub}</small>` : ""}</span><span class="fopt-n">${n}</span></button>`;
    }).join("");
    pop.querySelectorAll(".fopt").forEach((o) => o.addEventListener("click", () => { d.set(o.dataset.v); closePop(); applyFilterChange(); }));
    pop.hidden = false;
    if (window.innerWidth >= 768) {
      const r = btn.getBoundingClientRect();
      pop.classList.remove("as-sheet");
      pop.style.top = `${r.bottom + 6}px`;
      pop.style.left = `${Math.min(r.left, window.innerWidth - 300)}px`;
    } else {
      pop.classList.add("as-sheet");
      pop.style.top = ""; pop.style.left = "";
    }
    (pop.querySelector(".fopt.sel") || pop.querySelector(".fopt"))?.focus({ preventScroll: true });
  }
  function closePop() {
    pop.hidden = true; openDim = null;
    fbar.querySelectorAll(".fbtn").forEach((b) => b.setAttribute("aria-expanded", "false"));
  }
  document.addEventListener("click", (ev) => { if (!pop.hidden && !pop.contains(ev.target)) closePop(); });
  document.addEventListener("keydown", (ev) => { if (ev.key === "Escape" && !pop.hidden) closePop(); });
  window.addEventListener("resize", closePop);

  function applyFilterChange() {
    closeBottomSheet();
    refresh();
    zoomToVisible();
    if (!document.getElementById("timelinePanel").classList.contains("hidden")) buildTimelinePanel();
  }

  // Button labels show the current choice; active filters turn gold
  function updateFilterUI() {
    DIMS.forEach((d) => {
      const b = fbar.querySelector(`.fbtn[data-dim="${d.key}"]`);
      const v = d.get();
      const opt = d.options().find((o) => o.v === v);
      const active = v !== "all";
      b.classList.toggle("active", active);
      b.querySelector(".fbtn-v").innerHTML = active
        ? `${opt && opt.color ? `<i class="fbtn-dot" style="background:${opt.color}"></i>` : ""}${opt ? opt.label : v}`
        : t("allShort");
    });
    fbar.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.color === colorMode));
    const total = countEvents(null, () => true);
    fbar.querySelector(".result-count").textContent = `${total} ${t("eventsWord")} · ${orderedStops.length} ${t("placesWord")}`;
    fbar.querySelector(".clear-btn").hidden = !filtersActive();
    document.body.classList.toggle("color-trad", colorMode === "trad");
  }
  buildFilterControls();

  function zoomToVisible() {
    const vis = locations.filter(isVisible);
    if (!filtersActive()) {
      view.goTo(HOME, { duration: 800 });
    } else if (vis.length > 0) {
      zoomToLocations(vis);
    }
  }

  function zoomToLocations(locs) {
    const lngs = locs.map((l) => l.lng);
    const lats = locs.map((l) => l.lat);
    view.goTo({
      xmin: Math.min(...lngs) - 4,
      ymin: Math.min(...lats) - 4,
      xmax: Math.max(...lngs) + 4,
      ymax: Math.max(...lats) + 4,
      spatialReference: { wkid: 4326 },
    }, { duration: 800 });
  }

  // Timeline Panel
  function buildTimelinePanel() {
    const content = document.getElementById("timelineContent");
    const items = locations
      .flatMap((loc) => visibleEvents(loc).map((e) => ({ e, loc })))
      .sort((a, b) => a.e.year - b.e.year);
    content.innerHTML = items.map(({ e, loc }) => {
      const era = eraIndex[e.era];
      const dotColor = colorMode === "trad" ? TRADITION_INDEX[e.traditions[0]].hex : era.hexColor;
      const placeName = locationText(loc.id, "name") || loc.name;
      return `
        <div class="timeline-item" data-location="${loc.id}">
          <div class="timeline-dot" style="background:${dotColor}"></div>
          <div class="timeline-year" style="color:${dotColor}">${e.year}<span class="tl-num" title="${t("stopOnMap")}">${stopNumbers[loc.id]}</span></div>
          <div class="timeline-title">${localized(e, "title")}</div>
          <div class="timeline-location">${placeName} · ${e.traditions.map((id) => `<span class="mini-dot" style="background:${TRADITION_INDEX[id].hex}" title="${nameOf(TRADITION_INDEX[id])}"></span>`).join("")}</div>
        </div>
      `;
    }).join("") || `<p class="empty-note">${t("noResults")}</p>`;

    content.querySelectorAll(".timeline-item").forEach((item) => {
      item.addEventListener("click", () => {
        const locId = item.dataset.location;
        selectLocation(locId);
        togglePanel("timelinePanel", false);
        const loc = locations.find((l) => l.id === locId);
        if (loc) view.goTo({ center: [loc.lng, loc.lat], zoom: 7 }, { duration: 600 });
      });
    });
  }

  // Figures Panel
  function buildFiguresPanel() {
    const content = document.getElementById("figuresContent");
    content.innerHTML = figures.map((fig) => `
      <div class="figure-card" data-figure="${fig.id}">
        <div class="figure-name">${fig.name}</div>
        <div class="figure-years">${fig.years}</div>
        <div class="figure-role">${localized(fig, "role")}</div>
        <div class="figure-bio">${localized(fig, "bio")}</div>
      </div>
    `).join("");

    content.querySelectorAll(".figure-card").forEach((card) => {
      card.addEventListener("click", () => {
        const figName = card.querySelector(".figure-name").textContent;
        const loc = locations.find((l) => l.events.some((e) => e.figure === figName));
        if (loc) {
          selectLocation(loc.id);
          togglePanel("figuresPanel", false);
          view.goTo({ center: [loc.lng, loc.lat], zoom: 7 }, { duration: 600 });
        }
      });
    });
  }

  function togglePanel(panelId, show) {
    const panel = document.getElementById(panelId);
    if (show === undefined) show = panel.classList.contains("hidden");
    if (show) {
      document.querySelectorAll(".scripture-panel").forEach((p) => p.classList.add("hidden"));
      panel.classList.remove("hidden");
    } else {
      panel.classList.add("hidden");
    }
  }

  document.getElementById("btnTimeline").addEventListener("click", () => { buildTimelinePanel(); togglePanel("timelinePanel"); });
  document.getElementById("btnFigures").addEventListener("click", () => togglePanel("figuresPanel"));
  document.getElementById("closeTimeline").addEventListener("click", () => togglePanel("timelinePanel", false));
  document.getElementById("closeFigures").addEventListener("click", () => togglePanel("figuresPanel", false));

  // Name Toggle
  const nameToggle = document.getElementById("nameToggle");
  const nameLabel = document.getElementById("nameLabel");
  let nameToggleTimeout;

  document.getElementById("btnToggleNames").addEventListener("click", () => {
    showHistoricalNames = !showHistoricalNames;
    nameLabel.textContent = showHistoricalNames ? t("showingHistorical") : t("showingModern");
    nameToggle.classList.add("visible");
    clearTimeout(nameToggleTimeout);
    nameToggleTimeout = setTimeout(() => nameToggle.classList.remove("visible"), 2000);
    drawLocations();
  });

  // Language Switch (in-app toggle)
  document.getElementById("btnLang").addEventListener("click", () => {
    const newLang = lang === "en" ? "es" : "en";
    setLang(newLang);
    applyTranslations();
    buildFilterControls();
    buildTimelinePanel();
    buildFiguresPanel();
    refresh();
    if (selectedLocation && bottomSheet.classList.contains("open")) {
      openBottomSheet(selectedLocation);
    }
  });

  // Bottom Sheet
  const bottomSheet = document.getElementById("bottomSheet");
  const sheetLocationName = document.getElementById("sheetLocationName");
  const sheetModernName = document.getElementById("sheetModernName");
  const sheetEvents = document.getElementById("sheetEvents");
  const sheetHandle = document.getElementById("sheetHandle");

  function buildStopList() { computeStops(); }

  function updateNavButtons() {
    const prevBtn = document.getElementById("btnPrevStop");
    const nextBtn = document.getElementById("btnNextStop");
    const counter = document.getElementById("stopCounter");
    document.getElementById("prevLabel").textContent = lang === "es" ? "Anterior" : "Previous";
    document.getElementById("nextLabel").textContent = lang === "es" ? "Siguiente" : "Next";
    prevBtn.disabled = currentStopIndex <= 0;
    nextBtn.disabled = currentStopIndex >= orderedStops.length - 1;
    counter.textContent = `${currentStopIndex + 1} / ${orderedStops.length}`;
  }

  function navigateToStop(index) {
    if (index < 0 || index >= orderedStops.length) return;
    currentStopIndex = index;
    const loc = orderedStops[index];
    openBottomSheet(loc);
    highlightLocation(loc.id);
    view.goTo({ center: [loc.lng, loc.lat], zoom: Math.max(view.zoom, 5) }, { duration: 500 });
  }

  document.getElementById("btnPrevStop").addEventListener("click", () => navigateToStop(currentStopIndex - 1));
  document.getElementById("btnNextStop").addEventListener("click", () => navigateToStop(currentStopIndex + 1));

  function openBottomSheet(loc) {
    selectedLocation = loc;
    buildStopList();
    currentStopIndex = orderedStops.findIndex((l) => l.id === loc.id);

    const locName = locationText(loc.id, "name") || loc.name;
    const modName = locationText(loc.id, "modernName") || loc.modernName;
    const region = locationText(loc.id, "region") || loc.region;
    sheetLocationName.textContent = locName;
    sheetModernName.textContent = `${t("sheetModernLabel")} ${modName}  |  ${t("sheetRegionLabel")} ${region}`;

    let eventsToShow = visibleEvents(loc);
    if (!eventsToShow.length) eventsToShow = loc.events;

    sheetEvents.innerHTML = eventsToShow.map((event) => {
      const era = eraIndex[event.era];
      const eraShort = eraText(event.era, "shortName") || era.shortName;
      const eraDate = eraText(event.era, "dateRange") || era.dateRange;

      return `
        <div class="event-card" data-era="${event.era}">
          ${renderImage(event.image, localized(event, "title"))}
          <div class="event-era-tag">${event.year} &bull; ${eraShort} &bull; ${eraDate}</div>
          <div class="event-action">${localized(event, "title")}</div>
          <div class="event-tags">${event.traditions.map((id) => `<span class="trad-pill" style="--c:${TRADITION_INDEX[id].hex}">${nameOf(TRADITION_INDEX[id])}</span>`).join("")}${event.themes.map((id) => `<span class="theme-pill">${nameOf(THEMES.find((th) => th.id === id))}</span>`).join("")}</div>
          <p class="event-description">${localized(event, "description")}</p>
          ${event.figure ? `<span class="event-figure-tag">${event.figure}</span>` : ""}
          ${renderSources(event.sources)}
        </div>
      `;
    }).join("");

    updateNavButtons();
    bottomSheet.classList.add("open");
    document.getElementById("sheetContent").scrollTop = 0;
  }

  function closeBottomSheet() {
    bottomSheet.classList.remove("open");
    selectedLocation = null;
  }

  document.getElementById("closeSheet").addEventListener("click", closeBottomSheet);

  // Touch drag to dismiss
  let sheetStartY = 0, sheetCurrentY = 0, isDragging = false;
  sheetHandle.addEventListener("touchstart", (e) => {
    isDragging = true; sheetStartY = e.touches[0].clientY; bottomSheet.style.transition = "none";
  });
  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    sheetCurrentY = e.touches[0].clientY;
    const diff = sheetCurrentY - sheetStartY;
    if (diff > 0) bottomSheet.style.transform = `translateY(${diff}px)`;
  });
  document.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false; bottomSheet.style.transition = "";
    const diff = sheetCurrentY - sheetStartY;
    if (diff > 100) closeBottomSheet();
    bottomSheet.style.transform = "";
  });

  // Map Click
  function selectLocation(locId) {
    const loc = locations.find((l) => l.id === locId);
    if (loc) { openBottomSheet(loc); highlightLocation(locId); }
  }

  function highlightLocation(locId) {
    drawLocations();
    const loc = locations.find((l) => l.id === locId);
    if (!loc) return;
    cityLayer.add(new Graphic({
      geometry: new Point({ longitude: loc.lng, latitude: loc.lat }),
      symbol: new SimpleMarkerSymbol({
        style: "circle",
        size: getLocationSize(loc.significance) + 12,
        color: [201, 168, 76, 35],
        outline: { color: [201, 168, 76, 200], width: 2 },
      }),
      attributes: { locId: loc.id, type: "highlight" },
    }));
  }

  view.on("click", (event) => {
    view.hitTest(event).then((response) => {
      const cityGraphic = response.results.find((r) => r.graphic?.attributes?.type === "city");
      if (cityGraphic) {
        const locId = cityGraphic.graphic.attributes.locId;
        selectLocation(locId);
        const loc = locations.find((l) => l.id === locId);
        if (loc) view.goTo({ center: [loc.lng, loc.lat], zoom: Math.max(view.zoom, 5) }, { duration: 500 });
      } else if (!event.native.target.closest(".bottom-sheet")) {
        closeBottomSheet();
      }
    });
  });

  // Debounced label refresh on zoom
  let zoomTimer;
  reactiveUtils.watch(
    () => view.zoom,
    () => { clearTimeout(zoomTimer); zoomTimer = setTimeout(() => drawLocations(), 150); }
  );

  // Initial draw
  refresh();
  buildTimelinePanel();
  buildFiguresPanel();
}

// ============================================================
// Apply translations to static HTML elements
// ============================================================
function applyTranslations() {
  const navLogo = document.getElementById("navLogo");
  const isPhone = window.innerWidth < 768;
  navLogo.setAttribute("heading", isPhone ? t("shortTitle") : t("appTitle"));
  if (isPhone) navLogo.removeAttribute("icon");
  // On phones the subtitle would push the header buttons off-screen
  navLogo.setAttribute("description", isPhone ? "" : t("appSubtitle"));

  document.getElementById("timelineBtnText").textContent = t("btnTimeline");
  document.getElementById("figuresBtnText").textContent = t("btnFigures");
  document.getElementById("namesBtnText").textContent = t("btnNames");

  const donateBtnText = document.getElementById("donateBtnText");
  if (donateBtnText) donateBtnText.textContent = lang === "es" ? "Apoya" : "Support";
  document.getElementById("btnDonate").setAttribute("title",
    lang === "es" ? "Apoya este proyecto" : "Support this project");

  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) langBtnText.textContent = lang === "en" ? "ES" : "EN";

  document.querySelectorAll(".journey-chip").forEach((chip) => {
    const labelEl = chip.querySelector(".chip-label");
    const era = chip.dataset.era;
    if (era && era !== "all") labelEl.textContent = eraText(parseInt(era), "shortName");
    else if (labelEl?.dataset?.i18n) labelEl.textContent = t(labelEl.dataset.i18n);
  });

  document.getElementById("timelinePanelTitle").textContent = t("timelineTitle");
  document.getElementById("figuresPanelTitle").textContent = t("figuresTitle");
}
