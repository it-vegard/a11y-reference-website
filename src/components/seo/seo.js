import React, { useContext } from "react"
import * as PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRules from "../accessibility-rules"
import TEXTS from "../../data/texts"
import { useLanguage } from "../language"

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
function SEO({ meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const { language } = useLanguage()

  const { rules } = useContext(AccessibilityRules.context)

  const siteTitle = TEXTS[language]
    ? TEXTS[language].WEBSITE_NAME
    : site.siteMetadata.title
  const siteDescription = TEXTS[language]
    ? TEXTS[language].WEBSITE_DESCRIPTION
    : site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: !rules[CONSTANTS.HTML_HAS_LANG]
          ? undefined
          : !rules[CONSTANTS.HTML_LANG_VALID]
          ? "invalid-lang"
          : language,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: siteDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: siteDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
