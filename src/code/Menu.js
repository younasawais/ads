import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect, NavLink, Route, Switch} from 'react-router-dom';
import TestComp1 from './components/TestComp1';
import TestComp2 from './components/TestComp2';


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
        const {props} = this;
        return (
            <div>
                <NavLink to='/testcomp1'>TestComp1</NavLink>
                <NavLink to='/testcomp2'>TestComp2</NavLink>
                <Switch>
                    <Route
                        path='/testcomp1'
                        render={({location, match}) => <TestComp1 {...props}/>}    
                    />
                    <Route
                        path='/testcomp2'
                        render={({location, match}) => <TestComp2 {...props}/>}    
                    />
                </Switch>
                <hr />
                <p>Menu component</p>
                <button onClick={this.changeVal}>Hello</button>
                <p>Current Value : {this.props.article.articleId} </p>
            </div>
        );
    }
}

export default connect(state => state)(Menu);