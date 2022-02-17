import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const faq = () => {
    const [isOpen, setOpen] = useState(false);
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
                                <Accordion defaultActiveKey="0" flush>
                                    <div
                                        className="accordion"
                                        id="accordionFaq"
                                    >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            There Is No Such
                                                            Thing As A CSS
                                                            Absolute Unit
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            Build An E-Commerce
                                                            Site With Angular
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            There Is No Such
                                                            Thing As A CSS
                                                            Absolute Unit
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            A Guide To
                                                            Attracting Clients
                                                            To Your Agency
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            Useful Front-End
                                                            boilerplate's And
                                                            Starter Kits
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            There Is No Such
                                                            Thing As A CSS
                                                            Absolute Unit
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            Primer On CSS
                                                            Container Queries
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            Newly Supported,
                                                            Modern CSS
                                                            Pseudo-Class
                                                            Selectors
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            Useful VS Code
                                                            Extensions For
                                                            Front-End Developers
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            There Is No Such
                                                            Thing As A CSS
                                                            Absolute Unit
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            Primer On CSS
                                                            Container Queries
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11">
                                            <Accordion.Header>
                                                <div className="accordion-header">
                                                    <h6>
                                                        <span>
                                                            Newly Supported,
                                                            Modern CSS
                                                            Pseudo-Class
                                                            Selectors
                                                        </span>
                                                    </h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <p>
                                                        Sed ut perspiciatis unde
                                                        omnis iste natus error
                                                        volup cusantium
                                                        doloremque laudantium,
                                                        totam rem aperiam eaque
                                                        ipsa quae abillo
                                                        inventore veritatis et
                                                        quasi architecto beatae
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>
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

                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpen(true);
                                            }}
                                            className="video-popup"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </Link>
                                    <ModalVideo
                                        channel="youtube"
                                        className="video-popup"
                                        autoplay
                                        isOpen={isOpen}
                                        videoId="U3ASj1L6_sY"
                                        onClose={() => setOpen(false)}
                                    />
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
