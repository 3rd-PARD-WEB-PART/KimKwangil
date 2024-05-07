import styled from "styled-components";
import {DivContainer} from "../Components/NormalComponents";
import {Link} from "react-router-dom";
import {useState} from "react";

function Register() {

    const initInputLoginData = {
        email: "",
        password: "",
        passwordCheck: "",
        name: ""
    }

    const [inputRegisterData, setInputRegisterData] = useState(initInputLoginData);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputRegisterData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <ContainerRegister>
            <WrapperRegitser>
                <DivItem height="112px" jusitfyContent="start" alignItems="center">
                    <Img src="img/logo2.png" width="90px"></Img>
                </DivItem>
                <DivItem height="728px">
                    <DivItemInner>
                        <DivInput height="70px">
                            <P fontSize="20px" fontWeight="bold">회원가입</P>
                        </DivInput>
                        <DivInput height="70px" jusitfyContent="space-between">
                            <P fontSize="15px" fontWeight="bold">이메일</P>
                            <Input
                                type="text"
                                placeholder="이메일"
                                value={inputRegisterData.email}
                                name="email"
                                onChange={handleInputChange}></Input>
                        </DivInput>
                        <DivInput height="100px" jusitfyContent="space-between">
                            <P fontSize="15px" fontWeight="bold">비밀번호</P>
                            <P fontSize="15px" fontWeight="bold">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</P>
                            <Input
                                type="text"
                                placeholder="비밀번호"
                                value={inputRegisterData.password}
                                name="password"
                                onChange={handleInputChange}></Input>
                        </DivInput>
                        <DivInput height="70px" jusitfyContent="space-between">
                            <P fontSize="15px" fontWeight="bold">비밀번호 확인</P>
                            <Input
                                type="text"
                                placeholder="비밀번호 확인"
                                value={inputRegisterData.passwordCheck}
                                name="passwordCheck"
                                onChange={handleInputChange}></Input>
                        </DivInput>
                        <DivInput height="100px" jusitfyContent="space-between">
                            <P fontSize="15px" fontWeight="bold">닉네임</P>
                            <P fontSize="15px" fontWeight="bold">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</P>
                            <Input
                                type="text"
                                placeholder="별명 (2~15자)"
                                value={inputRegisterData.name}
                                name="name"
                                onChange={handleInputChange}></Input>
                        </DivInput>
                        <DivInput height="50px">
                            <Button>회원가입하기</Button>
                        </DivInput>
                        <DivInput height="20px" marginBottom="50px">
                            <P fontSize="15px" fontWeight="bold" textAlign="center">
                                이미 아이디가 있으신가요? &nbsp;
                                <MyLink to="/">로그인</MyLink>
                            </P>
                        </DivInput>
                    </DivItemInner>
                </DivItem>
            </WrapperRegitser>
        </ContainerRegister>
    );
}

const ContainerRegister = styled(DivContainer)`
    height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WrapperRegitser = styled.div `
    width : 635px;
    height : 840px;

    background-color: white;

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

const DivItemInner = styled.div `
    width: 360px;
    height: 100%;
    /* background-color: yellow; */

    display: flex;
    flex-direction : column;
    justify-content: space-between;
`
const Img = styled.img `
    width: ${props => props.width};
    &:hover{
        opacity: 50%;
    }
`;

const DivInput = styled.div `

    width: 100%;
    height : ${props => props.height};
    /* background-color: green; */
    margin-bottom : ${props => props.marginBottom};

    display: flex;
    flex-direction: column;
    justify-content: ${props => props.jusitfyContent || "center"};
`;

const P = styled.p `
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    margin : ${props => props.margin};
    text-align: ${props => props.textAlign};
`;

const Input = styled.input `
    background: none;
    width : 100%;
    height : 40px;
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
    height : 50px;
    font-size :17px;
    font-weight: bold;
    color : white;

    border: none;
    border-radius: 5px;
    background-color: #64C2EB;

    &:hover{
        opacity: 50%;
    }
`

const MyLink = styled(Link)`
    text-decoration: none;
    color : black;
    &:hover{
        opacity: 50%;
    }
`;
export default Register;