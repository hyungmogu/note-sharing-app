import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';

class NoteImageObject extends Component {

    render() {
        return (
            <NavLink to={`/notes/${this.props.path}`} className="noteImage">
                <img src={this.props.image}/>
                <section>
                    <span>{this.props.name}</span>
                </section>
            </NavLink>
        );
    }
};

export default withRouter(NoteImageObject);