import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { withoutTrailingSlash } from "../../util/url-util"
import CONSTANTS from "../../data/rules/constants"
import LocationContext from "../location-context"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

import "./breadcrumbs.css"

/**
 * Breadcrumbs component
 *
 * Modelled after Scott O'Hara's a11y_breadcrumbs (https://scottaohara.github.io/a11y_breadcrumbs/)
 */

const Breadcrumbs = () => {
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
  const NavElement = rules[CONSTANTS.GROUP_RELATED_LINKS_USING_THE_NAV_ELEMENT]
    ? "nav"
    : "div"
  return (
    <NavElement
      className="breadcrumbs"
      aria-label={
        rules[CONSTANTS.GROUP_RELATED_LINKS_USING_THE_NAV_ELEMENT]
          ? "Breadcrumbs"
          : undefined
      }
    >
      <ol className="breadcrumbs__list">
        {currentSitePage.context.breadcrumbs.map(breadcrumb => (
          <li className="breadcrumbs__list__item" key={breadcrumb.path}>
            <Link
              aria-current={
                breadcrumb.path === currentSitePage.path
                  ? "location"
                  : undefined
              }
              to={breadcrumb.path}
              className="breadcrumbs__link"
            >
              {breadcrumb.title}
            </Link>
          </li>
        ))}
      </ol>
    </NavElement>
  )
}

export default Breadcrumbs
