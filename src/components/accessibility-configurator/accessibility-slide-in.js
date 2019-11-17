import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SlideIn from "../slide-in"
import AccessibilityConfigurator from "./accessibility-configurator"

const AccessibilitySlideIn = () => {
  const data = useStaticQuery(graphql`
    {
      allWcagSuccessCriteria {
        nodes {
          description
          level
          ref_id
          title
          url
        }
      }
      allInternalRule {
        nodes {
          axeId
          wcagId
          metadata {
            description
            help
          }
        }
      }
    }
  `)
  return (
    <SlideIn toggleText="Page rules">
      <AccessibilityConfigurator data={data} />
    </SlideIn>
  )
}

export default AccessibilitySlideIn
