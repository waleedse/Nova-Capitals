import React, { Component } from "react";
import TradingInstrumentLeft from "./TradingInstrumentLeft";
import TradingInstrumentRight from "./TradingInstrumentRight";

export default class TradingInstrumentComponent extends Component {
  render() {
    return (
      <div id="trading_instruments">
        <div className="greyBg">
          <div className="basicRow  text-center">
            <h4 className="aboutDetailTitle text-light">
              Trade with fast execution and
              <br /> tight spreads
            </h4>
            <p className="textFont text-center">
              From currency trading to speculating on the price movements of
              your favourite trading instruments – Al Awal has it all.
              Enter the vast, complex and exhilarating world of the financial
              markets with a True ECN broker.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row tradingInstrumentRow">
        <TradingInstrumentLeft
          title="Currencies (FX)"
          text="Currency trading, also known as FX or forex (foreign exchange) trading, enables traders to take advantage of increases and decreases in a currency’s value. The foreign exchange market is the most liquid in the world, with a daily trading volume of over $5 trillion. Discover the potential benefits of online forex trading with a global award-winning broker."
          imgUrl="/assets/images/crunncies1.svg"
          learnMoreLink="/trading-currencies"
        />
        <TradingInstrumentRight
          title="Precious Metals (Spot)"
          text="Trading precious metals is one of the most popular ways of diversifying your portfolio. Trade spot gold and spot silver prices against the US Dollar and other major currencies with a True ECN Broker today, and reap the potential benefits.
          Gold and silver have been exchanged for goods and currencies throughout time —and these precious metals continue to be a popular choice among traders today.
          "
          imgUrl="/assets/images/preciousmetaal.svg"
          learnMoreLink="/precious-metals"
        />
        <TradingInstrumentLeft
          title="VPS"
          text="VPS (Virtual Private Server) hosting allows Forex traders to run automated algorithmic strategies, including expert advisors 24 hours a day 7 days a week on a Virtual Machine.."
          imgUrl="/assets/images/vps1.svg"
          learnMoreLink="/vps"
        />
        <TradingInstrumentRight
          title="CFD Indices (Spot)"
          text="An online CFD trading provides you to potentially profit or loss from the fluctuations of
          the price. The cost of CFD is based on the price of the underlying instrument and is not
           traded on an exchange, despite the status, or location of the underlying instrument. That’s
          why CFD’s are called an over-the-counter (OTC)product."
          imgUrl="/assets/images/cfd1.svg"
          learnMoreLink="/cfd-incdices"
        />
        <div className="mt-5"></div>
      </div>
      </div>
      </div>
    );
  }
}
