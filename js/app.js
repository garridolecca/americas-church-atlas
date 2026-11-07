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
  let activeEra = "all";
  let activeZone = "all"; // "all" | "north" | "south"
  let showHistoricalNames = true;
  const HOME = { center: [-75, 8], zoom: 3 };
  const isVisible = (loc) =>
    (activeEra === "all" || loc.eras.includes(activeEra)) &&
    (activeZone === "all" || loc.zone === activeZone);
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

  function getStopNumber(loc) {
    if (activeEra === "all") {
      const event = loc.events[0];
      return event ? event.order : null;
    }
    const event = loc.events.find((e) => e.era === activeEra);
    return event ? event.order : null;
  }

  function getStopEraColor(loc) {
    if (activeEra === "all") return getEraColor(loc.eras[0]);
    return getEraColor(activeEra);
  }

  // Draw Routes
  function drawRoutes() {
    routeLayer.removeAll();
    routes.forEach((route) => {
      const era = eraIndex[route.era];
      if (!era) return;
      if (activeEra !== "all" && activeEra !== route.era) return;
      if (activeZone !== "all") return;

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
    drawGeoLabels();
    drawRoutes();
    drawLocations();
  }

  // Era Chip Selector
  const chips = document.querySelectorAll(".journey-chip[data-era]");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const val = chip.dataset.era;
      activeEra = val === "all" ? "all" : parseInt(val);
      closeBottomSheet();
      refresh();
      zoomToVisible();
    });
  });

  // Region chips (North / South)
  const zoneChips = document.querySelectorAll(".zone-chip");
  zoneChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      zoneChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeZone = chip.dataset.zone;
      closeBottomSheet();
      refresh();
      zoomToVisible();
    });
  });

  function zoomToVisible() {
    const vis = locations.filter(isVisible);
    if (activeEra === "all" && activeZone === "all") {
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
    const items = timeline.filter((evt) =>
      (activeEra === "all" || evt.era === activeEra) && (activeZone === "all" || evt.zone === activeZone));
    content.innerHTML = items.map((evt) => {
      const era = eraIndex[evt.era];
      return `
        <div class="timeline-item" data-location="${evt.locationId}">
          <div class="timeline-dot" style="background:${era.hexColor}"></div>
          <div class="timeline-year" style="color:${era.hexColor}">${evt.year}</div>
          <div class="timeline-title">${localized(evt, "title")}</div>
          <div class="timeline-location">${lang === "es" ? evt.locationNameEs : evt.locationName}</div>
        </div>
      `;
    }).join("");

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

  function buildStopList() {
    const stops = [];
    if (activeEra !== "all") {
      locations.filter(isVisible).forEach((loc) => {
        const event = loc.events.find((e) => e.era === activeEra);
        if (event) stops.push({ loc, order: event.order, era: activeEra });
      });
      stops.sort((a, b) => a.order - b.order);
    } else {
      eras.forEach(({ id: eraId }) => {
        const eraStops = [];
        locations.filter(isVisible).forEach((loc) => {
          const event = loc.events.find((e) => e.era === eraId);
          if (event) eraStops.push({ loc, order: event.order, era: eraId });
        });
        eraStops.sort((a, b) => a.order - b.order);
        stops.push(...eraStops);
      });
      const seen = new Set();
      const unique = [];
      stops.forEach((s) => { if (!seen.has(s.loc.id)) { seen.add(s.loc.id); unique.push(s); } });
      stops.length = 0;
      stops.push(...unique);
    }
    orderedStops = stops.map((s) => s.loc);
  }

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

    let eventsToShow = loc.events;
    if (activeEra !== "all") {
      eventsToShow = loc.events.filter((e) => e.era === activeEra);
    }

    sheetEvents.innerHTML = eventsToShow.map((event) => {
      const era = eraIndex[event.era];
      const eraShort = eraText(event.era, "shortName") || era.shortName;
      const eraDate = eraText(event.era, "dateRange") || era.dateRange;

      return `
        <div class="event-card" data-era="${event.era}">
          <div class="event-era-tag">${event.year} &bull; ${eraShort} &bull; ${eraDate}</div>
          <div class="event-action">${localized(event, "title")}</div>
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
  document.querySelectorAll(".zone-chip").forEach((chip) => {
    const labelEl = chip.querySelector(".chip-label");
    if (labelEl?.dataset?.i18n) labelEl.textContent = t(labelEl.dataset.i18n);
  });

  document.getElementById("timelinePanelTitle").textContent = t("timelineTitle");
  document.getElementById("figuresPanelTitle").textContent = t("figuresTitle");
}
