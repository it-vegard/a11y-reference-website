import React from "react"
import { Link } from "gatsby"
import * as PropTypes from "prop-types"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
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
    </div>
    <Container>
      <Breadcrumbs />
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
