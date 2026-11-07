# The Church in the Americas — La Iglesia en las Américas

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

- 58 locations from Quebec to Tierra del Fuego, with 79 events and 34 key figures
- Filter by **era** and by **region** (US & Canada / Latin America & Caribbean)
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

## Further reading

For more on this history, see Justo L. González & Ondina González, *Christianity in Latin America*; Mark Noll, *A History of Christianity in the United States and Canada*; Tim Dowley, *Atlas of Christian History*.

## Related atlases

- [Old Testament Atlas](https://garridolecca.github.io/old-testament-atlas/)
- [Paul's Journeys](https://garridolecca.github.io/pauls-journeys/)
- [Reformation Atlas](https://garridolecca.github.io/reformation-atlas/)
- [General Baptist Atlas](https://garridolecca.github.io/general-baptist-atlas/)
- [Christian Persecution Map](https://garridolecca.github.io/christian-persecution-map/)
