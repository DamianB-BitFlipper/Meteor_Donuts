import React, { Component } from 'react';
import EmailPasswordForm_Signup from '../components/forms/EmailPasswordForm_Signup.jsx'

export default class Register extends Component {

	static defaultProps = {
		loginMsg: "Already have an account?",
		loginLink: <p> "Already have an account?" <a href="/login">Sign In</a></p>
  	}

    createUser(e) {
    e.preventDefault();
    const
      email = $('#email').val(),
      password = $('#password').val().trim();
      name = $('#usr').val()

    Accounts.createUser(
      { 
        email: email,
        password: password, 
        username: name
      },
      function(error) {
        if (error) {
        	alert("there was an error: " + error.reason); 
          console.log("there was an error: " + error.reason);
        } else { 
          FlowRouter.go('Loginpage');
        };
      }
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1>Register</h1>
            <EmailPasswordForm_Signup
              submitBtnLabel="Register"
              submitAction={this.createUser}/>
           {this.props.loginLink}
        </div>
      </div>
    )
  }
}