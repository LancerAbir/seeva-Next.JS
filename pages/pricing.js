import Header from "../src/layout/Header/Header";

const pricing = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section className="page-title-area">
                <div className="container">
                    <h1 className="page-title">Pricing &amp; Plan</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Pricing &amp; Plan</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Pricing Section Start ======*/}
            <section className="pricing-section section-gap">
                <div className="container">
                    <div className="row justify-content-center mb-40">
                        <div className="col-lg-6 col-sm-10">
                            <div className="section-heading text-center">
                                <span className="tagline">
                                    Our Pricing Plan
                                </span>
                                <h2 className="title">
                                    We Provide A Processional Pricing Package
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pricing-tables">
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="pricing-table color-1 mt-30">
                                <div className="pricing-header">
                                    <div className="pricing-icon">
                                        <img
                                            src="/img/icon/heart-3.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h3 className="pricing-title">
                                        Basic Plan
                                        <span className="tagline">
                                            Save 25%
                                        </span>
                                    </h3>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">$</span>
                                    <span className="price">29.59</span>
                                    <span className="duration">monthly</span>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="template-btn">
                                        Choose Plan
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                                <ul className="pricing-feature">
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        COVID-19
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Eye Infections
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Senior Care
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Cardiology
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Family
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="pricing-table featured-table color-2 mt-30">
                                <div className="pricing-header">
                                    <div className="pricing-icon">
                                        <img
                                            src="/img/icon/heart-3.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h3 className="pricing-title">
                                        Silver Plan
                                        <span className="tagline">
                                            Save 55%
                                        </span>
                                    </h3>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">$</span>
                                    <span className="price">59.59</span>
                                    <span className="duration">monthly</span>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="template-btn">
                                        Choose Plan
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                                <ul className="pricing-feature">
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        COVID-19
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Eye Infections
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Senior Care
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Cardiology
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Family
                                    </li>
                                </ul>
                                <span className="featured-tagline">
                                    Popular
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="pricing-table color-3 mt-30">
                                <div className="pricing-header">
                                    <div className="pricing-icon">
                                        <img
                                            src="/img/icon/heart-3.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h3 className="pricing-title">
                                        Gold Plan
                                        <span className="tagline">
                                            Save 63%
                                        </span>
                                    </h3>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">$</span>
                                    <span className="price">99.59</span>
                                    <span className="duration">monthly</span>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="template-btn">
                                        Choose Plan
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                                <ul className="pricing-feature">
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        COVID-19
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Eye Infections
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Senior Care
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Cardiology
                                    </li>
                                    <li>
                                        <i className="far fa-arrow-right" />
                                        Family
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Pricing Section End ======*/}
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
            {/*====== Help Section Start ======*/}
            <section className="help-section section-gap">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-end align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="help-text-wrapper">
                                <div className="section-heading mb-20">
                                    <span className="tagline">
                                        How Can We Help
                                    </span>
                                    <h2 className="title">
                                        Flexible &amp; Responsive to Changing
                                        Need
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error voluptatem accusantium doloremque
                                    laudantium totam rem aperieaqueys epsa quae
                                    abillo inventore veritatis et quase
                                </p>
                                <ul className="check-list mt-35 pr-xl-4">
                                    <li>
                                        25-30% estimated savings in
                                        implementation when using Mobile Health
                                        Clinics
                                    </li>
                                    <li>
                                        Activate Mobile Health Clinics in just
                                        weeks
                                    </li>
                                    <li>
                                        Flexible, on-demand access to care
                                        services
                                    </li>
                                    <li>
                                        Supports referrals to provider networks
                                        and care management programs
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="help-img text-center text-lg-right mt-md-50">
                                <img
                                    src="/img/section-img/help-section-img.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Help Section End ======*/}
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

export default pricing;
