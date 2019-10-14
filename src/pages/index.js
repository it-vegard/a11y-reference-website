import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductList from "../components/product-list"
import { mapProducts, mapProductsToType } from "../util/products-util"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"

const IndexPage = ({ data }) => {
  const products = mapProducts(data.allProduct.nodes, data.allFile.nodes)
  const filteredProducts = mapProductsToType(products)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Clothes</h1>
      <h2>Coats</h2>
      <ProductList products={filteredProducts.coat} />
      <h2>Blazers</h2>
      <ProductList products={filteredProducts.blazer} />
      <h2>Suits</h2>
      <ProductList products={filteredProducts.suit} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: {
    ProductQueryPropType,
    ImageQueryPropType,
  },
}

export const query = graphql`
  query FrontPageQuery($productType: String, $gender: String) {
    allProduct(
      filter: { type: { eq: $productType }, gender: { eq: $gender } }
    ) {
      nodes {
        displayName
        id
        imageName
        price
        type
        gender
        slug
      }
    }
    allFile(filter: { relativeDirectory: { eq: "products" } }) {
      nodes {
        childImageSharp {
          fixed(width: 300, cropFocus: CENTER, height: 350) {
            src
            originalName
          }
        }
      }
    }
  }
`

export default IndexPage
