import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import TicTacToe from "../components/TicTacToe"

const GameBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Game" />
    <GameBody>
      <TicTacToe />
    </GameBody>
  </Layout>
)

export default IndexPage
