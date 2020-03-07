import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
import Modal from './Modal';

class AddUserModal extends Component {
    modalRef = React.createRef();

    handleOpenModal = (e) => {
        this.modalRef.current.handleOpenModal(e);
    }

    handleCloseModal = (e) => {
        this.modalRef.current.handleCloseModal(e);
    }

    render() {
        return (
            <Modal ref={this.modalRef}>
            </Modal>
        );
    }
};

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <AddUserModal
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

