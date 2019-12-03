import React, { Fragment } from "react"
import Heading from "../components/semantic-heading"
import { useLanguage } from "../components/language"
import TEXTS from "../data/texts"

const ReceiptPage = () => {
  const { language } = useLanguage()
  const { RECEIPT_HEADER, RECEIPT_NOTE, RECEIPT_DISCLAIMER } = TEXTS[language]
  return (
    <Fragment>
      <Heading>{RECEIPT_HEADER}</Heading>
      <p>{RECEIPT_NOTE}</p>
      <p>{RECEIPT_DISCLAIMER}</p>
    </Fragment>
  )
}

export default ReceiptPage
