import React, { Component, Fragment } from 'react';
import SelectMenuAddArticle from '../addArticle/SelectMenuAddArticle';
import ArticleTextAddArticle from '../addArticle/ArticleTextAddArticle';
import InputText from '../addArticle/InputText';
import ExtraDetailsAddArticle from '../addArticle/ExtraDetailsAddArticle';

class AddArticles extends Component {
    render() {
        return (
            <Fragment>
            <div style={{maxWidth:"1100px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px'}}>
                <div className="alert alert-success" role="alert">
                    Article created succesfully (TODO: add error alert)
                </div>
                <div>
                    <button type="button" className="btn btn-primary">Save Changes</button>
                    <button type="button" className="btn btn-warning">Close</button>
                </div><hr/>
                <div>
                    <p>Title :</p>
                    <InputText placeHolder='Title:' />
                    <p>Item name inside menu:</p>
                    <InputText placeHolder='Menu Item name' />
                </div>
                    <SelectMenuAddArticle />
                    <ExtraDetailsAddArticle />
                    <ArticleTextAddArticle label='Text 1'/>
                    <ArticleTextAddArticle label='Text 2'/>
            </div>
            </Fragment>
        );
    }
}

export default AddArticles;