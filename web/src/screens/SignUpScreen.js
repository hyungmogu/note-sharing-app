import React, { Component } from 'react';

import {
    NavLink
  } from 'react-router-dom';


class SignUpScreen extends Component {
    render() {
        return (
            <section
            className="section--page-loginSignup"
            >
                <form className="form--type-loginSignup">
                <h3>Note Sharing Application</h3>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Password Confirm"/>
                <button className="button button--type-primary" type="submit">Login</button>
                <NavLink exact to="/" className="button button--type-secondary">Back</NavLink>
                </form>
            </section>
        );
    }
}

export default SignUpScreen;
