import Link from "next/link";
import { useRouter } from "next/router";

const PageTitle = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <div>
            <section
                className={` page-title-area ${
                    currentPath === "/about" ? "page-title-bg" : ""
                }
                ${currentPath === "/appointments" ? "page-title-bg" : ""}
                
                ${currentPath === "/service" ? "page-title-bg" : ""}
                
                ${currentPath === "/service-two" ? "page-title-bg" : ""}
                ${currentPath === "/contact" ? "page-title-bg" : ""}
                
                ${currentPath === "/service-details" ? "page-title-bg" : ""}
                `}
                style={{
                    backgroundImage:
                        currentPath === "/about"
                            ? "url(/img/section-bg/page-title.jpg)"
                            : currentPath === "/appointments"
                            ? "url(/img/section-bg/page-title.jpg)"
                            : currentPath === "/service-details"
                            ? "url(/img/section-bg/page-title.jpg)"
                            : currentPath === "/service"
                            ? "url(/img/section-bg/page-title.jpg)"
                            : currentPath === "/service-two"
                            ? "url(/img/section-bg/page-title.jpg)"
                            : currentPath === "/contact"
                            ? "url(/img/section-bg/page-title.jpg)"
                            : "",
                }}
            >
                <div className="container">
                    <h1 className="page-title">
                        {currentPath == "/gallery" ? "Our Gallery" : ""}
                        {currentPath == "/faq" ? "Help & FAQ" : ""}
                        {currentPath == "/pricing" ? "Pricing & Plan" : ""}
                        {currentPath == "/doctors" ? "Meet The Doctors" : ""}
                        {currentPath == "/blog-standard" ? "Blog Standard" : ""}
                        {currentPath == "/blog-details" ? "Blog Details" : ""}
                        {currentPath == "/about" ? "About" : ""}
                        {currentPath == "/appointments" ? "Appointment" : ""}
                        {currentPath == "/service" ? "Our Services" : ""}
                        {currentPath == "/service-two" ? "Our Services" : ""}
                        {currentPath == "/contact" ? "Contact Us" : ""}
                        {currentPath == "/service-details"
                            ? "Service Details"
                            : ""}
                        {currentPath == "/product-details"
                            ? "Product Details"
                            : ""}
                        {currentPath == "/shop" ? "Our Shop" : ""}
                        {currentPath == "/doctor-details"
                            ? "Michael l. Johnson"
                            : ""}
                    </h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        {currentPath == "/gallery" ? <li>Gallery</li> : ""}
                        {currentPath == "/faq" ? <li>Help &amp; FAQ</li> : ""}
                        {currentPath == "/shop" ? <li>Shop</li> : ""}
                        {currentPath == "/about" ? <li>About</li> : ""}
                        {currentPath == "/service" ? <li>Services</li> : ""}
                        {currentPath == "/service-two" ? <li>Services</li> : ""}
                        {currentPath == "/contact" ? <li>Contact Us</li> : ""}
                        {currentPath == "/service-details" ? (
                            <li>Service Details</li>
                        ) : (
                            ""
                        )}
                        {currentPath == "/appointments" ? (
                            <li>Appointment</li>
                        ) : (
                            ""
                        )}
                        {currentPath == "/product-details" ? (
                            <li>Details</li>
                        ) : (
                            ""
                        )}
                        {currentPath == "/blog-details" ? (
                            <li>Blog Details</li>
                        ) : (
                            ""
                        )}
                        {currentPath == "/blog-standard" ? (
                            <li>Blog Standard</li>
                        ) : (
                            ""
                        )}
                        {currentPath == "/pricing" ? (
                            <li>Pricing &amp; Plan</li>
                        ) : (
                            ""
                        )}
                        {currentPath == "/doctors" ? (
                            <li>Meet The Doctors</li>
                        ) : (
                            ""
                        )}
                        {currentPath == "/doctor-details" ? (
                            <li>Doctor Details</li>
                        ) : (
                            ""
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default PageTitle;
