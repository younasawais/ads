import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import MenuLinkSecond from './MenuLinkSecond';

class MenuLinkSub extends Component {
    render() {
        const {item} = this.props;
        return (
            <li className="nav-item dropdown">
                <NavLink className="nav-link link text-black dropdown-toggle display-4" to='/article' data-toggle="dropdown-submenu" aria-expanded="false">
                    {item.name}
                </NavLink>
                <div className="dropdown-menu">
                    {item.sub.map(subItem=>{return(
                        <MenuLinkSecond name={subItem.name}/>
                    )})}
                    <MenuLinkSecond />
                    <MenuLinkSecond />
                </div>
            </li>
        );
    }
}

export default MenuLinkSub;