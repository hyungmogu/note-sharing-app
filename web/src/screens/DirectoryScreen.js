import React, { Component } from 'react';

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
                url: 'https://via.placeholder.com/200'
            },
            {
                pk: 2,
                name: 'Page 2',
                url: 'https://via.placeholder.com/200'
            },
            {
                pk: 3,
                name: 'Page 3',
                url: 'https://via.placeholder.com/200'
            }
        ]
    }

    render() {

        let isFolder = false;

        try {
            console.log(this.props.location);
            isFolder = this.props.location.state.isFolder;
        } catch(Error) {}

        console.log(isFolder);

        return (
            <section
            className="section--screen section--screen-directory"
            >
                <SecondaryHeader/>
                <main className="main--type-content">
                    <section className="section--items">
                        {!isFolder ? this.state.folders.map((props) => {
                            console.log('I am here 2');
                            console.log(isFolder);
                            return <NoteFolderObject key={props.pk} {...props}/>
                        }) :

                        this.state.items.map((props) => {
                            console.log('I am here 1');
                            console.log(isFolder);
                            return <NoteImageObject key={props.pk} {...props}/>
                        })}
                    </section>
                </main>
            </section>
        );
    }
}

export default DirectoryScreen;
