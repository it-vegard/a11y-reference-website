import React from "react"
import { TextInput } from "../input"
import { Form, SubmitButton } from "../form"
import { useLanguage } from "../language"
import TEXTS from "../../data/texts"

const PersonalDetailsForm = () => {
  const { language } = useLanguage()
  return (
    <Form action={TEXTS[language].PAGES.CHECKOUT_PAYMENT_DETAILS.URL}>
      <TextInput
        autoComplete="given-name"
        name="first-name"
        label={TEXTS[language].PERS_DETAILS_FIRST_NAME}
      />
      <TextInput
        autoComplete="family-name"
        name="last-name"
        label={TEXTS[language].PERS_DETAILS_LAST_NAME}
      />
      <TextInput
        autoComplete="street-address"
        name="address-street"
        label={TEXTS[language].PERS_DETAILS_STREET}
      />
      <TextInput
        autoComplete="postal-code"
        name="address-zip"
        label={TEXTS[language].PERS_DETAILS_ZIP}
      />
      <TextInput
        autoComplete="address-level2"
        name="address-city"
        label={TEXTS[language].PERS_DETAILS_CITY}
      />
      <SubmitButton type="submit">{TEXTS[language].GO_TO_PAYMENT}</SubmitButton>
    </Form>
  )
}

export default PersonalDetailsForm
