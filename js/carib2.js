// ============================================================
// The Caribbean, deeper: the Moravian beginnings among the enslaved, Methodism in Antigua and
// Barbados, the Church and slavery, Baptists and emancipation in Jamaica, Revivalism and the
// Spiritual Baptists, Haiti's first Protestants, Cuba's Baptists and Puerto Rico's evangelicals.
// Merged into the main dataset by data.js. Every event carries its sources.
// ============================================================
import { w } from "./sources.js";

function ev(era, year, figure, title, description, titleEs, descriptionEs, sources) {
  return { era, year, figure, title, description, es: { title: titleEs, description: descriptionEs }, sources };
}
const wiki = (title, slug) => w(`Wikipedia, "${title}"`, "https://en.wikipedia.org/wiki/" + (slug || title.replace(/ /g, "_")));
const loc = (id, name, place, country, countryEs, region, regionEs, lat, lng, events, placeEs) =>
  ({ id, name, modernName: `${place}, ${country}`, region, lat, lng, significance: "minor", zone: "south",
     es: { name, modernName: `${placeEs || place}, ${countryEs}`, region: regionEs }, events });

export const K2_EVENTS = {
  "st-elizabeth": [
    ev(3, 1754, null, "The Moravians Come to Jamaica",
      "In 1754 Moravian missionaries arrive in Jamaica at the invitation of two absentee English planters, William Foster and Joseph Foster Barham, to preach to the enslaved people on their estates in St. Elizabeth, founding the Carmel mission. For decades the work was slow and the missionaries depended on planters' goodwill, but by the nineteenth century the Moravians had congregations, schools and a teacher-training college across south-western Jamaica — the soil in which the Great Revival of 1860 began. The Moravian Church in Jamaica is the oldest Protestant mission church on the island.",
      "Los moravos llegan a Jamaica",
      "En 1754 llegan a Jamaica misioneros moravos invitados por dos hacendados ingleses ausentes, William Foster y Joseph Foster Barham, para predicar a los esclavizados de sus fincas en St. Elizabeth, y fundan la misión de Carmel. Durante décadas la obra fue lenta y los misioneros dependían de la buena voluntad de los hacendados, pero en el siglo XIX los moravos tenían congregaciones, escuelas y un colegio de formación de maestros en todo el suroeste de Jamaica: el suelo en el que comenzó el Gran Avivamiento de 1860. La Iglesia Morava de Jamaica es la iglesia misionera protestante más antigua de la isla.",
      [wiki("Jamaica Province of the Moravian Church"),
       w("The Jamaica Gleaner, on the Moravian Church in Jamaica (2007, archived)", "https://web.archive.org/web/20080622031709/http://www.jamaica-gleaner.com/gleaner/20070914/news/news2.html")]),
  ],
  "port-au-prince": [
    ev(4, 1817, "John Brown", "The First Protestant Mission in Haiti",
      "On 7 February 1817, at the invitation of President Alexandre Pétion, the British Wesleyan Methodist missionaries John Brown and James Catts arrive in Port-au-Prince; Brown preaches and Catts opens a school. Opposition stirred by Catholic clergy grew, and in 1818 President Boyer advised them to leave. But the small Haitian Methodist society they had gathered survived under Haitian lay leaders, persecuted at times, and grew — the beginning of a Protestant presence that would become, by the twenty-first century, perhaps a third of Haiti's people.",
      "La primera misión protestante en Haití",
      "El 7 de febrero de 1817, por invitación del presidente Alexandre Pétion, los misioneros metodistas wesleyanos británicos John Brown y James Catts llegan a Puerto Príncipe; Brown predica y Catts abre una escuela. La oposición, alentada por el clero católico, creció, y en 1818 el presidente Boyer les aconsejó marcharse. Pero la pequeña sociedad metodista haitiana que habían reunido sobrevivió bajo líderes laicos haitianos, a veces perseguida, y creció: el comienzo de una presencia protestante que llegaría a ser, en el siglo XXI, quizá un tercio del pueblo haitiano.",
      [w("SOAS University of London, Methodist Missionary Society archives: Haiti (administrative history)", "https://library.soas.ac.uk/Record/MMS.17.02.02.13"),
       w("PROLADES, \"A chronology of Protestant beginnings: Haiti\"", "https://ranchocolibri.net/prolades/cra/regions/caribe/hai/hai-chron.htm"),
       w("SOAS Research Online, Leslie Griffiths, A History of Methodism in Haiti, 1817–1916", "https://soas-repository.worktribe.com/output/381818")]),
    ev(5, 1874, "James Theodore Holly", "James Theodore Holly, Bishop of Haiti",
      "James Theodore Holly, an African American Episcopal priest and advocate of Black emigration, had led a group of African Americans to settle in Haiti in 1861, where many died of disease. On 8 November 1874 he is consecrated in New York as Bishop of Haiti — the first African American bishop of the Episcopal Church — and builds a Haitian Episcopal church led by Haitian clergy, with schools and medical work. He served until his death in Port-au-Prince in 1911; the Episcopal Church of Haiti became the largest diocese of the Episcopal Church.",
      "James Theodore Holly, obispo de Haití",
      "James Theodore Holly, sacerdote episcopal afroamericano y defensor de la emigración negra, había conducido en 1861 a un grupo de afroamericanos a establecerse en Haití, donde muchos murieron de enfermedades. El 8 de noviembre de 1874 es consagrado en Nueva York obispo de Haití — el primer obispo afroamericano de la Iglesia Episcopal — y construye una iglesia episcopal haitiana dirigida por clérigos haitianos, con escuelas y obra médica. Sirvió hasta su muerte en Puerto Príncipe en 1911; la Iglesia Episcopal de Haití llegó a ser la mayor diócesis de la Iglesia Episcopal.",
      [wiki("James Theodore Holly"),
       w("Internet Archive, Howard H. Bell, Black Separatism and the Caribbean, 1860 (on Holly)", "https://archive.org/details/blackseparatismc0000bell/page/n7/mode/2up?q=holly")]),
  ],
  "havana": [
    ev(5, 1886, "Alberto J. Díaz", "Alberto Díaz and the Cuban Baptists",
      "Alberto J. Díaz, a Cuban who had embraced Protestant faith while in exile in the United States, returns to Cuba in 1883 as a colporteur of the American Bible Society and gathers an independent congregation in Havana. Ordained a Baptist in 1885, in 1886 he organizes the Getsemaní Baptist Church, which the Southern Baptist Home Mission Board took under its care; in 1889 it bought the Jané Theatre in Old Havana as a church. Díaz's work, interrupted by the war of independence, laid the foundations of the Baptist Convention of Western Cuba.",
      "Alberto Díaz y los bautistas cubanos",
      "Alberto J. Díaz, cubano que había abrazado la fe protestante durante su exilio en Estados Unidos, regresa a Cuba en 1883 como colportor de la Sociedad Bíblica Americana y reúne una congregación independiente en La Habana. Ordenado bautista en 1885, en 1886 organiza la Iglesia Bautista Getsemaní, que la Junta de Misiones Nacionales de los bautistas del Sur tomó bajo su cuidado; en 1889 compró el Teatro Jané de La Habana Vieja como templo. La obra de Díaz, interrumpida por la guerra de independencia, puso los cimientos de la Convención Bautista de Cuba Occidental.",
      [w("PROLADES, chronology of Protestant history in Cuba (PDF)", "https://www.ranchocolibri.net/prolades/historical/cuba-chron.pdf"),
       w("OnCuba News, on the history of Baptists in Cuba", "https://oncubanews.com/en/?p=251657"),
       w("The Alabama Baptist, \"Baptists have long history on island of Cuba\"", "https://thealabamabaptist.org/?p=42608")]),
  ],
  "ponce": [
    ev(5, 1873, null, "Holy Trinity: A Protestant Church in Spanish Puerto Rico",
      "In 1869, after Spain's revolution of 1868 allowed limited religious toleration, British residents of the port of Ponce organize an Anglican congregation, and in 1873 they build the Iglesia de la Santísima Trinidad, a wooden church with a bell. It is the first Protestant church building in Puerto Rico and, by the account of its national-register listing, the first non-Catholic church in the Spanish Empire in the Americas. Serving foreign merchants and sailors at first, it later became part of the Episcopal Church of Puerto Rico.",
      "Santísima Trinidad: una iglesia protestante en el Puerto Rico español",
      "En 1869, después de que la revolución española de 1868 permitiera una tolerancia religiosa limitada, residentes británicos del puerto de Ponce organizan una congregación anglicana, y en 1873 construyen la Iglesia de la Santísima Trinidad, un templo de madera con campana. Es el primer edificio eclesial protestante de Puerto Rico y, según su inscripción en el registro nacional, la primera iglesia no católica del Imperio español en América. Al principio servía a comerciantes y marineros extranjeros, y después pasó a formar parte de la Iglesia Episcopal de Puerto Rico.",
      [wiki("Iglesia de la Santísima Trinidad", "Iglesia_de_la_Sant%C3%ADsima_Trinidad"),
       w("National Park Service, National Register of Historic Places: Iglesia de la Santísima Trinidad", "https://npgallery.nps.gov/AssetDetail/NRIS/86002766"),
       w("Op. Cit. (Universidad de Puerto Rico), article on early Protestantism in Puerto Rico (PDF)", "https://revistas.upr.edu/index.php/opcit/article/download/18115/15563/18851")]),
  ],
};

