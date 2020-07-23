import React, { Component } from 'react';

class ArticleTextAddArticle extends Component {
    render() {

        return (
            <div>
                    <div className="form-group">
                    <label >{this.props.label}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>   
            </div>
        );
    }
}

export default ArticleTextAddArticle;