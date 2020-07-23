import React, { Component, Fragment } from 'react';
import InputText from './InputText';
import DropDownAddArticle from './DropDownAddArticle';
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
        const {checkBoxCreateMenu, addSubItemToNewMenu} = this.props.addNewArticle;
        return (
            <Fragment>
                <div className='createNewMenu'>
                    <TextAndCheckbox handleFunction={this.createNewMenu} text='Create new Menu? ' />
                    {checkBoxCreateMenu ? 
                    <Fragment>
                        <TextAndLabel labelName='Menu Name: '/>
                        <TextAndLabel labelName='Menu Item name: '/>
                        <TextAndCheckbox handleFunction={this.addSubItemToNewMenu} text='Add as a subitem?' />
                        {addSubItemToNewMenu ? 
                        <Fragment>
                            <TextAndLabel labelName='SubItem Name: '/><hr/>
                        </Fragment>: ""}
                    </Fragment>
                    :
                    <Fragment>
                        <p>Add item to menu</p>
                        <DropDownAddArticle />
                        <div style={{display:'flex'}}>
                            <p>Add as a subItem?</p>
                            <input style={{margin: '5px 0 0 10px'}} type="checkbox"/>
                        </div>
                        <p>Menu item name for adding sub item</p>
                        <DropDownAddArticle />
                    </Fragment>
                }
                </div>
                
            </Fragment>
        );
    }
}

export default connect(state=>state)(SelectMenuAddArticle);