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
    height: 100vh;
    font-family: Garamond, Times, serif;
`
const Right = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 50%;
    height: 100vh;
    background-color: #fff3b0;
    `

const Bttn = styled.button`
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    border: 4px solid goldenrod;
    color: green;
`



function Home() {
    const history = useHistory()
    const Archive = () => {
            alert("GOING TO ARCHIVE!")
            history.push("/archive")
            return
            }
 const SpongeBob = () => {
            alert("I guess I used to watch SpongeBob!")
            return
            }
    return(
        <Wrapper>
            <Left>
                <h1>Hi, I'm June!</h1>
                <h2>Student | Programmer? | Friendly Person | Video Editor</h2>
                <h5>My nickname is Mr. Raccoon for 3 simple reasons: I love raccoons, raccoons like to steal and are sometimes annoying like me, but they are helpful to the ecosystem, just like how I love to help others!</h5>
                <h4>I also have the nickname Sparkles, for my positive and energetic life.</h4>
                <p>A student with a (somewhat) normal life...</p>
                <h5>I just want to have fun!</h5>
                <h2>Experience</h2>
            <p>I'm a humble programmer, who shines at almost every way!</p>
            {/* <img height="50px" width="50px" src="https://www.sparkawards.com/wp-content/uploads/2014/03/Experience3-72.jpg"></img> */}
            <p>I was the main guy in my school since the very beginning. I was a member of the student council in 6th grade (BCC lower campus). I also went for a speech contest and 3 spelling bees, and failed miserably! However, my successes were much larger: I maintained an all A streak during 7th grade S1, and got the highest GPA. I also have lots of creativity, without causing any troubles! Check this out: https://mrraccoonmagic.wordpress.com/ !</p>
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
            <br></br>
            <Bttn onClick={Archive}>ENTER THE ARCHIVE</Bttn>
            </Left>
            <Right>
                <h3>A student passionate in everything!</h3>
                <h5>I love talking and walking... and tv shows!</h5>
                <h5>And love to listen to the music, escpecially rickrolls and 60s/70s/80s stuff!</h5>
                <h5>I now play rythm games like DDR/Pump It Up; they are so fun!</h5>
                <h5>My interest and dreams center the world of programming...</h5>
                <h5>My dream is to earn money quick... and have a fun life! But I don't waste my money and time!!!</h5>
                <a href="https://github.com/2027JuneLee">
                    <img height="200px" width="200px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREREREBERFQ8QEA8RERAVEhAQEBAQFRIWFxURFRcYISsgGBolGxcVITIhJjUrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGzUhICY1Ny0wKysvLy4tLTIuLTI3Ly81LS0tLS83LS8rKy0rKy4tLS0tLS0tLS0tLS0tLS0rLv/AABEIAL8BBwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUBAgQGB//EAEQQAAIBAgEHCAYHBQkBAAAAAAABAgMRBAUSITFBYZETIlFScYGxwQYyM0JioRQjgqKy0eEkcnOS8BU0Q1Nkk6PS8WP/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADQRAQACAQIDBAkDBQADAAAAAAABAgMEEQUhMRJBsdETIjJCUWGBkaFxwfAGIyTh8RRSYv/aAAwDAQACEQMRAD8A+0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMXAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo1eSje2htvcv/QNMXhs2MpQbUopy1tp202dwGErZ8VJbUBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSn7T7EvGIEtXnRqLc48Yp+Z5EvZhWZC9jHsR68WIAAAA0qStq1vQu0DWpQqWupJvq2tfdcDGFrqcboCYAAAAAAAAAAAAAAAAAAAAAAAAAAI6HtHuhbi/0AiybiFKpio9Ssl/xQXimRsGTtXyR8J/aEjNj7NKT8Y/eXLkXRGUHrhKUeDaJKOswAAABpL1ofveTA6rgUmR5O9VdFWqvvsC0AAAAAAAAAAAAAAAAAAAAAAAAAGlSokrsDFKShCdSehWcnfZFLR58TG94pWbT0hlWs2mKx3vM+jWNaxE3PQsS2/t3biuDa4HOcM1kTqbRPveK612DfBHZ93wXeJg6NVzt9XUs2+rPVp3PxudKo3bConqYGwAABHJ8+C3+TYEsZ/WSj0Qg+Mp/kYRPr7MtvViVZkyNqlZf/ao+Mm/MzYrIAAAAAAAAAAAAAAAAAAAAADRtt2jr17kgMchU60eDYGfo0nrnwjYCOtOjR51SaT2Z0k33R2vsRqy58eKN72iGzHhvknasbqDKuU5YlqnTTjRunJvRKpbV2I5binGK3r2KdPH/AEt9Npq4PXvzt4IcTgbxVta0p7UzmcOqmt922mb1uawyf6Q5qUMSnfVyiV4yXxJamdrouNY71iuXr8UPPw/ee1h+yyoyw1TTTqQ7ITSt9nYXVM+K/s2ifqgXw5Ke1WY+ieOEWyc+MX5GzdqbPC9E5X7mejkjinFuFXQ1qeyS6UwJqHPmpL1Y307G2raOIEca/wC1yh/p4S71Ul+ZEjJ/lTT/AOd/ykzT/Hi3z/ZBQWbiay2Nxku+C87ktGWIAAAAAAAAAAAAAAAAAAAAAHN9IVObc9EZJLO1pNX17tIEkso0P86H86Q2EFVYapodVO+z6RNfJSNV8Nb9d/vPm20zWp02+0eThreilGXOpznFvTe/KRfHS+JXZuEYb+zMxP3TacUyxytETH2VWIo1cLJKok4N2jUXqvdue45niHCr4uvT4p+PJj1Fd69fgnxGMSjco8eCZvswph3tsxk7ItTEJTqNwpPTHRz5rpXQt51ug4NNqxa/KPzLHPraYfVpzn8Luh6O4aP+FGT6Z3n8noL7Hw/T093f9eavvr9Rb3tv05O+lhacdEacIrdGK8CXWla8ojZFte1us7pjJiNAAPNLEft7lszlRv8AY/7aDnZ1MRxXb5dn8ea19H/h7fX8+TvxyzMRCWypDN74v8pfI6JVO9AAAAAAAAAAAAAAAAAAAAAAazgnrAh+hw6qA0qZPpvXFcAIHkzM51KThL4dCfatT7wOmKWIpTp1VzvVlbp92cej9DXmxVy0mluktmLJbHaLV7nlcmYN1MQqFTVSlJ1F0qD8G7cTlNHod9X2Ld3X6L7UZopg9LXv6fV7pHXudAAAABHiKyhCU5aoxcn3bDDJkjHSb26RzZUpN7RWO941KTWf77k536JN53ifN76q06n0nfvu6DlHqd3R6TEL6RQjOHrq04r4lolDxR9F0+aubHXJXvUOXHOO81nub4LEKcU0bmt0AAAAAAAAAAAAAAAAAAAAAAAAACGkrVf3otd60rzA58HhM3GYifWp0Gu15yf4EQsWLs6m9/jEfv5JeTLvpqV+Ez/PytSaiAAAAA81l3KCqvkabvCLvOS1SktUVuXictxviVZicOOf1n9vNbaPT9iPSX69zSNLm23HFzf1t2ybetuxkrKHITcZ+yk7t9SXW7Ok6rg3E4w/27z6s/ifJ5qdP6avar1j8rqrhLvlKLV5aWr8yfxJrUzsomJjeFPMTE7SwsVbRUi4vetHc9R68SxrRepoDdSQC4C4GQAAAAAAAAAAAAAAAAAAAin69PtfziwOpR5ze1qK4N/mebc93u/LZsevADSrVjFXlKMV0tpL5mNr1rzmdmVazblEbq+vl2jH1ZOb6ILO+er5kDPxXS4o523/AE5pNNFmt1jb9VVjMoVq3NX1dN64p3lJdDl5I5rXf1BfJE1x+rH5TcWnxYuc+tP4aYfCqJzWTNNmd8s2dJoakNbDqRtpkmrOmSao8PUq0PZy5vUemD7tncXOi4zm0/KOcfCWWSmPN7Uc/isKXpCtVWnJb42nHhofidLg/qDBePXiY/KLbh9vcnf9eSRZVwctcoJ/FCUHxaLGnEtLaN4vH15NM6HPHu7/AKc0scRhHqq0v95LzJFdTht0tH3ap0+WOtZ+0uiFKk9Uk+ybfmbItE9Ja5rMdYbvBx2ZyfSpN24mTFy4Gu25Rl60JOL32esDrAAAAAAAAAAAAAAAAAAEGJdnGWyMk32bQOiWKpqOc5wUes5JLiBA8pUH/jQ/nt5nmz3dmeDpVUneUovSmqtSz7GpGq+Cl+vjPm2VzXr08I8nHV9GsO3fNkn0qcm/vXImThWmv1j8ykV4hnrG2/4c9X0ca9nVfZOKfzjYrs39PY7exbb9W6vEd/br9lfiKdWj7SNo9dc6HHZ32Oe1nB82DnaOXxjolY74s3szz+HeloYpMp8mGavL4tnSaWlz18Rmm3HimzbTHuhw1OrXdqcdC0Ob0QXfte5FzoeEZdR7McvjPRnkvjwx60/TvWtH0fgletUlLpS+rgvP5nT6fgOnx+360/aEG/EL+5G35ZU8DS1Kk2tqjysuKuyzx6TBj9mkR9Ea2py262lIst0l6lOo18MFFfNokRER0aZmZ6tv7Zvqo1e/MXmevEc8r1GubQedscpKy3uwG2SsLKCbm7zk3KT6W3dgd4AAAAAAAAAAAAAAAAAAw1cDjnkym3dxVwN/7Pp2tmoDGCw/JVLR9Sad47M5amBY3AyBiUU001dPQ09KaPJiJjaXsTtzh5jLOTORfKU/ZNpOP+W3q+y/kcpxjhcY49Lijl3x8P8AS30mp9LHYv18f9taVXmnHWptbZnanrIsBg3iKjTuqcdM34RW9nScH4d/5Ft7ezHXyZZ80YKcus9PNcY7KKpWoUIJ1Elo9ymtl7a3u/p9vWtaRFaxtCjtabTvLnjkuVTnV5ym9dm+auyOpGTx3UsBCOqKAmVGPQgN81dADNQGQAAAAAAAAAAAAAAAAAAAAAAEaf1kVuk/kBJSq3nUj1cz5owrbe0wztXasSnM2ABpWpKcZRkrxkmmtzMb0i9ZrbpLKtprMWh4yd6efCT0024t9KWp96s+8+cazSzh1E0nulf1mMkVtHevsJ+zYTPa57jntdNSds2L4xXcd5w/Txg09a9/WVPq8vpMsz3RyhpkbB2jny0zm3KUnrbelsmoy0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAjoK9Rvqxt3t/oBV5NxudjsTDY4wUe2noa4yfArMGoi2syU/nL/qxz4dtJjt/Of/F+WauAAHlvSLDXxNNbK/JxfapqL+60c5xPSxfWY5+P7LjRZNsFp/8AXfw81j6Qu/I0+tUzn2RWri0dGp3dSjZJAbgAAAAAAAAAAAAAAAAAAAAAAAGGwIZYqC95cQM/SVsu+xN+AGefLVG2+Wj5awIMpY2OFpN3vUlfMjtnPpe5ETWaqunxzaevdCTptPbNfbu75eSoKdNxrR0zjLOd/ev6yfbd8Ti8Otmmoi8TzXt4pkrOOej2+T8dCvBTg+2PvRfVaO5waimenapLns2G2K3Zs6Tc1AFXlShnV8JLq1ai40pS8Yohamm+bFPznwnyS8F9sWWPlHjHmiym74mkurTk+Ml+RNRFkgAAAAAAAAAAAAAAAAAAAAAAAABHG0p5r1KLdunSvzA6rW1LwA569eovUoyk/wB+nHxZrte0dK7/AFhspSs+1bb6So8pZWxkb2wzhHr+2tv5uhd5V6rV6ukT2ce3z6+CxwaXS265N/l08VLQlyks+pNym9bbv3bluOT1mozXmbWneVjNfR17NI2hbOEc3cU3at2t0PtW7SpnJwnejKSqPQsy93ustfYXmizZ6zE033+SZtF67ZI5fNf5Pr5Qds6nSt01G4Sf8t7cDrNPk10x69Y+vLw3Veamij2bT9Ofj5rmi6vvqnf4ZSfiixr2/e2Qbdj3d21WF3TfVm39yS8z21d5ifh5MaztE/zvV2K/vS3UY/jkZsXeAAAAAAAAAAAAAAAAAAAAAAAAAIMRRbs4u0lqYEDlietD+T9QNZVsUtXJPtjLyYG0cp1I+1paNsoO/wB1/mBBlTJVPEQ5WhZVdaktCn8Ml079aKzX8OpnrM1ja3inaXWWxT2bc6+DzixMnFQSee2oqO3ObtbicXXSTObaIXHYrE9qenV6bCYWlgqWfU01HZSna8pSfuQ/rezutHoqaem0de+VHqdVbNb5d0NFlDEVdNOEacdjlz5/kvmTUVvDEV6Wmo1OHvc1Rkl0q3gBca7PvXACqxP96X8GH45gd4AAAAAAAAAAAAAAAAAAAAAAAAAAAAGHG4HPhI8nUcV6s1e3xL9PACqp4C2Um7c3MdddGc+b+K7KauliOIdrblt2vr0Ws599Dt379n93RlGPK4mMH6tKKdvjlpb4ZpcqpaRjZWQCpG6aA5I4+VNZsqcpZuhONtK2XvqAiwkZ1Kkqs1m3SjGOvNitS+b4gWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGr69N9ErcVbzAkdD65VNvJOHdnpmrsf3O18tvy29v8At9n57/hX4aN8RXl8UVwhFG1qWQADDQGUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDE+5+/D8SA7bAVOC9tX/AIj8EBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjr085NAcdTE4hc1Rg3qU3e/bbpA3ybhHBPOd5SbcntbelsDtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="></img>
                </a>  
                <a href="https://www.nationalgeographic.com/animals/mammals/facts/raccoon">
                    <img height="200px" width="200px" src="data:image/jpeg;base64,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"></img>
                </a>  
                <br></br>
                <a href="https://github.com/2027JuneLee">
                    <img height="150px" width="150px" src="https://cdn.vox-cdn.com/thumbor/s7qMSKpeavBerH1LCyFPIkNrW4k=/0x0:900x500/1400x1050/filters:focal(378x178:522x322):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg"></img>
                </a>      
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjsgc2I6cv2AhW2rVYBHSGdB3wQFnoECHgQAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpongeBob_SquarePants&usg=AOvVaw3cPUE8tMAKwCLC8ZU64pPL">
                    <img onClick={SpongeBob} height="150px" width="150px" src="https://64.media.tumblr.com/66a8fd39a3435df9911ba99057b18ba2/tumblr_n5qm4lFKNt1tajjsfo4_400.gifv"></img>
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