import React, { Component } from 'react';
import {connect} from 'react-redux';

class DropDown extends Component {
    constructor(props){
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(val){
        const {reducerType} = this.props;
        if(typeof reducerType !== 'undefined'){
            this.props.dispatch({
                type: reducerType,
                payload:{
                    input : val
                }
            })
        }
    }

    render() {
        const { text, items, defaultText } = this.props;
        return (
            <div className="dropdown">
                <button style={{padding:5, margin:0, marginBottom:10}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {(text==='') ? "Please select " + defaultText : text }
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {items.map((item, index) => {return(
                        <li onClick={()=>{this.handleSelection(item)}} key={index} className="dropdown-item">{item}</li>
                    )})}
                </div>
            </div>
        );
    }
}


DropDown.defaultProps = {
    defaultText: ""
}

export default connect(state => state)(DropDown);