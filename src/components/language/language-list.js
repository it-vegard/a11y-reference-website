import React from "react"
import * as PropTypes from "prop-types"
import Image from "../image"
import Link from "../link/link"
import { toSlug } from "../../util/url-util"

import "./language-list.css"

const LanguageList = ({ languages }) => (
  <ul className="language-list">
    {languages.map(({ flagImage, flagImageAlt, text, url }) => (
      <li key={toSlug(text)} className="language-list__item">
        <Image alt={flagImageAlt} src={flagImage} style={{ width: "3rem" }} />
        <Link title={text} url={url} />
      </li>
    ))}
  </ul>
)

LanguageList.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      flagImage: PropTypes.element,
      flagImageAlt: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default LanguageList
