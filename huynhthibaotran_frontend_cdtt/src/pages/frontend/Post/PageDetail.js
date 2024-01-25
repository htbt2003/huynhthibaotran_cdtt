import { useEffect, useState } from "react";
import PageServices from "../../../services/PageServices"
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";

const PageDetail = () => {
    const [page, setPage] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (async function () {
            try {
                const result = await PageServices.getPageBySlug(slug)
                setPage(result.page)
            }
            catch (error) {
                console.log(error)
            }
        })();
    }, [slug]);
    return (
        <>
            {/*breadcrumbs area start*/}
            <div className="breadcrumbs_area">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <Link to='/'>Trang chủ</Link>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>Giới thiệu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*about section area */}
            <div className="about_section section_two">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="about_content">
                            <h1>
                                {page.title}
                            </h1>
                            <p>
                            {page.detail}
                            </p>
                            <div className="view__work">
                                <Link href="#">view work </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about_thumb">
                            <img src={urlImage + "page/" + page.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/*about section end*/}
            {/*counterup area */}
            <div className="counterup_section">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup">
                            <div className="counter_img">
                                <img src="assets\img\cart\count.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <h2 className="counter_number">2170</h2>
                                <p>happy customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup count-two">
                            <div className="counter_img">
                                <img src="assets\img\cart\count2.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <h2 className="counter_number">8080</h2>
                                <p>AWARDS won</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup">
                            <div className="counter_img">
                                <img src="assets\img\cart\count3.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <h2 className="counter_number">2150</h2>
                                <p>HOURS WORKED</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup count-two">
                            <div className="counter_img">
                                <img src="assets\img\cart\cart5.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <h2 className="counter_number">2170</h2>
                                <p>COMPLETE PROJECTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*counterup end*/}
            {/*about progress bar */}
            <div className="about_progressbar porgress_two">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="about__img">
                            <img src="assets\img\ship\about4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="progressbar_inner">
                            <h2>We have Skills to show</h2>
                            <div className="progress_skill">
                                <div className="progress">
                                    <div
                                        className="progress-bar about_prog wow fadeInLeft"
                                        data-wow-duration="0.8s"
                                        data-wow-delay=".3s"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span className="progress_persent">HTML/CSS</span>
                                    </div>
                                </div>
                                <span className="progress_discount">60%</span>
                            </div>
                            <div className="progress_skill">
                                <div className="progress">
                                    <div
                                        className="progress-bar about_prog wow fadeInLeft"
                                        data-wow-duration="0.8s"
                                        data-wow-delay=".5s"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span className="progress_persent">WORDPRESS THEME </span>
                                    </div>
                                </div>
                                <span className="progress_discount">90%</span>
                            </div>
                            <div className="progress_skill">
                                <div className="progress">
                                    <div
                                        className="progress-bar about_prog wow fadeInLeft"
                                        data-wow-duration="0.8s"
                                        data-wow-delay=".7s"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span className="progress_persent">Typhography </span>
                                    </div>
                                </div>
                                <span className="progress_discount">70%</span>
                            </div>
                            <div className="progress_skill">
                                <div className="progress">
                                    <div
                                        className="progress-bar about_prog wow fadeInLeft"
                                        data-wow-duration="0.8s"
                                        data-wow-delay=".7s"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span className="progress_persent">Branding</span>
                                    </div>
                                </div>
                                <span className="progress_discount">80%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*about progress bar end */}
            {/*brand logo strat*/}
            <div className="brand_logo brand_about">
                <div className="block_title">
                    <h3>Brands</h3>
                </div>
                <div className="row">
                    <div className="brand_active owl-carousel">
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <Link href="#">
                                    <img src="assets\img\brand\brand1.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <Link href="#">
                                    <img src="assets\img\brand\brand2.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <Link href="#">
                                    <img src="assets\img\brand\brand3.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <Link href="#">
                                    <img src="assets\img\brand\brand4.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <Link href="#">
                                    <img src="assets\img\brand\brand5.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <Link href="#">
                                    <img src="assets\img\brand\brand6.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*brand logo end*/}
        </>

    );
}

export default PageDetail;