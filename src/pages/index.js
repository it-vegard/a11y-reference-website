import React from "react"
import { graphql, Link } from "gatsby"
import * as PropTypes from "prop-types"

import App from "../components/app"
import ProductList from "../components/product-list"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"
import { mapProducts, mapProductsToType } from "../util/products-util"

const IndexPage = ({ data, location }) => {
  const products = mapProducts(data.allProduct.nodes, data.allFile.nodes)
  const filteredProducts = mapProductsToType(products)
  return (
    <App location={location} pageTitle="Home">
      <h1>Clothes</h1>
      <h2>Coats</h2>
      <ProductList products={filteredProducts.coat} />
      <h2>Blazers</h2>
      <ProductList products={filteredProducts.blazer} />
      <h2>Suits</h2>
      <ProductList products={filteredProducts.suit} />
      <Link to="/page-2/">Go to page 2</Link>
    </App>
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
