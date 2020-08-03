import React, { Component, Fragment } from 'react';
import TitleShortDetails from './articleComps/TitleShortDetails';
import ArticleText1 from './articleComps/ArticleText1';
import ArticlePicture from './articleComps/ArticlePicture';
import ArticleText2 from './articleComps/ArticleText2';
import ReferenceAndTags from './articleComps/ReferenceAndTags';
import Footer from './articleComps/Footer';
import Menu from './Menu';
import axios from 'axios';


class Article extends Component {
    constructor(props){
        super(props);
        this.handleAxios = this.handleAxios.bind(this);
    }

    async handleAxios(){
        //const response = await axios.post("http://localhost:4000/");
        const response = await axios.post("http://localhost:4000/mongoose",
        {   name: 'Title name is here',
            id          : '0215447',
            text1       : 'Some sample text for the first part',
            text2       : 'sample text for second part',
            pic1        : 'picName1',
            pic2        : 'picName2',
            tags        : ['Tag1', 'Tag2', 'Tag3'],
            reference   : 'Book: The islamic world'
        });
        console.log(response);
    }

    render() {
        const {pageContent} = this.props;
        const {params} = this.props.match;
        //console.log(params.link);
        //console.log(this.props.match.path);
        return (
            <Fragment>
                <Menu {...this.props}/>
                <TitleShortDetails article={pageContent} link={params.link}/>
                <button onClick={this.handleAxios}>Test Axios</button>
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