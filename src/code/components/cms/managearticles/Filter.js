import React, { Component } from 'react';
import {connect} from 'react-redux';
import DropDown from '../elements/DropDown';
import TextAndCheckbox from '../elements/TextAndCheckbox';
import TextAndLabel from '../elements/TextAndLabel';

class Filter extends Component {
    constructor(props){
        super(props);

    }

    render() {
        if(this.props.manageArticles)
        return (
            <div className="container" style={{maxWidth: '97%'}}>
                <div className="row">
                    {/* <div className="col">
                        <TextAndCheckbox
                        name='filterParents' 
                        reducerType='filterCheckBoxTrigger'
                        checked={this.props.manageArticles.filterParents}
                        text="Parents?"/>
                    </div>
                    <div className="col">
                        <TextAndCheckbox 
                        text="Children?"
                        name='filterChildren'
                        checked={this.props.manageArticles.filterChildren}
                        reducerType='filterCheckBoxTrigger'/>
                    </div> */}
                    <div className="col">
                        <DropDown 
                        items={['Children', 'Parents', 'All']} 
                        reducerType='childParentSelect'
                        defaultText='All'
                        text='Type?'/>
                    </div>
                    <div className="col">
                        <DropDown 
                        items={['Published', 'Not published', 'All']} 
                        reducerType='publishStatusSelect'
                        defaultText='All'
                        text='Published?'/>
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
        manageArticles : state.manageArticles
    }
  }
  
  export default connect(mapStateToProps)(Filter);