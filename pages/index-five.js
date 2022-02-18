import Link from "next/link";
import Slider from "react-slick";
import Footer from "../src/layout/Footer/Footer";
import Header5 from "../src/layout/Header/Header5";
import Counter from "../src/Third Party Components/Counter";

const indexFive = () => {
    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="hero-slider-arrow hero-slider-arrow-top">
                <button className="slick-arrow prev-arrow" onClick={onClick}>
                    <i className="fas fa-angle-left" />
                </button>
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="hero-slider-arrow">
                <button className="slick-arrow next-arrow" onClick={onClick}>
                    <i className="fas fa-angle-right" />
                </button>
            </div>
        );
    };

    const settings = {
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header5 />
            {/*====== End Template Header ======*/}
            {/*====== Hero Slider Start ======*/}
            <section className="hero-slider hero-slider-two style-two">
                <div className="hero-slider-active">
                    <Slider {...settings}>
                        <div className="single-hero-slider">
                            <div
                                className="hero-slider-bg bg-size-cover"
                                style={{
                                    backgroundImage:
                                        "url(/img/hero-img/hero-slider-6.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-md-9">
                                        <div className="hero-content">
                                            <span
                                                className="tagline"
                                                data-animation="fadeInDown"
                                                data-delay="0.5s"
                                            >
                                                Love Respect &amp; Care
                                            </span>
                                            <h1
                                                className="title"
                                                data-animation="fadeInLeft"
                                                data-delay="0.6s"
                                            >
                                                Medicine Care &amp; Pharmacy
                                            </h1>
                                            <a
                                                href="#"
                                                className="template-btn template-btn-bordered"
                                                data-animation="fadeInUp"
                                                data-delay="0.7s"
                                            >
                                                Explore Our Service
                                                <i className="far fa-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-hero-slider">
                            <div
                                className="hero-slider-bg bg-size-cover"
                                style={{
                                    backgroundImage:
                                        "url(/img/hero-img/hero-slider-7.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-md-9">
                                        <div className="hero-content">
                                            <span
                                                className="tagline"
                                                data-animation="fadeInDown"
                                                data-delay="0.5s"
                                            >
                                                Love Respect &amp; Care
                                            </span>
                                            <h1
                                                className="title"
                                                data-animation="fadeInLeft"
                                                data-delay="0.6s"
                                            >
                                                Medicine Care &amp; Pharmacy
                                            </h1>
                                            <a
                                                href="#"
                                                className="template-btn template-btn-bordered"
                                                data-animation="fadeInUp"
                                                data-delay="0.7s"
                                            >
                                                Explore Our Service
                                                <i className="far fa-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                {SampleNextArrow}
                {SamplePrevArrow}
            </section>
            {/*====== Hero Slider End ======*/}
            {/*====== Features Section Start ======*/}
            <section className="feature-section pharmacy-feature">
                <div className="container wow fadeInUp" data-wow-delay="0.3s">
                    <div className="row no-gutters justify-content-center feature-loop">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="iconic-box-three">
                                <div className="icon">
                                    <i className="flaticon-medicine" />
                                </div>
                                <h4 className="title">Medicine Care</h4>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accu
                                </p>
                                <a href="#" className="box-link">
                                    Read More <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="iconic-box-three featured-box">
                                <div className="icon">
                                    <i className="flaticon-stethoscope" />
                                </div>
                                <h4 className="title">Doctors Services</h4>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accu
                                </p>
                                <a href="#" className="box-link">
                                    Read More <i className="far fa-plus" />
                                </a>
                                <span className="big-icon">
                                    <i className="flaticon-stethoscope" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="iconic-box-three">
                                <div className="icon">
                                    <i className="flaticon-flask" />
                                </div>
                                <h4 className="title">Medical Equipment</h4>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accu
                                </p>
                                <a href="#" className="box-link">
                                    Read More <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Features Section ENd ======*/}
            {/*====== About Section Start ======*/}
            <section className="about-section section-gap">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-img">
                                <img
                                    src="/img/section-img/about-img-3.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="about-content mt-md-50">
                                <div className="section-heading mb-20">
                                    <span className="tagline color-tertiary">
                                        About Seeva
                                    </span>
                                    <h2 className="title">
                                        25 Years We Provide Medicine Service
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit volupta tem accusantium doloremque
                                    laudantium totam rem aperiam eaque ipsa quae
                                    abillo inventore veritatis et quase
                                </p>
                                <ul className="check-list-two mt-40">
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <h5>Pharmacy Care</h5>
                                        <p>
                                            Volupta tem accusantium doloremque
                                            laudantium totam rem aperiam eaque
                                            ipsa quae abillo
                                        </p>
                                    </li>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <h5>Doctors Care</h5>
                                        <p>
                                            Quis autem vel eum iure
                                            reprehenderit voluptate velit esse
                                            quam nihil molestiae consequa
                                        </p>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="template-btn template-btn-fourth mt-40 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    Learn More <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== About Section End ======*/}
            {/*====== Product Tab Section Start ======*/}
            <section className="product-tab-section bg-color-grey section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="section-heading text-center mb-70">
                                <span className="tagline color-tertiary">
                                    Pharmacy Products
                                </span>
                                <h2 className="title">
                                    Our Popular Medical Products That We
                                    Provides
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="product-tab-nav mb-20">
                                <ul
                                    className="nav nav-tabs"
                                    id="productTab"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#cat-dental"
                                            role="tab"
                                        >
                                            <span className="icon">
                                                <i className="flaticon-dental-care-2" />
                                            </span>
                                            <span>Dental</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#cat-eye"
                                            role="tab"
                                        >
                                            <span className="icon">
                                                <i className="flaticon-eye" />
                                            </span>
                                            <span>Eye Care</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#cat-vitamins"
                                            role="tab"
                                        >
                                            <span className="icon">
                                                <i className="flaticon-pills" />
                                            </span>
                                            <span>Vitamins</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#cat-calcium"
                                            role="tab"
                                        >
                                            <span className="icon">
                                                <i className="flaticon-pills-1" />
                                            </span>
                                            <span>Calcium</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#cat-covid"
                                            role="tab"
                                        >
                                            <span className="icon">
                                                <i className="flaticon-virus" />
                                            </span>
                                            <span>Covid - 19</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tab-content" id="productTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="cat-dental"
                                    role="tabpanel"
                                >
                                    <div className="row justify-content-center product-boxes">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/01.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/02.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Eye Care Drop</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/03.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/04.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Syrup Glass
                                                                Bottles
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/05.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Rubber Glove</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/06.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin D Syrup
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/07.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/08.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>N95 Face Mask</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="cat-eye"
                                    role="tabpanel"
                                >
                                    <div className="row justify-content-center product-boxes">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/01.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/02.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Eye Care Drop</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/03.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/04.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Syrup Glass
                                                                Bottles
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/05.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Rubber Glove</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/06.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin D Syrup
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/07.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/08.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>N95 Face Mask</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="cat-vitamins"
                                    role="tabpanel"
                                >
                                    <div className="row justify-content-center product-boxes">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/01.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/02.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Eye Care Drop</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/03.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/04.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Syrup Glass
                                                                Bottles
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/05.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Rubber Glove</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/06.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin D Syrup
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/07.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/08.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>N95 Face Mask</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="cat-calcium"
                                    role="tabpanel"
                                >
                                    <div className="row justify-content-center product-boxes">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/01.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/02.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Eye Care Drop</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/03.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/04.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Syrup Glass
                                                                Bottles
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/05.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Rubber Glove</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/06.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin D Syrup
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/07.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/08.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>N95 Face Mask</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="cat-covid"
                                    role="tabpanel"
                                >
                                    <div className="row justify-content-center product-boxes">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/01.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/02.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Eye Care Drop</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/03.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/04.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Syrup Glass
                                                                Bottles
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/05.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>Rubber Glove</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/06.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin D Syrup
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/07.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>
                                                                Vitamin Tablet
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="product-box mt-30">
                                                <div className="thumbnail">
                                                    <img
                                                        src="/img/products/08.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <Link href="/product-details">
                                                            <a>N95 Face Mask</a>
                                                        </Link>
                                                    </h5>
                                                    <span className="price">
                                                        $29.87
                                                    </span>
                                                </div>
                                                <div className="hover-action">
                                                    <ul className="action-btns">
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-expand" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-repeat" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a
                                                        href="#"
                                                        className="add-to-cart"
                                                    >
                                                        Add to cart
                                                        <i className="far fa-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Product Tab Section End ======*/}
            {/*====== Feature Section Start ======*/}
            <section className="feature-medicine-section section-gap">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-10 order-lg-last">
                            <div className="tile-gallery-three">
                                <div className="image-one">
                                    <img
                                        src="/img/tile-gallery/06.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="image-two">
                                    <img
                                        className="animate-float-bob-y"
                                        src="/img/tile-gallery/07.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 col-sm-10">
                            <div className="feature-content pr-xl-5 mt-md-50">
                                <div className="section-heading mb-20">
                                    <span className="tagline color-tertiary">
                                        Features Medicine
                                    </span>
                                    <h2 className="title">
                                        Our Medicine for Good Health
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloreue
                                    laudantium totam rem aperiam eaque quae
                                    abillo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas
                                </p>
                                <a
                                    href="#"
                                    className="template-btn template-btn-tertiary mt-40  wow fadeInLeft"
                                    data-wow-delay="0.4s"
                                >
                                    Learn More <i className="far fa-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cta-boxes mt-50">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-9">
                                <div
                                    className="cta-boxed-four mt-30"
                                    style={{
                                        backgroundImage:
                                            "url(/img/cta-img/cta-boxed-4-1.jpg)",
                                    }}
                                >
                                    <span
                                        className="cta-tagline wow fadeInDown"
                                        data-wow-delay="0.3s"
                                    >
                                        Spa &amp; Beauty
                                    </span>
                                    <h3 className="cta-title">
                                        Face Beauty Loson Men &amp; Women
                                    </h3>
                                    <a
                                        href="#"
                                        className="template-btn template-btn-white wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        Shop Now <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <div
                                    className="cta-boxed-four mt-30"
                                    style={{
                                        backgroundImage:
                                            "url(/img/cta-img/cta-boxed-4-2.jpg)",
                                    }}
                                >
                                    <span
                                        className="cta-tagline wow fadeInDown"
                                        data-wow-delay="0.3s"
                                    >
                                        Spa &amp; Beauty
                                    </span>
                                    <h3 className="cta-title">
                                        Vitamin Calcium Tablet &amp; Syrup
                                    </h3>
                                    <a
                                        href="#"
                                        className="template-btn template-btn-fourth wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        Shop Now <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Feature Section End ======*/}
            {/*====== Cta With Counter Start ======*/}
            <div className="cta-with-counter">
                <section
                    className="cta-section bg-size-cover"
                    style={{
                        backgroundImage:
                            "url(/img/cta-img/cta-section-bg-2.jpg)",
                    }}
                >
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="cta-content color-white text-center">
                                    <div className="section-heading heading-white mb-20">
                                        <span className="tagline">
                                            Make An Appointment
                                        </span>
                                        <h2 className="title">
                                            Looking For Any Doctor Or Nurses
                                            Join Us Now
                                        </h2>
                                    </div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloreue laudantium totamrem aperiam
                                        eaque quae abillo
                                    </p>
                                    <ul className="cta-buttons d-sm-flex justify-content-center mt-40 flex-wrap">
                                        <li className="mr-sm-2">
                                            <a
                                                href="#"
                                                className="template-btn template-btn-tertiary wow fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                Appointment
                                                <i className="far fa-plus" />
                                            </a>
                                        </li>
                                        <li className="mt-3 mt-sm-0">
                                            <a
                                                href="#"
                                                className="template-btn template-btn-white wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                Contact Us
                                                <i className="far fa-plus" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="counter-section">
                    <div className="container">
                        <div className="counter-inner-three bg-color-tertiary">
                            <div className="row justify-content-between">
                                <div className="col-lg-auto col-md-5 col-sm-6">
                                    <div className="counter-item counter-white">
                                        <div className="counter-wrap">
                                            <span className="counter">
                                                <Counter end={359} />
                                            </span>
                                            <span className="suffix">+</span>
                                        </div>
                                        <h6 className="title">
                                            Professional Doctors
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-5 col-sm-6">
                                    <div className="counter-item counter-white">
                                        <div className="counter-wrap">
                                            <span className="counter">
                                                <Counter end={85} />
                                            </span>
                                            <span className="suffix">k+</span>
                                        </div>
                                        <h6 className="title">
                                            Satisfied Our Clients
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-5 col-sm-6">
                                    <div className="counter-item counter-white">
                                        <div className="counter-wrap">
                                            <span className="counter">
                                                <Counter end={863} />
                                            </span>
                                            <span className="suffix">+</span>
                                        </div>
                                        <h6 className="title">
                                            Win International Awards
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-5 col-sm-6">
                                    <div className="counter-item counter-white">
                                        <div className="counter-wrap">
                                            <span className="counter">
                                                <Counter end={86} />
                                            </span>
                                            <span className="suffix">k+</span>
                                        </div>
                                        <h6 className="title">
                                            4.9 Star Reviews
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/*====== Cta With Counter End ======*/}
            {/*====== Product Carousel Start ======*/}
            <section className="product-carousel-section section-gap">
                <div className="container">
                    <div className="product-carousel-heading mb-70">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-sm-8">
                                <div className="section-heading">
                                    <span className="tagline color-tertiary">
                                        Pharmacy Products
                                    </span>
                                    <h2 className="title">Featured Products</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-4">
                                <div className="product-carousel-arrows" />
                            </div>
                        </div>
                    </div>
                    <div className="row product-carousel">
                        <div className="col-lg-3">
                            <div className="product-box product-box-bg">
                                <div className="thumbnail">
                                    <img
                                        src="/img/products/07.png"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/product-details">
                                            <a>Vitamin Tablet</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$29.87</span>
                                </div>
                                <div className="hover-action">
                                    <ul className="action-btns">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-expand" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-repeat" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="add-to-cart">
                                        Add to cart
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-box product-box-bg">
                                <div className="thumbnail">
                                    <img
                                        src="/img/products/09.png"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/product-details">
                                            <a>Covid Face Mask</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$29.87</span>
                                </div>
                                <div className="hover-action">
                                    <ul className="action-btns">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-expand" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-repeat" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="add-to-cart">
                                        Add to cart
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-box product-box-bg">
                                <div className="thumbnail">
                                    <img
                                        src="/img/products/10.png"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/product-details">
                                            <a>Hand Sanitizer</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$29.87</span>
                                </div>
                                <div className="hover-action">
                                    <ul className="action-btns">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-expand" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-repeat" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="add-to-cart">
                                        Add to cart
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-box product-box-bg">
                                <div className="thumbnail">
                                    <img
                                        src="/img/products/11.png"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/product-details">
                                            <a>Syrup Glass Bottles</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$29.87</span>
                                </div>
                                <div className="hover-action">
                                    <ul className="action-btns">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-expand" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-repeat" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="add-to-cart">
                                        Add to cart
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-box product-box-bg">
                                <div className="thumbnail">
                                    <img
                                        src="/img/products/01.png"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/product-details">
                                            <a>Vitamin Tablet</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$29.87</span>
                                </div>
                                <div className="hover-action">
                                    <ul className="action-btns">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-expand" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-repeat" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="add-to-cart">
                                        Add to cart
                                        <i className="far fa-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Product Carousel End ======*/}
            {/*====== Latest Blog Start ======*/}
            <section className="latest-blog-section bg-color-grey section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-9">
                            <div className="section-heading text-center mb-40">
                                <span className="tagline color-tertiary">
                                    Latest News &amp; Blog
                                </span>
                                <h2 className="title">
                                    Get Every Single Updates For Medical &amp;
                                    Health
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center latest-blog-loop">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="latest-blog-two style-two mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/latest-blog/07.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a href="#" className="blog-category">
                                            Health
                                        </a>
                                        <a href="#" className="blog-date">
                                            <i className="far fa-calendar-alt" />
                                            25 Aug 2021
                                        </a>
                                    </div>
                                    <h4 className="blog-title">
                                        <Link href="/blog-details">
                                            <a>
                                                Comprehensive Worksire Health
                                                Progranm Built
                                            </a>
                                        </Link>
                                    </h4>
                                    <p>
                                        Sed perspiciatis unde omnis natus error
                                        voluptatem accusantium dolore mque
                                        laudantium totam rem
                                    </p>
                                    <Link href="/blog-details">
                                        <a className="template-btn">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="latest-blog-two style-two mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/latest-blog/08.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a href="#" className="blog-category">
                                            Health
                                        </a>
                                        <a href="#" className="blog-date">
                                            <i className="far fa-calendar-alt" />
                                            25 Aug 2021
                                        </a>
                                    </div>
                                    <h4 className="blog-title">
                                        <Link href="/blog-details">
                                            <a>
                                                Front-End Performance Checklist
                                                2021 PDF
                                            </a>
                                        </Link>
                                    </h4>
                                    <p>
                                        Sed perspiciatis unde omnis natus error
                                        voluptatem accusantium dolore mque
                                        laudantium totam rem
                                    </p>
                                    <Link href="/blog-details">
                                        <a className="template-btn">
                                            Read More
                                            <i className="far fa-plus" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="latest-blog-two style-two mt-30">
                                <div className="thumbnail">
                                    <img
                                        src="/img/latest-blog/09.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a href="#" className="blog-category">
                                            Health
                                        </a>
                                        <a href="#" className="blog-date">
                                            <i className="far fa-calendar-alt" />
                                            25 Aug 2021
                                        </a>
                                    </div>
                                    <h4 className="blog-title">
                                        <Link href="/blog-details">
                                            <a>
                                                DevTools Debugging Tips Shortcut
                                                Chrome Fire
                                            </a>
                                        </Link>
                                    </h4>
                                    <p>
                                        Sed perspiciatis unde omnis natus error
                                        voluptatem accusantium dolore mque
                                        laudantium totam rem
                                    </p>
                                    <Link href="/blog-details">
                                        <a className="template-btn">
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
            {/*====== Latest Blog End ======*/}
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

export default indexFive;
