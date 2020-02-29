import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserCircle, faCloudUploadAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

class SecondaryHeader extends Component {

    render() {
        return (
            <header className="secondaryHeader">
                <h3>
                    Physics
                </h3>
                <ul>
                    <li>
                        <button className="button button--type-uploadFile">
                            <FontAwesomeIcon icon={faCloudDownloadAlt}/>
                            Download File
                        </button>
                    </li>
                    <li>
                        <button className="button button--type-uploadFile">
                            <FontAwesomeIcon icon={faCloudUploadAlt}/>
                            Upload File
                        </button>
                    </li>
                    <li>
                        <button className="button button--type-addUser">
                            <FontAwesomeIcon icon={faUserPlus}/>
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