

import styled from "styled-components";
import IconCoffeeWithLine from "./iconCoffeeWithLine";

export const TitleWrapper = styled.div`
    margin: 0 auto 40px;
        h2 {
            font-size: 24px;
            line-height: 35px;
            margin: 0 0 20px;
            text-align: center;
        }
        svg {
            display: block;
            margin: 0 auto; 
        }
`;

const TitleWithIcon = ({ text }) => {
    return (
        <TitleWrapper>
            <h2>{text}</h2>
            {IconCoffeeWithLine}
        </TitleWrapper>
    );
}

export default TitleWithIcon;
