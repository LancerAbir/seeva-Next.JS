import Link from "next/link";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";
import PageTitle from "../src/Template Parts/PageTitle";

const shop = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <PageTitle />
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
                                        <i className="fa-solid fa-angle-left" />
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
                                        <i className="fa-solid fa-angle-right" />
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
            <Footer />
            {/*====== End Template Footer ======*/}
        </>
    );
};

export default shop;
