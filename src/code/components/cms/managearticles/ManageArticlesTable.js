import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ManageArticlesTable extends Component {
    constructor(props){
        super(props);
        this.handelCheckBox = this.handelCheckBox.bind(this);
    }

    handelCheckBox(e){
        console.log(e.target.value);
        this.props.dispatch({
            type:'selectArticles',
            payload:{
                id : e.currentTarget.id,
                checked : e.target.checked
                //index: e.currentTarget.value
            }
        })
    }

    render() {
        const {ids, links, publshed, menu, dateCreated, pics, 
                parentItem, totalWord, columnNames, names, checkBox, loading } = this.props.manageArticles;
        // let clearCheckBoxes;
        // if(changes.length < 1){
        //     clearCheckBoxes = false;
        // }

        return (
            <Fragment>
            { loading ? 
            <div style={{paddingLeft: '50%'}}>
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
                :
                <table className="table table-bordered" style={{marginLeft: 5}}>
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
                                <th scope="row">
                                <input onChange={this.handelCheckBox} id={ids[i]} type="checkbox" checked={checkBox[i]}/>
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
                </table>}
           </Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        manageArticles : state.manageArticles
    }
}

export default connect(mapStateToProps)(ManageArticlesTable);