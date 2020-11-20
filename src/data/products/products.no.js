const GENDER_WOMEN = "kvinner"
const GENDER_MEN = "menn"
const PRODUCT_TYPE_COAT = "frakker"
const PRODUCT_TYPE_BLAZER = "blazere"
const PRODUCT_TYPE_SUIT = "dresser"
const PRODUCT_TYPE_SHIRT = "skjorter"
const PRODUCT_TYPE_PANTS = "bukser"
const PRODUCT_TYPE_SHORTS = "shorts"
const PRODUCT_TYPE_DRESS = "kjoler"

module.exports = [
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Strandløven",
    description: ["Lys og lett, beige dress som passer ypperlig på stranden."],
    gender: GENDER_MEN,
    imageAlt:
      "Mann i en beige dress på stranden. Jakken er åpen, med en mørk, mønstret skjorte under. Han ser bakover mot skyskraperene høybyggene som omkranser stranden.",
    imageName: "beach-smart-01.png",
    video: "beach",
    price: 2499,
    campaignPrice: 1999,
  },
  {
    type: PRODUCT_TYPE_DRESS,
    displayName: "Sommerbris",
    description: [
      "Denne lette silkekjolen i lyserosa har et fornemt blomstermønster og knapper øverst. Ekstra vid for ekstra eleganse.",
    ],
    gender: GENDER_WOMEN,
    imageAlt:
      "Modell i lang, lyserosa silkekjole med blomstermønster, masse artige detaljer og forseggjorte avslutninger",
    imageName: "flaunter-com-WcXxxQYp_aM-unsplash.jpg",
    price: 1099,
    campaignPrice: 899,
  },
  {
    type: PRODUCT_TYPE_DRESS,
    displayName: "Oransje er det nye svart",
    description: [
      "Til de som elsker chic'en av 60-tallet. En lyseoransje vil definitivt fargesette hverdagen din. Om du tør.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i tettsittende, oransjefargede kjole med kort ben",
    imageName: "mason-jones-bIIP4igsg1I-unsplash.jpg",
    price: 889,
  },
  {
    type: PRODUCT_TYPE_DRESS,
    displayName: "Sommerfugl, sommerfugl, opp i luften!",
    description: [
      "En utradisjonell kjole med utradisjonelle farger og en utradisjonell passform for de som tør.",
    ],
    gender: GENDER_WOMEN,
    imageAlt:
      "Modell i mønstrede, kort kjole med lange armer i blått og oransjt",
    imageName: "glody-kikonga-HpRVY2Mn0ws-unsplash.jpg",
    price: 1129,
  },
  {
    type: PRODUCT_TYPE_DRESS,
    displayName: "Bare svart",
    description: [
      "Dette skjørtet av syntetisk materiale kan være 'det lille sorte' i garderoben din. En enkel, men komfortabel passform gir ubegrensete muligheter til å vise seg frem.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i svart og kort kjole med liten, rund utringning",
    imageName: "irene-strong-kb2vZFF9o58-unsplash.jpg",
    price: 829,
  },
  {
    type: PRODUCT_TYPE_DRESS,
    displayName: "Vis mye farge!",
    description: [
      "Lang, lett kjole med gitarer i mange forskjellige farger. Du vil råkke omgivelsene dine!",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i fargerik, lang kjole med korte armer",
    imageName: "eugene-chystiakov-0A5hJ0W3Gys-unsplash.jpg",
    price: 1169,
  },
  {
    type: PRODUCT_TYPE_DRESS,
    displayName: "Damen i rødt",
    description: [
      "Vil du være damen i rødt? Med denne lette sommerkjolen vil drømmen gå i oppfyllelse. Perfekt for å danse piruetter, blant annet.",
    ],
    gender: GENDER_WOMEN,
    imageAlt:
      "Modell i rød, tynn, halvlang dansekjole med gult mønster og stort beltespenn",
    imageName: "ussama-azam-HKchJL3uFrw-unsplash.jpg",
    price: 999,
  },
  {
    type: PRODUCT_TYPE_SHORTS,
    displayName: "Olashorts",
    description: [
      "Lyseblå og stiliserte shorts i denim-material med høy midje og korte ben for varme, lune sommerdager.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i lyseblå olashorts",
    imageName: "ben-weber-elJ6ZCACSqQ-unsplash.jpg",
    price: 529,
    campaignPrice: 429,
  },
  {
    type: PRODUCT_TYPE_SHORTS,
    displayName: "Hvite jeans i røff design",
    description: [
      "Hvit er det nye blått, i hvert fall når det kommer til sommerklær. En rå avslutning på leggene gir denne buksen et røft, men balansert utseende.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i hvite shorts med kort leg og rå avslutning",
    imageName: "clifford-photography-cE4YLIxEKeY-unsplash.jpg",
    price: 369,
  },
  {
    type: PRODUCT_TYPE_SHORTS,
    displayName: "Unike olashorts",
    description: [
      "Ola-shortsene med kort ben har gått gjennom en spesiell behandlingsprosess på fabrikken. Resultatet er forseggjort 'slitasje', som gjør en og hver av dem 100% unik.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i mørkeblå, hullete olashorts med kant nederst",
    imageName: "brooke-cagle-VrXv2KGPqDE-unsplash.jpg",
    price: 309,
  },
  {
    type: PRODUCT_TYPE_SHORTS,
    displayName: "Hvite shorts",
    description: [
      "Hvis du liker kort ben kan disse shortsene i off-white være noe for deg. Nyt vinden rundt leggene!",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i hvite short med korte legger og kant nederst",
    imageName: "tamara-bellis-pONwcn4IcVU-unsplash.jpg",
    price: 489,
  },
  {
    type: PRODUCT_TYPE_SHORTS,
    displayName: "Shorts i olastoff",
    description: [
      "Jeans går aldri av moten! Med denne shortsen vil du forstå hvorfor.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i enkel, blå denimshorts",
    imageName: "marc-deriaz-vumytsi0teo-unsplash.jpg",
    price: 389,
  },
  {
    type: PRODUCT_TYPE_SHORTS,
    displayName: "Sporty shorts",
    description: [
      "Om du er sporty eller ikke spiller ingen rolle: Disse syntetiske shorts vil utløse lykkefølelsene hver gang du tar dem på deg. Materiale motvirker lukt.",
    ],
    gender: GENDER_MEN,
    imageAlt:
      "Modell i mørkeblå shorts som ender over kneet, men hvit logo på venstre leg",
    imageName: "chuttersnap-aPCgCdrr9ow-unsplash.jpg",
    price: 349,
  },
  {
    type: PRODUCT_TYPE_SHORTS,
    displayName: "Off-white-shorts",
    description: [
      "Disse bomullsshorts i eggeskall-hvit vil være en sann berikelse for vår- og sommer-garderoben din. Materialet er 30% stretsj.",
    ],
    gender: GENDER_MEN,
    imageAlt:
      "Modell i shorts i eggeskall-hvit med ben som ender rett over kneet",
    imageName: "lucie-marchant-Z0l5hlNjDuY-unsplash.jpg",
    price: 649,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Slim-fit-olabukse",
    description: [
      "Olabukse i lyseblå og slim-fit. Dette produktet har masse stretsj lagt inn for å støtte opp under dine naturlige former.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i lyseblå slim-fit-olabukse",
    imageName: "ameer-basheer-KXSX-i35_bQ-unsplash.jpg",
    price: 879,
    campaignPrice: 629,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Røde hipster-tights",
    description: [
      "Disse stiliserte hipster-tightsene i signalrød er spot-on for alle som ønsker å skille seg ut av mengden.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i tettsittende, rød bukse med høy midje, sort dyrmønster",
    imageName: "melody-jacob-WuZ7poeM21Y-unsplash.jpg",
    price: 1439,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Off-white-bukse for den modne damen",
    description: [
      "Bukse med stil: Med disse tidsløse buksene i eggeskall-hvit vil du markere deg som den modne kvinnen du er.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i tettsittende, hvit stoffbukse",
    imageName: "christian-ferrer--AshpzZKtwc-unsplash.jpg",
    price: 769,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Koselig, sennep-fargede bukse",
    description: [
      "Hypp på å prøve noe nytt? Disse buksene har en uvanlig sennep-aktig farge og er laget av et spesielt mykt stoff. Perfekt for innebruk når høststormen herjer ute.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i sennep-fergede, tettsittende stoffbukse",
    imageName: "katarina-sikuljak-R3KsTl9SG-U-unsplash.jpg",
    price: 559,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Mørkegrå hipster-bukse",
    description: [
      "Disse hipster-buksene i mørkegrå består av et meget slitesterk materiale for ekstra tøff bruk i den urbane jungelen. Du kan også lett skli opp leggene på dem.",
    ],
    gender: GENDER_WOMEN,
    imageAlt:
      "Modell i tettsittende, mørkegrå stoffbukse med svarte ruter og halvkorte, piratbukse-lignende legger",
    imageName: "napat-seang-Nt0hNFMGbxM-unsplash.jpg",
    price: 669,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Lyseblå olabukse med normal-fit",
    description: [
      "Om slim-fit ikke er din greie, kan du vurdere denne flotte olabuksen med naturlig passform. En av våre mest populære modeller.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i enkel, lyseblå denimbukse",
    imageName: "tamara-bellis-zDyJOj8ZXG0-unsplash.jpg",
    price: 859,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Svart bukse med hvite striper",
    description: [
      "Buksene har normal passform og et mønster som gjør at du vil skille deg litt ut ved neste sosiale anledning &#8211; men ikke for mye.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i lang, svart stoffbukse med hvite, vertikale striper",
    imageName: "jobz-tyler-bWathYZvsaA-unsplash.jpg",
    price: 1099,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Eggeskall-hvit slim-fit-bukse",
    description: [
      "Disse buksene har en trangere passform enn vanlig og er et lite kupp for prisbevisste uten at det kompromisses på kvalitet.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i moderne, off-white slim-fit-bukse",
    imageName: "marc-deriaz-w1Oq4m3OPjg-unsplash.jpg",
    price: 579,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Eggeskall-hvit bukse til fritidsbruk",
    description: [
      "Disse buksene i eggeskall-hvit (off-white) har topp-moderne passform og lar seg kombinere med nesten alt.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i enkel, hvit fritidsbukse",
    imageName: "krystian-krzewinski-oko89dbRhGE-unsplash.jpg",
    price: 799,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Klassisk bukse til herremannen",
    description: [
      "Bukse i 1930-stil som passer godt voksne menn og unge som er interessert i vintage.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Smårutete, grå bukse med vid passform",
    imageName: "clem-onojeghuo-kg3N8vqvMd8-unsplash.jpg",
    price: 1339,
  },
  {
    type: PRODUCT_TYPE_PANTS,
    displayName: "Grønn, moderne bomullsbukse",
    description: [
      "Vid øverst, trang nederst: Denne toppmoderne buksen har den nyeste passformen etterspurt av den yngre generasjonen.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Grønn stoffbukse, vid øverst og trang nederst",
    imageName: "banter-snaps-jC7nVH_Sw8k-unsplash.jpg",
    price: 689,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Mørkeblå fritidsdress",
    description: [
      "Denne dressen er til fritid og tilbakelente arbeidsmiljøer. Fargen er en smule formell, men ikke for mye.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i klassisk marineblå dress",
    imageName: "alora-griffiths-MdZhpwhdKMI-unsplash.jpg",
    price: 1219,
    campaignPrice: 999,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Grå dress",
    description: [
      "Slips har du? Fordelen med denne grå dressen er at den lar seg kombinere med nesten alle andre farger.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i tettsittende grå dress",
    imageName: "banter-snaps-10FNZghGaLI-unsplash.jpg",
    price: 889,
  },
  {
    type: PRODUCT_TYPE_BLAZER,
    displayName: "Grå fritidsskjorte i bomull",
    description: [
      "Denne grå bomullsblazer er svært attraktiv blant våre yngre kunder og de som fortsatt er ung til sinns.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i enkel, mårkegrå blazer",
    imageName: "edward-franklin-GfCQjJV1DrI-unsplash.jpg",
    price: 639,
  },
  {
    type: PRODUCT_TYPE_SHIRT,
    displayName: "Rutete bomullsskjorte",
    description: [
      "Denne skjorten har de nyeste trendfargene og er samtidig meget allsidig hva gjelder bruksområder.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i blå-gul-hvit-rutete bomullsskjorte",
    imageName: "blake-barlow-BwJ6oov5AoM-unsplash.jpg",
    price: 719,
    campaignPrice: 569,
  },
  {
    type: PRODUCT_TYPE_SHIRT,
    displayName: "Kul og trendy",
    description: [
      "Med denne skjorten setter du trenden blant vennene dine i mange måneder fremover. Er best egnet for fritidsbruk.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i enkel, hvit skjorte uten brystlomme",
    imageName: "cihan-soysakal-5OjfCQduO9E-unsplash.jpg",
    price: 669,
  },
  {
    type: PRODUCT_TYPE_SHIRT,
    displayName: "Klassisk og moderne på samme tid",
    description: [
      "I denne vinrøde skjorten blir du fort festens midtpunkt, mens den klassiske formen vil sørge for at du aldri vil oppleve dette som ubehagelig",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i klassisk vinrød skjorte uten brystlomme",
    imageName: "itay-verchik--aInqL0SlP4-unsplash.jpg",
    price: 579,
  },
  {
    type: PRODUCT_TYPE_SHIRT,
    displayName: "Forretningsskjorte",
    description: [
      "En elegant skjorte, perfekt til forretningsanledninger, men du vil med sikkerhet også få mange beundringsverdige blikk ved neste fest.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i blåhvitt-stripede skjorte uten brystlomme",
    imageName: "krystian-krzewinski-eSO7_yNJ33E-unsplash.jpg",
    price: 559,
  },
  {
    type: PRODUCT_TYPE_SHIRT,
    displayName: "Ung og robust",
    description: [
      "Denne bomullsskjorten er florlett, strykefri og har mye bevegelsesfrihet til unge, aktive voksne.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i mørkeblå skjorte med grå prikker, ingen brystlomme",
    imageName: "mario-klassen-t8yimzM2bEY-unsplash.jpg",
    price: 499,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Forfriskende og attraktiv",
    description: [
      "Denne lekre frakken passer både til høst og vår, og den varmer akkurat passe mye for årstiden.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i lysegul frakk med mørke knapper foran og på ermene",
    imageName: "subhkaran-singh-EMhVJwkIIYU-unsplash.jpg",
    price: 829,
    campaignPrice: 629,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Ullen luksus",
    description: [
      "Møt våren i grønn! Med denne deilige ullfrakken matcher du naturens farger uten å fryse.",
    ],
    gender: GENDER_WOMEN,
    imageAlt:
      "Modell i lang, ullen frakk med to knapper foran og komfortable lommer for hendene",
    imageName: "tyler-nix-Q3LKEbYX2-w-unsplash.jpg",
    price: 699,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Eleganse i eggeskall-hvit",
    description: [
      "Denne lekre frakken til damen passer som hånd i hanske i forretningssituasjoner og på reiser.",
    ],
    gender: GENDER_WOMEN,
    imageAlt: "Modell i tykk off-white frakk med to knapper, uten belte",
    imageName: "dmitriy-ilkevich-88daTR_Od3o-unsplash.jpg",
    price: 1399,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Skinnfrakk",
    description: [
      "En lekker skinnfrakk som får deg til å skille deg ut fra mengden. Glidelåsen er av topp kvalitet og kommer med livstidsgaranti.",
    ],
    gender: GENDER_MEN,
    imageAlt:
      "Modell i beige skinnfrakk med MC-glidelås på høyre side og stor krage",
    imageName: "dami-adebayo-k6aQzmIbR1s-unsplash.jpg",
    price: 3449,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Brun luksus",
    description: [
      "En tykk og god ullfrakk som vil holde deg varm gjennom vinteren.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i halvlang, brun frakk i tykk stoff, tre knapper",
    imageName: "lee-weng-qfFI57PMXj8-unsplash.jpg",
    price: 4199,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Lærfrakk",
    description: [
      "En varm frakk i skinn og med ullfor, som holder deg varm på de kaldeste vinterdagene.",
    ],
    gender: GENDER_MEN,
    imageAlt:
      "Modell i brun skinnfrakk med hvit ullkrage og to store lommer på begge sider",
    imageName: "sorin-sirbu-ifYt0sKdJYk-unsplash.jpg",
    price: 3999,
  },
  {
    type: PRODUCT_TYPE_BLAZER,
    displayName: "Grønn blazer",
    description: ["Den perfekte sommerdressen."],
    gender: GENDER_MEN,
    imageAlt: "Modell i enkel, grå-grønn blazer",
    imageName: "krystian-krzewinski-SZ9y9PGVQbY-unsplash.jpg",
    price: 2999,
  },
  {
    type: PRODUCT_TYPE_BLAZER,
    displayName: "Mørkerød blazer",
    description: [
      "En trendy, hip blazer som vil hjelpe deg med å skille deg ut.",
    ],
    gender: GENDER_MEN,
    imageAlt: "Modell i tettsittende, vinrød blazer",
    imageName: "thai-an-kog39lmHguY-unsplash.jpg",
    price: 4099,
    campaignPrice: 3509,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Mørk eleganse",
    description: ["En klassisk dress for formelle anledninger."],
    gender: GENDER_MEN,
    imageAlt: "Modell i mørkegrå dress med en antydning av grå ruter",
    imageName: "javier-reyes-qi2cD5oR_fE-unsplash.jpg",
    price: 6259,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Mørkegrå dress til forretningsmannen",
    description: ["En klassisk dress for formelle anledninger."],
    gender: GENDER_MEN,
    imageAlt: "Modell i tettsittende, enkel dress i mørkeblått",
    imageName: "gregory-hayes-h5cd51KXmRQ-unsplash.jpg",
    price: 5979,
  },
]
