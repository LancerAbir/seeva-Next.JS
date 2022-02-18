import Link from "next/link";

const MobilePanel = () => {
    return (
        <>
            <div className="slide-panel mobile-slide-panel">
                <div className="panel-overlay" />
                <div className="panel-inner">
                    <div className="panel-logo">
                        <img src="/img/logo.png" alt />
                    </div>
                    <nav className="mobile-menu">
                        <ul className="primary-menu">
                            <li className="active">
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
                            <li>
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
                                                    <a>Service Details</a>
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
                    <a href="#" className="panel-close">
                        <i className="fas fa-times" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default MobilePanel;
