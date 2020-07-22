import React, { Component } from 'react';

class ArticleTextAddArticle extends Component {
    render() {

        return (
            <div>
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">{this.props.label}</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>   
            </div>
        );
    }
}

export default ArticleTextAddArticle;