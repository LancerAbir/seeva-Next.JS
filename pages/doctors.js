import Link from "next/link";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";
import Counter from "../src/Third Party Components/Counter";
import Line1 from "../src/Third Party Components/Progress Bar/Line1";
import Line2 from "../src/Third Party Components/Progress Bar/Line2";
import Line3 from "../src/Third Party Components/Progress Bar/Line3";
import Line4 from "../src/Third Party Components/Progress Bar/Line4";

const doctors = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <PageTitle />
            {/*====== Page Title End ======*/}
            {/*====== Doctor Section Start ======*/}
            <section className="doctors-section section-gap">
                <div className="container">
                    <div className="row doctors-loop justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/01.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Lee S. Williamson</a>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/02.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Greg S. Grinstead</a>
                                        </Link>
                                    </h5>
                                    <span className="specialty">Neurology</span>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/03.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Roger K. Jackson</a>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/04.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Rudolph V. Spitler</a>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/05.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Frank T. Grimsley</a>
                                        </Link>
                                    </h5>
                                    <span className="specialty">Neurology</span>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/06.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Johnny R. Atterberry</a>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/07.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Erik R. Faulkner</a>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/08.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Phillip L. Williams</a>
                                        </Link>
                                    </h5>
                                    <span className="specialty">Neurology</span>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="doctor-box-one mb-30">
                                <div className="doctor-photo">
                                    <img
                                        src="/img/doctors/09.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="doctor-information">
                                    <h5 className="name">
                                        <Link href="/doctor-details">
                                            <a>Michael I. Johnson</a>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="load-more-doctors text-center mt-40">
                        <a
                            href="#"
                            className="template-btn template-btn-primary"
                        >
                            Male An Appointment <i className="far fa-plus" />
                        </a>
                    </div>
                </div>
            </section>
            {/*====== Doctor Section End ======*/}
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
                                    data-wow-delay="0.4s"
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
                                                <Counter end={89} />%
                                            </span>
                                        </div>
                                        <Line1 />
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
                                                <Counter end={64} />%
                                            </span>
                                        </div>
                                        <Line2 />
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
                                                <Counter end={78} />%
                                            </span>
                                        </div>
                                        <Line3 />
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
                                                <Counter end={85} />%
                                            </span>
                                        </div>
                                        <Line4 />
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
            <Footer />
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default doctors;
