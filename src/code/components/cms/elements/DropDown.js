import React, { Component } from 'react';

class DropDown extends Component {
    constructor(props){
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(val){
        console.log(val);
    }

    render() {
        const { text, items } = this.props;
        return (
            <div className="dropdown">
                <button style={{padding:5, margin:0, marginBottom:10}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {text}
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

export default DropDown;