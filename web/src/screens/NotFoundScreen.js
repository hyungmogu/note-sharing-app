import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class NotFoundScreen extends Component {

    render() {
        return(
            <div className="screen--notFound">

            </div>
        );
    }
}

export default withRouter(NotFoundScreen);
