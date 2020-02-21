import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section
        className="section--page-loginSignup"
      >
          <form className="form--type-loginSignup">
            <h3>Note Sharing Application</h3>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button className="button button--type-primary" type="submit">Login</button>
            <button className="button button--type-secondary" type="submit">Sign up</button>
          </form>
      </section>
    </div>
  );
}

export default App;
