import Header from "../src/layout/Header/Header";

const contact = () => {
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
                    <h1 className="page-title">Contact Us</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Contact Info Section Start ======*/}
            <section className="section-gap contact-top-wrappper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="contact-info-wrapper">
                                <div className="single-contact-info">
                                    <div className="single-contact-info">
                                        <h3 className="info-title">
                                            <i className="fal fa-map-marker-alt" />
                                            Address
                                        </h3>
                                        <p>
                                            7895 Piermont Dr NE Albuquerque,
                                            <br />
                                            NM 198866, See Our Stores
                                        </p>
                                    </div>
                                    <div className="single-contact-info">
                                        <h3 className="info-title">
                                            <i className="fal fa-coffee" /> Get
                                            In Touch
                                        </h3>
                                        <ul>
                                            <li>
                                                <span>Phone Number</span>
                                                <a href="tel:+012020200">
                                                    +012 (345) 6789
                                                </a>
                                            </li>
                                            <li>
                                                <span>Email Address</span>
                                                <a href="mailto:support@gmail.com">
                                                    support@gmail.com
                                                </a>
                                            </li>
                                            <li>
                                                <span>Hotline</span>
                                                <a href="tel:+12345678">
                                                    12345678
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="single-contact-info">
                                        <h3 className="info-title">
                                            <i className="fal fa-comments" />
                                            Follow Us
                                        </h3>
                                        <p>
                                            Sit amet consectetur adipiscing elit
                                            sed do eiusmod tempor incididunt ut
                                            labore
                                        </p>
                                        <p className="social-icon">
                                            <a href="#">
                                                <i className="fab fa-facebook" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-twitter-square" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-youtube-square" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="working-hour-chart">
                                <h2 className="chart-title">Working Hour</h2>
                                <ul>
                                    <li>
                                        <span>
                                            <i className="far fa-angle-right" />
                                            Monday
                                        </span>
                                        <span>9:00-19:00</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-angle-right" />
                                            Tuesday
                                        </span>
                                        <span>9:00-19:00</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-angle-right" />
                                            Wednesday
                                        </span>
                                        <span>9:00-19:00</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-angle-right" />
                                            Thursday
                                        </span>
                                        <span>9:00-19:00</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-angle-right" />
                                            Friday
                                        </span>
                                        <span>9:00-19:00</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-angle-right" />
                                            Saturday
                                        </span>
                                        <span>9:00-19:00</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-angle-right" />
                                            Sunday
                                        </span>
                                        <span>9:00-19:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Contact Info Section End ======*/}
            {/*====== Contact Form Start ======*/}
            <section className="contact-form-area">
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107201.226767341!2d-74.05027451789393!3d40.71534534062428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634195102348!5m2!1sen!2sbd"
                        loading="lazy"
                    />
                </div>
                <div className="section-gap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-heading mb-60 text-center">
                                    <span className="tagline">
                                        We're Ready To Help You
                                    </span>
                                    <h2 className="title">Leave a Message</h2>
                                </div>
                                <form action="#" className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-field">
                                                <label htmlFor="name">
                                                    Your Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Michael M. Smith"
                                                    id="name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-field">
                                                <label htmlFor="email">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="support@gmail.com"
                                                    id="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-field">
                                                <label htmlFor="number">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="+012 (345) 678 99"
                                                    id="number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-field">
                                                <label htmlFor="website">
                                                    Website
                                                </label>
                                                <input
                                                    type="url"
                                                    placeholder="www.seeva.com"
                                                    id="website"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-field">
                                                <label htmlFor="message">
                                                    Write Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    placeholder="Write Message...."
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="text-center">
                                                <button className="template-btn">
                                                    Send Us Message
                                                    <i className="far fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Contact Form End ======*/}
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

export default contact;
