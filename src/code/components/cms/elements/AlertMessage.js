import React, { Component } from 'react';

class AlertMessage extends Component {
    render() {
        let {text, type} = this.props;
        if(typeof(type==='')){type='success'};
        return (
            <div style={{padding:'6px', marginTop:0, marginBotom:0}} className={"alert alert-" + type} role="alert">
                {text}
            </div>
        );
    }
}

AlertMessage.defaultProps = {
    type: "success"
}

export default AlertMessage;