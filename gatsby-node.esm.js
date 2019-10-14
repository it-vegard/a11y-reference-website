/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

import products from "./src/data/products"
import credits from "./src/data/credits"

exports.sourceNodes = ({ actions, createContentDigest, createNodeId }) => {
  products.forEach(product => {
    const productNode = {
      displayName: product.displayName,
      gender: product.gender,
      id: createNodeId(`Product-${product.displayName}`),
      imageName: product.imageName,
      internal: {
        contentDigest: createContentDigest(product),
        type: "product",
      },
      price: product.price,
      type: product.type,
    }
    actions.createNode(productNode)
  })
  credits.forEach(credit => {
    const creditNode = {
      id: createNodeId(`Credit-${credit.userName}`),
      name: credit.name,
      userName: credit.userName,
      imageSrc: credit.imageSrc,
      imageAlt: credit.imageAlt,
      internal: {
        contentDigest: createContentDigest(credit),
        type: "credit",
      },
    }
    actions.createNode(creditNode)
  })
}
