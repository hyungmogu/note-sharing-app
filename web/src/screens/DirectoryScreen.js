import React, { Component } from 'react';

import ImageFileObject from '../components/ImageFileObject';

class DirectoryScreen extends Component {

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
            className="section--screen section--screen-directory"
            >
                <main className="main--type-content">
                    <section className="section--items">
                        {this.state.items.map(({pk, ...props}) =>
                            <ImageFileObject key={pk} {...props}/>
                        )}
                    </section>
                </main>
            </section>
        );
    }
}

export default DirectoryScreen;
