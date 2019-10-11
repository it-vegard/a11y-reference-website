import React from "react"
import * as PropTypes from "prop-types"

import "./credit.css"
import Card from "../card"

const UnSplashIcon = () => (
  <svg
    className="credit__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
  </svg>
)

const CreditButton = ({ name }) => (
  <p className="credit__link">
    <span className="credit__icon__container">
      <UnSplashIcon />
    </span>
    <span className="credit__name">{name}</span>
  </p>
)

CreditButton.propTypes = {
  name: PropTypes.string,
}

const Credit = ({ imageSrc, imageAlt, name, userName }) => (
  <Card
    title={name}
    imgSrc={imageSrc}
    imgAlt={imageAlt}
    text={<CreditButton name={name} />}
    link={`https://unsplash.com/@${userName}?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge`}
  />
)

Credit.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
  userName: PropTypes.string,
}

export default Credit
