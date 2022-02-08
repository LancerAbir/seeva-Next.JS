import Link from "next/link";
import Header from "../src/layout/Header/Header";

const shop = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section className="page-title-area">
                <div className="container">
                    <h1 className="page-title">Our Shop</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Shop</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Shop Area Start ======*/}
            <section className="shop-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="product-loop-topbar">
                                <div className="row align-items-center justify-content-lg-between">
                                    <div className="col-sm-6">
                                        <div className="product-loop-count">
                                            <p>Showing 12 of 36 Result</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="product-loop-filter">
                                            <select>
                                                <option value={1}>
                                                    Sort by Newness
                                                </option>
                                                <option value={2}>
                                                    Sort by Name
                                                </option>
                                                <option value={3}>
                                                    Sort by Rating
                                                </option>
                                                <option value={4}>
                                                    Sort by Price
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-loop row">
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/01.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Rubber Glove
                                                            Isolated
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/02.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>Medical Face Mask</a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/03.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/04.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Rubber Glove
                                                            Isolated
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/05.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>Medical Face Mask</a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/06.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/07.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/08.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/09.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/10.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/11.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <div className="single-product mb-40">
                                        <div className="thumbnail">
                                            <img
                                                src="/img/shop/products/12.jpg"
                                                alt="Product"
                                            />
                                            <a
                                                href="#"
                                                className="wishlist-btn"
                                            >
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="content-left">
                                                <h6 className="name">
                                                    <Link href="/product-details">
                                                        <a>
                                                            Covid - 19 Face Mask
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <ul className="categories">
                                                    <li>
                                                        <a href>Medical,</a>
                                                    </li>
                                                    <li>
                                                        <a href>Covid - 19 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-right">
                                                <span className="price">
                                                    $24
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="pagination product-pagination">
                                <li>
                                    <a href="#">
                                        <i className="far fa-angle-left" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">01</a>
                                </li>
                                <li>
                                    <a href="#">02</a>
                                </li>
                                <li className="dots">
                                    <span />
                                    <span />
                                    <span />
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="far fa-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="shop-sidebar">
                                <div className="widget categories-widget">
                                    <h5 className="widget-title">
                                        Product Categories
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="#">Canvas Basket</a>
                                        </li>
                                        <li>
                                            <a href="#">Decoration</a>
                                        </li>
                                        <li>
                                            <a href="#">Essentials</a>
                                        </li>
                                        <li>
                                            <a href="#">Furniture</a>
                                        </li>
                                        <li>
                                            <a href="#">Interior</a>
                                        </li>
                                        <li>
                                            <a href="#">Light</a>
                                        </li>
                                        <li>
                                            <a href="#">Outdoor</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget price-filter-widget">
                                    <h5 className="widget-title">
                                        Filter by Price
                                    </h5>
                                </div>
                                <div className="widget product-widget">
                                    <h5 className="widget-title">
                                        Sale Product
                                    </h5>
                                    <ul>
                                        <li>
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/shop/products/sidebar-1.jpg"
                                                    alt="Thumbnail"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">
                                                    <a href="#">Face Mask</a>
                                                </h6>
                                                <span className="price">
                                                    65
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/shop/products/sidebar-2.jpg"
                                                    alt="Thumbnail"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">
                                                    <a href="#">
                                                        Medical Glove
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    65
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/shop/products/sidebar-3.jpg"
                                                    alt="Thumbnail"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">
                                                    <a href="#">Body Belts</a>
                                                </h6>
                                                <span className="price">
                                                    65
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget tags-widget">
                                    <h5 className="widget-title">
                                        Product Tags
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="#">Contemporary</a>
                                        </li>
                                        <li>
                                            <a href="#">Medical</a>
                                        </li>
                                        <li>
                                            <a href="#">Minimal</a>
                                        </li>
                                        <li>
                                            <a href="#">Face Mask</a>
                                        </li>
                                        <li>
                                            <a href="#">Covid 19</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Shop Area End ======*/}
            {/*====== Back to Top Start ======*/}
            <a className="back-to-top" href="#">
                <i className="far fa-angle-up" />
            </a>
            {/*====== Back to Top End ======*/}
            {/*====== Start Template Footer ======*/}
            <footer className="template-footer have-cta-boxed-one">
                <div className="cta-boxed-one">
                    <div className="container">
                        <div
                            className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
                            style={{
                                backgroundImage:
                                    "url(/img/cta-img/cta-boxed-bg-1.jpg)",
                            }}
                        >
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8 col-md-10">
                                    <div className="cta-content text-center">
                                        <div className="section-heading heading-white">
                                            <span className="tagline">
                                                Get Free Consultations
                                            </span>
                                            <h2 className="title">
                                                Looking a Doctors to Get Your
                                                Services
                                            </h2>
                                        </div>
                                        <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="template-btn template-btn-white"
                                                >
                                                    Get Free Quote
                                                    <i className="far fa-plus" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="template-btn template-btn-bordered"
                                                >
                                                    Get Appointment
                                                    <i className="far fa-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-inner bg-color-grey">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="row">
                                <div className="col-lg-3 col-md-8">
                                    <div className="widget text-widget">
                                        <div className="footer-logo">
                                            <img
                                                src="/img/logo.png"
                                                alt="Medibo"
                                            />
                                        </div>
                                        <p>
                                            Sed ut perspi unde omniste natus
                                            error sit voluptatem acc doloremque
                                            laudantium
                                        </p>
                                        <ul className="contact-list">
                                            <li>
                                                <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                                                    <i className="far fa-map-marker-alt" />
                                                    55 Main Road, USA
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:support@gmail.com">
                                                    <i className="far fa-envelope" />
                                                    support@gmail.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:01267899">
                                                    <i className="far fa-phone" />
                                                    +012 (345) 678 99
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-xl-5 col-md-6">
                                            <div className="widget nav-widget">
                                                <h4 className="widget-title">
                                                    Popular Services
                                                </h4>
                                                <ul className="nav-links">
                                                    <li>
                                                        <a href="#">
                                                            Orthopedic Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Gynecology Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Cardiology Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Dentistry Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Gastroenterology
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Urgent Care
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-md-6">
                                            <div className="widget instagram-widget">
                                                <h4 className="widget-title">
                                                    Photo Gallery
                                                </h4>
                                                <div className="instagram-images">
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/01.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/02.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/03.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/04.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/05.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                    <div className="single-image">
                                                        <img
                                                            src="/img/instagram/06.jpg"
                                                            alt="Instagram"
                                                        />
                                                        <a href="#">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-10">
                                    <div className="widget newsletters-widget">
                                        <h4 className="widget-title">
                                            Newsletters
                                        </h4>
                                        <p>
                                            Sed ut perspiciatis unde omniste
                                            <br /> natus error sit voluptatem
                                        </p>
                                        <form
                                            action="#"
                                            className="newsletters-form"
                                        >
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                            />
                                            <button type="submit">
                                                <i className="far fa-arrow-right" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <p>
                                © 2021 <a href="#">Seeva</a>. All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default shop;
