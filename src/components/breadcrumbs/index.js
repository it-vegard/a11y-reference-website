import React, { useContext } from "react"

import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import LocationContext from "../location-context"
import AccessibleBreadCrumbs from "./breadcrumbs"
import { graphql, useStaticQuery } from "gatsby"
import { withoutTrailingSlash } from "../../util/url-util"
import CONSTANTS from "../../data/rules/constants"
import InaccessibleBreadcrumbs from "./inaccessible-breadcrumbs"

const BreadCrumbs = props => {
  const { location } = useContext(LocationContext)
  const { rules } = useContext(AccessibilityRulesContext)

  if (!location) {
    return null
  }

  const data = useStaticQuery(graphql`
    {
      allSitePage {
        nodes {
          context {
            breadcrumbs {
              path
              title
            }
          }
          path
        }
      }
    }
  `)

  const currentSitePage = data.allSitePage.nodes.find(
    page =>
      withoutTrailingSlash(page.path) ===
      withoutTrailingSlash(location.pathname)
  )

  if (!currentSitePage || !currentSitePage.context.breadcrumbs) {
    return null
  }

  const links = currentSitePage.context.breadcrumbs.map(breadcrumb => ({
    isCurrent: breadcrumb.path === currentSitePage.path,
    text: breadcrumb.title,
    url: breadcrumb.path,
  }))

  if (rules[CONSTANTS.GROUP_RELATED_LINKS_USING_THE_NAV_ELEMENT]) {
    return <AccessibleBreadCrumbs links={links} />
  } else {
    return <InaccessibleBreadcrumbs links={links} />
  }
}

export default BreadCrumbs
