import htmlLangValidRule from "axe-core/lib/rules/html-lang-valid"

const htmlLangValid = {
  ...htmlLangValidRule,
  axeId: htmlLangValidRule.id,
  wcagId: "3.1.1",
}

export default htmlLangValid
