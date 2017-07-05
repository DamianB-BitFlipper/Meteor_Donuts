import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { dbDonuts, dbDonutsMenu } from '../api/donuts.js';

//Represents a single donut on the menu 
class DonutMenuItem extends Component {

    addItem()
    {
        var donut = dbDonuts.findOne({ name: this.props.donut_menu_item.name });
        if(donut) 
        {
            //Updating items must be qualified by ID
            dbDonuts.update({ _id: donut._id },
                            { $inc: { quantity: 1 }});
        } else { 
            //The default value for a `Donut` in the cart
            dbDonuts.insert({ name: this.props.donut_menu_item.name, 
                              quantity: 1 });
        }
    }

    removeItem()
    {   
        //Removing items must be qualified by ID
        var donut = dbDonuts.findOne({ name: this.props.donut_menu_item.name });

        //Make sure to only remove donuts that exist
        if(donut)
        {
            //Simply decrement the count unless we should remove the entry
            if(donut.quantity > 1)
                dbDonuts.update({ _id: donut._id }, 
                                { $inc: { quantity: -1 }})
            else //Simply decrement
                dbDonuts.remove({ _id: donut._id });
        }
    }

    render()
    {
        return (
            <li>
                {this.props.donut_menu_item.name} -- {this.props.donut_menu_item.price} Rubles 
                <button onClick={() => this.addItem()}>Add Donut</button>
                <button onClick={() => this.removeItem()}>Remove Donut</button>
            </li>
        );
    }
}

//Represents the menu of donuts
class DonutsMenu extends Component {

    render()
    {
        return (
            <ul>
                {_.map(this.props.donuts_menu, 
                       (donut) => { return <DonutMenuItem key={donut._id} donut_menu_item={donut} /> })}
            </ul>
        );
    }
}

//Enables reactivity on database data changes
export default DonutsMenuContainer = createContainer(() => {
    return { donuts_menu: dbDonutsMenu.find({}).fetch() };
}, DonutsMenu);
