import React, { Component } from 'react';
import './app.css';
import Menu from '../menu/menu';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                { id: 1, item: 'Coffee house', child: false },
                { id: 2, item: 'Our coffee', child: false },
                { id: 3, item: 'For your pleasure', child: false }
            ]
        }
    }

    render() {
        const { menu } = this.state;
        return (
            <div className="App">
                <Menu menu={menu} />
            </div>
        );
    }
}


export default App;