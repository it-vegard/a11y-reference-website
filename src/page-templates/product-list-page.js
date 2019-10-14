import React, { Fragment } from "react"
import Layout from "../components/layout"
import ProductList from "../components/product-list"
import { graphql, Link } from "gatsby"
import { mapProducts, mapProductsToGenderAndType } from "../util/products-util"
import { capitalizeAllWords } from "../util/text-util"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"

const ProductListPage = ({ data }) => {
  const products = mapProducts(data.allProduct.nodes, data.allFile.nodes)
  const filteredProducts = mapProductsToGenderAndType(products)
  return (
    <Layout>
      <h1>Product list page</h1>
      {Object.keys(filteredProducts).map(gender => (
        <section key={gender}>
          <h2>
            <Link to={`/${gender}`}>{capitalizeAllWords(gender)}</Link>
          </h2>
          {Object.keys(filteredProducts[gender]).map(type => (
            <Fragment key={type}>
              <h3>
                <Link to={`/${gender}/${type}`}>
                  {capitalizeAllWords(type)}
                </Link>
              </h3>
              <ProductList products={filteredProducts[gender][type]} />
            </Fragment>
          ))}
        </section>
      ))}
    </Layout>
  )
}

ProductListPage.propTypes = {
  data: {
    ...ProductQueryPropType,
    ...ImageQueryPropType,
  },
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
