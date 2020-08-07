import bypass from "./bypass"
import colorContrast from "./color-contrast"
import htmlHasLang from "./html-has-lang"
import htmlLangValid from "./html-lang-valid"
import imageAlt from "./image-alt"
import linkHasRoleLink from "./link-has-role-link"
import headerHasRoleHeader from "./header-has-role-header"
import label from "./label"

const rules = [
  bypass,
  colorContrast,
  htmlHasLang,
  htmlLangValid,
  headerHasRoleHeader,
  linkHasRoleLink,
  imageAlt,
  label,
]

export default rules
