import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';

class NoteView extends Component {

    state = {
        currentIndex: 0
    }

    componentDidMount () {
        this.setState({
            currentIndex: 0
        })
    }

    handlePrev = () => {
        this.setState(prevState => {
            return {
                currentIndex: prevState.currentIndex - 1
            }
        })
    }

    handleNext = () => {
        this.setState(prevState => {
            return {
                currentIndex: prevState.currentIndex + 1
            }
        })
    }

    render() {
        return (
            <section className="noteView">
                <img src="https://via.placeholder.com/750x1000"/>
                <section className="navigation">
                    <section className="navigation--btnWrapper">
                        { this.state.currentIndex === 0 ? ''
                            : <button onClick={this.handlePrev}>&lt; Back</button>
                        }
                    </section>
                    <section className="navigation--textWrapper">
                        <span>Page 1</span>
                    </section>
                    <section className="navigation--btnWrapper">
                        { this.state.currentIndex == this.props.appContext.pages.items.length - 1 ? ''
                            : <button onClick={this.handleNext}>Next &gt;</button>
                        }
                    </section>
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


