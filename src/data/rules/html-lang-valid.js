import htmlLangValidRule from "axe-core/lib/rules/html-lang-valid"

const { description, help } = htmlLangValidRule.metadata

const htmlLangValid = {
  title: help,
  description,
  axeId: htmlLangValidRule.id,
  wcagId: "3.1.1",
}

export default htmlLangValid
