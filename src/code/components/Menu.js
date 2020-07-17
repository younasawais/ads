import React, { Component } from 'react';
import Logo from './generalComps/Logo';
import MenuLinkFirst from './menuComps/MenuLinkFirst';
import MenuLinkSub from './menuComps/MenuLinkSub';
import {Link} from 'react-router-dom';


class Menu extends Component {
    render() {
        const {articleMenuItems} = this.props.article;
        console.log(articleMenuItems);
        return (
        <section className="menu cid-s4lUbDTTEI" once="menu" id="menu2-3">

{/* <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <div className="menu-logo">
            <div className="navbar-brand">
                <span className="navbar-logo">
                    <a href="https://qouh.com">
                        <img src="assets/images/logo2.png" alt="Qouh" title="Qouh" style={{height: "3.8rem"}}/>
                    </a>
                </span>
                <span className="navbar-caption-wrap">
                    <a className="navbar-caption text-black display-4" to='/article'>
                        MOBIRISE
                    </a>
                </span>
            </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                <li className="nav-item">
                    <Link className="nav-link link text-black display-4" to='/article'>
                        Subtopic2
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link link text-black dropdown-toggle display-4" data-toggle="dropdown-submenu">
                        Subtopic3</Link>
                        <div className="dropdown-menu">
                            <Link className="text-black dropdown-item display-4" to='/article'>New Item</Link>
                            <Link className="text-black dropdown-item display-4" to='/article'>New Item</Link>
                            <Link className="text-black dropdown-item display-4" to='/article'>New Item</Link>
                        </div>
                        </li><li className="nav-item">
                            <Link className="nav-link link text-black display-4" to='/article'>Subtopic4</Link>
                        </li>
                <li className="nav-item dropdown open">
                    <Link className="nav-link link text-black dropdown-toggle display-4" data-toggle="dropdown-submenu" aria-expanded="true">Subtopic5</Link>
                    <div className="dropdown-menu">
                        <Link className="text-black dropdown-item display-4" to='/article' aria-expanded="true">New Item</Link>
                        <Link className="text-black dropdown-item display-4" to='/article' aria-expanded="false">New Item</Link></div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link text-black display-4" to='/article2'>Subtopic5</Link>
                </li>
            </ul>
        </div>
    </nav> */}
                    
                <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
                    <Logo />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown" >
                            {articleMenuItems.map(item=>{return(
                                item.sub.length > 0 ?
                                <MenuLinkSub item={item} /> :
                                <MenuLinkFirst item={item} />
                            )}
                            )}
                        </ul>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Menu;