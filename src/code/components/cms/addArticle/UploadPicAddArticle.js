import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class UploadPicAddArticle extends Component {
    constructor(props){
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    async handleFileUpload(e){
        console.log(e.target.files[0]);
        let selectedFile = e.target.files[0];
        const data = new FormData();
        data.append('file', selectedFile, selectedFile.name);
        const response = await Axios.post('http://localhost:4000/uploadTest', data);
        console.log(response);
    }

    render() {
        const {text} = this.props;
        return (
            <Fragment>     
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">File</span>
                    </div>
                    <div className="custom-file">
                        <input onChange={this.handleFileUpload} type="file" className="custom-file-input" id="inputGroupFile01"/>
                        <label className="custom-file-label" >{text}</label>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UploadPicAddArticle;