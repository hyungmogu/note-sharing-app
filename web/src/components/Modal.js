import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Modal extends Component {

    render() {
        return (
            <section className="modal">
                {this.props.children}
            </section>
        );
    }
};

export default withRouter(Modal);