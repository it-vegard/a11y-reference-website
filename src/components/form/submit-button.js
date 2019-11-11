import React from "react"
import * as PropTypes from "prop-types"
import Button from "../button"

import "./submit-button.css"

const SubmitButton = ({ children }) => (
  <Button className="submit-button" type="submit">
    {children}
  </Button>
)

SubmitButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default SubmitButton
