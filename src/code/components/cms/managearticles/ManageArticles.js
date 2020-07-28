import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import ManageArticlesTable from './ManageArticlesTable';

class ManageArticles extends Component {
    render() {
        return (
            <Fragment>
                <div  className="row" style={{paddingLeft:10, paddingRight:10}}>
                    <Link type="button" to='/add-article' className="btn col btn-primary">New Article</Link>
                    <Link type="button" to='/modify-article' className="btn col btn-primary">Modify</Link>
                    <button type="button" className="btn col btn-primary">Publish</button>
                    <button type="button" className="btn col btn-primary">Unpublish</button>
                    <button type="button" className="btn col btn-danger">Delete</button>
                </div>
                <ManageArticlesTable {...this.props}/>
            </Fragment>
        );
    }
}

export default ManageArticles;