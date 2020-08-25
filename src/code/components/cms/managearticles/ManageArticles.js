import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import ManageArticlesTable from './ManageArticlesTable';
import axios from 'axios';
import {connect} from 'react-redux';

class ManageArticles extends Component {
    constructor(props){
        super(props);
        this.handelDeleteButton = this.handelDeleteButton.bind(this);
    }

    async componentWillMount(){
        const response = await axios.post('http://localhost:4000/getArticleListManageArticles');
        //console.log(response);
        this.props.dispatch({
            type : 'articleListManageArticles',
            payload : {
                value : response.data
            }
        })
    }

    async handelDeleteButton(){
        let deleteIds = this.props.manageArticles.changes;
        const response = await axios.post(
            'http://localhost:4000/deleteArticlesgetUpdatedList', 
            {'deleteIds' : deleteIds});
        console.log(response);
        this.props.dispatch({
            type : 'articleListManageArticles',
            payload : {
                value : response.data
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div  className="row" style={{paddingLeft:10, paddingRight:10}}>
                    <Link type="button" to='/add-article' className="btn col btn-primary">New Article</Link>
                    <Link type="button" to='/modify-article' className="btn col btn-primary">Modify</Link>
                    <button type="button" className="btn col btn-primary">Publish</button>
                    <button type="button" className="btn col btn-primary">Unpublish</button>
                    <button type="button" onClick={this.handelDeleteButton} className="btn col btn-danger">Delete</button>
                </div>
                <ManageArticlesTable {...this.props}/>
            </Fragment>
        );
    }
}

export default connect(state=> state)(ManageArticles);
//export default ManageArticles;