import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import LocationContext from "../location-context"

import "./breadcrumbs.css"

/**
 * Breadcrumbs component
 *
 * Modelled after Scott O'Hara's a11y_breadcrumbs (https://scottaohara.github.io/a11y_breadcrumbs/)
 */

const Breadcrumbs = () => {
  const { location } = useContext(LocationContext)

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
    page => page.path === location.pathname
  )

  if (!currentSitePage || !currentSitePage.context.breadcrumbs) {
    return null
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumbs">
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
    </nav>
  )
}

export default Breadcrumbs
