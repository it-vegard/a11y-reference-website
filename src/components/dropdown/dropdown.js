import React, { useState } from "react"
import * as PropTypes from "prop-types"
import Button from "../button"

import "./dropdown.css"

const DropDown = ({ buttonText, ButtonType = Button, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="dropdown">
      <ButtonType
        aria-haspopup="true"
        className="dropdown-toggle"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {buttonText}
      </ButtonType>
      <div className="dropdown__container" hidden={!isExpanded}>
        {children}
      </div>
    </div>
  )
}

DropDown.propTypes = {
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ButtonType: PropTypes.element,
  children: PropTypes.node,
}

export default DropDown
