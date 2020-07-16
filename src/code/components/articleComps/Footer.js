import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends Component {
    render() {
        const {names, links} = this.props.article.bottomMenu; 
        return (
        <section className="cid-s4p88QQ5Vx" id="footer7-8">
          <div className="container">
              <div className="media-container-row align-center mbr-white">
                  <div className="row row-links">
                    <ul className="foot-menu">
                        {names.map((name, index) => {
                            return(
                                <NavLink style={{paddingLeft:5, paddingRight:5 }} to={'/' + links[index]} className="foot-menu-item mbr-fonts-style display-7">
                                    <p className="text-white mbr-bold" href="#">{name}</p>
                                </NavLink>
                            )
                        })}
                    </ul>
                  </div>
                  <div className="row row-copirayt">
                      <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                          © Copyright 2020 Qouh - All Rights Reserved
                      </p>
                  </div>
              </div>
          </div>
      </section>
        );
    }
}

export default Footer;
