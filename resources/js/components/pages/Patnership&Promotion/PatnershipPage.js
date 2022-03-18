import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import TradingComponent from "../LandingPage/components/TradingComponent";
import BenfitsComponent from "../AboutUsPage/components/AboutUsBenifits";
import HowItWork from "../LandingPage/components/HowItWorks";
import StartTradingSteps from "../Deposit&WithdrawPage/components/StartTraingingSteps";
export default class PatnershipPage extends Component {
  render() {
    return (
      <div>
        <HeroSection
          title="INTRODUCING BROKERS"
          text="Expand your revenue and business by introducing your clients to us. Our unique Introducing Brokers (IB) program is suitable for Individuals, Corporates, Money Managers, and Webmasters. our IB programe allows organizations and individuals around the world to receive an attractive commission for referring clients, and more the client trades, the more IB's are rewarded.. "
          bg="ti_bg1.png"
        />
        <div className=" greyBg basicRow text-center py-4" style={{background:'#090d1c'}}>
          <h4 className="aboutDetailTitle text-light ">How It Works?</h4>
          <p className="textFont text-light text-justify">
          As an Introducer, all you have to do is refer clients to Al Awal Markets and you will be rewarded for it. Each time one of your referred clients makes a trade, you will receive a commission and as long as they keep trading, you keep earning. We have a more formalized program for authorized firms to earn revenue from client introductions to Al Awal Markets. As an IB, you may be an advisory firm seeking the market leading FX platform on which to execute your trade recommendations.
          </p>

        </div>
        <BenfitsComponent />
        {/* <TradingComponent /> */}
        {/* <HowItWork title="Start Trading in 4 Steps" /> */}
        <StartTradingSteps></StartTradingSteps>
      </div>
    );
  }
}
