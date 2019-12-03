import React, { useEffect, useRef } from "react"
import * as PropTypes from "prop-types"

import Button from "../button"
import { useModal } from "../../hooks"
import { useLanguage } from "../language"
import TEXTS from "../../data/texts"

import "./slide-in.css"

const SlideIn = ({ children, toggleText }) => {
  const { language } = useLanguage()
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
        aria-expanded={isOpen}
        className="slide-in__toggle"
        onClick={() => toggleIsOpen()}
        setRef={toggleButtonRef}
      >
        {toggleText}
      </Button>
      <aside
        className="slide-in"
        hidden={!isOpen}
        onKeyUp={event => closeOnEscapeKey(event, toggleButtonRef)}
      >
        <div className="slide-in__close__container">
          <Button
            className="slide-in__toggle slide-in__close"
            onClick={() => toggleIsOpen(toggleButtonRef, false)}
            setRef={closeButtonRef}
          >
            {TEXTS[language].CLOSE}
          </Button>
        </div>
        <div className="slide-in__container">{children}</div>
      </aside>
    </React.Fragment>
  )
}

SlideIn.propTypes = {
  children: PropTypes.node,
  toggleText: PropTypes.string,
}

export default SlideIn
