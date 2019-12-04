import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
import "./how-to.css"

const HowtoPage = ({ location }) => (
  <App pageTitle="How to's" location={location}>
    <h1>How to&#39;s</h1>
    <section>
      <h2>How to use this website</h2>
      <p>
        This website can be used in several ways. In the following, we give you
        a couple of suggestions.
      </p>
      <table>
        <caption>Usage suggestions</caption>
        <tr className="header">
          <th scope="col">Objective</th>
          <th scope="col">Requirements</th>
          <th scope="col">Min. time estimation</th>
          <th scope="col">Description</th>
        </tr>
        <tr>
          <td>Toggle rules manually</td>
          <td>-</td>
          <td>1 min</td>
          <td>
            Choose <q>Ruleset</q> to see which accessibility rules are on and
            off. (A switch in <q>off</q> position equals accessibility issues.)
            You can either set the rules one by one, or globally with the switch
            on top.
          </td>
        </tr>
        <tr>
          <td>Toggle rules programmatically</td>
          <td>-</td>
          <td>1 min</td>
          <td>
            Load this website with <samp>?enableRules=false</samp> in the URI to
            disable all rules.
            <samp>?enableRules=true</samp> in the URI enables all rules.
          </td>
        </tr>
        <tr>
          <td>A11Y failure demonstration</td>
          <td>Developer tools, HTML, CSS</td>
          <td>5 min</td>
          <td>
            Visit an arbitrary page, then play with the toggles of your choice
            in the settings menu while watching the markup in your browser&#39;s
            developer tools as failures are injected into the page or taken
            away. Some errors may become visible in the graphical user
            interface, others not.
          </td>
        </tr>
        <tr>
          <td>Failure impact evaluation</td>
          <td>Assistive technology (screen reader, etc.)</td>
          <td>5 min</td>
          <td>
            Visit an arbitrary page with the desired assistive technology and
            turn on / off A11Y failures of your choice in the settings menu.
            Study what impact the injection of A11Y failures has with regard to
            what content can or cannot be accessed, and potentially how the user
            experience changes. The aforementioned can also be carried out in
            combination with impairment simulation tools, or real users.
          </td>
        </tr>
        <tr>
          <td>A11Y checker validation</td>
          <td>HTML, CSS</td>
          <td>5 min</td>
          <td>
            Pick a page and adjust the injection of A11Y failures as desired.
            Then pass the static page URI as computed to the accessiblity
            checker of your choice to study whether the A11Y failures are
            properly detected. Count false positives and negatives.
          </td>
        </tr>
        <tr>
          <td>User test baseline determination</td>
          <td>-</td>
          <td>hours - days</td>
          <td>
            Pick an audit metric such as SUS. Then calculate the metric for the
            solution you need to assess, as well as for this website, by letting
            users test both as part of task assignments. Determine the chosen
            metric(s) for each user. Compare both metrics with each other for
            various user groups.
          </td>
        </tr>
      </table>
    </section>
    <section>
      <h2>How to extend this website</h2>
      <p>
        The project / website can be extended in multiple ways. Here, we give
        you a couple of suggestions.
      </p>
      <table>
        <caption>Task suggestions</caption>
        <tr className="header">
          <th scope="col">Task</th>
          <th scope="col">Requirements</th>
          <th scope="col">Min. time estimation</th>
          <th scope="col">Description</th>
        </tr>
        <tr>
          <td>Add more accessibility failures</td>
          <td>git, WCAG, ...</td>
          <td>2 d</td>
          <td>Get the repository and ...</td>
        </tr>
        <tr>
          <td>Add one or several languages</td>
          <td>git, JSON</td>
          <td>1 d</td>
          <td>
            Get the repository and add language strings as done with the other
            languages in the language string JSON.
          </td>
        </tr>
        <tr>
          <td>Add more products / clothes</td>
          <td>git, JSON</td>
          <td>2 h</td>
          <td>
            First get the repository. Decide which product categories you want
            to add. See the <samp>type</samp> fields in{" "}
            <samp>src/data/products.js</samp> for existing categories. For each
            new product, copy the picture to <samp>src/images/products/</samp>,
            then add another object in the array of products in{" "}
            <samp>products.js</samp> according to the structure of existing
            objects. Before you go live, do not forget to add the appropriate
            objects in the array of credits in <samp>src/data/credits.js</samp>.
          </td>
        </tr>
        <tr>
          <td>Add other pages</td>
          <td>git, Node, Javascript, React, JSX</td>
          <td>Min. 1 d</td>
          <td>
            Get the repository and copy one of the other pages in{" "}
            <samp>src/pages</samp> or <samp>src/page-templates</samp>, then
            modify the copy as needed.
          </td>
        </tr>
        <tr>
          <td>Modify existing pages</td>
          <td>git, Node, Javascript, React, JSX</td>
          <td>2-5 d</td>
          <td>Get the repository and ...</td>
        </tr>
      </table>
    </section>
  </App>
)

HowtoPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default HowtoPage
