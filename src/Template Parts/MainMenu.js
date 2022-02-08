import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "./Nav";

const MainMenu = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <>
            <div
                className={`${
                    currentPath == "/index-four"
                        ? "container container-1450"
                        : "container-fluid container-1400"
                } ${
                    currentPath == "/index-five"
                        ? "container container-1600"
                        : "container-fluid container-1400"
                } `}
            >
                <div
                    className={`header-navigation ${
                        currentPath == "/index-four"
                            ? "navigation-white-color"
                            : ""
                    }`}
                >
                    <div className="header-left">
                        <div className="site-logo">
                            <Link href="/">
                                <a>
                                    {currentPath == "/index-four" ? (
                                        <img
                                            src="/img/logo-white.png"
                                            alt="Seeva"
                                        />
                                    ) : currentPath == "/index-five" ? (
                                        <img
                                            src="/img/logo-3.png"
                                            alt="Seeva"
                                        />
                                    ) : (
                                        <img src="/img/logo.png" alt="Seeva" />
                                    )}
                                </a>
                            </Link>
                        </div>

                        {/* Start Nav */}
                        <Nav />
                        {/* End Nav */}
                    </div>

                    {currentPath == "/index-four" ? (
                        <div className="header-right">
                            <ul className="extra-icons">
                                <li className="d-none d-sm-block">
                                    <a href="#" className="cart-icon">
                                        <i className="far fa-shopping-cart" />
                                    </a>
                                </li>
                                <li className="d-none d-sm-block">
                                    <a href="#" className="wishlist-icon">
                                        <i className="far fa-heart" />
                                    </a>
                                </li>
                                <li className="d-none d-xl-block">
                                    <div className="off-canvas-btn">
                                        <span />
                                    </div>
                                </li>
                                <li className="d-xl-none">
                                    <a href="#" className="navbar-toggler">
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : currentPath == "/index-five" ? (
                        <div className="header-right d-none d-lg-flex">
                            <ul className="extra-icons">
                                <li>
                                    <a
                                        href="#"
                                        className="template-btn template-btn-tertiary"
                                    >
                                        Get A Quote
                                        <i className="far fa-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="header-right">
                            <ul className="extra-icons">
                                <li className="d-none d-sm-block">
                                    <div className="header-search-area">
                                        <form action="#">
                                            <input
                                                type="search"
                                                placeholder="Search Here"
                                            />
                                            <button type="submit">
                                                <i className="far fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                </li>
                                <li className="d-none d-xl-block">
                                    <div className="off-canvas-btn style-two">
                                        <span />
                                    </div>
                                </li>
                                <li className="d-xl-none">
                                    <a href="#" className="navbar-toggler">
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MainMenu;
