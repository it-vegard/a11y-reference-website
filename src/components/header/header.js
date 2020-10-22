import React from "react"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import Logo from "../logo"
import { MiniCart } from "../cart"
import HeaderMenuDesktop from "./header-menu-desktop"
import HeaderMenuMobile from "./header-menu-mobile"

import "./header.css"

const Header = () => (
  <header>
    <div className="header">
      <Container className="header__container">
        <Logo />
        <HeaderMenuDesktop />
        <HeaderMenuMobile />
      </Container>
    </div>
    <MiniCart />
    <Container>
      <Breadcrumbs />
    </Container>
  </header>
)

export default Header
