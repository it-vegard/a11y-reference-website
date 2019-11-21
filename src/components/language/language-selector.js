import React from "react"
import Link from "../link"

import "./language-selector.css"

const LanguageSelector = () => (
  <div className="language-selector">
    <Link title="NO" url="/no" />
    <Link title="EN" url="/en" />
  </div>
)

export default LanguageSelector
