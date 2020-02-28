import React, { Component } from 'react';

import NoteImageObject from '../components/NoteImageObject';

class HomeScreen extends Component {

    state = {
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
        return (
            <section
            className="section--screen section--screen-home"
            >
                <main className="main">
                    <h3>Recently Added Notes</h3>
                    <section className="section--items">
                        {this.state.items.map(({pk, ...props}) =>
                            <NoteImageObject key={pk} {...props}/>
                        )}
                    </section>
                </main>
            </section>
        );
    }
}

export default HomeScreen;
