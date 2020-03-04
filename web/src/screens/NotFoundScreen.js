import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

class NotFoundScreen extends Component {

    render() {
        return(
            <section className="screen--notFound">
                <FontAwesomeIcon icon={faBolt}/>
                <h3>Page is Not Found</h3>
            </section>
        );
    }
}

export default withRouter(NotFoundScreen);
