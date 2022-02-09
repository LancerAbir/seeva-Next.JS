import Link from "next/link";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";

const about = () => {
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
                    <h1 className="page-title">About</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>About</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== About Section Start ======*/}
            <section className="about-section section-gap">
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="circle-image-gallery mb-md-50">
                                <div className="row">
                                    <div className="col-6 gallery-left">
                                        <div
                                            className="single-img wow fadeInLeft"
                                            data-wow-delay="0.3s"
                                        >
                                            <img
                                                src="/img/circle-image-gallery/01.jpg"
                                                alt
                                            />
                                        </div>
                                        <div
                                            className="single-img wow fadeInRight"
                                            data-wow-delay="0.4s"
                                        >
                                            <img
                                                src="/img/circle-image-gallery/04.jpg"
                                                alt
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 gallery-right">
                                        <div
                                            className="single-img wow fadeInRight"
                                            data-wow-delay="0.5s"
                                        >
                                            <img
                                                className="animate-float-bob-y"
                                                src="/img/circle-image-gallery/03.jpg"
                                                alt
                                            />
                                        </div>
                                        <div
                                            className="single-img wow fadeInLeft"
                                            data-wow-delay="0.6s"
                                        >
                                            <img
                                                src="/img/circle-image-gallery/02.jpg"
                                                alt
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="about-text">
                                <div className="section-heading mb-35">
                                    <span className="tagline">About Seeva</span>
                                    <h2 className="title">
                                        All-in-One Worksite Health Solution
                                    </h2>
                                    <p>
                                        25 Years Of Experience in Medical
                                        Services
                                    </p>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error voluptatem accusantium doloremque
                                    laudantium totam rem aperieaque ipsa quae ab
                                    illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo. Nemo enim
                                    ipsam voluptatemsy quia voluptas sit
                                    aspernatur aut odit aut fugit quia conquntur
                                    magni dolores eos qui ratione voluptatem
                                </p>
                                <Link href="/about">
                                    <a className="template-btn mt-40">
                                        Learn More <i className="far fa-plus" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== About Section End ======*/}
            <div className="wcu-with-doctors">
                {/*====== Why Choose Section Start ======*/}
                <section className="wcu-section section-gap-top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="section-heading heading-white text-center mb-40">
                                    <span className="tagline">
                                        Why Choose Our Medical
                                    </span>
                                    <h2 className="title">
                                        Breakthrough in Comprehensive, Flexible
                                        Care Delivery Models
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div
                                    className="image-title-box mt-30 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <h4 className="title">
                                        <Link href="/service">
                                            <a>
                                                Optimize Your Health Care
                                                Services
                                            </a>
                                        </Link>
                                    </h4>
                                    <div className="image">
                                        <img
                                            src="/img/img-title-box/01.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div
                                    className="image-title-box mt-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <h4 className="title">
                                        <Link href="/service">
                                            <a>Boost Employee Engagement</a>
                                        </Link>
                                    </h4>
                                    <div className="image">
                                        <img
                                            src="/img/img-title-box/02.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div
                                    className="image-title-box mt-30 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <h4 className="title">
                                        <Link href="/service">
                                            <a>
                                                Accelerate Your Return On
                                                Investment
                                            </a>
                                        </Link>
                                    </h4>
                                    <div className="image">
                                        <img
                                            src="/img/img-title-box/03.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Why Choose Section End ======*/}
                {/*====== Doctor Section Start ======*/}
                <section className="doctors-section bg-color-grey polygon-pattern-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="section-heading text-center mb-40">
                                    <span className="tagline">
                                        Professional Team
                                    </span>
                                    <h2 className="title">
                                        Meet Our Experience Team Members
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center doctors-loop">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/18.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <Link href="/doctor-details">
                                                <a>Allan K. Simons</a>
                                            </Link>
                                        </h5>
                                        <span className="specialty">
                                            Dental Specialist
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/19.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <Link href="/doctor-details">
                                                <a>Marcus K. Staton</a>
                                            </Link>
                                        </h5>
                                        <span className="specialty">
                                            Neurology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/20.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <Link href="/doctor-details">
                                                <a>Travis A. Costillo</a>
                                            </Link>
                                        </h5>
                                        <span className="specialty">
                                            Orthopedics
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="doctor-box-three mt-30 wow fadeInUp"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="doctor-photo">
                                        <img
                                            src="/img/doctors/21.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="doctor-information">
                                        <h5 className="name">
                                            <Link href="/doctor-details">
                                                <a>M.Calhoun</a>
                                            </Link>
                                        </h5>
                                        <span className="specialty">
                                            Cardiology
                                        </span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="plus-icon">
                                            <i className="far fa-plus" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Doctor Section End ======*/}
            </div>
            {/*====== FAQ Section Start ======*/}
            <section className="faq-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="faq-image text-center text-lg-left mb-md-50">
                                <img
                                    src="/img/section-img/faq-image.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-11">
                            <div className="faq-content pl-xl-5">
                                <div className="section-heading mb-30">
                                    <span className="tagline">
                                        How Can We help
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
                                <div
                                    className="accordion accordion-style-two mt-30"
                                    id="accordionFaq"
                                >
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <h6
                                                data-toggle="collapse"
                                                aria-expanded="true"
                                                data-target="#itemOne"
                                            >
                                                <span>
                                                    Advanced Equipment and Best
                                                    Dentists
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
                                                    Orem psum dolor sit amet
                                                    consectetur adipiscing elit
                                                    sed do eiusmod tempor
                                                    incididunt ut labore ets
                                                    dolore magna aliqua uispsum
                                                    suspendisse
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
                                                    Our 10 Years Working
                                                    Experience
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
                                                    Orem psum dolor sit amet
                                                    consectetur adipiscing elit
                                                    sed do eiusmod tempor
                                                    incididunt ut labore ets
                                                    dolore magna aliqua uispsum
                                                    suspendisse
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
                                                    Advanced Equipment and Best
                                                    Dentists
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
                                                    Orem psum dolor sit amet
                                                    consectetur adipiscing elit
                                                    sed do eiusmod tempor
                                                    incididunt ut labore ets
                                                    dolore magna aliqua uispsum
                                                    suspendisse
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
            <Footer />
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default about;
