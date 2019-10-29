import React from "react"

import ProductDescription from "./product-description"
import ProductSizePicker from "./product-size-picker"
import { ProductPropType } from "../../prop-types/product-query"

import "./product-details.css"

const ProductDetails = product => {
  return (
    <article className="product-details">
      <section>
        <h1>{product.displayName}</h1>
        <ProductDescription texts={product.description} />
        <img
          className="product-details__image"
          src={product.imageSrc}
          alt={product.imageAlt}
        />
        <ProductSizePicker sizes={product.sizes} />
      </section>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </article>
  )
}

ProductDetails.propTypes = {
  product: ProductPropType,
}

export default ProductDetails
