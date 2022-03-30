import styled from "styled-components"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    color: black;
    text-align: center;
`
//#92A8D1
const Left = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    background-color: #F7CAC9;
    font-family: cursive;
    height: 105%;
`
const Right = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    height: 105%;
    background-color: #92A8D1;
    font-family: Georgia, serif;
    `
const Title = styled.div`
    margin-left: 5%;
`

    function Archive() {
        const history = useHistory()
        const RickRoll = () => {
                alert("You just got rickrolled! Don't click on random images next time!")
                return
                }
        const Education = () => {
            alert("GOING TO EDUCATION PAGE!")
            history.push("/education")
            return
                    }
        const Home = () => {
                        alert("GOING BACK TO MAIN PAGE!")
                        history.push("/home")
                        return
                        }
        return(
        <div>
        <Wrapper>
            <Left>
                <h1>More About Me!</h1>
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjLhNLmxez2AhVCHKYKHYUEBikQyCl6BAgUEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU" onClick={RickRoll}>
                    <img height="300px" width="500px" src="https://i.ibb.co/VHyHtCr/WIN-20211208-09-06-28-Pro.jpg" alt="WIN_20211208_09_06_28_Pro" border="0">
                    </img>
                </a>
                <h3>Hi, I'm June!</h3>
            <a href="https://github.com/2027JuneLee">
                <img height="50px" width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-700x394.png"></img>
            </a>
            <a href="https://www.usbccollegiate.org/">
                <img height="50px" width="50px" src="https://static.wixstatic.com/media/7d4bbb_1e02f7a3b1414a3e9e0cca4282223bf3~mv2.png/v1/crop/x_0,y_2,w_441,h_441/fill/w_128,h_120,al_c,usm_0.66_1.00_0.01,enc_auto/_BC.png"></img>
            </a>
            <a href="mrraccoonmagic.wordpress.com">
                <img height="50px" width="75px" src="https://mrraccoonmagic.files.wordpress.com/2021/03/raccooon-1.png?strip=info&w=1129"></img>
            </a>
            </Left>
 
            <Right>
                <h1>Starting Words</h1>
                <h5>Hi, I'm June Lee, a.k.a Mr.Raccoon and Sparkles! I am a student, a friend, a sibling, and a hardworking programmer.</h5>
                <h6></h6>
                <h2>Basic Information</h2>
                <ol>
                    <li>Name: June Lee (Jun Soo Lee)</li>
                    <li>Email Adress: 2027junelee@usbccollegiate.org</li>
                    <li>Phone Number: 010-5213-#### Censored in order to prevent random github stalkers/bots</li>
                    <li>Date of Birth: 2009/07/02</li>
                    <li>Birthplace: Seoul, South Korea</li>
                    <li>Current state of education: G7 at a random international school</li>
                    <li>Major: Undecided, possible majors are: computer science, biology, world history, etc.</li>
                    <li>Marriage: No, solo 2009-present</li>
                    <li>Known for: Being a talkative and active guy in school, and for wearing an ice cream costume!</li>
                    <li>Role Model: Anyone who taught me something, escpecially stuff that shaped who I am in the present and future</li>
                </ol>
                <img onClick={Education} src="https://static.wixstatic.com/media/7d4bbb_1e02f7a3b1414a3e9e0cca4282223bf3~mv2.png/v1/crop/x_0,y_2,w_441,h_441/fill/w_128,h_120,al_c,usm_0.66_1.00_0.01,enc_auto/_BC.png"></img>
                <img onClick={Home} height="150px" width="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png"></img>
            </Right>
            </Wrapper>
            </div>

    )
}
export default Archive