import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import ManageArticlesTable from './ManageArticlesTable';
import axios from 'axios';
import {connect} from 'react-redux';
import AlertMessage from '../elements/AlertMessage';
import {checkCredentials} from '../../generalFunctions';

class ManageArticles extends Component {
    constructor(props){
        super(props);
        this.handleDeleteButton  = this.handleDeleteButton.bind(this);
        this.handlePublishButton = this.handlePublishButton.bind(this);
        this.alertTimeOut        = this.alertTimeOut.bind(this);
    }

    async componentWillMount(){
        if(await checkCredentials()){
            const response = await axios.post(process.env.REACT_APP_BACKEND + 'getArticleListManageArticles');
            //console.log(response);
            this.props.dispatch({
                type : 'articleListManageArticles',
                payload : {
                    value : response.data
                }
            })
        }
    }

    async handleDeleteButton(){
        const { dispatch } = this.props;
        let deleteIds = this.props.manageArticles.changes;
        const response = await axios.post(
            process.env.REACT_APP_BACKEND + 'deleteArticlesgetUpdatedList', 
            {'deleteIds' : deleteIds});
        console.log(response);
        dispatch({
            type : 'articleListManageArticles',
            payload : {
                value : response.data.articles
            }
        });
        if(response.status === 200){
            dispatch({
                type : 'alertManageArticles',
                payload : {
                    alertMessage : ' ' + response.data.totalDeleted + ' article(s) succesfully deleted!'
                }
            });
        }
        this.alertTimeOut(dispatch);
    }
    
    async handlePublishButton(active){
        const { dispatch } = this.props;
        let publishIds = this.props.manageArticles.changes;
        const response = await axios.post(
            process.env.REACT_APP_BACKEND + 'publishArticlesgetUpdatedList', 
            {'publishIds' : publishIds, 'active': active});
        console.log(response);
        dispatch({
            type : 'articleListManageArticles',
            payload : {
                value : response.data
            }
        });
        if(response.status === 200){
            dispatch({
                type : 'alertManageArticles',
                payload : {
                    alertMessage : ' ' + publishIds.length + ' article(s) succesfully (un)published!'
                }
            });
        }
        this.alertTimeOut(dispatch);
    }

    alertTimeOut(dispatch){
        setTimeout(function() {
            dispatch({
                type :'alertManageArticles', 
                payload : {
                    alertMessage : ''
                }
            });
        }, 3000);        
    }

    render() {
        const {alertMessage} = this.props.manageArticles;

        return (
            <Fragment>
                {alertMessage !== "" ? 
                    <AlertMessage text={alertMessage}/> : ''
                }
                <div  className="row" style={{paddingLeft:10, paddingRight:10}}>
                    <Link type="button" to='/admin' className="btn col btn-dark">Back</Link>
                    <Link type="button" to='/add-article' className="btn col btn-primary">New Article</Link>
                    <Link type="button" to='/modify-article' className="btn col btn-primary">Modify</Link>
                    <button type="button" onClick={()=>{this.handlePublishButton(true)}} className="btn col btn-primary">Publish</button>
                    <button type="button" onClick={()=>{this.handlePublishButton(false)}} className="btn col btn-primary">Unpublish</button>
                    <button type="button" onClick={this.handleDeleteButton} className="btn col btn-danger">Delete</button>
                </div>
                <ManageArticlesTable {...this.props}/>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        manageArticles : state.manageArticles
    }
}

export default connect(mapStateToProps)(ManageArticles);