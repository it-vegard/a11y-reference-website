const textsEN = {
  // general
  LANG: "English",
  CURRENCY: "USD",
  RETAIL_PRICE: price => `Previous price: ${price}`,
  // entire site
  WEBSITE_NAME: "Clothes4all",
  WEBSITE_DESCRIPTION:
    "A fake web shop for testing and learning about accessibility.",
  RULE_SET: "Ruleset",
  SIZES: "Sizes",
  PICK_SIZE: "Pick size",
  CLOSE: "Close",
  ADD_TO_CART: "Add to cart",
  CAMPAIGN_HEADING: "Campaigns",
  CAMPAIGN_RIBBON: "On sale!",
  SALES_HEADING: "Christmas Sale!",
  SALES_TEXT: "10-30% off",
  CART: "Cart",
  CART_WITH_ITEMS: numberOfItems => `Cart (${numberOfItems})`,
  GO_TO_CHECKOUT: "Gå til checkout",
  GO_TO_PAYMENT: "Go to payment",
  COMPLETE_PURCHASE: "Complete purchase",
  CONTINUE: "Continue",
  IN_TOTAL: "Total:",
  LADIES_FASHION: "Ladies' fashion",
  GENTS_FASHION: "Gents' fashion",
  FOOTER_WEB_SHOP_LINKS_HEADER: "Customer Service",
  FOOTER_RESOURCES_LINKS_HEADER: "Resources",
  // portal
  HOME: "Home",
  PRODUCT_FOR_GENDER_HEADING: gender => {
    if (gender && gender.toLowerCase() === "women") {
      return textsEN.LADIES_FASHION
    } else {
      return textsEN.GENTS_FASHION
    }
  },
  SHOP: "shop",
  // personal details
  PERS_DETAILS_TITLE: "Personal details",
  PERS_DETAILS_HEADER: "Personal details",
  PERS_DETAILS_FIRST_NAME: "First name",
  PERS_DETAILS_LAST_NAME: "Last name",
  PERS_DETAILS_STREET: "Street",
  PERS_DETAILS_ZIP: "Zip code",
  PERS_DETAILS_CITY: "City",
  // payment details
  PAY_DETAILS_TITLE: "Payment details",
  PAY_DETAILS_HEADER: "Payment details",
  PAY_DETAILS_TYPE: "Payment type",
  PAY_DETAILS_CARD_NUMBER: "Card number",
  PAY_DETAILS_EXPIRY_MONTH: "Expiry month",
  PAY_DETAILS_EXPIRY_YEAR: "Expiry year",
  PAY_DETAILS_CSC: "CSC",
  // receipt
  RECEIPT_TITLE: "Receipt",
  RECEIPT_HEADER: "Thank you for your purchase!",
  RECEIPT_NOTE: "PS: You noticed this was not a real shop, right?",
  RECEIPT_DISCLAIMER:
    "No data has been sent from your computer. Data was preliminary stored in your browser while you were moving around the site but is now deleted. #PrivacyByDesign",
  PAGES: {
    CAMPAIGN: {
      URL: "/en/shop/campaign",
      TITLE: "Sale!",
    },
    ABOUT: {
      URL: "/en/about",
      TITLE: "About",
    },
    CREDITS: {
      URL: "/en/credits",
      TITLE: "Credits",
    },
    DELIVERY: {
      URL: "/en/shop/delivery",
      TITLE: "Shipping and delivery",
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
      URL: "/en/shop/returns",
      TITLE: "Exchanges and returns",
    },
    TERMS: {
      URL: "/no/shop/terms",
      TITLE: "Terms and Conditions",
    },
    CHECKOUT_CART: {
      URL: "/en/shop/cart",
      TITLE: "Shopping Cart",
    },
    CHECKOUT_PERSONAL_DETAILS: {
      URL: "/en/shop/personal-details",
      TITLE: "Personal Details",
    },
    CHECKOUT_PAYMENT_DETAILS: {
      URL: "/en/shop/payment-details",
      TITLE: "Payment",
    },
    CHECKOUT_RECEIPT: {
      URL: "/en/shop/receipt",
      TITLE: "Receipt",
    },
  },
  PORTAL: {
    FOOTER_HEADER: "Resources",
  },
}

export default textsEN
