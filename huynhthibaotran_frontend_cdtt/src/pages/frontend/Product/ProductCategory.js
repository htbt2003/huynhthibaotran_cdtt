import { useEffect, useState } from 'react';
import ProductItem from '../../../components/ProductItem.js';
import ProductServices from '../../../services/ProductServices';
import CategoryServices from '../../../services/CategoryServices';
import Ccp from '../../../layouts/LayoutSite/Ccp.js';
import Wpn from '../../../layouts/LayoutSite/Wpn.js';
import SpecialPro from '../../../layouts/LayoutSite/SpecialPro.js';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import $ from 'jquery';

function ProductCategory() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const { slug } = useParams();
  const [sort, setSort] = useState();
  const [prices, setPrices] = useState([0, 1000000]);
  const [pricesFiler, setPriceFiler] = useState(null);
  const [reload, setReload] = useState();

    var condition = {
      prices: {
        form: prices[0],
      to: prices[1],
      },
      sort: sort,
    }
    useEffect(function(){
      (async function(){
        const result = await CategoryServices.getCategoryBySlug(slug);
            const catid = result.category.id;
            setTitle(result.category.name);
        const resultpro = await ProductServices.getProductByCategoryId(page, catid, condition)
          setProducts(resultpro.products.data)
          setTotal(resultpro.total);

      })();
    },[slug, reload])
    
    // console.log(products)
    console.log(pricesFiler)

      //------------pagination-------------
  const numberPage = Math.ceil(total / 8);
  const handlePageChange = (event) => {
    setPage(event.selected + 1);
    setReload(Date.now)
  };
  //----------sort--------
  const handleSortChange = (event) => {
    setSort(event.target.value);
    setReload(Date.now)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, e.g., trigger sorting based on selectedOption
    console.log('Selected sorting option:', sort);
  };
  //-------thanh lọc giá--------
  useEffect(() => {
    // Initialize the jQuery UI slider
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 1000000,
      values: prices,
      slide: (event, ui) => setPrices(ui.values),
    });
  }, [prices]);
  const handleChangePrice = () => {
    setPriceFiler(prices);
    setReload(Date.now)
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
            <li>shop</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*breadcrumbs area end*/}

<div className=" pos_home_section">
  <div className="row pos_home">
    <div className="col-lg-3 col-md-12">

                  {/*price slider start*/}
                  <div className="sidebar_widget price mb-4">
        <h2>Price</h2>
        <div className="ca_search_filters">
      <input
        type="text"
        name="text"
        id="amount"
        value={`${prices[0]} - ${prices[1]}`}
        readOnly
      />
      <div
        onChange={handleChangePrice}
        id="slider-range"
        className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
      >
        {/* <div
        onChange={handleChangePrice}
          className="ui-slider-range ui-widget-header ui-corner-all"
          style={{
            left: `${(prices[0] / 1000000) * 100}%`,
            width: `${((prices[1] - prices[0]) / 1000000) * 100}%`,
          }}
        ></div>
        <span
        onChange={handleChangePrice}
          className="ui-slider-handle ui-state-default ui-corner-all"
          tabIndex="0"
          style={{ left: `${(prices[0] / 1000000) * 100}%` }}
        ></span>
        <span
          className="ui-slider-handle ui-state-default ui-corner-all"
          tabIndex="0"
          style={{ left: `${(prices[1] / 1000000) * 100}%` }}
        ></span> */}
      </div>
      <div className="mt-2 text-right">
            <span className="btn btn-sm btn-primary" onClick={handleChangePrice}>
               Lọc
            </span>
      </div>
    </div>
      </div>
      {/*price slider end*/}

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
          <p>{title}</p>
        </div>
        <div className="select_option">
        <form onSubmit={handleSubmit}>
      <label htmlFor="short">Sort By</label>
      <select
        name="orderby"
        id="short"
        value={sort}
        onChange={handleSortChange}
      >
        <option value={'ASC'}>Giá: Tăng dần</option>
        <option value={'DESC'}>Giá: Giảm dần</option>
        {/* <option value={4}>Product Name: Z</option>
        <option value={5}>Sort by price: Low</option>
        <option value={6}>Product Name: A</option>
        <option value={7}>In stock</option>
        <option value={8}>Product Name: A</option>
        <option value={9}>In stock</option> */}
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
                  {products.map(function(product, index){
                        return <ProductItem key={index} product={product}/>
                    })}
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
          </form>
        </div>
        
        <div className="mt-2">
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
      {/*pagination style end*/}
    </div>
  </div>
</div>

</>
    );
}

export default ProductCategory;