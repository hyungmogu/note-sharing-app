import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Header = () => (
    <header className="header--navigation-primary">
        <nav className="nav--type-desktop">
            <section>
                <button class="button--type-add">
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </section>
            <ul className="main-nav">
                <li><NavLink to="#">Physics</NavLink></li>
                <li><NavLink to="#">Social Studies</NavLink></li>
                <li><NavLink to="#">Biology</NavLink></li>
                <li><NavLink to="#">English</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;