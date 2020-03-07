import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

import { AppConsumer } from '../components/Context';
import Modal from './Modal';

class UploadFileModal extends Component {
    modalRef = React.createRef();
    dragDropAreaRef = React.createRef();

    handleOpenModal = (e) => {
        this.modalRef.current.handleOpenModal(e);
    }

    handleCloseModal = (e) => {
        this.modalRef.current.handleCloseModal(e);
    }

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

    handleDrop = (e) => {
        this.dragDropAreaRef.current.classList.remove('dragged');
        this.modalRef.current.handleCloseModal(e);
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
                        onDrop={this.handleDrop}
                    >
                        <FontAwesomeIcon className="screenIcon" icon={faFileUpload}/>
                        <h4>Drag and drop image files here</h4>
                    </section>
                    <button onClick={e => this.handleCloseModal(e)} className="button button--primary">Close</button>
                </section>
            </Modal>
        );
    }
};

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <UploadFileModal
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

