import { useEffect, useState } from 'react';
import ProductItem from '../../../components/ProductItem.js';
import ProductServices from '../../../services/ProductServices';
import Ccp from '../../../layouts/LayoutSite/Ccp.js';
import Wpn from '../../../layouts/LayoutSite/Wpn.js';
import SpecialPro from '../../../layouts/LayoutSite/SpecialPro.js';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';

function Product() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState(null);
  const [prices, setPrices] = useState([0, 1000000]);
  const [reload, setReload] = useState();

  var condition = {
    brands: selectedBrands,
    categories: selectedCategories,
    prices: {
      form: prices[0],
      to: prices[1],
    },
    sort: sort,
  }

  const handleSortChange = (event) => {
    setSort(event.target.value);
    setReload(Date.now)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, e.g., trigger sorting based on selectedOption
    console.log('Selected sorting option:', sort);
  };
    useEffect(function(){
      (async () => {
        try {
          const result = await ProductServices.getProductAll(page, condition);
          setProducts(result.products.data);
          setTotal(result.total);
          setBrands(result.brands);
          setCategories(result.categories);
        } catch (error) {
          console.log('...wait');
        }
      })();
    },[reload, prices])
      //------------pagination-------------
  const numberPage = Math.ceil(total / 8);
  const handlePageChange = (event) => {
    setPage(event.selected + 1);
    setReload(Date.now)
  };
  //--------filter price----------------
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
  //-------selected--------------
  const handleCheckboxCategory = (categoryId) => {
    const isSelected = selectedCategories.includes(categoryId);
    if (isSelected) {
      setSelectedCategories(prevSelected => prevSelected.filter(id => id !== categoryId));
    } else {
      setSelectedCategories(prevSelected => [...prevSelected, categoryId]);
    }
    setReload(Date.now)
  };
  const handleCheckboxBrand = (brandId) => {
    const isSelected = selectedBrands.includes(brandId);
    if (isSelected) {
      setSelectedBrands(prevSelected => prevSelected.filter(id => id !== brandId));
    } else {
      setSelectedBrands(prevSelected => [...prevSelected, brandId]);
    }
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
    <div className="sidebar_widget shop_c">
        <div className="categorie__titile">
          <h4>Thương hiệu</h4>
        </div>
        <div className="layere_categorie">
          <ul>
          {brands && brands.length > 0 && brands.map(function (brand, index) {
                        return (
                          <li key={index}>
                          <input type="checkbox"
                                onChange={() => handleCheckboxBrand(brand.id)}
                                checked={selectedBrands.includes(brand.id)}
                                id={"brand"+brand.id}
                          />
                          <label htmlFor={"brand"+brand.id}>
                            {brand.name}<span></span>
                          </label>
                        </li>
                        );
                    })}
          </ul>
        </div>
      </div>
          {/*layere categorie"*/}
          <div className="sidebar_widget shop_c">
        <div className="categorie__titile">
          <h4>Categories</h4>
        </div>
        <div className="layere_categorie">
          <ul>
          {categories && categories.length > 0 && categories.map(function (category, index) {
                        return (
                          <li key={index}>
                          <input type="checkbox" 
                                id={"category"+category.id}
                                onChange={() => handleCheckboxCategory(category.id)}
                                checked={selectedCategories.includes(category.id)}
                          />
                          <label htmlFor={"category"+category.id}>
                            {category.name}<span></span>
                          </label>
                        </li>
                        );
                    })}
          </ul>
        </div>
      </div>
      {/*layere categorie end*/}
      
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
        id="slider-range"
        className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
      >
        <div
          className="ui-slider-range ui-widget-header ui-corner-all"
          style={{
            left: `${(prices[0] / 1000000) * 100}%`,
            width: `${((prices[1] - prices[0]) / 1000000) * 100}%`,
          }}
        ></div>
        <span
          className="ui-slider-handle ui-state-default ui-corner-all"
          tabIndex="0"
          style={{ left: `${(prices[0] / 1000000) * 100}%` }}
        ></span>
        <span
          className="ui-slider-handle ui-state-default ui-corner-all"
          tabIndex="0"
          style={{ left: `${(prices[1] / 1000000) * 100}%` }}
        ></span>
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
          <p>Showing 1–9 of 21 results</p>
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
                  {products && products.map(function(product, index){
                        return <ProductItem key={index} product={product}/>
                    })}
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

export default Product;