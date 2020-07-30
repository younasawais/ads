import React, { Component, Fragment } from 'react';
import UploadPicModifyArticle from './UploadPicModifyArticle';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';

class ExtraDetailsModifyArticle extends Component {
    render() {
        return (
            <Fragment>  
                <TextAndLabel labelName='Link ID: ' />
                <TextAndLabel labelName='Tags: ' />
                <TextAndLabel labelName='Reference: ' />
                <TextAndCheckbox text='Active?'/>
                <UploadPicModifyArticle text={'Upload 1'}/>
                <UploadPicModifyArticle text={'Upload 2'}/>
            </Fragment>
        );
    }
}

export default ExtraDetailsModifyArticle;