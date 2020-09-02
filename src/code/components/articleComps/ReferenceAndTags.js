import React, { Component } from 'react';

class ReferenceAndTags extends Component {
    render() {
        const {articleTags, articleReference} = this.props.article;
        return (
            <section className="mbr-section content4 cid-s4p9QCcNtp" id="content4-9">
            <div className="container">
                <div className="media-container-row">
                    <div className="title col-12 col-md-8">
                        <h2 className="align-center pb-3 mbr-fonts-style display-7"><strong>
                            Reference book:</strong> '{articleReference}'</h2>
                        <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-7"><strong>
                            Tags</strong>:  
                            {articleTags.map(tag => {
                                return(' ' + tag + ', ')
                            })}
                            </h3>
                    </div>
                </div>
            </div>
          </section>
        );
    }
}

export default ReferenceAndTags;