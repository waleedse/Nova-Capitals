import React, { Component } from 'react';
import StepsToOpenAccount from '../Deposit&WithdrawPage/components/StepsforWhitelabel';

class WhiteLABEL extends Component {
    render() {
        return (
            <div>
                <div className="whiteBg">
                    <div>
                        <div className='title_'><span className='titleLg'>White Label Solutions</span><br /></div>
                        {/* <div className=' title2'>Customised Forex Trading solutions for your Brokerage Firm</div> */}
                    </div>
                </div>
                <div className="container  ">
                    <h1 className="texct-center mt4title">Customised Forex Trading solutions for your Brokerage Firm</h1>
                    <h6 className="acard_text text-center">
                    Al Awal Markets’s multi-bank liquidity is available to brokers and institutions operating the MetaTrader 5 platforms. We have aggregated multiple liquidity providers into a single feed which is routed directly into the MetaTrader infrastructure.<br/><br/>
Al Awal Markets can either create an all-inclusive solution such as bridge and liquidity to an existing MetaTrader network, or a White Label solution utilising our existing global server network.<br/><br/>
By connecting to the Al Awal Markets Liquidity Bridge, MetaTrader 5 brokers can access deep and reliable liquidity from stable and secure price feeds, resulting in better price execution and therefore improved client <br/><br/>
                    </h6>

                </div>
                {/* <div className="bt4_bottom mt-3 ">
                    <div className="container">
                    <h2 className="mt4title_ text-center">Start Trading in 3 Steps</h2>
                        <div className="row py-5">
                            <div className="col-md-6 ">
                            <div className=' title2 text-left'>Contact us for a Quote<br/>
Finalise the Terms<br/>
Start using White Label services</div>
                                <button className="btn download_mmt4 px-3 mt-3">Get Started</button>

                            </div>
                            <div className="col-md-6 ">
                                <img className="mt4_graph" src="/assets/images/white_left.png"></img>
                            </div>
                        </div>
                    </div>
                </div> */}
                <StepsToOpenAccount></StepsToOpenAccount>
            </div>
        );
    }
}

export default WhiteLABEL;
