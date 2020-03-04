import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCloudUploadAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

import { AppConsumer } from '../Context';
import UserMenu from './UserMenu';

class SecondaryHeader extends Component {

    render() {

        if (this.props.isNotFoundScreen) {
            return (
                <header className="secondaryHeader">
                    <ul>
                        <li>
                            <UserMenu/>
                        </li>
                    </ul>
                </header>
            );
        }

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

let SecondaryHeaderWithRoute = withRouter(SecondaryHeader);

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <SecondaryHeaderWithRoute
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

