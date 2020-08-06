import labelRule from "axe-core/lib/rules/label"

const { description, help } = labelRule.metadata

const label = {
  title: help,
  description,
  axeId: "label",
  wcagId: "3.3.2",
}

export default label
