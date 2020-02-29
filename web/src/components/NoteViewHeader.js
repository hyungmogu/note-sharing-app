import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class NoteViewHeader extends Component {

    render() {
        return (
        <header class="noteViewHeader">
            <nav>

            </nav>
        </header>
        );
    }
};

export default withRouter(NoteViewHeader);