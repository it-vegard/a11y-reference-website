import React, { useEffect, useRef } from "react"
import * as PropTypes from "prop-types"

import { useModal } from "../../hooks"
import Button from "../button"

import "./slide-in.css"

const SlideIn = ({ children, toggleText }) => {
  const { isOpen, closeOnEscapeKey, toggleIsOpen } = useModal()
  const toggleButtonRef = useRef()
  const closeButtonRef = useRef()
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current.focus()
    }
  }, [isOpen])
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
        <div className="slide-in__close__container">
          <Button
            className="slide-in__toggle slide-in__close"
            onClick={() => toggleIsOpen(toggleButtonRef, false)}
            setRef={closeButtonRef}
          >
            Close
          </Button>
        </div>
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
