import videoCaptionsRule from "axe-core/lib/rules/video-caption.json"

const { description, help } = videoCaptionsRule.metadata

const videoCaptions = {
  title: help,
  description,
  axeId: "video-caption",
  wcagId: "1.2.2",
}

export default videoCaptions
