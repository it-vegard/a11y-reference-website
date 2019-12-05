import React from "react"
import * as PropTypes from "prop-types"

import { ProductPropType } from "../../prop-types/product-query"
import Heading from "../semantic-heading"
import { Article, Section } from "../semantic-region"
import ProductDescription from "./product-description"
import ProductSizePicker from "./product-size-picker"

import "./product-details.css"
import BuyButton from "../buy-button"
import { toCurrency } from "../../util/number-util"
import { useLanguage } from "../language"
import { capitalizeAllWords } from "../../util/text-util"
import TEXTS from "../../data/texts"
import Image from "../image"

const ProductDetails = product => {
  const { language } = useLanguage()
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
      </Section>
    </Article>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.shape(ProductPropType),
}

export default ProductDetails
