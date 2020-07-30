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
        const {params} = this.props.match;
        console.log(params.link);
        //console.log(this.props.match.path)
        return (
            <Fragment>
                <Menu {...this.props}/>
                <TitleShortDetails article={pageContent} link={params.link}/>
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