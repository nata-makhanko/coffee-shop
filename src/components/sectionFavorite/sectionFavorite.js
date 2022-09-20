import { Component } from 'react';

import CardProduct from '../cardProduct/cardProduct';

import styled from 'styled-components';
import BgFavorite from '../../img/bg_favorite.png';
import { HeaderAddiotional } from '../headerAddiotional/headerAddiotional';

const SectionFavoriteWrapper = styled.section`
    padding: 80px 320px 110px;
    box-sizing: brorder-box;
    background: url(${BgFavorite}) no-repeat;
`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
class SectionFavorite extends Component {
    render() {
        const favoriteCoffee = this.props.products.filter((item) => item.isBest).map(item => {
            if (item.country) {
                delete item.country;
                return item;
            }
        });
        return (
            <SectionFavoriteWrapper>
                <HeaderAddiotional>Our best</HeaderAddiotional>
                <CardsWrapper>
                    <CardProduct products={favoriteCoffee} />
                </CardsWrapper>
            </SectionFavoriteWrapper>
        );
    }
};

export default SectionFavorite;