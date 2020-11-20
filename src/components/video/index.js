import React, { useContext } from "react"
import { arrayOf, string } from "prop-types"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import Video from "./video"

const StatefulVideo = ({ captions, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  return (
    <Video
      captions={rules[CONSTANTS.VIDEO_CAPTIONS] === false ? [] : captions}
      {...rest}
    />
  )
}

StatefulVideo.propTypes = {
  captions: arrayOf(string),
}

export default StatefulVideo
