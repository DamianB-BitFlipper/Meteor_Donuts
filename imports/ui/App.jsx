import React, { Component } from 'react';

import DonutsMenuContainer from './DonutsMenu.jsx';
import { DonutsCartTotalPriceContainer, DonutsCartContainer } from './DonutsCart.jsx';

// App component - represents the whole app
export default class App extends Component {

    render() 
    {
        return (
            <div className="container">
                <header>
                    <h1>Donut Menu</h1>
                    <DonutsCartTotalPriceContainer/>
                </header>

                <DonutsMenuContainer/>

                <DonutsCartContainer/>

            </div>
        );
    }
}
