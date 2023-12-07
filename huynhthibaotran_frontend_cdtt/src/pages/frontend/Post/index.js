import { useEffect, useState } from 'react';
import PostServices from '../../../services/PostServices';
import PostItem from '../../../components/PostItem.js';
import TopicList from '../../../layouts/LayoutSite/TopicList';

function Post() {
    // const [limit, setLimit] = useState(4);
    // const [posts, setPosts] = useState([]);
    // useEffect(function(){
    //   (async function(){
    //     try{
    //         const result = await PostServices.getPostAll(limit, 1)
    //         setPosts(result.data.posts)
    //     }
    //     catch(error){
    //         console.log(error)
    //    }
    //   })();
    // },[limit])
    return (
        <>
            {/*breadcrumbs area start*/}
            <div className="breadcrumbs_area">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="index.html">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*blog area start*/}
            <div className="blog_area">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img src="assets\img\blog\blog3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">Tech</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        When an unknown took a galley of type.
                                    </a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core
                                    competencies. Objectively pursue multidisciplinary human capital
                                    for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2018</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img src="assets\img\blog\blog4.jpg" alt="" />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">Men</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        When an unknown took a galley of type.
                                    </a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core
                                    competencies. Objectively pursue multidisciplinary human capital
                                    for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2018</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img src="assets\img\blog\blog1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">Women</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        When an unknown took a galley of type.
                                    </a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core
                                    competencies. Objectively pursue multidisciplinary human capital
                                    for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2018</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img src="assets\img\blog\blog2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">fashion</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        When an unknown took a galley of type.
                                    </a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core
                                    competencies. Objectively pursue multidisciplinary human capital
                                    for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2018</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img src="assets\img\blog\blog5.jpg" alt="" />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">featured</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        When an unknown took a galley of type.
                                    </a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core
                                    competencies. Objectively pursue multidisciplinary human capital
                                    for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2018</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img src="assets\img\blog\blog11.jpg" alt="" />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">Tech</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        When an unknown took a galley of type.
                                    </a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core
                                    competencies. Objectively pursue multidisciplinary human capital
                                    for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2018</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*blog area end*/}
            {/*pagination style start*/}
            <div className="blog_pagination">
                <div className="row">
                    <div className="col-12">
                        <div className="page_number">
                            <span>Pages: </span>
                            <ul>
                                <li>«</li>
                                <li className="current_number">1</li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>»</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*pagination style end*/}
            {/*brand logo strat*/}
            <div className="brand_logo brand_about">
                <div className="block_title">
                    <h3>Brands</h3>
                </div>
                <div className="row">
                    <div className="brand_active owl-carousel">
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <a href="#">
                                    <img src="assets\img\brand\brand1.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <a href="#">
                                    <img src="assets\img\brand\brand2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <a href="#">
                                    <img src="assets\img\brand\brand3.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <a href="#">
                                    <img src="assets\img\brand\brand4.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <a href="#">
                                    <img src="assets\img\brand\brand5.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_brand">
                                <a href="#">
                                    <img src="assets\img\brand\brand6.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*brand logo end*/}
        </>
    );
}

export default Post;