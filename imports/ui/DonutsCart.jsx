import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { dbDonuts, dbDonutsMenu } from '../api/donuts.js';

import PropTypes from 'prop-types';


//Donut component - represents a single item in the `DonutsCart`
class Donut extends Component {

    render() 
    {
        return (
            <li>{this.props.donut.name} x {this.props.donut.quantity}</li>
        );
    }
}


class DonutsCartTotalPrice extends Component {

    getTotalPrice() 
    {
        //Given a donut in the cart, return its total cost
        var cost_fn = function(donut) {
            let donut_menu_item = dbDonutsMenu.findOne({ name: donut.name });
            return donut.quantity * donut_menu_item.price;
        };

        //Fold over all of the donuts in the cart
        //var cart_price = _.foldl(dbDonuts.find({}).fetch(), (acc, donut) => acc + cost_fn(donut), 0);
        var cart_price = _.foldl(this.props.donuts, (acc, donut) => {return acc + cost_fn(donut)}, 0);
        return cart_price;
    }

    render()
    {
       return (
           <h2>Total Price: {this.getTotalPrice()}</h2>
       );
    }
    
}

//Enables reactivity on database data changes
export const DonutsCartTotalPriceContainer = createContainer(() => {
    return { donuts: dbDonuts.find({}).fetch() }
}, DonutsCartTotalPrice);


//The selected donuts to be purchased
class DonutsCart extends Component {
    
    render() 
    {
        return (
            <ul>
                {_.map(this.props.donuts, (donut) => { return <Donut key={donut._id} donut={donut} />})}
            </ul>
        );
    }
}

DonutsCart.propTypes = {
    donuts: PropTypes.array.isRequired 
};

//Enables reactivity on database data changes
export const DonutsCartContainer = createContainer(() => {
    return { donuts: dbDonuts.find({}).fetch() }
}, DonutsCart);
