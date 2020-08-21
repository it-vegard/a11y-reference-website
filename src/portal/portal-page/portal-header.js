import React from "react"

import Container from "../../components/container"
import Logo from "../../components/logo"

const PortalHeader = () => {
  return (
    <header>
      <div className="header">
        <Container className="header__container">
          <Logo />
        </Container>
      </div>
      {/** <Container>
        <Breadcrumbs links={[{ text: "Home", url: "/" }]}/>
      </Container> */}
    </header>
  )
}

export default PortalHeader
