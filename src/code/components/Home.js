import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

class Home extends Component {

    componentWillMount(){
        const response = await axios.post('http://localhost:4000/getmenunamesandlinks');
    }

    render() {
        return (
            <Fragment>
                <section class="header5 cid-s9NcstqoeV mbr-fullscreen" id="header5-h" style={{background: 'linear-gradient(45deg, #55b4d4, #073b4c)'}}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="mbr-white col-md-10">
                                <h1 class="mbr-section-title align-center pb-3 mbr-fonts-style display-1">
                                    Qouh
                                </h1>
                                <p class="mbr-text align-center display-5 pb-3 mbr-fonts-style">
                                “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” ― Albert Einstein
                                </p>
                                <div class="mbr-section-btn align-center">
                                        <a class="btn btn-md btn-white-outline display-4" href="https://mobirise.co">Physics</a>
                                        <a class="btn btn-md btn-white-outline display-4" href="https://mobirise.co">History</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mbr-arrow hidden-sm-down" aria-hidden="true">
                        <a href="#next">
                            <i class="mbri-down mbr-iconfont"></i>
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