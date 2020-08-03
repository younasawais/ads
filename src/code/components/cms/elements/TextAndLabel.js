import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

class TextAndLabel extends Component {
    constructor(props){
        super(props);
        this.handleInputText = this.handleInputText.bind(this);
    }

    handleInputText(e){
        e.preventDefault();
        console.log('change input');
        this.props.dispatch({
            type: this.props.reducerType,
            payload:{
                input : e.target.value
            }
        })
    }

    render() {
        const {labelName, value} = this.props;
        return (
            <Fragment>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">{labelName}</span>
                    </div>
                    <input 
                        type="text" 
                        onChange={this.handleInputText}  
                        placeholder='testval' 
                        className="form-control" 
                        value={value}
                        aria-label={labelName} 
                        aria-describedby="inputGroup-sizing-default"/>
                </div>
            </Fragment>
        );
    }
}

export default connect(state => state)(TextAndLabel);
//export default TextAndLabel;