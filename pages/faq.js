import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";

const faq = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <PageTitle />
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
            <Footer />
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default faq;
