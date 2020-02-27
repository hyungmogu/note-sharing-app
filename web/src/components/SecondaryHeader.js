import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'

class SecondaryHeader extends Component {

    render() {
        return (
            <header className="secondaryHeader">
                <h3 className="secondaryHeader--h3">
                    Physics
                </h3>
                <ul>
                    <li>
                        <button className="button button--type-addUser">
                            <FontAwesomeIcon icon={faPlus}/>
                            Add User
                        </button>
                    </li>
                    <li>
                        <button className="button button--type-user">
                            <FontAwesomeIcon icon={faUserCircle}/>
                        </button>
                    </li>
                </ul>
            </header>
        );
    }
};

export default SecondaryHeader;