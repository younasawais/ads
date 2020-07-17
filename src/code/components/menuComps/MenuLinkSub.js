import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import MenuLinkSecond from './MenuLinkSecond';

class MenuLinkSub extends Component {
    render() {
        const {item} = this.props;
        return (
            <li className="nav-item dropdown">
                <li className="nav-link link text-black dropdown-toggle display-4"  data-toggle="dropdown-submenu" aria-expanded="false">
                    {item.name}
                </li>
                
                {/* <li className="nav-link link text-black dropdown-toggle display-4"  data-toggle="dropdown-submenu" aria-expanded="false">
                    {item.name}
                </li> */}
                <div className="dropdown-menu">
                    {item.sub.map(subItem=>{return(
                        <MenuLinkSecond item={subItem}/>
                    )})}
                </div>
            </li>
        );
    }
}

export default MenuLinkSub;