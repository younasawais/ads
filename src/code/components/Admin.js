import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import {checkCredentials} from './generalFunctions';


class Admin extends Component {
    async componentDidMount(){
        checkCredentials();
        //const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/getUserSubscriptions',{"token" : token}); 
        //const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/getUserSubscriptions',{"token" : token}); 
    }
    render() {
        return (
            <Fragment>
                <div style={{backgroundColor:'#e9f1f6', paddingBottom:'30%' }}>
                    <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
                    <h3 style={{
                        fontFamily: 'fantasy',
                        textAlign: 'center',
                        color: '#36587f'}}>
                            Admin Page</h3>
                    <Link style={{borderRadius: 20}} type="button" to={'/manage-articles'} className="btn btn-primary btn-lg btn-block">Manage Articles</Link>
                    <Link style={{borderRadius: 20}} type="button" to={'/manage-menus'} className="btn btn-primary btn-lg btn-block">Manage menus</Link>
                    <Link style={{borderRadius: 20}} type="button" to={'/manage-users'} className="btn btn-primary btn-lg btn-block">Manage Users</Link>
                    <Link style={{borderRadius: 20}} type="button" to={'/settings-cms'} className="btn btn-primary btn-lg btn-block">Settings</Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Admin;