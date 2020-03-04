import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';


class LogOutScreen extends Component {

    render() {
        return (
            <section className="screen screen--logout">
            </section>
        );
    }
}

export default withRouter(LogOutScreen);
