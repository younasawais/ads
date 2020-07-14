import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Redirect, NavLink, Route, Switch} from 'react-router-dom';
import TestComp1 from './components/TestComp1';
import TestComp2 from './components/TestComp2';
import Article from './components/Article';


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
            <Fragment>            
            <section className="menu cid-s4lUbDTTEI" once="menu" id="menu2-3">
            <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <div className="hamburger">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </button>
              <div className="menu-logo">
                  <div className="navbar-brand">
                      <span className="navbar-logo">
                          <a href="https://qouh.com">
                              <img src="assets/images/logo2.png" alt="Qouh" title="Qouh" style={{height: '3.8rem'}}/> 
                          </a>
                      </span>
                      
                  </div>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true"><NavLink to='/article' className="nav-item dropdown">
                          <a className="nav-link link text-black dropdown-toggle display-4" href="https://mobirise.co" data-toggle="dropdown-submenu" aria-expanded="false">
                              Subtopic1</a><div className="dropdown-menu"><a className="text-black dropdown-item display-4" href="https://mobirise.co" aria-expanded="false">New Item</a></div>
                      </NavLink>
                    <NavLink to='/article' className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.co">Subtopic2</a></NavLink>
                    <NavLink to='/article' className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.co">Subtopic3</a></NavLink>
                    <NavLink to='/article' className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.co">Subtopic4</a></NavLink>
                    <NavLink to='/testcomp1' className="nav-item"> <a className="nav-link link text-black display-4" href="https://mobirise.co">Subtopic5</a></NavLink>
                    </ul>
                      </div>
                  </nav>
              </section>
                <Switch>
                    <Route
                        path='/article'
                        render={({location, match}) => <Article {...props}/>}    
                    />
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
            </Fragment>
        );
    }
}

export default connect(state => state)(Menu);