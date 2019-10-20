import React from "react"
import { graphql, Link } from "gatsby"
import * as PropTypes from "prop-types"

import Layout from "../components/layout"
import ProductList from "../components/product-list"
import SEO from "../components/seo"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"
import { mapProducts, mapProductsToType } from "../util/products-util"
import LocationContext from "../components/location-context"
import AccessibilityRulesWrapper from "../components/accessibility-rules/accessibility-rules-wrapper"

const IndexPage = ({ data, location }) => {
  const products = mapProducts(data.allProduct.nodes, data.allFile.nodes)
  const filteredProducts = mapProductsToType(products)
  return (
    <LocationContext.Provider value={{ location }}>
      <AccessibilityRulesWrapper>
        <Layout>
          <SEO title="Home" lang="en" />
          <h1>Clothes</h1>
          <h2>Coats</h2>
          <ProductList products={filteredProducts.coat} />
          <h2>Blazers</h2>
          <ProductList products={filteredProducts.blazer} />
          <h2>Suits</h2>
          <ProductList products={filteredProducts.suit} />
          <Link to="/page-2/">Go to page 2</Link>
        </Layout>
      </AccessibilityRulesWrapper>
    </LocationContext.Provider>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allProduct: ProductQueryPropType.allProduct,
    allFile: ImageQueryPropType.allFile,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
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
