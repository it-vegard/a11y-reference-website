import React, { useContext } from "react"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import Video from "./video"

const StatefulVideo = ({
  audioDescriptions,
  audioDescriptionsCaptions,
  captions,
  textAlternative,
  ...rest
}) => {
  const { rules } = useContext(AccessibilityRulesContext)
  return (
    <Video
      audioDescriptions={
        rules[CONSTANTS.VIDEO_DESCRIPTIONS] === false ||
        rules[CONSTANTS.MEDIA_ALTERNATIVE_FOR_PRERECORDED_MEDIA] === false
          ? []
          : audioDescriptions
      }
      audioDescriptionsCaptions={
        rules[CONSTANTS.VIDEO_DESCRIPTIONS] === false ||
        rules[CONSTANTS.MEDIA_ALTERNATIVE_FOR_PRERECORDED_MEDIA] === false ||
        rules[CONSTANTS.VIDEO_CAPTIONS] === false
          ? []
          : audioDescriptionsCaptions
      }
      captions={rules[CONSTANTS.VIDEO_CAPTIONS] === false ? [] : captions}
      textAlternative={
        rules[CONSTANTS.MEDIA_ALTERNATIVE_FOR_PRERECORDED_MEDIA] === false
          ? () => {}
          : textAlternative
      }
      {...rest}
    />
  )
}

StatefulVideo.propTypes = Video.propTypes

export default StatefulVideo
