import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class PrimaryHeader extends Component {

    render() {
        const {location} = this.props;

        if (location.pathname.match(/\/login/) ||
            location.pathname.match(/\/signup/)
        ) {
            return null;
        }

        return (
        <header className="header--navigation-primary">
            <nav className="nav--type-desktop">
                <section>
                    <button className="button button--type-add">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </section>
                <section>
                    <ul>
                        <li><NavLink to="#">Physics</NavLink></li>
                        <li><NavLink to="#">Social Studies</NavLink></li>
                        <li><NavLink to="#">Biology</NavLink></li>
                        <li><NavLink to="#">English</NavLink></li>
                    </ul>
                </section>
            </nav>
        </header>
        );
    }
};

export default withRouter(PrimaryHeader);