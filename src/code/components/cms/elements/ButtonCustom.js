import React, { Component } from 'react';

class ButtonCustom extends Component {
    render() {
        const {text, type} = this.props; 
        return (
            <button type="button" className={"btn btn-" + type}>{text}</button>
        );
    }
}

ButtonCustom.defaultProps = {
    type: "primary"
}

export default ButtonCustom;