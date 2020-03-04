import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class NotFoundScreen extends Component {

    render() {
        return(
            <section className="screen--notFound">

            </section>
        );
    }
}

export default withRouter(NotFoundScreen);
