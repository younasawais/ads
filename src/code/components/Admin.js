import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Admin extends Component {
    async componentDidMount(){
        const token = sessionStorage.getItem("token");
        const response = await axios.post('http://localhost:4000/checkToken', {token: token});
        console.log(response);
        if(!response.data.token){window.location = '/login' }
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