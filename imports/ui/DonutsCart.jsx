import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { dbDonuts, dbDonutsMenu } from '../api/donuts.js';

//Donut component - represents a single item in the `DonutsCart`
class Donut extends Component {

    render() 
    {
        return (
            <li>{this.props.donut.name} x {this.props.donut.quantity}</li>
        );
    }
}

//The selected donuts to be purchased
export class DonutsCart extends Component {

    //TODO: Figure out how this works
    static getTotalPrice() 
    {
        //Given a donut in the cart, return its total cost
        var cost_fn = function(donut) {
            let donut_menu_item = dbDonutsMenu.find({ name: donut.name });
            return donut.quantity * donut_menu_item.price;
        };

        //Fold over all of the donuts in the cart
        var cart_price = _.foldl(dbDonuts.find({}).fetch(), (acc, donut) => acc + cost_fn(donut), 0);
        return cart_price;
    }
    
    render() 
    {
        return (
            <ul>
                {_.map(this.props.donuts, (donut) => { return <Donut key={donut._id} donut={donut} />})}
            </ul>
        );
    }
}

//Enables reactivity on database data changes
export default DonutsCartContainer = createContainer(() => {
    return { donuts: dbDonuts.find({}).fetch() }
}, DonutsCart);
