import React from "react"
import * as PropTypes from "prop-types"

import "./container.css"

const Container = ({ children }) => <div className="container">{children}</div>

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Container
