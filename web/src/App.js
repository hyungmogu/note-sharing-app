import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section>
        <form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button type="submit">Login</button>
          <button type="submit">Sign up</button>
        </form>
      </section>
    </div>
  );
}

export default App;
