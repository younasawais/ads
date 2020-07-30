import React, { Component, Fragment } from 'react';
import MenuLinkSecond from './MenuLinkSecond';

class MenuLinkSub extends Component {
    render() {
        const {item} = this.props;
        return (
            <ul className="nav-item dropdown">
                <li className="nav-link link text-black dropdown-toggle display-4"  data-toggle="dropdown-submenu" aria-expanded="false">
                    {item.name}
                </li>
                <div className="dropdown-menu" style={{maxHeight:'500px', overflowY:'scroll'}}>
                    {item.sub.map((subItem, index)=>{return(
                            <MenuLinkSecond key={index} item={subItem}/>
                    )})}
                </div>
            </ul>
        );
    }
}

export default MenuLinkSub;