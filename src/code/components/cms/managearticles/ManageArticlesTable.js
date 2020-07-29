import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        const {manageArticles} = this.props;
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {manageArticles.columnNames.map((article, index)=> {return(
                            <th key={index} scope="col">{article}</th>
                        )})}
                    </tr>
                </thead>
                <tbody>
                    {manageArticles.ids.map((id, index)=>{return(
                        <tr key={index}>
                            <th onChange={this.handelCheckBox} key={index} id={manageArticles.ids[index]} 
                                                                scope="row"><input type="checkbox"/></th>
                            <td>{manageArticles.ids[index]}</td>
                            <td>{manageArticles.names[index]}</td>
                            <td>{manageArticles.publshed[index]}</td>
                            <td>{manageArticles.menu[index]}</td>
                            <td>{manageArticles.dateCreated[index]}</td>
                            <td>{manageArticles.pics[index]}</td>
                            <td>{manageArticles.parentItem[index]}</td>
                            <td>{manageArticles.totalWord[index]}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        );
    }
}

export default connect(state=>state)(ManageArticlesTable);