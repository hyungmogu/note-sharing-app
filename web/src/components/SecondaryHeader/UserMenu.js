import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class UserMenu extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="userMenu">
                    <button className="button button--user">
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </button>
                    <nav>
                        <ul>
                            <li>Logout</li>
                        </ul>
                    </nav>
                </section>
            </React.Fragment>
        );
    }
};

export default UserMenu;