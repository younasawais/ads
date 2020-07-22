import React, { Component, Fragment } from 'react';
import InputText from './InputText';
import DropDownAddArticle from './DropDownAddArticle';

class SelectMenuAddArticle extends Component {
    render() {
        return (
            <Fragment>
                <div classNameName='createNewMenu'>
                    <div></div>
                    <p>Create new Menu?</p>
                    <input type="checkbox"/><hr/><br/>
                    <p>Menu Name</p>
                    <InputText placeHolder='Menu Name'/><hr/><br/>
                    <p>Menu item name</p>
                    <InputText placeHolder='Menu Item name'/><hr/><br/>
                    <p>Add as a subitem?</p>
                    <input type="checkbox"/>
                    <p>Menu subItem name</p>
                    <InputText placeHolder='SubItem Name'/><hr/><br/>
                </div>
                <p>Add item to menu</p>
                <DropDownAddArticle />
                <div style={{display:'flex'}}>
                    <p>Add as a subItem?</p>
                    <input style={{margin: '5px 0 0 10px'}} type="checkbox"/>
                </div>
                <p>Menu item name for adding sub item</p>
                <DropDownAddArticle />
            </Fragment>
        );
    }
}

export default SelectMenuAddArticle;