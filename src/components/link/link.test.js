import React from "react"
import "@testing-library/jest-dom"
import "jest-axe/extend-expect"
import { axe } from "jest-axe"
import { render, screen, waitFor } from "@testing-library/react"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import Link from "./index"

const defaultRules = {
  [CONSTANTS.LINK_HAS_ROLE_LINK]: true,
  [CONSTANTS.COLOR_CONTRAST]: true,
}

const renderLink = (text, rules) => (
  <AccessibilityRulesContext.Provider
    value={{
      rules: {
        ...defaultRules,
        ...rules,
      },
    }}
  >
    <Link title={text} url="https://www.clothes4all.net" />
  </AccessibilityRulesContext.Provider>
)

test("Link has role='link'", async () => {
  render(renderLink("Go to Clothes4All.net"))

  let link = null
  await waitFor(() => (link = screen.getByRole("link")))

  expect(link).toHaveTextContent("Go to Clothes4All.net")
})

test("Link has no accessibility violations", async () => {
  const { container } = render(renderLink("Go to Clothes4All.net"))

  await waitFor(() => screen.getByRole("link"))

  expect(await axe(container)).toHaveNoViolations()
})
