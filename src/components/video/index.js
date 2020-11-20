import React, { useContext } from "react"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import Video from "./video"

const StatefulVideo = ({ captions, textAlternative, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  return (
    <Video
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
