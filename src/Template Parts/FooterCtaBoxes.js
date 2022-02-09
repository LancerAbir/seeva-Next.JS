import React from "react";

const FooterCtaBoxes = () => {
    return (
        <div className="cta-boxes-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                            style={{
                                backgroundImage:
                                    "url(/img/cta-img/cta-boxed-2-1.jpg)",
                            }}
                        >
                            <h2 className="cta-title">
                                Looking a Doctors For Health Care
                            </h2>
                            <a
                                href="#"
                                className="template-btn template-btn-bordered"
                            >
                                Find Doctor
                                <i className="far fa-plus" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                            style={{
                                backgroundImage:
                                    "url(/img/cta-img/cta-boxed-2-2.jpg)",
                            }}
                        >
                            <h2 className="cta-title">
                                Make Appointment Online (24/7)
                            </h2>
                            <a
                                href="#"
                                className="template-btn template-btn-bordered"
                            >
                                Appointment
                                <i className="far fa-plus" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <div
                            className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                            style={{
                                backgroundImage:
                                    "url(/img/cta-img/cta-boxed-2-3.jpg)",
                            }}
                        >
                            <h2 className="cta-title">
                                Innovative Psychial Therapist
                            </h2>
                            <a
                                href="#"
                                className="template-btn template-btn-bordered"
                            >
                                Find Doctor
                                <i className="far fa-plus" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCtaBoxes;
