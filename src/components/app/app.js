import React, { Component } from 'react';
import Menu from '../menu/menu';
import MainHeader from '../mainHeader/mainHeader';
import SectionDescriptionWithoutImg from '../sectionDescriptionWithoutImg/sectionDescriptionWithoutImg';
import CardProduct from '../cardProduct/cardProduct';

import './app.css';
import CoffeeSolimo from '../../img/coffee_solimo.png';
import CoffeeAromistico from '../../img/coffee_aromistico.png';
import CoffeePesto from '../../img/coffee_pesto.png';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                { id: 1, item: 'Coffee house', child: false },
                { id: 2, item: 'Our coffee', child: false },
                { id: 3, item: 'For your pleasure', child: false }
            ],
            products: [
                { id: 12, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 2, country: 'Brasil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: true },
                { id: 13, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 2, country: 'Brasil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 14, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 2, country: 'Brasil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 15, img: CoffeeAromistico, name: 'AROMISTICO Coffee', weight: 2, country: 'Columbia', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: true },
                { id: 16, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 1, country: 'Kenya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 17, img: CoffeePesto, name: 'Presto Coffee Beans', weight: 1, country: 'Brasil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 18, img: CoffeePesto, name: 'Presto Coffee Beans', weight: 3, country: 'Kenya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 19, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 4, country: 'Brasil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 20, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 7, country: 'Kenya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 21, img: CoffeeAromistico, name: 'AROMISTICO Coffee', weight: 4, country: 'Columbia', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 22, img: CoffeeAromistico, name: 'AROMISTICO Coffee', weight: 23, country: 'Columbia', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 23, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 5, country: 'Kenya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 24, img: CoffeeAromistico, name: 'AROMISTICO Coffee', weight: 3, country: 'Columbia', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 25, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 2, country: 'Brasil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 26, img: CoffeeSolimo, name: 'Solimo Coffee Beans', weight: 2, country: 'Brasil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: false },
                { id: 27, img: CoffeePesto, name: 'Presto Coffee Beans', weight: 12, country: 'Kenya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 6.99, isBest: true },
            ]
        }
    }

    render() {
        const { menu, products } = this.state;
        return (
            <div className="App">
                <Menu menu={menu} />
                <MainHeader />
                <SectionDescriptionWithoutImg />
                <CardProduct products={products} />
            </div>
        );
    }
}


export default App;