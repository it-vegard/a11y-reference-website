import React, { useContext } from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import InaccessibleLink from "./inaccessible-link"

import "./link.css"
import CONSTANTS from "../../data/rules/constants"

const Link = ({ children, className, title, url }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  if (!rules[CONSTANTS.LINK_HAS_ROLE_LINK]) {
    return (
      <InaccessibleLink
        url={url}
        className={classNames("link", { [className]: className })}
      >
        {title}
        {children}
      </InaccessibleLink>
    )
  }
  return (
    <a href={url} className={classNames("link", { [className]: className })}>
      {title}
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Link
