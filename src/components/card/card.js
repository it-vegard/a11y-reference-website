import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import * as PropTypes from "prop-types"

import { supportsFocusWithin } from "../../util/browser-support"
import { isLeftMouseButton } from "../../util/mouse-events-util"

import "./card.css"

const Card = ({
  imgSrc,
  imgAlt = "",
  LinkWrapper = "h2",
  link,
  text,
  title,
}) => {
  const cardElement = useRef(null)
  const linkElement = useRef(null)
  useEffect(() => {
    // Set pointer cursor for card with JS as progressive enhancement, so the normal cursor is used when JS is disabled
    if (link) {
      cardElement.current.style.setProperty(
        "--card-hover-jump-distance",
        "-0.5rem"
      )
      cardElement.current.style.setProperty("--card-cursor", "pointer")
    }

    if (supportsFocusWithin()) {
      cardElement.current.style.setProperty(
        "--card-hover-box-shadow",
        "0 0 0rem 0.3rem #999999"
      )
      cardElement.current.style.setProperty("--card-link-outline", "none")
    }
  }, [])

  const [timeClicked, setTimeClicked] = useState(0)

  const onClick = event => {
    if (event.ctrlKey) {
      window.open(linkElement.current.href, "_blank")
    } else {
      linkElement.current.click()
    }
  }

  const onMouseDown = event => {
    if (isLeftMouseButton(event)) {
      setTimeClicked(new Date())
    }
  }
  const onMouseUp = event => {
    if (isLeftMouseButton(event)) {
      if (new Date() - timeClicked < 250) {
        onClick(event)
      }
      setTimeClicked(0)
    }
  }

  return (
    <article
      className="card"
      onMouseDown={link ? onMouseDown : () => {}}
      onMouseUp={link ? onMouseUp : () => {}}
      ref={cardElement}
    >
      <div className="card__content">
        <LinkWrapper className="card__heading">
          {link ? (
            <Link to={link} className="card__link" ref={linkElement}>
              {title}
            </Link>
          ) : (
            title
          )}
        </LinkWrapper>
        {text && <p className="card__text">{text}</p>}
      </div>
      {imgSrc && <img className="card__image" src={imgSrc} alt={imgAlt} />}
    </article>
  )
}

Card.propTypes = {
  link: PropTypes.string,
  LinkWrapper: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Card
