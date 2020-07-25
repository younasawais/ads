import React, { Component } from 'react';

class ButtonCustom extends Component {
    render() {
        const {text, type} = this.props; 
        return (
            <button style={style} type="button" className={"btn btn-" + type}>{text}</button>
        );
    }
}

ButtonCustom.defaultProps = {
    type: "primary"
}

const style = {
    padding : 5,
    marginLeft : 0
}

export default ButtonCustom;