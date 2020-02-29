import React, { Component } from 'react';

class NoteView extends Component {

    render() {
        return (
            <section
            className="noteView"
            >
                <img src="https://via.placeholder.com/750x1000"/>
                <section class="navigation">
                    <button>&lt; Back</button>
                    <span>Page 1</span>
                    <button>Next &gt;</button>
                </section>
            </section>
        );
    }
}

export default NoteView;
