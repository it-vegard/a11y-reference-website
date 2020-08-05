export const toSlug = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^\w|-]/g, "")

export const createProductUrl = (language, gender, type, product) => {
  let url = `/${language}`
  if (gender) {
    url = `${url}/${toSlug(gender)}`
    if (type) {
      url = `${url}/${toSlug(type)}`
      if (product) {
        url = `${url}/${toSlug(product.displayName)}`
      }
    }
  }
  return url
}
