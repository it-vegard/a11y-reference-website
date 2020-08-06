import htmlHasLangRule from "axe-core/lib/rules/html-has-lang"

const { description, help } = htmlHasLangRule.metadata

const htmlHasLang = {
  title: help,
  description,
  axeId: htmlHasLangRule.id,
  wcagId: "3.1.1",
}

export default htmlHasLang
