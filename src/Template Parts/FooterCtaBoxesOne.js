const FooterCtaBoxesOne = () => {
    return (
        <div className="cta-boxed-one">
            <div className="container">
                <div
                    className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
                    style={{
                        backgroundImage: "url(/img/cta-img/cta-boxed-bg-1.jpg)",
                    }}
                >
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="cta-content text-center">
                                <div className="section-heading heading-white">
                                    <span className="tagline">
                                        Get Free Consultations
                                    </span>
                                    <h2 className="title">
                                        Looking a Doctors to Get Your Services
                                    </h2>
                                </div>
                                <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                                    <li>
                                        <a
                                            href="#"
                                            className="template-btn template-btn-white"
                                        >
                                            Get Free Quote
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="template-btn template-btn-bordered"
                                        >
                                            Get Appointment
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCtaBoxesOne;
