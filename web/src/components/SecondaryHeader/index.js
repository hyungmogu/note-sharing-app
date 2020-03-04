import React, { Component } from 'react';

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
                        <button className="button button--uploadFile">
                            <FontAwesomeIcon icon={faCloudDownloadAlt}/>
                            Download File
                        </button>
                    </li>
                    <li>
                        <button className="button button--uploadFile">
                            <FontAwesomeIcon icon={faCloudUploadAlt}/>
                            Upload File
                        </button>
                    </li>
                    <li>
                        <button className="button button--addUser">
                            <FontAwesomeIcon icon={faUserPlus}/>
                            Add User
                        </button>
                    </li>
                    <li>
                        <button className="button button--user">
                            <FontAwesomeIcon icon={faUserCircle}/>
                        </button>
                        <nav>
                            <ul>
                                <li>Logout</li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            </header>
        );
    }
};

export default SecondaryHeader;