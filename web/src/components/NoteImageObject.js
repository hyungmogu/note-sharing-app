import React, { Component } from 'react';

class NoteImageObject extends Component {

    render() {
        return (
            <div className="div--type-imageFile">
                <img src={this.props.url}/>
                <section>
                    <span>{this.props.name}</span>
                </section>
            </div>
        );
    }
};

export default NoteImageObject;