import bypassRule from "axe-core/lib/rules/bypass"

const { description, help } = bypassRule.metadata

const bypass = {
  title: help,
  description,
  axeId: "bypass",
  wcagId: "2.4.1",
}

export default bypass
