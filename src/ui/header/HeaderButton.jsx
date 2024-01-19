import styled from "styled-components";


const StyledButton = styled.button`
        font-family: 'SUITE';
        width : 100px;
        height : 30px;
        font-size: medium;
        border: none;
        text-align: center;
        cursor: pointer;
        background-color: #fff;
        color: #777;
        margin-top: 3%;
        &:hover {
            color: #000;
        }
    `;

function HeaderButton(props){

    return(
        <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    );
}

export default HeaderButton;