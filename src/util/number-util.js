import TEXTS from "../data/texts"

export const toCurrency = (value, language) => {
  if (Intl && Intl.NumberFormat) {
    return Intl.NumberFormat(language, {
      style: "currency",
      currency: TEXTS[language].CURRENCY,
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
    }).format(value)
  } else if (language === "en") {
    return `$${value}`
  } else if (language === "no") {
    return `${value},-`
  } else {
    return value
  }
}
