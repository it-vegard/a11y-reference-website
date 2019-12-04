const textsNO = {
  // general
  LANG: "norsk",
  CURRENCY: "NOK",
  // entire site
  WEBSITE_NAME: "Klær for alle",
  WEBSITE_DESCRIPTION:
    "A fake web shop for testing and learning about accessibility.",
  RULE_SET: "Regelsett",
  SIZES: "Størrelser",
  PICK_SIZE: "Velg størrelse",
  CLOSE: "Lukk",
  ADD_TO_CART: "Legg i handlekurven",
  CART: "Handlekurv",
  CART_WITH_ITEMS: numberOfItems => `Handlekurv (${numberOfItems})`,
  GO_TO_CHECKOUT: "Gå til kassen",
  GO_TO_PAYMENT: "Gå til betaling",
  COMPLETE_PURCHASE: "Fullfør kjøp",
  CONTINUE: "Fortsett",
  IN_TOTAL: "Totalt:",
  LADIES_FASHION: "Damemote",
  GENTS_FASHION: "Herremote",
  FOOTER_WEB_SHOP_LINKS_HEADER: "Kundeservice",
  FOOTER_RESOURCES_LINKS_HEADER: "Ressurser",
  // portal
  HOME: "Hjem",
  PRODUCT_FOR_GENDER_HEADING: gender => {
    if (gender && gender.toLowerCase() === "kvinner") {
      return textsNO.LADIES_FASHION
    } else {
      return textsNO.GENTS_FASHION
    }
  },
  // personal details
  PERS_DETAILS_TITLE: "Persondata",
  PERS_DETAILS_FIRST_NAME: "Fornavn",
  PERS_DETAILS_LAST_NAME: "Etternavn",
  PERS_DETAILS_STREET: "Gate",
  PERS_DETAILS_ZIP: "Postkode",
  PERS_DETAILS_CITY: "By",
  // payment details
  PAY_DETAILS_TITLE: "Betalingsdetaljer",
  PAY_DETAILS_TYPE: "Betalingsmåte",
  PAY_DETAILS_CARD_NUMBER: "Kortnummer",
  PAY_DETAILS_EXPIRY_MONTH: "Utløpsmåned",
  PAY_DETAILS_EXPIRY_YEAR: "Utløpsår",
  PAY_DETAILS_CSC: "CSC",
  // receipt
  RECEIPT_TITLE: "Kvittering",
  RECEIPT_HEADER: "Mange takk for kjøpet ditt!",
  RECEIPT_NOTE:
    "PS: Du fikk med deg at dette ikke er en riktig nettbutikk, eller?",
  RECEIPT_DISCLAIMER:
    "Det ble ikke sendt noen data fra nettleseren din. Dataene ble lagret kun midlertidig i nettleseren og er nå slettet. #PrivacyByDesign",
  PAGES: {
    ABOUT: {
      URL: "/no/om-oss",
      TITLE: "Om denne nettsiden",
    },
    CREDITS: {
      URL: "/en/credits",
      TITLE: "Credits",
    },
    DELIVERY: {
      URL: "/no/levering",
      TITLE: "Levering",
    },
    HOW_TO: {
      URL: "/en/how-to",
      TITLE: "How to's",
    },
    SETTINGS: {
      URL: "/settings",
      TITLE: "Settings",
    },
    RETURNS: {
      URL: "/no/retur",
      TITLE: "Bytte og retur",
    },
    TERMS: {
      URL: "/no/betingelser",
      TITLE: "Kjøpsvilkår",
    },
    CHECKOUT_CART: {
      URL: "/no/handlekurv",
      TITLE: "Handlekurv",
    },
    CHECKOUT_PERSONAL_DETAILS: {
      URL: "/no/personlige-opplysninger",
      TITLE: "Personlige Opplysninger",
    },
    CHECKOUT_PAYMENT_DETAILS: {
      URL: "/no/betaling",
      TITLE: "Betaling",
    },
    CHECKOUT_RECEIPT: {
      URL: "/no/kvittering",
      TITLE: "Kvittering",
    },
  },
}

export default textsNO
