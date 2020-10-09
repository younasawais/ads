import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class TitleShortDetails extends Component {

    render() {
        const {articleTitle, articleTitle2} = this.props.article;
        return (
            <section className="mbr-section content4 cid-s4p9RW4dTj" id="content4-a">  
            <Helmet>
            <meta charSet="utf-8" />
            <title>{articleTitle}</title>
            </Helmet>
            <div className="container">
                <div className="media-container-row">
                    <div className="title col-12 col-md-8">
                        <h2 className="align-center pb-3 mbr-fonts-style display-2"><strong>{articleTitle}</strong></h2>
                        <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                            {articleTitle2}</h3>
                            {/* <h2>{this.props.link}</h2> */}
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default TitleShortDetails;


 