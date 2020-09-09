import React, { Component, Fragment } from 'react';

class UploadMultiPicAddArticle extends Component {
    constructor(props){
        super(props);
        this.state = { selectedFiles : null};
        //this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleSaveFile = this.handleSaveFile.bind(this);
    }

    // async handleFileUpload(){
    //     const response = await axios.post(process.env.REACT_APP_BACKEND + 'uploadTest', data);
    //     console.log(response);
    // }

    handleSaveFile(e){
        const {dispatch} = this.props;
        const { files } = e.target;
        //console.log(files);
        let image1;
        let image2;
        if((typeof files[0]) === 'undefined'){image1 = ''}else{image1 = files[0].name};
        if((typeof files[1]) === 'undefined'){image2 = ''}else{image2 = files[1].name};
        
        
        dispatch({
            type: 'selectedImagesNames',
            payload: {
                imageName1  : image1,
                imageName2  : image2,
                files       : files}
        })
    }

    render() {
        const {text1, text2} = this.props;
        const bothTexts = text1 + '; ' + text2;
        return (
            <Fragment>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Pictures: </span>
                </div>
                <div className="custom-file">
                    <input 
                        onChange={this.handleSaveFile} 
                        type="file"
                        multiple
                        className="custom-file-input" 
                        id="inputGroupFile01"/>
                        {text2 !== "" ? 
                            <label className="custom-file-label" >{bothTexts}</label> :
                            <label className="custom-file-label" >{text1}</label>
                        }
                </div>
                {/* <button onClick={this.handleFileUpload}>confirm upload</button> */}
            </div>
            </Fragment>
        );
    }
}

UploadMultiPicAddArticle.defaultProps = {
    type: "primary",
    link : false,
}

export default UploadMultiPicAddArticle;