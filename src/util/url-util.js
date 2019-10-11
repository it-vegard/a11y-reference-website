export const toSlug = text =>
  text
    .toString()
    .toLowerCase()
    .replace(" ", "-")
    .replace(/[^\w|-]/, "")
