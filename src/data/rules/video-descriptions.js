import videoDescriptionsRule from "axe-core/lib/rules/video-description.json"

const { description, help } = videoDescriptionsRule.metadata

const videoDescriptions = {
  title: help,
  description,
  axeId: "video-descriptions",
  wcagId: "1.2.5",
}

export default videoDescriptions
