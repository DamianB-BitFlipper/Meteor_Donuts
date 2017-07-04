import React, { Component } from 'react';
import EmailPasswordForm from '../components/forms/EmailPasswordForm.jsx'

export default class Login extends Component {


	static defaultProps = {
		registerMsg: "Don't have an account?",
		registerLink: <p> "Don't have an account?" <a href="/register">Register</a></p>
  	}

  	loginWithPassword(e) {
    e.preventDefault();
    const email = $('#email').val(),
          password = $('#password').val().trim();

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
      	alert("there was an error: " + error.reason);
        console.log("There was an error:" + error.reason);
      } else {
        FlowRouter.go('/Loginpage');
      }
    });
  }

  render() {
        return (
         <div className="">
        		<div className="">
          		<h1>Login</h1>
            <EmailPasswordForm
              submitBtnLabel="Login"
              submitAction={this.loginWithPassword}
            />
                  {this.props.registerLink}
        </div>
      </div>
        )
    }

}
