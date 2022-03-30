import styled from "styled-components"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    color: black;
`

const Left = styled.div`
    color: #540b0e;
    text-align: center;
    margin-top: 20px;
    width: 50%;
    background-color: #f48c06;
    height: 130%;
    font-family: Garamond, Times, serif;
`
const Right = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    height: 130%;
    background-color: #fff3b0;
    `

const Bttn = styled.button`
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    border: 4px solid goldenrod;
    color: green;
`



function Education() {
    const history = useHistory()
    const Archive = () => {
            alert("GOING BACK TO ARCHIVE!")
            history.push("/archive")
            return
            }
    return(
        <Wrapper>
        <h1>Hello! I had no time so I'll quickly list just a few of my educational stuff!</h1>
        <ol>
            <li>
                Highest GPA award at G7 S1
            </li>
            <li>All A's at G7 S1</li>
            <li>Member of student council at G6</li>
            <li>BCC student since G1</li>
            <li>3 spelling bees, 1 speech contest participation</li>
            <li>Always last place in sports day events</li>
            <li>Main character in world geography project</li>
            <li>And too much more!!!</li>
            <li>Thanks for reading this!</li>
        </ol>
        </Wrapper>
    )
}

export default Education