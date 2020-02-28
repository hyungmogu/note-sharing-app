import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';

class NoteImageObject extends Component {

    render() {
        return (
            <NavLink className="noteImage">
                <img src={this.props.url}/>
                <section>
                    <span>{this.props.name}</span>
                </section>
            </NavLink>
        );
    }
};

export default withRouter(NoteImageObject);