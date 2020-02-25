import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class HeaderMobile extends Component {

    render() {
        return (
        <header className="header--navigation-mobile">
            <button className="button button--type-menu">
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <section>
                <strong>Note Sharing Application</strong>
            </section>
        </header>
        );
    }
};

export default HeaderMobile;