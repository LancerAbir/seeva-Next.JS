import Header from "../src/layout/Header/Header";

const gallery = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section className="page-title-area">
                <div className="container">
                    <h1 className="page-title">Our Gallery</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Gallery Area Start ======*/}
            <section className="gallery-section section-gap">
                <div className="container">
                    <div className="gallery-filter mb-30">
                        <ul>
                            <li className="active" data-filter="*">
                                Show All
                            </li>
                            <li data-filter=".medical">Medical</li>
                            <li data-filter=".senior-care">Senior Care</li>
                            <li data-filter=".family-care">Family Care</li>
                            <li data-filter=".dental-care">Dental Care</li>
                        </ul>
                    </div>
                    <div className="row gallery-loop gallery-filter-item">
                        <div className="col-lg-4 col-sm-6 medical dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/09.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/09.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 senior-care medical">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/10.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/10.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 family-care dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/11.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/11.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 medical family-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/12.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/12.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 senior-care dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/13.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/13.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 family-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/14.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/14.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 medical senior-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/15.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/15.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 senior-care dental-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/16.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/16.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 medical family-care">
                            <div className="gallery-item-two mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/17.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/17.jpg"
                                            className="plus-icon"
                                        >
                                            <i className="far fa-plus" />
                                        </a>
                                        <h3 className="title">
                                            <a href="#">
                                                Covid Vaccine <br /> Testing
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="read-more text-center mt-60">
                        <a href="#" className="template-btn">
                            View More Gallery <i className="far fa-plus" />
                        </a>
                    </div>
                </div>
            </section>
            {/*====== Gallery Area End ======*/}
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

export default gallery;
