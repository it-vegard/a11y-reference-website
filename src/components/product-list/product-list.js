import React from "react"
import * as PropTypes from "prop-types"

import Grid from "../grid"
import ProductCard from "../product-card"
import { ProductPropType } from "../../prop-types/product-query"

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <Grid>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(ProductPropType)),
}

export default ProductList
