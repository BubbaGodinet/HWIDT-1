import React from "react"

import styled from "styled-components"

// import Scroll from "./Scroll"


export default function Layout({ children }) {

  return (
    <>
      {/* <Scroll> */}
        <Main>{children}</Main>
      {/* </Scroll> */}
    </>
  )
}

const Main = styled.main`
background-color: lightblue;
width: 100vw;
height: 100vh;
  /* overflow-x: hidden; */
`