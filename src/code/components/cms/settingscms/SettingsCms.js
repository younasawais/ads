import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class SettingsCms extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Link type="button" to='/admin' className="btn btn-dark">Back</Link><br/>
                    <Link type="button" to='/admin' className="btn btn-primary">Export DB content</Link>
                </div>
            </Fragment>
        );
    }
}

export default SettingsCms;