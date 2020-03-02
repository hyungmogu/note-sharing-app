import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import SecondaryHeader from '../components/SecondaryHeader';
import NoteView from '../components/NoteView';

class NoteViewScreen extends Component {

    render() {
        return (
            <section
            className="section--screen screen--view"
            >
                <SecondaryHeader/>
                <main className="main">
                    <section>
                        <NoteView {...this.props}/>
                    </section>
                </main>
            </section>
        );
    }
}

export default withRouter(NoteViewScreen);
