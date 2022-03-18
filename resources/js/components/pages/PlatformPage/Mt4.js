import React, { Component } from 'react';

class Mt4 extends Component {
    render() {
        return (
            <div>
                <div className="mt4Bg">
                    <div>
                        <img className="mt4icontop" src="/assets/images/mt4.png"></img>
                        <div className='title_'><span className='titleLg'>MT4 Client Platform</span><br /></div>
                        <div className=' title2'>The World's Most Reliable Trading Platform</div>
                    </div>
                </div>
                <div className="container  ">
                    <h1 className="texct-center mt4title">Elevate Your Trading With Al Awal Markets Mt4 Platform</h1>
                    <h6 className="acard_text text-left">
                    MT4 is compatible with various operating system, so don't worry if you are not running the
                    latest version of Microsoft Windows. <br/><br/> The user interface is user-friendly and simple. On top
                    of that, MT4 supports 16 languages so that traders from all over the world can use it.<br/><br/> You
                    can get quotes in real-time on this online platform. There are analysis tools available on
                    this platform so that you can make the best trades every time.</h6>
                    {/* <h6 className="acard_text text-left">MetaTrader 4 features include</h6>
                    <ul className="acard_text ml-3">
                    <li>Interactive charts</li>
                    <li>9 timeframes</li>
                    <li>23 analytical objects</li>
                    <li>30 technical indicators</li>
                    <li>The MQL4 language of trading strategies</li>
                    <li>MetaEditor</li>
                    <li>Strategy tester</li>
                    <li>Library of free trading robots</li>
                    <li>Support for iOS and Android OS</li>
                    <li>Full set of trading orders</li>
                    <li>Analytics and technical indicators</li>
                    </ul> */}
                    {/* <div className="text-right">
                        <img className="arrow_img" src="/assets/images/mt4arrow.png"></img>
                    </div> */}
                </div>
                <div className="bt4_bottom mt-3 ">
                   <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-center">
                                <h2 className="mt4title_">MetaTrader4</h2>
                                <button onClick={()=>{ window.open('https://download.mql5.com/cdn/web/20676/mt4/alawal4setup.exe','_blank')}} className="btn download_mmt4">DOWNLOAD MT4 PLATFORM</button>
                               <div className='text-center'>
                               <a target='_blank' href='https://download.mql5.com/cdn/mobile/mt4/android?server=AlAwal-Demo,AlAwal-Live'> <img className="mt4icons" src="/assets/images/android.png"></img></a>
                               <a target='_blank' href='https://download.mql5.com/cdn/mobile/mt4/ios?server=AlAwal-Demo,AlAwal-Live'> <img className="mt4icons ml-2" src="/assets/images/apple.png"></img></a>
                               </div>

                            </div>
                            <div className="col-md-6 ">
                                <img className="mt4_graph"  src="/assets/images/mt4graph.png"></img>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Mt4;
