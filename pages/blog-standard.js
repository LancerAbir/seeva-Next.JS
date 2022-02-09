import Link from "next/link";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";

const blogStandard = () => {
    return (
        <>
            {/*====== Start Template Header ======*/}
            <Header />
            {/*====== End Template Header ======*/}
            {/*====== Page Title Start ======*/}
            <section className="page-title-area">
                <div className="container">
                    <h1 className="page-title">Blog Standard</h1>
                    <ul className="breadcrumb-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fas fa-angle-right" />
                        </li>
                        <li>Blog Standard</li>
                    </ul>
                </div>
            </section>
            {/*====== Page Title End ======*/}
            {/*====== Blog Standard Start ======*/}
            <section className="blog-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-loop">
                                <div className="single-blog-post">
                                    <div className="post-thumbnail">
                                        <img
                                            src="/img/blog/01.jpg"
                                            alt="Image"
                                        />
                                        <Link href="/blog-details">
                                            <a className="post-link">
                                                <i className="fas fa-arrow-right" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <Link href="/blog-details">
                                                <a>
                                                    Everything You Need to Know
                                                    About &amp; How to Deal With
                                                    Back Pain During.
                                                </a>
                                            </Link>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-thumbnail">
                                        <img
                                            src="/img/blog/02.jpg"
                                            alt="Image"
                                        />
                                        <Link href="/blog-details">
                                            <a className="post-link">
                                                <i className="fas fa-arrow-right" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <Link href="/blog-details">
                                                <a>
                                                    Everything You Need Know
                                                    About Healthcare DevTools
                                                    Debugging Tips Shortcuts
                                                </a>
                                            </Link>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post bg-dark-post">
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <Link href="/blog-details">
                                                <a>
                                                    Talk Your Child About
                                                    Coronavirus Smtp Context
                                                    Variables Hugo Static Site
                                                </a>
                                            </Link>
                                        </h3>
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post no-thumbnail">
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <Link href="/blog-details">
                                                <a>
                                                    How to Deal With Back Pain
                                                    During Pregnancy Time Video
                                                    For Size And Quality
                                                </a>
                                            </Link>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-thumbnail">
                                        <img
                                            src="/img/blog/03.jpg"
                                            alt="Image"
                                        />
                                        <Link href="/blog-details">
                                            <a className="post-link">
                                                <i className="fas fa-arrow-right" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-author">
                                            <img
                                                src="/img/blog/user.png"
                                                alt="User"
                                            />
                                            Raymond E. Quick
                                        </a>
                                        <h3 className="post-title">
                                            <Link href="/blog-details">
                                                <a>
                                                    Telemedicine overprescribes
                                                    antib iotics: Are you really
                                                    receiving..
                                                </a>
                                            </Link>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam,
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-calendar-alt" />
                                                    25 Jan 2021
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" />
                                                    Com (05)
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <a href="#">
                                                    <i className="far fa-share-alt" />
                                                    (03)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="pagination">
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
                        <div className="col-lg-4">
                            <div className="primary-sidebar">
                                <div className="widget search-widget">
                                    <h4 className="widget-title">
                                        Search Here
                                    </h4>
                                    <form action="#" className="search-form">
                                        <input
                                            type="search"
                                            placeholder="Keywords"
                                        />
                                        <button type="submit">
                                            <i className="far fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="widget category-widget">
                                    <h4 className="widget-title">Category</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Business (5)</a>
                                        </li>
                                        <li>
                                            <a href="#">Dental Care (15)</a>
                                        </li>
                                        <li>
                                            <a href="#">Eye Care (11)</a>
                                        </li>
                                        <li>
                                            <a href="#">Allergic Issue (6)</a>
                                        </li>
                                        <li>
                                            <a href="#">Cardiology (9)</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Neurology Surgery (8)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Allergic Issue (09)</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget latest-post-widget">
                                    <h4 className="widget-title">
                                        Latest News
                                    </h4>
                                    <div className="latest-post-loop">
                                        <div className="single-post">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/blog/post-widget-1.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            Build Seamless
                                                            Spreadsheet Import
                                                            Experience
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt" />
                                                    25 May 2021
                                                </span>
                                            </div>
                                        </div>
                                        <div className="single-post">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/blog/post-widget-2.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            Creating Online
                                                            Environment Work
                                                            Well Older
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt" />
                                                    25 May 2021
                                                </span>
                                            </div>
                                        </div>
                                        <div className="single-post">
                                            <div className="thumbnail">
                                                <img
                                                    src="/img/blog/post-widget-3.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            Signs Website Feels
                                                            More Haunted House
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt" />
                                                    25 May 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget cta-widget">
                                    <div
                                        className="cta-content"
                                        style={{
                                            backgroundImage:
                                                "url(/img/blog/cta-widget.jpg)",
                                        }}
                                    >
                                        <h4 className="cta-title">
                                            Get Free Consultations
                                        </h4>
                                        <span className="cta-tagline">
                                            Special advisors
                                        </span>
                                        <p>
                                            Quis autem vel eum iure repreh ende
                                        </p>
                                        <a href="#" className="cta-btn">
                                            Get a quote
                                        </a>
                                    </div>
                                </div>
                                <div className="widget tag-cloud-widget">
                                    <h4 className="widget-title">
                                        Popular Tags
                                    </h4>
                                    <ul>
                                        <li>
                                            <a href="#">Medical</a>
                                        </li>
                                        <li>
                                            <a href="#">Doctors</a>
                                        </li>
                                        <li>
                                            <a href="#">Nurses</a>
                                        </li>
                                        <li>
                                            <a href="#">Consultancy</a>
                                        </li>
                                        <li>
                                            <a href="#">Law farms</a>
                                        </li>
                                        <li>
                                            <a href="#">Farms</a>
                                        </li>
                                        <li>
                                            <a href="#">Management</a>
                                        </li>
                                        <li>
                                            <a href="#">Planning</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Blog Standard End ======*/}
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

export default blogStandard;
