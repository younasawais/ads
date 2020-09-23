import React, { Component } from 'react';
import {connect} from 'react-redux';
import DropDown from '../elements/DropDown';
import TextAndCheckbox from '../elements/TextAndCheckbox';
import TextAndLabel from '../elements/TextAndLabel';

class Filter extends Component {
    render() {
        return (
            <div className="container" style={{maxWidth: '97%'}}>
                <div className="row">
                    <div className="col">
                        <TextAndCheckbox text="Active?"/>
                    </div>
                    <div className="col">
                        <TextAndCheckbox text="Parents?"/>
                    </div>
                    <div className="col">
                        <TextAndCheckbox text="Children?"/>
                    </div>
                    <div className="col">
                        <DropDown 
                        items={['Menu 1', 'Menu 2', 'Menu 3']} 
                        reducerType='selectedMenuAddArticle'
                        defaultText='menu'
                        text={'Select menu'}/>
                    </div>
                    <div className="col">
                        <TextAndLabel labelName={'From :'} placeholder={'YYYY/MM/DD'}/>
                    </div>
                    <div className="col">
                        <TextAndLabel labelName={'Till :'} placeholder={'YYYY/MM/DD'}/>
                    </div>
                    <div className="col">
                        <TextAndLabel labelName={'From :'} placeholder={'HH/MM/SS'}/>
                    </div>
                    <div className="col">
                        <TextAndLabel labelName={'Till :'} placeholder={'HH/MM/SS'}/>
                    </div>
                </div>
            </div>
        );  
    }
}

function mapStateToProps(state){
    return{
        addArticle : state.addArticle
    }
  }
  
  export default connect(mapStateToProps)(Filter);