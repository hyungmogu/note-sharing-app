import React, { Component } from 'react';

import { matchPath } from 'react-router'
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


class PrimaryHeader extends Component {

    state = {
        addNew: false
    };

    handleAddNewTopic = () => {
        this.setState( prev => {
            return {
                addNew: !prev.addNew
            }
        });
    }

    render() {
        const {location} = this.props;

        if (location.pathname.match(/\/login/) ||
            location.pathname.match(/\/logout/) ||
            location.pathname.match(/\/signup/)
        ) {
            return null;
        }

        let match = matchPath(this.props.history.location.pathname, {
            path: '/notes/:note/:folder/:page/',
            exact: true,
            strict: false
          });


        if ((match) &&
            (match.params) &&
            (match.params.note) &&
            (match.params.folder) &&
            (match.params.page)) {
                return null;
        }

        return (
        <header className="primaryHeader">
            <nav>
                <section>
                    <button onClick={this.handleAddNewTopic} className="button button--add">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </section>
                <section>
                    <ul>
                        <li><NavLink to="/notes/physics">Physics</NavLink></li>
                        <li><NavLink to="/notes/social_studies">Social Studies</NavLink></li>
                        <li><NavLink to="/notes/biology">Biology</NavLink></li>
                        <li><NavLink to="/notes/english">English</NavLink></li>
                        {
                            this.state.addNew ?
                            <li>
                                <form className="form--header">
                                    <input type="text" placeholder="Name"/>
                                    <button className="button button--check" type="submit">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </button>
                                    <button className="button button--cancel">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </button>
                                </form>
                            </li>

                            : ''
                        }
                    </ul>
                </section>
            </nav>
        </header>
        );
    }
};

export default withRouter(PrimaryHeader);