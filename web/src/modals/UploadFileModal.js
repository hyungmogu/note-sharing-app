import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import Modal from './Modal';

class UploadFileModal extends Component {
    modalRef = React.createRef();

    render() {
        return (
            <Modal ref={this.modalRef}>
                <section className="uploadFileModal">
                    <section className="uploadFileModal--dragDropArea">
                    </section>
                    <button className="button button--primary">Close</button>
                </section>
            </Modal>
        );
    }
};

export default withRouter(UploadFileModal);