// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, NavLink } from "react-bootstrap";
import { Link ,withRouter } from "react-router-dom";
import AccountDropDown from "./HeaderComp/AccountDropDown";
import PaymentDropDown from "./HeaderComp/PaymentDropDown";
import PlatformDropDown from "./HeaderComp/PlatformDropDown";
import AnalyticsDropDown from "./HeaderComp/AnaliticsDropDown";
import PAMMsDropDown from "./HeaderComp/PAMMsDropDown";
import AboutUsDropDown from "./HeaderComp/AboutUsDropDown";
import PromotionDropDown from "./HeaderComp/PromotionDropDown";
import HeaderIem from "./HeaderComp/HeaderIem";
import Refferal from "./HeaderComp/Refferal";
import TradingInstruments from "./HeaderComp/TradingInstruments";
import $ from 'jquery'
 class Header extends Component {

  componentDidMount(){
    const url=this.props.history.location.pathname;
    console.log(url)
    if(url==="/about-us")
    console.log(url)
    if(url == "/"){
        this.setState({landing:true})
    }
    window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        if(scroll > 200){
           this.setState({
            navTrans: false
           })
        }else{
            this.setState({
                navTrans: true
               })
        }


        console.log(scroll,this.state.fixDiv)
    });
    this.setState({
      activeAboutUs:true
    })

    $(document).ready(function(){
        $(window).scroll(function (){
          if($(window).scrollTop()>150){
            $('nav').removeClass('navbar-trans');
            $('nav').addClass('navbar-bg');

          }else{
            $('nav').removeClass('navbar-bg');
            $('nav').addClass('navbar-trans');
          }
        })
      })
  }


  constructor(){
    super();
    this.state={activeAboutUs:false,landing:false,navTrans:true}

  }
  render() {
    const {activeAboutUs}=this.state
    return (
      <>
        <Navbar className={this.state.landing ? "navbar-trans " : " navbar-bg"} expand="lg" fixed={activeAboutUs?"top":""} >
            <div className={this.state.landing ? "navbar-trans container" : " navbar-bg container-fluid"} >
          <Navbar.Brand href="/" className="navBrand">
            <img
              className="headerLogo"
              src="/img/logo-light.png"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.props.handleSideBar} aria-controls="" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-auto d-none d-md-flex navItemRow">

                <HeaderIem styles={{borderLeft:'0'}} title="ABOUT US" icon="https://img.icons8.com/ios/26/ffffff/about.png">
                <AboutUsDropDown />
                </HeaderIem>
              <HeaderIem   title="FX TRADING" icon="https://img.icons8.com/dotty/26/ffffff/stocks-growth.png">
                <AccountDropDown />
              </HeaderIem>

              {/* <HeaderIem title="TRADING INSTRUMENTS">
              <TradingInstruments />
              </HeaderIem> */}
                <HeaderIem title="PARTNERSHIP PROGRAM" icon="https://img.icons8.com/ios/26/ffffff/handshake.png">
                <Refferal />
              </HeaderIem>
              {/* <HeaderIem title="PAYMENTS">
              <PaymentDropDown />
              </HeaderIem> */}
              <HeaderIem title="PROMOTIONS AND CONTESTS" icon="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/26/ffffff/external-promotion-online-shopping-tulpahn-detailed-outline-tulpahn.png">
                <PromotionDropDown />
              </HeaderIem>

              <HeaderIem title="MARKET RESEARCH & EDUCATION" icon="https://img.icons8.com/external-wanicon-lineal-wanicon/26/ffffff/external-research-space-wanicon-lineal-wanicon.png">
              <AnalyticsDropDown />
                {/* <PAMMsDropDown /> */}
              </HeaderIem>
              {/* <HeaderIem title="SOCIAL & PAMM" icon="https://img.icons8.com/external-becris-lineal-becris/26/ffffff/external-social-science-literary-genres-becris-lineal-becris.png">
                <PAMMsDropDown />
              </HeaderIem> */}
              {/* <HeaderIem title="SOCIAL TRADING">
                <AboutUsDropDown />
              </HeaderIem> */}

              {/* <HeaderIem title="ABOUT US">
                <AboutUsDropDown />
              </HeaderIem> */}

              {/* <NavLink>
                <FontAwesomeIcon
                  icon={faSearch}
                  size="sm"
                  color="###"
                ></FontAwesomeIcon>
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
export default withRouter(Header)
