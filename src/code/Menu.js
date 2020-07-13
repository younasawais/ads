import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
    constructor(props){
        super(props);
        this.changeVal = this.changeVal.bind(this);
    }
    
    changeVal(e){
        e.preventDefault();
        this.props.dispatch({
            type:'test', 
            payload : {
                val : 2
        }})
    }

    render() {
        console.log(this.props);
        
        return (
            <div>
                <p>Menu component</p>
                <button onClick={this.changeVal}>Hello</button>
                <p>Current Value : {this.props.article.articleId} </p>
            </div>
        );
    }
}

export default connect(state => state)(Menu);