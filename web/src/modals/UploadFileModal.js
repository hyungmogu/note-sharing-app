import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import Modal from './Modal';

class UploadFileModal extends Component {
    modalRef = React.createRef();

    render() {
        return (
            <Modal ref={this.modalRef}>
                <section>
                    <button>Close</button>
                </section>
            </Modal>
        );
    }
};

export default withRouter(UploadFileModal);