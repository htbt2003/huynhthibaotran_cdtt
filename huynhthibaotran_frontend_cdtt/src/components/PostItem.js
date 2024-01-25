import { urlImage } from '../config';
import { Link } from 'react-router-dom';

function PostItem(props) {
    return (<>
                        <div className="col-lg-4 col-md-6">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
                                    <img src={urlImage + "post/" + props.post.image} alt="" />
                                </Link>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <Link href="#">Tech</Link>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
                                        {props.post.title}
                                    </Link>
                                </h3>
                                <p>
                                    {props.post.metadesc}
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2018</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <Link href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap_newmore">
        </div>

    </>
    );
}

export default PostItem;