//border left and border right thingy
import styled from "styled-components"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { ProgressBar, Button } from "react-bootstrap"
import styles from "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Wrapper = styled.div`
    display: flex;
    height: 500vh;
    display: flex;
    flex-direction: column;
    background-image: url(https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4);
`
//#92A8D1
const Left = styled.div`
    text-align: center;
    // margin-top: 20px;
    width: 50%;
    background-color: #F7CAC9;
    font-family: cursive;
    height: 140%;
`
const Right = styled.div`
    text-align: center;
    // margin-top: 20px;
    width: 50%;
    height: 140%;
    background-color: #92A8D1;
    font-family: Georgia, serif;
`
const Whistlist = styled.div`
    Display: flex;
    flex-direction: column;

`
const Title = styled.div`
    text-align: center;
    color: #DAA520;
    border: 10px dotted green;
    `
const AboutContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    padding-bottom: 80px;
`
const EduContainer = styled.div`
    background-color: teal;
    width: 100%;
    height: 100vh;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // padding-top: 50px;
    // padding-bottom: 80px;
`

const EduContainer2 = styled.div`
    background-color: teal;
    width: 100%;
    height: 200vh;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // padding-top: 50px;
    // padding-bottom: 80px;
`

const Books = styled.div`
    background-color: pink;
    width: 100%;
    height: 210vh;
`

