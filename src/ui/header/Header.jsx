import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import logo from "./logo.png";
import { MdChat } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import HeaderButton from "./HeaderButton";

// redux
import { changeLoginState, setTokken1, setTokken2, setLong, setLati } from "../../reducer/modules/login"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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
    margin-top: 1.1%;
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

const LocationBox = styled.div`
    width : 130px;
    height : 40px;
    background-color: #fff;
    border-radius : 15px;
    border: 1px solid rgba(18, 23, 42, 0.1);
    margin-right: 5%;
    box-shadow: 0px 4px 15px -5px rgba(18, 23, 42, 0.1);
    padding: 0px 0px 0px 10px;
    box-sizing: border-box;
    display: flex;
    justify-items: space-between;
    align-items: center; 
`;

const HiddenLocation = styled.div`
    width: 130px;
    height: 30px;
    background-color: #fff;
    margin-right: 5%;
`;

const Location = styled.span`
    margin-left: 10%;
    color: #000;
    font-weight: bold;
    font-size: 20px;
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
    margin-top: 2%;
    cursor: pointer;
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

function Header( { isLogin, tokken1, tokken2, longitude, latitude, changeLoginState, setTokken1, setTokken2, setLong, setLati } ) {

    const navigate = useNavigate();

    const handleLogOut = () => {
        if(isLogin) {
            changeLoginState(false);
            setTokken1("");
            setTokken2("");
            navigate("/main");
        }else{
            navigate("/login")
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
                {isLogin ? <LocationBox><IoLocationSharp size="30" color="#f8332f"/> <Location>춘천시</Location></LocationBox>: <HiddenLocation />}
                {isLogin ? <Chat onClick={()=>navigate("/chat")}><MdChat size="30" color="#f8332f"/></Chat>: <HiddenChat />}
                {isLogin ? <HeaderButton onClick={()=>{navigate("/mypage");}}>마이페이지</HeaderButton>: <HiddenMyPage />}   
                <HeaderButton onClick={handleLogOut}>{isLogin?"로그아웃":"로그인"}</HeaderButton>
            </RightContainer>
        </Wrapper>
    );
}

// state 변수
const mapStateToProps = (state) => ({
    isLogin: state.login.isLogin,
    tokken1: state.login.tokken1,
    tokken2: state.login.tokken2,
    longitude: state.login.longitude,
    latitude: state.login.latitude
});

// action
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        changeLoginState,
        setTokken1,
        setTokken2,
        setLong,
        setLati
    },
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);