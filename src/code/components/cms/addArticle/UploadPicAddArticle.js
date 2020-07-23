import React, { Component, Fragment } from 'react';

class UploadPicAddArticle extends Component {
    render() {
        const {text} = this.props;
        return (
            <Fragment>     
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">File</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                        <label className="custom-file-label" >{text}</label>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UploadPicAddArticle;