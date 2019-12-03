import React from "react"
import { Link } from "gatsby"
import * as PropTypes from "prop-types"

import "./logo.css"
import { useLanguage } from "../language"

const Logo = ({ siteTitle }) => {
  const { language } = useLanguage()
  return (
    <h1 style={{ margin: 0 }}>
      <Link className="logo" to={`/${language}`}>
        {siteTitle /* Replace with a logo eventually */}
      </Link>
    </h1>
  )
}

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

export default Logo
