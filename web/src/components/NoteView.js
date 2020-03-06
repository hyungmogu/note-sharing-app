import React, { Component } from 'react';

import { matchPath } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import { AppConsumer } from '../components/Context';


class NoteView extends Component {

    state = {
        currentIndex: 0
    }

    componentDidMount () {
        this.handleMoveToItem();
    }

    componentDidUpdate () {
        this.handleMoveToItem();
    }

    handleMoveToItem = () => {
        let match = matchPath(this.props.history.location.pathname, {
            path: '/notes/:note/:folder/:page/',
            exact: true,
            strict: false
        });

        let currPath = `${match.params.note}/${match.params.folder}/${match.params.page}`;

        let currentIndex = this.props.appContext.pages.items.findIndex((item, index) => {
            return item.path === currPath;
        })

        this.setState(prevState => {
            if (prevState.currentIndex === currentIndex) {
                return null;
            }

            return {
                currentIndex: currentIndex
            }
        })
    }

    handlePrev = () => {
        let path = this.props.appContext.pages.items[this.state.currentIndex - 1].path;
        this.props.history.push('/notes/' + path);
    }

    handleNext = () => {
        let path = this.props.appContext.pages.items[this.state.currentIndex + 1].path;
        this.props.history.push('/notes/' + path);
    }

    render() {

        let image = '';
        let name = '';
        try {
            name = this.props.appContext.pages.items[this.state.currentIndex].name;
            image = this.props.appContext.pages.items[this.state.currentIndex].imageURL;
        } catch(Error) {}


        return (
            <section className="noteView">
                <img src={image}/>
                <section className="navigation">
                    <section className="navigation--btnWrapper">
                        { this.state.currentIndex === 0 ? ''
                            : <button onClick={this.handlePrev}>&lt; Back</button>
                        }
                    </section>
                    <section className="navigation--textWrapper">
                        <span>{name}</span>
                    </section>
                    <section className="navigation--btnWrapper">
                        { this.state.currentIndex == this.props.appContext.pages.items.length - 1 ? ''
                            : <button onClick={this.handleNext}>Next &gt;</button>
                        }
                    </section>
                </section>
                <section className="navigationMobile">
                    <button onClick={this.handlePrev} className="navigationMobile--btn">
                        <FontAwesomeIcon icon={faLessThan}/>
                    </button>
                    <button onClick={this.handleNext} className="navigationMobile--btn">
                        <FontAwesomeIcon icon={faGreaterThan}/>
                    </button>
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


