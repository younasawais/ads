import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends Component {
    render() {
        const {names, links} = this.props.article.bottomMenu; 
        return (
        <section once="footers" className="cid-s4p88QQ5Vx" id="footer7-8">
          <div className="container">
              <div className="media-container-row align-center mbr-white">
                  <div className="row row-links">
                    <ul className="foot-menu">
                        {names.map((name, index) => {
                            return(
                                <NavLink style={{paddingLeft:5, paddingRight:5 }} to={'/' + links[index]} className="foot-menu-item mbr-fonts-style display-7">
                                    <a className="text-white mbr-bold" href="#">{name}</a>
                                </NavLink>
                            )
                        })}
                    </ul>
                  </div>
                  {/* <div className="row social-row">
                      <div className="social-list align-right pb-2">
                      <div className="soc-item">
                              <a href="https://twitter.com/mobirise" target="_blank">
                                  <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                              </a>
                          </div><div className="soc-item">
                              <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                                  <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                              </a>
                          </div><div className="soc-item">
                              <a href="https://www.youtube.com/c/mobirise" target="_blank">
                                  <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                              </a>
                          </div><div className="soc-item">
                              <a href="https://instagram.com/mobirise" target="_blank">
                                  <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                              </a>
                          </div><div className="soc-item">
                              <a href="https://plus.google.com/u/0/+Mobirise" target="_blank">
                                  <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                              </a>
                          </div><div className="soc-item">
                              <a href="https://www.behance.net/Mobirise" target="_blank">
                                  <span className="socicon-behance socicon mbr-iconfont mbr-iconfont-social"></span>
                              </a>
                          </div></div>
                  </div> */}
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
