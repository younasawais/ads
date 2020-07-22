import React, { Component, Fragment } from 'react';

class InputText extends Component {
    render() {
        const {placeHolder} = this.props;
        return (
            <Fragment>
              <input type="text" className="form-control" placeholder={placeHolder} aria-label={placeHolder} aria-describedby="basic-addon1"/>
            </Fragment>
        );
    }
}

export default InputText;