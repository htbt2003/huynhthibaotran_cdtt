import Slider from "./Slider";
// import CategoryServices from "../../../services/CategoryServices"
// import { useEffect, useState } from "react";
// import ProductHome from "./ProductHome";
import CategoryList from "../../../layouts/LayoutSite/CategoryList";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Wpn from "../../../layouts/LayoutSite/Wpn";

function Home() {
    //     const [categories, setCategories] = useState([]);
    //     document.title = "Mỹ phẩm"
    //     useEffect (function(){
    //         (async function(){
    //           await CategoryServices.getCategoryByParentId(0)
    //           .then(function(result){
    //               setCategories(result.data.categories)
    //           });
    //         })();
    //   },[]);
    return (
<div className=" pos_home_section">
  <div className="row pos_home">
    <div className="col-lg-3 col-md-8 col-12">
      <CategoryList/>
      <Wpn/>

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
      <div className="new_product_area">
        <div className="block_title">
          <h3>New Products</h3>
        </div>
        <div className="row">
          <div className="product_active owl-carousel">
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link to={"/chi-tiet-san-pham"}>
                    <img src="assets\img\product\product1.jpg" alt="" />
                  </Link>
                  <div className="img_icone">
                    <img src="assets\img\cart\span-new.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$50.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Curabitur sodales</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product2.jpg" alt="" />
                  </Link>
                  <div className="hot_img">
                    <img src="assets\img\cart\span-hot.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$40.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Quisque ornare dui</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product3.jpg" alt="" />
                  </Link>
                  <div className="img_icone">
                    <img src="assets\img\cart\span-new.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$60.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Sed non turpiss</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product4.jpg" alt="" />
                  </Link>
                  <div className="hot_img">
                    <img src="assets\img\cart\span-hot.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$65.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Duis convallis</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product6.jpg" alt="" />
                  </Link>
                  <div className="img_icone">
                    <img src="assets\img\cart\span-new.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$50.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Curabitur sodales</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*new product area start*/}
      {/*featured product start*/}
      <div className="featured_product">
        <div className="block_title">
          <h3>Featured Products</h3>
        </div>
        <div className="row">
          <div className="product_active owl-carousel">
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product7.jpg" alt="" />
                  </Link>
                  <div className="hot_img">
                    <img src="assets\img\cart\span-hot.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$60.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Maecenas sit amet</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product8.jpg" alt="" />
                  </Link>
                  <div className="img_icone">
                    <img src="assets\img\cart\span-new.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$50.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Sed non turpis</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product9.jpg" alt="" />
                  </Link>
                  <div className="img_icone">
                    <img src="assets\img\cart\span-new.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$70.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Donec ac congue</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product3.jpg" alt="" />
                  </Link>
                  <div className="hot_img">
                    <img src="assets\img\cart\span-hot.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$60.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Curabitur sodales</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product">
                <div className="product_thumb">
                  <Link href="single-product.html">
                    <img src="assets\img\product\product2.jpg" alt="" />
                  </Link>
                  <div className="img_icone">
                    <img src="assets\img\cart\span-new.png" alt="" />
                  </div>
                  <div className="product_action">
                    <Link href="#">
                      {" "}
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </Link>
                  </div>
                </div>
                <div className="product_content">
                  <span className="product_price">$50.00</span>
                  <h3 className="product_title">
                    <Link href="single-product.html">Phasellus a arcu</Link>
                  </h3>
                </div>
                <div className="product_info">
                  <ul>
                    <li>
                      <Link href="#" title=" Add to Wishlist ">
                        Add to Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        data-toggle="modal"
                        data-target="#modal_box"
                        title="Quick view"
                      >
                        View Detail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*featured product end*/}
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
      {/*brand logo strat*/}
      <div className="brand_logo mb-60">
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
    </div>
  </div>
</div>

    );
}

export default Home;