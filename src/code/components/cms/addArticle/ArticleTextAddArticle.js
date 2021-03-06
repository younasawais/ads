import React, { Component } from 'react';
import {connect} from 'react-redux';

class ArticleTextAddArticle extends Component {
    constructor(props){
        super(props);
        this.handleInputText = this.handleInputText.bind(this);
    }

    handleInputText(e){
        e.preventDefault();
        const {reducerType} = this.props;
        if(typeof reducerType !== 'undefined'){
            let str = e.target.value;
            str = str.replace(/[.]\n/g,'::');
            str = str.replace(/\n/g,' ');
            str = str.replace(/(.+)/g,"$1" +'::');
            str = str.replace(/(.::$)/g,'::');
            // console.log(str);
            // console.log(response);
            this.props.dispatch({
                type: reducerType,
                payload:{
                    input : str
                }
            })
        }
    }

    render() {
        const {value, label} = this.props;
        return (
            <div>
                <div className="form-group">
                <label >{this.props.label}</label>
                    <textarea 
                        value={value}
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

ArticleTextAddArticle.preventDefault = {
    label : 'undefined',
    value : ''
}

function mapStateToProps(state){
    return{
        addArticle : state.addArticle
    }
}

export default connect(mapStateToProps)(ArticleTextAddArticle);