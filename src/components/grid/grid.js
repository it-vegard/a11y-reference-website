import React from "react"
import * as PropTypes from "prop-types"

import "./grid.css"

const Grid = ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <ul className="grid">
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
  numberOfColumns: PropTypes.number,
}

export default Grid
