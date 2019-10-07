import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from "../container"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header