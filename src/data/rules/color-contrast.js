import colorContrastRule from "axe-core/lib/rules/color-contrast"

const colorContrast = {
  ...colorContrastRule,
  axeId: colorContrastRule.id,
  wcagId: "1.4.3",
}

export default colorContrast
