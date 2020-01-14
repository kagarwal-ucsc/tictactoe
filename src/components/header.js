import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const Heading = styled.header`
  font-family: cursive;
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 0;
  background-color: rgba(145, 147, 188, 0.5);
  color: var(--yellow-chalk-color);
  a {
    text-decoration: none;
    color: var(--yellow-chalk-color);
  }
  h1 {
    margin-top: 0;
  }
`

const Header = ({ siteTitle }) => (
  <Heading>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <h3>Take a break, play a game.</h3>
  </Heading>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
