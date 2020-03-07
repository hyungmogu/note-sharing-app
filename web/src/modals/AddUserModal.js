import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class AddUserModal extends Component {
    modalRef = React.createRef();

    state = {
        users: [
            {
                pk: 1,
                name: 'John Doe',
                email: 'johnDoe@gmail.com'
            }
        ]
    }

    handleOpenModal = (e) => {
        this.modalRef.current.handleOpenModal(e);
    }

    handleCloseModal = (e) => {
        this.modalRef.current.handleCloseModal(e);
    }

    render() {
        return (
            <Modal ref={this.modalRef}>
                <section className="addUserModal">
                    <h3 className="addUserModal--title">Add User</h3>
                    <section className="addUserModal--wrapper-userList">
                        { this.state.users.map((item, index) =>
                            <section
                                className="addUserModal--item"
                                key={item.pk}
                            >
                                <span className="addUserModal--name"><strong>{index+1}.</strong> {item.name}</span>
                                <FontAwesomeIcon icon={faTimes}/>
                            </section>
                        )}
                    </section>
                    <section className="addUserModal--wrapper-input">
                        <input className="addUserModal--input" type="email" placeholder="Email"/>
                        <button className="button button--primary">Add</button>
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
            <AddUserModal
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

