import React from "react"

import Container from "../container"

import "./footer.css"

const Footer = () => (
  <footer className="footer">
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </footer>
)

export default Footer
