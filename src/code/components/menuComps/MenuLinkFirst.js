import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class MenuLinkFirst extends Component {
    render() {
        const {name, router} = this.props.item;
        return (
            <li className="nav-item">
                <NavLink className="nav-link link text-black display-4" to={'/' + router}>
                    {name}
                </NavLink>
            </li>
        );
    }
}

export default MenuLinkFirst;