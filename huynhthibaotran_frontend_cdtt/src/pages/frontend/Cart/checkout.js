import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderServices from '../../../services/OrderServices';
import { connect } from "react-redux";
import UserServices from '../../../services/UserServices';
import {ClearCart} from './actions';

function Checkout({ items, ClearCart}) {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [user, setUser] = useState([])
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
//    console.log(ListCart)
    useEffect(function () {
        (async function () {
            await UserServices.getById(6)
                .then(function (result) {
                    setUser(result.user)
                });
        })();
    }, []);
    async function OrderStore(event) {
        event.preventDefault();//không load lại trang
        var order = {
            user_id: user.id,
            name: name=="" ? user.name : name,
            email: email=="" ? user.email : email,
            address: address=="" ? user.address : address,
            phone: phone=="" ? user.phone : phone,
            note: note,
        }
        const data = {
            order, 
            ListCart
        }
        await OrderServices.doCheckout(data)
            .then(function (result) {
                if(result.status == true)
                {
                    ClearCart()
                    alert(result.message)
                    navigator("/", { replace: true })
                }
                console.log(result.order)
            });
    }
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
                                <li>checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*Checkout page section*/}
            <div className="Checkout_section">
                <div className="row">
                    <div className="col-12">
                        <div className="user-actions mb-20">
                            <h3>
                                <i className="fa fa-file-o" aria-hidden="true" />
                                Returning customer?
                                <a
                                    className="Returning"
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#checkout_login"
                                    aria-expanded="true"
                                >
                                    Click here to login
                                </a>
                            </h3>
                            <div
                                id="checkout_login"
                                className="collapse"
                                data-parent="#accordion"
                            >
                                <div className="checkout_info">
                                    <p>
                                        If you have shopped with us before, please enter your details in
                                        the boxes below. If you are a new customer please proceed to the
                                        Billing &amp; Shipping section.
                                    </p>
                                    <form action="#">
                                        <div className="form_group mb-20">
                                            <label>
                                                Username or email <span>*</span>
                                            </label>
                                            <input type="text" />
                                        </div>
                                        <div className="form_group mb-25">
                                            <label>
                                                Password <span>*</span>
                                            </label>
                                            <input type="text" />
                                        </div>
                                        <div className="form_group group_3 ">
                                            <input defaultValue="Login" type="submit" />
                                            <label htmlFor="remember_box">
                                                <input id="remember_box" type="checkbox" />
                                                <span> Remember me </span>
                                            </label>
                                        </div>
                                        <a href="#">Lost your password?</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="user-actions mb-20">
                            <h3>
                                <i className="fa fa-file-o" aria-hidden="true" />
                                Returning customer?
                                <a
                                    className="Returning"
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#checkout_coupon"
                                    aria-expanded="true"
                                >
                                    Click here to enter your code
                                </a>
                            </h3>
                            <div
                                id="checkout_coupon"
                                className="collapse"
                                data-parent="#accordion"
                            >
                                <div className="checkout_info">
                                    <form onSubmit={OrderStore}>
                                        <input placeholder="Coupon code" type="text" />
                                        <input defaultValue="Apply coupon" type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout_form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <form onSubmit={OrderStore} method="post">
                                <h3>Billing Details</h3>
                                <div className="row">
                                    <div className="col-lg-12 mb-30">
                                        <label>
                                            Họ Tên <span>*</span>
                                        </label>
                                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                    {/* <div className="col-lg-6 mb-30">
                                        <label>
                                            Last Name <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </div> */}
                                    {/* <div className="col-12 mb-30">
                                        <label>Company Name</label>
                                        <input type="text" />
                                    </div> */}
                                    {/* <div className="col-12 mb-30">
                                        <label htmlFor="country">
                                            country <span>*</span>
                                        </label>
                                        <select name="cuntry" id="country">
                                            <option value={2}>bangladesh</option>
                                            <option value={3}>Algeria</option>
                                            <option value={4}>Afghanistan</option>
                                            <option value={5}>Ghana</option>
                                            <option value={6}>Albania</option>
                                            <option value={7}>Bahrain</option>
                                            <option value={8}>Colombia</option>
                                            <option value={9}>Dominican Republic</option>
                                        </select>
                                    </div> */}
                                    <div className="col-12 mb-30">
                                        <label>
                                            Địa chỉ <span>*</span>
                                        </label>
                                        <input placeholder="Số nhà hoặc tên đường" type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
                                    </div>
                                    {/* <div className="col-12 mb-30">
                                        <input
                                            placeholder="Apartment, suite, unit etc. (optional)"
                                            type="text"
                                        />
                                    </div> */}
                                    {/* <div className="col-12 mb-30">
                                        <label>
                                            Town / City <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </div> */}
                                    {/* <div className="col-12 mb-30">
                                        <label>
                                            State / County <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </div> */}
                                    <div className="col-lg-6 mb-30">
                                        <label>
                                            Điện thoại<span>*</span>
                                        </label>
                                        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <label>
                                            {" "}
                                            Email <span>*</span>
                                        </label>
                                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </div>
                                    <div className="col-12 mb-30">
                                        <input
                                            id="account"
                                            type="checkbox"
                                            data-target="createp_account"
                                        />
                                        <label
                                            htmlFor="account"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-controls="collapseOne"
                                        >
                                            Create an account?
                                        </label>
                                        <div
                                            id="collapseOne"
                                            className="collapse one"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body1">
                                                <label>
                                                    {" "}
                                                    Account password <span>*</span>
                                                </label>
                                                <input placeholder="password" type="password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-30">
                                        <input
                                            id="address"
                                            type="checkbox"
                                            data-target="createp_account"
                                        />
                                        <label
                                            className="righ_0"
                                            htmlFor="address"
                                            data-toggle="collapse"
                                            data-target="#collapsetwo"
                                            aria-controls="collapseOne"
                                        >
                                            Ship to a different address?
                                        </label>
                                        <div
                                            id="collapsetwo"
                                            className="collapse one"
                                            data-parent="#accordion"
                                        >
                                            <div className="row">
                                                <div className="col-lg-6 mb-30">
                                                    <label>
                                                        First Name <span>*</span>
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="col-lg-6 mb-30">
                                                    <label>
                                                        Last Name <span>*</span>
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="col-12 mb-30">
                                                    <label>Company Name</label>
                                                    <input type="text" />
                                                </div>
                                                <div className="col-12 mb-30">
                                                    <div className="select_form_select">
                                                        <label htmlFor="countru_name">
                                                            country <span>*</span>
                                                        </label>
                                                        <select name="cuntry" id="countru_name">
                                                            <option value={2}>bangladesh</option>
                                                            <option value={3}>Algeria</option>
                                                            <option value={4}>Afghanistan</option>
                                                            <option value={5}>Ghana</option>
                                                            <option value={6}>Albania</option>
                                                            <option value={7}>Bahrain</option>
                                                            <option value={8}>Colombia</option>
                                                            <option value={9}>Dominican Republic</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-30">
                                                    <label>
                                                        Street address <span>*</span>
                                                    </label>
                                                    <input
                                                        placeholder="House number and street name"
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-12 mb-30">
                                                    <input
                                                        placeholder="Apartment, suite, unit etc. (optional)"
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-12 mb-30">
                                                    <label>
                                                        Town / City <span>*</span>
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="col-12 mb-30">
                                                    <label>
                                                        State / County <span>*</span>
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="col-lg-6 mb-30">
                                                    <label>
                                                        Phone<span>*</span>
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <label>
                                                        {" "}
                                                        Email Address <span>*</span>
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="order-notes">
                                            <label htmlFor="order_note">Ghi chú</label>
                                            <textarea
                                                id="order_note"
                                                placeholder="Notes about your order, e.g. special notes for delivery."
                                                defaultValue={""}
                                                onChange={(e) => setNote(e.target.value)} value={note} 
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="order_button text-right">
                                        <button type="submit">Đặt hàng</button>
                                    </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <form onSubmit={OrderStore} method="post">
                                <h3>Your order</h3>
                                <div className="order_table table-responsive mb-30">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Tổng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            ListCart.map((item,key)=>{
                                                return(
                                                    <tr key={key}>
                                                <td>
                                                    {" "}
                                                    {item.name} <strong> × {item.quantity}</strong>
                                                </td>
                                                <td> {(item.price*item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                            </tr>
                                                )
                                            })
                                                
                                        }
                                        </tbody>
                                        <tfoot>
                                            {/* <tr>
                                                <th>Cart Subtotal</th>
                                                <td>$215.00</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <td>
                                                    <strong>$5.00</strong>
                                                </td>
                                            </tr> */}
                                            <tr className="order_total">
                                                <th>Tổng hoá đơn</th>
                                                <td>
                                                    <strong>{TotalCart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="payment_method">
                                    <div className="panel-default">
                                        <input
                                            id="payment"
                                            name="check_method"
                                            type="radio"
                                            data-target="createp_account"
                                        />
                                        <label
                                            htmlFor="payment"
                                            data-toggle="collapse"
                                            data-target="#method"
                                            aria-controls="method"
                                        >
                                            Create an account?
                                        </label>
                                        <div
                                            id="method"
                                            className="collapse one"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body1">
                                                <p>
                                                    Please send a check to Store Name, Store Street, Store
                                                    Town, Store State / County, Store Postcode.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-default">
                                        <input
                                            id="payment_defult"
                                            name="check_method"
                                            type="radio"
                                            data-target="createp_account"
                                        />
                                        <label
                                            htmlFor="payment_defult"
                                            data-toggle="collapse"
                                            data-target="#collapsedefult"
                                            aria-controls="collapsedefult"
                                        >
                                            PayPal <img src="assets\img\visha\papyel.png" alt="" />
                                        </label>
                                        <div
                                            id="collapsedefult"
                                            className="collapse one"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body1">
                                                <p>
                                                    Pay via PayPal; you can pay with your credit card if you
                                                    don’t have a PayPal account.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order_button">
                                        <button type="submit">Chọn phương thức thanh toán</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*Checkout page section end*/}
        </>
    )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps, { ClearCart })(Checkout);

