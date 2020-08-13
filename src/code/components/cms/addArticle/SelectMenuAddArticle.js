import React, {Component, Fragment} from 'react';
import DropDown from '../elements/DropDown';
import {connect} from 'react-redux';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';
import axios from 'axios';

class SelectMenuAddArticle extends Component {
  async componentWillMount(){
    const response = await axios.post("http://localhost:4000/addArticleMenuData",'Send me menu data');
    this.props.dispatch(
      {type : 'updateMenuAddArticle', 
      payload : { menus : response.data }})
    //console.log(response.data);
  }

  render() {
    const {checkBoxCreateMenu, menus, checkBoxCreateParent} = this.props.addArticle;
    const {dispatch, addArticle} = this.props;

    return (
      <Fragment>
        <div className='createNewMenu'>
          <TextAndCheckbox
            checked={checkBoxCreateMenu}
            text='Create new Menu? '
            dispatch={this.props.dispatch}
            reducerType='createNewMenu'/>
          {checkBoxCreateMenu
            ? <Fragment>
                <TextAndLabel labelName='Menu Name: ' 
                    dispatch={dispatch} 
                    reducerType='newMenuAddArticle' 
                    value={addArticle.newMenu}/>
              </Fragment>
            : <Fragment>
              <DropDown items={menus} reducerType='selectMenuAddArticle' text={addArticle.selectedMenu}/>
              <TextAndCheckbox
                checked={checkBoxCreateParent}
                text='Create new Parent?'
                dispatch={dispatch}
                reducerType='checkBoxCreateParentAddArticle'/>
              { checkBoxCreateParent ? 
                <TextAndLabel labelName='Parent item Name: '
                    dispatch={dispatch} 
                    reducerType='createParentAddArticle' 
                    value={addArticle.createParent}/> :
                    <DropDown items={addArticle.currentParents} reducerType='parentItemAddArticleSelected' text={addArticle.parentItemSelected}/>
              }
            </Fragment>}
        </div>
      </Fragment>
    );
  }
}

export default connect(state => state)(SelectMenuAddArticle);