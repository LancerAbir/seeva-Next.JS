import React from "react";

const doctorDetails = () => {
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
                                    <li className="active">
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
                                <li className="active">
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
                    <h1 className="page-title">Michael l. Johnson</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Doctor Details</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Doctor Section Start ======*/}
            <section className="doctors-section section-gap">
                <div className="container">
                    <div className="doctor-details-wrapper">
                        <div className="doctor-info-box">
                            <div className="doctor-photo">
                                <img
                                    src="/img/doctors/doctor_details.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="doctor-description">
                                <div className="description-header">
                                    <div>
                                        <h3 className="name">
                                            Michael I. Johnson
                                        </h3>
                                        <span className="specialty">
                                            Family Care Specialist
                                        </span>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="template-btn template-btn-primary"
                                        >
                                            Appointment Now
                                            <i className="far fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium demque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptate
                                    voluptas esit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui
                                    rat ione voluptatem sequi nesciunt. Neque
                                    porro quisquam est, qui dolorem ipsum quia
                                    dolor sit amet, consectetur, adipisci velit,
                                    sed quia non numquam eius modi tempora
                                    incidunt ut labore et dolore magnam aliquam
                                    quaerat voluptatem. Ut enim ad minima
                                    veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam nis aliquid ex
                                    ea commodi consequatur? Quis autem vel eum
                                    iure reprehenderit qui in ealuptate velit
                                    esse quam nihil molestiae consequatur, vel
                                    illum qui dolorem
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="doctor-information">
                                    <div className="section-heading mb-30">
                                        <span className="tagline">
                                            Educational Information
                                        </span>
                                        <h2 className="title">
                                            Education &amp; Experience
                                        </h2>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="info-title">
                                                Education
                                            </span>
                                            <span className="info-desc">
                                                Yale-New Haven Hos
                                            </span>
                                        </li>
                                        <li>
                                            <span className="info-title">
                                                Board certification
                                            </span>
                                            <span className="info-desc">
                                                American Board of Surgery -
                                                Certified in Surgery
                                            </span>
                                        </li>
                                        <li>
                                            <span className="info-title">
                                                Field of expertise
                                            </span>
                                            <span className="info-desc">
                                                Surgical Critical Care
                                            </span>
                                        </li>
                                        <li>
                                            <span className="info-title">
                                                Years of practice
                                            </span>
                                            <span className="info-desc">
                                                25+
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="working-hour-table mt-md-50">
                                    <div className="section-heading mb-30">
                                        <span className="tagline">
                                            Working Hours
                                        </span>
                                        <h2 className="title">Working Hours</h2>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>Sunday</span>
                                            <span>02 pm to 06 pm</span>
                                        </li>
                                        <li>
                                            <span>Monday</span>
                                            <span>03 pm to 07 pm</span>
                                        </li>
                                        <li>
                                            <span>Tuesday</span>
                                            <span>02 pm to 06 pm</span>
                                        </li>
                                        <li>
                                            <span>Wednesday</span>
                                            <span>02 pm to 06 pm</span>
                                        </li>
                                        <li>
                                            <span>Thursday</span>
                                            <span>04 pm to 06 pm</span>
                                        </li>
                                        <li>
                                            <span>Friday</span>
                                            <span>03 pm to 08 pm</span>
                                        </li>
                                        <li>
                                            <span>Saturday</span>
                                            <span className="closed">
                                                Closed
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Doctor Section End ======*/}
            {/*====== Skill Section Start ======*/}
            <section className="skill-section section-gap border-top-primary">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="tile-gallery-two pr-lg-3">
                                <div className="image-one">
                                    <img
                                        src="/img/tile-gallery/04.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div
                                    className="image-two text-right wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <img
                                        src="/img/tile-gallery/05.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <div className="skill-content pl-xl-5 mt-md-50">
                                <div className="section-heading mb-20">
                                    <span className="tagline">
                                        Professional Skills
                                    </span>
                                    <h2 className="title">
                                        25 Years Of Experience In Medical
                                        Services
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis natus error
                                    voluptatem santium doloremque laudantium
                                    totam rem aperieaque ipsa quae abillo ven
                                    veritatis et quasi architecto beatae vitae
                                    dicta.
                                </p>
                                <div
                                    className="skills-items mt-50 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={89}
                                        data-line-color="#499afa"
                                        data-line-bg="#e4f0fe"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Medical Care
                                            </h5>
                                            <span className="progress-percentage">
                                                89%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={64}
                                        data-line-color="#ffae00"
                                        data-line-bg="#fff3d9"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Family Care
                                            </h5>
                                            <span className="progress-percentage">
                                                64%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={78}
                                        data-line-color="#b505ff"
                                        data-line-bg="#f4daff"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Child Care
                                            </h5>
                                            <span className="progress-percentage">
                                                78%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={85}
                                        data-line-color="#ff3000"
                                        data-line-bg="#ffe0d9"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Senior Care
                                            </h5>
                                            <span className="progress-percentage">
                                                85%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill Section End ======*/}
            {/*====== Appointment Section Start ======*/}
            <section className="appointment-section">
                <div className="appointment-form-three style-two bg-color-primary">
                    <div className="form-wrap">
                        <div className="section-heading text-center heading-white mb-60">
                            <span className="tagline">Make an Appointment</span>
                            <h2 className="title">
                                Fill-up The From to Get Our Medical Services
                            </h2>
                        </div>
                        <form action="#">
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
                                            className="template-btn"
                                        >
                                            Make an Appointment
                                            <i className="far fa-plus" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="appointment-image"
                        style={{
                            backgroundImage: "url(/img/appointment/06.jpg)",
                        }}
                    ></div>
                </div>
            </section>
            {/*====== Appointment Section End ======*/}
            {/*====== Service Section Start ======*/}
            <section className="services-section section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-heading text-center mb-30">
                                <span className="tagline">
                                    Popular Medical Services
                                </span>
                                <h2 className="title">
                                    Benefit For Physical Mental and Virtual Care
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row service-loop justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="fancy-content-box-two mt-40">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/01.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img src="/img/icon/heart-2.png" alt />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Cardiology
                                            </a>
                                        </h4>
                                        <p>
                                            Amet consect ascnge eiusmod tempors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="fancy-content-box-two mt-40">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/02.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img src="/img/icon/brain-2.png" alt />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Neurology
                                            </a>
                                        </h4>
                                        <p>
                                            Quis autem reprehe nderit voluptate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="fancy-content-box-two mt-40">
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
                                            Amet consect ascnge eiusmod tempors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Service Section End ======*/}
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

export default doctorDetails;
