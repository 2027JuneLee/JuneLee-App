import styled from "styled-components"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
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



function Home() {
    const history = useHistory()
    const Archive = () => {
            alert("ARCHIVE COMING SOON!")
            history.push("/archive")
            return
            }
    return(
        <Wrapper>
            <Left>
                <h1>Hi, I'm June!</h1>
                <p>A student with a (somewhat) normal life...</p>
                <h5>I just want to have fun!</h5>
                <h2>Experience</h2>
            <p>I'm a humble programmer, who shines at almost every way!</p>
            {/* <img height="50px" width="50px" src="https://www.sparkawards.com/wp-content/uploads/2014/03/Experience3-72.jpg"></img> */}
            <p>I was the main guy in my school since the very begining. I was a member of the student council in 6th grade (BCC lower campus). I also went for a speech contest and 3 spelling bees, and failed miserably! However, my successes were much larger: I maintained an all A streak during 7th grade S1, and got the highest GPA. I also have lots of creativity, without causing any troubles! Check this out: https://mrraccoonmagic.wordpress.com/ !</p>
            <p>My dream?, simple! Earn a decent amount of money doing stuff like this, have some CLOSE friends, have a nice house, and do whatever I want to do with my mind!</p>
            <h2>Links (Github, BCC, etc.)</h2>
            <a href="https://github.com/2027JuneLee">
                    <img height="50px" width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-700x394.png"></img>
            </a>
            <a href="https://www.usbccollegiate.org/">
                <img height="50px" width="50px" src="https://static.wixstatic.com/media/7d4bbb_1e02f7a3b1414a3e9e0cca4282223bf3~mv2.png/v1/crop/x_0,y_2,w_441,h_441/fill/w_128,h_120,al_c,usm_0.66_1.00_0.01,enc_auto/_BC.png"></img>
            </a>
            <a href="mrraccoonmagic.wordpress.com">
                <img height="50px" width="75px" src="https://mrraccoonmagic.files.wordpress.com/2021/03/raccooon-1.png?strip=info&w=1129"></img>
            </a>
                <img onClick={Archive} height="50px" width="75px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Internet_Archive_logo_and_wordmark.svg/1200px-Internet_Archive_logo_and_wordmark.svg.png"></img>

            </Left>
            <Right>
                <h3>A student passionate in everything!</h3>
                <h5>I love talking and walking... and love to watch tv shows!</h5>
                <h5>And love to listen to the music, escpecially rickrolls!</h5>
                <h5>My interest and dreams center the world of programming...</h5>
                <h5>My dream is to earn money quick... and have a fun life! But I don't waste my money and time!!!</h5>
                <a href="https://github.com/2027JuneLee">
                    <img height="150px" width="150px" src="https://cdn.vox-cdn.com/thumbor/s7qMSKpeavBerH1LCyFPIkNrW4k=/0x0:900x500/1400x1050/filters:focal(378x178:522x322):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg"></img>
                </a>      
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjsgc2I6cv2AhW2rVYBHSGdB3wQFnoECHgQAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpongeBob_SquarePants&usg=AOvVaw3cPUE8tMAKwCLC8ZU64pPL">
                    <img height="150px" width="150px" src="https://64.media.tumblr.com/66a8fd39a3435df9911ba99057b18ba2/tumblr_n5qm4lFKNt1tajjsfo4_400.gifv"></img>
                </a>
                <a href="https://www.google.com/url?sa=t&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjI5NHc78b2AhXHaN4KHV9bDa0Q3yx6BAgUEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU">
                    <img height="150px" width="150px" src="https://c.tenor.com/VFFJ8Ei3C2IAAAAM/rickroll-rick.gif"></img>
                </a>
                <br></br>
                <a href="https://stackoverflow.com/">
                    <img height="150px" width="150px" src="https://c.tenor.com/ocOAaIw44l4AAAAd/earth-orbit.gif"></img>
                </a>
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjXoqvo6cv2AhXQsFYBHejYCXwQFnoECAgQAQ&url=https%3A%2F%2Fwww.unicef.org%2F&usg=AOvVaw1O2uknYQB73GM2vRXK9mri">
                    <img height="150px" width="150px" src="https://c.tenor.com/EWRvErYGzPUAAAAC/bugs-bunny-looney-tunes.gif"></img>
                </a>

            </Right>
        </Wrapper>
    )
}

export default Home