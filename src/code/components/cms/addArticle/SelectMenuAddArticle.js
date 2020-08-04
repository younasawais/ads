import React, {Component, Fragment} from 'react';
import DropDown from '../elements/DropDown';
import {connect} from 'react-redux';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';

class SelectMenuAddArticle extends Component {
  render() {
    const {checkBoxCreateMenu, addSubItemToNewMenu, menus, menuItems} = this.props.addArticle;
    const {dispatch} = this.props;
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
                <TextAndLabel labelName='Menu Name: '/>
                <TextAndLabel labelName='Menu Item name: '/>
                <TextAndCheckbox
                  checked={addSubItemToNewMenu}
                  text='Add as a subitem?'
                  dispatch={dispatch}
                  reducerType='addSubItemToNewMenu'/> {/* <TextAndCheckbox handleFunction={this.addSubItemToNewMenu} text='Add as a subitem?' /> */}
                {addSubItemToNewMenu
                  ? <TextAndLabel labelName='SubItem Name: '/>
                  : ""}
              </Fragment>
            : <Fragment>
              <DropDown items={menus} text='Add item to Menu'/>
              <TextAndCheckbox
                checked={addSubItemToNewMenu}
                text='Add as a subitem?'
                dispatch={dispatch}
                reducerType='addSubItemToNewMenu'/> {/* <TextAndCheckbox text='Add as a subItem?' /> */}
              <DropDown items={menuItems} text='Add subItem to'/>
            </Fragment>
}
        </div>
      </Fragment>
    );
  }
}

export default connect(state => state)(SelectMenuAddArticle);