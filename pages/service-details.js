import Header from "../src/layout/Header/Header";

const serviceDetails = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section
                className="page-title-area page-title-bg"
                style={{
                    backgroundImage: "url(/img/section-bg/page-title.jpg)",
                }}
            >
                <div className="container">
                    <h1 className="page-title">Service Details</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Service Details</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="services-area section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 order-lg-last">
                            <div className="service-details-wrapper">
                                <div className="service-thumbnail mb-50">
                                    <img
                                        src="/img/service/service-details-1.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <h2 className="service-title">
                                    Neurology Care
                                </h2>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    archite cto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspe rnatur aut odit aut fugit
                                    sed quia consequuntur magni dolores eos qui
                                    ratione voluptatem sequi nesciunt. Neque
                                    porro quisquam est qui dolorem ipsum quia
                                    dolor sit amet consect etur, adipisci velit,
                                    sed quia non numquam eius modi tempora
                                    incidunt ut labore et dolore magnam aliquam
                                    quaerat voluptatem. Ut enim ad minima
                                    veniam, quis nostrum exercita tionem ullam
                                    corporis suscipit laboriosam, nisi ut
                                    aliquid ex ea commodi consequatur? Quis
                                    autem vel eum iure reprehenderit qui in ea
                                    voluptate velit esse quam nihil molestiae
                                    cons equatur, vel illum qui dolorem eum
                                    fugiat quo voluptas nulla pariatur
                                </p>
                                <blockquote className="mt-30">
                                    Quis autem vel eum iure reprehenderit qui in
                                    voluptate velit esse quam nihil molestiae
                                    consequatur, vel illum qui dolorem eum
                                    fugiat quo voluptas nulla pariatur
                                </blockquote>
                                <div className="mb-50 mt-50">
                                    <img
                                        src="/img/service/service-details-2.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit sed quia con
                                    sequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro
                                    quisquam est qui dolorem ipsum quia dolor
                                    sit amet consectetur, adipisci velit, sed
                                    quia non numquam eius modi tempora incidunt
                                    ut labore et dolore magnam
                                </p>
                                <ul className="check-list mt-35">
                                    <li>
                                        25-30% estimated savings in
                                        implementation when using Mobile Health
                                        Clinics
                                    </li>
                                    <li>
                                        Activate Mobile Health Clinics in just
                                        weeks
                                    </li>
                                    <li>
                                        Flexible, on-demand access to care
                                        services
                                    </li>
                                    <li>
                                        Supports referrals to provider networks
                                        and care management programs
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-10 order-lg-first">
                            <div className="service-sidebar">
                                <div className="widget departments-list">
                                    <h3 className="widget-title">
                                        Departments
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Orthopedic Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Gynecology Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Primary Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Cardiology Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Cancer Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Dentistry Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Gastrology Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-angle-right" />
                                                Urgent Care
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget appointment-form">
                                    <h3 className="widget-title">
                                        Appointment
                                    </h3>
                                    <p>
                                        Consectetur adipiscing elit sed do
                                        eiusmod tempor incididunt
                                    </p>
                                    <form action="#">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Departments"
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Choose Doctors"
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Date & Time"
                                            />
                                        </div>
                                        <div className="input-field">
                                            <button
                                                type="submit"
                                                className="template-btn"
                                            >
                                                Appointment Now
                                                <i className="far fa-plus" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="widget working-schedule">
                                    <h3 className="widget-title">
                                        Working Hour
                                    </h3>
                                    <ul>
                                        <li>
                                            <span>
                                                <i className="far fa-angle-right" />
                                                Monday
                                            </span>
                                            <span>9:00-19:00</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-angle-right" />
                                                Tuesday
                                            </span>
                                            <span>9:00-19:00</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-angle-right" />
                                                Wednesday
                                            </span>
                                            <span>9:00-19:00</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-angle-right" />
                                                Thursday
                                            </span>
                                            <span>9:00-19:00</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-angle-right" />
                                                Friday
                                            </span>
                                            <span>9:00-19:00</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-angle-right" />
                                                Saturday
                                            </span>
                                            <span>9:00-19:00</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-angle-right" />
                                                Sunday
                                            </span>
                                            <span>9:00-19:00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
            {/*====== Related Services Start ======*/}
            <section className="related-services bg-color-grey section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10">
                            <div className="section-heading text-center mb-40">
                                <span className="tagline">
                                    Popular Medical Services
                                </span>
                                <h2 className="title">
                                    Benefit For Physical Mental and Virtual Care
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center service-loop">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/heart.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <a href="service-details.html">
                                        Cardiology
                                    </a>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <a
                                        className="box-link"
                                        href="service-details.html"
                                    >
                                        Read More <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/lungs.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <a href="service-details.html">Pulmonary</a>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <a
                                        className="box-link"
                                        href="service-details.html"
                                    >
                                        Read More <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/brain.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <a href="service-details.html">Neurology</a>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <a
                                        className="box-link"
                                        href="service-details.html"
                                    >
                                        Read More <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Related Services End ======*/}
            {/*====== Back to Top Start ======*/}
            <a className="back-to-top" href="#">
                <i className="far fa-angle-up" />
            </a>
            {/*====== Back to Top End ======*/}
            {/*====== Start Template Footer ======*/}
            <footer className="template-footer template-footer-white have-cta-boxes-two bg-color-grey">
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
                <div className="footer-inner bg-color-primary">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="row">
                                <div className="col-lg-3 col-md-8">
                                    <div className="widget text-widget">
                                        <div className="footer-logo">
                                            <img
                                                src="/img/logo-white.png"
                                                alt="Medibo"
                                            />
                                        </div>
                                        <p>
                                            Sed ut perspi unde omniste natus
                                            error sit voluptatem acc doloremque
                                            laudantium
                                        </p>
                                        <ul className="contact-list">
                                            <li>
                                                <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                                                    <i className="far fa-map-marker-alt" />
                                                    55 Main Road, USA
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:support@gmail.com">
                                                    <i className="far fa-envelope" />
                                                    support@gmail.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:01267899">
                                                    <i className="far fa-phone" />
                                                    +012 (345) 678 99
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-5 col-sm-6">
                                            <div className="d-flex justify-content-lg-center">
                                                <div className="widget nav-widget">
                                                    <h4 className="widget-title">
                                                        Popular Services
                                                    </h4>
                                                    <ul className="nav-links">
                                                        <li>
                                                            <a href="#">
                                                                Orthopedic Care
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Gynecology Care
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Cardiology Care
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Dentistry Care
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Gastroenterology
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Urgent Care
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-sm-6">
                                            <div className="d-flex justify-content-lg-center">
                                                <div className="widget nav-widget">
                                                    <h4 className="widget-title">
                                                        About Us
                                                    </h4>
                                                    <ul className="nav-links">
                                                        <li>
                                                            <a href="#">
                                                                Success Story
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Need a Career ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Privacy Policy
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Need Support ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Doctors
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Latest News
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-10">
                                    <div className="widget newsletters-widget">
                                        <h4 className="widget-title">
                                            Newsletters
                                        </h4>
                                        <p>
                                            Sed ut perspiciatis unde omniste
                                            <br /> natus error sit voluptatem
                                        </p>
                                        <form
                                            action="#"
                                            className="newsletters-form"
                                        >
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                            />
                                            <button type="submit">
                                                <i className="far fa-arrow-right" />
                                            </button>
                                        </form>
                                        <div className="opening-notice mt-30">
                                            <h6>
                                                <i className="far fa-clock" />
                                                Opening Hours
                                            </h6>
                                            <p>
                                                Sun - Friday, 08:00 am - 05:00
                                                pm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <p>
                                © 2021 <a href="#">Seeva</a>. All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default serviceDetails;
