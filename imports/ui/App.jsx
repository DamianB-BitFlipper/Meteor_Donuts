import React, { Component } from 'react';

import DonutsMenuContainer from './DonutsMenu.jsx';
import DonutsCartContainer from './DonutsCart.jsx';

// App component - represents the whole app
export default class App extends Component {

    render() 
    {
        return (
            <div className="container">
                <header>
                    <h1>Donut Menu</h1>
                </header>

                <DonutsMenuContainer/>

                <DonutsCartContainer/>

            </div>
        );
    }
}
