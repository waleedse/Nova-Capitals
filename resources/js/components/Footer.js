import React, { Component } from "react";
import { a } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row footerRow">
          <div className="col-md-4 col-sm-12 ">
            <div className="footerCol">
              <img
                className="footerLogo"
                src="/img/logo-light.png"
                alt="image"
              ></img>
              <h3 className="footerTitle text-light">Registered Office</h3>
              <p className="footerText">
                {/* Al Awal Markets */}
                 <br />
                 Griffith Corporate Centre <br />
                Beachmont Kingstown St. <br />
                Vincent and the Grenadines
              </p>
              <div className="footerSocialBox">
                <div className="footerSocialCircle">
                    <a href="https://www.facebook.com/">
                  <img
                    src="/assets/images/socialIcon1.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img> </a>
                </div>
                <div className="footerSocialCircle">
                <a href="https://twitter.com/?t=gcsiWMaCsdlVnGe4Q-wNlQ&s=03">
                  <img
                    src="/assets/images/socialIcon2.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img> </a>
                </div>
                <div className="footerSocialCircle">
                <a href="https://www.youtube.com/channel/UCuDTcQpT-hIoC75w">
                  <img
                    src="/assets/images/socialIcon3.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img></a>
                </div>
              </div>
            </div>
          </div>
          {/* {"\u00BB"} */}
          <div className="col-md-4 col-sm-12 footerCol">
            <h3 className=" footeraTitle">QUICK Links</h3>
            <a href="/cookie-policy">
            <p className="footerLinkText"> Cookie Policy</p>

            </a>
            <a href="/regulatory-compliance">
            <p className="footerLinkText"> Regulatory/compliance</p>

            </a>

            <a href="/privacy-policy">
            <p className="footerLinkText"> Privacy Policy</p>

            </a>
            <a href="/kyc-policy">
            <p className="footerLinkText"> KYC Policy</p>

            </a>
            <a href="/assets/files/alawal-risk-disclosure.pdf" target="_blank">
            <p className="footerLinkText"> Risk Disclosure</p>
            </a>
            <a href="/instruction-security">
            <p className="footerLinkText"> Safety Of Fund</p>
            </a>




            <a href="/terms-and-condition">
              <p className="footerLinkText"> Terms and Conditions</p>
            </a>
            <a href="/assets/files/alawal-client-agreement.pdf" target="_blank"  >
            <p className="footerLinkText"> Client Agreement</p>
          </a>

          </div>

          <div className="col-md-4 col-sm-12 footerCol">
            <h3 className=" footeraTitle">CONTACT</h3>
            <a href="/our-location" >

            <p className="footerLinkText"> Our Location</p>

            </a>
            {/* <p className="footerLinkText"> Contact Us</p> */}
          </div>
        </div>
        <div className="row footerSecondRow">
          {/* <p className="footerText footerText_justify">
            <span className="textBold">Legal:</span> Al Awal Markets Limited is
            incorporated in St. Vincent & the Grenadines as an International
            Broker Company with the registration number 24185 IBC 2017. The
            objects of the Company are all subject matters not forbidden by
            International Business Companies (Amendment and Consolidation) Act,
            Chapter 149 of the Revised Laws of Saint Vincent and Grenadines,
            2009, in particular but not exclusively all commercial, financial,
            lending, borrowing, trading, service activities and the
            participation in other enterprises as well as href provide brokerage,
            training and managed account services in currencies, commodities,
            indexes, CFD's and leveraged financial instruments. Risk Warning:
            Trading Forex and CFDs involves significant risk and can result in
            the loss of your invested Markets. You should not invest more than
            you can afford href lose and should ensure that you fully understand
            the risks involved. Trading leveraged products may not be suitable
            for all investors. Before trading, please take into consideration
            your level of experience, investment objectives and seek independent
            financial advice if necessary. It is the responsibility of the
            Client href ascertain whether he/she is permitted href use the services
            of the Al Awal Markets based on the legal requirements in his/her
            country of residence. Please read Al Awal Capitals™ full Risk
            Disclosure. Regional Restrictions: Al Awal Markets does not provide
            services href residents of the EU Region, USA , Canada , Belgium and
            FATF Black Listed Countries. Find out more in the Account Opening
            section of our FAQs.
          </p> */}
          {/* <p className="footerText">
            CCL FINTECH LIMITED is registered in the United Kindom, Company
            number 11501218. Registered address: 71-75 Shelton Street, London,
            Greater London, United Kingdom, WC2H 9JQ.
          </p> */}
        </div>
        {/* <div className="row footerRightsRow">
          <h5 className="footerRightsText">
            Copyright 2021 {"\u00A9"} Al Awal Markets All Right Reserved
          </h5>
        </div> */}
      </div>
    );
  }
}
