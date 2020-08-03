---
name: About the project
route: /about
---

<h1>Accessibility Reference Website</h1>
<p>An example website, build for testing accessibility issues.</p>

<h2>Quick start</h2>
<p>To get started, we first have to install some dependencies.</p>
<ol>
    <li>Start by installing <a href="https://github.com/nodejs/node-gyp#installation">node-gyp dependencies</a>.</li>
    <li>Install all project dependencies by running <code>npm install</code></li>
    <li>Finally launch the project with <code>npm start</code></li>
</ol>

<h3>Testing</h3>
<p>To run unit tests, use the command <code>npm run test</code></p>
<p>To run integration tests (using Cypress), use the command <code>npm run cy:run</code></p>

<h2>Who is behind this project?</h2>

<p>This project is developed in co-operation between <a href="https://www.nr.no/">Norsk Regnesentral</a> and
<a href="https://www.webstep.com">Webstep</a>, through funding by <a href="https://www.bufdir.no/uu/UnIKT/">UnIKT (norwegian)</a>.</p>

<h2>What is this?</h2>
<p>The goal of the project is to develop a website with one accessible version, and one inaccessible version.
It is supposed to be a more modern version of the <a href="https://www.w3.org/WAI/demos/bad/">"Before and After Demonstration"</a> by <a href="https://www.w3.org/">W3C</a>.
In practice, we mean to implement that the user can toggle individual accessibility issues, to test each issue specifically.</p>

<p>In addition to looking more modern, it should use modern frontend tools and typical patterns found in real-life,
so that it better represents actual sites users can encounter on the web today.</p>

<p>The components developed should also be able to use as examples of best practice implementations.
If time permits, we will present them in a separate styleguide and publish them as a component library.</p>

<p>The actual site will mimic a web shop, though, of course, no purchase will be possible.
User data submitted through checkout will only be saved on the user's computer.</p>

<h2>Where can I find the site?</h2>
<p>The site is live at <a href="https://www.clothes4all.net">Clothes4All.net</a>.</p>

<h2>Documentation</h2>
<p>We have started building documentation for the site at <a href="https://www.clothes4all.net/docs">Clothes4All.net/docs</a>. There is not a whole lot there yet, but more will be written in the next few weeks.</p>
<p>To build the docs, use the command <code>npm run docz:dev</code> or <code>npm run docz:build</code>.</p>

<h2>Translations</h2>
<p>The site will initially be developed with translations for English and Norwegian.
We hope for community translations to other languages, to make the site accessible to more users.</p>

<h2>Contribute</h2>
<p>After the initial project is finished, we will be open for contributions to both code and translations.</p>

<p>Please submit <a href="https://github.com/it-vegard/a11y-reference-website/issues">issues</a> or
<a href="https://github.com/it-vegard/a11y-reference-website/pulls">pull-request</a> if you find opportunities for improvements.</p>
