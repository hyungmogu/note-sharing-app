import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Modal extends Component {

    closeModal = (e) => {
    }

    render() {
        return (
            <section className="modal" onClick={e => this.closeModal(e)}>
                <section className="modal--wrapper" onClick={e => e.stopPropagation()}>
                    {this.props.children}
                </section>
            </section>
        );
    }
};

export default withRouter(Modal);