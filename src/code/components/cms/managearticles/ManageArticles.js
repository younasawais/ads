import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class ManageArticles extends Component {
    constructor(props){
        super(props);
        this.handelCheckBox = this.handelCheckBox.bind(this);
    }
    

    handelCheckBox(e){
        console.log(e.currentTarget.id);
        console.log('Checked? : ' + e.target.checked)
    }

    render() {
        const {manageArticles} = this.props;
        return (
            <Fragment>
                <div  className="row" style={{paddingLeft:10, paddingRight:10}}>
                    <Link type="button" to='/add-article' className="btn col btn-primary">New Article</Link>
                    <Link type="button" to='/modify-article' className="btn col btn-primary">Modify</Link>
                    <button type="button" className="btn col btn-primary">Publish</button>
                    <button type="button" className="btn col btn-primary">Unpublish</button>
                    <button type="button" className="btn col btn-danger">Delete</button>
                </div>
                <div>
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
                                <th onChange={this.handelCheckBox} key={index} id={manageArticles.ids[index]} scope="row"><input type="checkbox"/></th>
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
                </div>
            </Fragment>
        );
    }
}

export default ManageArticles;