import { Component } from "react";
import IconCoffeeWithLineWhite from "./IconCoffeeWithLineWhite";


import styled from "styled-components";
import BgMain from '../../img/bg_main.png';

const TitleWrapper = styled.div`
margin: 0 auto 35px;
    h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 58px;
        margin: 0 0 15px;
        text-align: center;
        color: #FFFFFF;
    }
    svg {
        display: block;
        margin: 0 auto; 
    }

`;

const HeaderWrapper = styled.header`
        padding: 180px 385px;
        box-sizing: border-box;
        background: url(${BgMain}) no-repeat;
        color: #FFFFFF;
            p {
                font-weight: 700;
                font-size: 24px;
                line-height: 35px;
                margin: 0 0 20px;
                text-align: center;
                
            }
    `;
const Button = styled.button`
        padding: 5px 42px;
        box-sizing: border-box;
        background-color: transparent; 
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        display: block;
        margin: 0 auto;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 3px;

    `;

const TitleWithIconWhite = ({ text }) => {

    return (
        <TitleWrapper>
            <h1>{text}</h1>
            {IconCoffeeWithLineWhite}
        </TitleWrapper>
    );
}

const MainHeader = () => {

    return (
        <HeaderWrapper>
            <TitleWithIconWhite text='Everything You Love About Coffee' />
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
            <Button>More</Button>
        </HeaderWrapper>
    );
}

export default MainHeader;