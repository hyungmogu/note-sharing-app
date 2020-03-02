import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';

class NoteView extends Component {

    handlePrev = () => {
        let targetIndex = this.props.appContext.pages.items.findIndex(item => {
            return item.path === this.props.path
        });


    }

    handleNext = () => {

    }

    render() {
        return (
            <section
            className="noteView"
            >
                <img src="https://via.placeholder.com/750x1000"/>
                <section class="navigation">
                    <button onClick={this.handlePrev}>&lt; Back</button>
                    <span>Page 1</span>
                    <button onClick={this.handleNext}>Next &gt;</button>
                </section>
            </section>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <NoteView
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


