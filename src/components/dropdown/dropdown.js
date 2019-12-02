import React, { useState } from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import Button from "../button"

import "./dropdown.css"

const DropDown = ({ buttonText, ButtonType = Button, children, className }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div
      className={classNames("dropdown", {
        [className]: className,
      })}
    >
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
  className: PropTypes.string,
}

export default DropDown
