import React, { Fragment } from "react"
import * as PropTypes from "prop-types"

import TEXTS from "../../data/texts"
import { createProductUrl } from "../../util/url-util"
import { toCurrency } from "../../util/number-util"
import Button from "../button"
import { useLanguage } from "../language"

import "./cart.css"
import Image from "../image"

const Cart = ({ order, addFn, subtractFn }) => {
  const { language } = useLanguage()
  return (
    <Fragment>
      <ul className="cart__list">
        {order.map(product => (
          <li className="cart__item" key={product.id}>
            <div>
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="cart__image"
              />
            </div>
            <div>
              <a
                className="link cart__link"
                href={createProductUrl(
                  product.language,
                  product.gender,
                  product.type,
                  product.displayName
                )}
              >
                {product.displayName}
              </a>
              <p className="cart__subtext">
                à {toCurrency(product.price, language)}
              </p>
            </div>
            <div>
              <Button
                className="cart__count-button"
                onClick={() => addFn(product)}
              >
                +
              </Button>
              {product.count}
              <Button
                className="cart__count-button"
                onClick={() => subtractFn(product)}
              >
                -
              </Button>
            </div>
            <div>
              <p className="cart__price">
                {toCurrency(product.price * product.count, language)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart__total">
        <span>{TEXTS[language].IN_TOTAL}</span>
        <span>
          {toCurrency(
            order
              .map(product => product.price * product.count)
              .reduce((acc, curr) => acc + curr, 0),
            language
          )}
        </span>
      </p>
    </Fragment>
  )
}

Cart.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      count: PropTypes.number,
      id: PropTypes.string,
      imageAlt: PropTypes.string,
      imageSrc: PropTypes.string,
    })
  ),
  addFn: PropTypes.func,
  subtractFn: PropTypes.func,
}

export default Cart
