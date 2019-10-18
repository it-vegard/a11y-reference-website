export const toSlug = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^\w|-]/, "")

export const createProductUrl = (gender, type, name) => {
  let url = "/"
  if (gender) {
    url = `/${toSlug(gender)}`
    if (type) {
      url = `${url}/${toSlug(type)}`
      if (name) {
        url = `${url}/${toSlug(name)}`
      }
    }
  }
  return url
}
