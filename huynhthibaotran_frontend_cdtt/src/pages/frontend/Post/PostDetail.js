import { useEffect, useState } from "react";
import PostServices from "../../../services/PostServices"
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import PostItem from "../../../components/PostItem";

function PostDetail() {
    const [post, setPost] = useState([]);
    const [post_other, setProductOther] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (async function () {
            try {
                const result = await PostServices.getTopicBySlug(slug)
                setPost(result.post)
                setProductOther(result.post_other)
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
                                    <a href="index.html">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>blog details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*blog area start*/}
            <div className="main_blog_area blog_details">
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <div className="blog_details_left">
                            <div className="blog_gallery">
                                <div className="blog_header">
                                    <span>
                                        <a href="#">WordPress</a>
                                    </span>
                                    <h2>
                                        <a href="#">{post.title}</a>
                                    </h2>
                                    <div className="blog__post">
                                        <ul>
                                            <li className="post_author">Posts by : {post.created_by}</li>
                                            <li className="post_date"> {post.created_at} </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog_thumb">
                                    <a href="blog-details.html">
                                        <img src={urlImage + "post/" + post.image} alt="" />
                                    </a>
                                </div>

                                <div className="blog_active owl-carousel">
                                    <div className="blog_thumb blog__hover">
                                        <a href="blog-details.html">
                                            <img src="assets\img\blog\blog9.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog_thumb">
                                        <a href="blog-details.html">
                                            <img src="assets\img\blog\blog7.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog_thumb">
                                        <a href="blog-details.html">
                                            <img src="assets\img\blog\blog8.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog_thumb">
                                        <a href="blog-details.html">
                                            <img src="assets\img\blog\blog7.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="blog_entry_content">
                                    <p>
                                    {post.detail}
                                    </p>
                                    <p>
                                        Proin consectetur aliquam odio nec fringilla. Sed interdum at
                                        justo in efficitur. Vivamus gravida volutpat sodales. Fusce
                                        ornare sit amet ligula condimentum sagittis.
                                    </p>
                                    <p className="blockquote">
                                        Quisque semper nunc vitae erat pellentesque, ac placerat arcu
                                        consectetur. In venenatis elit ac ultrices convallis. Duis est
                                        nisi, tincidunt ac urna sed, cursus blandit lectus. In
                                        ullamcorper sit amet ligula ut eleifend. Proin dictum tempor
                                        ligula, ac feugiat metus. Sed finibus tortor eu scelerisque
                                        scelerisque.
                                    </p>
                                    <p>
                                        Aenean et tempor eros, vitae sollicitudin velit. Etiam varius
                                        enim nec quam tempor, sed efficitur ex ultrices. Phasellus
                                        pretium est vel dui vestibulum condimentum. Aenean nec suscipit
                                        nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur
                                        lobortis, elit ut elementum congue, erat ex bibendum odio, nec
                                        iaculis lacus sem non lorem. Duis suscipit metus ante, sed
                                        convallis quam posuere quis. Ut tincidunt eleifend odio, ac
                                        fringilla mi vehicula nec. Nunc vitae lacus eget lectus
                                        imperdiet tempus sed in dui. Nam molestie magna at risus
                                        consectetur, placerat suscipit justo dignissim. Sed vitae
                                        fringilla enim, nec ullamcorper arcu.
                                    </p>
                                    <p>
                                        Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra
                                        nibh. In dignissim vitae lorem non mollis. Praesent pretium
                                        tellus in tortor viverra condimentum. Nullam dignissim facilisis
                                        nisl, accumsan placerat justo ultricies vel. Vivamus finibus mi
                                        a neque pretium, ut convallis dui lacinia. Morbi a rutrum velit.
                                        Curabitur sagittis quam quis consectetur mattis. Aenean sit amet
                                        quam vel turpis interdum sagittis et eget neque. Nunc ante quam,
                                        luctus et neque a, interdum iaculis metus. Aliquam vel ante
                                        mattis, placerat orci id, vehicula quam. Suspendisse quis eros
                                        cursus, viverra urna sed, commodo mauris. Cras diam arcu,
                                        fringilla a sem condimentum, viverra facilisis nunc. Curabitur
                                        vitae orci id nulla maximus maximus. Nunc pulvinar sollicitudin
                                        molestie.
                                    </p>
                                </div>
                                <div className="blog_entry_meta">
                                    <ul>
                                        <li>
                                            <a href="#">0 comments</a>
                                        </li>
                                        <li>
                                            {" "}
                                            / Tags: <a href="#">fashion</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="wishlist-share">
                                    <h4>Share on:</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-rss" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-vimeo" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-tumblr" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-pinterest" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*services img area*/}
                            <div className="srrvices_img_area">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="single_img_services mb-20">
                                            <div className="services_thumb">
                                                <img src="assets\img\blog\blog6.jpg" alt="" />
                                            </div>
                                            <div className="services_content">
                                                <h3>DISCUSS IDEAS</h3>
                                                <div className="tweetlink favorite">
                                                    <a href="#"> March 10, 2018 </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <div className="single_img_services mb-20">
                                            <div className="services_thumb">
                                                <img src="assets\img\blog\blog9.jpg" alt="" />
                                            </div>
                                            <div className="services_content">
                                                <h3>DESIGN THE COVER</h3>
                                                <div className="tweetlink favorite">
                                                    <a href="#"> March 10, 2018 </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single_img_services mb-20">
                                            <div className="services_thumb">
                                                <img src="assets\img\blog\blog10.jpg" alt="" />
                                            </div>
                                            <div className="services_content">
                                                <h3>CORE DEVELOPMENT</h3>
                                                <div className="tweetlink favorite">
                                                    <a href="#"> March 10, 2018 </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*services img end*/}
                            <div className="blog__page_content">
                                <p>
                                    Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra
                                    nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus
                                    in tortor viverra condimentum. Nullam dignissim facilisis nisl,
                                    accumsan placerat justo ultricies vel. Vivamus finibus mi a neque
                                    pretium, ut convallis dui lacinia. Morbi a rutrum velit. Curabitur
                                    sagittis quam quis consectetur mattis. Aenean sit amet quam vel
                                    turpis interdum sagittis et eget neque. Nunc ante quam, luctus et
                                    neque a, interdum iaculis metus. Aliquam vel ante mattis, placerat
                                    orci id, vehicula quam. Suspendisse quis eros cursus, viverra urna
                                    sed, commodo mauris. Cras diam arcu, fringilla a sem condimentum,
                                    viverra facilisis nunc. Curabitur vitae orci id nulla maximus
                                    maximus. Nunc pulvinar sollicitudin molestie.
                                </p>
                            </div>
                            <div className="comments_area">
                                <div className="comments__title">
                                    <h3>Leave a Reply </h3>
                                </div>
                                <div className="comments__notes">
                                    <p>Your email address will not be published.</p>
                                </div>
                                <div className="product_review_form blog_form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12">
                                                <label htmlFor="review_comment">comment </label>
                                                <textarea
                                                    name="comment"
                                                    id="review_comment"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <label htmlFor="author">Name</label>
                                                <input id="author" type="text" />
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <label htmlFor="email">Email </label>
                                                <input id="email" type="text" />
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <label htmlFor="website">website </label>
                                                <input id="website" type="text" />
                                            </div>
                                        </div>
                                        <button type="submit">Post Comment</button>
                                    </form>
                                </div>
                            </div>
                            <div className="new_product_area mt-5" style={{marginRight:20}}>
                                <div className="block_title">
                                    <h3>Có thể bạn quan tâm</h3>
                                </div>
                                <div className="row">
                                    <div className="row" >
                                    {
                                        (post_other && post_other.length > 0 && post_other.map(function (post, index) {
                                            return (
                                                <PostItem post={post} key={index}/>
                                
                                                );
                                            }))
                                    }
                                    </div>
                                </div>
                                </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-8 offset-md-2 offset-lg-0">
                        <div className="blog_details_right">
                            <div className="blog_widget search_widget mb-30">
                                <h3>Search</h3>
                                <form action="#">
                                    <input placeholder="search.." type="text" />
                                    <button type="submit">
                                        <i className="fa fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="blog_widget recent-posts mb-30">
                                <h3>Latest Tweets</h3>
                                <div className="single_posts mb-20">
                                    <div className="posts_thumb">
                                        <a href="#">
                                            <img src="assets\img\blog\tweets.jpeg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_content ">
                                        <span>
                                            <a className="tweet_name" href="#">
                                                Kevin Sobo
                                            </a>
                                            <a className="tweet_author" href="#">
                                                @roadthemes
                                            </a>
                                        </span>
                                        <a href="#"> Sep 23 reply retweet 2 years ago </a>
                                    </div>
                                </div>
                                <div className="single_posts mb-20">
                                    <div className="posts_thumb">
                                        <a href="#">
                                            <img src="assets\img\blog\tweets.jpeg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_content ">
                                        <span>
                                            <a className="tweet_name" href="#">
                                                Kevin Sobo
                                            </a>
                                            <a className="tweet_author" href="#">
                                                @roadthemes
                                            </a>
                                        </span>
                                        <a href="#"> Sep 23 reply retweet 2 years ago </a>
                                    </div>
                                </div>
                                <div className="single_posts mb-20">
                                    <div className="posts_thumb">
                                        <a href="#">
                                            <img src="assets\img\blog\tweets.jpeg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_content ">
                                        <span>
                                            <a className="tweet_name" href="#">
                                                Kevin Sobo
                                            </a>
                                            <a className="tweet_author" href="#">
                                                @roadthemes
                                            </a>
                                        </span>
                                        <a href="#"> Sep 23 reply retweet 2 years ago </a>
                                    </div>
                                </div>
                                <div className="post_button">
                                    <a href="#">
                                        <i className="fa fa-twitter" /> Follow @roadthemes
                                    </a>
                                </div>
                            </div>
                            <div className="blog_widget widget_categoie  mb-30">
                                <h3>Categories</h3>
                                <ul>
                                    <li>
                                        <a href="#">Creative</a>
                                    </li>
                                    <li>
                                        <a href="#">fashion</a>
                                    </li>
                                    <li>
                                        <a href="#">image</a>
                                    </li>
                                    <li>
                                        <a href="#">travel</a>
                                    </li>
                                    <li>
                                        <a href="#">bideos</a>
                                    </li>
                                    <li>
                                        <a href="#">WordPress</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog_widget widget_categoie mb-30">
                                <h3>Archives</h3>
                                <ul>
                                    <li>
                                        <a href="#">Creative</a>
                                    </li>
                                    <li>
                                        <a href="#">fashion</a>
                                    </li>
                                    <li>
                                        <a href="#">image</a>
                                    </li>
                                    <li>
                                        <a href="#">travel</a>
                                    </li>
                                    <li>
                                        <a href="#">bideos</a>
                                    </li>
                                    <li>
                                        <a href="#">WordPress</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog_widget widget_recent  mb-30">
                                <h3>Recent Posts</h3>
                                <div className="widget_recent_inner">
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog11.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog13.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog14.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog_widget widget_recent  mb-30">
                                <h3>Popular</h3>
                                <div className="widget_recent_inner">
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog11.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog13.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog14.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog_widget widget_recent  mb-30">
                                <h3>Comments</h3>
                                <div className="widget_recent_inner">
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog12.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog12.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                    <div className="single_posts">
                                        <div className="posts_thumb">
                                            <a href="#">
                                                <img src="assets\img\blog\blog12.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <span>
                                                <a className="tweet_author" href="#">
                                                    blog1 Blog image post{" "}
                                                </a>
                                            </span>
                                            <a href="#"> March 10, 2018 </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*blog area end*/}
        </>
    );
}

export default PostDetail;