import React from "react"

import { ProductPropType } from "../../prop-types/product-query"
import Heading from "../semantic-heading"
import { Article, Section } from "../semantic-region"
import ProductDescription from "./product-description"
import ProductSizePicker from "./product-size-picker"

import "./product-details.css"
import BuyButton from "../buy-button"

const ProductDetails = product => {
  return (
    <Article className="product-details">
      <Heading headingLevel={1}>{product.displayName}</Heading>
      <Section>
        <ProductDescription texts={product.description} />
        <img
          className="product-details__image"
          src={product.imageSrc}
          alt={product.imageAlt}
        />
        <ProductSizePicker sizes={product.sizes} />
        <BuyButton product={product} />
      </Section>
    </Article>
  )
}

ProductDetails.propTypes = {
  product: ProductPropType,
}

export default ProductDetails
