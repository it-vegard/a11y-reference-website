import React from "react"
import { TextInput } from "../input"
import { Form, SubmitButton } from "../form"

const PersonalDetailsForm = () => (
  <Form action="/payment-details">
    <TextInput autoComplete="given-name" name="first-name" label="First name" />
    <TextInput autoComplete="family-name" name="last-name" label="Last name" />
    <TextInput
      autoComplete="street-address"
      name="address-street"
      label="Street"
    />
    <TextInput autoComplete="postal-code" name="address-zip" label="Zip-code" />
    <TextInput autoComplete="address-level2" name="address-city" label="City" />
    <SubmitButton type="submit">Go to payment</SubmitButton>
  </Form>
)

export default PersonalDetailsForm
