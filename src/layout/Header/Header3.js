import React from "react";
import MainMenu from "../../Template Parts/MainMenu";
import MobilePanel from "../../Template Parts/MobilePanel";
import StartOffCanvas from "../../Template Parts/StartOffCanvas";

const Header3 = () => {
    return (
        <>
            <header className="template-header header-three">
                <div className="header-top-list-one d-none d-lg-block">
                    <div className="container">
                        <div className="list-items">
                            <div className="single-list-item">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img src="/img/logo-white.png" alt />
                                    </a>
                                </div>
                            </div>
                            <div className="single-list-item">
                                <div className="contact-info">
                                    <div className="icon">
                                        <img
                                            src="/img/icon/map-white.png"
                                            alt="Icon"
                                        />
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
                                        <img
                                            src="/img/icon/phone-white.png"
                                            alt="Icon"
                                        />
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
        </>
    );
};

export default Header3;
