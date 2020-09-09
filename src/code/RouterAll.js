import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Article from './components/Article';
import Home from './components/Home';
import Admin from './components/Admin';
import ManageArticles from './components/cms/managearticles/ManageArticles';
import AddArticle from './components/cms/addArticle/AddArticle';
import ManageMenus from    './components/cms/managemenus/ManageMenus';
import SettingsCms from    './components/cms/settingscms/SettingsCms';
import ModifyArticle from './components/cms/modifyArticle/ModifyArticle';
import Login from './components/login';

class RouterAll extends Component {
    extractArray(arr){
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
        return [names, routes];
    }

    render() {
        const {props} = this;
        const {bottomMenu} = this.props.pageContent;
        return (
            <Fragment>            
                {/* <Menu {...props}/> */}
                <Switch>
                    {bottomMenu.links.map((link, index)=> {return(
                        <Route
                            key = {index}
                            path={'/'+link}
                            render={({location, match}) => <Article {...props} match={match}/>}    
                        />
                    )})}

                    <Route
                        path='/' exact   
                        render={({location, match}) => <Home match={match}/>}    
                    />
                    <Route
                        path='/home' exact   
                        render={({location, match}) => <Home match={match}/>}    
                    />
                    <Route
                        path={'/article/:link?'}
                        render={({location, match}) => <Article {...props} match={match}/>}    
                    />

                    <Route
                        path={'/modifyarticle/:link?'}
                        render={({location, match}) => <ModifyArticle {...props} match={match}/>}    
                    />

                    <Route
                        path='/admin' exact
                        render={({location, match}) => <Admin {...props} match={match}/>}    
                    />                    

                    <Route
                        path='/login' exact
                        render={({location, match}) => <Login match={match}/>}    
                    />

                    {/* change home when page done */}
                    <Route
                        path='/manage-articles' exact   
                        render={({location, match}) => <ManageArticles/>}    
                    />
                    <Route
                        path='/manage-menus' exact   
                        render={({location, match}) => <ManageMenus/>}    
                    />
                    <Route
                        path='/settings-cms' exact   
                        render={({location, match}) => <SettingsCms/>}    
                    />
                    <Route
                        path='/add-article' exact   
                        render={({location, match}) => <AddArticle/>}    
                    />
                </Switch>
            </Fragment>
        );
    }
}

export default connect(state => state)(RouterAll);