import wcag from "wcag-as-json/src/wcag"
import path from "path"

import products from "./src/data/products"
import sizes from "./src/data/sizes"
import credits from "./src/data/credits"
import rules from "./src/data/rules"
import {
  createProductId,
  mapProductsToGenderAndType,
} from "./src/util/products-util"
import { capitalizeAllWords } from "./src/util/text-util"
import { createProductUrl, toSlug } from "./src/util/url-util"

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
            description
            displayName
            gender
            id
            imageName
            price
            sizes {
              id
              label
              name
              value
            }
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
        path: createProductUrl(gender),
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
              path: createProductUrl(gender),
            },
          ],
        },
      })
      Object.keys(productLists[gender]).forEach(productType => {
        createPage({
          path: createProductUrl(gender, productType),
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
                path: createProductUrl(gender),
              },
              {
                title: capitalizeAllWords(productType),
                path: createProductUrl(gender, productType),
              },
            ],
          },
        })
        productLists[gender][productType].forEach(product => {
          createPage({
            path: createProductUrl(gender, productType, product.displayName),
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
                  path: createProductUrl(gender),
                },
                {
                  title: capitalizeAllWords(productType),
                  path: createProductUrl(gender, productType),
                },
                {
                  title: capitalizeAllWords(product.displayName),
                  path: createProductUrl(
                    gender,
                    productType,
                    product.displayName
                  ),
                },
              ],
            },
          })
        })
      })
    })
  })
}

const addProductNodes = (
  products,
  sizes,
  createContentDigest,
  createNode,
  createNodeId
) => {
  products.forEach(product => {
    const productNode = {
      description: product.description,
      displayName: product.displayName,
      gender: product.gender,
      id: createNodeId(`Product-${product.displayName}`),
      imageName: product.imageName,
      internal: {
        contentDigest: createContentDigest({
          ...product,
          sizes,
        }),
        type: "product",
      },
      price: product.price,
      sizes: sizes.map(size => ({
        id: `${createProductId(product)}-${size.id}`,
        label: size.displayName,
        name: `${createProductId(product)}-size`,
        value: size.id,
      })),
      slug: toSlug(product.displayName),
      type: product.type,
    }
    createNode(productNode)
  })
}

const addCreditNodes = (
  credits,
  createContentDigest,
  createNode,
  createNodeId
) => {
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
    createNode(creditNode)
  })
}

const addInternalRuleNodes = (
  rules,
  createContentDigest,
  createNode,
  createNodeId
) => {
  rules.forEach(rule => {
    const ruleNode = {
      ...rule,
      id: createNodeId(`Rule-${rule.axeId}`),
      internal: {
        contentDigest: createContentDigest(rule),
        type: "internalRule",
      },
    }
    createNode(ruleNode)
  })
}

const createPrincipleNode = (principle, createContentDigest, createNodeId) => ({
  ...principle,
  id: createNodeId(`Principle-${principle["ref_id"]}`),
  internal: {
    contentDigest: createContentDigest(principle),
    type: "wcagPrinciple",
  },
})

const createGuidelineNode = (
  guideline,
  principle,
  createContentDigest,
  createNodeId
) => ({
  ...guideline,
  id: createNodeId(`Guideline-${guideline["ref_id"]}`),
  principle: principle["ref_id"],
  internal: {
    contentDigest: createContentDigest(guideline),
    type: "wcagGuideline",
  },
})

const createSuccessCriterionNode = (
  successCriterion,
  guideline,
  principle,
  createContentDigest,
  createNodeId
) => ({
  ...successCriterion,
  id: createNodeId(`SuccessCriteria-${successCriterion["ref_id"]}`),
  guideline: guideline["ref_id"],
  principle: principle["ref_id"],
  internal: {
    contentDigest: createContentDigest(successCriterion),
    type: "wcagSuccessCriteria",
  },
})

const addWcagSuccessCriteria = (
  wcag,
  createContentDigest,
  createNode,
  createNodeId
) => {
  wcag.forEach(principle => {
    createNode(
      createPrincipleNode(principle, createContentDigest, createNodeId)
    )
    principle.guidelines.forEach(guideline => {
      createNode(
        createGuidelineNode(
          guideline,
          principle,
          createContentDigest,
          createNodeId
        )
      )
      guideline["success_criteria"].forEach(successCriterion => {
        createNode(
          createSuccessCriterionNode(
            successCriterion,
            guideline,
            principle,
            createContentDigest,
            createNodeId
          )
        )
      })
    })
  })
}

exports.sourceNodes = ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions
  addProductNodes(
    products,
    sizes,
    createContentDigest,
    createNode,
    createNodeId
  )
  addCreditNodes(credits, createContentDigest, createNode, createNodeId)
  addInternalRuleNodes(rules, createContentDigest, createNode, createNodeId)
  addWcagSuccessCriteria(wcag, createContentDigest, createNode, createNodeId)
}
