import { useEffect, useState } from "react";
import ProductServices from '../../../services/ProductServices';
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/ProductItem";
import { AddCart } from '../Cart/actions';
import { connect } from 'react-redux';
import React from 'react'
import Ccp from '../../../layouts/LayoutSite/Ccp.js';
import SpecialPro from '../../../layouts/LayoutSite/SpecialPro.js';
import ProductReview from "./ProductReview.js";

function ProductDetail(props) {
    const {slug} = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
    useEffect(function(){
      (async function(){
        await ProductServices.getProductBySlug(slug)
        .then(function(result){
            if(result.status === true){
                setProduct(result.product)
                setProductOther(result.product_other)
            }
        });
      })();
    },[slug])
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
      <SpecialPro/>
    </div>
    <div className="col-lg-9 col-md-12">
  <div className="row">
    <div className="col-lg-6 col-md-6" >
      <div className="product_tab sidebar fix" >
        <div className="tab-content produc_tab_c">
          <div
            className="tab-pane fade show active "
            id="p_tab1"
            role="tabpanel"
          >
            <div className="modal_img" >
              <a href="#">
                <img src={urlImage + "product/" + product.image} alt="" />
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
          <div className="tab-pane fade" >
            <div className="">
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
        <div className="product_tab_button mb-4">
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
                <img src={urlImage + "product/" + product.image} alt="" />
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
                <img src={urlImage + "product/" + product.image} alt="" />
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
                <img src={urlImage + "product/" + product.image} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-6">
      <div className="product_d_right">
        <h1>{product.name}</h1>
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
            {product.metadesc}
          </p>
        </div>
        {
          product.price_sale!=null ?
          (
            <div className="content_price mb-15">
          <span style={{color:'red'}}>{product.price_sale}đ</span>
          <span className="old-price">{product.price}đ</span>
        </div>
          )
          :
          (
            <div className="content_price mb-15">
          <span>{product.price}đ</span>
        </div>
          )
        }
        
        <div className="box_quantity mb-20">
          <form action="#">
            <label>quantity</label>
            <input min={0} max={100} defaultValue={1} type="number" />
          </form>
          <button onClick={()=>props.AddCart(product)}>
            <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
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
    <div className="mb-4 col-12 ">
      <div className="">
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
                  {product.detail}
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
           <ProductReview product_id={product.id}/>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*product info end*/}
  {/*Related Products area start*/}
  <div className="new_product_area" style={{marginRight:20}}>
            <div className="block_title">
              <h3>Có thể bạn quan tâm</h3>
            </div>
            <div className="row">
              <div className="row" style={{ position:'relative'}}>
                {
                    (product_other && product_other.length > 0 && product_other.map(function (product, index) {
                        return (
                           <ProductItem product={product} key={index}/>
          
                          );
                      }))
                }                
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

const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{
        AddCart:item=>dispatch(AddCart(item))
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
