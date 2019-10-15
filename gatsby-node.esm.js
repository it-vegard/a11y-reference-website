/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

import path from "path"
import { mapProductsToGenderAndType } from "./src/util/products-util"
import { toSlug } from "./src/util/url-util"

import products from "./src/data/products"
import credits from "./src/data/credits"
import { capitalizeAllWords } from "./src/util/text-util"

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const ProductListPage = path.resolve(
    "./src/page-templates/product-list-page.js"
  )
  const ProductPage = path.resolve("./src/page-templates/product-page.js")

  return graphql(
    `
      {
        allProduct {
          nodes {
            displayName
            gender
            id
            imageName
            price
            type
          }
        }
      }
    `,
    { folder: "products" }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create product list pages
    const productLists = mapProductsToGenderAndType(
      result.data.allProduct.nodes
    )

    // Create product details pages
    Object.keys(productLists).forEach(gender => {
      createPage({
        path: `/${gender}`,
        component: ProductListPage,
        context: {
          gender,
          breadcrumbs: [
            {
              title: "Home",
              path: "/",
            },
            {
              title: capitalizeAllWords(gender),
              path: `/${gender}`,
            },
          ],
        },
      })
      Object.keys(productLists[gender]).forEach(productType => {
        createPage({
          path: `/${gender}/${productType}`,
          component: ProductListPage,
          context: {
            gender,
            productType,
            breadcrumbs: [
              {
                title: "Home",
                path: "/",
              },
              {
                title: capitalizeAllWords(gender),
                path: `/${gender}`,
              },
              {
                title: capitalizeAllWords(productType),
                path: `/${gender}/${productType}`,
              },
            ],
          },
        })
        productLists[gender][productType].forEach(product => {
          createPage({
            path: `/${gender}/${productType}/${toSlug(product.displayName)}`,
            component: ProductPage,
            context: {
              gender,
              productType,
              slug: toSlug(product.displayName),
              breadcrumbs: [
                {
                  title: "Home",
                  path: "/",
                },
                {
                  title: capitalizeAllWords(gender),
                  path: `/${gender}`,
                },
                {
                  title: capitalizeAllWords(productType),
                  path: `/${gender}/${productType}`,
                },
                {
                  title: capitalizeAllWords(product.displayName),
                  path: `/${gender}/${productType}/${toSlug(
                    product.displayName
                  )}`,
                },
              ],
            },
          })
        })
      })
    })
  })
}

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
      slug: toSlug(product.displayName),
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
