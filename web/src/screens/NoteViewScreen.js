import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import SecondaryHeader from '../components/SecondaryHeader';
import NoteView from '../components/NoteView';

class NoteViewScreen extends Component {

    render() {
        return (
            <section
            className="section--screen section--screen-view"
            >
                <SecondaryHeader/>
                <main className="main--type-content">
                    <NoteView/>
                </main>
            </section>
        );
    }
}

export default withRouter(NoteViewScreen);
