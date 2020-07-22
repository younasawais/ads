import React, { Component, Fragment } from 'react';

class UploadPicAddArticle extends Component {
    render() {
        const {text} = this.props;
        return (
            <Fragment>     
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">File</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                        <label class="custom-file-label" for="inputGroupFile01">{text}</label>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UploadPicAddArticle;