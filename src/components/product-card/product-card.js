import React from "react"
import Card from "../card"
import { toSlug } from "../../util/url-util"
import { ProductPropType } from "../../prop-types/product-query"
import { toCurrency } from "../../util/number-util"
import TEXTS from "../../data/texts"

const ProductCard = ({
  campaignPrice,
  displayName,
  gender,
  imageAlt,
  imageSrc,
  language,
  price,
  type,
}) => {
  const mainPrice = campaignPrice ? campaignPrice : price
  const subText = campaignPrice
    ? `${TEXTS[language].RETAIL_PRICE(price)}`
    : undefined
  return (
    <Card
      imgAlt={imageAlt}
      imgSrc={imageSrc}
      link={`/${language}/${gender}/${type}/${toSlug(displayName)}`}
      ribbon={campaignPrice ? TEXTS[language].CAMPAIGN_RIBBON : undefined}
      subText={subText}
      text={toCurrency(mainPrice, language)}
      title={displayName}
    />
  )
}

ProductCard.propTypes = ProductPropType

export default ProductCard
