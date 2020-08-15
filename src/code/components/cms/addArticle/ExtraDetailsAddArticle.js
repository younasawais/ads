import React, { Component, Fragment } from 'react';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';
import UploadMultiPicAddArticle from './UploadMultiPicAddArticle';
import TestUpload from './TestUpload';

class ExtraDetailsAddArticle extends Component {
    render() {
        const {dispatch, addArticle} = this.props;
        return (
            <Fragment>  
                <TextAndLabel 
                        labelName='Tags: ' 
                        dispatch={dispatch} 
                        reducerType='tagsAddArticle' 
                        value={addArticle.tags}/>
                <TextAndLabel 
                        labelName='Reference: '
                        dispatch={dispatch} 
                        reducerType='referenceAddArticle' 
                        value={addArticle.reference} />
                <TextAndCheckbox 
                        checked={addArticle.active}
                        text='Active?'
                        dispatch={dispatch}
                        reducerType='activeAddArticle' />
                <UploadMultiPicAddArticle 
                    dispatch={dispatch} 
                    text1={addArticle.imageName1} text2={addArticle.imageName2} addArticle={addArticle}/>
                <TestUpload />
            </Fragment>
        );
    }
}

export default ExtraDetailsAddArticle;