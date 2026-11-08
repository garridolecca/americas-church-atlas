// ============================================================
// Taxonomy: traditions, themes, regions and countries.
// Every event is tagged with one or more traditions and zero or more themes.
// ============================================================

// Tradition palette chosen to be distinguishable on the light basemap and in the dark UI.
export const TRADITIONS = [
  { id: "C", color: [196, 154, 44], hex: "#C49A2C", en: "Catholic", es: "Católica" },
  { id: "R", color: [47, 109, 181], hex: "#2F6DB5", en: "Reformed & Presbyterian", es: "Reformada y presbiteriana" },
  { id: "B", color: [33, 145, 128], hex: "#219180", en: "Baptist", es: "Bautista" },
  { id: "M", color: [222, 116, 52], hex: "#DE7434", en: "Methodist & Wesleyan", es: "Metodista y wesleyana" },
  { id: "P", color: [205, 58, 72], hex: "#CD3A48", en: "Pentecostal & Charismatic", es: "Pentecostal y carismática" },
  { id: "E", color: [137, 99, 190], hex: "#8963BE", en: "Evangelical movements", es: "Movimientos evangélicos" },
  { id: "O", color: [104, 140, 84], hex: "#688C54", en: "Lutheran, Anglican & other Protestant", es: "Luterana, anglicana y otras protestantes" },
];
export const TRADITION_INDEX = Object.fromEntries(TRADITIONS.map((t) => [t.id, t]));

export const THEMES = [
  { id: "lib", en: "Religious liberty", es: "Libertad religiosa" },
  { id: "per", en: "Persecution & martyrdom", es: "Persecución y martirio" },
  { id: "rev", en: "Revival & awakening", es: "Avivamiento" },
  { id: "mis", en: "Missions & the Bible", es: "Misiones y la Biblia" },
  { id: "edu", en: "Education & scholarship", es: "Educación" },
  { id: "ind", en: "Indigenous & Afro-descendant peoples", es: "Pueblos indígenas y afrodescendientes" },
];

export const REGIONS = [
  { id: "north", en: "US & Canada", es: "EE. UU. y Canadá", countries: ["USA", "Canada"] },
  { id: "meso", en: "Mexico & Central America", es: "México y Centroamérica", countries: ["Mexico", "Guatemala", "El Salvador", "Nicaragua", "Costa Rica", "Panama"] },
  { id: "carib", en: "Caribbean", es: "Caribe", countries: ["Bahamas", "Dominican Republic", "Puerto Rico", "Cuba", "Jamaica", "Haiti", "Trinidad and Tobago", "Caribbean Netherlands"] },
  { id: "andes", en: "Andes & Northern South America", es: "Andes y norte de Sudamérica", countries: ["Colombia", "Venezuela", "Guyana", "Suriname", "Ecuador", "Peru", "Bolivia"] },
  { id: "brazil", en: "Brazil", es: "Brasil", countries: ["Brazil"] },
  { id: "cone", en: "Southern Cone", es: "Cono Sur", countries: ["Chile", "Argentina", "Uruguay", "Paraguay"] },
];

export const COUNTRY_ES = {
  USA: "Estados Unidos", Canada: "Canadá", Mexico: "México", Guatemala: "Guatemala", "El Salvador": "El Salvador",
  "Costa Rica": "Costa Rica", Panama: "Panamá", Nicaragua: "Nicaragua", "Puerto Rico": "Puerto Rico", Bahamas: "Bahamas", "Dominican Republic": "República Dominicana",
  Cuba: "Cuba", Jamaica: "Jamaica", Haiti: "Haití", "Trinidad and Tobago": "Trinidad y Tobago", "Caribbean Netherlands": "Caribe neerlandés", Colombia: "Colombia", Venezuela: "Venezuela", Guyana: "Guyana", Suriname: "Surinam",
  Ecuador: "Ecuador", Peru: "Perú", Bolivia: "Bolivia", Brazil: "Brasil", Chile: "Chile", Argentina: "Argentina",
  Uruguay: "Uruguay", Paraguay: "Paraguay",
};

