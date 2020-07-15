import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <section className="menu cid-s4lUbDTTEI" once="menu" id="menu2-3">
            <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
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
                              <img src="assets/images/logo2.png" alt="Qouh" title="Qouh" style={{height: '3.8rem'}}/> 
                          </a>
                      </span>
                      
                  </div>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                    <NavLink to='/home' className="nav-item"><a className="nav-link link text-black display-4" href="#">Home</a></NavLink>
                    <NavLink to='/article' className="nav-item dropdown">
                        <a className="nav-link link text-black dropdown-toggle display-4" href="#" data-toggle="dropdown-submenu" aria-expanded="false">
                            Subtopic1</a><div className="dropdown-menu"><a className="text-black dropdown-item display-4" href="#" aria-expanded="false">New Item</a></div>
                    </NavLink>
                    <NavLink to='/article' className="nav-item"><a className="nav-link link text-black display-4" href="#">Article</a></NavLink>
                    <NavLink to='/article' className="nav-item"><a className="nav-link link text-black display-4" href="#">Subtopic3</a></NavLink>
                    <NavLink to='/article' className="nav-item"><a className="nav-link link text-black display-4" href="#">Subtopic4</a></NavLink>
                    <NavLink to='/testcomp1' className="nav-item"> <a className="nav-link link text-black display-4" href="#">Subtopic5</a></NavLink>
                    </ul>
                      </div>
                  </nav>
              </section>
        );
    }
}

export default Menu;