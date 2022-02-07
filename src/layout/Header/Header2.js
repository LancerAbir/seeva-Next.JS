import Link from "next/link";
import MainMenu from "../../Template Parts/MainMenu";
import MobilePanel from "../../Template Parts/MobilePanel";
import StartOffCanvas from "../../Template Parts/StartOffCanvas";

const Header2 = () => {
    return (
        <header className="template-header sticky-header header-two">
            <div className="header-topbar d-none d-md-block">
                <div className="container-fluid container-1400">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4">
                            <ul className="topbar-menu">
                                <li>
                                    <Link href="/faq">
                                        <a>Faq</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery">
                                        <a>Gallery</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <ul className="contact-info">
                                <li>
                                    <a href="#">
                                        <i className="far fa-envelope" />
                                        Email : hotmail@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="far fa-phone" /> Call US :
                                        +012 (345) 6789
                                    </a>
                                </li>
                                <li>
                                    <div className="social-icons">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start MainMenu */}
            <MainMenu />
            {/* End MainMenu */}
            {/* Start Off Canvas */}
            <StartOffCanvas />
            {/* End Off Canvas */}
            {/* Start Mobile Panel */}
            <MobilePanel />
            {/* Start Mobile Panel */}
        </header>
    );
};

export default Header2;
