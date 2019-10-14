import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { mapProducts } from "../util/products-util"
import ProductCard from "../components/product-card"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"

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
  data: {
    ...ProductQueryPropType,
    ...ImageQueryPropType,
  },
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
