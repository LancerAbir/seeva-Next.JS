import Header from "../src/layout/Header/Header";

const faq = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section className="page-title-area">
                <div className="container">
                    <h1 className="page-title">Help &amp; FAQ</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Help &amp; FAQ</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== FAQ Section Start ======*/}
            <section className="faq-section section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="faq-page-content pr-xl-4">
                                <h3 className="faq-title">
                                    Frequently Asked Questions
                                </h3>
                                <p className="mb-35">
                                    Amet consectetur adipiscing sed eiusmod
                                    tempor incididunt labore et dolore magna
                                    aliqua. Quis ipsum suspendisse ultrices
                                    gravida. Risus commodo viverra maecenas
                                    accumsan lacus vel facilisis.
                                </p>
                                <div className="accordion" id="accordionFaq">
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemOne"
                                            >
                                                <span>
                                                    There Is No Such Thing As A
                                                    CSS Absolute Unit
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemOne"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item active-accordion">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemTwo"
                                            >
                                                <span>
                                                    Build An E-Commerce Site
                                                    With Angular
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse show"
                                            id="itemTwo"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemThree"
                                            >
                                                <span>
                                                    There Is No Such Thing As A
                                                    CSS Absolute Unit
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemThree"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemFour"
                                            >
                                                <span>
                                                    A Guide To Attracting
                                                    Clients To Your Agency
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemFour"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemFive"
                                            >
                                                <span>
                                                    Useful Front-End
                                                    boilerplate's And Starter
                                                    Kits
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemFive"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemSix"
                                            >
                                                <span>
                                                    There Is No Such Thing As A
                                                    CSS Absolute Unit
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemSix"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemSeven"
                                            >
                                                <span>
                                                    Primer On CSS Container
                                                    Queries
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemSeven"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemEight"
                                            >
                                                <span>
                                                    Newly Supported, Modern CSS
                                                    Pseudo-Class Selectors
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemEight"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemNine"
                                            >
                                                <span>
                                                    Useful VS Code Extensions
                                                    For Front-End Developers
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemNine"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemTen"
                                            >
                                                <span>
                                                    There Is No Such Thing As A
                                                    CSS Absolute Unit
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemTen"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemEleven"
                                            >
                                                <span>
                                                    Primer On CSS Container
                                                    Queries
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemEleven"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemTwelve"
                                            >
                                                <span>
                                                    Newly Supported, Modern CSS
                                                    Pseudo-Class Selectors
                                                </span>
                                            </h6>
                                        </div>
                                        <div
                                            className="collapse"
                                            id="itemTwelve"
                                            data-parent="#accordionFaq"
                                        >
                                            <div className="accordion-content">
                                                <p>
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error volup
                                                    cusantium doloremque
                                                    laudantium, totam rem
                                                    aperiam eaque ipsa quae
                                                    abillo inventore veritatis
                                                    et quasi architecto beatae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="faq-sidebar">
                                <div className="search-widget mb-50">
                                    <h3 className="search-title">
                                        Frequently Asked Questions
                                    </h3>
                                    <form action="#">
                                        <input
                                            type="search"
                                            placeholder="Search Here"
                                        />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="video-widget">
                                    <img
                                        src="/img/section-img/faq-video.jpg"
                                        alt="Image"
                                    />
                                    <a
                                        href="https://www.youtube.com/watch?v=U3ASj1L6_sY"
                                        className="video-popup"
                                    >
                                        <i className="fas fa-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== FAQ Section End ======*/}
            {/*====== Back to Top Start ======*/}
            <a className="back-to-top" href="#">
                <i className="far fa-angle-up" />
            </a>
            {/*====== Back to Top End ======*/}
            {/*====== Start Template Footer ======*/}
            <footer className="template-footer have-cta-boxed-one">
                <div className="cta-boxed-one">
                    <div className="container">
                        <div
                            className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
                            style={{
                                backgroundImage:
                                    "url(/img/cta-img/cta-boxed-bg-1.jpg)",
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
                                                Looking a Doctors to Get Your
                                                Services
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
                <div className="footer-inner bg-color-grey">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="row">
                                <div className="col-lg-3 col-md-8">
                                    <div className="widget text-widget">
                                        <div className="footer-logo">
                                            <img
                                                src="/img/logo.png"
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
                                    <div className="row">
                                        <div className="col-xl-5 col-md-6">
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
                                        <div className="col-xl-7 col-md-6">
                                            <div className="widget instagram-widget">
                                                <h4 className="widget-title">
                                                    Photo Gallery
                                                </h4>
                                                <div className="instagram-images">
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/01.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/02.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/03.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/04.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/05.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/06.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
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

export default faq;
