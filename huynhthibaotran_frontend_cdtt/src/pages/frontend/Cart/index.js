import React from 'react'
import { connect } from "react-redux";
// import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from './actions';
import { urlImage } from '../../../config';
import { Link } from 'react-router-dom';


function Cart({}) {
    // console.log(items.Carts)
    // let ListCart = [];
    // let TotalCart = 0;
    // Object.keys(items.Carts).forEach(function (item) {
    //     TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    //     ListCart.push(items.Carts[item]);
    // });
    // function TotalPrice(price, tonggia) {
    //     return Number(price * tonggia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    // }
    // if (ListCart.length > 0) {
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
                                <li>Shopping Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*shopping cart area start */}
            <div className="shopping_cart_area">
                <form action="#">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="cart_page table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product_remove">Delete</th>
                                                <th className="product_thumb">Image</th>
                                                <th className="product_name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product_quantity">Quantity</th>
                                                <th className="product_total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product_remove">
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" />
                                                    </a>
                                                </td>
                                                <td className="product_thumb">
                                                    <a href="#">
                                                        <img src="assets\img\cart\cart17.jpg" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product_name">
                                                    <a href="#">Handbag fringilla</a>
                                                </td>
                                                <td className="product-price">£65.00</td>
                                                <td className="product_quantity">
                                                    <input min={0} max={100} defaultValue={1} type="number" />
                                                </td>
                                                <td className="product_total">£130.00</td>
                                            </tr>
                                            <tr>
                                                <td className="product_remove">
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" />
                                                    </a>
                                                </td>
                                                <td className="product_thumb">
                                                    <a href="#">
                                                        <img src="assets\img\cart\cart18.jpg" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product_name">
                                                    <a href="#">Handbags justo</a>
                                                </td>
                                                <td className="product-price">£90.00</td>
                                                <td className="product_quantity">
                                                    <input min={0} max={100} defaultValue={1} type="number" />
                                                </td>
                                                <td className="product_total">£180.00</td>
                                            </tr>
                                            <tr>
                                                <td className="product_remove">
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" />
                                                    </a>
                                                </td>
                                                <td className="product_thumb">
                                                    <a href="#">
                                                        <img src="assets\img\cart\cart19.jpg" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product_name">
                                                    <a href="#">Handbag elit</a>
                                                </td>
                                                <td className="product-price">£80.00</td>
                                                <td className="product_quantity">
                                                    <input min={0} max={100} defaultValue={1} type="number" />
                                                </td>
                                                <td className="product_total">£160.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <button type="submit">update cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*coupon code area start*/}
                    <div className="coupon_area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code">
                                    <h3>Coupon</h3>
                                    <div className="coupon_inner">
                                        <p>Enter your coupon code if you have one.</p>
                                        <input placeholder="Coupon code" type="text" />
                                        <button type="submit">Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code">
                                    <h3>Cart Totals</h3>
                                    <div className="coupon_inner">
                                        <div className="cart_subtotal">
                                            <p>Subtotal</p>
                                            <p className="cart_amount">£215.00</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            <p>Shipping</p>
                                            <p className="cart_amount">
                                                <span>Flat Rate:</span> £255.00
                                            </p>
                                        </div>
                                        <a href="#">Calculate shipping</a>
                                        <div className="cart_subtotal">
                                            <p>Total</p>
                                            <p className="cart_amount">£215.00</p>
                                        </div>
                                        <div className="checkout_btn">
                                            <a href="#">Proceed to Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*coupon code area end*/}
                </form>
            </div>
            {/*shopping cart area end */}
        </>
    );
    // }
    // else {
    //     return (

    //         <div className="card card-body py-5 text-center shadow-sm">
    //             <h4>Giỏ hàng của bạn trống</h4>
    //         </div>

    //     )
    // }
}

// const mapStateToProps = state => {
//     //  console.log(state)
//     return {
//         items: state._todoProduct
//     }
// }

// export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart);
export default Cart;
