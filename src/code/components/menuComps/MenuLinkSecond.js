import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class MenuLinkSecond extends Component {
    render() {
        const {name, router} = this.props.item;
        return (
            <NavLink className="text-black dropdown-item display-4" to={'/'+ router} aria-expanded="false">
                {name}
            </NavLink>
        );
    }
}

export default MenuLinkSecond;