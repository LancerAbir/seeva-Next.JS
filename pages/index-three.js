import React from "react";

const indexThree = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <header className="template-header header-three">
                <div className="header-top-list-one d-none d-lg-block">
                    <div className="container">
                        <div className="list-items">
                            <div className="single-list-item">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img src="/img/logo-white.png" alt />
                                    </a>
                                </div>
                            </div>
                            <div className="single-list-item">
                                <div className="contact-info">
                                    <div className="icon">
                                        <img
                                            src="/img/icon/map-white.png"
                                            alt="Icon"
                                        />
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
                                        <img
                                            src="/img/icon/phone-white.png"
                                            alt="Icon"
                                        />
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
                <div className="container">
                    <div className="header-navigation">
                        <div className="header-left">
                            <div className="site-logo d-lg-none">
                                <a href="index.html">
                                    <img src="/img/logo.png" alt="Seeva" />
                                </a>
                            </div>
                            <nav className="site-menu item-extra-gap item-left d-none d-lg-block">
                                <ul className="primary-menu">
                                    <li className="active">
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
                                <li className="d-none d-lg-block">
                                    <div className="off-canvas-btn">
                                        <span />
                                    </div>
                                </li>
                                <li className="d-lg-none">
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
                        <a href="#" className="panel-close">
                            <i className="fal fa-times" />
                        </a>
                    </div>
                </div>
                {/* Start Mobile Panel */}
            </header>
            {/*====== End Template Header ======*/}
            {/*====== Hero Area Start ======*/}
            <section className="hero-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <span
                                    className="tagline wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    Love Respect &amp; Care
                                </span>
                                <h1
                                    className="title wow fadeInRight"
                                    data-wow-delay="0.4s"
                                >
                                    Family Care Solutions
                                </h1>
                                <p
                                    className="wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Dolor sit amet consectetur adipiscing
                                    elitsedes eiusmod tempor incididunt utlabore
                                </p>
                                <a
                                    href="#"
                                    className="template-btn wow fadeInDown"
                                    data-wow-delay="0.6s"
                                >
                                    Explore Our Service
                                    <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hero-img"
                    style={{
                        backgroundImage: "url(/img/hero-img/hero-img-2.jpg)",
                    }}
                />
            </section>
            {/*====== Hero Area End ======*/}
            {/*====== Appointment Section Start ======*/}
            <section className="appointment-section">
                <div className="appointment-form-three bg-color-secondary">
                    <div
                        className="appointment-image"
                        style={{
                            backgroundImage: "url(/img/appointment/04.jpg)",
                        }}
                    ></div>
                    <div className="form-wrap">
                        <div className="section-heading text-center heading-white mb-60">
                            <span className="tagline">Make an Appointment</span>
                            <h2 className="title">
                                Fill-up The From to Get Our Medical Services
                            </h2>
                        </div>
                        <form
                            action="#"
                            className="wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            placeholder="Your Full Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <select>
                                            <option value={1} selected disabled>
                                                Choose Doctors
                                            </option>
                                            <option value={2}>
                                                Doctor One
                                            </option>
                                            <option value={3}>
                                                Doctor Two
                                            </option>
                                            <option value={4}>
                                                Doctor Three
                                            </option>
                                            <option value={5}>
                                                Doctor Four
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <select>
                                            <option value={1} selected disabled>
                                                Services Category
                                            </option>
                                            <option value={2}>
                                                Service One
                                            </option>
                                            <option value={3}>
                                                Service Two
                                            </option>
                                            <option value={4}>
                                                Service Three
                                            </option>
                                            <option value={5}>
                                                Service Four
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="input-field">
                                        <button
                                            type="submit"
                                            className="template-btn template-btn-primary"
                                        >
                                            Make an Appointment
                                            <i className="far fa-plus" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/*====== Appointment Section End ======*/}
            {/*====== Service Section Start ======*/}
            <div className="service-with-cta">
                {/*====== Service Section Start ======*/}
                <section className="services-section bg-color-grey">
                    <div className="container container-1600">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="section-heading text-center mb-70">
                                    <span className="tagline">
                                        Popular Medical Services
                                    </span>
                                    <h2 className="title">
                                        Benefit For Physical Mental and Virtual
                                        Care
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div
                                className="col-12 col-md-12 col-sm-9 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="row service-loop service-slider">
                                    <div className="col">
                                        <div className="fancy-content-box-two no-shadow">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/iconic-box/01.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <img
                                                        src="/img/icon/heart-2.png"
                                                        alt
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <a href="service-details.html">
                                                            Cardiology
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        Amet consect ascnge
                                                        eiusmod tempors
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fancy-content-box-two no-shadow">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/iconic-box/02.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <img
                                                        src="/img/icon/brain-2.png"
                                                        alt
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <a href="service-details.html">
                                                            Neurology
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        Quis autem reprehe
                                                        nderit voluptate
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fancy-content-box-two no-shadow">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/iconic-box/03.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <img
                                                        src="/img/icon/stomach-2.png"
                                                        alt
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <a href="service-details.html">
                                                            Orthopedics
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        Amet consect ascnge
                                                        eiusmod tempors
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fancy-content-box-two no-shadow">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/iconic-box/04.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <img
                                                        src="/img/icon/virus-2.png"
                                                        alt
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <a href="service-details.html">
                                                            Covid 19
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        Quis autem reprehe
                                                        nderit voluptate
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Service Section End ======*/}
                {/*====== Call to action Start ======*/}
                <section className="cta-section cta-boxed-three">
                    <div className="container">
                        <div className="cta-inner">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 order-lg-last">
                                    <div
                                        className="cta-img text-center text-lg-right wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <img
                                            className="animate-float-bob-y"
                                            src="/img/cta-img/illustration.png"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-10">
                                    <div className="cta-content">
                                        <div className="section-heading heading-white">
                                            <span className="tagline">
                                                Get Our Doctors Consultations
                                            </span>
                                            <h2 className="title">
                                                Find Your Best Doctors With Our
                                                Medical
                                            </h2>
                                        </div>
                                        <a
                                            href="#"
                                            className="template-btn mt-30"
                                        >
                                            Make an Appointment
                                            <i className="far fa-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Call to action End ======*/}
            </div>
            {/*====== Service Section End ======*/}
            {/*====== About Section Start ======*/}
            <section className="about-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-10">
                            <div className="bordered-icon-wrapper">
                                <img
                                    src="/img/section-img/about-img.jpg"
                                    alt="AboutImg"
                                />
                                <div className="border-icon">
                                    <img
                                        src="/img/icon/shield.png"
                                        alt="Icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-9">
                            <div className="about-content">
                                <div className="section-heading mb-35">
                                    <span className="tagline">About Seeva</span>
                                    <h2 className="title">
                                        All-in-One Worksite Health Solution
                                    </h2>
                                    <p>
                                        25 Years Of Experience in Medical
                                        Services
                                    </p>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error voluptatem accusantium doloremque
                                    laudantium totam rem aperieaque ipsa quae ab
                                    illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explica boemo enim
                                    ipsam
                                </p>
                                <a href="#" className="template-btn mt-40">
                                    Learn More <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== About Section End ======*/}
            {/*====== Big Tagline Start ======*/}
            <section className="big-tagline">
                <div className="container-fluid">
                    <h2 className="tagline">
                        Learn better health outcomes, improve costs and increase
                        productivity for your business
                    </h2>
                </div>
            </section>
            {/*====== Big Tagline End ======*/}
            {/*====== Gallery Section Start ======*/}
            <section className="gallery-section section-gap-top">
                <div className="container-fluid fluid-70">
                    <div className="section-heading text-center mb-40">
                        <span className="tagline">Medical Photo Gallery</span>
                        <h2 className="title">
                            Medical Services &amp; Inside Views
                        </h2>
                    </div>
                    <div className="row gallery-loop justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/01.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/01.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/02.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/02.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/03.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/03.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/04.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/04.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/05.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/05.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/06.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/06.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/07.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/07.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/08.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/08.jpg"
                                            className="plus-icon"
                                        />
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Gallery Section End ======*/}
            <div className="doctors-with-testimonial">
                {/*====== Doctor Section Start ======*/}
                <section className="doctors-section">
                    <div className="container">
                        <div className="row justify-content-between align-items-center mb-70">
                            <div className="col-lg-5 col-md-6">
                                <div className="section-heading">
                                    <span className="tagline">
                                        Professional Doctors
                                    </span>
                                    <h2 className="title">
                                        Meet Our Experience Doctors
                                    </h2>
                                </div>
                            </div>
                            <div className="col-auto">
                                <a
                                    href="doctors.html"
                                    className="template-btn template-btn-primary mt-sm-30"
                                >
                                    Make An Appointment
                                    <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                        <div className="row doctors-loop doctors-slider-two">
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/01.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Lee S. Williamson
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Cardiology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/02.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Greg S. Grinstead
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Neurology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/03.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Roger K. Jackson
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Orthopedics
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/04.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Rudolph V. Spitler
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Cardiology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/05.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Frank T. Grimsley
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Neurology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/06.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Johnny R. Atterberry
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Orthopedics
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/07.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Erik R. Faulkner
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Cardiology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/08.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Phillip L. Williams
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Neurology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="doctor-box-one mb-50">
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/09.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Michael I. Johnson
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Orthopedics
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Doctor Section End ======*/}
                {/*====== Testimonial Section Start ======*/}
                <section className="testimonial-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-heading text-center mb-40">
                                    <span className="tagline">
                                        Our Testimonial
                                    </span>
                                    <h2 className="title">
                                        What our Patients Say About Our Medical
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-xl-8 col-lg-9">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 col-sm-10">
                                        <div
                                            className="testimonial-box mt-30 wow fadeInUp"
                                            data-wow-delay="0.3s"
                                        >
                                            <div className="author-info-wrapper">
                                                <div className="avatar">
                                                    <img
                                                        src="/img/testimonial/01.png"
                                                        alt="Images"
                                                    />
                                                </div>
                                                <div className="author-info">
                                                    <h5 className="name">
                                                        Mark E. Kaminsky
                                                    </h5>
                                                    <span className="title">
                                                        Web Designer
                                                    </span>
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star-half-alt" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="content">
                                                Sed ut perspiciatis unde omnis
                                                natusy error volupta tem
                                                accusantium doloreue laudan
                                                totam rem aperiam eaquip abillo
                                                inventore
                                            </p>
                                            <span className="quote-icon">
                                                <img
                                                    src="/img/icon/right-quote.png"
                                                    alt="Quote"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-10">
                                        <div
                                            className="testimonial-box mt-30 wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <div className="author-info-wrapper">
                                                <div className="avatar">
                                                    <img
                                                        src="/img/testimonial/03.png"
                                                        alt="Images"
                                                    />
                                                </div>
                                                <div className="author-info">
                                                    <h5 className="name">
                                                        Andrew K. Allen
                                                    </h5>
                                                    <span className="title">
                                                        Web Designer
                                                    </span>
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star-half-alt" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="content">
                                                Sed ut perspiciatis unde omnis
                                                natusy error volupta tem
                                                accusantium doloreue laudan
                                                totam rem aperiam eaquip abillo
                                                inventore
                                            </p>
                                            <span className="quote-icon">
                                                <img
                                                    src="/img/icon/right-quote.png"
                                                    alt="Quote"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-10">
                                        <div
                                            className="testimonial-box mt-30 wow fadeInUp"
                                            data-wow-delay="0.5s"
                                        >
                                            <div className="author-info-wrapper">
                                                <div className="avatar">
                                                    <img
                                                        src="/img/testimonial/04.png"
                                                        alt="Images"
                                                    />
                                                </div>
                                                <div className="author-info">
                                                    <h5 className="name">
                                                        V. Thomas
                                                    </h5>
                                                    <span className="title">
                                                        Web Designer
                                                    </span>
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star-half-alt" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="content">
                                                Sed ut perspiciatis unde omnis
                                                natusy error volupta tem
                                                accusantium doloreue laudan
                                                totam rem aperiam eaquip abillo
                                                inventore
                                            </p>
                                            <span className="quote-icon">
                                                <img
                                                    src="/img/icon/right-quote.png"
                                                    alt="Quote"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-10">
                                        <div
                                            className="testimonial-box mt-30 wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <div className="author-info-wrapper">
                                                <div className="avatar">
                                                    <img
                                                        src="/img/testimonial/05.png"
                                                        alt="Images"
                                                    />
                                                </div>
                                                <div className="author-info">
                                                    <h5 className="name">
                                                        Rudolph Spitler
                                                    </h5>
                                                    <span className="title">
                                                        Web Designer
                                                    </span>
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star-half-alt" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="content">
                                                Sed ut perspiciatis unde omnis
                                                natusy error volupta tem
                                                accusantium doloreue laudan
                                                totam rem aperiam eaquip abillo
                                                inventore
                                            </p>
                                            <span className="quote-icon">
                                                <img
                                                    src="/img/icon/right-quote.png"
                                                    alt="Quote"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Testimonial Section End ======*/}
                <div className="section-image">
                    <img
                        src="/img/section-img/doctor-with-prescription.jpg"
                        alt="Image"
                    />
                </div>
            </div>
            {/*====== Latest Blog Start ======*/}
            <section className="latest-blog-section latest-blog-section-bg section-gap bg-color-secondary-10">
                <div className="container">
                    <div className="row justify-content-lg-end justify-content-center">
                        <div className="col-lg-6 col-md-10 col-sm-11">
                            <div className="row">
                                <div className="col-xl-10 col-lg-12 col-md-10">
                                    <div className="section-heading mb-60">
                                        <span className="tagline">
                                            Latest News &amp; Blog
                                        </span>
                                        <h2 className="title">
                                            Every Single Updates Our News &amp;
                                            Blog
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="latest-blog-list">
                                <div
                                    className="single-post wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="post-meta">
                                        <a href="#" className="blog-category">
                                            Health
                                        </a>
                                        <a href="#" className="blog-date">
                                            <i className="far fa-calendar-alt" />
                                            25 Aug 2021
                                        </a>
                                    </div>
                                    <h4 className="post-title">
                                        <a href="blog-details.html">
                                            Comprehensive Worksite Health
                                            Program Built Decades of Clinical
                                            Expertise
                                        </a>
                                    </h4>
                                </div>
                                <div
                                    className="single-post wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="post-meta">
                                        <a href="#" className="blog-category">
                                            Covid 19
                                        </a>
                                        <a href="#" className="blog-date">
                                            <i className="far fa-calendar-alt" />
                                            25 Aug 2021
                                        </a>
                                    </div>
                                    <h4 className="post-title">
                                        <a href="blog-details.html">
                                            Make Ove Toward Improved Employee
                                            Health Speed Return Healthcare
                                            Investment
                                        </a>
                                    </h4>
                                </div>
                                <div
                                    className="single-post wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="post-meta">
                                        <a href="#" className="blog-category">
                                            Covid 19
                                        </a>
                                        <a href="#" className="blog-date">
                                            <i className="far fa-calendar-alt" />
                                            25 Aug 2021
                                        </a>
                                    </div>
                                    <h4 className="post-title">
                                        <a href="blog-details.html">
                                            Flexible and Responsive to Your
                                            Changing Seen Needs&nbsp;Make Ove
                                            Toward Improved
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="section-bg d-none d-lg-block"
                    style={{
                        backgroundImage:
                            "url(/img/section-bg/half-bg-img-02.jpg)",
                    }}
                />
            </section>
            {/*====== Latest Blog End ======*/}
            {/*====== Partners Section Start ======*/}
            <section className="partner-section section-gap bg-color-grey section-map-overly-2">
                <div className="container">
                    <div className="section-heading text-center mb-50">
                        <span className="span tagline">
                            Our Trusted Partners
                        </span>
                        <h2 className="title">
                            We’ve 23563k+ Trusted Partners
                        </h2>
                    </div>
                    <div className="partner-logo-grid">
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/01-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/02-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/03-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/04-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/05-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/06-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/07-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                        <div className="single-partner">
                            <a href="#">
                                <img
                                    src="/img/partner-logos/08-dark.png"
                                    alt="Partner"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Partners Section End ======*/}
            {/*====== Back to Top Start ======*/}
            <a className="back-to-top" href="#">
                <i className="far fa-angle-up" />
            </a>
            {/*====== Back to Top End ======*/}
            {/*====== Start Template Footer ======*/}
            <footer className="template-footer bg-color-grey template-footer-white have-cta-boxes-two">
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

export default indexThree;
