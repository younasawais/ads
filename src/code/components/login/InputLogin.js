import React, { Component } from 'react';
import {connect} from 'react-redux';

class InputLogin extends Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        const name = e.target.name;
        const value = e.target.value;    
        this.props.dispatch({
            type : 'updateLoginValues',
            payload : {
                inputType   : name,
                value       : value
            }
        })
    }

    render() {
        const {name, type, placeHolder, value} = this.props;
        return (
            <div className="form-group col">
                <input 
                    onChange={this.handleInput} 
                    type={type} 
                    name={name} 
                    placeholder={placeHolder} 
                    value={value}
                    className="form-control display-7" />
            </div>
        );
    }
}

InputLogin.defaultProps = {
    name: 'not defined',
    type : '',
    placeHolder: 'not defined',
    value: ''
}

function mapStateToProps(state){
    return{
        login : state.login
    }
}

export default connect(mapStateToProps)(InputLogin);