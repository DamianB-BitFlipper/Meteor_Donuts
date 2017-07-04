import React, { Component } from 'react';

import DonutsMenuContainer from './DonutsMenu.jsx';
import { DonutsCartTotalPriceContainer, DonutsCartContainer } from './DonutsCart.jsx';

import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends Component {

    render() 
    {
        const ready = this.props.sub 
        if(ready)
        {   
            return (
            <div className="container">
                <header>
                    <h2>Donut Menu</h2>
                    <DonutsCartTotalPriceContainer/>
                </header>
                <DonutsMenuContainer/>
                <DonutsCartContainer/>

            </div>
        );
        }
        else{
            return <div className="app-container">
                Loading...
            </div>
        }
    }
}

export default createContainer(() => {
    let subscription = Meteor.subscribe("userData");
    let sub = subscription.ready();
    return { sub: sub };
}, App);