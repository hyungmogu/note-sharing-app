import React, { Component } from 'react';

import { matchPath } from 'react-router'
import { withRouter } from 'react-router-dom';
import NoteImageObject from '../components/NoteImageObject';

class NoteViewHeader extends Component {

    state = {
        items: [
            {
                pk: 1,
                name: 'Page 1',
                slug: 'page1',
                url: 'https://via.placeholder.com/200'
            },
            {
                pk: 2,
                name: 'Page 2',
                slug: 'page2',
                url: 'https://via.placeholder.com/200'
            },
            {
                pk: 3,
                name: 'Page 3',
                slug: 'page3',
                url: 'https://via.placeholder.com/200'
            }
        ]
    }

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

        return (
        <header class="noteViewHeader">
            {this.state.items.map( props =>
                <NoteImageObject key={props.pk} {...props}/>
            )}
        </header>
        );
    }
};

export default withRouter(NoteViewHeader);