import { useRouter } from "next/router";
import FooterAboutUs from "../../Template Parts/FooterAboutUs";
import FooterCtaBoxes from "../../Template Parts/FooterCtaBoxes";
import FooterCtaBoxesOne from "../../Template Parts/FooterCtaBoxesOne";
import FooterOpeningNotice from "../../Template Parts/FooterOpeningNotice";

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
            } ${
                currentPath == "/index-four"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            } ${
                currentPath == "/index-five"
                    ? "template-footer-white template-hover-tertiary"
                    : ""
            }  ${
                currentPath == "/about"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            }${
                currentPath == "/contact"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            }   ${
                currentPath == "/service"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            }  ${
                currentPath == "/service-two"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            }  ${
                currentPath == "/service-details"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            } ${
                currentPath == "/gallery"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            }
            ${
                currentPath == "/appointments"
                    ? "template-footer-white have-cta-boxes-two"
                    : ""
            }
            ${currentPath == "/pricing" ? "have-cta-boxed-one" : ""}
            ${currentPath == "/faq" ? "have-cta-boxed-one" : ""}
            ${currentPath == "/doctors" ? "have-cta-boxed-one" : ""}
            ${currentPath == "/doctor-details" ? "have-cta-boxed-one" : ""}
            ${currentPath == "/blog-standard" ? "have-cta-boxed-one" : ""}
            ${currentPath == "/blog-details" ? "have-cta-boxed-one" : ""}
            ${currentPath == "/shop" ? "have-cta-boxed-one" : ""}
            ${currentPath == "/product-details" ? "have-cta-boxed-one" : ""}
            `}
        >
            {currentPath == "/" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/pricing" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/faq" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/doctors" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/doctor-details" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/blog-standard" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/blog-details" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/shop" ? (
                <FooterCtaBoxesOne />
            ) : currentPath == "/product-details" ? (
                <FooterCtaBoxesOne />
            ) : (
                ""
            )}

            {currentPath == "/index-three" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/index-four" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/about" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/service" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/service-two" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/service-details" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/gallery" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/appointments" ? (
                <FooterCtaBoxes />
            ) : currentPath == "/contact" ? (
                <FooterCtaBoxes />
            ) : (
                ""
            )}

            <div
                className={`footer-inner ${
                    currentPath === "/index-two" ? "bg-color-primary" : ""
                } ${currentPath === "/" ? "bg-color-grey" : ""} ${
                    currentPath === "/index-three" ? "bg-color-primary" : ""
                } ${currentPath === "/index-four" ? "bg-color-primary" : ""} ${
                    currentPath === "/index-five"
                        ? "bg-size-cover bg-color-fourth"
                        : ""
                } ${currentPath === "/about" ? "bg-color-primary" : ""} 
                ${currentPath === "/contact" ? "bg-color-primary" : ""} 
                ${currentPath === "/service" ? "bg-color-primary" : ""} 
                ${currentPath === "/service-two" ? "bg-color-primary" : ""} 
                ${currentPath === "/service-details" ? "bg-color-primary" : ""}
                ${currentPath === "/gallery" ? "bg-color-primary" : ""}
                ${currentPath === "/appointments" ? "bg-color-primary" : ""}
                ${currentPath === "/pricing" ? "bg-color-grey" : ""}
                ${currentPath === "/faq" ? "bg-color-grey" : ""}
                ${currentPath === "/doctors" ? "bg-color-grey" : ""}
                ${currentPath === "/doctor-details" ? "bg-color-grey" : ""}
                ${currentPath === "/blog-standard" ? "bg-color-grey" : ""}
                ${currentPath === "/blog-details" ? "bg-color-grey" : ""}
                ${currentPath === "/shop" ? "bg-color-grey" : ""}
                ${currentPath === "/product-details" ? "bg-color-grey" : ""}
                `}
                style={{
                    backgroundImage:
                        currentPath == "/index-five"
                            ? "url(/img/footer/footer-bg-pattern.jpg)"
                            : "",
                }}
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
                                        ) : currentPath == "/index-five" ? (
                                            <img
                                                src="/img/logo-white-3.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath == "/pricing" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath == "/faq" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath == "/doctors" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath == "/doctor-details" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath == "/blog-standard" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath == "/blog-details" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath == "/shop" ? (
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        ) : currentPath ==
                                          "/product-details" ? (
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
                                                <i className="fa-solid fa-location-dot"></i>
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
                                                <i className="fa-solid fa-phone-flip"></i>
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
                                    {currentPath == "/" ? (
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
                                    ) : currentPath == "/index-three" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/index-four" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/index-five" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/about" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/service" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/service-two" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/service-details" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/gallery" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/appointments" ? (
                                        <FooterAboutUs />
                                    ) : currentPath == "/contact" ? (
                                        <FooterAboutUs />
                                    ) : (
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
                                    )}
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
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </form>
                                    {currentPath == "/index-three" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/index-four" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/index-five" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/about" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/service" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/service-two" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/service-details" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/gallery" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/appointments" ? (
                                        <FooterOpeningNotice />
                                    ) : currentPath == "/contact" ? (
                                        <FooterOpeningNotice />
                                    ) : (
                                        ""
                                    )}
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
