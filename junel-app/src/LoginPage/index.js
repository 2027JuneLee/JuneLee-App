import styled from "styled-components"
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
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Raccoon_climbing_in_tree_-_Cropped_and_color_corrected.jpg/330px-Raccoon_climbing_in_tree_-_Cropped_and_color_corrected.jpg");
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
const Input = styled.label`
    font-family: 'Courier New', Courier, monospace;    
    font-size: 24px;
    color: black;
`

function LoginPage() {
    return (   
    <Wrapper>
        <Left>
            <WelcomeTitle>We Are Happy To See You Back!</WelcomeTitle>
            <Input>
                <label for="ID">ID: </label>
                <input id="ID" type="text" name="text-field" value=""></input>
            </Input>
            <br></br>
            <Input>
                <label for="PW">Password: </label>
                <input id="PW" type="password" name="text-field" value=""></input>
            </Input>
            <br></br>
            <Input>
                <input id="button1" type="button" value="Log In!"/>
            </Input>
        </Left> 
        <Right></Right>
    </Wrapper>
    )
 
}
export default LoginPage
