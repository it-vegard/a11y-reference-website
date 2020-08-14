import React from "react"
import * as PropTypes from "prop-types"

import Container from "../container"
import DropDown from "../dropdown"
import Navigation from "../navigation"

import "./menu.css"

const Menu = ({ links }) => {
  if (!links || links.length === 0) {
    return null
  }
  return (
    <div className="menu">
      {links.map(menu => (
        <DropDown
          buttonText={menu.title}
          className="menu__dropdown"
          key={menu.title}
        >
          <Container>
            <Navigation links={menu.links} isHorizontal={true} />
          </Container>
        </DropDown>
      ))}
    </div>
  )
}

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    })
  ),
}

export default Menu
