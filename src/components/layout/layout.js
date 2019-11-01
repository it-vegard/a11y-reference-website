/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Main } from "../semantic-region"
import Footer from "../footer"
import Header from "../header"
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
    <div className="layout">
      <SkipLink mainTagId={mainTagId} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main id={mainTagId} tabIndex={-1}>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
