import React, { Component, Fragment } from 'react';
import axios from 'axios';

class UploadMultiPicAddArticle extends Component {
    constructor(props){
        super(props);
        this.state = { selectedFiles : null};
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleSaveFile = this.handleSaveFile.bind(this);
    }

    async handleFileUpload(){
        const data = new FormData();
        for (let i = 0; i < this.state.selectedFiles.length; i++) {
            data.append('file', this.state.selectedFiles[i] )
        }
        const response = await axios.post('http://localhost:4000/uploadTest', data);
        console.log(response);
    }

    handleSaveFile(e){
        this.setState({
            selectedFiles : e.target.files
        });
    }

    render() {
        return (
            <Fragment>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">File</span>
                </div>
                <div className="custom-file">
                    <input 
                        onChange={this.handleSaveFile} 
                        type="file"
                        multiple
                        className="custom-file-input" 
                        id="inputGroupFile01"/>
                    <label className="custom-file-label" >Test upload</label>
                </div>
                <button onClick={this.handleFileUpload}>confirm upload</button>
            </div>
            </Fragment>
        );
    }
}

export default UploadMultiPicAddArticle;