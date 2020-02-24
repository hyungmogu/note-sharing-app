import React from 'react';

import {
  NavLink
} from 'react-router-dom';


const Header = () => (
  <header class="header--navigation-primary">
    <section>
        <button class="button--type-add">+</button>
    </section>
    <ul className="main-nav">
      <li><NavLink to="#">Physics</NavLink></li>
      <li><NavLink to="#">Social Studies</NavLink></li>
      <li><NavLink to="#">Biology</NavLink></li>
      <li><NavLink to="#">English</NavLink></li>
    </ul>
  </header>
);

export default Header;