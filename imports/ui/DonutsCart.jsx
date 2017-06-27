import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { dbDonuts } from '../api/donuts.js';

//Donut component - represents a single item in the `DonutsCart`
class Donut extends Component {

  render() {
    return (
      <li>{this.props.donut.name}</li>
    );
  }
}

//The selected donuts to be purchased
class DonutsCart extends Component {
    
    render() {
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
