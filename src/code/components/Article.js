import React, {Component, Fragment} from 'react';
import TitleShortDetails from './articleComps/TitleShortDetails';
import ArticleText1 from './articleComps/ArticleText1';
import ArticlePicture from './articleComps/ArticlePicture';
import ArticleText2 from './articleComps/ArticleText2';
import ReferenceAndTags from './articleComps/ReferenceAndTags';
import {connect} from 'react-redux';
import Footer from './articleComps/Footer';
import Menu from './Menu';
import axios from 'axios';

class Article extends Component {
  async componentWillMount() {
    //console.log(this.props.match.params)
    const response = await axios.post(process.env.REACT_APP_BACKEND + 'getarticleinfowithmenuitems', {
      'linkId': this.props.match.params.link
    }, {timeout: 5000});
    console.log(response);
    if(response.status === 204){window.location = '/'};
    this
      .props
      .dispatch({
        type: 'updateArticlePageWithMenu',
        payload: {
          menuItems: response.data.articleMenuItems,
          articleInfo: response.data.articleInfo
        }
      })
  }

  render() {
    const {pageContent} = this.props;
    const {params} = this.props.match;
    //console.log(process.env.REACT_APP_BACKEND);
    //console.log(params.link); console.log(this.props.match.path);
    return (
      <Fragment>
        <Menu {...this.props}/>
        <TitleShortDetails article = {pageContent} link = {params.link}/>
        <ArticlePicture article = {pageContent} picNr = {1}/>
        <ArticleText1 article = {pageContent}/>
        {(pageContent.imageName2 !== "") ? <ArticlePicture article = {pageContent} picNr = {2}/> : ""}
        <ArticleText2 article = {pageContent}/>
        <ReferenceAndTags article = {pageContent}/>
        <Footer article = {pageContent}/>
      </Fragment>
    );
  }
}

function mapStateToProps(state){
  return{
      addArticle : state.addArticle
  }
}

export default connect(mapStateToProps)(Article);