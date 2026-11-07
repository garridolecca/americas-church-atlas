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
    infoFeature2: "Filter by era, or by region: US & Canada / Latin America & Caribbean",
    infoFeature3: "Walk through each era in order with Previous / Next",
    infoFeature4: "Timeline and key figures panels",
    infoFeature5: "Full English and Spanish text",
    infoVerse: '"After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues…" — Revelation 7:9',
    donateTitle: "Support This Project",
    donateText: "This interactive map was built to tell the story of the gospel in the Americas, north and south.",
    donateButton: "Donate", donateEmailLabel: "Feedback or questions?",
    sheetModernLabel: "Today:", sheetRegionLabel: "Region:",
    showingHistorical: "Showing: Historical Names", showingModern: "Showing: Modern Names",
    timelineTitle: "Historical Timeline", figuresTitle: "Key Figures",
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
    infoFeature2: "Filtre por era o por región: EE. UU. y Canadá / América Latina y el Caribe",
    infoFeature3: "Recorra cada era en orden con Anterior / Siguiente",
    infoFeature4: "Paneles de cronología y figuras clave",
    infoFeature5: "Textos completos en español e inglés",
    infoVerse: '"Después de esto miré, y he aquí una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas…" — Apocalipsis 7:9',
    donateTitle: "Apoya este proyecto",
    donateText: "Este mapa interactivo fue creado para contar la historia del evangelio en las Américas, del norte y del sur.",
    donateButton: "Donar", donateEmailLabel: "¿Comentarios o preguntas?",
    sheetModernLabel: "Hoy:", sheetRegionLabel: "Región:",
    showingHistorical: "Mostrando: nombres históricos", showingModern: "Mostrando: nombres modernos",
    timelineTitle: "Cronología histórica", figuresTitle: "Figuras clave",
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
