import React, { Component, Fragment } from 'react';
import axios from 'axios';

class TestUpload extends Component {
    constructor(props){
        super(props);
        this.state = { 
            imageName1  : '',
            imageName2  : '',
            imageData   : null
        };
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleSaveFile = this.handleSaveFile.bind(this);
    }

    async handleFileUpload(){
        const response = await axios.post('http://localhost:4000/uploadTest2', this.state.imageData);
        console.log(response);
    }

    handleSaveFile(e){
        const { files } = e.target;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('files', files[i] )
        }
        
        data.append('test', '2345');
        
        if(files.length > 1){
            this.setState({
                imageName1  : files[0].name,
                imageName2  : files[1].name,
                imageData   : data
            });
        }else{
            this.setState({
                imageName1  : files[0].name,
                imageData   : data
            });
        }

    }

    render() {
        const {imageName1, imageName2} = this.state;
        const bothTexts = imageName1 + '; ' + imageName2
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
                        {imageName2 !== "" ? 
                            <label className="custom-file-label" >{bothTexts}</label> :
                            <label className="custom-file-label" >{imageName1}</label>}
                </div>
                <button onClick={this.handleFileUpload}>confirm upload</button>
            </div>
            </Fragment>
        );
    }
}

export default TestUpload;