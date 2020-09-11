import TEXTS from "../data/texts"

export const toSlug = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^\w|-]/g, "")

export const createProductUrl = (language, gender, type, product) => {
  let url = `/${language}/${TEXTS[language].SHOP}`
  if (gender) {
    url = `${url}/${toSlug(gender)}`
    if (type) {
      url = `${url}/${toSlug(type)}`
      if (product) {
        url = `${url}/${toSlug(product)}`
      }
    }
  }
  return url
}

export const withoutTrailingSlash = url => url.replace(/\/$/, "")
