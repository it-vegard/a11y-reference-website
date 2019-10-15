import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import Layout from "../components/layout"
import ProductCard from "../components/product-card"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"
import { mapProducts } from "../util/products-util"

const ProductPage = ({ data }) => {
  const product = mapProducts(data.allProduct.nodes, data.allFile.nodes)[0]
  return (
    <Layout>
      <h1>Product page</h1>
      <ProductCard {...product} />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    allProduct: ProductQueryPropType.allProduct,
    allFile: ImageQueryPropType.allFile,
  }),
}

export const query = graphql`
  query ProductPageQuery($productType: String, $gender: String, $slug: String) {
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

export default ProductPage
