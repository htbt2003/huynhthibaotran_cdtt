import { useEffect, useState } from 'react';
import PostServices from '../../../services/PostServices';
import PostItem from '../../../components/PostItem.js';
import TopicList from '../../../layouts/LayoutSite/TopicList';
import ReactPaginate from 'react-paginate';

function Post() {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState();  
    const [posts, setPosts] = useState([]);
    useEffect(function(){
      (async function(){
        try{
            const result = await PostServices.getPostAll(page)
            setPosts(result.posts.data)
            setTotal(result.total);
        }
        catch(error){
            console.log(error)
       }
      })();
    },[page])
    console.log(posts)
          //------------pagination-------------
  const numberPage = Math.ceil(total / 5);
  const handlePageChange = (event) => {
    setPage(event.selected + 1);
  };

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
    );
}

export default Post;