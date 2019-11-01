import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import App from "../components/app"
import ProductCategory from "../components/product-category"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"
import { mapProducts } from "../util/products-util"

const ProductListPage = ({ data, location }) => {
  const products = mapProducts(data.allProduct.nodes, data.allFile.nodes)
  return (
    <App location={location} pageTitle="Products">
      <ProductCategory products={products} />
    </App>
  )
}

ProductListPage.propTypes = {
  data: PropTypes.shape({
    allProduct: ProductQueryPropType.allProduct,
    allFile: ImageQueryPropType.allFile,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export const query = graphql`
  query ProductListQuery($productType: String, $gender: String, $slug: String) {
    allProduct(
      filter: {
        type: { eq: $productType }
        gender: { eq: $gender }
        slug: { eq: $slug }
      }
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

export default ProductListPage
