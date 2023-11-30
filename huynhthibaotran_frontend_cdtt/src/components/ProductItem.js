import { FcNext } from 'react-icons/fc';
import { urlImage } from '../config';
import { Link } from 'react-router-dom';
// import { AddCart } from '../pages/frontend/Cart/actions';
// import { connect } from 'react-redux';
import React from 'react'

function ProductItem(props) {
    return ( 
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
// export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)
export default ProductItem;
