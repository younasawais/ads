import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';


class Admin extends Component {
    componentDidMount(){
        //token = sessionStorage.getItem("token");
        //const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/getUserSubscriptions',{"token" : token}); 
        //const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/getUserSubscriptions',{"token" : token}); 
              
    }
    render() {
        return (
            <Fragment>
                <h3>Admin Page</h3>
                <Link type="button" to={'/manage-articles'} className="btn btn-primary">Manage Article</Link>
                <Link type="button" to={'/manage-menus'} className="btn btn-primary">Manage menus</Link>
                <Link type="button" to={'/settings-cms'} className="btn btn-primary">Settings</Link>
            </Fragment>
        );
    }
}

export default Admin;