import Slider from "./Slider";
import CategoryServices from "../../../services/CategoryServices"
import ProductHome from "./ProductHome";
import CategoryList from "../../../layouts/LayoutSite/CategoryList";
import { Link } from "react-router-dom";
import React, { useEffect,useState } from 'react';
import ProductNew from "./ProductNew";
import ProductSale from "./ProductSale";
import ProductBestSeller from "./ProductBestSeller";
import BrandHome from "./BrandHome";

function Home() {
        const [categories, setCategories] = useState([]);
        document.title = "Shop thời trang"
        useEffect (function(){
            (async function(){
              await CategoryServices.getCategoryByParentId(0)
              .then(function(result){
                  setCategories(result.categories)
              });
            })();
      },[]);
// console.log(categories)
  //   const searchdata = [].concat(menus, brands)
  // .filter((item) => {
  //   return Object.values(item)
  //     .join("")
  //     .toLowerCase()
  //     .includes(key.toLowerCase());
  // });

    return (
<div className=" pos_home_section">
  <div className="row pos_home">
    <div className="col-lg-3 col-md-8 col-12">
      <CategoryList/>
      {/* <Wpn/> */}

      {/*sidebar banner*/}
      <div className="sidebar_widget bottom ">
        <div className="banner_img">
          <Link href="#">
            <img src="assets\img\banner\banner9.jpg" alt="" />
          </Link>
        </div>
      </div>
      {/*sidebar banner end*/}
    </div>
    <div className="col-lg-9 col-md-12">
      {/*banner slider start*/}
      <Slider/>
      {/*banner slider start*/}
      {/*new product area start*/}
      {/* <div className="new_product_area">
    <div className="block_title">
      <h3>Related Products</h3>
    </div>
    <div className="row">
      <div className="product_active owl-carousel">
        <div className="col-lg-3">
          <div className="single_product">
            <div className="product_thumb">
              <a href="single-product.html">
                <img src="assets\img\product\product1.jpg" alt="" />
              </a>
              <div className="img_icone">
                <img src="assets\img\cart\span-new.png" alt="" />
              </div>
              <div className="product_action">
                <a href="#">
                  {" "}
                  <i className="fa fa-shopping-cart" /> Add to cart
                </a>
              </div>
            </div>
            <div className="product_content">
              <span className="product_price">$50.00</span>
              <h3 className="product_title">
                <a href="single-product.html">Curabitur sodales</a>
              </h3>
            </div>
            <div className="product_info">
              <ul>
                <li>
                  <a href="#" title=" Add to Wishlist ">
                    Add to Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#modal_box"
                    title="Quick view"
                  >
                    View Detail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single_product">
            <div className="product_thumb">
              <a href="single-product.html">
                <img src="assets\img\product\product2.jpg" alt="" />
              </a>
              <div className="hot_img">
                <img src="assets\img\cart\span-hot.png" alt="" />
              </div>
              <div className="product_action">
                <a href="#">
                  {" "}
                  <i className="fa fa-shopping-cart" /> Add to cart
                </a>
              </div>
            </div>
            <div className="product_content">
              <span className="product_price">$40.00</span>
              <h3 className="product_title">
                <a href="single-product.html">Quisque ornare dui</a>
              </h3>
            </div>
            <div className="product_info">
              <ul>
                <li>
                  <a href="#" title=" Add to Wishlist ">
                    Add to Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#modal_box"
                    title="Quick view"
                  >
                    View Detail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single_product">
            <div className="product_thumb">
              <a href="single-product.html">
                <img src="assets\img\product\product3.jpg" alt="" />
              </a>
              <div className="img_icone">
                <img src="assets\img\cart\span-new.png" alt="" />
              </div>
              <div className="product_action">
                <a href="#">
                  {" "}
                  <i className="fa fa-shopping-cart" /> Add to cart
                </a>
              </div>
            </div>
            <div className="product_content">
              <span className="product_price">$60.00</span>
              <h3 className="product_title">
                <a href="single-product.html">Sed non turpiss</a>
              </h3>
            </div>
            <div className="product_info">
              <ul>
                <li>
                  <a href="#" title=" Add to Wishlist ">
                    Add to Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#modal_box"
                    title="Quick view"
                  >
                    View Detail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single_product">
            <div className="product_thumb">
              <a href="single-product.html">
                <img src="assets\img\product\product4.jpg" alt="" />
              </a>
              <div className="hot_img">
                <img src="assets\img\cart\span-hot.png" alt="" />
              </div>
              <div className="product_action">
                <a href="#">
                  {" "}
                  <i className="fa fa-shopping-cart" /> Add to cart
                </a>
              </div>
            </div>
            <div className="product_content">
              <span className="product_price">$65.00</span>
              <h3 className="product_title">
                <a href="single-product.html">Duis convallis</a>
              </h3>
            </div>
            <div className="product_info">
              <ul>
                <li>
                  <a href="#" title=" Add to Wishlist ">
                    Add to Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#modal_box"
                    title="Quick view"
                  >
                    View Detail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single_product">
            <div className="product_thumb">
              <a href="single-product.html">
                <img src="assets\img\product\product6.jpg" alt="" />
              </a>
              <div className="img_icone">
                <img src="assets\img\cart\span-new.png" alt="" />
              </div>
              <div className="product_action">
                <a href="#">
                  {" "}
                  <i className="fa fa-shopping-cart" /> Add to cart
                </a>
              </div>
            </div>
            <div className="product_content">
              <span className="product_price">$50.00</span>
              <h3 className="product_title">
                <a href="single-product.html">Curabitur sodales</a>
              </h3>
            </div>
            <div className="product_info">
              <ul>
                <li>
                  <a href="#" title=" Add to Wishlist ">
                    Add to Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#modal_box"
                    title="Quick view"
                  >
                    View Detail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}

      <ProductNew/>
      {/*new product area start*/}
      {/*featured product start*/}
      <ProductSale/>
      {/*featured product end*/}
      <ProductBestSeller/>

      {categories.map(function (category ,index){
                return <ProductHome key={index} category={category}/>
      })}

      {/*banner area start*/}
      <div className="banner_area mb-60">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single_banner">
              <Link href="#">
                <img src="assets\img\banner\banner7.jpg" alt="" />
              </Link>
              <div className="banner_title">
                <p>
                  Up to <span> 40%</span> off
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single_banner">
              <Link href="#">
                <img src="assets\img\banner\banner8.jpg" alt="" />
              </Link>
              <div className="banner_title title_2">
                <p>
                  sale off <span> 30%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*banner area end*/}
      <div className="blog_area blog_two">
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
            competencies. Objectively pursue multidisciplinary human capital for
            interoperable.
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
            competencies. Objectively pursue multidisciplinary human capital for
            interoperable.
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
            competencies. Objectively pursue multidisciplinary human capital for
            interoperable.
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

      {/*brand logo strat*/}
      <BrandHome/>
      {/*brand logo end*/}
    </div>
  </div>
</div>

    );
}

export default Home;