import React, { useState } from "react"

import { ProductSizesPropType } from "../../prop-types/product-query"
import { useLanguage } from "../language"
import RadioButtons from "../radio-buttons"
import TEXTS from "../../data/texts"

import "./product-size-picker.css"
import { toSlug } from "../../util/url-util"

const isChecked = (options, id) => options[id] || undefined

const ProductSizePicker = ({ sizes }) => {
  const { language } = useLanguage()
  const [selectedSizes, setSelectedSize] = useState({
    [toSlug(sizes[1].value)]: true, // Set medium as default size
  })
  const mappedRadioButtons = sizes.map(radioButton => ({
    ...radioButton,
    checked: isChecked(selectedSizes, toSlug(radioButton.value)),
    onChange: () =>
      setSelectedSize({
        [toSlug(radioButton.value)]: !selectedSizes[toSlug(radioButton.value)],
      }),
  }))
  return (
    <form className="product-size-picker">
      <RadioButtons
        label={TEXTS[language].PICK_SIZE}
        radioButtons={mappedRadioButtons}
      />
    </form>
  )
}

ProductSizePicker.propTypes = {
  sizes: ProductSizesPropType,
}

export default ProductSizePicker
