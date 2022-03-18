import React from 'react';
import "./components/newPromoPage.css"
const NewPromo35PerB = () => {
    return (
        <div>
           <div className="newPromoBg">
               <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
               <div className='title'><span className='titleLg'>GET</span><br/>
   <span className="perText"> $50</span> <br/>No Deposit Bonus</div>
   <div className='title title2'>From Al Awal Markets</div>
   <button onClick={()=>{ window.open('https://secure.alawalmarkets.com/#/auth/signup','_self')}} type="button" className='btnRegister'>REGISTER NOW</button>
          <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a></div>

          <div className='col-md-6'>
                <img src='/assets/images/promotionpagebanner.svg' style={{width:'100%'}} />
            </div>
            </div>

           </div>
           </div>

<div className='basicRow promoUpto'>

   <div className='mainFlex'> <div className="contentSec">
        <div className='title'>Al Awal Markets brings an exciting Offer for New Year 2022!
Sign up today and earn up to $50 No Deposit Bonus to your trading account.</div>
        <div className='point'><img src="/assets/images/promoDone.png" className="pointDone" ></img> <span className='text'>Trade with high margin level </span></div>
        <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>Lowest Spreads in the market

 </span></div>
        <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>Complete the terms and withdraw No Deposit Bonus Profit

 </span></div>

 <div className='point ml-4'>
    <a href="/bonus-terms" style={{fontSize:'14px'}} className="col-offset-2 " > *Terms and conditions apply</a>
     </div>

    </div>
    <div className="imgSec">

        <img src="/assets/images/promotionsecondbox.svg" alt="promoUpto" className='img'></img>
    </div></div>
</div>
        <div className='row'>

          <div className='basicRow promoOpenAcc col-md-6'>

              <div className="mainFlex">

                  <div className="contentSec">
                      <div className="textFlex"><span className="number">1</span>
                      <div className="innerTextFlex"><div className="title text-light">OPEN AN ACCOUNT</div>
                      <div className="text text-light">Open your live trading account  <br/>
via Al Awal Markets</div></div></div>
<img src="/assets/images/promoNewacc.png" alt="promoNewacc" className='img d-block d-md-none'></img>

          <div className='btnFlex'><button onClick={()=>{ window.open('https://secure.alawalmarkets.com/#/auth/signup','_self')}} className='btnAcc liveAccBtn'>OPEN LIVE ACCOUNT</button>
          <button onClick={()=>{ window.open('https://secure.alawalmarkets.com/#/auth/signup','_self')}} className='btnAcc demoAccBtn ml-0 ml-md-4'>OPEN DEMO ACCOUNT</button>
          </div>
                  </div>

                  <div className="imgSec d-none d-md-block">

        <img src="/assets/images/promoNewacc.png" alt="promoNewacc" className='img'></img>
                </div>
              </div>
          </div>

          <div className="basicRow promoDeposit col-md-6">
              <div className='mainFlex'>
                  <div className='contentSec'>
                      <div className="textDiv"><div className="number">2</div><div className="title">Request No
 <br/>
 Deposit Bonus</div></div>
<img src="/assets/images/promo2pic.png" alt="promoNewacc" className='img d-block d-md-none'></img>
<div className="text"> No Deposit Bonus will be automatically
 <br/>
 credited to your account within 24 hours.</div>
                  </div>


                  <div className="imgSec d-none d-md-block">

                  <img src="/assets/images/promo2pic.png" alt="promoNewacc" className='img'></img>
                </div>
              </div>
          </div>


          </div>
          <div className='row'>
          <div className="basicRow promoBonus col-md-6">
              <div className='mainFlex'>
                 <div> <div className="title">Get up to $50 bonus in

your No Deposit Bonus  <br/>
account <br/>
</div>
{/* <div className="text">Get <span className='colorPromo'> 35% </span >of <span className='colorPromo'>bonus</span></div> */}
</div>

<div className="imgSec ">

<img src="/assets/images/promo3.png" alt="promoNewacc" className='img mt-3'></img>
</div>
                  </div>



              </div>


              <div className="basicRow promoTrade promoOpenAcc col-md-6">
              <div className='mainFlex'>
                  <div className='contentSec'>
                      <div className="textDiv"><div className="number">4</div><div className="title text-light">Trade</div></div>
<img src="/assets/images/promoTrade.png" alt="promoNewacc" className='img d-block d-md-none'></img>
<div className="text text-light">Start trading on more<br/>
than 80 instruments</div>
<button onClick={()=>{ window.open('https://secure.alawalmarkets.com/#/auth/signup','_self')}} className="getStarted">GET STARTED</button>
                  </div>


                  <div className="imgSec d-none d-md-block">

                  <img src="/assets/images/promoTrade.png" alt="promoNewacc" className='img'></img>
                </div>
              </div>
          </div>
          </div>
        </div>
    );
};

export default NewPromo35PerB;
