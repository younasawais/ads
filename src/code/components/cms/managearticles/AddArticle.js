import React, { Component, Fragment } from 'react';

class AddArticles extends Component {
    render() {
        return (
            <Fragment>
                <div class="alert alert-success" role="alert">
                    Article created succesfully (TODO: add error alert)
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-warning">Close</button>
                </div>
                <div>
                    <h3>Title :</h3>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </Fragment>
        );
    }
}

export default AddArticles;