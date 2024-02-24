import React from 'react'
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from './actions';
import { urlImage } from '../../../config';
import { Link } from 'react-router-dom';


function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}) {
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    // console.log(items.Carts)
    if (ListCart.length > 0) {
    return (
        <>
            {/*breadcrumbs area start*/}
            <div className="breadcrumbs_area">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <Link href="index.html">home</Link>
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
                                        {
                                            ListCart.map((item,key)=>{
                                                return(
                                                    <tr>
                                                        <td className="product_remove">
                                                            <Link href="#" onClick={()=>DeleteCart(key)}>
                                                                <i className="fa fa-trash-o" />
                                                            </Link>
                                                        </td>
                                                        <td className="product_thumb">
                                                            <Link href="#">
                                                                <img src={urlImage + "product/" + item.image}></img>
                                                            </Link>
                                                        </td>
                                                        <td className="product_name">
                                                            <Link href="#">{item.name}</Link>
                                                        </td>
                                                        <td className="product-price">{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                        <td className="product_quantity">
                                                                    <span className="btn-primary" style={{margin:'0px', paddingLeft:10, paddingRight:10}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                                                    <span className="btn-info" style={{margin:'0px', paddingLeft:10, paddingRight:10}}>{item.quantity}</span>
                                                                    <span className="btn-primary" style={{margin:'0px', paddingLeft:10, paddingRight:10}} onClick={()=>IncreaseQuantity(key)}>+</span>
                                                        </td>
                                                        <td className="product_total">{(item.price*item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                    </tr>    
                                                )
                                            })
                                                
                                        }

                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <h4 style={{color:'red'}}>{TotalCart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h4>
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
                                        <Link href="#">Calculate shipping</Link>
                                        <div className="cart_subtotal">
                                            <p>Total</p>
                                            <p className="cart_amount">£215.00</p>
                                        </div>
                                        <div className="checkout_btn">
                                            <Link to='/thanh-toan'>Proceed to Checkout</Link>
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
    }
    else {
        return (

            <div className="card card-body py-5 text-center shadow-sm" style={{height:600}}>
                <h4>Giỏ hàng của bạn trống</h4>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart, })(Cart);
