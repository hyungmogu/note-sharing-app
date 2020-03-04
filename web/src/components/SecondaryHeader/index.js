import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCloudUploadAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

import UserMenu from './UserMenu';

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
                        <UserMenu/>
                    </li>
                </ul>
            </header>
        );
    }
};

export default SecondaryHeader;