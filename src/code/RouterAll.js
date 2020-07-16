import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Article from './components/Article';
import Menu from './components/Menu';
import Home from './components/Home';


class RouterAll extends Component {
    render() {
        const {props} = this;
        const {bottomMenu} = this.props.article;
        return (
            <Fragment>            
                <Menu {...props}/>
                <Switch>
                    {bottomMenu.links.map((link, index)=> {return(
                        <Route
                            path={'/'+link}
                            render={({location, match}) => <Article {...props} match={match}/>}    
                        />
                    )})}
                    <Route
                        path='/article' 
                        render={({location, match}) => <Article {...props}/>}    
                    />
                    <Route
                        path='/home'
                        render={({location, match}) => <Home {...props}/>}    
                    />
                    <Route
                        path='/' exact
                        render={({location, match}) => <Home {...props}/>}    
                    />
                </Switch>
            </Fragment>
        );
    }
}

export default connect(state => state)(RouterAll);