import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* header content begin */}
                    <div className="uk-section uk-padding-remove-vertical">
                        <nav className="uk-navbar-container" data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
                            <div className="uk-container" data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <div className="uk-navbar-item">
                                        {/* logo begin */}
                                        <a className="uk-logo" href="index-2.html">
                                            <img src="/img/logo-light.png" data-src="/img/logo-light.png" alt="logo" width={160} height={34} data-uk-img />
                                        </a>
                                        {/* logo end */}
                                        {/* navigation begin */}
                                        <ul className="uk-navbar-nav ">
                                            <li><a href="index-2.html">Home<i className="fas fa-chevron-down" /></a>
                                                <div className="uk-navbar-dropdown">
                                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                                        <li><a href="homepage2.html">Homepage 2</a></li>
                                                        <li><a href="homepage3.html">Homepage 3</a></li>
                                                        <li><a href="homepage4.html">Homepage 4</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="markets.html">Markets</a></li>
                                            <li><a href="#">Company<i className="fas fa-chevron-down" /></a>
                                                <div className="uk-navbar-dropdown">
                                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="blog-list.html">Blog</a></li>
                                                        <li><a href="careers.html">Careers</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="education.html">Education</a></li>
                                            <li><a href="#">Resources<i className="fas fa-chevron-down" /></a>
                                                <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                                    <div className="uk-navbar-dropdown-grid uk-child-width-1-2" data-uk-grid>
                                                        <div>
                                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                                <li><a href="https://getuikit.com/docs/">Documentation<i className="fas fa-external-link-square-alt fa-sm" /></a></li>
                                                                <li><a href="help-center.html">Help Center</a></li>
                                                                <li><a href="customers.html">Customers</a></li>
                                                                <li><a href="roadmap.html">Roadmap</a></li>
                                                                <li><a href="legal-docs.html">Legal Docs<i className="fas fa-gavel fa-sm" /></a></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                                <li><a className="uk-disabled" href="#">Adipiscing elit sed do eiusmod incididunt ut labore dolore magna lorem ipsum sit dolor amet consectetur</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        {/* navigation end */}
                                    </div>
                                </div>
                                <div className="uk-navbar-right">
                                    <div className="uk-navbar-item uk-visible@m in-optional-nav">
                                        <a href="#" className="uk-button uk-button-primary uk-border-rounded">Create Account</a>
                                        <a href="signin.html" className="uk-button uk-button-text"><i className="fas fa-user-circle" /></a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* header content end */}
                </header>

            </div>
        );
    }
}

export default NavBar;
