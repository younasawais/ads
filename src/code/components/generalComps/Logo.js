import React, { Component, Fragment } from 'react';

class Logo extends Component {
    render() {
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}

export default Logo;