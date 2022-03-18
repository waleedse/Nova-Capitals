import React, { Component } from 'react';
import StepsToOpenAccount from '../Deposit&WithdrawPage/components/StartTraingingSteps';
import TradingComponent from "../LandingPage/components/TradingComponent";
import HeroSec2 from '../TradingInstrumentsPages/components/HeroSec2';

class Affiliyate extends Component {
    render() {
        return (
            <div>
                {/* <HeroSec2
                  title="Affiliate"
                  text="Best IB & Affiliate Program by Al Awal Markets"
                  bg="affiliyatebg.png"
                >

                </HeroSec2> */}
                <div className="affliateBg">
                    <div>
                        <div className='title_'><span className='titleLg'>Affiliate</span><br /></div>
                        <div className=' title2' style={{fontSize:'16px'}}>As an affiliate, you don’t have to know forex or meet clients in person. All you need to have is a high-traffic blog, website and/or a big number of social media followers. You will be provided with a complete set of marketing tools to promote Al Awal Markets and once your referred clients start trading, you will receive your commission.

</div>
                        </div>
                </div>
                <div className="promoOpenAcc text-center">
                    <h2 className='atitle'>How does it work?</h2>

                    <h4 className='text-light container' style={{fontSize:'16px'}}>
                    Al Awal Markets pays you competitive fees for making client introductions to us.<br></br>
                    <br></br>
    As an Introducer, all you have to do is refer clients, and you will be rewarded for it. Each time one of your referred clients makes a trade, you will receive a commission and as long as they keep trading, you keep earning. The program comes at no cost, it's available to all our registered clients and is the perfect step towards building a vast network of partners.
    <br></br>
    <br></br>
    An attractive and flexible rebate scheme is offered, where the rebates awarded to Introducers depends on the trading volume of their clients - the higher the volume, the bigger the rebates.
    <br></br>
    <br></br>
    If you are an asset manager (fund or managed account) in the FX space, contact us about our capabilities to simplify your platform, execution and cost base.
    <br></br>
    <br></br>
    Your firm client base would benefit from adding an additional platform to your multi-product offering.
    <br></br>
    <br></br>
    We want to enhance the quality of service to your clients with a leading ECN foreign exchange platform run by a firm who wants you and your clients to succeed.
                    </h4>
                </div>
                <div className='' style={{background:'#7ba2aa'}}>
                    <div className=' container' >
                        <div className='row'>
                        <div className='col-md-8 text-light'>
                            <h2 className='atitle text-left px-0'>Why us?</h2>

                            <li> For appropriate firms, we will support you as is necessary to make this an attractive revenue opportunity.</li>
                            <br></br>
                            <li> Agreeing to work with us involves a commitment from us to you, something you will find from very few other commercial organizations.
</li>
<br></br>
                            <li> Al Awal Markets is staffed with dynamic; skilled individuals keen to promote our mutual success.</li>
                            <br></br>
                            <li>Your success is ours and vice versa.</li>
                        </div>
                        <div className='col-md-4'>
                            <img style={{width:'100%'}} src="/assets/images/bars.png"></img>
                        </div>
                    </div>
                    </div>
                </div>
                <StepsToOpenAccount></StepsToOpenAccount>
            </div>
        );
    }
}

export default Affiliyate;
