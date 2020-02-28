import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

class NoteFolderObject extends Component {

    render() {
        return (
            <Link to={{
                path: `/notes/${this.props.slug}`,
                state: {
                    pk: this.props.pk,
                    name: this.props.name,
                    isFolder: true
                }
            }} className="noteFolder">
                <section class="icon">
                    <FontAwesomeIcon icon={faFolderOpen}/>
                </section>
                <section>
                    <span>{this.props.name}</span>
                </section>
            </Link>
        );
    }
};

export default withRouter(NoteFolderObject);