import { Component } from 'react';
import { IconCoffee } from './iconCoffee';

import styled from 'styled-components';

export const MenuWrapper = styled.nav`
            display: flex;
            align-items: end;
            position: absolute;
            margin: 50px 0 100px 150px;
                ul {
                    display: flex;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 17px;
                    padding: 0;
                    box-sizing: border-box;
                    margin: 0;
                    color: #fff;
                }
                li {
                    margin: 0 40px 0 0;
                    list-style-type: none;
                }
                li:last-child { 
                    margin: 0;
                }
        `;

class Menu extends Component {

    render() {

        const { menu } = this.props;
        const listItems = menu.map(({ id, item, child }) => {
            if (!child) {
                return (
                    <li key={id}>{item}</li>
                )
            }
        });
        return (
            <MenuWrapper>
                <IconCoffee />
                <ul>
                    {listItems}
                </ul>
            </MenuWrapper>
        );
    }
}

export default Menu;
