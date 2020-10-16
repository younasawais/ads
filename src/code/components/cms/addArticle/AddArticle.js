import React, { Component, Fragment } from 'react';
import SelectMenuAddArticle from './SelectMenuAddArticle';
import ArticleTextAddArticle from './ArticleTextAddArticle';
import ExtraDetailsAddArticle from './ExtraDetailsAddArticle';
import TextAndLabel from '../elements/TextAndLabel';
import AlertMessage from '../elements/AlertMessage';
import ButtonCustom from '../elements/ButtonCustom';
import {connect} from 'react-redux';
import {checkCredentials} from '../../generalFunctions';
import axios from 'axios';

class AddArticle extends Component {
    constructor(props){
        super(props);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.alertTimeOut       = this.alertTimeOut.bind(this);
    }

    async componentWillMount(){
        checkCredentials()
    }

    async handleSaveChanges(){
        const {title, menuItemName, files} = this.props.addArticle;
        const {dispatch,addArticle} = this.props;
        // let ObjWithoutPic = {...this.props.addArticle};
        // delete ObjWithoutPic.imageData;
        const data = new FormData();
        try {
            for (let i = 0; i < files.length; i++) {
                data.append('file', files[i] )}    
        } catch (error) {
            //console.log(error);
        }
    
        let addArticleValues = [];
        let addArticleProps  = [];

        for(let key in addArticle) {
            addArticleValues.push(addArticle[key]);
            addArticleProps.push(key);
        }
        console.log(addArticleValues);
        console.log(addArticleProps);

        for (let i = 0; i < addArticleProps.length; i++) {
            data.append(addArticleProps[i], addArticleValues[i]);
        }

        if(title !== '' || menuItemName !== ''){
            const response = await axios.post(process.env.REACT_APP_BACKEND + 'addArticleData', data, {timeout: 10000});
            console.log(response);
            if(response.status === 200){
                console.log(response.data);
                dispatch({
                type :'updateAlertAddArticle', 
                payload : {
                    input : 'Item succesfully added, check console for details. ',
                    alertType : 'success',
                    menus : response.data.resultAddMenu,
                    parentArticles : response.data.resultaddArticle
                }
            });
                this.alertTimeOut(dispatch);
            }
        }else{  dispatch({
                type :'updateAlertAddArticle', 
                payload : {
                    input : 'Check Title and/or menu item name',
                    alertType : 'warning'
                }
            });
            this.alertTimeOut(dispatch);
        }
    }

    alertTimeOut(dispatch){
        setTimeout(async function() {
            const response = await axios.post(process.env.REACT_APP_BACKEND + "addArticleMenuData");
            const {menus, parentArticles} = response.data;
            console.log(menus);
            console.log(parentArticles);
            dispatch({
                type :'updateAlertAddArticleSuccessful', 
                payload : {
                    input : '',
                    alertType : '',
                    menus : menus,
                    parentArticles: parentArticles
                }
            });
        }, 3000);        
    }

    render() {
        const {dispatch, addArticle} = this.props;
        return (
            <Fragment>
            <div style={{maxWidth:"1100px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px'}}>
                    {(addArticle.statusArticle !== '') ? <AlertMessage text={addArticle.statusArticle} type={addArticle.alertType} /> : '' }
                    
                    <ButtonCustom text='Save Changes' handleSaveChanges={this.handleSaveChanges} />

                    <ButtonCustom text='Close' type='warning' link='/manage-articles'/><hr/>

                    <TextAndLabel labelName='Title: ' 
                        dispatch={dispatch} 
                        reducerType='titleAddArticle' 
                        value={addArticle.title}/>

                    <TextAndLabel labelName='Item name inside menu: '
                        dispatch={dispatch} 
                        reducerType='menuItemNameAddArticle' 
                        value={addArticle.menuItemName}/>

                    <TextAndLabel labelName='Short detail: ' 
                        dispatch={dispatch} 
                        reducerType='title2AddArticle' 
                        value={addArticle.title2}/>

                    <SelectMenuAddArticle {...this.props} />

                    <ExtraDetailsAddArticle {...this.props} />

                    <ArticleTextAddArticle label='Text 1'
                        dispatch={dispatch} 
                        reducerType='text1AddArticle' 
                        value={addArticle.text1}/>

                    <ArticleTextAddArticle label='Text 2'
                        dispatch={dispatch} 
                        reducerType='text2AddArticle' 
                        value={addArticle.text2}/>

                    {(addArticle.statusArticle !== '') ? 
                        <AlertMessage 
                            text={addArticle.statusArticle} 
                            type={addArticle.alertType} /> : '' }

                    <ButtonCustom text='Save Changes' handleSaveChanges={this.handleSaveChanges} />

                    <ButtonCustom text='Close' type='warning' link='/manage-articles' />
            </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        addArticle : state.addArticle
    }
}

export default connect(mapStateToProps)(AddArticle);