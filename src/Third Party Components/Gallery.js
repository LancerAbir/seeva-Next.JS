import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    // require("../../public/img/gallery/01.jpg"),
    // require("../../public/img/gallery/02.jpg"),
    // require("../../public/img/gallery/03.jpg"),
    // require("../../public/img/gallery/04.jpg"),
    // require("../../public/img/gallery/05.jpg"),
    // require("../../public/img/gallery/06.jpg"),
    // require("../../public/img/gallery/07.jpg"),
    // require("../../public/img/gallery/08.jpg"),
    "https://www.linkpicture.com/q/01_146.jpg",
    "https://www.linkpicture.com/q/02_178.jpg",
    "https://www.linkpicture.com/q/03_148.jpg",
    "https://www.linkpicture.com/q/04_127.jpg",
    "https://www.linkpicture.com/q/05_117.jpg",
    "https://www.linkpicture.com/q/06_11.jpg",
    "https://www.linkpicture.com/q/07_3.jpg",
    "https://www.linkpicture.com/q/08_68.jpg",
    "https://www.linkpicture.com/q/09_56.jpg",
    "https://www.linkpicture.com/q/10_371.jpg",
    "https://www.linkpicture.com/q/11_412.jpg",
    "https://www.linkpicture.com/q/12_116.jpg",
    "https://www.linkpicture.com/q/13_77.jpg",
    "https://www.linkpicture.com/q/14_275.jpg",
    "https://www.linkpicture.com/q/15_79.jpg",
    "https://www.linkpicture.com/q/16_63.jpg",
    "https://www.linkpicture.com/q/17_58.jpg",
];

class Gallery extends Component {
    state = {
        photoIndex: 0,
        isOpenImage: false,
    };

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="gallery-section section-gap-top">
                <div className="container-fluid fluid-70">
                    <div className="section-heading text-center mb-40">
                        <span className="tagline">Medical Photo Gallery</span>
                        <h2 className="title">
                            Medical Services &amp; Inside Views
                        </h2>
                    </div>
                    <div className="row gallery-loop justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/01.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/01.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 0,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/02.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/02.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 1,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/03.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/03.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 2,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/04.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/04.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 3,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/05.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/05.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 4,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/06.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/06.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 5,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/07.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/07.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 6,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="gallery-item-one mt-30">
                                <div className="gallery-thumbnail">
                                    <img
                                        src="/img/gallery/08.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="gallery-caption">
                                    <div>
                                        <a
                                            href="/img/gallery/08.jpg"
                                            className="plus-icon"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    isOpenImage: true,
                                                    photoIndex: 7,
                                                });
                                            }}
                                        ></a>
                                        <h3 className="title">
                                            <a href="#">Medical Doctors</a>
                                        </h3>
                                        <p>259+ Doctors Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={
                                    images[(photoIndex + 1) % images.length]
                                }
                                prevSrc={
                                    images[
                                        (photoIndex + images.length - 1) %
                                            images.length
                                    ]
                                }
                                onCloseRequest={() =>
                                    this.setState({ isOpenImage: false })
                                }
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex:
                                            (photoIndex + images.length - 1) %
                                            images.length,
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex:
                                            (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;
