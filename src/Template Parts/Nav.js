import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <>
            <nav
                className={`site-menu ${
                    currentPath == "/index-three"
                        ? "item-extra-gap item-left"
                        : "menu-gap-left"
                } d-none d-xl-block ${
                    currentPath == "/index-four" ? "item-extra-gap-two" : ""
                }`}
            >
                <ul className="primary-menu">
                    <li
                        className={` ${
                            currentPath === "/"
                                ? "active"
                                : currentPath === "/index-two"
                                ? "active"
                                : currentPath === "/index-three"
                                ? "active"
                                : currentPath === "/index-four"
                                ? "active"
                                : currentPath === "/index-five"
                                ? "active"
                                : ""
                        }`}
                    >
                        <Link href="/">
                            <a>
                                Home <i className="far fa-plus" />
                            </a>
                        </Link>
                        <ul className="sub-menu">
                            <li
                                className={` ${
                                    currentPath === "/" ? "active" : ""
                                }`}
                            >
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
                    <li
                        className={` ${
                            currentPath === "/about" ? "active" : ""
                        }`}
                    >
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li
                        className={` ${
                            currentPath === "/service"
                                ? "active"
                                : currentPath === "/service-two"
                                ? "active"
                                : currentPath === "/service-details"
                                ? "active"
                                : currentPath === "/pricing"
                                ? "active"
                                : currentPath === "/faq"
                                ? "active"
                                : currentPath === "/gallery"
                                ? "active"
                                : currentPath === "/appointments"
                                ? "active"
                                : ""
                        }`}
                    >
                        <a href="#">
                            Pages <i className="far fa-plus" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/service">
                                    <a>
                                        Services <i className="far fa-plus" />
                                    </a>
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
                    <li
                        className={` ${
                            currentPath === "/doctors"
                                ? "active"
                                : currentPath === "/doctor-details"
                                ? "active"
                                : ""
                        }`}
                    >
                        <Link href="/doctors">
                            <a>
                                Doctors <i className="far fa-plus" />
                            </a>
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/doctors">
                                    <a>Doctor</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/doctor-details">
                                    <a>Doctor Details</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={` ${
                            currentPath === "/blog-standard"
                                ? "active"
                                : currentPath === "/blog-details"
                                ? "active"
                                : ""
                        }`}
                    >
                        <Link href="/blog-standard">
                            <a>
                                Blog <i className="far fa-plus" />
                            </a>
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/blog-standard">
                                    <a>Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                    <a>Blog Details</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={` ${
                            currentPath === "/shop"
                                ? "active"
                                : currentPath === "/product-details"
                                ? "active"
                                : ""
                        }`}
                    >
                        <Link href="/shop">
                            <a>
                                Shop <i className="far fa-plus" />
                            </a>
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/shop">
                                    <a>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/product-details">
                                    <a>Shop Details</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={` ${
                            currentPath === "/contact" ? "active" : ""
                        }`}
                    >
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    {currentPath == "/index-four" ? (
                        <li>
                            <a href="#" className="search-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </li>
                    ) : currentPath == "/index-three" ? (
                        <li>
                            <a href="#" className="search-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </li>
                    ) : (
                        ""
                    )}
                </ul>
            </nav>
            {currentPath == "/index-five" ? (
                <ul className="extra-icons">
                    <li className="d-none d-sm-block">
                        <a href="#" className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                    <li className="d-none d-sm-block">
                        <a href="#" className="cart-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                    <li className="d-none d-sm-block">
                        <a href="#" className="wishlist-icon">
                            <i className="far fa-heart" />
                        </a>
                    </li>
                    <li className="d-xl-none">
                        <a href="#" className="navbar-toggler">
                            <span />
                            <span />
                            <span />
                        </a>
                    </li>
                </ul>
            ) : (
                ""
            )}
        </>
    );
};

export default Nav;
