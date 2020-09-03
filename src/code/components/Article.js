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
  constructor(props) {
    super(props);
    //this.handleAxios = this.handleAxios.bind(this);
  }

  async componentWillMount() {
    console.log(this.props.match.params)
    const response = await axios.post('http://localhost:4000/getarticleinfowithmenuitems', {
      'linkId': this.props.match.params.link
    }, {timeout: 20000});
    console.log(response);
    this
      .props
      .dispatch({
        type: 'updateArticlePageWithMenu',
        payload: {
          menuItems: response.data.articleMenuItems,
          articleInfo: response.data.articleInfo
        }
      })
    console.log(response);
  }

  // componentWillReceiveProps(nextProps) {     // You don't have to do this check
  // first, but it can help prevent an unneeded render     if
  // (nextProps.startTime !== this.state.startTime) {       this.setState({
  // startTime: nextProps.startTime });     }   } async componentDidUpdate(){
  // console.log(this.props);     const response = await
  // axios.post('http://localhost:4000/getarticleinfo', {         'linkId' :
  // this.props.match.params.link     }, {timeout : 20000});
  // console.log(this.props);     this.props.dispatch({         type:
  // 'updateArticlePage',         payload : {             val :
  // response.data.articleMenuItems,             articleInfo :
  // response.data.articleInfo         }     })     console.log(response); }

  render() {
    const {pageContent} = this.props;
    const {params} = this.props.match;
    //console.log(params.link); console.log(this.props.match.path);
    return (
      <Fragment>
        <Menu {...this.props}/>
        <TitleShortDetails article={pageContent} link={params.link}/> {/* <button onClick={this.handleAxios}>Test Axios</button> */}
        <ArticleText1 article={pageContent}/>
        <ArticlePicture article={pageContent}/>
        <ArticleText2 article={pageContent}/>
        <ReferenceAndTags article={pageContent}/>
        <Footer article={pageContent}/>
      </Fragment>
    );
  }
}

export default connect(state => state)(Article);