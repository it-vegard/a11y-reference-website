import colorContrastRule from "axe-core/lib/rules/color-contrast"

const { description, help } = colorContrastRule.metadata

const colorContrast = {
  title: help,
  description,
  axeId: colorContrastRule.id,
  wcagId: "1.4.3",
}

export default colorContrast
