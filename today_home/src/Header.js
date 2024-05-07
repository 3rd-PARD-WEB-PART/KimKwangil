import styled from "styled-components";
import {DivContainer, DivWrapper} from "./Components/NormalComponents";
import { Link } from "react-router-dom";

// [Styled Components 바로 가기]
// Header 전체 영역 Container
// Header 영역 구분 Div
// 대주제 메뉴 Item
// 검색창 Bar Div
// 이미지 컴포넌트
// Input 컴포넌트
// 바로가기 영역 Div
// Button 컴포넌트

function Header() {
    return (
        <HeaderDivContainer>
            <DivWrapper>
                {/* 영역 : 로고 */}
                <DivItem width="138px" backgroundColor="">
                    <Link to = "/home"><Img src="img/logo.png" alt="logo" width="85px"></Img></Link>
                </DivItem>

                {/* 영역 : 대주제 메뉴 */}
                <DivItem width="386px" backgroundColor="">
                    <MenuItem>커뮤니티</MenuItem>
                    <MenuItem>쇼핑</MenuItem>
                    <MenuItem>인테리어/생활</MenuItem>
                </DivItem>

                {/* 영역 : 검색창 */}
                <DivItem width="387px" backgroundColor="">
                    {/* 영역 : 검색창 Bar 전체 */}
                    <DivSearch>
                        <Img src="img/search.png" alt="search" margin="0px 19px"></Img>
                        <Input type="text" placeholder="통합검색"></Input>
                    </DivSearch>
                </DivItem>

                {/* 영역 : 바로가기/글쓰기 */}
                <DivItem width="319px" backgroundColor="" justifyContent="space-between">
                    {/* 영역 : 바로가기 */}
                    <DivItemInner>
                        <Img src="img/scrap.png" alt="scrap"></Img>
                        <Img src="img/bell.png" alt="bell"></Img>
                        <Img src="img/cart.png" alt="cart"></Img>
                    </DivItemInner>
                    {/* 영역 : 프로필 */}
                    <Link to = "/mypage"><Img src="img/smile.png" alt="smile"></Img></Link>
                    {/* 영역 : 글쓰기 */}
                    <Button>
                        <span
                            style={{
                                color: "white",
                                marginRight: "10px"
                            }}>글쓰기</span>
                        <Img src="img/dropdown.png" alt="dropdown"></Img>
                    </Button>
                </DivItem>
            </DivWrapper>
        </HeaderDivContainer>
    );
}

export default Header;

// Header 전체 영역 Container
const HeaderDivContainer = styled(DivContainer)`
    /* background-color: red; */
    height : 86px;
    background-color: #FAFAFA;
`;

// Header 영역 구분 Div
const DivItem = styled.div `
    width : ${props => props.width};
    background-color: ${props => props.backgroundColor};

    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || ""};
`;

// 대주제 메뉴 Item
const MenuItem = styled.span `
    font-size: 18px;
    font-weight: bold;
    margin-right: 30px;
    &:hover{
        color : #64C2EB;
    }
`;

// 검색창 Bar Div
const DivSearch = styled.div `
    width : 360px;
    height : 34px;
    border : 1px solid gray;
    border-radius: 3px;

    display: flex;
    align-items: center;

`

// 이미지 컴포넌트
const Img = styled.img `
    margin : ${props => props.margin};
    &:hover{
        opacity: 50%;
    }
`;

// Input 컴포넌트
const Input = styled.input `
    background: none;
    border : none;
    width : 100%;
    height : 80%;
    font-size: 18px;

    &:focus {
        outline: none;
    }
`

// 바로가기 영역 Div
const DivItemInner = styled.div `
    width: 105px;
    height : 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// Button 컴포넌트
const Button = styled.button `
    width : 100px;
    height : 43px;
    font-size :15px;
    font-weight: bold;

    border: none;
    border-radius: 5px;
    background-color: #64C2EB;

    &:hover{
        opacity: 50%;
    }
`