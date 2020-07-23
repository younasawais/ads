import React, { Component } from 'react';

class DropDownAddArticle extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {text}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here sfsdfsfsdfsdfsdssdf</a>
                </div>
            </div>
        );
    }
}

export default DropDownAddArticle;