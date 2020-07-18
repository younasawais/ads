import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Article from './components/Article';
import Menu from './components/Menu';
import Home from './components/Home';
import Admin from './components/Admin';

class RouterAll extends Component {
    extractArray(arr){
        console.log(arr);
        let names = [];
        let routes = [];

        for (let i = 0; i < arr.length; i++) {
            if(arr[i].sub.length > 0){
                for (let j = 0; j < arr[i].sub.length; j++) {
                    names.push(arr[i].sub[j].name);
                    routes.push(arr[i].sub[j].router);
                }
            }
            names.push(arr[i].name);
            routes.push(arr[i].router);
            
        }    
        console.log(names);
        console.log(routes);
        return [names, routes];
    }

    render() {
        const {props} = this;
        const {bottomMenu,articleMenuItems} = this.props.article;
        const pages = this.extractArray(articleMenuItems);
        return (
            <Fragment>            
                {/* <Menu {...props}/> */}
                <Switch>
                    {bottomMenu.links.map((link, index)=> {return(
                        <Route
                            path={'/'+link}
                            render={({location, match}) => <Article {...props} match={match}/>}    
                        />
                    )})}

                    {pages[1].map(link=>{return(
                        <Route
                            path={'/'+link}
                            render={({location, match}) => <Article {...props} match={match}/>}    
                        />
                    )})}

                    <Route
                        path='/admin' exact
                        render={({location, match}) => <Admin {...props}/>}    
                    />
                    {/* change home when page done */}
                    <Route
                        path='/sub-second-two' exact   
                        render={({location, match}) => <Home {...props}/>}    
                    />
                </Switch>
            </Fragment>
        );
    }
}

export default connect(state => state)(RouterAll);