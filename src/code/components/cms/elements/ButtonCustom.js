import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class ButtonCustom extends Component {
    render() {
        const {text, type, handleSaveChanges, link} = this.props; 
        return (
            <Fragment>
            {  (link) ? 
                <Link style={style} to={link} type="button" className={"btn btn-" + type}>{text}</Link>
                :
                <button style={style} type="button" onClick={handleSaveChanges} className={"btn btn-" + type}>{text}</button>
            }
            </Fragment>
        );
    }
}

ButtonCustom.defaultProps = {
    type: "primary",
    link : false,

}

const style = {
    padding : 5,
    marginLeft : 0
}

export default ButtonCustom;