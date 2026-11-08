// ============================================================
// Peoples of the United States: Native American, Latino and Asian American Christianity,
// immigrant churches and the first protests against slavery.
// Merged into the main dataset by data.js. Every event carries its sources.
// ============================================================
import { w } from "./sources.js";

function ev(era, year, figure, title, description, titleEs, descriptionEs, sources) {
  return { era, year, figure, title, description, es: { title: titleEs, description: descriptionEs }, sources };
}
const wiki = (title, slug) => w(`Wikipedia, "${title}"`, "https://en.wikipedia.org/wiki/" + (slug || title.replace(/ /g, "_")));
const loc = (id, name, place, region, lat, lng, placeEs, regionEs, events) =>
  ({ id, name, modernName: `${place}, USA`, region, lat, lng, significance: "minor", zone: "north",
     es: { name, modernName: `${placeEs || place}, EE. UU.`, region: regionEs }, events });

export const NP_EVENTS = {
  "new-amsterdam": [
    ev(6, 1958, "David Wilkerson", "The Cross and the Switchblade",
      "In 1958 David Wilkerson, a young Assemblies of God pastor from rural Pennsylvania, comes to New York after reading about a gang murder and begins preaching to gang members and addicts in Brooklyn and Harlem. Among his converts was Nicky Cruz, a Puerto Rican gang leader who became an evangelist. In 1960 Wilkerson founded Teen Challenge, a faith-based programme for addicts; his 1962 book The Cross and the Switchblade sold millions of copies. Teen Challenge — 'Desafío Juvenil' — spread to Puerto Rico and across Latin America.",
      "La cruz y el puñal",
      "En 1958 David Wilkerson, joven pastor de las Asambleas de Dios de la Pensilvania rural, llega a Nueva York tras leer sobre un asesinato cometido por una pandilla y comienza a predicar a pandilleros y adictos en Brooklyn y Harlem. Entre sus conversos estuvo Nicky Cruz, líder de pandilla puertorriqueño que llegó a ser evangelista. En 1960 Wilkerson fundó Teen Challenge, un programa de rehabilitación basado en la fe; su libro de 1962 La cruz y el puñal vendió millones de ejemplares. Teen Challenge — «Desafío Juvenil» — se extendió a Puerto Rico y por toda América Latina.",
      [wiki("Global Teen Challenge"),
       w("U.S. House Ways and Means Committee, testimony on Teen Challenge (2001, archived)", "https://web.archive.org/web/20090112035516/http://waysandmeans.house.gov/legacy/humres/107cong/6-14-01/6-14smoo.htm"),
       wiki("David Wilkerson")]),
  ],
  "st-louis": [
    ev(4, 1847, "C. F. W. Walther", "The Lutheran Church–Missouri Synod",
      "Saxon Lutheran immigrants who had settled in Missouri in 1839 to preserve confessional Lutheranism, led by C. F. W. Walther, join other German congregations to organize the German Evangelical Lutheran Synod of Missouri, Ohio and Other States in Chicago in April 1847, with its seminary in St. Louis. Committed to the Lutheran confessions and the inerrancy of Scripture, the Missouri Synod became one of the largest Protestant bodies in the United States, with a vast school system, The Lutheran Hour broadcasts and missions in Latin America, from Brazil and Argentina to Guatemala.",
      "La Iglesia Luterana–Sínodo de Misuri",
      "Inmigrantes luteranos sajones asentados en Misuri en 1839 para preservar el luteranismo confesional, dirigidos por C. F. W. Walther, se unen a otras congregaciones alemanas para organizar en Chicago, en abril de 1847, el Sínodo Evangélico Luterano Alemán de Misuri, Ohio y Otros Estados, con su seminario en San Luis. Comprometido con las confesiones luteranas y la inerrancia de las Escrituras, el Sínodo de Misuri llegó a ser uno de los mayores cuerpos protestantes de Estados Unidos, con un amplio sistema escolar, las transmisiones de La Hora Luterana y misiones en América Latina, de Brasil y Argentina a Guatemala.",
      [wiki("Lutheran Church–Missouri Synod", "Lutheran_Church%E2%80%93Missouri_Synod"),
       w("Pew Research Center, America's Changing Religious Landscape (2015, PDF)", "https://assets.pewresearch.org/wp-content/uploads/sites/11/2015/05/RLS-08-26-full-report.pdf")]),
  ],
  "san-diego": [
    ev(5, 1926, "Alice Luce", "The Latin American Bible Institute",
      "On 1 October 1926 Alice E. Luce, a former Anglican missionary in India who had become a Pentecostal and worked among Mexicans in Texas and California, founds the Latin American Bible Institute in San Diego with the brothers Ralph and Richard Williams; a sister institute began the same year in Texas. Luce, who helped persuade the Assemblies of God to adopt indigenous-church principles for its missions, trained Spanish-speaking pastors and evangelists for decades. The school, later in La Puente, is the oldest Hispanic Pentecostal educational institution in the United States.",
      "El Instituto Bíblico Latinoamericano",
      "El 1 de octubre de 1926 Alice E. Luce, antigua misionera anglicana en la India que se había hecho pentecostal y trabajaba entre mexicanos en Texas y California, funda en San Diego el Instituto Bíblico Latinoamericano con los hermanos Ralph y Richard Williams; ese mismo año comenzó un instituto hermano en Texas. Luce, que ayudó a persuadir a las Asambleas de Dios de adoptar los principios de la iglesia autóctona en sus misiones, formó durante décadas a pastores y evangelistas de habla hispana. La escuela, después en La Puente, es la institución educativa pentecostal hispana más antigua de Estados Unidos.",
      [w("Wikipedia, \"Latin American Bible Institute, California\"", "https://en.wikipedia.org/wiki/Latin_American_Bible_Institute,_California"),
       w("Influence Magazine (Assemblies of God), \"The Woman Who Shaped AG Missions\"", "https://influencemagazine.com/Practice/The-Woman-Who-Shaped-AG-Missions"),
       w("Assemblies of God News, \"Women educational empowerment\" (2022)", "https://news.ag.org/en/articles/news/2022/01/women-educational-empowerment")]),
  ],
  "costa-mesa": [
    ev(6, 1964, "Hermano Pablo", "Hermano Pablo's 'Message to the Conscience'",
      "Paul Finkenbinder, born in Puerto Rico to missionary parents and a missionary in El Salvador from 1943, had begun radio programmes in 1955 and television in 1960. In 1964 'Hermano Pablo' moves his headquarters to Costa Mesa, California, from where his short daily radio programme 'Un mensaje a la conciencia' — a story and a moral message in four minutes — was broadcast on thousands of stations across the Spanish-speaking world. For decades he was one of the most recognized evangelical voices in Latin America.",
      "El «Mensaje a la conciencia» del Hermano Pablo",
      "Paul Finkenbinder, nacido en Puerto Rico de padres misioneros y misionero en El Salvador desde 1943, había comenzado programas de radio en 1955 y de televisión en 1960. En 1964 el «Hermano Pablo» traslada su sede a Costa Mesa, California, desde donde su breve programa radial diario «Un mensaje a la conciencia» — una historia y un mensaje moral en cuatro minutos — se transmitió en miles de emisoras de todo el mundo hispanohablante. Durante décadas fue una de las voces evangélicas más reconocidas de América Latina.",
      [wiki("Hermano Pablo"),
       w("Assemblies of God, \"This Week in AG History — June 16, 1963\"", "https://chaplaincy.ag.org/articles/agnews/article%20repository/news/2021/06/this%20week%20in%20ag%20history%20june%2016%201963"),
       w("Los Angeles Times, on Hermano Pablo (1997)", "https://www.latimes.com/archives/la-xpm-1997-01-25-mn-21948-story.html")]),
  ],
};

