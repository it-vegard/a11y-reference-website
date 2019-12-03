import React from "react"
import { TextInput } from "../input"
import { Form, SubmitButton } from "../form"
import { useLanguage } from "../language"
import TEXTS from "../../data/texts"

const PaymentDetailsForm = () => {
  const { language } = useLanguage()
  return (
    <Form action={TEXTS[language].PAGES.CHECKOUT_RECEIPT.URL}>
      {/* <TextInput
      autoComplete="cc-type"
      name="payment-type"
      label="Choose payment type"
    />*/}
      <TextInput
        autoComplete="cc-number"
        name="card-number"
        label={TEXTS[language].PAY_DETAILS_CARD_NUMBER}
      />
      <TextInput
        autoComplete="cc-exp-month"
        name="card-expiry-month"
        label={TEXTS[language].PAY_DETAILS_EXPIRY_MONTH}
      />
      <TextInput
        autoComplete="cc-exp-year"
        name="card-expiry-year"
        label={TEXTS[language].PAY_DETAILS_EXPIRY_YEAR}
      />
      <TextInput
        autoComplete="cc-csc"
        name="card-csc"
        label={TEXTS[language].PAY_DETAILS_CSC}
      />
      <SubmitButton type="submit">
        {TEXTS[language].COMPLETE_PURCHASE}
      </SubmitButton>
    </Form>
  )
}

export default PaymentDetailsForm
