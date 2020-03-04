import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import SecondaryHeader from '../components/SecondaryHeader';


class NotFoundScreen extends Component {

    render() {
        return(
            <section className="screen screen--notFound">
                <SecondaryHeader/>
                <FontAwesomeIcon className="screenIcon" icon={faBolt}/>
                <h2 className="title">Page is Not Found</h2>
            </section>
        );
    }
}

export default withRouter(NotFoundScreen);
