import React, { Component } from 'react';
import {connect} from 'react-redux';

class ArticleTextAddArticle extends Component {
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

        return (
            <div>
                    <div className="form-group">
                    <label >{this.props.label}</label>
                        <textarea 
                            onChange={this.handleInputText}  
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3">
                        </textarea>
                    </div>   
            </div>
        );
    }
}

export default connect(state => state)(ArticleTextAddArticle);