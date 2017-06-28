import React, { Component } from 'react';

import DonutsMenuContainer from './DonutsMenu.jsx';
import DonutsCartContainer, { DonutsCart } from './DonutsCart.jsx';

// App component - represents the whole app
export default class App extends Component {

    render() 
    {
        return (
            <div className="container">
                <header>
                    <h1>Donut Menu</h1>
                    <h2>Total Price: {DonutsCart.getTotalPrice()}</h2>
                </header>

                <DonutsMenuContainer/>

                <DonutsCartContainer/>

            </div>
        );
    }
}
