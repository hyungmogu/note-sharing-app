import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { AppConsumer } from '../components/Context';

class Modal extends Component {
    modalRef = React.createRef();

    handleOpenModal = (e) => {
        if (this.modalRef.current.classList.contains('closed')) {
            this.modalRef.current.classList.remove('closed');
        }
    }

    handleCloseModal = (e) => {
        if (!this.modalRef.current.classList.contains('closed')) {
            this.modalRef.current.classList.add('closed');
        }
    }

    render() {
        return (
            <section
                ref={this.modalRef}
                // className="modal closed"
                className="modal"
                onClick={e => this.handleCloseModal(e)}
            >
                <section className="modal--wrapper" onClick={e => e.stopPropagation()}>
                    {this.props.children}
                </section>
            </section>
        );
    }
};

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <Modal
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

