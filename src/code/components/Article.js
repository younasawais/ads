import React, { Component, Fragment } from 'react';
import TitleShortDetails from './articleComps/TitleShortDetails';
import ArticleText1 from './articleComps/ArticleText1';
import ArticlePicture from './articleComps/ArticlePicture';
import ArticleText2 from './articleComps/ArticleText2';
import ReferenceAndTags from './articleComps/ReferenceAndTags';
import Footer from './articleComps/Footer';
import Menu from './Menu';

class Article extends Component {
    render() {
        const {pageContent} = this.props;
        console.log(this.props);
        //console.log(this.props.match.path)
        return (
            <Fragment>
                <Menu {...this.props}/>
                <TitleShortDetails article={pageContent} path={this.props.match.path}/>
                <ArticleText1 article={pageContent}/>
                <ArticlePicture article={pageContent}/>
                <ArticleText2 article={pageContent}/>
                <ReferenceAndTags article={pageContent}/>
                <Footer article={pageContent}/>
            </Fragment>
        );
    }
}

export default Article;