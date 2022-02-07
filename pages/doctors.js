import Header from "../src/layout/Header/Header";

const doctors = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section className="page-title-area">
                <div className="container">
                    <h1 className="page-title">Meet The Doctors</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Meet Our Doctors</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Doctor Section Start ======*/}
            <section className="doctors-section section-gap">
                <div className="container">
                    <div className="row doctors-loop justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
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
                            <div className="doctor-box-one mb-30">
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
                                    <span className="specialty">Neurology</span>
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
                            <div className="doctor-box-one mb-30">
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
                            <div className="doctor-box-one mb-30">
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
                            <div className="doctor-box-one mb-30">
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
                                    <span className="specialty">Neurology</span>
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
                            <div className="doctor-box-one mb-30">
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
                            <div className="doctor-box-one mb-30">
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
                            <div className="doctor-box-one mb-30">
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
                                    <span className="specialty">Neurology</span>
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
                            <div className="doctor-box-one mb-30">
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
                    <div className="load-more-doctors text-center mt-40">
                        <a
                            href="#"
                            className="template-btn template-btn-primary"
                        >
                            Male An Appointment <i className="far fa-plus" />
                        </a>
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

export default doctors;
