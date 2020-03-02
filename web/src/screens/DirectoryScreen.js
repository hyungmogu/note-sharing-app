import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import NoteFolderObject from '../components/NoteFolderObject';
import NoteImageObject from '../components/NoteImageObject';
import SecondaryHeader from '../components/SecondaryHeader';

class DirectoryScreen extends Component {

    render() {
        let note = this.props.match.params.note;
        let folder = this.props.match.params.folder;

        let isNote = folder ? false : true;

        return (
            <section
            className="section--screen section--screen-directory"
            >
                <SecondaryHeader/>
                <main className="main">
                    <section class="items ">
                        {isNote ? this.state.folders.map((props) => {
                            return <NoteFolderObject key={props.pk} note={note} {...props}/>
                        }) :

                        this.state.items.map((props) => {
                            return <NoteImageObject key={props.pk} note={note} folder={folder} {...props}/>
                        })}
                    </section>
                </main>
            </section>
        );
    }
}

export default withRouter(DirectoryScreen);
