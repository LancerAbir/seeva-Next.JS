import Link from "next/link";

const about = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <header className="template-header sticky-header header-one">
                <div className="container-fluid container-1400">
                    <div className="header-navigation">
                        <div className="header-left">
                            <div className="site-logo">
                                <Link href="/">
                                    <a>
                                        <img src="/img/logo.png" alt="Seeva" />
                                    </a>
                                </Link>
                            </div>
                            <nav className="site-menu menu-gap-left d-none d-xl-block">
                                <ul className="primary-menu">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="/">
                                                    <a>Home One</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/index-two">
                                                    <a>Home Two</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/index-three">
                                                    <a>Home Three</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/index-four">
                                                    <a>Home Four</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/index-five">
                                                    <a>Home Five</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="active">
                                        <Link href="/about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="/service">
                                                    <a>Services</a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/service">
                                                            <a>Service One</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/service-two">
                                                            <a>Service Two</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/service-details">
                                                            <a>
                                                                Service Details
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/pricing">
                                                    <a>Pricing Plan</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <a>Help &amp; FAQ</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/gallery">
                                                    <a>Our Gallery</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/appointments">
                                                    <a>Appointment</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/doctors">
                                            <a>Doctors</a>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="/doctor-details">
                                                    <a>Doctor Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/blog-standard">
                                            <a>Blog</a>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="/blog-details">
                                                    <a>Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/shop">
                                            <a>Shop</a>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="/product-details">
                                                    <a>Shop Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
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
                                <li className="active">
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
            {/*====== Page Title Start ======*/}
            <section
                className="page-title-area page-title-bg"
                style={{
                    backgroundImage: "url(/img/section-bg/page-title.jpg)",
                }}
            >
                <div className="container">
                    <h1 className="page-title">About</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>About</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== About Section Start ======*/}
            <section className="about-section section-gap">
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="circle-image-gallery mb-md-50">
                                <div className="row">
                                    <div className="col-6 gallery-left">
                                        <div
                                            className="single-img wow fadeInLeft"
                                            data-wow-delay="0.3s"
                                        >
                                            <img
                                                src="/img/circle-image-gallery/01.jpg"
                                                alt
                                            />
                                        </div>
                                        <div
                                            className="single-img wow fadeInRight"
                                            data-wow-delay="0.4s"
                                        >
                                            <img
                                                src="/img/circle-image-gallery/04.jpg"
                                                alt
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 gallery-right">
                                        <div
                                            className="single-img wow fadeInRight"
                                            data-wow-delay="0.5s"
                                        >
                                            <img
                                                className="animate-float-bob-y"
                                                src="/img/circle-image-gallery/03.jpg"
                                                alt
                                            />
                                        </div>
                                        <div
                                            className="single-img wow fadeInLeft"
                                            data-wow-delay="0.6s"
                                        >
                                            <img
                                                src="/img/circle-image-gallery/02.jpg"
                                                alt
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="about-text">
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
                                    beatae vitae dicta sunt explicabo. Nemo enim
                                    ipsam voluptatemsy quia voluptas sit
                                    aspernatur aut odit aut fugit quia conquntur
                                    magni dolores eos qui ratione voluptatem
                                </p>
                                <a
                                    href="about.html"
                                    className="template-btn mt-40"
                                >
                                    Learn More <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== About Section End ======*/}
            <div className="wcu-with-doctors">
                {/*====== Why Choose Section Start ======*/}
                <section className="wcu-section section-gap-top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="section-heading heading-white text-center mb-40">
                                    <span className="tagline">
                                        Why Choose Our Medical
                                    </span>
                                    <h2 className="title">
                                        Breakthrough in Comprehensive, Flexible
                                        Care Delivery Models
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div
                                    className="image-title-box mt-30 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <h4 className="title">
                                        <a href="service.html">
                                            Optimize Your Health Care Services
                                        </a>
                                    </h4>
                                    <div className="image">
                                        <img
                                            src="/img/img-title-box/01.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div
                                    className="image-title-box mt-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <h4 className="title">
                                        <a href="service.html">
                                            Boost Employee Engagement
                                        </a>
                                    </h4>
                                    <div className="image">
                                        <img
                                            src="/img/img-title-box/02.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div
                                    className="image-title-box mt-30 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <h4 className="title">
                                        <a href="service.html">
                                            Accelerate Your Return On Investment
                                        </a>
                                    </h4>
                                    <div className="image">
                                        <img
                                            src="/img/img-title-box/03.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Why Choose Section End ======*/}
                {/*====== Doctor Section Start ======*/}
                <section className="doctors-section bg-color-grey polygon-pattern-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="section-heading text-center mb-40">
                                    <span className="tagline">
                                        Professional Team
                                    </span>
                                    <h2 className="title">
                                        Meet Our Experience Team Members
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center doctors-loop">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/18.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Allan K. Simons
                                            </a>
                                        </h5>
                                        <span className="specialty">
                                            Dental Specialist
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
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/19.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Marcus K. Staton
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
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/20.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                Travis A. Costillo
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
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/21.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <a href="doctor-details.html">
                                                M.Calhoun
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
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Doctor Section End ======*/}
            </div>
            {/*====== FAQ Section Start ======*/}
            <section className="faq-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="faq-image text-center text-lg-left mb-md-50">
                                <img
                                    src="/img/section-img/faq-image.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-11">
                            <div className="faq-content pl-xl-5">
                                <div className="section-heading mb-30">
                                    <span className="tagline">
                                        How Can We help
                                    </span>
                                    <h2 className="title">
                                        Flexible &amp; Responsive to Changing
                                        Needs
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error voluptatem accusantium doloremque
                                    laudantium totam rem aperieaqueys epsa quae
                                    abillo inventore veritatis et quase
                                </p>
                                <div
                                    className="accordion accordion-style-two mt-30"
                                    id="accordionFaq"
                                >
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemOne"
                                            >
                                                <span>
                                                    Advanced Equipment and Best
                                                    Dentists
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemOne"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Orem psum dolor sit amet
                                                    consectetur adipiscing elit
                                                    sed do eiusmod tempor
                                                    incididunt ut labore ets
                                                    dolore magna aliqua uispsum
                                                    suspendisse
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item active-accordion">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemTwo"
                                            >
                                                <span>
                                                    Our 10 Years Working
                                                    Experience
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse show"
                                            id="itemTwo"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Orem psum dolor sit amet
                                                    consectetur adipiscing elit
                                                    sed do eiusmod tempor
                                                    incididunt ut labore ets
                                                    dolore magna aliqua uispsum
                                                    suspendisse
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemThree"
                                            >
                                                <span>
                                                    Advanced Equipment and Best
                                                    Dentists
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemThree"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Orem psum dolor sit amet
                                                    consectetur adipiscing elit
                                                    sed do eiusmod tempor
                                                    incididunt ut labore ets
                                                    dolore magna aliqua uispsum
                                                    suspendisse
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
            {/*====== FAQ Section End ======*/}
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

export default about;