export const NP_LOCATIONS = [
  loc("germantown", "Germantown", "Germantown, Philadelphia, Pennsylvania", "Pennsylvania", 40.0379, -75.1716, "Germantown, Filadelfia, Pensilvania", "Pensilvania", [
    ev(2, 1688, "Francis Daniel Pastorius", "The Germantown Protest Against Slavery",
      "In April 1688 four German and Dutch settlers of Germantown, Pennsylvania — Francis Daniel Pastorius and Garret Hendericks with the brothers Derick and Abraham op den Graeff, Quakers of Mennonite background — sign a protest against 'the traffick of men-body' and send it to their Quaker meeting. Appealing to the golden rule, it is the first formal protest against slavery in the English colonies. The meetings did not act on it, but it was later recognized as the starting point of the long religious campaign against slavery in North America.",
      "La protesta de Germantown contra la esclavitud",
      "En abril de 1688 cuatro colonos alemanes y neerlandeses de Germantown, Pensilvania — Francis Daniel Pastorius y Garret Hendericks con los hermanos Derick y Abraham op den Graeff, cuáqueros de origen menonita — firman una protesta contra «el tráfico de cuerpos humanos» y la envían a su reunión cuáquera. Apelando a la regla de oro, es la primera protesta formal contra la esclavitud en las colonias inglesas. Las reuniones no actuaron, pero después fue reconocida como el punto de partida de la larga campaña religiosa contra la esclavitud en Norteamérica.",
      [wiki("1688 Germantown Quaker Petition Against Slavery"),
       w("The Washington Post, on the rediscovered Germantown petition (2009)", "https://www.washingtonpost.com/wp-dyn/content/story/2009/04/22/ST2009042201578.html"),
       w("Haverford College, Quaker & Special Collections", "https://www.haverford.edu/library/quaker-special-collections")]),
  ]),
  loc("new-echota", "New Echota", "Calhoun, Georgia", "Cherokee Nation", 34.5418, -84.9064, "Calhoun, Georgia", "Nación Cherokee", [
    ev(4, 1832, "Samuel Worcester", "Worcester v. Georgia",
      "At New Echota, capital of the Cherokee Nation, the American Board missionary Samuel Worcester had helped print the Cherokee Phoenix in Sequoyah's syllabary and translate Scripture. When Georgia demanded that whites in Cherokee country swear allegiance to the state, Worcester and other missionaries refused and were sentenced to hard labour. In 1832 the Supreme Court, in Worcester v. Georgia, ruled that the Cherokee were a nation over which Georgia had no authority. President Jackson ignored the ruling, and in 1838 the Cherokee were forced west on the Trail of Tears.",
      "Worcester contra Georgia",
      "En New Echota, capital de la Nación Cherokee, el misionero de la Junta Estadounidense Samuel Worcester había ayudado a imprimir el Cherokee Phoenix en el silabario de Sequoyah y a traducir las Escrituras. Cuando Georgia exigió que los blancos en territorio cherokee juraran lealtad al estado, Worcester y otros misioneros se negaron y fueron condenados a trabajos forzados. En 1832 la Corte Suprema, en Worcester contra Georgia, dictaminó que los cherokee eran una nación sobre la que Georgia no tenía autoridad. El presidente Jackson ignoró el fallo, y en 1838 los cherokee fueron obligados a marchar al oeste por el Sendero de las Lágrimas.",
      [wiki("Worcester v. Georgia"),
       w("New Georgia Encyclopedia, \"Worcester v. Georgia (1832)\"", "http://www.georgiaencyclopedia.org/articles/government-politics/worcester-v-georgia-1832"),
       w("Library of Congress, U.S. Reports: Worcester v. Georgia, 31 U.S. 515 (PDF)", "http://cdn.loc.gov/service/ll/usrep/usrep031/usrep031515/usrep031515.pdf")]),
  ]),
  loc("tahlequah", "Tahlequah", "Tahlequah, Oklahoma", "Indian Territory", 35.9154, -94.97, "Tahlequah, Oklahoma", "Territorio Indio", [
    ev(4, 1839, "Jesse Bushyhead", "Cherokee Baptists on the Trail of Tears",
      "Jesse Bushyhead (Unaduti), an ordained Cherokee Baptist minister and associate of the missionary Evan Jones, opposed removal but in 1838 led a detachment of about a thousand Cherokee on the forced march west, preaching and baptizing along the way. Arriving in Indian Territory in 1839, the Cherokee Baptists re-founded their churches; Bushyhead served as chief justice of the Cherokee Nation. Through Cherokee-speaking preachers and Scripture in Sequoyah's syllabary, the Baptist faith took deep root among the Cherokee in Oklahoma.",
      "Bautistas cherokee en el Sendero de las Lágrimas",
      "Jesse Bushyhead (Unaduti), pastor bautista cherokee ordenado y colaborador del misionero Evan Jones, se opuso a la deportación, pero en 1838 condujo a un grupo de unos mil cherokee en la marcha forzada hacia el oeste, predicando y bautizando por el camino. Al llegar al Territorio Indio en 1839, los bautistas cherokee refundaron sus iglesias; Bushyhead fue presidente de la corte suprema de la Nación Cherokee. Por medio de predicadores de habla cherokee y de las Escrituras en el silabario de Sequoyah, la fe bautista echó raíces profundas entre los cherokee de Oklahoma.",
      [wiki("Jesse Bushyhead"),
       w("Oklahoma State University, Chronicles of Oklahoma, article on Jesse Bushyhead", "https://web.archive.org/web/20121107120140/http://digital.library.okstate.edu/Chronicles/v009/v009p043.html"),
       w("Oklahoma State University, Chronicles of Oklahoma, vol. 14", "http://digital.library.okstate.edu/chronicles/v014/v014p349.html")]),
  ]),
  loc("san-francisco", "San Francisco", "San Francisco, California", "California", 37.7941, -122.4078, "San Francisco, California", "California", [
    ev(4, 1853, "William Speer", "The First Chinese Church in North America",
      "Drawn by the Gold Rush, thousands of Chinese immigrants reach California. In 1853 the Presbyterian missionary William Speer, who had served in Canton, organizes a church among them in San Francisco — the Presbyterian Church in Chinatown, the oldest Chinese American and Asian American congregation in North America. Speer also published a bilingual newspaper and defended Chinese immigrants against discriminatory laws. Chinese churches became centres of community and advocacy through the era of the Chinese Exclusion Act.",
      "La primera iglesia china de Norteamérica",
      "Atraídos por la fiebre del oro, miles de inmigrantes chinos llegan a California. En 1853 el misionero presbiteriano William Speer, que había servido en Cantón, organiza una iglesia entre ellos en San Francisco: la Iglesia Presbiteriana de Chinatown, la congregación chino-estadounidense y asiático-estadounidense más antigua de Norteamérica. Speer publicó también un periódico bilingüe y defendió a los inmigrantes chinos contra leyes discriminatorias. Las iglesias chinas se convirtieron en centros de comunidad y defensa durante la época de la Ley de Exclusión China.",
      [wiki("Presbyterian Church in Chinatown"),
       w("JSTOR, article on the Presbyterian Church in Chinatown", "https://www.jstor.org/stable/23327321")]),
  ]),
  loc("holland-mi", "Holland", "Holland, Michigan", "Michigan", 42.7875, -86.1089, "Holland, Míchigan", "Míchigan", [
    ev(4, 1857, null, "The Christian Reformed Church",
      "In 1857 a group of Dutch Calvinist immigrants in western Michigan, who had come with the Seceders of the Netherlands, leave the Reformed Church in America, which they found too lax, and form what became the Christian Reformed Church. Strengthened by later waves of Dutch immigration, the CRC built Calvin College and Seminary in Grand Rapids and Christian day schools across North America, and nurtured a rich tradition of Reformed thought. It also planted churches among Latinos in the United States and supported missions in Latin America.",
      "La Iglesia Cristiana Reformada",
      "En 1857 un grupo de inmigrantes calvinistas neerlandeses del oeste de Míchigan, llegados con los separatistas de los Países Bajos, deja la Iglesia Reformada en América, que consideraban demasiado laxa, y forma la que sería la Iglesia Cristiana Reformada. Fortalecida por nuevas oleadas de inmigración neerlandesa, la CRC construyó el Calvin College y su seminario en Grand Rapids y escuelas cristianas en toda Norteamérica, y cultivó una rica tradición de pensamiento reformado. También fundó iglesias entre los latinos de Estados Unidos y apoyó misiones en América Latina.",
      [wiki("Christian Reformed Church in North America"),
       w("Calvin University, Christian Reformed Church history resources", "http://www.calvin.edu/library/database/crcmd/")]),
  ]),
  loc("mankato", "Mankato", "Mankato, Minnesota", "Minnesota", 44.1636, -93.9994, "Mankato, Minnesota", "Minnesota", [
    ev(4, 1862, "Stephen Return Riggs", "The Dakota War and the Dakota Church",
      "Presbyterian and Congregational missionaries such as Stephen Riggs and Thomas Williamson had worked among the Dakota since 1837, producing a Dakota grammar, dictionary and New Testament, but with few converts. After the US–Dakota War of 1862, which ended in the mass hanging of 38 Dakota men at Mankato on 26 December, hundreds of imprisoned Dakota turned to Christianity in the prison camps, led by Dakota catechists, and were baptized. Their congregations, exiled to Nebraska and the Dakotas, became the root of the Dakota Presbyterian churches.",
      "La guerra dakota y la iglesia dakota",
      "Misioneros presbiterianos y congregacionalistas como Stephen Riggs y Thomas Williamson trabajaban entre los dakota desde 1837 y habían producido una gramática, un diccionario y un Nuevo Testamento dakota, pero con pocos conversos. Tras la guerra entre Estados Unidos y los dakota de 1862, que terminó con el ahorcamiento masivo de 38 hombres dakota en Mankato el 26 de diciembre, cientos de dakota encarcelados se volvieron al cristianismo en los campos de prisioneros, guiados por catequistas dakota, y fueron bautizados. Sus congregaciones, desterradas a Nebraska y las Dakotas, fueron la raíz de las iglesias presbiterianas dakota.",
      [wiki("Stephen Return Riggs"),
       w("MNopedia (Minnesota Historical Society), \"Riggs, Stephen Return (1812–1883)\"", "http://www.mnopedia.org/person/riggs-stephen-return-1812-1883"),
       w("Presbyterian Historical Society, RG 238: Dakota mission records (guide)", "http://www.history.pcusa.org/collections/research-tools/guides-archival-collections/rg-238")]),
  ]),
  loc("st-helena", "St. Helena Island", "St. Helena Island, South Carolina", "South Carolina Sea Islands", 32.3874, -80.5735, "Isla de Santa Elena, Carolina del Sur", "Islas del Mar de Carolina del Sur", [
    ev(4, 1862, "Laura Matilda Towne", "The Port Royal Experiment and Penn School",
      "When Union forces seized the South Carolina Sea Islands in November 1861, planters fled, leaving some 10,000 enslaved Gullah people. In 1862 northern missionary teachers — the 'Gideonites', sent by freedmen's aid and missionary societies — arrive to teach them to read and to farm for wages, in what became known as the Port Royal Experiment. On St. Helena Island the Philadelphia abolitionists Laura Towne and Ellen Murray open Penn School, the first school in the South founded specifically for formerly enslaved people. Penn Center later hosted Martin Luther King Jr.'s planning retreats.",
      "El experimento de Port Royal y la Escuela Penn",
      "Cuando las fuerzas de la Unión ocuparon las islas del Mar de Carolina del Sur en noviembre de 1861, los hacendados huyeron y dejaron a unos 10.000 gullah esclavizados. En 1862 llegan maestros misioneros del norte — los «gedeonitas», enviados por sociedades de ayuda a los libertos y misioneras — para enseñarles a leer y a trabajar la tierra por salario, en lo que se conoció como el experimento de Port Royal. En la isla de Santa Elena, las abolicionistas de Filadelfia Laura Towne y Ellen Murray abren la Escuela Penn, la primera escuela del Sur fundada específicamente para antiguos esclavos. El Centro Penn acogió después retiros de planificación de Martin Luther King Jr.",
      [wiki("Penn Center (Saint Helena Island, South Carolina)", "Penn_Center_(Saint_Helena_Island,_South_Carolina)"),
       w("National Park Service, National Historic Landmark nomination: Penn School Historic District (PDF)", "https://npgallery.nps.gov/NRHP/GetAsset/NHLS/74001824_text"),
       w("National Park Service, Reconstruction Era National Historical Park", "https://www.nps.gov/reer/learn/proclamation.htm")]),
  ]),
  loc("sitka", "Sitka", "Sitka, Alaska", "Alaska", 57.0531, -135.33, "Sitka, Alaska", "Alaska", [
    ev(5, 1878, "Sheldon Jackson", "Sheldon Jackson and the Alaska Missions",
      "After the United States bought Alaska from Russia, the Presbyterian missionary organizer Sheldon Jackson, who had founded scores of churches in the West, promotes missions to Alaska Natives and in 1878 helps found a training school at Sitka, later Sheldon Jackson College. As federal agent for education in Alaska from 1885 he divided the territory among Protestant denominations and introduced reindeer herding. His schools opened education to many Tlingit and other Native children, but also enforced English-only policies that suppressed Native languages — a legacy now critically reassessed.",
      "Sheldon Jackson y las misiones de Alaska",
      "Después de que Estados Unidos comprara Alaska a Rusia, el organizador misionero presbiteriano Sheldon Jackson, que había fundado decenas de iglesias en el Oeste, impulsa misiones entre los nativos de Alaska y en 1878 ayuda a fundar una escuela de formación en Sitka, luego Sheldon Jackson College. Como agente federal de educación en Alaska desde 1885, repartió el territorio entre las denominaciones protestantes e introdujo la cría de renos. Sus escuelas abrieron la educación a muchos niños tlingit y de otros pueblos nativos, pero también impusieron políticas de solo inglés que suprimieron las lenguas nativas, un legado hoy revisado críticamente.",
      [wiki("Sheldon Jackson"),
       w("Presbyterian Historical Society, Sheldon Jackson papers (finding aid)", "http://www.history.pcusa.org/collections/findingaids/fa.cfm?record_id=239"),
       w("Library of Congress, Wise Guide: Sheldon Jackson and the Alaska reindeer", "https://www.loc.gov/wiseguide/mar05/bear.html")]),
  ]),
  loc("muskogee", "Muskogee", "Muskogee, Oklahoma", "Indian Territory", 35.7479, -95.3697, "Muskogee, Oklahoma", "Territorio Indio", [
    ev(5, 1880, "Almon C. Bacone", "Indian University — Bacone College",
      "In 1880 the Baptist missionary teacher Almon C. Bacone opens the Indian University in the Cherokee capital of Tahlequah with three students, to train Native American teachers and preachers; in 1885 the Muscogee (Creek) Nation granted it land near Muskogee. Supported by the American Baptist Home Mission Society, Bacone College became the oldest continuously operating institution of higher education in Oklahoma and a centre of Native American education, art and leadership for more than a century, until its closure.",
      "Universidad India — Bacone College",
      "En 1880 el maestro misionero bautista Almon C. Bacone abre la Universidad India en Tahlequah, capital cherokee, con tres estudiantes, para formar maestros y predicadores indígenas; en 1885 la Nación Muscogee (Creek) le cedió tierras cerca de Muskogee. Sostenido por la Sociedad Bautista Estadounidense de Misiones Nacionales, el Bacone College llegó a ser la institución de educación superior en funcionamiento continuo más antigua de Oklahoma y un centro de educación, arte y liderazgo indígena durante más de un siglo, hasta su cierre.",
      [wiki("Bacone College"),
       w("Oklahoma Historical Society, Chronicles of Oklahoma: article on Bacone College (archived)", "https://web.archive.org/web/20131029203108/http://digital.library.okstate.edu/chronicles/v016/v016p315.html")]),
  ]),
];

export const NP_FIGURES = [];
