import styled from "styled-components"
import React, { useState } from "react"
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    color: black;
`

const Left = styled.div`
    font-size: 100px;
    color: blue;
    text-align: center;
    margin-top: 20px;
    width: 50%;
    background-color: goldenrod;
`
const Right = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    background-image: url("https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4");
`
const WelcomeTitle = styled.h1`
    color: black;
    font-weight: 800;
    font-size: 40px;
    margin-left: 1px
`

const Label = styled.label`
    font-size: 24px;
    color: black;
`
const Input = styled.input`
    font-family: 'Courier New', Courier, monospace;    
    font-size: 24px;
    color: black;
`

const InputButton = styled.button`
    width: 20%;
    height: 30px;
    font-size: 24px;
    background-color: silver;
    border-radius: 5px;
`

function LoginPage() {
    const [user, setUser] = useState({
        id:"",
        pw:""
    })
    const {id , pw} = user
    const navigate2Home = () => {
        alert("Log In Successful!")
    }
    
    return (   
    <Wrapper>
        <Left>
            <WelcomeTitle>We Are Happy To See You Back!</WelcomeTitle>
           <Label>ID: </Label> 
            <Input></Input>
            <br></br>
            <Label>Password: </Label> 
            <Input type="password"></Input>
            <br></br>
            <InputButton onClick={navigate2Home()}>Log In!</InputButton>
        </Left> 
        <Right></Right>
    </Wrapper>
    )
 
}
export default LoginPage
