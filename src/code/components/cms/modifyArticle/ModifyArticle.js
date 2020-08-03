import React, { Component, Fragment } from 'react';
import TextAndLabel from '../elements/TextAndLabel';
import AlertMessage from '../elements/AlertMessage';
import ButtonCustom from '../elements/ButtonCustom';
import ExtraDetailsModifyArticle from '../modifyArticle/ExtraDetailsModifyArticle';
import ArticleTextModifyArticle from './ArticleTextModifyArticle';
import SelectMenuModifyArticle from './SelectMenuModifyArticle';

class ModifyArticle extends Component {
    render() {
        const {link} = this.props.match.params;
        console.log(this.props.modifyArticle); // 31 July
        return (
            <Fragment>
            <div style={{maxWidth:"1100px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px'}}>
                    <AlertMessage text='test' />
                    <ButtonCustom text='Update Changes'/>
                    <ButtonCustom text='Close' type='warning'/><hr/>
                    <TextAndLabel labelName='Title: ' />
                    <TextAndLabel labelName='Item name inside menu: ' />
                    {/* <SelectMenuModifyArticle {...this.props} /> */}
                    <ExtraDetailsModifyArticle />
                    <ArticleTextModifyArticle  label='Text 1'/>
                    <ArticleTextModifyArticle  label='Text 2'/>
            </div>
            </Fragment>
        );
    }
}

export default ModifyArticle;