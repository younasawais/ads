import React, { Component, Fragment } from 'react';
import InputText from './InputText';
import DropDown from '../elements/DropDown';
import { connect } from 'react-redux';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';

class SelectMenuAddArticle extends Component {
    constructor(props){
        super(props);
        this.createNewMenu          = this.createNewMenu.bind(this);    
        this.addSubItemToNewMenu    = this.addSubItemToNewMenu.bind(this);      
    }

    createNewMenu(e){
//        console.log(e);
        if (e.target.checked) {
            this.props.dispatch({
                type: 'createNewMenu',
                payload:{
                    val : true
                }
            })
        }else if(!e.target.checked){
            this.props.dispatch({
                type: 'createNewMenu',
                payload:{
                    val : false
                }
            })
        }
    }
    addSubItemToNewMenu(e){
        if (e.target.checked) {
            this.props.dispatch({
                type: 'addSubItemToNewMenu',
                payload:{
                    val : true
                }
            })
        }else if(!e.target.checked){
            this.props.dispatch({
                type: 'addSubItemToNewMenu',
                payload:{
                    val : false
                }
            })
        }
    }

    render() {
        const {checkBoxCreateMenu, addSubItemToNewMenu, menus, menuItems} = this.props.addArticle;
        return (
            <Fragment>
                <div className='createNewMenu'>
                    <TextAndCheckbox handleFunction={this.createNewMenu} text='Create new Menu? ' />
                    {checkBoxCreateMenu ? 
                    <Fragment>
                        <TextAndLabel labelName='Menu Name: '/>
                        <TextAndLabel labelName='Menu Item name: '/>
                        <TextAndCheckbox handleFunction={this.addSubItemToNewMenu} text='Add as a subitem?' />
                        {addSubItemToNewMenu ? <TextAndLabel labelName='SubItem Name: '/> : ""}
                    </Fragment>
                    :
                    <Fragment>
                        <DropDown items={menus} text='Add item to Menu' />
                        <TextAndCheckbox text='Add as a subItem?' />
                        <DropDown items={menuItems} text='Add subItem to' />
                    </Fragment>
                    }
                </div>
            </Fragment>
        );
    }
}

export default connect(state=>state)(SelectMenuAddArticle);