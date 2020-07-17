import React, { Component, Fragment } from 'react';
import TitleShortDetails from './articleComps/TitleShortDetails';
import ArticleText1 from './articleComps/ArticleText1';
import ArticlePicture from './articleComps/ArticlePicture';
import ArticleText2 from './articleComps/ArticleText2';
import ReferenceAndTags from './articleComps/ReferenceAndTags';
import Footer from './articleComps/Footer';

class Article extends Component {
    render() {
        const {article} = this.props;
        //console.log(this.props.match.path)
        return (
            <Fragment>
                {/* <p>{link}</p> */}
                <TitleShortDetails article={article} path={this.props.match.path}/>
                <ArticleText1 article={article}/>
                <ArticlePicture article={article}/>
                <ArticleText2 article={article}/>
                <ReferenceAndTags article={article}/>
                <Footer article={article}/>
            </Fragment>
        );
    }
}

export default Article;