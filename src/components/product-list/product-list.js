import React from "react"
import * as PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Grid from "../grid"
import ProductCard from "../product-card"

const ProductList = ({ type }) => {
  const query = useStaticQuery(graphql`
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
      allFile(filter: { relativeDirectory: { eq: "products" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 300, cropFocus: CENTER, height: 350) {
                originalName
                src
              }
            }
          }
        }
      }
    }
  `)
  const products = query.allProduct.nodes

  if (!products || products.length === 0) {
    return null
  }

  const images = query.allFile.edges.map(
    edge => edge.node.childImageSharp.fixed
  )
  return (
    <Grid>
      {products
        .filter(product => product.type === type)
        .map(product => (
          <ProductCard
            image={images.find(
              image => image.originalName === product.imageName
            )}
            key={product.id}
            {...product}
          />
        ))}
    </Grid>
  )
}

ProductList.propTypes = {
  type: PropTypes.string,
}

export default ProductList
