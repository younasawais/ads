import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ManageArticlesTable extends Component {
    constructor(props){
        super(props);
        this.handelCheckBox = this.handelCheckBox.bind(this);
    }

    handelCheckBox(e){
        this.props.dispatch({
            type:'selectArticles',
            payload:{
                id : e.currentTarget.id,
                checked : e.target.checked
            }
        })
    }

    render() {
        const {ids, links, publshed, menu, dateCreated, pics, 
                parentItem, totalWord, columnNames, names } = this.props.manageArticles;
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {columnNames.map((article, index)=> {return(
                            <th key={index} scope="col">{article}</th>
                        )})}
                    </tr>
                </thead>
                <tbody>
                    {ids.map((id, i)=>{return(
                        <tr key={i}>
                            <th onChange={this.handelCheckBox} key={i} id={ids[i]} scope="row">
                                <input type="checkbox"/>
                            </th>
                            <td>{ids[i]}</td>
                            <td><Link type="button" to={'/modifyarticle/'+links[i]}>{names[i]}</Link></td>
                            <td>{links[i]}</td>
                            <td>{publshed[i]}</td>
                            <td>{menu[i]}</td>
                            <td>{dateCreated[i]}</td>
                            <td>{pics[i]}</td>
                            <td>{parentItem[i]}</td>
                            <td>{totalWord[i]}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        );
    }
}

export default connect(state=>state)(ManageArticlesTable);