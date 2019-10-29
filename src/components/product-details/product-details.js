import React from "react"

import { ProductPropType } from "../../prop-types/product-query"

import "./product-details.css"

const ProductDetails = product => {
  return (
    <article className="product-details">
      <h1>{product.displayName}</h1>
      <section>
        <img
          className="product-details__image"
          src={product.imageSrc}
          alt={product.imageAlt}
        />
      </section>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </article>
  )
}

ProductDetails.propTypes = {
  product: ProductPropType,
}

export default ProductDetails
