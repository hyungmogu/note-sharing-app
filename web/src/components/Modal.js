import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Modal extends Component {

    render() {
        return (
            <section className="modal">
                <section className="modal--wrapper">
                    {this.props.children}
                </section>
            </section>
        );
    }
};

export default withRouter(Modal);