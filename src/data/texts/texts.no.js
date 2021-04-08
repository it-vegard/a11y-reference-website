const textsNO = {
  // general
  LANG: "norsk",
  CURRENCY: "NOK",
  MENU: "Meny",
  RETAIL_PRICE: price => `Førpris: ${price}`,
  // entire site
  WEBSITE_NAME: "Klær for alle",
  WEBSITE_DESCRIPTION:
    "A fake web shop for testing and learning about accessibility.",
  RULE_SET: "Regelsett",
  SIZES: "Størrelser",
  PICK_SIZE: "Velg størrelse",
  CLOSE: "Lukk",
  ADD_TO_CART: "Legg i handlekurven",
  CAMPAIGN_HEADING: "Kampanjer",
  CAMPAIGN_RIBBON: "Tilbud!",
  SALES_HEADING: "Førjulssalg!",
  SALES_TEXT: "10-30% rabatt",
  CART: "Handlekurv",
  CART_WITH_ITEMS: numberOfItems => `Handlekurv (${numberOfItems})`,
  GO_TO_CHECKOUT: "Gå til kassen",
  GO_TO_PAYMENT: "Gå til betaling",
  COMPLETE_PURCHASE: "Fullfør kjøp",
  GO_TO_PERSONAL_DETAILS: "Gå til personlige opplysninger",
  IN_TOTAL: "Totalt:",
  LADIES_FASHION: "Damemote",
  GENTS_FASHION: "Herremote",
  FOOTER_WEB_SHOP_LINKS_HEADER: "Kundeservice",
  FOOTER_RESOURCES_LINKS_HEADER: "Ressurser",
  TIMEOUT_LIMIT: 20,
  TIMEOUT_WARNING: minutesToTimeout =>
    `Varene er reservert i ${minutesToTimeout} ${
      minutesToTimeout > 0 ? "minutter" : "minutt"
    }, og vil snart gjøres tilgjengelig for andre igjen. Vil du ha mer tid til å fullføre handelen?`,
  CONDITION_TIMEOUT: (minutesToTimeout, isTimingAdjustable) =>
    `Varen reserveres i ${minutesToTimeout} ${
      minutesToTimeout > 0 ? "minutter" : "minutt"
    }, før den gjøres tilgjengelig for andre igjen.${
      isTimingAdjustable
        ? " Du blir spurt om du vil ha mer tid før tiden går ut."
        : ""
    }`,
  // portal
  HOME: "Hjem",
  PRODUCT_FOR_GENDER_HEADING: gender => {
    if (gender && gender.toLowerCase() === "kvinner") {
      return textsNO.LADIES_FASHION
    } else {
      return textsNO.GENTS_FASHION
    }
  },
  SHOP: "butikk",
  CHECKOUT: "kassen",
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
  BROWSE: "Se flere",
  SEE_MORE: "Se mer",
  PAGES: {
    FRONT_PAGE: {
      URL: "/no/butikk",
      TITLE: "Klær for alle!",
    },
    CAMPAIGN: {
      URL: "/no/butikk/kampanje",
      TITLE: "Tilbud!",
    },
    ABOUT: {
      URL: "/no/om-oss",
      TITLE: "Om denne nettsiden",
    },
    CREDITS: {
      URL: "/no/opphavsrett",
      TITLE: "Opphavsrett",
    },
    DELIVERY: {
      URL: "/no/butikk/levering",
      TITLE: "Levering",
    },
    HOW_TO: {
      URL: "/no/bruksomrader",
      TITLE: "Bruksområder",
    },
    SETTINGS: {
      URL: "/settings",
      TITLE: "Innstillinger",
    },
    RETURNS: {
      URL: "/no/butikk/retur",
      TITLE: "Bytte og retur",
    },
    TERMS: {
      URL: "/no/butikk/betingelser",
      TITLE: "Kjøpsvilkår",
    },
    CHECKOUT_CART: {
      URL: "/no/butikk/kassen/handlekurv",
      TITLE: "Handlekurv",
    },
    CHECKOUT_PERSONAL_DETAILS: {
      URL: "/no/butikk/kassen/personlige-opplysninger",
      TITLE: "Personlige Opplysninger",
    },
    CHECKOUT_PAYMENT_DETAILS: {
      URL: "/no/butikk/kassen/betaling",
      TITLE: "Betaling",
    },
    CHECKOUT_RECEIPT: {
      URL: "/no/butikk/kassen/kvittering",
      TITLE: "Kvittering",
    },
  },
  PORTAL: {
    FOOTER_HEADER: "Ressurser",
  },
}

export default textsNO
