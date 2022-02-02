import React from "react";

const Header5 = () => {
    return (
        <header className="template-header sticky-header sticky-header header-five">
            <div className="header-top-list-two d-none d-lg-block">
                <div className="container container-1300">
                    <div className="list-items">
                        <div className="single-list-item">
                            <div className="contact-info">
                                <div className="icon">
                                    <img src="/img/icon/clock.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <span className="info-title">
                                        Opening Hour
                                    </span>
                                    <a href="#" className="info-desc">
                                        Sun - Friday, 08 am - 09 pm
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="single-list-item">
                            <div className="contact-info">
                                <div className="icon">
                                    <img src="/img/icon/map.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <span className="info-title">
                                        Medical Address
                                    </span>
                                    <a href="#" className="info-desc">
                                        55 Main Road, USA
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="single-list-item">
                            <div className="contact-info">
                                <div className="icon">
                                    <img src="/img/icon/phone.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <span className="info-title">
                                        Phone Number
                                    </span>
                                    <a href="#" className="info-desc">
                                        +012(345) 456
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-1600">
                <div className="header-navigation">
                    <div className="header-left">
                        <div className="site-logo">
                            <a href="index.html">
                                <img src="/img/logo-3.png" alt />
                            </a>
                        </div>
                    </div>
                    <div className="header-center ml-xl-0 ml-auto">
                        <nav className="site-menu item-extra-gap d-none d-xl-block">
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
                            </ul>
                        </nav>
                        <ul className="extra-icons">
                            <li className="d-none d-sm-block">
                                <a href="#" className="search-btn">
                                    <i className="far fa-search" />
                                </a>
                            </li>
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
                            <li className="d-xl-none">
                                <a href="#" className="navbar-toggler">
                                    <span />
                                    <span />
                                    <span />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right d-none d-lg-flex">
                        <ul className="extra-icons">
                            <li>
                                <a
                                    href="#"
                                    className="template-btn template-btn-tertiary"
                                >
                                    Get A Quote <i className="far fa-plus" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Start Mobile Panel */}
            <div className="slide-panel mobile-slide-panel">
                <div className="panel-overlay" />
                <div className="panel-inner">
                    <div className="panel-logo">
                        <img src="/img/logo-3.png" alt />
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

export default Header5;
