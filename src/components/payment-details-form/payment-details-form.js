import React from "react"
import { TextInput } from "../input"
import { Form, SubmitButton } from "../form"

const PaymentDetailsForm = () => (
  <Form action="/receipt">
    {/* <TextInput
      autoComplete="cc-type"
      name="payment-type"
      label="Choose payment type"
    />*/}
    <TextInput
      autoComplete="cc-number"
      name="card-number"
      label="Card number"
    />
    <TextInput
      autoComplete="cc-exp-month"
      name="card-expiry-month"
      label="Expiry month"
    />
    <TextInput
      autoComplete="cc-exp-year"
      name="card-expiry-year"
      label="Expiry year"
    />
    <TextInput autoComplete="cc-csc" name="card-csc" label="CSC" />
    <SubmitButton type="submit">Complete purchase</SubmitButton>
  </Form>
)

export default PaymentDetailsForm