export const K2_LOCATIONS = [
  loc("st-thomas", "St. Thomas", "Charlotte Amalie, St. Thomas", "U.S. Virgin Islands", "Islas Vírgenes de EE. UU.", "Danish West Indies", "Antillas danesas", 18.3419, -64.9307, [
    ev(3, 1732, "Leonhard Dober", "The First Moravian Missionaries",
      "Moved by the account of Anton Ulrich, an enslaved man from St. Thomas he met in Copenhagen, Count Zinzendorf's community at Herrnhut sends two craftsmen, Leonhard Dober and David Nitschmann, who land on the Danish island of St. Thomas on 13 December 1732 to preach to the enslaved Africans. Legend says they sold themselves into slavery to do so; in fact they were willing to, but worked as artisans. Their arrival marks the beginning of the Moravian missions — the first large-scale Protestant missionary movement, which spread across the Caribbean, Suriname, Greenland and Labrador.",
      "Los primeros misioneros moravos",
      "Conmovida por el relato de Anton Ulrich, un esclavizado de Santo Tomás que el conde Zinzendorf conoció en Copenhague, la comunidad de Herrnhut envía a dos artesanos, Leonhard Dober y David Nitschmann, que desembarcan en la isla danesa de Santo Tomás el 13 de diciembre de 1732 para predicar a los africanos esclavizados. La leyenda dice que se vendieron como esclavos para hacerlo; en realidad estaban dispuestos a ello, pero trabajaron como artesanos. Su llegada marca el comienzo de las misiones moravas, el primer movimiento misionero protestante a gran escala, que se extendió por el Caribe, Surinam, Groenlandia y Labrador.",
      [wiki("Johann Leonhard Dober"),
       w("Penn State University Press, sample chapter on the Moravian mission in the Danish West Indies (PDF)", "https://www.psupress.org/sample_chapter/Pietrenka_Introduction.pdf"),
       w("Moravian Church, \"Moravian Moments\": the first missionaries", "https://moravians.net/en/about-us/34-moravian-moments/69-moravian-moment-6")]),
    ev(3, 1738, "Rebecca Protten", "Rebecca Protten's Revival",
      "Rebecca, a formerly enslaved woman of mixed African and European descent who had been freed on St. Thomas, becomes a Moravian convert and, from the mid-1730s, an evangelist who leads Bible classes and prayer meetings for enslaved women and men on the plantations. In 1738 she marries the Moravian missionary Matthäus Freundlich — a scandal in the slave society — and the community of Black believers grows to several hundred despite planter hostility; she and other leaders were jailed. Historians have called her a founder of Afro-Atlantic Christianity; she later served in Germany and on the Gold Coast of Africa.",
      "El avivamiento de Rebecca Protten",
      "Rebecca, mujer antes esclavizada, de ascendencia africana y europea, liberada en Santo Tomás, se convierte con los moravos y, desde mediados de la década de 1730, es evangelista que dirige clases bíblicas y reuniones de oración para mujeres y hombres esclavizados en las plantaciones. En 1738 se casa con el misionero moravo Matthäus Freundlich — un escándalo en la sociedad esclavista —, y la comunidad de creyentes negros crece hasta varios cientos pese a la hostilidad de los hacendados; ella y otros líderes fueron encarcelados. Los historiadores la han llamado fundadora del cristianismo afroatlántico; más tarde sirvió en Alemania y en la Costa de Oro de África.",
      [wiki("Rebecca Protten"),
       w("Harvard University Press, Jon F. Sensbach, Rebecca's Revival: Creating Black Christianity in the Atlantic World", "https://web.archive.org/web/20180916075019/http://www.hup.harvard.edu/catalog.php?isbn=9780674022577")]),
  ]),
  loc("antigua", "St. John's", "St. John's", "Antigua and Barbuda", "Antigua y Barbuda", "Leeward Islands", "Islas de Sotavento", 17.1274, -61.8468, [
    ev(3, 1760, "Nathaniel Gilbert", "Methodism Begins in the Caribbean",
      "In 1758 the Antiguan planter and Speaker of the Assembly Nathaniel Gilbert heard John Wesley preach in London and was baptized by him with three of the women he enslaved, Mary Alley, Sophia Campbell and Bessie. Returning to Antigua in 1760, Gilbert begins preaching to his household and enslaved workers — the first Methodist society in the Caribbean. After his death in 1774 the Black women leaders kept the society alive until the shipwright John Baxter arrived; by 1786, when Thomas Coke landed, Antigua had some 2,000 Methodists, nearly all of African descent.",
      "El metodismo comienza en el Caribe",
      "En 1758 el hacendado antiguano y presidente de la Asamblea Nathaniel Gilbert escuchó predicar a John Wesley en Londres y fue bautizado por él junto con tres de las mujeres que tenía esclavizadas, Mary Alley, Sophia Campbell y Bessie. De regreso en Antigua en 1760, Gilbert comienza a predicar a su familia y a sus trabajadores esclavizados: la primera sociedad metodista del Caribe. Tras su muerte en 1774, las líderes negras mantuvieron viva la sociedad hasta la llegada del carpintero naval John Baxter; en 1786, cuando desembarcó Thomas Coke, Antigua tenía unos 2.000 metodistas, casi todos de ascendencia africana.",
      [wiki("Mary, Sophia and Bessie", "Mary,_Sophia_and_Bessie"),
       w("Bucknell University, Sugar Mills project: the Gilberts of Antigua", "https://sugarmills.blogs.bucknell.edu/gilberts/"),
       w("Black Theology (Taylor & Francis), article on the women of early Antiguan Methodism", "https://www.tandfonline.com/doi/abs/10.1558/blth2007v5i2.153")]),
  ]),
  loc("saint-john-bb", "Codrington", "Saint John", "Barbados", "Barbados", "Barbados", "Barbados", 13.1736, -59.4592, [
    ev(2, 1710, "Christopher Codrington", "The Church's Slave Plantations",
      "In 1710 Christopher Codrington, governor of the Leeward Islands, bequeaths two sugar plantations in Barbados, with the hundreds of enslaved Africans who worked them, to the Society for the Propagation of the Gospel, the Church of England's missionary society, to fund a college. For more than a century the Society ran the Codrington estates with enslaved labour, branding workers and enduring high mortality, while offering them only limited religious instruction. Codrington College opened in 1745. In 2006 the Church of England formally apologized for its role in slavery.",
      "Las plantaciones esclavistas de la Iglesia",
      "En 1710 Christopher Codrington, gobernador de las Islas de Sotavento, lega a la Sociedad para la Propagación del Evangelio, sociedad misionera de la Iglesia de Inglaterra, dos plantaciones de azúcar en Barbados con los cientos de africanos esclavizados que las trabajaban, para financiar un colegio. Durante más de un siglo la Sociedad dirigió las fincas Codrington con trabajo esclavo, marcando a fuego a los trabajadores y con una alta mortalidad, mientras les ofrecía una instrucción religiosa limitada. El Codrington College abrió en 1745. En 2006 la Iglesia de Inglaterra pidió perdón formalmente por su papel en la esclavitud.",
      [wiki("Codrington Plantations"),
       w("BBC News, \"Church apologises for slave trade\" (2006)", "https://news.bbc.co.uk/2/hi/uk_news/4694896.stm"),
       w("BBC History, Building Britain: the Codrington plantations", "https://www.bbc.co.uk/history/british/abolition/building_britain_gallery_06.shtml")]),
  ]),
  loc("bridgetown", "Bridgetown", "Bridgetown", "Barbados", "Barbados", "Barbados", "Barbados", 13.0975, -59.6167, [
    ev(4, 1823, "Sarah Ann Gill", "Sarah Ann Gill Defends Her Church",
      "In October 1823, amid planter fury at British anti-slavery agitation, a mob of white Barbadians tears down the Methodist chapel in Bridgetown and the missionary William Shrewsbury flees the island. Sarah Ann Gill, a free woman of colour and leading member of the congregation, opens her home for worship, defying threats, mob attacks and legal action. Her courage kept Methodism alive in Barbados until the chapel was rebuilt. In 1998 she was named a National Hero of Barbados — the only woman so honoured.",
      "Sarah Ann Gill defiende su iglesia",
      "En octubre de 1823, en medio de la furia de los hacendados por la agitación antiesclavista británica, una turba de blancos barbadenses derriba la capilla metodista de Bridgetown y el misionero William Shrewsbury huye de la isla. Sarah Ann Gill, mujer libre de color y miembro destacado de la congregación, abre su casa para el culto, desafiando amenazas, ataques de turbas y acciones legales. Su valor mantuvo vivo el metodismo en Barbados hasta que se reconstruyó la capilla. En 1998 fue proclamada Heroína Nacional de Barbados, la única mujer con ese honor.",
      [wiki("Sarah Ann Gill"),
       w("Barbados Today, \"Sarah Ann Gill remembered as champion of faith, freedom and equality\" (2026)", "https://barbadostoday.bb/2026/04/26/sarah-ann-gill-remembered-as-champion-of-faith-freedom-and-equality/amp/"),
       w("Totally Barbados, \"Barbados National Heroes: Sarah Ann Gill\"", "https://www.totallybarbados.com/articles/about-barbados/people/barbados-national-heroes/839-htm/")]),
  ]),
  loc("falmouth-jm", "Falmouth", "Falmouth, Trelawny", "Jamaica", "Jamaica", "North-western Jamaica", "Noroeste de Jamaica", 18.4937, -77.6559, [
    ev(4, 1838, "William Knibb", "'The Monster Is Dead': Full Freedom in Jamaica",
      "William Knibb, the English Baptist missionary in Falmouth who had campaigned in Britain against slavery after the 1831 rebellion, leads a midnight service in his chapel as 1 August 1838 begins — the day 'apprenticeship' ended and full freedom came to the formerly enslaved of the British Caribbean. A coffin containing a chain, a whip and an iron collar is buried with the words 'The monster is dead'. Knibb and other Baptists then helped freedpeople buy land and build 'free villages'. In 1988 Jamaica awarded him the Order of Merit.",
      "«El monstruo ha muerto»: la libertad plena en Jamaica",
      "William Knibb, misionero bautista inglés de Falmouth que había hecho campaña en Gran Bretaña contra la esclavitud tras la rebelión de 1831, dirige un culto de medianoche en su capilla al comenzar el 1 de agosto de 1838, el día en que terminó el «aprendizaje» y llegó la libertad plena a los antiguos esclavos del Caribe británico. Se entierra un ataúd con una cadena, un látigo y un collar de hierro con las palabras «El monstruo ha muerto». Knibb y otros bautistas ayudaron después a los libertos a comprar tierras y construir «aldeas libres». En 1988 Jamaica le otorgó la Orden del Mérito.",
      [wiki("William Knibb"),
       w("Kettering Borough Council, \"William Knibb\" (PDF, archived)", "https://web.archive.org/web/20110614112620/http://www.kettering.gov.uk/downloads/william_knibb.pdf"),
       w("The Jamaica Gleaner, on William Knibb (2014)", "http://jamaica-gleaner.com/gleaner/20140721/lead/lead3.html")]),
  ]),
  loc("august-town", "August Town", "August Town, St. Andrew", "Jamaica", "Jamaica", "Kingston area", "Área de Kingston", 18.0081, -76.7406, [
    ev(5, 1891, "Alexander Bedward", "Bedward and Jamaican Revivalism",
      "From 1891 Alexander Bedward, a former labourer and leader in the Jamaica Native Baptist Free Church at August Town, draws thousands to healing services at the Hope River, preaching that the Black poor would rise against their white oppressors. Tried for sedition and later committed to an asylum after a failed prophecy of ascension in 1921, he remained one of the most popular preachers of Jamaican Revivalism, the Afro-Christian tradition born of the 1860 revival, and a forerunner of Marcus Garvey's movement.",
      "Bedward y el revivalismo jamaiquino",
      "Desde 1891 Alexander Bedward, antiguo jornalero y líder de la Iglesia Bautista Nativa Libre de Jamaica en August Town, atrae a miles a cultos de sanidad en el río Hope y predica que los negros pobres se levantarían contra sus opresores blancos. Juzgado por sedición y luego internado en un manicomio tras una fallida profecía de ascensión en 1921, siguió siendo uno de los predicadores más populares del revivalismo jamaiquino, la tradición afrocristiana nacida del avivamiento de 1860, y un precursor del movimiento de Marcus Garvey.",
      [wiki("Alexander Bedward"),
       w("North Carolina A&T State University, Africans in the Americas: \"Land of Maroons\" (PDF, archived)", "https://web.archive.org/web/20090704193223/http://www.ncat.edu/iajs/research/Africans_in_Americas_Volume1/Ch19_Land_of_Maroons.pdf")]),
  ]),
  loc("port-of-spain", "Port of Spain", "Port of Spain", "Trinidad and Tobago", "Trinidad y Tobago", "Trinidad", "Trinidad", 10.6603, -61.5086, [
    ev(6, 1951, null, "The Spiritual Baptists Are Free",
      "In 1917 the colonial government of Trinidad and Tobago passed the Shouters Prohibition Ordinance, outlawing the Spiritual Baptists — an Afro-Caribbean Christian movement with Baptist roots that worships with spirited singing, 'mourning' fasts and ringing of bells — and their members were arrested for meeting. After decades of resistance, the ordinance is repealed in 1951. In 1996 Trinidad and Tobago made 30 March Spiritual Baptist Shouter Liberation Day, a national public holiday.",
      "Los bautistas espirituales son libres",
      "En 1917 el gobierno colonial de Trinidad y Tobago aprobó la Ordenanza de Prohibición de los Shouters, que ilegalizó a los bautistas espirituales — un movimiento cristiano afrocaribeño de raíces bautistas que celebra con cantos fervorosos, ayunos de «duelo» y toque de campanas — y sus miembros eran arrestados por reunirse. Tras décadas de resistencia, la ordenanza es derogada en 1951. En 1996 Trinidad y Tobago hizo del 30 de marzo el Día de la Liberación de los Bautistas Espirituales Shouters, feriado nacional.",
      [wiki("Spiritual Baptist"),
       w("Encyclopaedia Britannica, \"Spiritual Baptist\"", "https://www.britannica.com/topic/Spiritual-Baptist"),
       w("National Library and Information System Authority (NALIS), Trinidad and Tobago: Spiritual Shouter Baptist faith", "https://www.nalis.gov.tt/Resources/Subject-Guide/Spiritual-Shouter-Baptist-Faith")]),
  ]),
  loc("rio-piedras", "Río Piedras", "Río Piedras, San Juan", "Puerto Rico", "Puerto Rico", "San Juan metropolitan area", "Área metropolitana de San Juan", 18.3994, -66.0503, [
    ev(5, 1919, null, "The Evangelical Seminary of Puerto Rico",
      "On 11 September 1919 the Protestant denominations that had entered Puerto Rico after 1898 — Presbyterians, Methodists, Baptists, the Disciples of Christ, the United Brethren and others — join their training schools to found the Seminario Evangélico de Puerto Rico in Río Piedras. A rare example of early interdenominational cooperation, it trained Puerto Rican pastors who led their churches toward autonomy and became a centre of Latin American Protestant theology, sending graduates to Spanish-speaking churches in the United States and the Caribbean.",
      "El Seminario Evangélico de Puerto Rico",
      "El 11 de septiembre de 1919 las denominaciones protestantes que habían entrado a Puerto Rico después de 1898 — presbiterianos, metodistas, bautistas, los Discípulos de Cristo, los Hermanos Unidos y otras — unen sus escuelas de formación para fundar en Río Piedras el Seminario Evangélico de Puerto Rico. Ejemplo poco común de temprana cooperación interdenominacional, formó a pastores puertorriqueños que llevaron a sus iglesias hacia la autonomía y se convirtió en un centro de la teología protestante latinoamericana, que envió graduados a iglesias hispanohablantes de Estados Unidos y el Caribe.",
      [wiki("Evangelical Seminary of Puerto Rico"),
       w("Association of Theological Schools, member profile: Seminario Evangélico de Puerto Rico (PDF)", "https://www.ats.edu/files/ats/schools/pdf/seminario-evangelico-de-puerto-rico.pdf"),
       w("Presbyterian Mission Agency, \"Evangelical Seminary of Puerto Rico names new president\"", "https://www.presbyterianmission.org/story/evangelical-seminary-of-puerto-rico-names-new-president/")]),
  ]),
  loc("arecibo", "Arecibo", "Arecibo", "Puerto Rico", "Puerto Rico", "Northern Puerto Rico", "Norte de Puerto Rico", 18.4724, -66.7157, [
    ev(6, 1940, "Juanita García Peraza", "The Mita Congregation",
      "In 1940 Juanita García Peraza, a woman from Hatillo who had left a Pentecostal church after a healing experience, founds in Arecibo the Congregación Mita, teaching that the Holy Spirit had come to dwell in her under the name 'Mita'. The movement combined Pentecostal worship with an ethic of mutual aid, building cooperatives, businesses and housing for its members, and spread among Puerto Ricans and across Latin America. Considered a new religious movement rather than evangelical, it shows the creativity of Puerto Rico's Pentecostal-rooted religion.",
      "La Congregación Mita",
      "En 1940 Juanita García Peraza, mujer de Hatillo que había dejado una iglesia pentecostal tras una experiencia de sanidad, funda en Arecibo la Congregación Mita, enseñando que el Espíritu Santo había venido a morar en ella bajo el nombre de «Mita». El movimiento unió el culto pentecostal con una ética de ayuda mutua, con cooperativas, empresas y viviendas para sus miembros, y se extendió entre los puertorriqueños y por América Latina. Considerado un nuevo movimiento religioso más que evangélico, muestra la creatividad de la religión puertorriqueña de raíz pentecostal.",
      [wiki("Mita Congregation"),
       w("Allegheny College, Latin American Issues, vol. 13: article on the Mita Congregation", "https://web.archive.org/web/20110717063649/http://webpub.allegheny.edu/group/LAS/LatinAmIssues/Articles/Vol13/LAI_vol_13_section_I.html")]),
  ]),
  loc("camuy", "Camuy", "Camuy", "Puerto Rico", "Puerto Rico", "Northern Puerto Rico", "Norte de Puerto Rico", 18.4839, -66.845, [
    ev(6, 1960, "Yiye Ávila", "Yiye Ávila and 'Cristo Viene'",
      "José Joaquín 'Yiye' Ávila, a chemistry teacher and bodybuilder from Camuy converted in a Pentecostal church, begins around 1960 an evangelistic ministry that became the Ministerio Cristo Viene ('Christ Is Coming'). Preaching the imminent return of Christ in open-air crusades and later on his own television channel, he travelled to nearly every Latin American country from the 1970s, with branches in Colombia, Venezuela, Bolivia and the Dominican Republic. When he died in Camuy in 2013 he was called the 'Billy Graham' of Hispanic evangelicals.",
      "Yiye Ávila y «Cristo Viene»",
      "José Joaquín «Yiye» Ávila, profesor de química y fisicoculturista de Camuy convertido en una iglesia pentecostal, inicia hacia 1960 un ministerio evangelístico que se convirtió en el Ministerio Cristo Viene. Predicando el regreso inminente de Cristo en cruzadas al aire libre y luego en su propio canal de televisión, recorrió casi todos los países latinoamericanos desde los años setenta, con sedes en Colombia, Venezuela, Bolivia y República Dominicana. Cuando murió en Camuy en 2013 fue llamado el «Billy Graham» de los evangélicos hispanos.",
      [wiki("Yiye Ávila", "Yiye_%C3%81vila"),
       w("Primera Hora, \"Yiye Ávila fallece a sus 87 años en Camuy\" (2013)", "https://www.primerahora.com/noticias/puerto-rico/notas/yiye-avila-fallece-a-sus-87-anos-en-camuy-fotos/"),
       w("The Christian Post, \"'Billy Graham' of Hispanic evangelicals Yiye Ávila laid to rest in Puerto Rico\" (2013)", "https://christianpost.com/news/billy-graham-of-hispanic-evagelicals-yiye-avila-laid-to-rest-in-puerto-rico.html")]),
  ]),
];

export const K2_FIGURES = [
  { id: "protten", name: "Rebecca Protten", years: "1718–1780", role: "Moravian evangelist in the Danish West Indies",
    bio: "Formerly enslaved Afro-Caribbean woman who led the first Black Christian revival among the enslaved of St. Thomas and later served in Europe and West Africa.",
    es: { role: "Evangelista morava en las Antillas danesas", bio: "Mujer afrocaribeña antes esclavizada que dirigió el primer avivamiento cristiano negro entre los esclavizados de Santo Tomás y luego sirvió en Europa y África occidental." } },
  { id: "knibb", name: "William Knibb", years: "1803–1845", role: "Baptist missionary and abolitionist in Jamaica",
    bio: "English Baptist who campaigned against slavery after the 1831 rebellion and helped freedpeople found free villages.",
    es: { role: "Misionero bautista y abolicionista en Jamaica", bio: "Bautista inglés que luchó contra la esclavitud tras la rebelión de 1831 y ayudó a los libertos a fundar aldeas libres." } },
];
