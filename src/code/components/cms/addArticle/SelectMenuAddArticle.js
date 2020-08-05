import React, {Component, Fragment} from 'react';
import DropDown from '../elements/DropDown';
import {connect} from 'react-redux';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';

class SelectMenuAddArticle extends Component {
  render() {
    const {checkBoxCreateMenu, addSubItemToParent, menus, menuItems, checkBoxCreateParent, createParentName} = this.props.addArticle;
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
                  ? 
                  <DropDown items={menus} text='Add item to Parent'/>
                  // <TextAndLabel labelName='Parent item Name: ' 
                  //     dispatch={dispatch} 
                  //     reducerType='parentItemAddArticle' 
                  //     value={addArticle.parentItem}/>
                  : ""}
              </Fragment>
            : <Fragment>
              <DropDown items={menus} text='Add item to Menu'/>
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
                    <DropDown items={menus} text='Add item to Parent'/>
              }
              
            </Fragment>
}
        </div>
      </Fragment>
    );
  }
}

export default connect(state => state)(SelectMenuAddArticle);