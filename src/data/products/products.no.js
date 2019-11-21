const GENDER_MEN = "herre"
const GENDER_WOMEN = "kvinne"
const PRODUCT_TYPE_COAT = "frakk"
const PRODUCT_TYPE_BLAZER = "blazer"
const PRODUCT_TYPE_SUIT = "dress"

module.exports = [
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Beige frakk",
    description: [
      "En lekker skinnfrakk som får deg til å skille deg ut fra mengden. Glidelåsen er av topp kvalitet og kommer med livstidsgaranti.",
    ],
    gender: GENDER_MEN,
    imageName: "dami-adebayo-k6aQzmIbR1s-unsplash.jpg",
    price: 3000,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Brun frakk",
    description: [
      "En tykk og god ullfrakk som vil holde deg varm gjennom vinteren.",
    ],
    gender: GENDER_MEN,
    imageName: "lee-weng-qfFI57PMXj8-unsplash.jpg",
    price: 4200,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Lærfrakk",
    description: [
      "En varm frakk med ullfor som holder deg varm på de kaldeste vinterdagene.",
    ],
    gender: GENDER_MEN,
    imageName: "sorin-sirbu-ifYt0sKdJYk-unsplash.jpg",
    price: 4500,
  },
  {
    type: PRODUCT_TYPE_BLAZER,
    displayName: "Brun blazer",
    description: ["Den perfekte sommerdressen."],
    gender: GENDER_MEN,
    imageName: "krystian-krzewinski-SZ9y9PGVQbY-unsplash.jpg",
    price: 3800,
  },
  {
    type: PRODUCT_TYPE_BLAZER,
    displayName: "Mørkerød blazer",
    description: [
      "En trendy, hip blazer som vil hjelpe deg med å skille deg ut.",
    ],
    gender: GENDER_MEN,
    imageName: "thai-an-kog39lmHguY-unsplash.jpg",
    price: 4100,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Mørk dress",
    description: ["En klassisk dress for formelle anledninger."],
    gender: GENDER_MEN,
    imageName: "javier-reyes-qi2cD5oR_fE-unsplash.jpg",
    price: 6300,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Mørkegrå kvinnedress",
    description: ["En klassisk dress for formelle anledninger."],
    gender: GENDER_WOMEN,
    imageName: "javier-reyes-qi2cD5oR_fE-unsplash.jpg",
    price: 6100,
  },
]
