import React from "react"
import Card from "../card"
import { toSlug } from "../../util/url-util"
import { ProductPropType } from "../../prop-types/product-query"
import { toCurrency } from "../../util/number-util"

const ProductCard = ({
  displayName,
  gender,
  imageSrc,
  language,
  price,
  type,
}) => (
  <Card
    imgSrc={imageSrc}
    link={`/${language}/${gender}/${type}/${toSlug(displayName)}`}
    text={toCurrency(price, language)}
    title={displayName}
  />
)

ProductCard.propTypes = ProductPropType

export default ProductCard
