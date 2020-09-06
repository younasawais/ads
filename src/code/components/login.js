import React, { Component, Fragment } from 'react';

class Login extends Component {
    render() {
        return (
<Fragment>
    <section class="mbr-section form3 cid-s9NutCT19a" id="form3-i">
        <div class="container">
            <div class="row justify-content-center">
                <div class="title col-12 col-lg-8">
                    <h2 class="align-center pb-2 mbr-fonts-style display-2">Login</h2>
                    <h3 class="mbr-section-subtitle align-center pb-5 mbr-light mbr-fonts-style display-5">Welcome!</h3>
                </div>
            </div>

            <div class="row py-2 justify-content-center">
                <div class="col-12 col-lg-6  col-md-8 " data-form-type="formoid">
                    <input type="hidden" name="email" data-form-email="true" 
                    value="sd" />
                    <div class="row">
                    </div>
                    <div class="form-group col">
                    <input type="email" name="email" placeholder="Username" class="form-control display-7" id="email-form3-i"/>
                    </div>
                    <div class="form-group col">
                    <input type="email" name="email" placeholder="Password" class="form-control display-7" id="email-form3-i"/>
                    </div>

                    <div class="col-auto input-group-btn">
                        <button type="submit" style={{borderRadius: '40px'}} class="btn btn-primary display-4">Login</button><br/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</Fragment>
        );
    }
}

export default Login;


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