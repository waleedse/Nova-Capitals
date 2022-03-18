import React, { Component } from 'react';
import HeroSec2 from './components/HeroSec2';
import TradingInstrumentLeft from "./components/TradingInstrumentLeft";
import TradingInstrumentRight from "./components/TradingInstrumentRight";
class ProtectionofFunds extends Component {
    render() {
        return (
            <div>
                 <HeroSec2
                title="Protection of Funds"
                // text="Our Best Practices for the Protection of Your Funds "
                // text2="Al Awal Markets ensures the security of funds and personal data of its clients in the best possible manner. It is our first priority to protect your deposits in every possible way. Here are some of the measures we take to ensure funds protection: "
                bg="pof.png"
        />

                <div className="row mt-4 mb-4">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-7 text-center">
                    <h4 className="textFont" style={{fontSize:'22px'}}>
                    The primary concern among online traders is the safety of their funds. Al Awal Markets considers the security of customer funds to be the bedrock of the company’s values and no effort is spared in maintaining the security of customer funds and the integrity of our trading platforms.
                    </h4>
                    </div>

                </div>
                <div id="trading_instruments">


                <div className="greyBg">
                <div className="basicRow  text-center">
                    <h2 className="aboutDetailTitle text-light" style={{fontSize:'38px'}}>
                   Our Best Practices for the Protection of
                    <br />  Your Funds
                    </h2>

                </div>
                </div>
                <div className="basicRow  text-center">
                    <h2 className="aboutDetailTitle" style={{fontSize:'38px'}}>
                    Here’s how Al Awal Markets keeps your information and money secure:

                    </h2>

                </div>
                <div className="row">

                    <div className="col-md-6">
                        <img style={{width:'100%'}} src="/assets/images/pof_1.png"></img>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-left">
                        256-bit SSL encryption across the entire website <br/><br/>

    Embedded True-Site identity assurance seal<br/><br/>

Al Awal Markets is WebTrust compliant, as determined by the American Institute of Certified Public Accountants
<br/><br/>
Al Awal Markets uses McAfee Secure (HackerSafe) to prevent credit card fraud and identity theft
<br/><br/>
Your firm client base would benefit from adding an additional platform to your multi-product offering.
<br/><br/>
Our client asset accounts are completely segregated and are held with Barclays Bank

                        </h4>
                    </div>
                </div>

                <div className="mt-5"></div>
            </div>
            </div>
        );
    }
}

export default ProtectionofFunds
