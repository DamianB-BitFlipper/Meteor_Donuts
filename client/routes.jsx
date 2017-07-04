import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'

import Home from './components/Home.jsx'
import App from '../imports/ui/App.jsx'
import Login from './views/Login.jsx'
import Register from './views/Register.jsx'
import Homepage from './views/Homepage.jsx'
import { Accounts } from 'meteor/std:accounts-ui';



FlowRouter.route('/', {
  name: 'home',
  action: function() {
    ReactLayout.render(Home, {
      content: <Homepage />
    });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    ReactLayout.render(Home, {
      content: <Login />
    });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action: function() {
    ReactLayout.render(Home, {
      content: <Register />
    });
  }
});

FlowRouter.route('/Loginpage', {
  name: 'Loginpage',
  action: function() {
    ReactLayout.render(Home, {
      content: <App />
    });
  }
});



FlowRouter.notFound = {
  action: function() {
   FlowRouter.go('home');
  }
};