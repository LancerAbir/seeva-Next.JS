import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";

const gallery = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <PageTitle />
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
            <Footer />
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default gallery;
