import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

class NoteFolderObject extends Component {

    render() {
        return (
            <NavLink to="#" className="noteFolder">
                <section class="icon">
                    <FontAwesomeIcon icon={faFolderOpen}/>
                </section>
                <section>
                    <span>{this.props.name}</span>
                </section>
            </NavLink>
        );
    }
};

export default withRouter(NoteFolderObject);