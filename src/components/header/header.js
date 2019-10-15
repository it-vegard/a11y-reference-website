import React from "react"
import * as PropTypes from "prop-types"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import "./header.css"
import Logo from "../logo"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <Container>
        <Logo siteTitle={siteTitle} />
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
