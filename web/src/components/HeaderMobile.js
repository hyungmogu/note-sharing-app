import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class HeaderMobile extends Component {

    render() {
        const {location} = this.props;

        if (location.pathname.match(/\/login/) ||
            location.pathname.match(/\/signup/)
        ) {
            return null;
        }

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

export default withRouter(HeaderMobile);