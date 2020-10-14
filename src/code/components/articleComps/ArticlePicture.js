import React, { Component } from 'react';

class ArticlePicture extends Component {
    render() {
        const {imageName1, imageName2} = this.props.article;
        const { picNr } = this.props;
        // console.log(this.props);
        // console.log(imageName1);
        // console.log(imageName2);
        
        return (
            <section className="cid-s4pgQoHVVp" id="image4-b">
            <div className="container images-container">
                <div className="media-container-row" style={{width: "80%"}}>
                    {(picNr === 1) ? 
                    
                    <div className="img-item item1" style={{width: '177%'}}>
                        {(imageName1 !== "") ? <img alt='' src={process.env.REACT_APP_PICTURES + imageName1}/> : ""}                            
                    </div>
                    :
                    <div className="img-item">
                        {(imageName2 !== "") ? <img alt='' src={process.env.REACT_APP_PICTURES + imageName2}/> : ""}
                    </div>
                    }
                </div>
                    {/* <div className="media-container-row" style={{width: "80%"}}>
                        <div className="img-item item1" style={{width: '177%'}}>
                            {(imageName1 !== "") ? <img alt='' src={process.env.REACT_APP_BACKEND + "images/" + imageName1}/> : ""}                            
                        </div>
                        <div className="img-item">
                            {(imageName2 !== "") ? <img alt='' src={process.env.REACT_APP_BACKEND + "images/" + imageName2}/> : ""}
                        </div>
                    </div> */}
            </div>
        </section>
        );
    }
}

export default ArticlePicture;