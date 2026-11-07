// ============================================================
// South America, recent decades: national churches, liberation theology,
// revival, megachurches, elections and the census.
// Merged into the main dataset by data.js. Every event carries its sources.
// ============================================================
import { w } from "./sources.js";

function ev(era, year, figure, title, description, titleEs, descriptionEs, sources) {
  return { era, year, figure, title, description, es: { title: titleEs, description: descriptionEs }, sources };
}

export const SM_EVENTS = {
  "sao-leopoldo": [
    ev(6, 1968, null, "One Lutheran Church for Brazil",
      "For more than a century the German-speaking Lutheran congregations founded by immigrants were scattered among separate regional bodies: the Riograndense Synod of 1886 and three later synods in the south and centre of Brazil. In October 1949 they form the Federação Sinodal, and São Leopoldo — cradle of the first immigrant congregations — becomes home to their theological faculty. In October 1968 a new constitution turns the federation into a single national church, the Evangelical Church of the Lutheran Confession in Brazil (IECLB), dissolving the old synods. The step marked its passage from an immigrant church to a Brazilian, Portuguese-speaking one.",
      "Una sola Iglesia luterana para Brasil",
      "Durante más de un siglo las congregaciones luteranas de habla alemana fundadas por inmigrantes estuvieron repartidas en cuerpos regionales separados: el Sínodo Riograndense de 1886 y otros tres sínodos posteriores en el sur y el centro de Brasil. En octubre de 1949 forman la Federação Sinodal, y São Leopoldo — cuna de las primeras congregaciones inmigrantes — se convierte en sede de su facultad de teología. En octubre de 1968 una nueva constitución transforma la federación en una sola iglesia nacional, la Iglesia Evangélica de Confesión Luterana en Brasil (IECLB), y disuelve los antiguos sínodos. El paso marcó su tránsito de iglesia de inmigrantes a iglesia brasileña y de lengua portuguesa.",
      [w("IECLB (luterano.org.br), \"De comunidades dispersas a uma estrutura eclesiástica nacional: 40 anos de caminho\"", "https://www.luterano.org.br/de-comunidades-dispersas-a-uma-estrutura-eclesiastica-nacional-40-anos-de-caminho"),
       w("IECLB (luterano.org.br), \"O que é Federação Sinodal\"", "https://www.luterano.org.br/o-que-e-federacao-sinodal"),
       w("Estudos Teológicos (Faculdades EST), article on the formation of the IECLB (PDF)", "https://revistas.est.edu.br/ET/article/download/1369/1165/1553")]),
  ],
  "buenos-aires": [
    ev(6, 1992, "Claudio Freidzon", "'The Anointing' at Rey de Reyes",
      "In 1992 Claudio Freidzon, an Assemblies of God pastor whose Rey de Reyes church in Buenos Aires was growing fast, returns from meetings with the healing evangelist Benny Hinn convinced he has received a new 'anointing'. His services fill with holy laughter, people falling in the Spirit and long lines of pastors seeking prayer; ministers come from across Argentina and abroad. At the height of the movement Freidzon fills the Vélez Sarsfield stadium with a crowd reported at about 65,000. The 'unción' carried the Argentine revival of the 1980s into the 1990s and influenced charismatic renewals far beyond Argentina.",
      "«La unción» en Rey de Reyes",
      "En 1992 Claudio Freidzon, pastor de las Asambleas de Dios cuya iglesia Rey de Reyes de Buenos Aires crecía con rapidez, vuelve de unas reuniones con el evangelista de sanidad Benny Hinn convencido de haber recibido una nueva «unción». Sus cultos se llenan de risa santa, personas que caen en el Espíritu y largas filas de pastores que piden oración; acuden ministros de toda la Argentina y del exterior. En el apogeo del movimiento Freidzon llena el estadio de Vélez Sarsfield con una multitud de unas 65.000 personas, según los informes. La «unción» prolongó el avivamiento argentino de los años ochenta en los noventa e influyó en renovaciones carismáticas mucho más allá de la Argentina.",
      [w("PUC-Rio (Maxwell), thesis on the Argentine Pentecostal revival and Claudio Freidzon (PDF)", "https://www.maxwell.vrac.puc-rio.br/27924/27924.PDF"),
       w("Revival Library, history of the Argentine revival", "https://revival-library.org/?p=4724"),
       w("Christian History, \"God in the villa miseria\" (issue 153)", "https://christianhistoryinstitute.org/magazine/article/ch153-latin-american-revival")]),
    ev(6, 2018, null, "The Pañuelos Celestes",
      "On 14 June 2018 Argentina's Chamber of Deputies narrowly approves a bill to legalize abortion; on 8–9 August the Senate rejects it by 38 votes to 31. Evangelical churches, led by federations such as ACIERA, join Catholics in the campaign against it, filling the streets with sky-blue handkerchiefs — the 'pañuelos celestes' — answering the green ones of the legalization movement. The campaign showed that Argentina's evangelicals, once a small minority, had become an organized public force. Abortion was legalized in December 2020, but the 2018 mobilization reshaped the politics of faith in the country.",
      "Los pañuelos celestes",
      "El 14 de junio de 2018 la Cámara de Diputados de la Argentina aprueba por estrecho margen un proyecto para legalizar el aborto; el 8 y 9 de agosto el Senado lo rechaza por 38 votos contra 31. Las iglesias evangélicas, encabezadas por federaciones como ACIERA, se unen a los católicos en la campaña en contra y llenan las calles de pañuelos celestes, en respuesta a los verdes del movimiento por la legalización. La campaña mostró que los evangélicos argentinos, antes una pequeña minoría, se habían convertido en una fuerza pública organizada. El aborto se legalizó en diciembre de 2020, pero la movilización de 2018 transformó la política de la fe en el país.",
      [w("Evangelical Focus, \"The Argentinian Senate votes against abortion\" (2018)", "https://evangelicalfocus.com/world/3743/The_Argentinian_Senate_votes_against_abortion"),
       w("Noticias (Perfil), \"Influir en nombre de Dios: el crecimiento de los evangélicos en Argentina\" (2018)", "https://noticias.perfil.com/noticias/general/2018-10-08-influir-en-nombre-de-dios-el-crecimiento-de-los-evangelicos-en-argentina.phtml"),
       w("El Universal (Mexico), \"El efecto sobre la agenda política\"", "https://www.eluniversal.com.mx/mundo/el-efecto-sobre-la-agenda-politica/")]),
  ],
  "caracas": [
    ev(6, 2024, "Javier Bertucci", "Maduro Courts the Evangelicals",
      "Evangelicals had grown to close to a third of Venezuelans by some estimates, and in 2018 the evangelical pastor Javier Bertucci won about 10% of the presidential vote. As the Catholic bishops grew sharply critical of his government, Nicolás Maduro turned to the evangelical churches: in 2023 he launched 'Mi Iglesia Bien Equipada' to equip churches, and in March 2024, before thousands of pastors in Carabobo, announced that 20,000 more pastors would receive the monthly 'Bono El Buen Pastor'. Some Pentecostal leaders embraced the courtship; many evangelicals rejected it as an attempt to buy votes before the disputed election of July 2024.",
      "Maduro corteja a los evangélicos",
      "Los evangélicos habían llegado a ser, según algunas estimaciones, cerca de un tercio de los venezolanos, y en 2018 el pastor evangélico Javier Bertucci obtuvo cerca del 10 % de los votos presidenciales. Mientras los obispos católicos se volvían muy críticos de su gobierno, Nicolás Maduro se dirigió a las iglesias evangélicas: en 2023 lanzó «Mi Iglesia Bien Equipada» para dotar templos, y en marzo de 2024, ante miles de pastores en Carabobo, anunció que otros 20.000 pastores recibirían el «Bono El Buen Pastor» mensual. Algunos líderes pentecostales aceptaron el acercamiento; muchos evangélicos lo rechazaron como un intento de comprar votos antes de las disputadas elecciones de julio de 2024.",
      [w("Christianity Today, report on Maduro, evangélicos and the 2024 election (2024)", "https://christianitytoday.com/2024/04/venezuela-maduro-evangelicos-elections-chavez"),
       w("Foreign Policy, on Venezuela's 2024 election and evangelical Christians (2023)", "https://foreignpolicy.com/2023/04/20/venezuela-2024-election-maduro-evangelical-christians-chavismo-leftists/"),
       w("Religions (MDPI), article on evangelicals and chavismo in Venezuela (2025)", "https://mdpi.com/2077-1444/16/1/93"),
       w("El Espectador, \"La familia original: la defensa de los evangélicos afines al chavismo en Venezuela\"", "https://www.elespectador.com/mundo/america/la-familia-original-la-defensa-de-los-evangelicos-afines-al-chavismo-en-venezuela-noticias-de-hoy/")]),
  ],
  "sao-paulo": [
    ev(6, 2014, "Edir Macedo", "The Temple of Solomon",
      "On 31 July 2014 the Universal Church of the Kingdom of God inaugurates its Templo de Salomão in São Paulo's Brás district, a monumental headquarters modelled on descriptions of the biblical temple and faced with stone imported from Israel, with seating for about 10,000. President Dilma Rousseff, Vice-President Michel Temer, São Paulo's governor and other governors and ministers attend the ceremony led by Bishop Edir Macedo — a sign of the political weight of Brazil's neo-Pentecostal churches. The construction also drew criticism, including questions over the permits under which it was built.",
      "El Templo de Salomón",
      "El 31 de julio de 2014 la Iglesia Universal del Reino de Dios inaugura su Templo de Salomón en el barrio paulistano del Brás, una sede monumental inspirada en las descripciones del templo bíblico y revestida de piedra traída de Israel, con capacidad para unas 10.000 personas. La presidenta Dilma Rousseff, el vicepresidente Michel Temer, el gobernador de São Paulo y otros gobernadores y ministros asisten a la ceremonia encabezada por el obispo Edir Macedo, señal del peso político de las iglesias neopentecostales de Brasil. La obra también recibió críticas, entre ellas cuestionamientos sobre los permisos con que se construyó.",
      [w("Exame, \"Igreja Universal inaugura maior complexo religioso da América Latina\" (2014)", "https://exame.com/brasil/igreja-universal-inaugura-maior-complexo-religioso-da-america-latina/"),
       w("Agência Brasil, \"Templo de Salomão é inaugurado em meio a denúncias de irregularidades\" (2014)", "https://agenciabrasil.ebc.com.br/geral/noticia/2014-07/templo-de-salomao-e-inaugurado-em-meio-a-denuncias-de-irregularidades"),
       w("Metrópoles, \"Aos 10 anos, Templo de Salomão consolida 'Wall Street religiosa' em SP\" (2024)", "https://www.metropoles.com/sao-paulo/aos-10-anos-templo-de-salomao-consolida-wall-street-religiosa-em-sp")]),
  ],
  "lima": [
    ev(6, 2006, "Humberto Lay", "A Pastor Runs for President",
      "Humberto Lay Sun, an architect and the founding pastor of a large evangelical church in Lima, had served on Peru's Truth and Reconciliation Commission, which investigated the violence of 1980–2000. In 2006 he runs for president for the new party Restauración Nacional, founded largely by evangelicals. He wins 4.38% of the vote and his party two seats in Congress. Sixteen years after evangelicals entered Congress on Fujimori's lists in 1990, the campaign showed Peruvian evangelicals organizing politically under a banner of their own.",
      "Un pastor candidato a la presidencia",
      "Humberto Lay Sun, arquitecto y pastor fundador de una gran iglesia evangélica de Lima, había sido miembro de la Comisión de la Verdad y Reconciliación del Perú, que investigó la violencia de 1980–2000. En 2006 postula a la presidencia por el nuevo partido Restauración Nacional, fundado en gran parte por evangélicos. Obtiene el 4,38 % de los votos y su partido dos escaños en el Congreso. Dieciséis años después de que los evangélicos llegaran al Congreso en las listas de Fujimori en 1990, la campaña mostró a los evangélicos peruanos organizándose políticamente bajo una bandera propia.",
      [w("Political Database of the Americas (Georgetown University), Peru: 2006 presidential election", "https://pdba.georgetown.edu/Elecdata/Peru/pres2006.html"),
       w("Wikipedia, \"Humberto Lay\"", "https://en.wikipedia.org/wiki/Humberto_Lay"),
       w("IFES ElectionGuide, Peru 2006 presidential election", "https://www.electionguide.org/elections/id/1442")]),
  ],
  "rio": [
    ev(6, 2025, null, "A Quarter of Brazil Is Evangelical",
      "On 6 June 2025 the Brazilian Institute of Geography and Statistics (IBGE), headquartered in Rio de Janeiro, publishes the religion results of the 2022 census. Evangelicals have risen from 21.6% of the population in 2010 to 26.9% — some 47 million people aged ten or older — while Catholics have fallen from 65.1% to 56.7%, the lowest share since the first census of 1872, when they were 99.7%. Brazil, long the largest Catholic country in the world, remains majority Catholic, but its evangelical churches now form one of the largest Protestant populations on earth.",
      "Una cuarta parte de Brasil es evangélica",
      "El 6 de junio de 2025 el Instituto Brasileño de Geografía y Estadística (IBGE), con sede en Río de Janeiro, publica los resultados sobre religión del censo de 2022. Los evangélicos han pasado del 21,6 % de la población en 2010 al 26,9 % — unos 47 millones de personas de diez años o más —, mientras que los católicos han bajado del 65,1 % al 56,7 %, la proporción más baja desde el primer censo de 1872, cuando eran el 99,7 %. Brasil, durante mucho tiempo el mayor país católico del mundo, sigue siendo mayoritariamente católico, pero sus iglesias evangélicas forman hoy una de las mayores poblaciones protestantes del planeta.",
      [w("Agência Gov (EBC), \"Censo 2022: católicos seguem em queda; evangélicos e sem religião crescem no país\" (2025)", "https://agenciagov.ebc.com.br/noticias/202506/censo-2022-catolicos-seguem-em-queda-evangelicos-e-sem-religiao-crescem-no-pais"),
       w("Congresso em Foco, \"Censo 2022: 1 em 4 brasileiros é evangélico; católicos caem para 56,7%\" (2025)", "https://www.congressoemfoco.com.br/noticia/109200/censo-2022-1-em-4-brasileiros-e-evangelico-catolicos-caem-para-56-7"),
       w("Jornal da USP, \"Pluralidade religiosa se intensifica no Brasil, indica IBGE\" (2025)", "https://jornal.usp.br/?p=911307")]),
  ],
};

