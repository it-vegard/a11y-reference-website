import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import TEXTS from "../../data/texts"
import PRODUCT_VIDEOS from "../../data/products/product-videos"
import { ProductPropType } from "../../prop-types/product-query"
import { toCurrency } from "../../util/number-util"
import { capitalizeAllWords } from "../../util/text-util"
import BuyButton from "../buy-button"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import Image from "../image"
import { useLanguage } from "../language"
import ProductDescription from "./product-description"
import ProductSizePicker from "./product-size-picker"
import Heading from "../semantic-heading"
import { Article } from "../semantic-region"
import Video from "../video"

import "./product-details.css"

const ProductDetails = product => {
  const { language } = useLanguage()
  const { rules } = useContext(AccessibilityRulesContext)
  const mainPrice = product.campaignPrice
    ? product.campaignPrice
    : product.price
  const productVideo = PRODUCT_VIDEOS[language][product.video]
  return (
    <Article className="product-details">
      <Heading headingLevel={1}>{product.displayName}</Heading>
      <ProductDescription texts={product.description} />
      <Image
        className="product-details__image"
        src={product.imageSrc}
        alt={product.imageAlt}
      />
      <div className="product-details__content">
        {productVideo && (
          <div className="product-details__video">
            <Video
              sources={[productVideo.url]}
              captions={[productVideo.captions]}
              textAlternative={productVideo.textAlternative}
            />
          </div>
        )}
        <ProductSizePicker sizes={product.sizes} />
        <p className="product-details__price">
          {capitalizeAllWords(toCurrency(mainPrice, language))}
        </p>
        {product.campaignPrice && (
          <p className="product-details__price product-details__before-price">
            {TEXTS[language].RETAIL_PRICE(
              capitalizeAllWords(toCurrency(product.price, language))
            )}
          </p>
        )}
        <BuyButton product={product} />
        {rules[CONSTANTS.NO_TIMING] === false &&
          rules[CONSTANTS.TIMEOUT_WARNING] !== false && (
            <p className="product-details__terms">
              {TEXTS[language].CONDITION_TIMEOUT(
                TEXTS[language].TIMEOUT_LIMIT,
                rules[CONSTANTS.TIMEOUT_ADJUSTABLE] !== false
              )}
            </p>
          )}
      </div>
    </Article>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.shape(ProductPropType),
}

export default ProductDetails
