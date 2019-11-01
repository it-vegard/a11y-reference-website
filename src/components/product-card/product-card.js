import React from "react"
import Card from "../card"
import { toSlug } from "../../util/url-util"
import { ProductPropType } from "../../prop-types/product-query"

const ProductCard = ({ displayName, gender, imageSrc, price, type }) => (
  <Card
    imgSrc={imageSrc}
    link={`/${gender}/${type}/${toSlug(displayName)}`}
    text={`$${price}`}
    title={displayName}
  />
)

ProductCard.propTypes = ProductPropType

export default ProductCard
