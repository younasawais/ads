import React, { Component } from 'react';

class TitleShortDetails extends Component {

    render() {
        const {articleTitle, articleTitle2} = this.props.article;
        let test = '<p>this is a test</p><hr><p>next line</p>';
        return (
            <section class="mbr-section content4 cid-s4p9RW4dTj" id="content4-a">  
            <div className="container">
                <div className="media-container-row">
                    <div className="title col-12 col-md-8">
                        <h2 className="align-center pb-3 mbr-fonts-style display-2"><strong>{articleTitle}</strong></h2>
                        <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                            {articleTitle2}</h3>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default TitleShortDetails;


 