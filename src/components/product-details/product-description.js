import React from "react"

import { toSlug } from "../../util/url-util"

import "./product-description.css"

const ProductDescription = ({ texts = [] }) => {
  return texts.map(text => (
    <p className="product-description" key={toSlug(text.substring(0, 20))}>
      {text}
    </p>
  ))
}

export default ProductDescription
