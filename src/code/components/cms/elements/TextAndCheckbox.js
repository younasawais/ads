import React, { Component, Fragment } from 'react';

class TextAndCheckbox extends Component {
    render() {
        const {text, handleFunction} = this.props;
        return (
            <Fragment>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <p style={{marginBottom:0, marginRight:10}}>{text}</p>
                        <input onClick={handleFunction} type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                {/* <input type="text" class="form-control" aria-label="Text input with checkbox"/> */}
                </div>
            </Fragment>
        );
    }
}

export default TextAndCheckbox;