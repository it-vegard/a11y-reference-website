import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import Credit from "../components/credit"
import Grid from "../components/grid"
import PortalPage from "../portal/portal-page"

const Opphavsrett = ({ data, location }) => {
  const images = data.allFile.edges.map(
    image => image.node.childImageSharp.fixed
  )
  const credits = data.allCredit.nodes.map(credit => ({
    ...credit,
    imageSrc: images.find(image => image.originalName === credit.imageSrc).src,
  }))

  return (
    <PortalPage pageTitle="Opphavsrett" location={location}>
      <h1>Opphavsrett</h1>
      <p>Produktbilder er hentet fra Unsplash.com.</p>
      <Grid>
        {credits.map(credit => (
          <Credit {...credit} key={credit.originalName} />
        ))}
      </Grid>
    </PortalPage>
  )
}

Opphavsrett.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf({
        node: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fixed: PropTypes.shape({
              originalName: PropTypes.string,
              src: PropTypes.string,
            }),
          }),
        }),
      }),
    }),
    allCredit: PropTypes.shape({
      nodes: PropTypes.arrayOf({
        id: PropTypes.string,
        imageAlt: PropTypes.string,
        imageSrc: PropTypes.string,
        name: PropTypes.string,
        userName: PropTypes.string,
      }),
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 300, cropFocus: CENTER, height: 350) {
              originalName
              src
            }
          }
        }
      }
    }
    allCredit {
      nodes {
        id
        imageAlt
        imageSrc
        name
        userName
      }
    }
  }
`

export default Opphavsrett
