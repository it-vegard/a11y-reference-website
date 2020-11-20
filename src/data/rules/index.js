import bypass from "./bypass"
import colorContrast from "./color-contrast"
import htmlHasLang from "./html-has-lang"
import htmlLangValid from "./html-lang-valid"
import imageAlt from "./image-alt"
import linkHasRoleLink from "./link-has-role-link"
import groupRelatedLinksUsingTheNavElement from "./group-related-links-using-the-nav-element"
import headerHasRoleHeader from "./header-has-role-header"
import identifyInputPurpose from "./identify-input-purpose"
import label from "./label"
import mediaAlternativeForPrerecordedMedia from "./media-alternative-for-prerecorded-media"
import noMetaRedirectWithATimeLimit from "./no-meta-redirect-with-a-time-limit"
import timingAdjustable from "./timing-adjustable"
import useARIALandmarksToIdentifyRegionsOfAPage from "./use-semantic-regions"
import timeoutWarning from "./timeout-warning"
import noTiming from "./no-timing"
import videoCaptions from "./video-captions"
import videoDescriptions from "./video-descriptions"

const rules = [
  bypass,
  colorContrast,
  groupRelatedLinksUsingTheNavElement,
  htmlHasLang,
  htmlLangValid,
  headerHasRoleHeader,
  linkHasRoleLink,
  identifyInputPurpose,
  imageAlt,
  label,
  mediaAlternativeForPrerecordedMedia,
  noMetaRedirectWithATimeLimit,
  noTiming,
  timeoutWarning,
  timingAdjustable,
  videoCaptions,
  videoDescriptions,
  useARIALandmarksToIdentifyRegionsOfAPage,
]

export default rules
