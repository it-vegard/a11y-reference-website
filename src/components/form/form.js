import React from "react"
import * as PropTypes from "prop-types"

import "./form.css"

const Form = ({ action, children, method = "post", onSubmit }) => (
  <form action={action} className="form" method={method} onSubmit={onSubmit}>
    {children}
  </form>
)

Form.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default Form
