import Link from "next/link";
import Nav from "./Nav";

const MainMenu = () => {
    return (
        <>
            <div className="container-fluid container-1400">
                <div className="header-navigation">
                    <div className="header-left">
                        <div className="site-logo">
                            <Link href="/">
                                <a>
                                    <img src="/img/logo.png" alt="Seeva" />
                                </a>
                            </Link>
                        </div>
                        {/* Start Nav */}
                        <Nav />
                        {/* End Nav */}
                    </div>
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
                </div>
            </div>
        </>
    );
};

export default MainMenu;
