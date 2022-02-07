import Header from "../src/layout/Header/Header";

const appointments = () => {
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
                    <h1 className="page-title">Appointment</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Appointment</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Appointment Section Start ======*/}
            <section className="appointment-section section-gap">
                <div className="container container-1500">
                    <div className="appointment-form-two style-two">
                        <div
                            className="appointment-image"
                            style={{
                                backgroundImage: "url(/img/appointment/03.jpg)",
                            }}
                        ></div>
                        <div className="form-wrap">
                            <div className="section-heading mb-50">
                                <span className="tagline">
                                    Make an Appointment
                                </span>
                                <h2 className="title">
                                    Fill-up The From to Get Our Medical Services
                                </h2>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <select>
                                                <option
                                                    value={1}
                                                    selected
                                                    disabled
                                                >
                                                    Choose Doctors
                                                </option>
                                                <option value={2}>
                                                    Doctor One
                                                </option>
                                                <option value={3}>
                                                    Doctor Two
                                                </option>
                                                <option value={4}>
                                                    Doctor Three
                                                </option>
                                                <option value={5}>
                                                    Doctor Four
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <select>
                                                <option
                                                    value={1}
                                                    selected
                                                    disabled
                                                >
                                                    Services Category
                                                </option>
                                                <option value={2}>
                                                    Service One
                                                </option>
                                                <option value={3}>
                                                    Service Two
                                                </option>
                                                <option value={4}>
                                                    Service Three
                                                </option>
                                                <option value={5}>
                                                    Service Four
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <button
                                                type="submit"
                                                className="template-btn"
                                            >
                                                Make an Appointment
                                                <i className="far fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Appointment Section End ======*/}
            {/*====== Skill Section Start ======*/}
            <section className="skill-section section-gap border-top-primary">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="tile-gallery-two pr-lg-3">
                                <div className="image-one">
                                    <img
                                        src="/img/tile-gallery/04.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div
                                    className="image-two text-right wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <img
                                        src="/img/tile-gallery/05.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <div className="skill-content pl-xl-5 mt-md-50">
                                <div className="section-heading mb-20">
                                    <span className="tagline">
                                        Professional Skills
                                    </span>
                                    <h2 className="title">
                                        25 Years Of Experience In Medical
                                        Services
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis natus error
                                    voluptatem santium doloremque laudantium
                                    totam rem aperieaque ipsa quae abillo ven
                                    veritatis et quasi architecto beatae vitae
                                    dicta.
                                </p>
                                <div
                                    className="skills-items mt-50 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={89}
                                        data-line-color="#499afa"
                                        data-line-bg="#e4f0fe"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Medical Care
                                            </h5>
                                            <span className="progress-percentage">
                                                89%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={64}
                                        data-line-color="#ffae00"
                                        data-line-bg="#fff3d9"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Family Care
                                            </h5>
                                            <span className="progress-percentage">
                                                64%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={78}
                                        data-line-color="#b505ff"
                                        data-line-bg="#f4daff"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Child Care
                                            </h5>
                                            <span className="progress-percentage">
                                                78%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                    <div
                                        className="progress-bar-wrapper mb-40"
                                        data-percentage={85}
                                        data-line-color="#ff3000"
                                        data-line-bg="#ffe0d9"
                                    >
                                        <div className="progress-title-wrap">
                                            <h5 className="progress-title">
                                                Senior Care
                                            </h5>
                                            <span className="progress-percentage">
                                                85%
                                            </span>
                                        </div>
                                        <div className="progress-line-wrap">
                                            <div className="progress-line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill Section End ======*/}
            {/*====== Back to Top Start ======*/}
            <a className="back-to-top" href="#">
                <i className="far fa-angle-up" />
            </a>
            {/*====== Back to Top End ======*/}
            {/*====== Start Template Footer ======*/}
            <footer className="template-footer template-footer-white have-cta-boxes-two">
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

export default appointments;
