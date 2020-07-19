import React, { Component } from 'react';
import Logo from './generalComps/Logo';
import MenuLinkFirst from './menuComps/MenuLinkFirst';
import MenuLinkSub from './menuComps/MenuLinkSub';


class Menu extends Component {
    render() {
        const {articleMenuItems} = this.props.article;
        console.log(articleMenuItems);
        return (
        <section className="menu cid-s4lUbDTTEI" once="menu" id="menu2-3">                    
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