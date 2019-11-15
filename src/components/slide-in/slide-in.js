import React, { useRef } from "react"
import * as PropTypes from "prop-types"

import { useModal } from "../../hooks"
import Button from "../button"

import "./slide-in.css"

const SlideIn = ({ children, toggleText }) => {
  const { isOpen, closeOnEscapeKey, toggleIsOpen } = useModal()
  const toggleButtonRef = useRef()
  return (
    <React.Fragment>
      <Button
        aria-haspopup={true}
        aria-expanded={!isOpen}
        className="slide-in__toggle"
        onClick={() => toggleIsOpen()}
        setRef={toggleButtonRef}
      >
        {toggleText}
      </Button>
      <aside
        className="slide-in"
        aria-hidden={!isOpen}
        onKeyUp={event => closeOnEscapeKey(event, toggleButtonRef)}
      >
        <Button
          className="slide-in__toggle slide-in__close"
          onClick={() => toggleIsOpen(toggleButtonRef, false)}
        >
          Close
        </Button>
        {children}
      </aside>
    </React.Fragment>
  )
}

SlideIn.propTypes = {
  children: PropTypes.node,
  toggleText: PropTypes.string,
}

export default SlideIn
