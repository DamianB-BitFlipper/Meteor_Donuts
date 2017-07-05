
import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import AppHeader from './layouts/AppHeader.jsx'

import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class Home extends Component {


  showUserNav(){
    return <div>
              <form action="/register" method="get">
              <button className="link">Signup</button>
              </form>
              <form action="/login" method="get">
              <button className="link">Login</button>
              </form>
          </div>;
  }
  showUserNav_login() {

      return <div>
              <h1> Welcome {currentUser.username} </h1>
              <form action="/logout" method="get">
              <button className="link">logout</button>
              </form>
              </div>;
  }
                  

  render() {
    currentUser = Meteor.user();
    console.log(currentUser);

    return(
      <div className="Top">
        <AppHeader appTitle="My Awesome Donut App" userNav={currentUser? this.showUserNav_login():this.showUserNav()}/>
       <main className="container">
       {this.props.content}
       </main>
     </div>);
  }
}


export default createContainer(() => {
    let subscription = Meteor.subscribe("userData");
    let sub = subscription.ready();
    return { sub: sub };
}, Home);

