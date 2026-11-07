# The Church in the Americas — La Iglesia en las Américas

*[Leer en español ↓](#español)*

An interactive, bilingual (English / Spanish) atlas of five centuries of Christianity in the Western Hemisphere — **north and south** — from the first Catholic missions to the explosive growth of evangelical and Pentecostal churches.

**[View Live Demo](https://garridolecca.github.io/americas-church-atlas/)**

## Six Eras

| Era | Dates | Highlights |
|-----|-------|-----------|
| Conquest & Catholic Missions | 1492–1600 | Montesinos' sermon, Las Casas, the Twelve Franciscans, first Jesuits in Bahia, Third Council of Lima, the Guanabara Confession |
| Colonial Christendom & First Protestants | 1600–1730 | Quebec and the Canadian martyrs, Jesuit reductions, Jamestown, Plymouth, Boston, Roger Williams, Dutch Brazil, Philadelphia |
| Awakenings & Expulsions | 1730–1800 | Edwards, Whitefield, Separate Baptists, first Black churches, George Liele in Jamaica, California missions, expulsion of the Jesuits |
| Independence & Revival | 1800–1870 | Cane Ridge, Hidalgo, Diego Thomson, Finney, the Baptist War, the SBC, Kalley and Simonton in Brazil, Allen Gardiner, Mexico's Reform |
| Missions & Pentecost | 1870–1950 | Moody, Azusa Street, Chile 1909, Assemblies of God in Belém, Panama 1916, Cameron Townsend, the Cristero War |
| The Evangelical Explosion | 1950–today | Billy Graham, Montgomery, the Auca martyrs, Medellín, the Latin American Theological Fraternity, Romero, Pope Francis |

## Features

- 110 locations from Quebec to Tierra del Fuego, with 196 events and 64 key figures
- **A photo for every event** — 196 freely licensed images from Wikimedia Commons (public domain or Creative Commons), each credited with its author and license and linked to its Commons file page
- **Every event cites its sources** — 543 citations, and every event links to at least one reputable web source; including 65 page-referenced citations of books in the Logos Bible Software library and reputable references (Britannica, Dictionary of Canadian Biography, UNESCO, National Park Service, university journals, archives, official church records)
- **Evangelical history in depth:** 41 additional evangelical milestones — the Triennial Convention, American Bible Society, Fulton Street Prayer Revival, Student Volunteer Movement, National Baptist Convention, Church of God in Christ, Assemblies of God, NAE, Fuller Seminary, Christianity Today, the Jesus Movement, Latino Pentecostalism; and across Latin America the Moravians in Suriname, the Demerara Martyr, Trumbull in Chile, the Waldensians of Uruguay, the Welsh chapels of Patagonia, Mexico's first evangelical church, Bagby in Bahia, Pablo Besson, Barrios and the Guatemala mission, Canadian Baptists in Bolivia, Venezuela's El Redentor, the Christian Congregation and Brazil for Christ, Mennonites in the Chaco, HCJB radio, the Latin America Mission, Colombia's La Violencia, CLADE I, the Quichua churches, the Chamula expulsions, Chile's Evangelical Cathedral, Luis Palau, Cuba's house churches and the 2024 Pew data
- **Chile, Argentina, Brazil & Colombia in depth:** Chile's 1865 law on dissenters, the secular laws (1884), separation of church and state (1925), the Pentecostal schism of 1932, the Ley de Culto (1999); Argentina's Scots of Monte Grande (1825), the first Protestant sermon in Spanish (1867), the Tommy Hicks crusade (1954), ISEDET; Brazil's Lutheran immigrants (1824), Mackenzie (1870), the Independent Presbyterian Church (1903), the Foursquare tents (1953), the evangelical caucus (1987), the March for Jesus (1993); Colombia's United Pentecostal Church (1937), the Misión Carismática Internacional (1983) and the Constitution of 1991
- **Expanded Peru:** 20 events from Cajamarca (1532) and the first bishop of Cusco to Taki Onqoy, the Third Council of Lima, Santa Rosa and San Martín de Porres, the Juli Aymara press, the extirpation of idolatries, Túpac Amaru II, Penzotti's imprisonment, freedom of worship (1915), the Adventist schools of Lake Titicaca, the evangelical churches of Ayacucho during the internal conflict, and the 2017 census
- **Filter by era, tradition, theme and region/country** — every filter shows live counts, and filters combine (e.g. *Reformed & Presbyterian* + *Chile*, or *Pentecostal* + *Southern Cone* + *Revival*)
  - Traditions: Catholic · Reformed & Presbyterian · Baptist · Methodist & Wesleyan · Pentecostal & Charismatic · Evangelical movements · Lutheran, Anglican & other Protestant
  - Themes: Religious liberty · Persecution & martyrdom · Revival · Missions & the Bible · Education · Indigenous & Afro-descendant peoples
  - Regions: US & Canada · Mexico & Central America · Caribbean · Andes & Northern South America · Brazil · Southern Cone — or any of 23 countries
- **Color the map by era or by tradition**; each event card shows its tradition and theme tags
- Walk each era in chronological order with Previous / Next
- Timeline and key-figures panels
- Full English and Spanish text for every event

## Tech Stack

- ArcGIS Maps SDK for JavaScript 5.0 + Calcite Components
- Esri World Light Gray Canvas basemap tiles (no API key required)
- Vanilla JavaScript ES modules, no build step

## Run locally

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Project Structure

```
js/data.js   # eras, locations, events (EN + ES), routes, figures
js/i18n.js   # UI strings and language helpers
js/app.js    # map, filters, panels
```

## Sources

Each event in the app lists its own sources (expand **Sources** under any event). The main works consulted are:

- Mark A. Noll, *A History of Christianity in the United States and Canada* (Eerdmans, 1992) — Logos
- Mark A. Noll, *The Old Religion in a New World* (Eerdmans, 2002) — Logos
- Leonard Woolsey Bacon, *A History of American Christianity* (1897) — Logos
- Tim Dowley, *Atlas of Christian History* (Fortress, 2016) — Logos
- Michael A. G. Haykin, ed., *The Essential Lexham Dictionary of Church History* (2022) — Logos
- Leroy Fitts, *A History of Black Baptists* (1985) — Logos
- H. Leon McBeth, *The Baptist Heritage* (1987) — Logos
- Haykin & Robinson, *To the Ends of the Earth: Calvin's Missional Vision and Legacy* (2014) — Logos
- Carl F. H. Henry, *Architect of Evangelicalism: Essential Essays* (2019) — Logos
- Pew Research Center, *Religion in Latin America* (2014)

### Further reading

For more on this history, see Justo L. González & Ondina González, *Christianity in Latin America*; Mark Noll, *A History of Christianity in the United States and Canada*; Tim Dowley, *Atlas of Christian History*.

## Related atlases

- [Old Testament Atlas](https://garridolecca.github.io/old-testament-atlas/)
- [Paul's Journeys](https://garridolecca.github.io/pauls-journeys/)
- [Reformation Atlas](https://garridolecca.github.io/reformation-atlas/)
- [General Baptist Atlas](https://garridolecca.github.io/general-baptist-atlas/)
- [Christian Persecution Map](https://garridolecca.github.io/christian-persecution-map/)

---

## Español

# La Iglesia en las Américas

Un atlas interactivo y bilingüe (español / inglés) de cinco siglos de cristianismo en el hemisferio occidental, **del norte y del sur**: desde las primeras misiones católicas hasta el crecimiento explosivo de las iglesias evangélicas y pentecostales.

**[Ver el mapa](https://garridolecca.github.io/americas-church-atlas/)**

### Seis eras

| Era | Fechas | Puntos destacados |
|-----|--------|-------------------|
| Conquista y misiones católicas | 1492–1600 | El sermón de Montesinos, Las Casas, los doce franciscanos, los primeros jesuitas en Bahía, el Tercer Concilio Limense, la Confesión de Guanabara |
| Cristiandad colonial y primeros protestantes | 1600–1730 | Quebec y los mártires canadienses, las reducciones jesuitas, Jamestown, Plymouth, Boston, Roger Williams, el Brasil holandés, Filadelfia |
| Avivamientos y expulsiones | 1730–1800 | Edwards, Whitefield, los bautistas separados, las primeras iglesias afroamericanas, George Liele en Jamaica, las misiones de California, la expulsión de los jesuitas |
| Independencia y avivamiento | 1800–1870 | Cane Ridge, Hidalgo, Diego Thomson, Finney, la 'guerra bautista', la Convención Bautista del Sur, Kalley y Simonton en Brasil, Allen Gardiner, la Reforma mexicana |
| Misiones y Pentecostés | 1870–1950 | Moody, la calle Azusa, Chile 1909, las Asambleas de Dios en Belém, Panamá 1916, Cameron Townsend, la Guerra Cristera |
| La explosión evangélica | 1950–hoy | Billy Graham, Montgomery, los mártires de Ecuador, Medellín, la Fraternidad Teológica Latinoamericana, monseñor Romero, el papa Francisco |

### Características

- 110 lugares desde Quebec hasta Tierra del Fuego, con 196 eventos y 64 figuras clave
- **Una foto para cada evento**: 196 imágenes de licencia libre de Wikimedia Commons (dominio público o Creative Commons), cada una con su autor, su licencia y un enlace a su página en Commons
- **Cada evento cita sus fuentes**: 543 citas, y cada evento enlaza al menos una fuente web de prestigio; entre ellas 65 de libros de la biblioteca de Logos Bible Software con número de página, y referencias de prestigio (Britannica, UNESCO, revistas universitarias, archivos y documentos oficiales)
- **Historia evangélica en profundidad:** 41 hitos evangélicos más en Norteamérica, Centroamérica, el Caribe y Sudamérica (Surinam, Guyana, Uruguay, Patagonia, Bolivia, Venezuela, Colombia, Ecuador, Paraguay, Chile, Argentina, Brasil)
- **Perú ampliado:** 20 eventos, de Cajamarca (1532) al censo de 2017
- Filtros combinables por **era, tradición, tema y región o país**, con conteos en vivo, y mapa coloreado por era o por tradición
- Recorrido cronológico de cada era con Anterior / Siguiente
- Paneles de cronología y figuras clave
- Todos los textos en español e inglés
