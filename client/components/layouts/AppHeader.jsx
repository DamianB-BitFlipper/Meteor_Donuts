import React, { Component } from 'react';

// App component - represents the whole app
export default class AppHeader extends Component {

  static defaultProps = {
    appTitle: "",
    userNav: null, 
  }
  
  render() {
    return (
        <div id="header">
            <h1>{this.props.appTitle}</h1>
            {this.props.userNav}
        </div>
    )
  }
}