import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

class TextAndCheckbox extends Component {
    constructor(props){
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(e){
        const {reducerType} = this.props;
        if(typeof reducerType !== 'undefined'){
            this.props.dispatch({
                type: reducerType,
                payload: {
                    input : e.target.checked
                }
            })
        }
    }

    render() {
        const {text, checked} = this.props;
        return (
            <Fragment>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <div className="input-group-text">
                    <p style={{marginBottom:0, marginRight:10}}>{text}</p>
                    <input onChange={this.handleCheckbox} checked={checked} type="checkbox" aria-label="Checkbox for following text input"/>
                    {/* { checked ? 
                    <input onClick={this.handleCheckbox} checked type="checkbox" aria-label="Checkbox for following text input"/>
                     : 
                     <input onClick={this.handleCheckbox} type="checkbox" aria-label="Checkbox for following text input"/>} */}
                </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

TextAndCheckbox.defaultProps = {
    text        : 'undefined',
    reducerType : 'undefined',
    checked     : false
}

export default connect(state => state)(TextAndCheckbox);