export const SM_LOCATIONS = [
  { id: "vitoria", name: "Vitória", modernName: "Vitória, Espírito Santo, Brazil", region: "Southeast Brazil", lat: -20.3155, lng: -40.3128, significance: "minor", zone: "south",
    es: { name: "Vitória", modernName: "Vitória, Espírito Santo, Brasil", region: "Sudeste de Brasil" },
    events: [
      ev(6, 1978, null, "The United Presbyterian Church of Brazil",
        "During Brazil's military dictatorship the leadership of the Presbyterian Church of Brazil purged ministers, seminary professors and students accused of modernism or of sympathy with the left, and dissolved presbyteries that resisted. On 10 September 1978 churches and presbyteries that had left or been forced out form the National Federation of Presbyterian Churches, which in 1983 takes the name United Presbyterian Church of Brazil (IPU). Ecumenical and committed to social justice, ordaining women and joining the World Council of Churches, the IPU has its headquarters in Vitória, Espírito Santo.",
        "La Iglesia Presbiteriana Unida de Brasil",
        "Durante la dictadura militar brasileña, la dirección de la Iglesia Presbiteriana de Brasil depuró a pastores, profesores y estudiantes de seminario acusados de modernismo o de simpatía con la izquierda, y disolvió los presbiterios que se resistieron. El 10 de septiembre de 1978 iglesias y presbiterios que se habían retirado o habían sido expulsados forman la Federación Nacional de Iglesias Presbiterianas, que en 1983 adopta el nombre de Iglesia Presbiteriana Unida de Brasil (IPU). Ecuménica y comprometida con la justicia social, ordena mujeres y es miembro del Consejo Mundial de Iglesias; la IPU tiene su sede en Vitória, Espírito Santo.",
        [w("Wikipedia, \"Presbyterian Church of Brazil\"", "https://en.wikipedia.org/wiki/Presbyterian_Church_of_Brazil"),
         w("Revista Brasileira de História das Religiões (UEM), article on Presbyterian conflicts under the dictatorship (PDF)", "https://periodicos.uem.br/ojs/index.php/RbhrAnpuh/article/viewFile/30352/15935"),
         w("UNESP institutional repository, thesis on Brazilian Presbyterianism and the IPU (PDF)", "https://repositorio.unesp.br/bitstreams/8b447ac4-2cca-44db-92ba-89129ed6ccc2/download")]),
    ] },
  { id: "campinas", name: "Campinas", modernName: "Campinas, São Paulo, Brazil", region: "Southeast Brazil", lat: -22.9056, lng: -47.0608, significance: "minor", zone: "south",
    es: { name: "Campinas", modernName: "Campinas, São Paulo, Brasil", region: "Sudeste de Brasil" },
    events: [
      ev(6, 1969, "Rubem Alves", "A Protestant Theology of Liberation",
        "Rubem Alves trained for the Presbyterian ministry at the seminary in Campinas. After the 1964 coup, denounced by fellow Presbyterians as a subversive, he left Brazil for the United States, where at Princeton Theological Seminary, under Richard Shaull, he wrote a doctoral thesis titled 'Towards a Theology of Liberation'. Published in 1969 as A Theology of Human Hope, it was among the first books of Latin American liberation theology, appearing two years before Gustavo Gutiérrez's classic. Alves later left the pastorate and returned to Campinas, where he taught at Unicamp and became one of Brazil's best-loved writers.",
        "Una teología protestante de la liberación",
        "Rubem Alves se formó para el ministerio presbiteriano en el seminario de Campinas. Tras el golpe de 1964, denunciado por otros presbiterianos como subversivo, salió de Brasil hacia Estados Unidos, donde en el Seminario Teológico de Princeton, bajo la guía de Richard Shaull, escribió una tesis doctoral titulada «Hacia una teología de la liberación». Publicada en 1969 como Teología de la esperanza humana, fue uno de los primeros libros de la teología latinoamericana de la liberación, dos años antes del clásico de Gustavo Gutiérrez. Alves dejó después el pastorado y volvió a Campinas, donde enseñó en la Unicamp y se convirtió en uno de los escritores más queridos de Brasil.",
        [w("Wikipedia, \"Rubem Alves\"", "https://en.wikipedia.org/wiki/Rubem_Alves"),
         w("The Christian Century, \"Rubem Alves builds altars of word and song\"", "https://christiancentury.org/article/books/rubem-alves-builds-altars-word-and-song"),
         w("Sumarios.org, record of Alves's work in liberation theology", "https://sumarios.org/node/136622")]),
    ] },
];

export const SM_FIGURES = [
  { id: "rubem-alves", name: "Rubem Alves", years: "1933–2014", role: "Brazilian theologian, educator and writer",
    bio: "Presbyterian-trained theologian whose 1969 A Theology of Human Hope was among the first works of liberation theology; later a professor at Unicamp and a celebrated essayist.",
    es: { role: "Teólogo, educador y escritor brasileño", bio: "Teólogo de formación presbiteriana cuya Teología de la esperanza humana (1969) estuvo entre las primeras obras de la teología de la liberación; luego profesor de la Unicamp y célebre ensayista." } },
];
