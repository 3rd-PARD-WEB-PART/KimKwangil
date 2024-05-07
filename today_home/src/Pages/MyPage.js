import styled from "styled-components";
import {DivContainer, DivWrapper} from "../Components/NormalComponents";
import {useState} from "react";

function MyPage() {
    const initUserInfoData = {
        name: "팡일킴",
        follower: "122",
        follow: "50",
        scrap: "2",
        heart: "4",
        coupon: "5"
    }
    const [userInfo, setUserInfo] = useState(initUserInfoData);
    
    return (
        <div>
            <MenuDivContainer backgroundColor="">
                <DivWrapper>
                    <MenuDiv width="380px" fontSize="18px">
                        <MenuItem color="#64C2EB">프로필</MenuItem>
                        <MenuItem>나의 쇼핑</MenuItem>
                        <MenuItem>나의 리뷰</MenuItem>
                        <MenuItem>설정</MenuItem>
                    </MenuDiv>
                </DivWrapper>
            </MenuDivContainer>
            <MenuDivContainer backgroundColor="">
                <DivWrapper>
                    <MenuDiv width="550px" fontSize="15px">
                        <MenuItem color="#64C2EB">모두보기</MenuItem>
                        <MenuItem>사진</MenuItem>
                        <MenuItem>집들이</MenuItem>
                        <MenuItem>노하우</MenuItem>
                        <MenuItem>질문과답변</MenuItem>
                        <MenuItem>스크랩북</MenuItem>
                        <MenuItem>좋아요</MenuItem>
                    </MenuDiv>
                </DivWrapper>
            </MenuDivContainer>
            <BodyDivContainer>
                <DivWrapper>
                    <DivWrapperInner width="406px" backgroundColor="">
                        <DivProfile>
                            <DivProfileInner height="187px" alignItems="center">
                                <Img src="img/smile2.png" alt="smile"></Img>
                            </DivProfileInner>
                            <DivProfileInner height="44px">
                                <P fontSize="26px" fontWeight="bold">{userInfo.name}님</P>
                            </DivProfileInner>
                            <DivProfileInner height="30px">
                                <P fontSize="13px" margin="0px 20px 0px 0px" >팔로워
                                    <strong style={{marginLeft : "5px"}}>{userInfo.follower}</strong>
                                </P>
                                <P fontSize="13px">팔로잉
                                    <strong  style={{marginLeft : "5px"}}>{userInfo.follow}</strong>
                                </P>
                            </DivProfileInner>
                            <DivProfileInner height="66px">
                                <Button>설정</Button>
                            </DivProfileInner>
                            <DivProfileInner
                                height="135px"
                                justifyContent="space-around"
                                alignItems="center">
                                <DivProfileInnerItem>
                                    <Img src="img/scrap2.png" alt="scrap"></Img>
                                    <P margin="5px 0px 0px 0px">스크랩북</P>
                                    <P margin="5px 0px 0px 0px">{userInfo.scrap}</P>
                                </DivProfileInnerItem>
                                <DivProfileInnerItem>
                                    <Img src="img/heart.png" alt="heart"></Img>
                                    <P margin="5px 0px 0px 0px">좋아요</P>
                                    <P margin="5px 0px 0px 0px">{userInfo.heart}</P>
                                </DivProfileInnerItem>
                                <DivProfileInnerItem>
                                    <Img src="img/coupon.png" alt="coupon"></Img>
                                    <P margin="5px 0px 0px 0px">내 쿠폰</P>
                                    <P margin="5px 0px 0px 0px">{userInfo.coupon}</P>
                                </DivProfileInnerItem>

                            </DivProfileInner>
                        </DivProfile>
                    </DivWrapperInner>
                    <DivWrapperInner width="824px" backgroundColor="">
                        <DivContent>
                            <DivContentInner>
                                <P fontSize="18px" fontWeight="bold">사진
                                    <span
                                        style={{
                                            color: "#64C2EB",
                                            marginLeft : "10px"
                                        }}>0</span>
                                </P>

                                <DivContentInnerImage></DivContentInnerImage>
                            </DivContentInner>
                        </DivContent>
                        <DivContent>
                            <DivContentInner>
                                <P fontSize="18px" fontWeight="bold">집들이
                                    <span
                                        style={{
                                            color: "#64C2EB",
                                            marginLeft : "10px"
                                        }}>0</span>
                                </P>

                                <DivContentInnerImage></DivContentInnerImage>
                            </DivContentInner>
                        </DivContent>
                    </DivWrapperInner>
                </DivWrapper>
            </BodyDivContainer>
        </div>
    );
}

const MenuDivContainer = styled(DivContainer)`
    height : 65px;
    /* background-color: ${props => props.backgroundColor}; */
    background-color: #FAFAFA;
    
`;

const BodyDivContainer = styled(DivContainer)`
    height : calc(100vh - 215px);
    /* background-color: orange; */
     background-color: #FAFAFA;
`;

const MenuDiv = styled.div `
    width : ${props => props.width || "auto"};
    height : 100%;

    background-color: #FAFAFA;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-size: ${props => props.fontSize || "15px"};
`

const MenuItem = styled.span `
    font-size: inherit;
    font-weight: bold;
    
    color : ${props => props.color || "black"};

`

const DivWrapperInner = styled(DivWrapper)`
    width: ${props => props.width};
    height : 100%;
    /* background-color: ${props => props.backgroundColor}; */
    background-color: #FAFAFA;

    display: flex;
    flex-direction: column;
    justify-content: start;

`

const DivProfile = styled.div `
    width : 285px;
    height : 482px;
    border : 1px solid #EDEDEF;
    border-radius: 3px;

    margin-top : 50px;
`;

const DivProfileInner = styled.div `
    width : 100%;
    height: ${props => props.height};

    display: flex;
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "start"};;
`

const P = styled.p `
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    margin : ${props => props.margin};
`;

const Button = styled.button `
    width : 60px;
    height: 35px;
    border : 1px solid black;
    border-radius: 3px;

    font-size: 13px;

    background : none;

    &:hover{
        background-color: #EDEDEF;
        opacity: 80%;
    }
`
const DivProfileInnerItem = styled.div `
    width: 60px;
    height: 80px;
    /* background-color: yellow; */

    text-align: center;
`

const Img = styled.img `
    &:hover{
        opacity: 50%;
    }
`;

const DivContent = styled.div `
    width: 100%;
    height : 295px;

    padding : 10px 37px ;
    box-sizing: border-box;
    /* background-color: yellow; */
    
    /* border: 1px solid black; */

    display: flex;
    align-items: end;

`

const DivContentInner = styled.div `
    width: 100%;
    height : 80%;

    /* background-color: orange; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DivContentInnerImage = styled.div `

    width: 100%;
    height : 80%;

    border: 2px dotted black;
`
export default MyPage;