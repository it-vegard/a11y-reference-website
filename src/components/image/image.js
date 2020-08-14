import React from "react"
import * as PropTypes from "prop-types"

const Image = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Image
