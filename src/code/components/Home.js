import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {

    async componentWillMount(){
        const response = await axios.post(process.env.REACT_APP_BACKEND + 'getmenunamesandlinks');
        console.log(response);
        const { menus, menuLinks} = response.data;
        this.props.dispatch({
            type: 'homeMenuLinks',
            payload : {
                menus : menus,
                menuLinks : menuLinks
            }
        })
    }

    render() {
        console.log(this.props.home);
        const { menus, menuLinks } = this.props.home;
        return (
            <Fragment>
                <section className="header5 cid-s9NcstqoeV mbr-fullscreen" id="header5-h" style={{background: 'linear-gradient(0deg, #f3e4cb, #00000091, #59e0ca)'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="mbr-white col-md-10">
                                <h1 className="mbr-section-title align-center pb-3 mbr-fonts-style display-1">
                                    Qouh
                                </h1>
                                <p className="mbr-text align-center display-5 pb-3 mbr-fonts-style">
                                “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” ― Albert Einstein
                                </p>
                                <div className="mbr-section-btn align-center">
                                    {menus.map((menu, i)=>{return(
                                        <Link type="button" to={'/article/'+menuLinks[i].linkId} className="btn btn-md btn-white-outline display-4">{menu.name}</Link>
                                    )})}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
                        <a href="#next">
                            <i className="mbri-down mbr-iconfont"></i>
                        </a>
                    </div>
                </section>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        home : state.home
    }
  }
  
export default connect(mapStateToProps)(Home)