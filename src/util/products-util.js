import { toSlug } from "./url-util"

export const getImageForProduct = (images = [], name) =>
  images.find(image => image.childImageSharp.fixed.originalName === name)

export const mapProducts = (products = [], images = []) =>
  products.map(product => ({
    ...product,
    imageSrc: getImageForProduct(images, product.imageName).childImageSharp
      .fixed.src,
  }))

export const createProductId = product =>
  `${toSlug(product.gender)}-${toSlug(product.type)}-${toSlug(
    product.displayName
  )}`

export const getAllGendersForProducts = products =>
  products
    .map(product => product.gender)
    .filter((value, index, self) => self.indexOf(value) === index)

export const getAllTypesForProducts = products =>
  products
    .map(product => product.type)
    .filter((value, index, self) => self.indexOf(value) === index)
