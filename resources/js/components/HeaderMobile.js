import {
  faAngleRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HeaderMobileLastDropDown from "./HeaderComp/HeaderMobileLastDropDown";

 class HeaderMobile extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = { activeDropDown: null };

  }


  // handleChange drop down fun
  handleChangeDropDown  (value) {
    console.log(value);
    this.setState({
      activeDropDown: value,
    });
  };
  render() {
    return (
      <>
        <div
          className={
            this.props.active
              ? "headerMobile headerMobileActive"
              : "headerMobile"
          }
        >
          <div className="sideBarHead">
              <h2 className="text-light ">Menu</h2>
            <span>
              {this.state.activeDropDown && (
                <div onClick={() => this.handleChangeDropDown(null)}>
                  <FontAwesomeIcon
                    className="pointer"
                    icon={faArrowLeft}
                    color="#fff"
                    size="lg"
                  />
                </div>
              )}
            </span>
            <FontAwesomeIcon
              onClick={this.props.closeHeader}
              className="pointer"
              icon={faTimes}
              color="#fff"
              size="lg"
            ></FontAwesomeIcon>
          </div>
          <div
            className={
              this.state.activeDropDown
                ? "sideBarBody activeDropDown"
                : "sideBarBody"
            }
          >
              <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("aboutUs")}
            >
              <span>About Us</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <div
              className="sideBarItem"
              onClick={() => {
                console.log("click")
                this.handleChangeDropDown("accounts")}}
            >
              <span> FX Trading</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("trading")}
            >
              <span> Partnership Program</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("payment")}
            >
              <span> Promotions and Contests</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>

            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("platform")}
            >
              <span>Market Research & Education</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>

            {/* <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("analytic")}
            >
              <span> Social & PAMM </span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div> */}
            {/* <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("pamm")}
            >
              <span> ANALYSIS & EDUCATION</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div> */}

          </div>

          {this.state.activeDropDown && (
            <div
              className="sideBarItem sideBarItemNew"
              onClick={() => {
                // this.handleChangeDropDown(null);
                // this.props.closeHeader();
                // return;
              }}
            >
                 {this.state.activeDropDown === "aboutUs" && (
                <>
                  <HeaderMobileLastDropDown activeDropDown={true} title="About Us">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      {/* <Link to="/about-us">
                        <div className="sideBarItem">
                          <span> News and Events</span>
                        </div>
                      </Link> */}
                      <Link to="/about-us">
                        <div className="sideBarItem">
                          <span> Why Nova Capitals
                          </span>
                        </div>
                      </Link>
                      <Link to="/our-location">
                        <div className="sideBarItem">
                          <span> Contact Us</span>
                        </div>
                      </Link>
                      <Link to="/faqs">
                        <div className="sideBarItem">
                          <span> FAQ's</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "accounts" && (
                <>
                  <HeaderMobileLastDropDown activeDropDown={false} className="sideBarItemNew" title="TRADING ACCOUNT">
                    <div
                    className="sideBarItemNew"
                      onClick={() => {
                        this.handleChangeDropDown(false);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/account-type">
                        <div className="sideBarItemNew">
                          <span> Account Type</span>
                        </div>
                      </Link>
                      {/* <Link to="/islamic-trading">
                        <div className="sideBarItemNew">Islamic Account</div>
                        </Link> */}
                        <Link to="/trading-termonology">
                        <div className="sideBarItemNew">Trading Termonology</div>
                        </Link>


                    </div>
                  </HeaderMobileLastDropDown><br></br>
                  <HeaderMobileLastDropDown activeDropDown={false} title="TRADING PLATFORMS">
                    <div
                    className="sideBarItemNew"
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                           <Link to="/mt4-platform">

                        <div className="sideBarItem">MetaTrader 4</div>
                        </Link>
                        <Link to="/mt5-platform">
                        <div className="sideBarItem">MetaTrader 5</div>
                        </Link>
                        </div>
                    </HeaderMobileLastDropDown><br></br>
                    <HeaderMobileLastDropDown activeDropDown={false} title="TRADING INSTRUMENTS">
                    <div
                    className="sideBarItemNew"
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                        <>
                         <a href="/trading-instruments">
                          <div className="sideBarItem">Trading Instruments</div>
                        </a>
                        <a href="/trading-currencies">
                          <div className="sideBarItem">Currencies (FX)</div>
                        </a>
                        <a href="/precious-metals" >
                          <div className="sideBarItem">Precious Metals</div>
                        </a>
                        <a href="/comodoties" >
                          <div className="sideBarItem">Commodities</div>
                        </a>
                        <a href="/cfd-incdices" >
                          <div className="sideBarItem">CFD Indices Pairs</div>
                        </a>
                        </>
                       </div>
                    </HeaderMobileLastDropDown>
                    <HeaderMobileLastDropDown activeDropDown={false} title="FUNDS">
                    <div
                    className="sideBarItemNew"
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                           <Link to="/deposite-withdraw">
              <div className="sideBarItem">Deposit & Withdrawal</div>
            </Link>
            <Link to="/protection-funds">
              <div className="sideBarItem">Protection of funds</div>
            </Link>
            <Link to="/negative-balance-protection">
              <div className="sideBarItem">Negative Balance Protection</div>
            </Link>
                        </div>
                    </HeaderMobileLastDropDown>
                </>
              )}
            {this.state.activeDropDown === "trading" && (
                <>
                  <HeaderMobileLastDropDown activeDropDown={true} title="PARTNERSHIP PROGRAM">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(true);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                          <Link to="/introducing-broker" className="headerLink">
                            <div className="sideBarItem">Inroducing Broker </div>
                            </Link>
                            <Link to="/affiliate-program" className="headerLink">
                            <div className="sideBarItem">Affiliate Program</div>
                            </Link>
                            <Link to="/white-label" className="headerLink">
                            <div className="sideBarItem">White Label</div>
                            </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "payment" && (
                <>
                  <HeaderMobileLastDropDown activeDropDown={true} title="Promotions and Contests">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                    {
                            this.props.promotions.map((data,index)=>{
                                return(
                                    <a href={data.link} className="headerLink">
                                        <div className="sideBarItem">{data.title}</div>
                                    </a>
                                )
                            })
                        }

                        {
                            this.props.promotions.length == 0 ?
                            <div className="headerDropDownItem">Promotions not available</div>
                            : null
                        }

                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "platform" && (
                <>
                  <HeaderMobileLastDropDown activeDropDown={true} title="Market Research & Education">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      {/* <Link to="/education">
                        <div className="headerDropDownItem">Education</div>
                        </Link> */}
                        {/* <Link to="/analytics">
                        <div className="headerDropDownItem">How to use Mt4</div>
                        </Link> */}
                        {/* <a href="https://blog.cabanacapitals.com">
                        <div className="headerDropDownItem">Analytics</div>
                        </a> */}
                         <Link to="/education">
                        <div className="sideBarItem">Education</div>
                        </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "promotion" && (
                <>
                  <HeaderMobileLastDropDown activeDropDown={true} title="Nova Capitals Invest">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                       {/* <a href="https://social.cabanacapitals.com/portal/login">
                        <div className="sideBarItem">Social Trading</div>
                        </a> */}
                        {/* <Link to="/PAMM">
                        <div className="sideBarItem">PAMM Manager</div>
                        </Link> */}
                        {/* <Link to="/education">
                        <div className="sideBarItem">Education</div>
                        </Link> */}
                    </div>
                  </HeaderMobileLastDropDown>

                </>
              )}
              {/* {this.state.activeDropDown === "analytic" && (
                <>
                 <HeaderMobileLastDropDown activeDropDown={true} title="Nova Capitals Invest">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >

                        <Link to="/strategy-manager">
                        <div className="sideBarItem">PAMM Strategy Manager</div>
                        </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )} */}


            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
      promotions:state.promotion
  }
}

export default connect(mapStateToProps)(HeaderMobile);
