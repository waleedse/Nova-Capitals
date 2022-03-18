import React, { Component } from "react";
import { a } from "react-router-dom";

export default class TradingInstrumentLeft extends Component {
  render() {
    return (

          <div className="col-md-6 col-sm-12">
            <div className="tradingInfoDiv">
              <h4 className="aboutDetailTitle">{this.props.title}</h4>
              <p className="aboutDetailText">{this.props.text}</p>
              {
                  this.props.learnMoreLink ?
                    <a href={this.props.learnMoreLink}>
                        <button className="btnPrimaryPink2 pl-4 pr-4 mt-4">
                        LEARN MORE
                        </button>
                    </a>
                 :null
              }

            </div>
            <div className="text-center">
            <img
              alt="image of instrument sec"
              src={this.props.imgUrl}
              className="tradingInstrumentImg"
            />
            </div>
          </div>



    );
  }
}
