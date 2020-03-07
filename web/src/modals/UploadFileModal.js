import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

class UploadFileModal extends Component {
    modalRef = React.createRef();
    dragDropAreaRef = React.createRef();

    handleOnDragOver = (e) => {
        e.preventDefault();
        if (this.dragDropAreaRef.current.classList.contains('dragged')) {
            return null;
        }

        this.dragDropAreaRef.current.classList.add('dragged');
    }

    handleOnDragLeave = (e) => {
        e.preventDefault();
        if (!this.dragDropAreaRef.current.classList.contains('dragged')) {
            return null;
        }

        this.dragDropAreaRef.current.classList.remove('dragged');
    }

    render() {
        return (
            <Modal ref={this.modalRef}>
                <section className="uploadFileModal">
                    <section
                        ref={this.dragDropAreaRef}
                        className="uploadFileModal--dragDropArea"
                        onDragOver={this.handleOnDragOver}
                        onDragLeave={this.handleOnDragLeave}
                    >
                        <FontAwesomeIcon className="screenIcon" icon={faFileUpload}/>
                        <h4>Drag and drop image files here</h4>
                    </section>
                    <button onClick={e => this.modalRef.current.handleCloseModal(e)} className="button button--primary">Close</button>
                </section>
            </Modal>
        );
    }
};

export default withRouter(UploadFileModal);