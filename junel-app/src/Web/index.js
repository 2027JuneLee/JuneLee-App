import styled from "styled-components"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"

const Bttn2 = styled.button`
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    border: 2px dotted siena;
    color: sandy-brown;
`
const Bttn3 = styled.button`
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    border: 4px solid goldenrod;
    color: green;
`
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    color: black;
`

const Left = styled.div`
    color: goldenrod;
    text-align: center;
    margin-top: 20px; 
    width: 50%;
    background-color: darkorchid;
    height: 130vh;
    font-family: Garamond, Times, serif;
`
const Red = styled.div `
    font-family: Garamond, Times, serif;
    color: tomato;
`
const Right = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    height: 130vh;
    background-color: #fff3b0;
    `

const Bttn = styled.button`
    font-family: "Times New Roman", Times, serif;
    font-size: 14px;
    border: 7px solid #F5F5DC;
    color: #B22222;
`

const Bttn4 = styled.button`
    font-family: "Times New Roman", Times, serif;
    font-size: 28px;
    border: 7px solid salmon;
    color: olive;
`



function Web() {
    const history = useHistory()
    const Archive = () => {
            alert("GOING BACK TO ARCHIVE!")
            history.push("/archive")
            return
            }
    const Home = () => {
        alert("GOING BACK TO HOMEPAGE!")
        history.push("/home")
        return
        }
    const LogIn = () => {
            alert("GOING BACK TO LOGIN PAGE! LOG BACK IN!!!")
            history.push("/")
            return
            }
    const Rick = () => {
                if (window.confirm("Do you really want to leave?")) { //Confirm is like OK, and this thing creates new cancel option in case you want to cancel your actions like Steve Yoo.
                    window.alert("Alright, remember that big brother is always watching you...")
                  } else {
                      window.alert('Fine, you can stay here!')
                  }
            }
    return(
        <Wrapper>
            <Left>
                <Red><h1>What I've made</h1></Red>
                <Bttn onClick={Archive}>(Go BACK)</Bttn>
                <h4>Hello, these are my creations. Full of my awesome and loooong codes, that I've made through my 7th grade, during my Web Development class, everything's archived, here! I'll be explaning what I did!!! Never gonna tell a lie... never gonna run around...</h4>
                <ol>
                    <li>Scribble Meals, formally known as IDelivery Brothers, closed upon alpha launch</li>
                    <li>Unofficial BCC Survey, hoping that I'll be STUCO someday...</li>
                    <li>Weird Scheduler of a random week, honestley much worse than what I can do now</li>
                    <li>And a login page, calculator, counter, homepage, archive page and much more!!! I'll leave any possible links!</li>
                    <li>Visit this link for Quarter 1-3 stuff: https://github.com/2027JuneLee/JuneLee-Web</li>
                    <li>Visit this link for Quarter 3-4 E8UcxIBLRY9PUahT5VT4owhzg5xGuv4RBCt8SI3HcfZTM807ttcdsxA9l4UPHFDLeR0B3MfZLSYPYhUrxYHseC4lzdhYj9: https://github.com/2027JuneLee/JuneLee-App/tree/master</li>
                    <li>Thank you (for anything)!</li>
                </ol>
            </Left>
            <Right>
                <br></br>
                <a href="https://github.com/2027JuneLee/JuneLee-Web/tree/main/Quarter_1/OrderingSystem" onClick={Rick}><img width="300px" height="200px" src="https://i.ibb.co/9NQRyKN/Screenshot-2022-04-18-095037.png"></img></a>
                <a href="https://github.com/2027JuneLee/JuneLee-Web/tree/main/Quarter_1/SurveyForm"><img src="https://i.ibb.co/n8Wkd1f/Screenshot-2022-04-19-201334.png" width="250px" height="200px" onClick={Rick}></img></a>
                <a href="https://github.com/2027JuneLee/JuneLee-Web/tree/main/Quarter_1/Scheduler"><img src="https://i.ibb.co/ZXzFVS5/Screenshot-2022-04-19-205258.png" width="300px" height="200px" onClick={Rick}></img></a>
                <a href="https://github.com/2027JuneLee/JuneLee-Web/tree/main/Quarter_3/projects"><img src="https://i.ibb.co/ZgTNdV8/Screenshot-2022-04-19-205820.png" width="250px" height="300px" onClick={Rick}></img></a>
                <a href="https://github.com/2027JuneLee/JuneLee-Web/tree/main/Quarter_3/projects"><img src="https://i.ibb.co/4V42xpL/Screenshot-2022-04-19-211127.png" width="250px" height="200px" onClick={Rick}></img></a>
                <Bttn2 onClick={Archive}>ENTER THE ARCHIVE... AGAIN</Bttn2>
                <Bttn3 onClick={Home}>Home Page</Bttn3>
            </Right>
        </Wrapper>
    )
}
export default Web