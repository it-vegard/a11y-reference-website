import React, { useRef } from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import { useModal } from "../../hooks"
import Button from "../button"

import "./dropdown.css"

const DropDown = ({ buttonText, children, className }) => {
  const dropDownRef = useRef(null)
  const toggleButtonRef = useRef(null)
  const { isOpen, closeOnEscapeKey, toggleIsOpen } = useModal(dropDownRef)
  return (
    <div
      className={classNames("dropdown", {
        [className]: className,
      })}
      ref={dropDownRef}
    >
      <Button
        className="dropdown-toggle"
        aria-expanded={isOpen}
        onClick={() => toggleIsOpen()}
        setRef={toggleButtonRef}
      >
        {buttonText}
      </Button>
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
  children: PropTypes.node,
  className: PropTypes.string,
}

export default DropDown
