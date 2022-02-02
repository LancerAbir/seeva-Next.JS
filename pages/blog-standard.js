import React from "react";

const blogStandard = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <header className="template-header sticky-header header-one">
                <div className="container-fluid container-1400">
                    <div className="header-navigation">
                        <div className="header-left">
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="/img/logo.png" alt="Seeva" />
                                </a>
                            </div>
                            <nav className="site-menu menu-gap-left d-none d-xl-block">
                                <ul className="primary-menu">
                                    <li>
                                        <a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="index.html">
                                                    Home One
                                                </a>
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
                                                <a href="service.html">
                                                    Services
                                                </a>
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
                                    <li className="active">
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
                        </div>
                        <div className="header-right">
                            <ul className="extra-icons">
                                <li className="d-none d-sm-block">
                                    <div className="header-search-area">
                                        <form action="#">
                                            <input
                                                type="search"
                                                placeholder="Search Here"
                                            />
                                            <button type="submit">
                                                <i className="far fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                </li>
                                <li className="d-none d-xl-block">
                                    <div className="off-canvas-btn style-two">
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
                                voluptatem accusantium doloremque laudantium
                                totam rem aperams eaque ipsa quae abillo.
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
                                    <a href="tel:+01234567899">
                                        +012 (345) 678 99
                                    </a>
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
                                <li>
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
                                <li className="active">
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
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section className="page-title-area">
                <div className="container">
                    <h1 className="page-title">Blog Standard</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Blog Standard</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Blog Standard Start ======*/}
            <section className="blog-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-loop">
                                <div className="single-blog-post">
                                    <div className="post-thumbnail">
                                        <img
                                            src="/img/blog/01.jpg"
                                            alt="Image"
                                        />
                                        <a
                                            href="blog-details.html"
                                            className="post-link"
                                        >
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <a href="blog-details.html">
                                                Everything You Need to Know
                                                About &amp; How to Deal With
                                                Back Pain During.
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-thumbnail">
                                        <img
                                            src="/img/blog/02.jpg"
                                            alt="Image"
                                        />
                                        <a
                                            href="blog-details.html"
                                            className="post-link"
                                        >
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <a href="blog-details.html">
                                                Everything You Need Know About
                                                Healthcare DevTools Debugging
                                                Tips Shortcuts
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post bg-dark-post">
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="blog-details.html">
                                                Talk Your Child About
                                                Coronavirus Smtp Context
                                                Variables Hugo Static Site
                                            </a>
                                        </h3>
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post no-thumbnail">
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <a href="blog-details.html">
                                                How to Deal With Back Pain
                                                During Pregnancy Time Video For
                                                Size And Quality
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-thumbnail">
                                        <img
                                            src="/img/blog/03.jpg"
                                            alt="Image"
                                        />
                                        <a
                                            href="blog-details.html"
                                            className="post-link"
                                        >
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <a href="blog-details.html">
                                                Telemedicine overprescribes
                                                antib iotics: Are you really
                                                receiving..
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="pagination">
                                <li>
                                    <a href="#">
                                        <i className="far fa-angle-left" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">01</a>
                                </li>
                                <li>
                                    <a href="#">02</a>
                                </li>
                                <li className="dots">
                                    <span />
                                    <span />
                                    <span />
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="far fa-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="primary-sidebar">
                                <div className="widget search-widget">
                                    <h4 className="widget-title">
                                        Search Here
                                    </h4>
                                    <form action="#" className="search-form">
                                        <input
                                            type="search"
                                            placeholder="Keywords"
                                        />
                                        <button type="submit">
                                            <i className="far fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="widget category-widget">
                                    <h4 className="widget-title">Category</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Business (5)</a>
                                        </li>
                                        <li>
                                            <a href="#">Dental Care (15)</a>
                                        </li>
                                        <li>
                                            <a href="#">Eye Care (11)</a>
                                        </li>
                                        <li>
                                            <a href="#">Allergic Issue (6)</a>
                                        </li>
                                        <li>
                                            <a href="#">Cardiology (9)</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Neurology Surgery (8)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Allergic Issue (09)</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget latest-post-widget">
                                    <h4 className="widget-title">
                                        Latest News
                                    </h4>
                                    <div className="latest-post-loop">
                                        <div className="single-post">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/blog/post-widget-1.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <a href="blog-details.html">
                                                        Build Seamless
                                                        Spreadsheet Import
                                                        Experience
                                                    </a>
                                                </h6>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt" />
                                                    25 May 2021
                                                </span>
                                            </div>
                                        </div>
                                        <div className="single-post">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/blog/post-widget-2.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <a href="blog-details.html">
                                                        Creating Online
                                                        Environment Work Well
                                                        Older
                                                    </a>
                                                </h6>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt" />
                                                    25 May 2021
                                                </span>
                                            </div>
                                        </div>
                                        <div className="single-post">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/blog/post-widget-3.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <a href="blog-details.html">
                                                        Signs Website Feels More
                                                        Haunted House
                                                    </a>
                                                </h6>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt" />
                                                    25 May 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget cta-widget">
                                    <div
                                        className="cta-content"
                                        style={{
                                            backgroundImage:
                                                "url(/img/blog/cta-widget.jpg)",
                                        }}
                                    >
                                        <h4 className="cta-title">
                                            Get Free Consultations
                                        </h4>
                                        <span className="cta-tagline">
                                            Special advisors
                                        </span>
                                        <p>
                                            Quis autem vel eum iure repreh ende
                                        </p>
                                        <a href="#" className="cta-btn">
                                            Get a quote
                                        </a>
                                    </div>
                                </div>
                                <div className="widget tag-cloud-widget">
                                    <h4 className="widget-title">
                                        Popular Tags
                                    </h4>
                                    <ul>
                                        <li>
                                            <a href="#">Medical</a>
                                        </li>
                                        <li>
                                            <a href="#">Doctors</a>
                                        </li>
                                        <li>
                                            <a href="#">Nurses</a>
                                        </li>
                                        <li>
                                            <a href="#">Consultancy</a>
                                        </li>
                                        <li>
                                            <a href="#">Law farms</a>
                                        </li>
                                        <li>
                                            <a href="#">Farms</a>
                                        </li>
                                        <li>
                                            <a href="#">Management</a>
                                        </li>
                                        <li>
                                            <a href="#">Planning</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Blog Standard End ======*/}
            {/*====== Back to Top Start ======*/}
            <a className="back-to-top" href="#">
                <i className="far fa-angle-up" />
            </a>
            {/*====== Back to Top End ======*/}
            {/*====== Start Template Footer ======*/}
            <footer className="template-footer have-cta-boxed-one">
                <div className="cta-boxed-one">
                    <div className="container">
                        <div
                            className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
                            style={{
                                backgroundImage:
                                    "url(/img/cta-img/cta-boxed-bg-1.jpg)",
                            }}
                        >
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8 col-md-10">
                                    <div className="cta-content text-center">
                                        <div className="section-heading heading-white">
                                            <span className="tagline">
                                                Get Free Consultations
                                            </span>
                                            <h2 className="title">
                                                Looking a Doctors to Get Your
                                                Services
                                            </h2>
                                        </div>
                                        <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="template-btn template-btn-white"
                                                >
                                                    Get Free Quote
                                                    <i className="far fa-plus" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="template-btn template-btn-bordered"
                                                >
                                                    Get Appointment
                                                    <i className="far fa-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-inner bg-color-grey">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="row">
                                <div className="col-lg-3 col-md-8">
                                    <div className="widget text-widget">
                                        <div className="footer-logo">
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        </div>
                                        <p>
                                            Sed ut perspi unde omniste natus
                                            error sit voluptatem acc doloremque
                                            laudantium
                                        </p>
                                        <ul className="contact-list">
                                            <li>
                                                <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                                                    <i className="far fa-map-marker-alt" />
                                                    55 Main Road, USA
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:support@gmail.com">
                                                    <i className="far fa-envelope" />
                                                    support@gmail.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:01267899">
                                                    <i className="far fa-phone" />
                                                    +012 (345) 678 99
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-xl-5 col-md-6">
                                            <div className="widget nav-widget">
                                                <h4 className="widget-title">
                                                    Popular Services
                                                </h4>
                                                <ul className="nav-links">
                                                    <li>
                                                        <a href="#">
                                                            Orthopedic Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Gynecology Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Cardiology Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Dentistry Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Gastroenterology
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Urgent Care
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-md-6">
                                            <div className="widget instagram-widget">
                                                <h4 className="widget-title">
                                                    Photo Gallery
                                                </h4>
                                                <div className="instagram-images">
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/01.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/02.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/03.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/04.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/05.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/06.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-10">
                                    <div className="widget newsletters-widget">
                                        <h4 className="widget-title">
                                            Newsletters
                                        </h4>
                                        <p>
                                            Sed ut perspiciatis unde omniste
                                            <br /> natus error sit voluptatem
                                        </p>
                                        <form
                                            action="#"
                                            className="newsletters-form"
                                        >
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                            />
                                            <button type="submit">
                                                <i className="far fa-arrow-right" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <p>
                                © 2021 <a href="#">Seeva</a>. All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default blogStandard;
