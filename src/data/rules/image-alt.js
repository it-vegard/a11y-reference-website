import imageAltRule from "axe-core/lib/rules/image-alt"

const { description, help } = imageAltRule.metadata

const imageAlt = {
  title: help,
  description,
  axeId: "image-alt",
  wcagId: "1.1.1",
}

export default imageAlt
