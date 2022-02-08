import Link from "next/link";
import Header from "../src/layout/Header/Header";

const serviceTwo = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section
                className="page-title-area page-title-bg"
                style={{
                    backgroundImage: "url(/img/section-bg/page-title.jpg)",
                }}
            >
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Services</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="services-area section-gap-top-less bg-color-grey">
                <div className="container">
                    <div className="row justify-content-center service-loop">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/heart.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Cardiology</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/lungs.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Pulmonary</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/brain.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Neurology</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img
                                        src="/img/icon/stomach.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Gastroenterology</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/virus.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Covid - 19</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img
                                        src="/img/icon/bronchus.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Orthopedics</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/eye.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Eye Caring</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/teeth.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Dental Caring</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img
                                        src="/img/icon/heart-4.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Dental Caring</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
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
            {/*====== Appointment Section Start ======*/}
            <section className="appointment-section section-gap">
                <div className="container">
                    <div className="appointment-form-two">
                        <div className="form-wrap">
                            <div className="section-heading mb-40">
                                <span className="tagline">
                                    Make an Appointment
                                </span>
                                <h2 className="title">
                                    Make an Appointment to Doctor Visit
                                </h2>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-field">
                                            <select>
                                                <option
                                                    value={1}
                                                    selected
                                                    disabled
                                                >
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
                                    <div className="col-12">
                                        <div className="input-field">
                                            <select>
                                                <option
                                                    value={1}
                                                    selected
                                                    disabled
                                                >
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
                                    <div className="col-12">
                                        <div className="input-field">
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className="col-12">
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
                                backgroundImage: "url(/img/appointment/07.jpg)",
                            }}
                        ></div>
                    </div>
                </div>
            </section>
            {/*====== Appointment Section End ======*/}
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

export default serviceTwo;
