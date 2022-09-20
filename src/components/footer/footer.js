import { Component } from "react";
import Menu from "../menu/menu";

import IconCoffeeWithLine from "../titleWithIcon/iconCoffeeWithLine";
import styled from "styled-components";
import { MenuWrapper } from "../menu/menu";

const FooterWrapper = styled.footer`
    padding: 30px 0;
    box-sizing: border-box;
`;
class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                {IconCoffeeWithLine}
            </FooterWrapper>
        )
    }
}

export default Footer;
