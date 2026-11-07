import { eraIndex, locations } from "./data.js";

export let lang = "en";
export function setLang(newLang) { lang = newLang; document.documentElement.lang = newLang; }

const ui = {
  en: {
    appTitle: "The Church in the Americas", shortTitle: "Church Atlas", appSubtitle: "From Catholic Missions to the Evangelical Explosion",
    splashVerse: '"And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come."', splashVerseRef: "Matthew 24:14",
    chipAll: "All Eras",
    regionAll: "All Americas", regionNorth: "US & Canada", regionSouth: "Latin America & Caribbean",
    btnTimeline: "Timeline", btnFigures: "Figures", btnNames: "Names",
    infoTitle: "About This Map", infoLegendTitle: "Six Eras", infoFeaturesTitle: "Features",
    infoIntro: "Five centuries of Christianity in the Western Hemisphere — from the first Mass in Hispaniola and the Jesuit reductions, through the Puritans, the Great Awakenings and Latin American independence, to Azusa Street and the explosive growth of evangelical and Pentecostal churches from Brazil to Guatemala.",
    infoFeature1: "Places from Quebec to Tierra del Fuego, each with a short history",
    infoFeature2: "Filter by era, tradition (Catholic, Reformed, Baptist, Methodist, Pentecostal, Evangelical, other Protestant), theme, region or country — and color the map by era or tradition",
    infoFeature3: "Walk through each era in order with Previous / Next",
    infoFeature4: "Timeline and key figures panels",
    infoFeature5: "Full English and Spanish text, with sources for every event",
    infoVerse: '"After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues…" — Revelation 7:9',
    donateTitle: "Support This Project",
    donateText: "This interactive map was built to tell the story of the gospel in the Americas, north and south.",
    donateButton: "Donate", donateEmailLabel: "Feedback or questions?",
    sheetModernLabel: "Today:", sheetRegionLabel: "Region:",
    showingHistorical: "Showing: Historical Names", showingModern: "Showing: Modern Names",
    timelineTitle: "Historical Timeline", figuresTitle: "Key Figures",
    sourcesLabel: "Sources", infoSourcesTitle: "Sources",
    allTraditions: "All traditions", allRegions: "All regions & countries", allThemes: "All themes",
    regionsGroup: "Regions", countriesGroup: "Countries", colorBy: "Color", colorEra: "Era", colorTrad: "Tradition",
    clearFilters: "Clear filters", filtersLabel: "Filters", eventsWord: "events", placesWord: "places", noResults: "No events match these filters.",
    infoSourcesNote: "Every event lists its sources: books from the Logos Bible Software library (marked Logos; page numbers refer to the printed edition) and reputable references such as Britannica, the Dictionary of Canadian Biography, UNESCO, the National Park Service, university journals, archives and official church records. Main works consulted:",
  },
  es: {
    appTitle: "La Iglesia en las Américas", shortTitle: "Atlas Cristiano", appSubtitle: "De las misiones católicas a la explosión evangélica",
    splashVerse: '"Y será predicado este evangelio del reino en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin."', splashVerseRef: "Mateo 24:14",
    chipAll: "Todas las eras",
    regionAll: "Todo el continente", regionNorth: "EE. UU. y Canadá", regionSouth: "América Latina y el Caribe",
    btnTimeline: "Cronología", btnFigures: "Figuras", btnNames: "Nombres",
    infoTitle: "Sobre este mapa", infoLegendTitle: "Seis eras", infoFeaturesTitle: "Características",
    infoIntro: "Cinco siglos de cristianismo en el hemisferio occidental: desde la primera misa en La Española y las reducciones jesuitas, pasando por los puritanos, los Grandes Despertares y la independencia latinoamericana, hasta la calle Azusa y el crecimiento explosivo de las iglesias evangélicas y pentecostales de Brasil a Guatemala.",
    infoFeature1: "Lugares desde Quebec hasta Tierra del Fuego, cada uno con su historia",
    infoFeature2: "Filtre por era, tradición (católica, reformada, bautista, metodista, pentecostal, evangélica, otras protestantes), tema, región o país, y coloree el mapa por era o por tradición",
    infoFeature3: "Recorra cada era en orden con Anterior / Siguiente",
    infoFeature4: "Paneles de cronología y figuras clave",
    infoFeature5: "Textos completos en español e inglés, con fuentes para cada evento",
    infoVerse: '"Después de esto miré, y he aquí una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas…" — Apocalipsis 7:9',
    donateTitle: "Apoya este proyecto",
    donateText: "Este mapa interactivo fue creado para contar la historia del evangelio en las Américas, del norte y del sur.",
    donateButton: "Donar", donateEmailLabel: "¿Comentarios o preguntas?",
    sheetModernLabel: "Hoy:", sheetRegionLabel: "Región:",
    showingHistorical: "Mostrando: nombres históricos", showingModern: "Mostrando: nombres modernos",
    timelineTitle: "Cronología histórica", figuresTitle: "Figuras clave",
    sourcesLabel: "Fuentes", infoSourcesTitle: "Fuentes",
    allTraditions: "Todas las tradiciones", allRegions: "Todas las regiones y países", allThemes: "Todos los temas",
    regionsGroup: "Regiones", countriesGroup: "Países", colorBy: "Color", colorEra: "Era", colorTrad: "Tradición",
    clearFilters: "Quitar filtros", filtersLabel: "Filtros", eventsWord: "eventos", placesWord: "lugares", noResults: "Ningún evento coincide con estos filtros.",
    infoSourcesNote: "Cada evento indica sus fuentes: libros de la biblioteca de Logos Bible Software (marcados como Logos; las páginas corresponden a la edición impresa) y referencias de prestigio como Britannica, el Dictionary of Canadian Biography, la UNESCO, el Servicio de Parques Nacionales de EE. UU., revistas universitarias, archivos y documentos oficiales de las iglesias. Obras principales consultadas:",
  },
};

export function t(key) { return ui[lang]?.[key] || ui.en[key] || key; }

// Era fields: English on the era object, Spanish under era.es
export function eraText(eraId, field) {
  const era = eraIndex[eraId];
  if (!era) return "";
  if (lang === "es" && era.es?.[field]) return era.es[field];
  return era[field] || "";
}

const locById = {};
locations.forEach((l) => { locById[l.id] = l; });

// Location fields (name, modernName, region): null in English so callers fall back to the base field
export function locationText(locId, field) {
  if (lang !== "es") return null;
  return locById[locId]?.es?.[field] || null;
}

// Event/figure helper: pick the Spanish field when available
export function localized(obj, field) {
  if (lang === "es" && obj?.es?.[field]) return obj.es[field];
  return obj?.[field];
}
