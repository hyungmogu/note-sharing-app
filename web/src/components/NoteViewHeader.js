import React, { Component } from 'react';

import { matchPath } from 'react-router'
import { withRouter } from 'react-router-dom';
import NoteImageObject from '../components/NoteImageObject';

class NoteViewHeader extends Component {

    render() {
        const {location} = this.props;

        if (location.pathname.match(/\/login/) ||
            location.pathname.match(/\/signup/)
        ) {
            return null;
        }

        let match = matchPath(this.props.history.location.pathname, {
            path: '/notes/:note/:folder/:page/',
            exact: true,
            strict: false
        });


        if (!(match) ||
            !(match.params) ||
            !(match.params.note) ||
            !(match.params.folder) ||
            !(match.params.page)) {
                return null;
        }

        let note = match.params.note;
        let folder = match.params.folder;

        return (
        <header class="noteViewHeader">
            {this.state.items.map( props =>
                <NoteImageObject key={props.pk} note={note} folder={folder} {...props}/>
            )}
        </header>
        );
    }
};

export default withRouter(NoteViewHeader);