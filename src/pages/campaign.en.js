import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from "gatsby"

import App from "../components/app"
import TEXTS from "../data/texts"
import { mapProducts } from "../util/products-util"
import CampaignPage from "../page-templates/campaign-page"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"

const Campaign = ({ data, location, pageContext }) => {
  const products = mapProducts(data.allProduct.nodes, data.allFile.nodes)
  return (
    <App location={location} pageTitle={TEXTS[pageContext.langKey].HOME}>
      <CampaignPage products={products} />
    </App>
  )
}

Campaign.propTypes = {
  data: PropTypes.shape({
    allProduct: ProductQueryPropType.allProduct,
    allFile: ImageQueryPropType.allFile,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  pageContext: PropTypes.shape({
    langKey: PropTypes.string,
  }),
}

export const query = graphql`
  query EnglishCampaignProductQuery {
    allProduct(filter: { campaignPrice: { gt: 0 }, language: { eq: "en" } }) {
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

export default Campaign
