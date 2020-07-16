import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class MenuLinkFirst extends Component {
    render() {
        return (
            <li className="nav-item">
                <NavLink className="nav-link link text-black display-4" to='/article'>
                    {this.props.name}
                </NavLink>
            </li>
        );
    }
}

export default MenuLinkFirst;