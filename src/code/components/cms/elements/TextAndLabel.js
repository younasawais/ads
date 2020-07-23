import React, { Component, Fragment } from 'react';

class TextAndLabel extends Component {
    render() {
        const {labelName} = this.props;
        return (
            <Fragment>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">{labelName}</span>
                    </div>
                    <input type="text" className="form-control" aria-label={labelName} aria-describedby="inputGroup-sizing-default"/>
                </div>
            </Fragment>
        );
    }
}

export default TextAndLabel;