import { Component } from "react";
import Menu from "../menu/menu";

import IconCoffeeWithLine from "../titleWithIcon/iconCoffeeWithLine";
import styled from "styled-components";
// import { MenuWrapper } from "../menu/menu";

const FooterWrapper = styled.footer`
    padding: 30px 0;
    box-sizing: border-box;
    nav {
        position: inherit;
        display: flex;
        margin: 0 0 35px;
        justify-content: center;

    }
    nav ul{ 
        color: black;
    }
    svg {
        display: block;
        margin: 0 auto;
    }
    nav svg {
        margin: 0 4px 0 0;
        fill: black;
    }
`;
class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <Menu menu={this.props.menu} />
                {IconCoffeeWithLine}
            </FooterWrapper>
        )
    }
}

export default Footer;
