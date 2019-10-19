import htmlHasLangRule from "axe-core/lib/rules/html-has-lang"

const htmlHasLang = {
  ...htmlHasLangRule,
  axeId: htmlHasLangRule.id,
  wcagId: "3.1.1",
}

export default htmlHasLang
