import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import ManageMenusTable from './ManageMenusTable';
import axios from 'axios';
import {connect} from 'react-redux';
import AlertMessage from '../elements/AlertMessage';

class ManageMenus extends Component {
    constructor(props){
        super(props);
        this.handleDeleteButton  = this.handleDeleteButton.bind(this);
        this.handlePublishButton = this.handlePublishButton.bind(this);
        this.alertTimeOut        = this.alertTimeOut.bind(this);
    }

    async componentWillMount(){
        const response = await axios.post('http://localhost:4000/getMenuList');
        console.log(response);
        const {children, parents, menus} = response.data;
        this.props.dispatch({
            type : 'menusListManageMenus',
            payload : {
                children    : children,
                parents     : parents,
                menus       : menus
            }
        })
    }

    async handleDeleteButton(){
        const { dispatch } = this.props;
        let deleteIds = this.props.manageArticles.changes;
        const response = await axios.post(
            'http://localhost:4000/deleteArticlesgetUpdatedList', 
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
        let publishIds = this.props.manageMenus.changes;
        const response = await axios.post(
            'http://localhost:4000/publishMenusgetUpdatedList', 
            {'publishIds' : publishIds, 'active': active});
        console.log(response);
        const { children, parents, menus } = response.data;
        dispatch({
            type : 'menusListManageMenus',
            payload : {
                children    : children,
                parents     : parents,
                menus       : menus
            }
        });
        if(response.status === 200){
            dispatch({
                type : 'alertManageMenus',
                payload : {
                    alertMessage : ' ' + publishIds.length + ' menu(s) succesfully (un)published!'
                }
            });
        }
        this.alertTimeOut(dispatch);
    }

    alertTimeOut(dispatch){
        setTimeout(function() {
            dispatch({
                type :'alertManageMenus', 
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
                {alertMessage !== "" ? <AlertMessage text={alertMessage}/> : ''}

                <div className="row" style={{paddingLeft:10, paddingRight:10}}>

                    <Link type="button" to='/admin' className="btn col btn-dark">Back</Link>

                    <button 
                        type="button" 
                        onClick={()=>{this.handlePublishButton(true)}} 
                        className="btn col btn-primary">
                        Publish
                    </button>

                    <button 
                        type="button" 
                        onClick={()=>{this.handlePublishButton(false)}} 
                        className="btn col btn-primary">    
                        Unpublish
                    </button>

                    <button 
                        type="button" 
                        onClick={this.handleDeleteButton} 
                        className="btn col btn-danger">
                        Delete  
                    </button>

                </div>
                <ManageMenusTable {...this.props}/>
            </Fragment>
        );
    }
}

export default connect(state=> state)(ManageMenus);