import React from "react"

import "./product-details.css"

const ProductDetails = product => {
  return (
    <article className="product-details">
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </article>
  )
}

export default ProductDetails
