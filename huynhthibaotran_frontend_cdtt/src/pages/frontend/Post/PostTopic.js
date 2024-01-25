import { useParams } from "react-router-dom";
import PostServices from "../../../services/PostServices"
import TopicServices from "../../../services/TopicServices"
import { useEffect, useState } from "react";
import TopicList from "../../../layouts/LayoutSite/TopicList";
import PostItem from "../../../components/PostItem";
import ReactPaginate from "react-paginate";

function PostTopic() {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState();  
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            const result = await TopicServices.getTopicBySlug(slug);
            const topicid = result.topic.id;
            setTitle(result.topic.name);
            const resultp = await PostServices.getPostByTopicId(page, topicid);
            setPosts(resultp.posts.data)
            setTotal(resultp.total);
        })();
    }, [slug, page]);
          //------------pagination-------------
  const numberPage = Math.ceil(total / 5);
  const handlePageChange = (event) => {
    setPage(event.selected + 1);
  };

    return (

        <section className="maincontent">
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
                <div className="m-4" style={{color:'red', fontSize: '40px', fontWeight: 900, textTransform: 'capitalize', textAlign:'center'}}>{title}</div>
                <div className="row">
                    {posts.map(function(post, index){
                            return <PostItem key={index} post={post}/>
                        })}                
                </div>
            </div>
            {/*blog area end*/}
            {/*pagination style start*/}
            <div className="blog_pagination">
                <div className="row">
                    <div className="col-12">
                        <div className="page_number">
                        <ReactPaginate
                    className="pagination pagination-sm justify-content-end"
                    previousLabel="«"
                    nextLabel="»"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={numberPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName="active"
                  />
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

        </section>);
}

export default PostTopic;