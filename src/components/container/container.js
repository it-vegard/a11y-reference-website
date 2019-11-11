import React from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import "./container.css"

const Container = ({ children, className }) => (
  <div className={classNames("container", { [className]: className })}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default Container
