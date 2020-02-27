import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

class NoteFolderObject extends Component {

    render() {
        return (
            <div className="noteFolder">
                <section class="icon">
                    <FontAwesomeIcon icon={faFolderOpen}/>
                </section>
                <section>
                    <span>{this.props.name}</span>
                </section>
            </div>
        );
    }
};

export default NoteFolderObject;