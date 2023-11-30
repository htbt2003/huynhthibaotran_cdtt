import { useEffect, useState } from "react";
import ProductServices from '../../../services/ProductServices';
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/ProductItem";
// import { AddCart } from '../Cart/actions';
// import { connect } from 'react-redux';
import React from 'react'
import Ccp from '../../../layouts/LayoutSite/Ccp.js';
import Wpn from '../../../layouts/LayoutSite/Wpn.js';
import SpecialPro from '../../../layouts/LayoutSite/SpecialPro.js';

function ProductDetail(props) {
    // const {slug} = useParams();
    // const [product, setProduct] = useState([]);
    // const [product_other, setProductOther] = useState([]);
    // useEffect(function(){
    //   (async function(){
    //     await ProductServices.getProductBySlug(slug)
    //     .then(function(result){
    //         if(result.data.success === true){
    //             setProduct(result.data.product)
    //             setProductOther(result.data.product_other)
    //         }
    //     });
    //   })();
    // },[slug])
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
            <li>shop</li>
            <li>
              <i className="fa fa-angle-right" />
            </li>
            <li>Chi tiết</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*breadcrumbs area end*/}

<div className=" pos_home_section">
  <div className="row pos_home">
    <div className="col-lg-3 col-md-12">
      <Ccp/>
      <Wpn/>
      <SpecialPro/>
    </div>
    <div className="col-lg-9 col-md-12">
  <div className="row">
    <div className="col-lg-6 col-md-6">
      <div className="product_tab sidebar fix">
        <div className="tab-content produc_tab_c">
          <div
            className="tab-pane fade show active"
            id="p_tab1"
            role="tabpanel"
          >
            <div className="modal_img">
              <a href="#">
                <img src="assets\img\product\productbig.jpg" alt="" />
              </a>
              <div className="img_icone">
                <img src="assets\img\cart\span-new.png" alt="" />
              </div>
              <div className="view_img">
                <a
                  className="large_view"
                  href="assets\img\product\productbig.jpg"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="p_tab2" role="tabpanel">
            <div className="modal_img">
              <a href="#">
                <img src="assets\img\product\productbig1.jpg" alt="" />
              </a>
              <div className="img_icone">
                <img src="assets\img\cart\span-new.png" alt="" />
              </div>
              <div className="view_img">
                <a
                  className="large_view"
                  href="assets\img\product\productbig1.jpg"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="p_tab3" role="tabpanel">
            <div className="modal_img">
              <a href="#">
                <img src="assets\img\product\productbig2.jpg" alt="" />
              </a>
              <div className="img_icone">
                <img src="assets\img\cart\span-new.png" alt="" />
              </div>
              <div className="view_img">
                <a
                  className="large_view"
                  href="assets\img\product\productbig2.jpg"
                >
                  {" "}
                  <i className="fa fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="product_tab_button">
          <ul className="nav" role="tablist">
            <li>
              <a
                className="active"
                data-toggle="tab"
                href="#p_tab1"
                role="tab"
                aria-controls="p_tab1"
                aria-selected="false"
              >
                <img src="assets\img\cart\cart.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                data-toggle="tab"
                href="#p_tab2"
                role="tab"
                aria-controls="p_tab2"
                aria-selected="false"
              >
                <img src="assets\img\cart\cart2.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                data-toggle="tab"
                href="#p_tab3"
                role="tab"
                aria-controls="p_tab3"
                aria-selected="false"
              >
                <img src="assets\img\cart\cart4.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-6">
      <div className="product_d_right">
        <h1>Printed Summer Dress</h1>
        <div className="product_ratting mb-10">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" />
              </a>
            </li>
            <li>
              <a href="#"> Write a review </a>
            </li>
          </ul>
        </div>
        <div className="product_desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            modi culpa voluptates illo, quos magni totam inventore delectus
            perspiciatis necessitatibus, iure rerum! Deleniti nobis voluptatibus
            minus, iusto ullam quae esse..
          </p>
        </div>
        <div className="content_price mb-15">
          <span>$118.00</span>
          <span className="old-price">$130.00</span>
        </div>
        <div className="box_quantity mb-20">
          <form action="#">
            <label>quantity</label>
            <input min={0} max={100} defaultValue={1} type="number" />
          </form>
          <button type="submit">
            <i className="fa fa-shopping-cart" /> add to cart
          </button>
          <a href="#" title="add to wishlist">
            <i className="fa fa-heart" aria-hidden="true" />
          </a>
        </div>
        <div className="product_d_size mb-20">
          <label htmlFor="group_1">size</label>
          <select name="size" id="group_1">
            <option value={1}>S</option>
            <option value={2}>M</option>
            <option value={3}>L</option>
          </select>
        </div>
        <div className="sidebar_widget color">
          <h2>Choose Color</h2>
          <div className="widget_color">
            <ul>
              <li>
                <a href="#" />
              </li>
              <li>
                <a href="#" />
              </li>
              <li>
                {" "}
                <a href="#" />
              </li>
              <li>
                <a href="#" />
              </li>
            </ul>
          </div>
        </div>
        <div className="product_stock mb-20">
          <p>299 items</p>
          <span> In stock </span>
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
    </div>
    {/*product info start*/}
    <div className="product_d_info sidebar">
      <div className="col-12">
        <div className="product_d_inner">
          <div className="product_info_button">
            <ul className="nav" role="tablist">
              <li>
                <a
                  className="active"
                  data-toggle="tab"
                  href="#info"
                  role="tab"
                  aria-controls="info"
                  aria-selected="false"
                >
                  More info
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="#sheet"
                  role="tab"
                  aria-controls="sheet"
                  aria-selected="false"
                >
                  Data sheet
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="#reviews"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected="false"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="info"
              role="tabpanel"
            >
              <div className="product_info_content">
                <p>
                  Fashion has been creating well-designed collections since
                  2010. The brand offers feminine designs delivering stylish
                  separates and statement dresses which have since evolved into
                  a full ready-to-wear collection in which every item is a vital
                  part of a woman's wardrobe. The result? Cool, easy, chic looks
                  with youthful elegance and unmistakable signature style. All
                  the beautiful pieces are made in Italy and manufactured with
                  the greatest attention. Now Fashion extends to a range of
                  accessories including shoes, hats, belts and more!
                </p>
              </div>
            </div>
            <div className="tab-pane fade" id="sheet" role="tabpanel">
              <div className="product_d_table">
                <form action="#">
                  <table>
                    <tbody>
                      <tr>
                        <td className="first_child">Compositions</td>
                        <td>Polyester</td>
                      </tr>
                      <tr>
                        <td className="first_child">Styles</td>
                        <td>Girly</td>
                      </tr>
                      <tr>
                        <td className="first_child">Properties</td>
                        <td>Short Dress</td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="product_info_content">
                <p>
                  Fashion has been creating well-designed collections since
                  2010. The brand offers feminine designs delivering stylish
                  separates and statement dresses which have since evolved into
                  a full ready-to-wear collection in which every item is a vital
                  part of a woman's wardrobe. The result? Cool, easy, chic looks
                  with youthful elegance and unmistakable signature style. All
                  the beautiful pieces are made in Italy and manufactured with
                  the greatest attention. Now Fashion extends to a range of
                  accessories including shoes, hats, belts and more!
                </p>
              </div>
            </div>
            <div className="tab-pane fade" id="reviews" role="tabpanel">
              <div className="product_info_content">
                <p>
                  Fashion has been creating well-designed collections since
                  2010. The brand offers feminine designs delivering stylish
                  separates and statement dresses which have since evolved into
                  a full ready-to-wear collection in which every item is a vital
                  part of a woman's wardrobe. The result? Cool, easy, chic looks
                  with youthful elegance and unmistakable signature style. All
                  the beautiful pieces are made in Italy and manufactured with
                  the greatest attention. Now Fashion extends to a range of
                  accessories including shoes, hats, belts and more!
                </p>
              </div>
              <div className="product_info_inner">
                <div className="product_ratting mb-10">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <strong>Posthemes</strong>
                  <p>09/07/2018</p>
                </div>
                <div className="product_demo">
                  <strong>demo</strong>
                  <p>That's OK!</p>
                </div>
              </div>
              <div className="product_review_form">
                <form action="#">
                  <h2>Add a review </h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked{" "}
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="review_comment">Your review </label>
                      <textarea
                        name="comment"
                        id="review_comment"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label htmlFor="author">Name</label>
                      <input id="author" type="text" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label htmlFor="email">Email </label>
                      <input id="email" type="text" />
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*product info end*/}
  {/*Related Products area start*/}
  <div className="new_product_area">
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
  </div>
  {/*Related Products area end*/}
</div>
  </div>
</div>

      </>
    );
}

// const mapStateToProps = state =>{
//     return {
//          _products: state._todoProduct,
//        };
// }
// function mapDispatchToProps(dispatch){
//     return{
//         AddCart:item=>dispatch(AddCart(item))
      
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
export default ProductDetail;
