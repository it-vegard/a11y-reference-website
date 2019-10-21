/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../footer"
import Container from "../container"
import SkipLink from "../skip-link"

import "./normalize.css"
import "./base.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const mainTagId = "main"

  return (
    <>
      <SkipLink mainTagId={mainTagId} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main id={mainTagId} tabIndex={-1}>
          {children}
        </main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
