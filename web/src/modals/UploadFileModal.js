import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

class UploadFileModal extends Component {
    modalRef = React.createRef();

    componentDidUpdate() {
        console.log(this.modalRef);
    }

    render() {
        return (
            <Modal ref={this.modalRef}>
                <section className="uploadFileModal">
                    <section className="uploadFileModal--dragDropArea">
                        <FontAwesomeIcon className="screenIcon" icon={faFileUpload}/>
                        <h4>Drag and drop image files here</h4>
                    </section>
                    <button onClick={e => this.modalRef.current.closeModal(e)} className="button button--primary">Close</button>
                </section>
            </Modal>
        );
    }
};

export default withRouter(UploadFileModal);