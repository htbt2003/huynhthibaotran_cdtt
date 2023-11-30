import { useEffect, useState } from 'react';
import ProductItem from '../../../components/ProductItem.js';
import ProductServices from '../../../services/ProductServices';
// import { Button } from 'bootstrap';

function ProductCategory() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, e.g., trigger sorting based on selectedOption
    console.log('Selected sorting option:', selectedOption);
  };
    // const [limit, setLimit] = useState(8);
    // const [products, setProducts] = useState([]);
    // useEffect(function(){
    //   (async function(){
    //     await ProductServices.getProductAll(limit, 1)
    //     .then(function(result){
    //       setProducts(result.data.products)
    //     });
    //   })();
    // },[limit])
    return (
        <>
              <>
  {/*breadcrumbs area start*/}
  <div className="breadcrumbs_area">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb_content">
          <ul>
            <li>
              <a href="index.html">Trang chủ</a>
            </li>
            <li>
              <i className="fa fa-angle-right" />
            </li>
            <li>Sản phẩm</li>
            <li>
              <i className="fa fa-angle-right" />
            </li>
            <li>Danh mục</li>
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
      {/*banner slider start*/}
      <div className="banner_slider mb-35">
        <img src="assets\img\banner\bannner10.jpg" alt="" />
      </div>
      {/*banner slider start*/}
      {/*shop toolbar start*/}
      <div className="shop_toolbar mb-35">
        <div className="list_button">
          <ul className="nav" role="tablist">
            <li>
              <a
                className="active"
                data-toggle="tab"
                href="#large"
                role="tab"
                aria-controls="large"
                aria-selected="true"
              >
                <i className="fa fa-th-large" />
              </a>
            </li>
            <li>
              <a
                data-toggle="tab"
                href="#list"
                role="tab"
                aria-controls="list"
                aria-selected="false"
              >
                <i className="fa fa-th-list" />
              </a>
            </li>
          </ul>
        </div>
        <div className="page_amount">
          <p>Showing 1–9 of 21 results</p>
        </div>
        <div className="select_option">
        <form onSubmit={handleSubmit}>
      <label htmlFor="short">Sort By</label>
      <select
        name="orderby"
        id="short"
        value={selectedOption}
        onChange={handleSortChange}
      >
        <option value={1}>Position</option>
        <option value={2}>Price: Lowest</option>
        <option value={3}>Price: Highest</option>
        <option value={4}>Product Name: Z</option>
        <option value={5}>Sort by price: Low</option>
        <option value={6}>Product Name: A</option>
        <option value={7}>In stock</option>
        <option value={8}>Product Name: A</option>
        <option value={9}>In stock</option>
      </select>
      {/* <button type="submit">Submit</button> */}
    </form>
        </div>
      </div>
      {/*shop toolbar end*/}
      {/*shop tab product*/}
      <div className="shop_tab_product">
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="large" role="tabpanel">
            <div className="row">
              <div className="col-lg-4 col-md-6">
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
              <div className="col-lg-4 col-md-6">
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
              <div className="col-lg-4 col-md-6">
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
              <div className="col-lg-4 col-md-6">
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
              <div className="col-lg-4 col-md-6">
                <div className="single_product">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product5.jpg" alt="" />
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
              <div className="col-lg-4 col-md-6">
                <div className="single_product">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product6.jpg" alt="" />
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
              <div className="col-lg-4 col-md-6">
                <div className="single_product">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product7.jpg" alt="" />
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
              <div className="col-lg-4 col-md-6">
                <div className="single_product">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product8.jpg" alt="" />
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
              <div className="col-lg-4 col-md-6">
                <div className="single_product">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product9.jpg" alt="" />
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
          <div className="tab-pane fade" id="list" role="tabpanel">
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product2.jpg" alt="" />
                    </a>
                    <div className="hot_img">
                      <img src="assets\img\cart\span-hot.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Lorem ipsum dolor</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select" type="checkbox" />
                      <label htmlFor="select">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product3.jpg" alt="" />
                    </a>
                    <div className="img_icone">
                      <img src="assets\img\cart\span-new.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Quisque ornare dui</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select1" type="checkbox" />
                      <label htmlFor="select1">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product4.jpg" alt="" />
                    </a>
                    <div className="img_icone">
                      <img src="assets\img\cart\span-new.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Maecenas sit amet</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select2" type="checkbox" />
                      <label htmlFor="select2">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product5.jpg" alt="" />
                    </a>
                    <div className="img_icone">
                      <img src="assets\img\cart\span-new.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Sed non luctus turpis</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select3" type="checkbox" />
                      <label htmlFor="select3">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product6.jpg" alt="" />
                    </a>
                    <div className="hot_img">
                      <img src="assets\img\cart\span-hot.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Donec dignissim eget</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select4" type="checkbox" />
                      <label htmlFor="select4">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product7.jpg" alt="" />
                    </a>
                    <div className="img_icone">
                      <img src="assets\img\cart\span-new.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Lorem ipsum dolor</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select5" type="checkbox" />
                      <label htmlFor="select5">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product8.jpg" alt="" />
                    </a>
                    <div className="img_icone">
                      <img src="assets\img\cart\span-new.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Donec ac congue</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select6" type="checkbox" />
                      <label htmlFor="select6">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product9.jpg" alt="" />
                    </a>
                    <div className="hot_img">
                      <img src="assets\img\cart\span-hot.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Curabitur sodales</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select7" type="checkbox" />
                      <label htmlFor="select7">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_list_item mb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product_thumb">
                    <a href="single-product.html">
                      <img src="assets\img\product\product1.jpg" alt="" />
                    </a>
                    <div className="img_icone">
                      <img src="assets\img\cart\span-new.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className="list_product_content">
                    <div className="product_ratting">
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
                    </div>
                    <div className="list_title">
                      <h3>
                        <a href="single-product.html">Lorem ipsum dolor</a>
                      </h3>
                    </div>
                    <p className="design">
                      {" "}
                      in quibusdam accusantium qui nostrum consequuntur,
                      officia, quidem ut placeat. Officiis, incidunt eos
                      recusandae! Facilis aliquam vitae blanditiis quae
                      perferendis minus eligendi
                    </p>
                    <p className="compare">
                      <input id="select8" type="checkbox" />
                      <label htmlFor="select8">Select to compare</label>
                    </p>
                    <div className="content_price">
                      <span>$118.00</span>
                      <span className="old-price">$130.00</span>
                    </div>
                    <div className="add_links">
                      <ul>
                        <li>
                          <a href="#" title="add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="add to wishlist">
                            <i className="fa fa-heart" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_box"
                            title="Quick view"
                          >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*shop tab product end*/}
      {/*pagination style start*/}
      <div className="pagination_style">
        <div className="item_page">
          <form action="#">
            <label htmlFor="page_select">show</label>
            <select id="page_select">
              <option value={1}>9</option>
              <option value={2}>10</option>
              <option value={3}>11</option>
            </select>
            <span>Products by page</span>
          </form>
        </div>
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
      {/*pagination style end*/}
    </div>
  </div>
</div>
</>

        </>
    );
}

export default ProductCategory;