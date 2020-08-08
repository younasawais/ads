import React, {Component, Fragment} from 'react';
import DropDown from '../elements/DropDown';
import {connect} from 'react-redux';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';

class SelectMenuAddArticle extends Component {
  render() {
    const {checkBoxCreateMenu, addSubItemToParent, menus, checkBoxCreateParent,} = this.props.addArticle;
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
                <TextAndLabel labelName='Menu Item name: ' 
                    dispatch={dispatch} 
                    reducerType='menuItemAddArticle' 
                    placeholder='auto generated'
                    value={addArticle.menuItem}/>
                <hr/>
                <TextAndCheckbox
                  checked={addSubItemToParent}
                  text='Add as a subitem?'
                  dispatch={dispatch}
                  reducerType='addSubItemToParent'/> 
                {addSubItemToParent
                  ? <DropDown items={addArticle.currentParents} reducerType='parentItemAddArticle' text={addArticle.parentItem}/>: ""}
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
                    <DropDown items={addArticle.currentParents} reducerType='parentItemAddArticle' text={addArticle.parentItem}/>
              }
              
            </Fragment>
}
        </div>
      </Fragment>
    );
  }
}

export default connect(state => state)(SelectMenuAddArticle);