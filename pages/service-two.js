import Link from "next/link";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";

const serviceTwo = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <PageTitle />
            {/*====== Page Title End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="services-area section-gap-top-less bg-color-grey">
                <div className="container">
                    <div className="row justify-content-center service-loop">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/heart.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Cardiology</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/lungs.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Pulmonary</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/brain.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Neurology</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img
                                        src="/img/icon/stomach.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Gastroenterology</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/virus.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Covid - 19</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img
                                        src="/img/icon/bronchus.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Orthopedics</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/eye.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Eye Caring</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img src="/img/icon/teeth.png" alt="Icon" />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Dental Caring</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="iconic-box mt-30">
                                <div className="icon">
                                    <img
                                        src="/img/icon/heart-4.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h4 className="title">
                                    <Link href="/service-details">
                                        <a>Dental Caring</a>
                                    </Link>
                                </h4>
                                <p>
                                    Dolor sit amet consectetur ascing elitsed
                                    eiusmod tempor
                                </p>
                                <div className="box-link-wrap">
                                    <span className="link-icon">
                                        <i className="far fa-plus" />
                                    </span>
                                    <Link href="/service-details">
                                        <a className="box-link">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
            {/*====== Big Tagline Start ======*/}
            <section className="big-tagline">
                <div className="container-fluid">
                    <h2 className="tagline">
                        Learn better health outcomes, improve costs and increase
                        productivity for your business
                    </h2>
                </div>
            </section>
            {/*====== Big Tagline End ======*/}
            {/*====== Appointment Section Start ======*/}
            <section className="appointment-section section-gap">
                <div className="container">
                    <div className="appointment-form-two">
                        <div className="form-wrap">
                            <div className="section-heading mb-40">
                                <span className="tagline">
                                    Make an Appointment
                                </span>
                                <h2 className="title">
                                    Make an Appointment to Doctor Visit
                                </h2>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
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
                                    <div className="col-12">
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
                                    <div className="col-12">
                                        <div className="input-field">
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className="col-12">
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
                        <div
                            className="appointment-image"
                            style={{
                                backgroundImage: "url(/img/appointment/07.jpg)",
                            }}
                        ></div>
                    </div>
                </div>
            </section>
            {/*====== Appointment Section End ======*/}
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

export default serviceTwo;
