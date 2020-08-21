import React from "react"
import * as PropTypes from "prop-types"
import classnames from "classnames"

import "./grid.css"

const Grid = ({ autoFillWidth = true, children, isWide }) => {
  if (Array.isArray(children)) {
    return (
      <ul
        className={classnames("grid", {
          "grid--wide": isWide,
          "grid--no-auto-fit": !autoFillWidth,
        })}
      >
        {children.map((child, index) => (
          <li className="grid__item" key={index}>
            {child}
          </li>
        ))}
      </ul>
    )
  }
  return <div className="grid">{children}</div>
}

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  isWide: PropTypes.bool,
  autoFillWidth: PropTypes.bool,
  numberOfColumns: PropTypes.number,
}

export default Grid
