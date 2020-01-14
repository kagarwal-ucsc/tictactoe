/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0 auto;;
    box-sizing: border-box;
    background-color: #5D5D5D;
  }
  :root {
    --box-size: 12rem;
    --leter-size: 6rem;
    --chalk-color: #f4f4f0;
    --yellow-chalk-color: #f5f9ad;
  }
`

const Footer = styled.footer`
  font-family: cursive;
  text-align: center;
  margin-top: 5rem;
  color: rgba(145, 147, 188, 0.8);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer>Built by calmForecast</Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
