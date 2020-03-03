import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { AppConsumer } from '../components/Context';
import NoteFolderObject from '../components/NoteFolderObject';
import NoteImageObject from '../components/NoteImageObject';
import SecondaryHeader from '../components/SecondaryHeader';

class DirectoryScreen extends Component {

    render() {
        let noteSlug = this.props.match.params.note;
        let folderSlug = this.props.match.params.folder;

        let isNote = folderSlug ? false : true;

        let folders = this.props.appContext.folders.items;
        let pages = this.props.appContext.pages.items;

        return (
            <section className="screen">
                <SecondaryHeader/>
                <main className="main">
                    <section className="items">
                        {isNote ? folders.map((props) => {
                            return <NoteFolderObject key={props.pk} note={noteSlug} {...props}/>
                        }) :

                        pages.map((props) => {
                            return <NoteImageObject key={props.pk} {...props}/>
                        })}
                    </section>
                </main>
            </section>
        );
    }
}

let DirectoryScreenWithRoute = withRouter(DirectoryScreen);

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <DirectoryScreenWithRoute
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

