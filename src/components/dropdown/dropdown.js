import React, { useRef } from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import { useModal } from "../../hooks"
import Button from "../button"

import "./dropdown.css"

const DropDown = ({ buttonText, ButtonType = Button, children, className }) => {
  const { isOpen, closeOnEscapeKey, toggleIsOpen } = useModal()
  const toggleButtonRef = useRef(null)
  return (
    <div
      className={classNames("dropdown", {
        [className]: className,
      })}
    >
      <ButtonType
        aria-haspopup="true"
        className="dropdown-toggle"
        aria-expanded={isOpen}
        onClick={() => toggleIsOpen()}
        setRef={toggleButtonRef}
      >
        {buttonText}
      </ButtonType>
      <div
        className="dropdown__container"
        hidden={!isOpen}
        onKeyUp={event => closeOnEscapeKey(event, toggleButtonRef)}
      >
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
