import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import SecondaryHeader from '../components/SecondaryHeader';

class NoteViewScreen extends Component {

    render() {
        return (
            <section
            className="section--screen section--screen-view"
            >
                <SecondaryHeader/>
                <main className="main--type-content">
                    <img src={this.props.imageURL}/>
                    <section>
                        <button>&lt;Back</button>
                        <span>Page 1</span>
                        <button>Next&gt;</button>
                    </section>
                </main>
            </section>
        );
    }
}

export default withRouter(NoteViewScreen);
