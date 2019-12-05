import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import App from "../components/app"
import ProductDetails from "../components/product-details"
import {
  ImageQueryPropType,
  ProductQueryPropType,
} from "../prop-types/product-query"
import { mapProducts } from "../util/products-util"
import TEXTS from "../data/texts"
import CampaignBanner from "../components/campaign-banner"

const ProductPage = ({ data, location, pageContext }) => {
  const product = mapProducts(data.allProduct.nodes, data.allFile.nodes)[0]
  return (
    <App location={location} pageTitle={pageContext.pageTitle}>
      <CampaignBanner
        heading={TEXTS[pageContext.langKey].SALES_HEADING}
        text={TEXTS[pageContext.langKey].SALES_TEXT}
      />
      <ProductDetails {...product} />
    </App>
  )
}

ProductPage.propTypes = {
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
  query ProductPageQuery(
    $productType: String
    $gender: String
    $langKey: String
    $slug: String
  ) {
    allProduct(
      filter: {
        type: { eq: $productType }
        gender: { eq: $gender }
        language: { eq: $langKey }
        slug: { eq: $slug }
      }
    ) {
      nodes {
        campaignPrice
        description
        displayName
        id
        imageAlt
        imageName
        price
        type
        gender
        language
        sizes {
          id
          label
          name
          value
        }
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

export default ProductPage
