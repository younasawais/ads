import React, { Component, Fragment } from 'react';
import InputText from './InputText';
import UploadPicAddArticle from './UploadPicAddArticle';
import TextAndLabel from '../elements/TextAndLabel';

class ExtraDetailsAddArticle extends Component {
    render() {
        return (
            <Fragment>  
                <TextAndLabel labelName='Link ID: ' />
                <TextAndLabel labelName='Tags: ' />
                <TextAndLabel labelName='Reference: ' />
                <p>Active?</p>
                <input type="checkbox"/> 
                <UploadPicAddArticle text={'Upload 1'}/>
                <UploadPicAddArticle text={'Upload 2'}/>
            </Fragment>
        );
    }
}

export default ExtraDetailsAddArticle;