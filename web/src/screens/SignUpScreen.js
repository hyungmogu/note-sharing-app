import React from 'react';

function SignUpScreen() {
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
            <button className="button button--type-secondary" type="submit">Sign up</button>
            </form>
        </section>
    );
}

export default SignUpScreen;
