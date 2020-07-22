import React, { Component, Fragment } from 'react';
import InputText from './InputText';
import UploadPicAddArticle from './UploadPicAddArticle';

class ExtraDetailsAddArticle extends Component {
    render() {
        return (
            <Fragment>  
                <p>Link ID</p>
                <InputText placeholder='Link ID' />
                <p>Tags</p>
                <InputText placeholder='Tags' />
                <p>Reference</p>
                <InputText placeholder='Reference' />
                <p>Active?</p>
                <input type="checkbox"/> 
                <UploadPicAddArticle text={'Upload 1'}/>
                <UploadPicAddArticle text={'Upload 2'}/>
            </Fragment>
        );
    }
}

export default ExtraDetailsAddArticle;