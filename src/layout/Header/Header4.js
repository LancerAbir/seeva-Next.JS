import React from "react";

const Header4 = () => {
    return (
        <header className="template-header sticky-header sticky-secondary-bg absolute-header header-four">
            <div className="header-top-note">
                <div className="container container-1450">
                    <p>
                        Looking For a Dental Specialists ? Right Place We Are
                        Here For
                        <a href="#">
                            <i className="far fa-phone" />
                            <strong>Call US</strong>: +012 (345) 6789
                        </a>
                    </p>
                </div>
            </div>
            <div className="container container-1450">
                <div className="header-navigation navigation-white-color">
                    <div className="header-left">
                        <div className="site-logo">
                            <a href="index.html">
                                <img src="/img/logo-white.png" alt />
                            </a>
                        </div>
                        <nav className="site-menu menu-gap-left item-extra-gap d-none d-xl-block">
                            <ul className="primary-menu">
                                <li className="active">
                                    <a href="index.html">Home</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="index.html">Home One</a>
                                        </li>
                                        <li>
                                            <a href="index-two.html">
                                                Home Two
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-three.html">
                                                Home Three
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-four.html">
                                                Home Four
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-five.html">
                                                Home Five
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="service.html">Services</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="service.html">
                                                        Service One
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-two.html">
                                                        Service Two
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-details.html">
                                                        Service Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="pricing.html">
                                                Pricing Plan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="faq.html">
                                                Help &amp; FAQ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="gallery.html">
                                                Our Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="appointments.html">
                                                Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="doctors.html">Doctors</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="doctor-details.html">
                                                Doctor Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog-standard.html">Blog</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog-details.html">
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop.html">Shop</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="product-details.html">
                                                Shop Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="search-btn">
                                        <i className="far fa-search" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <ul className="extra-icons">
                            <li className="d-none d-sm-block">
                                <a href="#" className="cart-icon">
                                    <i className="far fa-shopping-cart" />
                                </a>
                            </li>
                            <li className="d-none d-sm-block">
                                <a href="#" className="wishlist-icon">
                                    <i className="far fa-heart" />
                                </a>
                            </li>
                            <li className="d-none d-xl-block">
                                <div className="off-canvas-btn">
                                    <span />
                                </div>
                            </li>
                            <li className="d-xl-none">
                                <a href="#" className="navbar-toggler">
                                    <span />
                                    <span />
                                    <span />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Start Off Canvas */}
            <div className="slide-panel off-canvas-panel">
                <div className="panel-overlay" />
                <div className="panel-inner">
                    <div className="canvas-logo">
                        <img src="/img/logo.png" alt />
                    </div>
                    <div className="about-us">
                        <h5 className="canvas-widget-title">About Us</h5>
                        <p>
                            Sed perspiciatis unde omnis iste natus error
                            voluptatem accusantium doloremque laudantium totam
                            rem aperams eaque ipsa quae abillo.
                        </p>
                    </div>
                    <div className="contact-us">
                        <h5 className="canvas-widget-title">Contact Us</h5>
                        <ul>
                            <li>
                                <i className="far fa-map-marker-alt" />
                                354 Oakridge, Camden NJ 08102 - USA
                            </li>
                            <li>
                                <i className="far fa-envelope-open" />
                                <a href="mailto:support@qolle.com">
                                    support@seeva.com
                                </a>
                                <a href="mailto:info@qolle.com">
                                    info@seeva.com
                                </a>
                            </li>
                            <li>
                                <i className="far fa-phone" />
                                <a href="tel:+01234567899">+012 (345) 678 99</a>
                                <br />
                                <a href="tel:+8563214">+8563214</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="panel-close">
                        <i className="fal fa-times" />
                    </a>
                </div>
            </div>
            {/* End Off Canvas */}
            {/* Start Mobile Panel */}
            <div className="slide-panel mobile-slide-panel">
                <div className="panel-overlay" />
                <div className="panel-inner">
                    <div className="panel-logo">
                        <img src="/img/logo.png" alt />
                    </div>
                    <nav className="mobile-menu">
                        <ul className="primary-menu">
                            <li className="active">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="index.html">Home One</a>
                                    </li>
                                    <li>
                                        <a href="index-two.html">Home Two</a>
                                    </li>
                                    <li>
                                        <a href="index-three.html">
                                            Home Three
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-four.html">Home Four</a>
                                    </li>
                                    <li>
                                        <a href="index-five.html">Home Five</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="service.html">Services</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="service.html">
                                                    Service One
                                                </a>
                                            </li>
                                            <li>
                                                <a href="service-two.html">
                                                    Service Two
                                                </a>
                                            </li>
                                            <li>
                                                <a href="service-details.html">
                                                    Service Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Pricing Plan</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Help &amp; FAQ</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">Our Gallery</a>
                                    </li>
                                    <li>
                                        <a href="appointments.html">
                                            Appointment
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="doctors.html">Doctors</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="doctor-details.html">
                                            Doctor Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog-standard.html">Blog</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog-details.html">
                                            Blog Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop.html">Shop</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="product-details.html">
                                            Shop Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" className="panel-close">
                        <i className="fal fa-times" />
                    </a>
                </div>
            </div>
            {/* Start Mobile Panel */}
        </header>
    );
};

export default Header4;
