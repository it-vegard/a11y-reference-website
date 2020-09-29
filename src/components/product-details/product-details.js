import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import TEXTS from "../../data/texts"
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
import { Article, Section } from "../semantic-region"

import "./product-details.css"

const ProductDetails = product => {
  const { language } = useLanguage()
  const { rules } = useContext(AccessibilityRulesContext)
  const mainPrice = product.campaignPrice
    ? product.campaignPrice
    : product.price
  return (
    <Article className="product-details">
      <Heading headingLevel={1}>{product.displayName}</Heading>
      <Section>
        <ProductDescription texts={product.description} />
        <Image
          className="product-details__image"
          src={product.imageSrc}
          alt={product.imageAlt}
        />
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
        <ProductSizePicker sizes={product.sizes} />
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
      </Section>
    </Article>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.shape(ProductPropType),
}

export default ProductDetails
