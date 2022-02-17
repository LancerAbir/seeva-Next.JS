import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";
import Counter from "../src/Third Party Components/Counter";
import Line1 from "../src/Third Party Components/Progress Bar/Line1";
import Line2 from "../src/Third Party Components/Progress Bar/Line2";
import Line3 from "../src/Third Party Components/Progress Bar/Line3";
import Line4 from "../src/Third Party Components/Progress Bar/Line4";

const appointments = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <PageTitle />
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
                                                <Counter end={89} />
                                                %%
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
                                                <Counter end={64} />
                                                %%
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
                                                <Counter end={78} />
                                                %%
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
                                                <Counter end={85} />
                                                %%
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

export default appointments;
