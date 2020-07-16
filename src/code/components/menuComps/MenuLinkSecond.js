import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class MenuLinkSecond extends Component {
    render() {
        return (
            <NavLink className="text-black dropdown-item display-4" to='/article' aria-expanded="false">
                {this.props.name}
            </NavLink>
        );
    }
}

export default MenuLinkSecond;