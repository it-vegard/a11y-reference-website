import React from "react"
import * as PropTypes from "prop-types"
import Card from "../card"
import { toSlug } from "../../util/url-util"

const ProductCard = ({ displayName, gender, image = {}, price, type }) => (
  <Card
    imgSrc={image.src}
    link={`/products/${gender}/${type}/${toSlug(displayName)}`}
    LinkWrapper="h3"
    text={`$${price}`}
    title={displayName}
  />
)

ProductCard.propTypes = {
  displayName: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
  }),
  price: PropTypes.number,
  type: PropTypes.number,
}

export default ProductCard