export const COUNTRY_REGION = {};
REGIONS.forEach((r) => r.countries.forEach((c) => { COUNTRY_REGION[c] = r.id; }));

// "<locationId>|<year>": [traditions, themes]
export const TAGS = {
  // North America, 1942-2023 (na-recent.js)
  "pittsburgh|1967": ["CP", "rev"], "chicago|1973": ["E", ""], "chicago|1978": ["E", ""], "los-angeles|1967": ["P", "mis"],
  "costa-mesa|1971": ["E", ""], "wheaton|1995": ["E", ""], "atlanta|1995": ["B", "ind"], "houston|2005": ["P", ""],
  "washington|1976": ["E", "mis"], "washington|2014": ["EPC", ""], "washington|2016": ["E", ""], "washington|2018": ["EB", "rev"],
  "birmingham|1973": ["R", ""], "portsmouth|1960": ["EP", "mis"], "van-nuys|1960": ["OP", "rev"], "wilmore|1970": ["M", "rev edu"],
  "wilmore|2023": ["M", "rev edu"], "lynchburg|1971": ["B", "edu"], "lynchburg|1979": ["B", ""], "tustin|1973": ["P", "mis"],
  "south-barrington|1975": ["E", ""], "lake-forest|1980": ["B", ""], "anaheim|1982": ["P", "rev"], "arcadia|1977": ["E", ""],
  "plains|1976": ["B", ""], "pensacola|1995": ["P", "rev"], "boulder|1990": ["E", "rev ind"], "kansas-city|1999": ["P", "rev"],
  "sacramento|2001": ["P", ""], "grand-rapids|1970": ["E", ""], "grand-rapids|1978": ["E", "mis"], "boone|1970": ["EB", "mis"],
  "americus|1942": ["B", "ind"], "americus|1976": ["E", ""], "deerfield|1971": ["E", ""], "bedford-tx|2009": ["O", ""],
  "fort-mill|1987": ["P", ""],
  // North America, 1888-1957 (na-modern.js)
  "los-angeles|1908": ["E", "edu mis"], "los-angeles|1913": ["P", ""], "los-angeles|1923": ["P", "rev"], "los-angeles|1951": ["P", "rev"],
  "new-amsterdam|1909": ["E", ""], "new-amsterdam|1917": ["E", "rev"], "new-amsterdam|1922": ["BR", ""], "new-amsterdam|1957": ["EB", "rev"],
  "philadelphia|1919": ["EB", ""], "philadelphia|1929": ["R", "edu"], "dallas|1912": ["P", "rev"], "dallas|1924": ["E", "edu"],
  "dallas|1941": ["E", "mis"], "memphis|1925": ["B", "mis"], "chicago|1941": ["E", "edu mis"], "chicago|1944": ["E", "rev"],
  "st-louis|1916": ["P", ""], "st-louis|1930": ["O", "mis"], "boston|1889": ["B", "edu mis"], "richmond|1888": ["B", "mis"],
  "nashville|1891": ["B", "edu"], "topeka|1901": ["P", "rev"], "zion|1901": ["P", ""], "cleveland-tn|1906": ["P", ""],
  "dunn|1907": ["P", "rev"], "pilot-point|1908": ["M", ""], "san-pedro|1933": ["E", "mis"], "sulphur-springs|1934": ["E", "mis ind edu"],
  "long-beach|1937": ["B", "mis rev"], "collingswood|1941": ["R", ""], "tulsa|1947": ["P", "rev"], "pittsburgh|1948": ["P", "rev"],
  "portland|1950": ["E", "mis"], "ucla|1951": ["E", "mis"], "janesville|1899": ["E", "mis"],
  // The African American church (na-black.js)
  "philadelphia|1787": ["M", "ind"], "philadelphia|1794": ["MO", "ind"], "philadelphia|1819": ["M", "ind"], "philadelphia|1924": ["P", "ind"],
  "new-amsterdam|1809": ["B", "ind"], "new-amsterdam|1821": ["M", "ind"], "new-amsterdam|1843": ["M", "ind"], "new-amsterdam|1868": ["M", "rev ind mis"],
  "new-amsterdam|1945": ["B", "ind"], "boston|1806": ["B", "ind edu"], "richmond|1821": ["B", "mis ind"], "augusta|1867": ["B", "edu ind"],
  "atlanta|1881": ["B", "edu ind"], "atlanta|1957": ["B", "lib ind"], "washington|1909": ["B", "edu ind"], "washington|1996": ["B", "per ind"],
  "chicago|1920": ["B", "ind"], "chicago|1932": ["B", "ind"], "cincinnati|1961": ["B", "lib ind"], "memphis|1968": ["BP", "lib ind"],
  "rutland|1788": ["R", "ind"], "charleston|1822": ["M", "per ind"], "charleston|1865": ["M", "ind"], "charleston|2015": ["M", "per ind"],
  "southampton|1831": ["B", "per ind"], "buffalo|1843": ["R", "ind"], "albany|1846": ["R", "edu ind mis"], "wilberforce|1863": ["M", "edu ind"],
  "raleigh|1865": ["B", "edu ind"], "jackson-tn|1870": ["M", "ind"], "nashville|1871": ["R", "edu ind"], "mendenhall|1960": ["E", "ind"],
  "birmingham|1963": ["B", "per lib ind"], "selma|1965": ["M", "lib ind"], "urbana|1970": ["E", "mis ind"], "dallas|1996": ["P", ""],
  // Early America, 1663-1887 (na-early.js)
  "cambridge-ma|1663": ["R", "mis ind"], "new-brunswick|1726": ["R", "rev"], "boston|1740": ["OR", "rev"], "enfield|1741": ["R", "rev"],
  "philadelphia|1741": ["R", "rev"], "crossweeksung|1745": ["R", "mis ind rev"], "princeton|1746": ["R", "edu"], "montauk|1759": ["R", "mis ind"],
  "hanover|1769": ["R", "edu ind"], "new-amsterdam|1766": ["M", ""], "philadelphia|1771": ["M", "mis"], "richmond|1786": ["B", "lib per"],
  "danbury|1802": ["B", "lib"], "new-haven|1802": ["R", "rev edu"], "logan-county|1800": ["RM", "rev"], "salem|1812": ["RB", "mis"],
  "andover|1808": ["R", "edu mis"], "princeton|1812": ["R", "edu"], "philadelphia|1824": ["E", "edu mis"], "new-amsterdam|1825": ["E", "mis"],
  "boston|1826": ["E", ""], "oberlin|1833": ["R", "edu rev ind"], "new-amsterdam|1835": ["M", "rev"], "lexington|1832": ["E", ""],
  "waiilatpu|1836": ["R", "mis ind"], "cincinnati|1834": ["R", "edu ind"], "battle-creek|1863": ["O", ""], "new-amsterdam|1844": ["M", "ind"],
  "boston|1851": ["E", ""], "philadelphia|1861": ["E", "rev"], "vineland|1867": ["M", "rev"], "chautauqua|1874": ["M", "edu"],
  "cleveland|1874": ["E", ""], "new-amsterdam|1880": ["M", "mis"], "old-orchard|1887": ["E", "mis"], "pekin|1860": ["M", ""],
  "utica|1843": ["M", "ind"], "wheaton|1860": ["E", "edu"], "new-amsterdam|1873": ["E", ""],
  // Mexico, Central America, the Caribbean, South America (mx-ca.js, caribbean.js, sa-more.js)
  "mexico-city|1914": ["RM", "mis"], "mexico-city|1930": ["M", ""], "mexico-city|2018": ["E", ""], "guadalajara|1926": ["P", ""],
  "chiapas|2000": ["EP", "ind"], "guatemala-city|1976": ["EP", "rev"], "guatemala-city|1991": ["EP", ""], "guatemala-city|2011": ["P", ""],
  "guatemala-city|2015": ["E", ""], "san-jose-cr|1923": ["E", "edu"], "san-jose-cr|2018": ["EP", ""], "bluefields|1981": ["O", "per ind"],
  "managua|2024": ["EP", "per"], "san-salvador-sv|1930": ["P", "mis"], "san-juan-pr|1963": ["P", "mis"], "havana|2018": ["EMBP", ""],
  "ponce|1916": ["P", "mis rev"], "camaguey|1965": ["CBMP", "per"], "santiago-de-cuba|1957": ["B", ""], "matanzas|1946": ["RMO", "edu"],
  "st-elizabeth|1860": ["OB", "rev ind"], "morant-bay|1865": ["B", "per ind"], "san-fernando-tt|1868": ["R", "mis edu ind"], "port-au-prince|2010": ["BE", ""],
  "cap-haitien|1950": ["E", "mis"], "bonaire|1964": ["E", "mis"], "sao-leopoldo|1968": ["O", ""], "buenos-aires|1992": ["P", "rev"],
  "buenos-aires|2018": ["EC", ""], "caracas|2024": ["EP", ""], "sao-paulo|2014": ["P", ""], "lima|2006": ["E", ""],
  "rio|2025": ["CEP", ""], "vitoria|1978": ["R", "per"], "campinas|1969": ["R", "edu"],
  "atlanta|1895": ["B", "ind"], "augusta|1845": ["B", ""], "bahia|1549": ["C", "mis"], "bahia|1882": ["B", "mis"],
  "baltimore|1784": ["M", "mis"], "baltimore|1789": ["C", ""], "belem|1911": ["P", "rev"], "bethlehem|1741": ["O", "mis"],
  "bogota|1856": ["R", "mis"], "bogota|1948": ["EP", "per"], "bogota|1969": ["E", "mis"], "bogota|1983": ["P", "rev"],
  "bogota|1991": ["EP", "lib"], "boston|1630": ["R", ""], "brasilia|1987": ["EP", "lib"], "bucaramanga|1937": ["P", "mis per"],
  "buenos-aires|1818": ["BE", "mis edu"], "buenos-aires|1867": ["M", "lib"], "buenos-aires|1881": ["B", "lib"],
  "buenos-aires|1954": ["P", "rev"], "buenos-aires|1969": ["RMO", "edu"], "buenos-aires|1977": ["E", "rev"],
  "buenos-aires|2013": ["C", ""], "cajamarca|1532": ["C", "ind"], "callao|1890": ["ME", "lib per"],
  "cane-ridge|1801": ["RMB", "rev"], "caracas|1900": ["R", "mis"], "chaco|1927": ["O", "mis ind"],
  "chamula|1974": ["EP", "per ind"], "chiapas|1545": ["C", "ind"], "chicago|1886": ["E", "edu mis"], "chicago|1910": ["P", "rev"],
  "chubut|1865": ["RO", "lib"], "cochabamba|1970": ["E", ""], "colonia-valdense|1857": ["R", ""], "colta|1970": ["E", "ind rev per"],
  "cordoba|1767": ["C", "edu"], "costa-mesa|1968": ["E", "rev"], "curaray|1956": ["E", "per mis ind"], "cusco|1537": ["C", ""],
  "cusco|1650": ["C", "ind"], "cusco|1780": ["C", "ind"], "dayton|1925": ["E", ""], "demerara|1823": ["R", "per ind"],
  "dolores|1810": ["C", ""], "el-paso|1923": ["P", ""], "el-paso|2022": ["EP", ""], "fort-caroline|1565": ["R", "per"],
  "guadalajara|1927": ["C", "per"], "guatemala-city|1882": ["R", "mis lib"], "guatemala|1917": ["E", "mis ind"],
  "havana|1992": ["EPB", "rev lib"], "hot-springs|1914": ["P", ""], "houston|1979": ["B", ""], "huamanga|1564": ["C", "ind"],
  "huamanga|1984": ["EP", "per"], "huarochiri|1609": ["C", "ind per"], "huronia|1649": ["C", "per ind mis"], "isabela|1494": ["C", ""],
  "jamestown|1607": ["O", ""], "juli|1612": ["C", "ind edu mis"], "kingston|1783": ["B", "mis ind"], "la-plata|1984": ["P", "rev"],
  "lima|1551": ["C", "edu"], "lima|1570": ["C", "per"], "lima|1583": ["C", "ind mis"], "lima|1617": ["C", ""], "lima|1639": ["C", "ind"],
  "lima|1822": ["BE", "edu mis"], "lima|1915": ["E", "lib"], "lima|1917": ["R", "edu"], "lima|1971": ["C", ""], "lima|2017": ["CE", ""],
  "los-angeles|1906": ["P", "rev"], "los-angeles|1910": ["E", ""], "los-angeles|1949": ["EB", "rev"], "medellin|1968": ["C", ""],
  "memphis|1907": ["P", "ind"], "mexico-city|1524": ["C", "mis ind"], "mexico-city|1531": ["C", "ind"], "mexico-city|1539": ["C", "edu"],
  "mexico-city|1571": ["C", "per"], "mexico-city|1857": ["C", "lib"], "monte-grande|1825": ["R", "lib"], "montego-bay|1831": ["B", "ind lib"],
  "monterrey|1864": ["B", "mis"], "monterrey|1866": ["R", "mis edu"], "montgomery|1955": ["B", "lib ind"], "neshaminy|1740": ["R", "edu rev"],
  "new-amsterdam|1628": ["R", "lib"], "new-amsterdam|1816": ["E", "mis"], "new-amsterdam|1857": ["E", "rev"], "northampton|1734": ["R", "rev"],
  "northfield|1886": ["E", "mis"], "oruro|1898": ["B", "mis edu"], "panama|1916": ["E", "mis"], "paramaribo|1735": ["O", "mis ind"],
  "pasadena|1947": ["E", "edu"], "philadelphia|1707": ["B", ""], "philadelphia|1814": ["B", "mis"], "philadelphia|1816": ["M", "ind"],
  "plateria|1911": ["O", "edu ind"], "plymouth|1620": ["R", "lib"], "providence|1638": ["B", "lib"], "quebec|1639": ["C", "edu ind"],
  "quebec|1674": ["C", ""], "quito|1931": ["E", "mis"], "recife|1636": ["R", "ind"], "rio|1557": ["R", ""], "rio|1558": ["R", "per"],
  "rio|1858": ["RE", "per mis"], "rio|1862": ["R", "mis"], "rio|1977": ["P", ""], "rochester|1830": ["ER", "rev"],
  "san-diego|1769": ["C", "ind mis"], "san-ignacio|1609": ["C", "ind mis"], "san-jose-cr|1921": ["E", "mis"], "san-salvador-sv|1980": ["C", "per"],
  "san-salvador|1492": ["C", ""], "sandy-creek|1755": ["B", "rev"], "santa-fe|1680": ["C", "ind per"], "santiago|1865": ["ER", "lib"],
  "santiago|1884": ["E", "lib"], "santiago|1890": ["M", "per mis"], "santiago|1925": ["EC", "lib"], "santiago|1932": ["PM", ""], "santiago|1975": ["PM", ""],
  "santiago|1999": ["EPB", "lib"], "santiago|2024": ["CE", ""], "santo-domingo|1511": ["C", "ind"], "santo-domingo|1541": ["C", ""],
  "sao-leopoldo|1824": ["O", "lib"], "sao-miguel|1756": ["C", "ind per"], "sao-paulo|1554": ["C", "mis ind edu"], "sao-paulo|1870": ["R", "edu"],
  "sao-paulo|1903": ["R", ""], "sao-paulo|1910": ["P", ""], "sao-paulo|1953": ["P", "rev"], "sao-paulo|1956": ["P", "rev"],
  "sao-paulo|1993": ["PE", ""], "sao-paulo|2010": ["EP", ""], "savannah|1740": ["EM", "rev edu"], "savannah|1788": ["B", "ind per"],
  "silver-bluff|1775": ["B", "ind"], "st-augustine|1565": ["C", "mis"], "st-louis|1942": ["E", ""], "st-marys|1649": ["C", "lib"],
  "three-hills|1922": ["E", "edu mis"], "tierra-del-fuego|1851": ["O", "mis per ind"], "toronto|1925": ["MR", ""],
  "valparaiso|1847": ["R", "lib"], "valparaiso|1878": ["M", "edu mis"], "valparaiso|1909": ["PM", "rev"], "washington|1956": ["E", ""],
  "williamstown|1806": ["RE", "mis rev"],
  // Latin American milestones (latam.js)
  "mexico-city|1872": ["RM", "mis lib"], "mexico-city|1992": ["EC", "lib"], "buenos-aires|1949": ["E", ""],
  "lima|1961": ["E", ""], "lima|1982": ["MOEP", ""], "lima|1990": ["EB", "lib"], "huamanga|1992": ["E", "per ind mis"],
  "rio|1974": ["EB", "rev"], "panama|1982": ["EP", ""], "san-salvador-sv|1977": ["P", "rev"], "havana|1929": ["E", "mis"],
  "guatemala-city|1982": ["EP", ""], "montevideo|1925": ["E", "mis"], "tetelcingo|1935": ["E", "mis ind edu"],
  "yarinacocha|1946": ["E", "mis ind edu"], "bluefields|1849": ["O", "mis ind rev"], "managua|1972": ["EB", ""],
  "san-juan-pr|1898": ["RBMO", "mis"], "villa-aldama|1914": ["P", "rev"],
  // Peru and the Dominican Republic (peru-rd.js)
  "lima|1651": ["C", "ind"], "lima|1896": ["ER", "mis"], "lima|1906": ["M", "edu"], "lima|1922": ["RE", "mis"],
  "lima|1940": ["E", "lib"], "lima|2010": ["E", "lib"], "lima|2016": ["EC", ""], "pacasmayo|1914": ["M", "mis ind edu"],
  "lamas|1932": ["E", "mis edu ind"], "huanta|1984": ["R", "per ind"], "curahuasi|2007": ["E", "mis ind"],
  "santo-domingo|1538": ["C", "edu"], "santo-domingo|1922": ["RM", "mis"], "santo-domingo|1960": ["C", "lib per"],
  "santo-domingo|1979": ["C", ""], "santo-domingo|1992": ["C", "mis"], "santo-domingo|2019": ["EP", ""],
  "samana|1824": ["M", "ind lib"], "santiago-caballeros|1889": ["M", "mis"], "san-pedro-macoris|1897": ["OM", "ind"],
  "san-pedro-macoris|1916": ["P", "mis"], "higuey|1971": ["C", ""],
  // South America, deeper (southamerica.js)
  "guayaquil|1896": ["E", "mis lib"], "quito|1980": ["E", "ind"], "la-paz|1907": ["M", "edu lib"],
  "cochabamba|1908": ["E", "mis ind edu"], "barquisimeto|1919": ["P", "rev"], "puerto-ayacucho|2005": ["E", "mis ind"],
  "pomeroon|1840": ["O", "mis ind"], "paramaribo|1857": ["O", "mis ind"], "montevideo|1879": ["M", "edu"],
  "montevideo|1917": ["EC", "lib"], "montevideo|1985": ["M", ""], "chaco|1889": ["O", "mis ind"],
  "bogota|1953": ["EC", "per lib"], "bogota|2016": ["EP", ""], "piracicaba|1881": ["M", "edu"],
  "sao-paulo|1985": ["RC", "per"], "dourados|1928": ["RM", "mis ind edu"], "buenos-aires|1983": ["MC", "per"],
  "saenz-pena|1960": ["PO", "ind rev"], "santiago|1973": ["OC", "per"],
  // Brazil (sa-brazil.js)
  "rio|1819": ["O", "lib"], "rio|1837": ["M", "mis"], "sao-paulo|1865": ["R", "mis"], "santa-barbara|1871": ["B", ""],
  "rio|1888": ["R", ""], "rio|1890": ["EC", "lib"], "porto-alegre|1890": ["O", "mis"], "bahia|1907": ["B", ""],
  "aquidauana|1912": ["E", "mis ind"], "natal|1930": ["P", ""], "rio|1960": ["B", "rev"], "sao-paulo|1962": ["P", "rev"],
  "rio|1980": ["P", ""], "sao-paulo|1987": ["EP", "mis"], "sao-paulo|1989": ["P", ""], "aparecida|1995": ["PC", ""],
  "belo-horizonte|1998": ["BP", "rev"], "aparecida|2007": ["C", "mis"], "brasilia|2010": ["P", ""], "belem|2011": ["P", ""],
  "rio|2016": ["P", ""], "brasilia|2018": ["EP", ""], "brasilia|2021": ["R", ""],
  // River Plate (sa-plata.js)
  "buenos-aires|1831": ["O", ""], "buenos-aires|1890": ["M", "mis"], "buenos-aires|1899": ["O", ""], "buenos-aires|1909": ["P", "rev"],
  "buenos-aires|1913": ["M", "edu"], "buenos-aires|1967": ["PE", "rev"], "buenos-aires|1975": ["M", ""], "buenos-aires|1978": ["E", "lib"],
  "buenos-aires|1982": ["E", ""], "buenos-aires|2010": ["EC", ""], "buenos-aires|2024": ["E", "lib"], "montevideo|1845": ["O", ""],
  "chaco|1935": ["O", "mis ind"], "esperanza|1856": ["RO", ""], "rosario|1875": ["M", "edu"], "embarcacion|1914": ["O", "mis ind"],
  "asuncion|1920": ["O", "edu"],
  // Chile, Bolivia, Peru, Ecuador (sa-andes.js)
  "valparaiso|1825": ["O", "lib"], "santiago|1968": ["P", "edu"], "santiago|2008": ["EP", "lib"], "la-paz|1924": ["O", "mis ind"],
  "la-paz|2009": ["EC", "lib"], "la-paz|2019": ["EC", ""], "lima|1979": ["E", "mis"], "quito|1959": ["E", "mis"],
  "quito|1992": ["EP", "mis ind"], "osorno|1863": ["O", ""], "temuco|1895": ["O", "mis ind edu"], "temuco|1908": ["B", ""],
  "santa-cruz|1954": ["O", ""], "tiwaeno|1958": ["E", "mis ind"],
  // Colombia, Venezuela, Guianas (sa-north.js)
  "bogota|1825": ["E", "mis"], "bogota|1869": ["R", "edu"], "bogota|1950": ["E", "per"], "bogota|1981": ["E", "per"],
  "bogota|1994": ["E", "lib"], "bogota|2000": ["P", ""], "demerara|1808": ["R", "ind mis"], "demerara|1885": ["R", "ind edu"],
  "paramaribo|1863": ["O", "lib ind"], "san-jose-cr|1960": ["E", "rev mis"], "san-andres|1844": ["B", "ind lib"],
  "lomalinda|1962": ["E", "mis ind"], "maracaibo|1906": ["E", "mis"],
};
