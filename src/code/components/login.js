import React, { Component, Fragment } from 'react';
import InputLogin from './login/InputLogin';
import {connect} from 'react-redux';
import axios from 'axios';
import AlertMessage from './cms/elements/AlertMessage';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleLoginBtn = this.handleLoginBtn.bind(this);
    }

    async handleLoginBtn(){
        const response = await axios.post(process.env.REACT_APP_BACKEND + 'loginAdmin', {
            email: this.props.login.email,
            password : this.props.login.password
        });
        console.log(response);
        if(response.status === 200){
            sessionStorage.setItem("token", response.data);
            window.location = '/admin'; 
        }else if(response.status === 204){
            console.log('wrong details');
            this.props.dispatch({
                type: 'updateLoginValues',
                payload : {
                    value : 'Please check your login details',
                    inputType : 'alert'
                }
            });
            this.alertTimeOut(this.props.dispatch);            
        }
    }

    
    alertTimeOut(dispatch){
        setTimeout(function() {
            dispatch({
                type :'updateLoginValues', 
                payload : {
                    value : '',
                    inputType : 'alert'
                }
            });
        }, 3000);        
    }

    render() {
        const { email, password, alert } = this.props.login;
        return (
<Fragment>
    {(alert !== '') ? <AlertMessage text={'Please check your credentials.'}/> : '' }
    <section className="mbr-section form3 cid-s9NutCT19a" style={{paddingBottom: '60%'}} id="form3-i">
        <div className="container">
            <div className="row justify-content-center">
                <div className="title col-12 col-lg-8">
                    <h2 className="align-center pb-2 mbr-fonts-style display-2">Login</h2>
                    <h3 className="mbr-section-subtitle align-center pb-5 mbr-light mbr-fonts-style display-5">Welcome!</h3>
                </div>
            </div>

            <div className="row py-2 justify-content-center">
                <div className="col-12 col-lg-6  col-md-8 " data-form-type="formoid">
                    <input type="hidden" name="email" data-form-email="true" 
                    value="sd" />
                    {/* <div className="row">
                    </div> */}

                    <InputLogin 
                        type='email'
                        name='email'
                        placeHolder='email'
                        value={email}
                    />
                    <InputLogin 
                        type='password'
                        name='password'
                        placeHolder='password'
                        value={password}
                    />

                    <div className="col-auto input-group-btn">
                        <button 
                            type="submit" 
                            onClick={this.handleLoginBtn}
                            style={{borderRadius: '40px'}} 
                            className="btn btn-primary display-4">
                                Login
                        </button><br/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        login : state.login
    }
}

export default connect(mapStateToProps)(Login);


{/* <section class="mbr-section form3 cid-s9NutCT19a" id="form3-i">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="title col-12 col-lg-8">
                          <h2 class="align-center pb-2 mbr-fonts-style display-2">Login</h2>
                          <h3 class="mbr-section-subtitle align-center pb-5 mbr-light mbr-fonts-style display-5">Welcome!</h3>
                      </div>
                  </div>
          
                  <div class="row py-2 justify-content-center">
                      <div class="col-12 col-lg-6  col-md-8 " data-form-type="formoid">
                          <form action="https://mobirise.com/" method="POST" class="mbr-form form-with-styler" data-form-title="Mobirise Form"><input type="hidden" name="email" data-form-email="true" value="maGm6P9uwmt4pSpO9CwmvvosDHLBLcgDeujKWdI/e9iv24sdj1h6qNpmKM1dgWwZlFrkrlQ9ZMIBzvGUmEZALLxp43JprFg7inObV1uQLZoqvQhbApfYmwgQmn7UZRsC">
                              <div class="row">
                                  <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                                  <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                  </div>
                              </div>
                              <div class="dragArea row">
                                  <div class="form-group col" data-for="email">
                                      <input type="email" name="email" placeholder="Email" data-form-field="Email" required="required" class="form-control display-7" id="email-form3-i"/>
                                  </div>
                                  <div class="col-auto input-group-btn"><button type="submit" class="btn btn-primary display-4">Login<br/></button></div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section> */}