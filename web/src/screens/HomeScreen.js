import React, { Component } from 'react';

import ImageFileObject from '../components/ImageFileObject';

class HomeScreen extends Component {

    render() {
        return (
            <section
            className="section--screen section--screen-home"
            >
                <main className="main--type-content">
                    <h3>Recently Added Notes</h3>
                    <ImageFileObject/>
                </main>
            </section>
        );
    }
}

export default HomeScreen;
