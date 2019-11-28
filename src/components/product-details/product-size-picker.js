import React, { useState } from "react"

import RadioButtons from "../radio-buttons/radio-buttons"
import { ProductSizesPropType } from "../../prop-types/product-query"

import "./product-size-picker.css"

const isChecked = (options, id) => options[id] || undefined

const ProductSizePicker = ({ sizes }) => {
  const [selectedSizes, setSelectedSize] = useState({
    [sizes[1].id]: true, // Set medium as default size
  })
  const mappedRadioButtons = sizes.map(radioButton => ({
    ...radioButton,
    checked: isChecked(selectedSizes, radioButton.id),
    onChange: () =>
      setSelectedSize({
        [radioButton.id]: !selectedSizes[radioButton.id],
      }),
  }))
  return (
    <form className="product-size-picker">
      <RadioButtons radioButtons={mappedRadioButtons} />
    </form>
  )
}

ProductSizePicker.propTypes = {
  sizes: ProductSizesPropType,
}

export default ProductSizePicker
