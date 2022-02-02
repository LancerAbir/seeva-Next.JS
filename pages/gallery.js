import React from "react";

const gallery = () => {
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
                                    <li className="active">
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
                                <li className="active">
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
                    <h1 className="page-title">Our Gallery</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Gallery Area Start ======*/}
            <section className="gallery-section section-gap">
                <div className="container">
                    <div className="gallery-filter mb-30">
                        <ul>
                            <li className="active" data-filter="*">
                                Show All
                            </li>
                            <li data-filter=".medical">Medical</li>
                            <li data-filter=".senior-care">Senior Care</li>
                            <li data-filter=".family-care">Family Care</li>
                            <li data-filter=".dental-care">Dental Care</li>
                        </ul>
                    </div>
                    <div className="row gallery-loop gallery-filter-item">
                        <div className="col-lg-4 col-sm-6 medical dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/09.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/09.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 senior-care medical">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/10.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/10.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 family-care dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/11.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/11.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 medical family-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/12.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/12.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 senior-care dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/13.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/13.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 family-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/14.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/14.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 medical senior-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/15.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/15.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 senior-care dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/16.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/16.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 medical family-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/17.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/17.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="read-more text-center mt-60">
                        <a href="#" className="template-btn">
                            View More Gallery <i className="far fa-plus" />
                        </a>
                    </div>
                </div>
            </section>
            {/*====== Gallery Area End ======*/}
            {/*====== Back to Top Start ======*/}
            <a className="back-to-top" href="#">
                <i className="far fa-angle-up" />
            </a>
            {/*====== Back to Top End ======*/}
            {/*====== Start Template Footer ======*/}
            <footer className="template-footer template-footer-white have-cta-boxes-two">
                <div className="cta-boxes-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                                    style={{
                                        backgroundImage:
                                            "url(/img/cta-img/cta-boxed-2-1.jpg)",
                                    }}
                                >
                                    <h2 className="cta-title">
                                        Looking a Doctors For Health Care
                                    </h2>
                                    <a
                                        href="#"
                                        className="template-btn template-btn-bordered"
                                    >
                                        Find Doctor
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                                    style={{
                                        backgroundImage:
                                            "url(/img/cta-img/cta-boxed-2-2.jpg)",
                                    }}
                                >
                                    <h2 className="cta-title">
                                        Make Appointment Online (24/7)
                                    </h2>
                                    <a
                                        href="#"
                                        className="template-btn template-btn-bordered"
                                    >
                                        Appointment
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div
                                    className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                                    style={{
                                        backgroundImage:
                                            "url(/img/cta-img/cta-boxed-2-3.jpg)",
                                    }}
                                >
                                    <h2 className="cta-title">
                                        Innovative Psychial Therapist
                                    </h2>
                                    <a
                                        href="#"
                                        className="template-btn template-btn-bordered"
                                    >
                                        Find Doctor
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-inner bg-color-primary">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="row">
                                <div className="col-lg-3 col-md-8">
                                    <div className="widget text-widget">
                                        <div className="footer-logo">
                                            <img
                                                src="/img/logo-white.png"
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
                                    <div className="row justify-content-center">
                                        <div className="col-xl-5 col-sm-6">
                                            <div className="d-flex justify-content-lg-center">
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
                                        </div>
                                        <div className="col-xl-5 col-sm-6">
                                            <div className="d-flex justify-content-lg-center">
                                                <div className="widget nav-widget">
                                                    <h4 className="widget-title">
                                                        About Us
                                                    </h4>
                                                    <ul className="nav-links">
                                                        <li>
                                                            <a href="#">
                                                                Success Story
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Need a Career ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Privacy Policy
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Need Support ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Doctors
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Latest News
                                                            </a>
                                                        </li>
                                                    </ul>
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
                                        <div className="opening-notice mt-30">
                                            <h6>
                                                <i className="far fa-clock" />
                                                Opening Hours
                                            </h6>
                                            <p>
                                                Sun - Friday, 08:00 am - 05:00
                                                pm
                                            </p>
                                        </div>
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

export default gallery;
