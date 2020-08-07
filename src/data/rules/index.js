import bypass from "./bypass"
import colorContrast from "./color-contrast"
import htmlHasLang from "./html-has-lang"
import htmlLangValid from "./html-lang-valid"
import imageAlt from "./image-alt"
import linkHasRoleLink from "./link-has-role-link"
import groupRelatedLinksUsingTheNavElement from "./group-related-links-using-the-nav-element"
import headerHasRoleHeader from "./header-has-role-header"
import label from "./label"
import useARIALandmarksToIdentifyRegionsOfAPage from "./use-semantic-regions"

const rules = [
  bypass,
  colorContrast,
  groupRelatedLinksUsingTheNavElement,
  htmlHasLang,
  htmlLangValid,
  headerHasRoleHeader,
  linkHasRoleLink,
  imageAlt,
  label,
  useARIALandmarksToIdentifyRegionsOfAPage,
]

export default rules
