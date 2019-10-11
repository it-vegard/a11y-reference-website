/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const products = require("./src/data/products")

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
}
