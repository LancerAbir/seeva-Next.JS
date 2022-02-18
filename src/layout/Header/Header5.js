import Sticky from "react-sticky-el";
import MainMenu from "../../Template Parts/MainMenu";
import MobilePanel from "../../Template Parts/MobilePanel";

const Header5 = () => {
    return (
        <header className="template-header sticky-header sticky-header header-five">
            <div className="header-top-list-two d-none d-lg-block">
                <div className="container container-1300">
                    <div className="list-items">
                        <div className="single-list-item">
                            <div className="contact-info">
                                <div className="icon">
                                    <img src="/img/icon/clock.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <span className="info-title">
                                        Opening Hour
                                    </span>
                                    <a href="#" className="info-desc">
                                        Sun - Friday, 08 am - 09 pm
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="single-list-item">
                            <div className="contact-info">
                                <div className="icon">
                                    <img src="/img/icon/map.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <span className="info-title">
                                        Medical Address
                                    </span>
                                    <a href="#" className="info-desc">
                                        55 Main Road, USA
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="single-list-item">
                            <div className="contact-info">
                                <div className="icon">
                                    <img src="/img/icon/phone.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <span className="info-title">
                                        Phone Number
                                    </span>
                                    <a href="#" className="info-desc">
                                        +012(345) 456
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sticky className="sticky-on">
                {/* Start MainMenu */}
                <MainMenu />
                {/* End MainMenu */}
                {/* Start Mobile Panel */}
                <MobilePanel />
                {/* Start Mobile Panel */}
            </Sticky>
        </header>
    );
};

export default Header5;
