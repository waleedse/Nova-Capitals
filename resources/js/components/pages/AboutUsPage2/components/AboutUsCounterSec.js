import React, { Component } from 'react';

class AboutUsCounterSec extends Component {
    render() {
        return (
            <div>
              <hr className="aboutUsDivider"/>
              <div className="container-fluid">
                  <div className="row counterSec">
                      <div className="col-md-6 col-sm-12">
                     <h4 className="title mb-4">Your Benefits with Al Awal
</h4>
                          <p className="text">Our investment approach is driven by a combination of fundamental research, advanced market analysis, revolutionary technology platform and a persistent drive to excel on behalf our investors.<br/><br/>

                          We have established our credibility in the industry by offering our customers with transparent and honest services<br/><br/>

                          Our team execute various trading strategies in cryptocurrencies, futures, FX, options and commodities on over two hundred market centers around the world<br/><br/>

                          We have an efficient communication system that allows you to interact with our team professionals in the most efficient way</p>
                      </div>
                      {/* <div className="col-md-6 col-sm-12">
                     <div className="centerDiv">
                     <h1 className="bigTitle">79</h1>
                      <h5 className="boldText">countries covered</h5>
                      <h1 className="bigTitle">150k+</h1>
                      <h5 className="boldText">trading accounts opened</h5></div>
                     <div></div>
                      </div> */}
                  </div>
              </div>
              <hr className="aboutUsDivider" />
              <div className="aboutUs2Bg py-5">
                      <div className="row  counterSec">
                        <div className="col-md-9">
                            <h1 className="titletext">Our MIssion</h1>
                            <p className="textp">Al Awal Markets Limited enjoys the highest rate of client satisfaction in the industry. Our team works tirelessly to ensure that every client's investment brings about steady return. Principal of our team is development of revolutionary technology, designed to automate market making and post-trade activities to accumulate large profits over times. We enjoy good reputation in the industry by delivering our clients with consistently dependable fund management services. Al Awal Markets Limited manages funds for thousands of customers from all over the world</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <img src="/assets/images/globe.png" className="worldImg"></img>
                        </div>
                      </div>
              </div>
              <div>
                  <h1 className="titletext text-center py-4" style={{color:'#000'}}>WHY TRADE WITH Al Awal</h1>
                  <img src="/assets/images/whyaboutus.jpg" style={{width:'100%',height:'100%'}}></img>
              </div>
            </div>
        );
    }
}

export default AboutUsCounterSec;
