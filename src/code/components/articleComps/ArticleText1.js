import React, { Component } from 'react';

class ArticleText1 extends Component {
    render() {
        const {articleContent1} = this.props.article;
        return (
            <section className="mbr-section article content1 cid-s4ph3iTfV8" id="content1-c">
            <div className="container">
                <div className="media-container-row">
                    <div className="mbr-text col-12 mbr-fonts-style display-7 col-md-12"><p>
                        <span style={{fontSize:'1rem'}}>{articleContent1}</span></p>
                    </div>
                </div>
            </div>
          </section>
        );
    }
}

export default ArticleText1;

//style={{fontFfamily: "Squada One"}}