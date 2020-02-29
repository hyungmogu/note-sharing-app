import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import NoteFolderObject from '../components/NoteFolderObject';
import NoteImageObject from '../components/NoteImageObject';
import SecondaryHeader from '../components/SecondaryHeader';

class DirectoryScreen extends Component {

    state = {
        folders: [
            {
                pk: 1,
                slug: 'lecture1',
                name: 'Lecture 1'
            },
            {
                pk: 2,
                slug: 'lecture2',
                name: 'Lecture 2'
            },
            {
                pk: 3,
                slug: 'lecture3',
                name: 'Lecture 3'
            }
        ],
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
