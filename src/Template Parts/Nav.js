import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <nav
            className={`site-menu ${
                currentPath == "/index-three"
                    ? "item-extra-gap item-left"
                    : "menu-gap-left"
            } d-none d-xl-block`}
        >
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
                <li>
                    <Link href="/blog-standard">
                        <a>Blog</a>
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
                <li>
                    <Link href="/shop">
                        <a>Shop</a>
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
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
