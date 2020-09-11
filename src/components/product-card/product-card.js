import React from "react"
import Card from "../card"
import { ProductPropType } from "../../prop-types/product-query"
import { toCurrency } from "../../util/number-util"
import { createProductUrl } from "../../util/url-util"
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
    ? `${TEXTS[language].RETAIL_PRICE(toCurrency(price, language))}`
    : undefined
  return (
    <Card
      imgAlt={imageAlt}
      imgSrc={imageSrc}
      link={createProductUrl(language, gender, type, displayName)}
      ribbon={campaignPrice ? TEXTS[language].CAMPAIGN_RIBBON : undefined}
      subText={subText}
      text={toCurrency(mainPrice, language)}
      title={displayName}
    />
  )
}

ProductCard.propTypes = ProductPropType

export default ProductCard
