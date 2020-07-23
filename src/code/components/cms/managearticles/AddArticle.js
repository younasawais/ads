import React, { Component, Fragment } from 'react';
import SelectMenuAddArticle from '../addArticle/SelectMenuAddArticle';
import ArticleTextAddArticle from '../addArticle/ArticleTextAddArticle';
import ExtraDetailsAddArticle from '../addArticle/ExtraDetailsAddArticle';
import TextAndLabel from '../elements/TextAndLabel';
import AlertMessage from '../elements/AlertMessage';
import ButtonCustom from '../elements/ButtonCustom';

class AddArticles extends Component {
    render() {
        return (
            <Fragment>
            <div style={{maxWidth:"1100px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px'}}>
                    <AlertMessage text='test' />
                    <ButtonCustom text='Save Changes'/>
                    <ButtonCustom text='Close' type='warning'/><hr/>
                    <TextAndLabel labelName='Title: ' />
                    <TextAndLabel labelName='Item name inside menu: ' />
                    <SelectMenuAddArticle {...this.props} />
                    <ExtraDetailsAddArticle />
                    <ArticleTextAddArticle label='Text 1'/>
                    <ArticleTextAddArticle label='Text 2'/>
            </div>
            </Fragment>
        );
    }
}

export default AddArticles;