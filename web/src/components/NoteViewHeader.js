import React, { Component } from 'react';

import { matchPath } from 'react-router';
import { AppConsumer } from '../components/Context';
import { withRouter } from 'react-router-dom';
import NoteImageObject from '../components/NoteImageObject';

class NoteViewHeader extends Component {

    render() {
        const {location} = this.props;
        let pages = this.props.appContext.pages.items;

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

        let noteSlug = match.params.note;
        let folderSlug = match.params.folder;

        return (
        <header class="noteViewHeader">
            {pages.map( props =>
                <NoteImageObject key={props.pk} note={noteSlug} folder={folderSlug} {...props}/>
            )}
        </header>
        );
    }
};

let NoteViewHeaderWithRoute = withRouter(NoteViewHeader);

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <NoteViewHeaderWithRoute
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

