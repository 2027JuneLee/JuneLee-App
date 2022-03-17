import styled from "styled-components"
import React, { useState } from "react"
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    color: black;
`

const Left = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    background-color: goldenrod;
`
const Right = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL54T0o5RWjT6UyjVYNjHeKP6ceNECpy138w&usqp=CAU");
    `
function Archive() {
    return(
        <Wrapper>
            <Left>
                <h1>Coming soon!!!</h1>
                <h2>Archive of random stuff</h2>
            </Left>
        </Wrapper>
    )
}
export default Archive