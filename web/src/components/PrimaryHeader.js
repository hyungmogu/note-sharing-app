import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


class PrimaryHeader extends Component {

    render() {
        const {location} = this.props;

        if (location.pathname.match(/\/login/) ||
            location.pathname.match(/\/signup/)
        ) {
            return null;
        }

        return (
        <header className="primaryHeader">
            <nav className="nav--type-desktop">
                <section>
                    <button className="button button--type-add">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </section>
                <section>
                    <ul>
                        <li><NavLink to="/notes/physics">Physics</NavLink></li>
                        <li><NavLink to="/notes/social_studies">Social Studies</NavLink></li>
                        <li><NavLink to="/notes/biology">Biology</NavLink></li>
                        <li><NavLink to="/notes/english">English</NavLink></li>
                        <li>
                            <form className="form--type-header">
                                <input type="text" placeholder="Name"/>
                                <button className="button button--type-check" type="submit">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </button>
                                <button className="button button--type-cancel">
                                    <FontAwesomeIcon icon={faTrashAlt}/>
                                </button>
                            </form>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
        );
    }
};

export default withRouter(PrimaryHeader);