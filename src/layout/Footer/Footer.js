import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <footer
            className={`template-footer ${
                currentPath == "/index-two" ? "template-footer-white" : ""
            } ${currentPath == "/" ? "have-cta-boxed-one" : ""} ${
                currentPath == "/index-three"
                    ? "bg-color-grey template-footer-white have-cta-boxes-two"
                    : ""
            }`}
        >
            {currentPath == "/" ? (
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
            ) : (
                ""
            )}

            {currentPath == "/index-three" ? (
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
            ) : (
                ""
            )}

            <div
                className={`footer-inner ${
                    currentPath === "/index-two" ? "bg-color-primary" : ""
                } ${currentPath === "/" ? "bg-color-grey" : ""} ${
                    currentPath === "/index-three" ? "bg-color-primary" : ""
                }  `}
            >
                <div className="container">
                    <div className="footer-widgets">
                        <div className="row">
                            <div className="col-lg-3 col-md-8">
                                <div className="widget text-widget">
                                    <div className="footer-logo">
                                        {currentPath == "/" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : (
                                            <img
                                                src="/img/logo-white.png"
                                                alt="Medibo"
                                            />
                                        )}
                                    </div>
                                    <p>
                                        Sed ut perspi unde omniste natus error
                                        sit voluptatem acc doloremque laudantium
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
                                                    <a href="#">Urgent Care</a>
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
                            © 2021 <a href="#">Seeva</a>. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
