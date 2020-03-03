import React, { Component } from 'react';

import {
    NavLink
  } from 'react-router-dom';


class LoginScreen extends Component {
    handleSubmit = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <section className="screen screen--loginSignup">
                <form
                    className="form--loginSignup"
                    onSubmit={this.handleSubmit}
                >
                    <h3>Note Sharing Application</h3>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button className="button button--primary" type="submit">Login</button>
                    <NavLink to="/signup" className="button button--secondary">Sign up</NavLink>
                </form>
            </section>
        );
    }
}

export default LoginScreen;
