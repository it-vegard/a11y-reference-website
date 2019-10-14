export const mapProductsToGenderAndType = products =>
  products.reduce((acc, curr) => {
    const productsByGender = mapProductsToGender(products)
    const productsByGenderAndType = {}
    Object.keys(productsByGender).forEach(gender => {
      productsByGenderAndType[gender] = mapProductsToType(
        Array.from(productsByGender[gender])
      )
    })
    return productsByGenderAndType
  }, {})

export const mapProductsToType = products =>
  products.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.type]: [...(acc[curr.type] || []), curr],
    }),
    {}
  )

export const mapProductsToGender = products =>
  products.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.gender]: [...(acc[curr.gender] || []), curr],
    }),
    {}
  )

export const getImageForProduct = (images = [], name) =>
  images.find(image => image.childImageSharp.fixed.originalName === name)

export const mapProducts = (products = [], images = []) =>
  products.map(product => ({
    ...product,
    imageSrc: getImageForProduct(images, product.imageName).childImageSharp
      .fixed.src,
  }))
