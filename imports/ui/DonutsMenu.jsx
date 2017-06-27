import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { dbDonuts, dbDonutsMenu } from '../api/donuts.js';

//Represents a single donut on the menu 
class DonutMenuItem extends Component {

    addItem()
    {
        dbDonuts.insert({ name: this.props.name });
    }

    removeItem()
    {   
        //Removing items must be qualified by ID
        var donut = dbDonuts.findOne({ name: this.props.name });
        if(donut)
            dbDonuts.remove({ _id: donut._id });
    }

    render()
    {
        return (
            <li>
                {this.props.name}
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
                       (donut) => { return <DonutMenuItem key={donut._id} name={donut.name} /> })}
            </ul>
        );
    }
}

//Enables reactivity on database data changes
export default DonutsMenuContainer = createContainer(() => {
  return { donuts_menu: dbDonutsMenu.find({}).fetch() };
}, DonutsMenu);
