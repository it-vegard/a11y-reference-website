import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import App from "../components/app"
import CampaignBanner from "../components/campaign-banner"
import ProductCategory from "../components/product-category"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"
import { mapProducts } from "../util/products-util"
import TEXTS from "../data/texts"

const ProductListByLanguagePage = ({ data, location, pageContext }) => {
  const products = mapProducts(data.allProduct.nodes, data.allFile.nodes)
  return (
    <App location={location} pageTitle={pageContext.pageTitle}>
      <CampaignBanner
        heading={TEXTS[pageContext.langKey].SALES_HEADING}
        text={TEXTS[pageContext.langKey].SALES_TEXT}
      />
      <ProductCategory products={products} data={data} />
    </App>
  )
}

ProductListByLanguagePage.propTypes = {
  data: PropTypes.shape({
    allProduct: ProductQueryPropType.allProduct,
    allFile: ImageQueryPropType.allFile,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  pageContext: PropTypes.shape({
    langKey: PropTypes.string,
    pageTitle: PropTypes.string,
  }),
}

export const query = graphql`
  query ProductListByLanguageQuery($langKey: String) {
    allProduct(filter: { language: { eq: $langKey } }) {
      nodes {
        campaignPrice
        displayName
        id
        imageAlt
        imageName
        price
        type
        gender
        language
        slug
      }
    }
    allFile(filter: { relativeDirectory: { eq: "products" } }) {
      nodes {
        childImageSharp {
          fixed(width: 300, cropFocus: CENTER, height: 350) {
            src
            originalName
          }
        }
      }
    }
  }
`

export default ProductListByLanguagePage
