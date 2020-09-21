import React, { Component } from 'react';

class ArticleText2 extends Component {
    render() {
      const {articleContent2} = this.props.article;
        return (
<section className="mbr-section article content1 cid-s4m2VFPgtO" id="content1-7">
            <div className="container">
                <div className="media-container-row">
                    <div className="mbr-text col-12 mbr-fonts-style display-7 col-md-12">
                      <p><strong><br/></strong></p>
                      { 
                        articleContent2.map(par => {return(
                            <p><span style={{fontSize:"1rem"}}>{par.replace(/(::)/,'.')}</span></p>
                        )})
                      }
                      {/* <p><span style={{fontSize:"1rem"}}>{articleContent2}</span></p> */}
                    </div>
                  </div>
              </div>
          </section>
        );
    }
}

export default ArticleText2;