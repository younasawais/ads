import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

class TextAndLabel extends Component {
    constructor(props){
        super(props);
        this.handleInputText = this.handleInputText.bind(this);
    }

    handleInputText(e){
        e.preventDefault();
        const {reducerType} = this.props;
        if(typeof reducerType !== 'undefined'){
            this.props.dispatch({
                type: reducerType,
                payload:{
                    input : e.target.value
                }
            })
        }
    }

    render() {
        const {labelName, value, placeholder} = this.props;
        return (
            <Fragment>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">{labelName}</span>
                    </div>
                    <input 
                        type="text" 
                        onChange={this.handleInputText}  
                        placeholder={placeholder}
                        className="form-control" 
                        value={value}
                        aria-label={labelName} 
                        aria-describedby="inputGroup-sizing-default"/>
                </div>
            </Fragment>
        );
    }
}

TextAndLabel.defaultProps = {
    labelName   : 'undefined',
    value       : '',
    placeholder : '' 
}

function mapStateToProps(state){
    return{
        addArticle : state.addArticle
    }
}

export default connect(mapStateToProps)(TextAndLabel);