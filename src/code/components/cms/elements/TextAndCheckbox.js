import React, { Component, Fragment } from 'react';

class TextAndCheckbox extends Component {
    render() {
        const {text, handleFunction} = this.props;
        return (
            <Fragment>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <p style={{marginBottom:0, marginRight:10}}>{text}</p>
                        <input onClick={handleFunction} type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default TextAndCheckbox;