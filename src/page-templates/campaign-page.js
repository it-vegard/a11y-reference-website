import React, { Fragment } from "react"
import * as PropTypes from "prop-types"

import { useLanguage } from "../components/language"
import ProductList from "../components/product-list"
import Heading from "../components/semantic-heading"
import TEXTS from "../data/texts"
import { ProductPropType } from "../prop-types/product-query"

const CampaignPage = ({ products }) => {
  const { language } = useLanguage()
  return (
    <Fragment>
      <Heading>{TEXTS[language].CAMPAIGN_HEADING}</Heading>
      <ProductList products={products} />
    </Fragment>
  )
}

CampaignPage.propTypes = {
  products: PropTypes.arrayOf(ProductPropType),
}

export default CampaignPage
