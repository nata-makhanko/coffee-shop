import { Component } from 'react';

import styled from 'styled-components';


export const CardItemWrapper = styled.div`
    padding: 22px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    width: 220px;
    img { 
        display: block;
        margin: 0 auto 14px;
    }
    p {
        font-size: 14px;
        line-height: 20px;
        text-align: right;
        margin: 0 0 10px 0;
    }
    p:last-child {
        margin: 0;
    }
`;

export const CardItemImg = styled.img`
    display: block;
    margin: 0 auto 14px;
`;


export const CardItemPrice = styled.p`
    font-weight: 700;
`;


class CardProduct extends Component {
    render() {
        const cards = this.props.products.map(({ id, img, name, weight, country, price, isBest }) => {
            return (
                <CardItemWrapper key={id}>
                    <img src={img} />
                    <p>{name} {weight}kg</p>
                    <p>{country}</p>
                    <CardItemPrice>{price}$</CardItemPrice>
                </CardItemWrapper>
            )
        });
        return (
            <>
                {cards}
            </>);
    }
}

export default CardProduct;
