import React, { Component, Fragment } from 'react';
import SelectMenuAddArticle from './SelectMenuAddArticle';
import ArticleTextAddArticle from './ArticleTextAddArticle';
import ExtraDetailsAddArticle from './ExtraDetailsAddArticle';
import TextAndLabel from '../elements/TextAndLabel';
import AlertMessage from '../elements/AlertMessage';
import ButtonCustom from '../elements/ButtonCustom';
import axios from 'axios';

class AddArticles extends Component {
    constructor(props){
        super(props);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    async handleSaveChanges(){
        console.log(this.props.addArticle);
        const response = await axios.post("http://localhost:4000/saveAddArticle",this.props.addArticle);
        // const {
        //     title, menuItemName, newMenu, parentItem, selectedMenu, 
        //     createParent, linkId, tags, text1, text2, reference, active, 
        //     checkBoxCreateMenu, addSubItemToParent, checkBoxCreateParent} 
        //     = this.props.AddArticles;
        // const response = await axios.post("http://localhost:4000/mongoose",
        // {   title                   : title,
        //     menuItemName            : menuItemName,
        //     newMenu                 : newMenu,
        //     parentItem              : parentItem,
        //     selectedMenu            : selectedMenu,
        //     createParent            : createParent,
        //     linkId                  : linkId,
        //     tags                    : tags,
        //     text1                   : text1,
        //     text2                   : text2,
        //     reference               : reference,
        //     active                  : active,
        //     checkBoxCreateMenu      : checkBoxCreateMenu,
        //     addSubItemToParent      : addSubItemToParent,
        //     checkBoxCreateParent    : checkBoxCreateParent
        // });
        console.log(response);
    }

    render() {
        const {dispatch, addArticle} = this.props;
        return (
            <Fragment>
            <div style={{maxWidth:"1100px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px'}}>
                    <AlertMessage text='test' />
                    <ButtonCustom text='Save Changes' handleSaveChanges={this.handleSaveChanges} />
                    <ButtonCustom text='Close' type='warning'/><hr/>
                    <TextAndLabel labelName='Title: ' 
                        dispatch={dispatch} 
                        reducerType='titleAddArticle' 
                        value={addArticle.title}/>
                    <TextAndLabel labelName='Item name inside menu: '
                        dispatch={dispatch} 
                        reducerType='menuItemNameAddArticle' 
                        value={addArticle.menuItemName}/>
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
            </div>
            </Fragment>
        );
    }
}

export default AddArticles;