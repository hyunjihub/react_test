import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import logo from "./logo.png";
import { useInView } from "react-intersection-observer"
import { MdChat } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import HeaderButton from "./HeaderButton";


const Wrapper = styled.div`
    width : 100vw;
    height : 70px;
    min-width: 1024px;
    border-bottom: 1px solid #efefef;
    position: sticky;
    top: 0;
    z-index: 9999;
    background-color: #fff;
`;

const RightContainer = styled.div`
    width: 23%;
    height: 50%;
    float: right;
    background-color: #fff;
    margin-right: 4%;
    margin-top: 0.7%;
    display: flex;
`;

const Logo = styled.div`
    width : 200px;
    height : 43px;
    float : left;
    margin-top : 10px;
    margin-left : 3vw;
    margin-right : 30px;
    cursor: pointer;
`;

const Location = styled.div`
    width : 130px;
    height : 45px;
    background-color: #fff;
    border-radius : 15px;
    font-weight : bold;
    border: 1px solid rgba(18, 23, 42, 0.1);
    font-size : 20px;
    margin-right: 5%;
    box-shadow: 0px 4px 15px -5px rgba(18, 23, 42, 0.1);
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
    display: flex;
    justify-items: center;
    align-items: center; 
`;

const HiddenLocation = styled.div`
    width: 130px;
    height: 30px;
    background-color: #fff;
    margin-right: 5%;
`;

const PostListMenu = styled.div`
    width: 120px;
    height: 30px; 
    font-size: 20px;
    text-align: center;
    float: left;
    margin-left: 20px;
    margin-top: 26px;
    border-radius: 15px;
    background-color: #fff;
    color: #333;
    font-weight: bold;
    line-height: 30px;
    cursor: pointer;
    &:hover{
        color: #f8332f;
    }
    letter-spacing: 5px;
`;

const Chat = styled.button`
    border: none;
    background-color: #fff;
    width: 10%;
    height: 10%;
    margin-top: 3%;
`;

const HiddenChat = styled.div`
    width: 10%;
    height: 10%;
    background-color: #fff;
`;

const HiddenMyPage = styled.div`
    width: 100px;
    height: 30px;
    background-color: #fff;
`;

function Header(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = () => {
        if(isLoggedIn) {
            setLoggedIn(false);
            navigate("/main");
        }
        else {
            setLoggedIn(true);
            navigate("/logIn");
        }
    };
    
    return (
        <Wrapper>
            <Logo onClick={()=>{navigate("/main");}}>
                <img src={logo} alt="로고" style={{width:"100%"}}></img>
            </Logo>
            <PostListMenu onClick={()=>navigate("/postlist/helping")}>원정대</PostListMenu>
            <PostListMenu onClick={()=>navigate("/postlist/helped")}>의뢰인</PostListMenu>
            
            <RightContainer>
                {isLoggedIn ? <Location><IoLocationSharp size="30" color="#f8332f"/> 춘천시</Location>: <HiddenLocation />}
                {isLoggedIn ? <Chat onClick={()=>navigate("/chat")}><MdChat size="30" color="#f8332f"/></Chat>: <HiddenChat />}
                {isLoggedIn ? <HeaderButton onClick={()=>{navigate("/mypage");}}>마이페이지</HeaderButton>: <HiddenMyPage />}   
                <HeaderButton onClick={handleLogOut}>{isLoggedIn?"로그아웃":"로그인"}</HeaderButton>
            </RightContainer>
        </Wrapper>
    );
}

export default Header;