const Bttn = styled.button`
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    border: 2px dotted siena;
    color: sandy-brown;
`
    function Archive() {
        const history = useHistory()
        const RickRoll = () => {
                alert("You just got rickrolled! Don't click on random images next time!")
                return
                }
        const HARRY4 = () => {
            if (window.confirm("Do you really want to leave?")) { //Confirm is like OK, and this thing creates new cancel option in case you want to cancel your actions like Steve Yoo.
                window.open("https://www.goodreads.com/book/show/6.Harry_Potter_and_the_Goblet_of_Fire", '_blank');
              } else {
                  window.alert('Fine, you can stay here!')
              }
        }
        const GULLIVER5GUYS = () => {
            if (window.confirm("Do you really want to leave?")) { //Confirm is like OK, and this thing creates new cancel option in case you want to cancel your actions like Steve Yoo.
                window.open("https://www.goodreads.com/book/show/7733.Gulliver_s_Travels", '_blank');
              } else {
                  window.alert('Fine, you can stay here!')
              }
        }
        const AKKA = () => {
            if (window.confirm("Do you really want to leave?")) { //Confirm is like OK, and this thing creates new cancel option in case you want to cancel your actions like Steve Yoo.
                window.open("https://www.goodreads.com/book/show/60730905-the-akkadian-empire?from_search=true&from_srp=true&qid=YPUuvD0e49&rank=1#", '_blank');
              } else {
                  window.alert('Fine, you can stay here!')
              }
        }
        const Rick = () => {
            if (window.confirm("Do you really want to leave?")) { //Confirm is like OK, and this thing creates new cancel option in case you want to cancel your actions like Steve Yoo.
                window.open("https://www.goodreads.com/book/show/59728065-rick-roll-joke-notbook---qr-code-rickrolling?from_search=true&from_srp=true&qid=VLV0z4yj9R&rank=1");
              } else {
                  window.alert('Fine, you can stay here!')
              }
        }
        const Web = () => {
            alert("COMING TRUE INCASE YOU ARE WONDERING")
            history.push("/web")
            return
                    }
        const Home = () => {
                        alert("GOING BACK TO MAIN PAGE!")
                        history.push("/home")
                        return
                        }
        const rickroll = {
            backgroundColor: "gray",
            width: "50%",
            color: "golden-rod"
        }
        return(
        <div>
        <Wrapper>
            <AboutContainer>
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
                <Bttn onClick={Web}>Web Devlopment Works</Bttn>
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
                        <li>Major: Undecided, possible majors are: computer science, biology, world history, etc. I will choose computer science or something like that, don't worry!</li>
                        <li>Known for: Being a talkative and active guy in school, and for wearing an ice cream costume!</li>
                        <li>Role Model: Anyone who taught me something, escpecially stuff that shaped who I am in the present and future</li>
                    </ol>
                    <img onClick={Home} height="40px" width="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png"></img>
                </Right>
            </AboutContainer>
        <EduContainer>
            <Title>
                <h1>
                    About My Education!
                </h1>
            </Title>
            <div>
                <p>GPA (GRADE POINT AVERAGE)</p>
                <ProgressBar max={5.0} min={0.0} animated now={4.08} label={'4.08/5.0, if I had my A- turn into an A+, I could go to MIT just now. If I only did one more HW...'} style={rickroll} variant={"info"}/>
            </div>
            <div>
                <p># Of tries and wins of Spelling Bee and Speech Contest</p>
                <ProgressBar max={5} min={5} animated now={0} label={'0/7 😢'} style={rickroll} variant={"danger"}/>
            </div>
            <div>
                <p>Merit Slips</p>
                <ProgressBar max={0} min={30} animated now={18} label={'At least 18'} style={rickroll} variant={"success"}/>
            </div>
            <div>
                <p>Student Council Terms</p>
                <ProgressBar max={9} min={0} animated now={1} label={'Only 1 in G6'} style={rickroll} variant={"warning"}/>
            </div>
        </EduContainer>
        <Books>
            <h1>LIBRARY TIME!!!</h1>
            <h4>I didn't read a lot of books since grade 5, I think I read a thousand of them until now. as I was lazy watching YouTube instead. Since April 10th (which is apparently very recent), I subscribed to Kindle Unlimited, a $10/month subscription that gives you a fair 2 million+ amount of books and counting. Use code JuneLee0702 to get 10 percent off... Other than that, look at what I've read during my entire 13 year life.</h4>
            <div>
                <p>Harry Potter Books Read</p>
                <ProgressBar max={7.0} min={0.0} animated  now={4.0} label={'Started 5th book, but stopped'}style={rickroll} />
            </div>
            <div>
                <p>Interest in books</p>
                <ProgressBar max={10} min={0} animated  now={8} label={'8: I would love to read them in a deserted island (I do not wish to go there though)'}style={rickroll}/>
            </div>
            <div>
                <p>Reading level</p>
                <ProgressBar max={10} min={0} animated  now={9} label={'9: I can understand most words, but some just sound gibberish. I keep an eye or two on them though.'}style={rickroll}/>
            </div> 
            <h6>My favorite books are: Harry Potter, The Outsiders, and just any novel at this point. I really do want to read more classic books, the ones made in the old days, the time where creativity was everything. I love action, fantasy, and biography (I just like history stuff) genres.</h6>
            <Title><h1>Wishlist</h1></Title>

            <h6>1. Harry Potter and The Goblet of Fire - Made from a great person, about a great person, will make me a great person</h6>
            <img onClick={HARRY4} width="100px" height="150px" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432278740l/22844191._SY475_.jpg"></img>
            <h6>2. Gulliver's travels; The novel, the original one! Looking forward to see how different people will see and view diffrent people completely different, a real life lesson essential to us I suppose.
            </h6>
            <img onClick={GULLIVER5GUYS} width="100px" height="150px" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427829692l/7733.jpg"></img>
            <h6>3. The Akkadian Empire: A Captivating Guide to the First Ancient Empire of Mesopotamia and How Sargon the Great of Akkad Conquered the Sumerian City-States - Just learning history, pretty fun!
            </h6>
            <img onClick={AKKA} width="100px" height="150px" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1648809225l/60730905._SY475_.jpg"></img>
            <h6>4. A note'book' with a bunch of qr codes... Try scanning them</h6>
            <img onClick={Rick} width="100px" height="150px" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638258150l/59728065._SY475_.jpg"></img>
            
        </Books>
        </Wrapper>
        </div>

    )
}
export default Archive