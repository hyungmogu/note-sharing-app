import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Modal extends Component {
    modalRef = React.createRef();

    closeModal = (e) => {
        if (!this.modalRef.current.classList.contains('open')) {
            this.modalRef.current.classList.add('closed');
        }
    }

    render() {
        return (
            <section
                ref={this.modalRef}
                className="modal"
                onClick={e => this.closeModal(e)}
            >
                <section className="modal--wrapper" onClick={e => e.stopPropagation()}>
                    {this.props.children}
                </section>
            </section>
        );
    }
};

export default withRouter(Modal);