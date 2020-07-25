import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class ManageArticles extends Component {
    render() {
        const {manageArticles} = this.props;
        console.log(manageArticles);
        return (
            <Fragment>
                <div  className="row" style={{paddingLeft:10, paddingRight:10}}>
                    <Link type="button" to='/add-article' className="btn col btn-primary">New Article</Link>
                    <Link type="button" to='/modify-article' className="btn col btn-primary">Modify</Link>
                    <button type="button" className="btn col btn-primary">Publish</button>
                    <button type="button" className="btn col btn-primary">Unpublish</button>
                    <button type="button" className="btn col btn-danger">Delete</button>
                </div>
                <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Published</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Date created</th>
                            <th scope="col">Pics</th>
                            <th scope="col">Total words</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>97768</td>
                            <td>Khilafah state</td>
                            <td>yes</td>
                            <td>Islam--khilafah</td>
                            <td>12-june-20</td>
                            <td>2</td>
                            <td>3454</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>97768</td>
                            <td>Khilafah state</td>
                            <td>yes</td>
                            <td>Islam--khilafah</td>
                            <td>12-june-20</td>
                            <td>2</td>
                            <td>3454</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>97768</td>
                            <td>Khilafah state</td>
                            <td>yes</td>
                            <td>Islam--khilafah</td>
                            <td>12-june-20</td>
                            <td>2</td>
                            <td>3454</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </Fragment>
        );
    }
}

export default ManageArticles;