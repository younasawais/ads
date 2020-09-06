import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ManageMenusTable extends Component {
    constructor(props){
        super(props);
        this.handelCheckBox = this.handelCheckBox.bind(this);
    }

    handelCheckBox(e){
        console.log(e.currentTarget.id);
        console.log(e.target.checked);
        console.log(e.currentTarget.value);
        this.props.dispatch({
            type:'selectMenus',
            payload:{
                id : e.currentTarget.id,
                checked : e.target.checked
            }
        })
    }

    render() {
        const {ids, publshed, dateCreated, totalParents, totalChildren, 
            columnNames, names, changes, checkBox } = this.props.manageMenus;
        let clearCheckBoxes;
        if(changes.length < 1){
            clearCheckBoxes = false;
        }

        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {columnNames.map((menu, index)=> {return(
                            <th key={index} scope="col">{menu}</th>
                        )})}
                    </tr>
                </thead>
                <tbody>
                    {ids.map((id, i)=>{return(
                        <tr key={i}>
                            <th scope="row">
                                <input onChange={this.handelCheckBox} id={ids[i]} type="checkbox" checked={checkBox[i]}/>
                            </th>
                            <td>{ids[i]}</td>
                            <td>{names[i]}</td>
                            <td>{publshed[i]}</td>
                            <td>{dateCreated[i]}</td>
                            <td>{totalParents[i]}</td>
                            <td>{totalChildren[i]}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        );
    }
}

export default connect(state=>state)(ManageMenusTable);