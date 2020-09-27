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
        const {idsFiltered, linksFiltered, publishedFiltered, menuFiltered, dateCreatedFiltered, picsFiltered, 
                parentItemFiltered, totalWordFiltered, columnNames, names, checkBox, loading } = this.props.manageArticles;
        // let clearCheckBoxes;
        // if(changes.length < 1){
        //     clearCheckBoxes = false;
        // }

        return (
            <Fragment>
            { loading ? 
            <div style={{paddingLeft: '50%'}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
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
                        {idsFiltered.map((id, i)=>{return(
                            <tr key={i}>
                                <th scope="row">
                                <input onChange={this.handelCheckBox} id={idsFiltered[i]} type="checkbox" checked={checkBox[i]}/>
                                </th>
                                <td>{idsFiltered[i]}</td>
                                <td><Link type="button" to={'/modifyarticle/'+linksFiltered[i]}>{names[i]}</Link></td>
                                <td>{linksFiltered[i]}</td>
                                <td>{publishedFiltered[i]}</td>
                                <td>{menuFiltered[i]}</td>
                                <td>{dateCreatedFiltered[i]}</td>
                                <td>{picsFiltered[i]}</td>
                                <td>{parentItemFiltered[i]}</td>
                                <td>{totalWordFiltered[i]}</td>
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