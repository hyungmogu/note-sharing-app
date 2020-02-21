import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section>
        <form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className="button button--state-primary" type="submit">Login</button>
          <button className="button button--state-secondary" type="submit">Sign up</button>
        </form>
      </section>
    </div>
  );
}

export default App;
