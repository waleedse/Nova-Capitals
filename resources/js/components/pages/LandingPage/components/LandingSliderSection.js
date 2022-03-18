import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Axios from "axios";
import { img_baseurl } from "../../../Configs/BaseUrls";

export default class LandingSliderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages:[
                {image:'landingBg1.png'},
                {image:'183531banner1.png'}
            ],
            sliders:[
              {
                image:'183531banner1.png',
                content: '<div class="container"><div class="row trueRow"><div class="col-12 pt-5 "><h1 class="trueTitle">Al Awal Markets </h1><p class="trueDescription">Most Trusted ECN Broker <br/>ECN Spreads from 0.1 pips</p><div class="trueButtonBox"><a href="https://secure.alawalmarkets.com/#/auth/login">      <button  class="btnLogin">LOG IN</button> </a><a href="https://secure.alawalmarkets.com/#/auth/signup">     <button class="btnSignUp">SIGN UP</button></a></div></div></div></div>',
              }
            ]
        }
    }

    componentDidMount(){
      Axios.post('/api/get_home_sliders').then(res=>{
          console.log(res);
        if(res.status == 200){
          this.setState({
            sliders:[],
            sliders:res.data.sliders
          })
        }
      })
    }
  render() {
    return (
      <div className="">
        <div className="">
        <div style={{paddingTop:'51px'}}>
        <Carousel
            autoPlay = {true}
            showArrows={true}
            infiniteLoop={true}
            interval={3000}
            // stopOnHover={true}
            // showThumbs={true}
            // showStatus={true}
            showIndicators={false}

            >


                    {
                        this.state.sliders.map((data,index)=>{
                            return(
                             <div key={index}  className="landingSliderBg" style={{backgroundImage:`url(${img_baseurl+data.image})`}}>
                                 <div dangerouslySetInnerHTML={{__html:data.content}}>

                                 </div>
                            </div>
                            )
                          })





  }

        </Carousel>

        </div>

          <div className="landingSliderBg2">
            <div className="container-fluid">
              <div className="row tradeWithRow ">
                <div className="col-12 pt-5">
                  <h3 className="tradeWithTitle">Why Trade with Al Awal Markets </h3>
                  <p className="tradeWithText">
                  Trade multiple financial products with the most reliable Forex Broker
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row tradeWithFRow pb-4">
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/swap.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">Swap Free <br/>Account</h2>
                    {/* <p className="featureText">
                    Seamless interest-free trading.
*Swap Free Accounts are available to all our clients

                    </p> */}
                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/customer_.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">24/5 multilingual
 <br/>    customer support  </h2>
                    {/* <p className="featureText">
                    Offers lowest trading cost in the market (0.0 Pips)
to earn highest profits possible

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div ">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/shield.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">Secure   <br/> Trading  </h2>
                    {/* <p className="featureText">
                    Access to a larger portion of financial market
& increase potential profits

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/clock.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                    Fast
                    <br/>Execution
                    </h2>
                    {/* <p className="featureText">
                    Secure trading with NBP allows you to
not lose more than deposited

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/lowest-price.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      Lowest <br /> Spread
                    </h2>
                    {/* <p className="featureText">
                    Dedicated customer support team available
to assist you via various contact channels

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/protection.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      Negative Balance <br /> Protection
                    </h2>
                    {/* <p className="featureText">
                    Dedicated customer support team available
to assist you via various contact channels

                    </p> */}
                  </div>
                </div>
              </div>

              <div className="row demoAccountRow">
              <div className="col-md-3 col-sm-12"></div>

              <div className="col-md-6 col-sm-12">
                  <div className="demoAccountBox mr-0">
                    <div className="demoAccountTitleBox">

                    </div>
                    <div className=" mt-2 text-center">
                    <h2
                        className="demoAccountTitle pt-5"
                        style={{ color: "#090d1c",fontSize:'22px' }}
                      >
                        Access trading easily
                      </h2>
                    <h4 className=" demoAccountText"> with</h4>

                    <h2 className="demoAccountText " style={{fontSize:'48px'}}>MetaTrader <span className="text-warning">4</span></h2>
                    </div>
                    <div className="demoAccountInfoBox ">


                    <div className="text-center mt-2">
                      <button onClick={()=>{ window.open('/','_self')}} className="btnDemoAccount">
                       Open Demo Account
                      </button>
                    </div>
                  </div>

                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
