import React, {Component, Fragment} from 'react';
import DropDown from '../elements/DropDown';
import {connect} from 'react-redux';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';

class SelectMenuAddArticle extends Component {
  render() {
    const {checkBoxCreateMenu, addSubItemToParent, menus, menuItems} = this.props.addArticle;
    const {dispatch, addArticle} = this.props;
    return (
      <Fragment>
        <div className='createNewMenu'>
          <TextAndCheckbox
            checked={checkBoxCreateMenu}
            text='Create new Menu? '
            dispatch={this.props.dispatch}
            reducerType='createNewMenu'/> {/* <TextAndCheckbox handleFunction={this.createNewMenu} text='Create new Menu? ' /> */}
          {checkBoxCreateMenu
            ? <Fragment>
                <TextAndLabel labelName='Menu Name: ' 
                    dispatch={dispatch} 
                    reducerType='newMenuAddArticle' 
                    value={addArticle.newMenu}/>
                <TextAndLabel labelName='Menu Item name: ' 
                    dispatch={dispatch} 
                    reducerType='menuItemAddArticle' 
                    value={addArticle.menuItem}/>
                <TextAndCheckbox
                  checked={addSubItemToParent}
                  text='Add as a subitem?'
                  dispatch={dispatch}
                  reducerType='addSubItemToParent'/> {/* <TextAndCheckbox handleFunction={this.addSubItemToParent} text='Add as a subitem?' /> */}
                {addSubItemToParent
                  ? 
                  <TextAndLabel labelName='SubItem Name: ' 
                      dispatch={dispatch} 
                      reducerType='subItemAddArticle' 
                      value={addArticle.subItem}/>
                  : ""}
              </Fragment>
            : <Fragment>
              <DropDown items={menus} text='Add item to Menu'/>
              <TextAndCheckbox
                checked={addSubItemToParent}
                text='Add as a subitem?'
                dispatch={dispatch}
                reducerType='addSubItemToParent'/> {/* <TextAndCheckbox text='Add as a subItem?' /> */}
                {addSubItemToParent ? <DropDown items={menuItems} text='Add subItem to'/> : ""}
              
            </Fragment>
}
        </div>
      </Fragment>
    );
  }
}

export default connect(state => state)(SelectMenuAddArticle);