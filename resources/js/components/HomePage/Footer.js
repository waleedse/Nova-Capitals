import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    {/* footer content begin */}
                    <div className="uk-section uk-section-secondary in-footer-feature uk-margin-medium-top">
                        <div className="uk-container">
                            <div className="uk-grid uk-flex uk-flex-center">
                                <div className="uk-width-5-6@m">
                                    <div className="uk-grid uk-child-width-1-3@s" data-uk-grid>
                                        <div className="uk-flex uk-flex-middle">
                                            <div className="uk-margin-right">
                                                <i className="fas fa-history in-icon-wrap" />
                                            </div>
                                            <div>
                                                <h6 className="uk-margin-remove">25 years of Excellence</h6>
                                            </div>
                                        </div>
                                        <div className="uk-flex uk-flex-middle uk-flex-center@m">
                                            <div className="uk-margin-right">
                                                <i className="fas fa-trophy in-icon-wrap" />
                                            </div>
                                            <div>
                                                <h6 className="uk-margin-remove">15+ Global Awards</h6>
                                            </div>
                                        </div>
                                        <div className="uk-flex uk-flex-middle uk-flex-right@m">
                                            <div className="uk-margin-right">
                                                <i className="fas fa-phone-alt in-icon-wrap" />
                                            </div>
                                            <div>
                                                <h6 className="uk-margin-remove">24/5 Customer Support</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-section uk-background-secondary uk-light">
                        <div className="uk-container uk-text-small">
                            <div className="uk-child-width-1-2@m" data-uk-grid>
                                <div className="in-footer-logo">
                                    <img src="img/in-lazy.gif" data-src="img/in-logo-1.svg" alt="logo" width={127} height={27} data-uk-img />
                                </div>
                                <div className="uk-flex uk-flex-right@m">
                                    <div className="in-footer-socials">
                                        <a href="#"><i className="fab fa-facebook-square" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-youtube" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                        <a href="#"><i className="fab fa-telegram-plane" /></a>
                                    </div>
                                    <a className="uk-button uk-button-text uk-margin-large-left uk-visible@m" href="#">Company News</a>
                                    <a className="uk-button uk-button-text uk-margin-large-left uk-visible@m" href="#">Partnership</a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-large-top" data-uk-grid>
                                <div>
                                    <h5>Markets</h5>
                                    <ul className="uk-list uk-link-text">
                                        <li><a href="#">Share CFDs</a></li>
                                        <li><a href="#">Forex</a></li>
                                        <li><a href="#">Indices</a></li>
                                        <li><a href="#">Commodities</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Trading Platforms</h5>
                                    <ul className="uk-list uk-link-text">
                                        <li><a href="#">Web platform</a></li>
                                        <li><a href="#">Trading apps</a></li>
                                        <li><a href="#">MetaTrader 5</a></li>
                                        <li><a href="#">Compare features</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Account Types</h5>
                                    <ul className="uk-list uk-link-text">
                                        <li><a href="#">Demo account</a></li>
                                        <li><a href="#">Standart account</a></li>
                                        <li><a href="#">ECN account</a></li>
                                        <li><a href="#">Islamic acount</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Learn to Trade</h5>
                                    <ul className="uk-list uk-link-text">
                                        <li><a href="#">News and trade ideas</a></li>
                                        <li><a href="#">Trading strategy</a></li>
                                        <li><a href="#">Forex trading course</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="uk-grid uk-margin-large-top">
                                <div className="uk-width-1-1">
                                    <p className="uk-heading-line uk-margin-large-bottom"><span>Copyright ©2021 Liquid Inc. All Rights Reserved.</span></p>
                                    <p className="in-trading-risk">Trading derivatives and leveraged products carries a high level of risk, including the risk of losing substantially more than your initial investment. It is not suitable for everyone. Before you make any decision in relation to a financial product you should obtain and consider our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website and seek independent advice if necessary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer content end */}
                    {/* totop begin */}
                    <div className="uk-visible@m">
                        <a href="#" className="in-totop fas fa-chevron-up" data-uk-scroll />
                    </div>
                    {/* totop end */}
                </footer>
            </div>

        );
    }
}

export default Footer;
