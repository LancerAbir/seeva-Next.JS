import Header from "../src/layout/Header/Header";

const service = () => {
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
                    <h1 className="page-title">Our Services</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Services</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="services-area section-gap-top-less bg-color-grey">
                <div className="container">
                    <div className="row justify-content-center service-loop">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fancy-content-box-two no-shadow mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/05.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img src="/img/icon/heart-2.png" alt />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Cardiology
                                            </a>
                                        </h4>
                                        <p>
                                            Amet consect ascnge eiusmod tempors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fancy-content-box-two no-shadow mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/06.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img src="/img/icon/brain-2.png" alt />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Neurology
                                            </a>
                                        </h4>
                                        <p>
                                            Quis autem reprehe nderit voluptate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fancy-content-box-two no-shadow mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/07.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img
                                            src="/img/icon/stomach-2.png"
                                            alt
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Orthopedics
                                            </a>
                                        </h4>
                                        <p>
                                            Amet consect ascnge eiusmod tempors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fancy-content-box-two no-shadow mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/08.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img src="/img/icon/virus-2.png" alt />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Covid 19
                                            </a>
                                        </h4>
                                        <p>
                                            Quis autem reprehe nderit voluptate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fancy-content-box-two no-shadow mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/09.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img src="/img/icon/bronchus.png" alt />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Orthopedics
                                            </a>
                                        </h4>
                                        <p>
                                            Quis autem reprehe nderit voluptate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fancy-content-box-two no-shadow mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/iconic-box/10.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="icon">
                                        <img src="/img/icon/lungs.png" alt />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="service-details.html">
                                                Pulmonary
                                            </a>
                                        </h4>
                                        <p>
                                            Quis autem reprehe nderit voluptate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
            {/*====== Appointment Section Start ======*/}
            <section className="appointment-section">
                <div className="appointment-form-three bg-color-secondary">
                    <div
                        className="appointment-image"
                        style={{
                            backgroundImage: "url(/img/appointment/04.jpg)",
                        }}
                    ></div>
                    <div className="form-wrap">
                        <div className="section-heading text-center heading-white mb-60">
                            <span className="tagline">Make an Appointment</span>
                            <h2 className="title">
                                Fill-up The From to Get Our Medical Services
                            </h2>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            placeholder="Your Full Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <select>
                                            <option value={1} selected disabled>
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
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <select>
                                            <option value={1} selected disabled>
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
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="input-field">
                                        <button
                                            type="submit"
                                            className="template-btn template-btn-primary"
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
            </section>
            {/*====== Appointment Section End ======*/}
            {/*====== Feature Section Start ======*/}
            <section className="feature-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-6 order-lg-last">
                            <div className="feature-img text-center text-lg-right">
                                <img
                                    src="/img/section-img/feature-img.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="feature-text mt-md-50">
                                <div className="section-heading mb-30">
                                    <span className="tagline">
                                        How Can We Help
                                    </span>
                                    <h2 className="title">
                                        Flexible &amp; Responsive to Changing
                                        Needs
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error voluptatem accusantium doloremque
                                    laudantium totam rem aperieaqueys epsa quae
                                    abillo inventore veritatis et quase
                                </p>
                                <div className="row">
                                    <div className="col-lg-5 col-sm-6">
                                        <div
                                            className="simple-icon mt-40 wow fadeInUp"
                                            data-wow-delay="0.3s"
                                        >
                                            <div className="icon">
                                                <i className="flaticon-stethoscope" />
                                            </div>
                                            <h4 className="title">
                                                Professional Doctors
                                            </h4>
                                            <p>
                                                Sed perspiciatis unde omnis
                                                natus error
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-sm-6">
                                        <div
                                            className="simple-icon mt-40 wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <div className="icon">
                                                <i className="flaticon-checkup" />
                                            </div>
                                            <h4 className="title">
                                                Very Friendly Environment
                                            </h4>
                                            <p>
                                                Sed perspiciatis unde omnis
                                                natus error
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Feature Section End ======*/}
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

export default service;
