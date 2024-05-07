import styled from "styled-components";
import {DivContainer} from "../Components/NormalComponents";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const initInputLoginData = {
        email: "",
        password: ""
    }
    

    const [inputLoginData, setInputLoginData] = useState(initInputLoginData);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const navigate = useNavigate();

    const handleLogin = () => {
        alert("로그인되었습니다.");
        navigate("/home");
    }

    return (
        <ContainerLogin>
            <WrapperLogin>
                <DivItem height="60px">
                    <a href="https://store.ohou.se/exhibitions/10020?special_feed=true">
                        <Img src="img/logo2.png"></Img>
                    </a>
                </DivItem>
                <DivItem height="100px" flexDirection="column">
                    <Input
                        type="text"
                        placeholder="이메일"
                        value={inputLoginData.email}
                        name="email"
                        onChange={handleInputChange}></Input>
                    <Input
                        type="password"
                        placeholder="비밀번호"
                        value={inputLoginData.password}
                        name="password"
                        onChange={handleInputChange}></Input>
                </DivItem>
                <DivItem
                    height="75px"
                    flexDirection="column"
                    alignItems="center"
                    jusitfyContent="space-between">
                    <Button onClick={handleLogin}>로그인</Button>
                    <Link to = "/register" style={{textDecoration : "none", color : "black"}}><P fontSize="15px" fontWeight="bold">회원가입</P></Link>
                </DivItem>
            </WrapperLogin>
        </ContainerLogin>
    );
}

// Container : 로그인
const ContainerLogin = styled(DivContainer)`
    height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WrapperLogin = styled.div `
    width : 300px;
    height : 275px;

    /* background-color: white; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DivItem = styled.div `
    width: 100%;
    height : ${props => props.height};
    /* background-color: green; */

    display: flex;
    justify-content: ${props => props.jusitfyContent || "center"};
    align-items: ${props => props.alignItems || "start"};
    flex-direction : ${props => props.flexDirection};
`
const Img = styled.img `
    width: ${props => props.width};
    &:hover{
        opacity: 50%;
    }
`;

const Input = styled.input `
    background: none;
    width : 100%;
    height : 50%;
    font-size: 18px;
    border : 1px solid  #EDEDEF;
    box-sizing: border-box;
    border-radius: 3px;
    color :  black;
    padding : 0px 20px;

    &:focus {
        outline: none;
    }

    &::placeholder{
        color :  #EDEDEF;
    }
`

// Button 컴포넌트
const Button = styled.button `
    width : 100%;
    height : 40px;
    font-size :15px;
    font-weight: bold;
    color : white;

    border: none;
    border-radius: 5px;
    background-color: #64C2EB;

    &:hover{
        opacity: 50%;
    }
`

const P = styled.p `
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    margin : ${props => props.margin};

    &:hover{
        opacity: 50%;
    }
`;

export default Login;