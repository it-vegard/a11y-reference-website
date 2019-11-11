import React, { useState } from "react"
import * as PropTypes from "prop-types"
import Button from "../button"

import "./dropdown.css"

const DropDown = ({ buttonText, ButtonType = Button, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <React.Fragment>
      <ButtonType
        aria-haspopup="true"
        className="dropdown"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {buttonText}
      </ButtonType>
      <div className="dropdown__container" hidden={!isExpanded}>
        {children}
      </div>
    </React.Fragment>
  )
}

DropDown.propTypes = {
  buttonText: PropTypes.string,
  ButtonType: PropTypes.element,
  children: PropTypes.node,
}

export default DropDown
