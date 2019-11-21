const GENDER_MEN = "men"
const GENDER_WOMEN = "women"
const PRODUCT_TYPE_COAT = "coat"
const PRODUCT_TYPE_BLAZER = "blazer"
const PRODUCT_TYPE_SUIT = "suit"

module.exports = [
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Beige coat",
    description: [
      "A sleek, leather coat that will help you stand out in the crowd. The top of the line zippers come with a life-time warranty.",
    ],
    gender: GENDER_MEN,
    imageName: "dami-adebayo-k6aQzmIbR1s-unsplash.jpg",
    price: 320,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Brown coat",
    description: [
      "A thick, comfortable wool coat that will keep you warm throughout the winter.",
    ],
    gender: GENDER_MEN,
    imageName: "lee-weng-qfFI57PMXj8-unsplash.jpg",
    price: 380,
  },
  {
    type: PRODUCT_TYPE_COAT,
    displayName: "Suede coat",
    description: [
      "A warm coat inlaid with wool to keep you warm even in the coldest of days.",
    ],
    gender: GENDER_MEN,
    imageName: "sorin-sirbu-ifYt0sKdJYk-unsplash.jpg",
    price: 430,
  },
  {
    type: PRODUCT_TYPE_BLAZER,
    displayName: "Brown blazer",
    description: ["The perfect suit for your next summer party."],
    gender: GENDER_MEN,
    imageName: "krystian-krzewinski-SZ9y9PGVQbY-unsplash.jpg",
    price: 400,
  },
  {
    type: PRODUCT_TYPE_BLAZER,
    displayName: "Burgundy blazer",
    description: [
      "A trendy, hip blazer that will make you stand out in a crowd.",
    ],
    gender: GENDER_MEN,
    imageName: "thai-an-kog39lmHguY-unsplash.jpg",
    price: 420,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Dark grey suit",
    description: ["A classic suit for your formal party."],
    gender: GENDER_MEN,
    imageName: "javier-reyes-qi2cD5oR_fE-unsplash.jpg",
    price: 630,
  },
  {
    type: PRODUCT_TYPE_SUIT,
    displayName: "Dark grey women's suit",
    description: ["A classic suit for your formal party."],
    gender: GENDER_WOMEN,
    imageName: "javier-reyes-qi2cD5oR_fE-unsplash.jpg",
    price: 630,
  },
]
