import React from "react"
import * as PropTypes from "prop-types"
import { Link } from "gatsby"
import App from "../components/app"
import { portalURLs } from "../util/urls"

const AboutPage = ({ location }) => (
  <App pageTitle="About" location={location}>
    <h1>About this website</h1>
    <section>
      <h2>What is it?</h2>
      <p>
        This website pretends to be an online store for shopping clothes. Its
        real purpose, however, is to be a tool that can be used for various
        aspects regarding online accessibility, including but not limited to the
        following:
      </p>
      <ul>
        <li>
          To learn about the technical sides of web accessibility like markup,
          style, document object model, etc.
        </li>
        <li>
          To learn about related areas, such as technical recommendations,
          tools, and assistive technology.
        </li>
        <li>
          To demonstrate the impact of accessibility measures on websites.
        </li>
        <li>
          To validate accessibility audits and checkers, and to determinate
          false positives and negatives in particular.
        </li>
        <li>To create empathy for people with impairments.</li>
        <li>
          To serve as a baseline in user trials and accessibility / usability
          evaluations.
        </li>
      </ul>
      <p>
        The tool is basically a web application, and its main feature is that it
        can be configured to contain or be free of accessibility errors.
        Accessibility flaws in turn corresponding to selected{" "}
        <a href={portalURLs.en.wcag} target="_blank" rel="noopener noreferrer">
          WCAG
        </a>{" "}
        criteria.
      </p>
    </section>
    <section>
      <h2>Why you may want to use it</h2>
      <p>These are the tool’s benefits:</p>
      <ul>
        <li>It can be used to give meaningful tasks in user trials.</li>
        <li>It has a modern appearance.</li>
        <li>
          It integrates modern web technologies such as HTML5, Javascript, and
          responsive design.
        </li>
        <li>
          It is based on a CMS (Node), such that new content can easily be
          added.
        </li>
        <li>
          It allows to compare a page’s accessible version with the inaccessible
          version.
        </li>
        <li>It allows to turn on/off single accessibility flaws.</li>
        <li>It is multilingual.</li>
        <li>
          It is freely available as open source under the{" "}
          <a
            href={portalURLs.en.licenceMIT}
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT licence
          </a>{" "}
          and can thus be used and extended by anyone.
        </li>
      </ul>
    </section>
    <section>
      <h2>Why you may want to avoid it</h2>
      <p>We have to be honest; these are the tool’s limitations:</p>
      <ul>
        <li>
          It covers currently only a few accessibility flaws / WCAG criteria and
          is thus not complete. We call it a prototype.
        </li>
      </ul>
      <p>
        Please have a look at the tool’s settings to see which of WCAG’s
        criteria are covered currently.
      </p>
    </section>
    <section>
      <h2>If you would like to contribute</h2>
      <p>
        We invite you to contribute to this project and extend the tool. Please
        see the <Link to={portalURLs.en.howTo}>How to</Link> for use and
        extension possibilities.
      </p>
    </section>
    <section>
      <h2>Funding</h2>
      <p>This prototype has been developed with funding by:</p>
      <ul>
        <li>
          the{" "}
          <a
            href={portalURLs.en.bufdir}
            target="_blank"
            rel="noopener noreferrer"
          >
            Norwegian Directorate for Children, Youth and Family Affairs
          </a>{" "}
          (UnIKT program),
        </li>
        <li>
          the IT consultancy{" "}
          <a
            href={portalURLs.en.webstep}
            target="_blank"
            rel="noopener noreferrer"
          >
            Webstep
          </a>
          ,
        </li>
        <li>
          and the research institute{" "}
          <a
            href={portalURLs.en.norskRegnesentral}
            target="_blank"
            rel="noopener noreferrer"
          >
            Norwegian Computing Center
          </a>
          .
        </li>
      </ul>
    </section>
  </App>
)

AboutPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default AboutPage
