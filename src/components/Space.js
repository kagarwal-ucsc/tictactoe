import React, { Children } from "react"

import styled from "styled-components"

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--leter-size);
  font-weight: bolder;
  font-family: Helvetica, sans-serif;
  color: var(--chalk-color);
`

const Space = ({ children, clickHandler, id }) => {
  return (
    <Box onClick={clickHandler} id={id}>
      {children}
    </Box>
  )
}

export default Space
