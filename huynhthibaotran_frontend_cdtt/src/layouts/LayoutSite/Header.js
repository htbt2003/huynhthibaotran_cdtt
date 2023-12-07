import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import React from 'react'
// import  {connect} from  'react-redux'
import Menu from "./Menu";


function Header(props) {
  const [key, setKey] = useState("");
  return (
<div className="header_area">
  {/*header top*/}
  <div className="header_top">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-6">
        <div className="switcher">
          <ul>
            <li className="languages">
              <a href="#">
                <img src="assets\img\logo\fontlogo.jpg" alt="" /> English{" "}
                <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown_languages">
                <li>
                  <a href="#">
                    <img src="assets\img\logo\fontlogo.jpg" alt="" /> English
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets\img\logo\fontlogo2.jpg" alt="" /> French{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="currency">
              <a href="#">
                {" "}
                Currency : $ <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown_currency">
                <li>
                  <a href="#"> Dollar (USD)</a>
                </li>
                <li>
                  <a href="#"> Euro (EUR)</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="header_links">
          <ul>
            <li>
              <Link to={"/lien-he"} title="Contact">
                Contact
              </Link>
            </li>
            <li>
              <a href="wishlist.html" title="wishlist">
                My wishlist
              </a>
            </li>
            <li>
              <a href="my-account.html" title="My account">
                My account
              </a>
            </li>
            <li>
              <Link to={"/gio-hang"} title="My cart">
                My cart
              </Link>
            </li>
            <li>
              <a href="login.html" title="Login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*header top end*/}
  {/*header middel*/}
  <div className="header_middel">
    <div className="row align-items-center">
      {/*logo start*/}
      <div className="col-lg-3 col-md-3">
        <div className="logo">
          <a href="index.html">
            <img src="assets\img\logo\logo.jpg.png" alt="" />
          </a>
        </div>
      </div>
      {/*logo end*/}
      <div className="col-lg-9 col-md-9">
        <div className="header_right_info">
          <div className="search_bar">
            <form action="#">
              <input placeholder="Search..." type="text" />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          <div className="shopping_cart">
            <a href="#">
              <i className="fa fa-shopping-cart" /> 2Items - $209.44{" "}
              <i className="fa fa-angle-down" />
            </a>
            {/*mini cart*/}
            <div className="mini_cart">
              <div className="cart_item">
                <div className="cart_img">
                  <a href="#">
                    <img src="assets\img\cart\cart.jpg" alt="" />
                  </a>
                </div>
                <div className="cart_info">
                  <a href="#">lorem ipsum dolor</a>
                  <span className="cart_price">$115.00</span>
                  <span className="quantity">Qty: 1</span>
                </div>
                <div className="cart_remove">
                  <a title="Remove this item" href="#">
                    <i className="fa fa-times-circle" />
                  </a>
                </div>
              </div>
              <div className="cart_item">
                <div className="cart_img">
                  <a href="#">
                    <img src="assets\img\cart\cart2.jpg" alt="" />
                  </a>
                </div>
                <div className="cart_info">
                  <a href="#">Quisque ornare dui</a>
                  <span className="cart_price">$105.00</span>
                  <span className="quantity">Qty: 1</span>
                </div>
                <div className="cart_remove">
                  <a title="Remove this item" href="#">
                    <i className="fa fa-times-circle" />
                  </a>
                </div>
              </div>
              <div className="shipping_price">
                <span> Shipping </span>
                <span> $7.00</span>
              </div>
              <div className="total_price">
                <span> total </span>
                <span className="prices"> $227.00</span>
              </div>
              <div className="cart_button">
                <a href="checkout.html"> Check out</a>
              </div>
            </div>
            {/*mini cart end*/}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*header middel end*/}
  
  <Menu/>

</div>

  );
}

// const mapStateToProps = state =>{
//   return{
//       numberCart:state._todoProduct.numberCart
//   }
// }
export default Header;

// export default connect(mapStateToProps,null)(Header);
