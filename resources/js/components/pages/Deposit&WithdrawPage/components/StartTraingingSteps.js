import React, { Component } from 'react';

class StepsToOpenAccount extends Component {
    render() {

        return (
            <div className="container-fluid">
            <div  className="row depositCardRow">
          <div className="col-12 text-center">  <div className="depositStepsTitle">Start Introducing in 4 Steps</div>
          <div>
                <hr className="depositDivider" />
                <div className="depositeDividerOverlay"></div>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src="/assets/images/registration.svg" alt="card"></img></div>
              <h4 className="title">Register</h4>
              <p className="text">Open your live trading account via Al Awal Markets</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src="/assets/images/verify.svg" alt="card"></img></div>
              <h4 className="title">Verify</h4>
              <p className="text">
      Upload your documents
      to verify
      your account</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src="/assets/images/applyforib.svg" alt="card"></img></div>
              <h4 className="title">Apply For IB</h4>
              <p className="text">Login to Al Awal Markets
      and Apply to become an IB</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src="/assets/images/earn.svg" alt="card"></img></div>
              <h4 className="title">Earn</h4>
              <p className="text">Use Your IB link to register clients and earn IB commissions</p>
            </div>
          </div>

          <div className="col-12 text-center mt-5 mb-5">
          <button onClick={()=>{ window.open('https://secure.alawalmarkets.com/#/auth/signup','_self')}} className="depositButton " style={{padding:"8px 70px"}} >Get Started</button>
          </div>
            </div>
          </div>
        );
    }
}

export default StepsToOpenAccount;
