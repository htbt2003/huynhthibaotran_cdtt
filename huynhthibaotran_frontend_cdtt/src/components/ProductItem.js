import { FcNext } from 'react-icons/fc';
import { urlImage } from '../config';
import { Link } from 'react-router-dom';
import { AddCart } from '../pages/frontend/Cart/actions';
import { connect } from 'react-redux';
import React from 'react'

function ProductItem(props) {
    return ( 
      <div className="col-lg-3">
      <div className="single_product">
        <div className="product_thumb">
          <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
            <img src={urlImage + "product/" + props.product.image} alt="hinh" />
          </Link>
          
            {
              props.product.price_sale != null ?
              (
                <div className="hot_img">
                <img src="assets\img\cart\span-hot.png" alt="" />
                </div>
              )
              :
              null
            }
            
         
          <div className="product_action" onClick={()=>props.AddCart(props.product)}>
            <Link >
              {" "}
              <i className="fa fa-shopping-cart" /> Add to cart
            </Link>
          </div>
        </div>
        <div className="product_content">
          {
            props.product.price_sale!=null ?
            (
              <div className='row mt-1'> 
              <h4 className="product_price col-lg-5" style={{color:'red'}}>{props.product.price_sale}đ</h4>
              <h6 className="col-lg-7" style={{textDecoration: 'line-through'}}>{props.product.price}đ</h6>
              </div>    
            )
            :
            (
              <span className="product_price" style={{color:'red'}}>{props.product.price}đ</span>
    
            )
          }
          
          <h3 className="product_title">
            <Link href="single-product.html">{props.product.name}</Link>
          </h3>
        </div>
        <div className="product_info">
          <ul>
            <li>
              {/* <Link href="#" title=" Add to Wishlist ">
                Add to Wishlist
              </Link> */}
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
export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)
