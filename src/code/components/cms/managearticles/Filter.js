import React, { Component } from 'react';
import {connect} from 'react-redux';
import DropDown from '../elements/DropDown';
import TextAndCheckbox from '../elements/TextAndCheckbox';
import TextAndLabel from '../elements/TextAndLabel';
import axios from 'axios';

class Filter extends Component {
    constructor(props){
        super(props);

    }

    async componentWillMount(){
        const response = await axios.post(process.env.REACT_APP_BACKEND + 'getmenunamesandlinks');
        console.log(response);
        const { menus } = response.data;
        let menuNames = [];
        for (let i = 0; i < menus.length; i++) {
            menuNames.push(menus[i].name);
        }
        this.props.dispatch({
            type: 'getAllMenus',
            payload : {
                allMenus : menuNames
            }
        })
    }

    render() {
        const {manageArticles} = this.props;
        console.log(manageArticles);
        return (
            <div className="container" style={{maxWidth: '97%'}}>
                <div className="row">
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
                        items={['All', ...manageArticles.allMenus]}
                        reducerType='menuFilterSelect'
                        defaultText='All'
                        text='Select menu'/>
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