import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SettingsCms extends Component {
    constructor(props){
        super(props);
        this.handleBackup = this.handleBackup.bind(this);
    }

    handleBackup(){
        const response = axios.post(
            process.env.REACT_APP_BACKEND + 'backupArticlesAndMenus', 
            {articles : true, menus : true}, 
            {timeout: 50000});
        console.log(response);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Link type="button" to='/admin' className="btn btn-dark">Back</Link><br/>
                    <Link type="button" to='/admin' className="btn btn-primary">Export DB content</Link>
                    <button type="button" onClick={this.handleBackup} className="btn btn-primary">Backup DB</button>
                </div>
            </Fragment>
        );
    }
}

export default SettingsCms;