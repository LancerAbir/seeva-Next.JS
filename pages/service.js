import Link from "next/link";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";

const service = () => {
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
                                            <Link href="/service-details">
                                                <a>Cardiology</a>
                                            </Link>
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
                                            <Link href="/service-details">
                                                <a>Neurology</a>
                                            </Link>
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
                                            <Link href="/service-details">
                                                <a>Orthopedics</a>
                                            </Link>
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
                                            <Link href="/service-details">
                                                <a>Covid 19</a>
                                            </Link>
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
                                            <Link href="/service-details">
                                                <a>Orthopedics</a>
                                            </Link>
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
                                            <Link href="/service-details">
                                                <a>Pulmonary</a>
                                            </Link>
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
            <Footer />
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default service;
