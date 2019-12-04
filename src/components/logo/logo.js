import React from "react"
import { Link } from "gatsby"

import TEXTS from "../../data/texts"
import { useLanguage } from "../language"

import "./logo.css"

const Logo = () => {
  const { language } = useLanguage()
  return (
    <h1 style={{ margin: 0 }}>
      <Link className="logo" to={`/${language}`}>
        {TEXTS[language].WEBSITE_NAME /* Replace with a logo eventually */}
      </Link>
    </h1>
  )
}

export default Logo
