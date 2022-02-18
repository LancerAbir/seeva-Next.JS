import { useState } from "react";

const StartOffCanvas = ({ isActive }) => {
    const [closeTab, setCloseTab] = useState(false);
    const closeToggle = () => {
        setCloseTab(!closeTab);
    };

    return (
        <>
            <div
                className={`slide-panel off-canvas-panel ${
                    closeTab ? "hide-panel" : ""
                }  ${isActive ? "show-panel" : ""}`}
            >
                <div className="panel-overlay" />
                <div className="panel-inner">
                    <div className="canvas-logo">
                        <img src="/img/logo.png" alt />
                    </div>
                    <div className="about-us">
                        <h5 className="canvas-widget-title">About Us</h5>
                        <p>
                            Sed perspiciatis unde omnis iste natus error
                            voluptatem accusantium doloremque laudantium totam
                            rem aperams eaque ipsa quae abillo.
                        </p>
                    </div>
                    <div className="contact-us">
                        <h5 className="canvas-widget-title">Contact Us</h5>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt" />
                                354 Oakridge, Camden NJ 08102 - USA
                            </li>
                            <li>
                                <i className="far fa-envelope-open" />
                                <a href="mailto:support@qolle.com">
                                    support@seeva.com
                                </a>
                                <a href="mailto:info@qolle.com">
                                    info@seeva.com
                                </a>
                            </li>

                            <li>
                                <i className="fas fa-phone" />
                                <a href="tel:+01234567899">+012 (345) 678 99</a>
                                <br />
                                <a href="tel:+8563214">+8563214</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="panel-close" onClick={closeToggle}>
                        <i className="fas fa-times" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default StartOffCanvas;
