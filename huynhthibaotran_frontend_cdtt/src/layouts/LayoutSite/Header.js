import { Link, useNavigate } from "react-router-dom";
// import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import React from 'react'
// import  {connect} from  'react-redux'
import Menu from "./Menu";
import swal from "sweetalert";
import UserServices from '../../services/UserServices';


function Header(props) {
  const [key, setKey] = useState("");
  const navigator = useNavigate();

  const logoutSubmit = (e) => {
    e.preventDefault();
    UserServices.logout()
    .then(function (result) {
      if (result.status === true) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth');
        swal("Success", result.message, "success");
        navigator("/", { replace: true })
      }
    });
  }

  return (
    <div className="header_area">
      {/*header top*/}
      <div className="header_top">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="switcher">
              <ul>
                <li className="languages">
                  <Link href="#">
                    <img src="assets\img\logo\fontlogo.jpg" alt="" /> English{" "}
                    <i className="fa fa-angle-down" />
                  </Link>
                  <ul className="dropdown_languages">
                    <li>
                      <Link href="#">
                        <img src="assets\img\logo\fontlogo.jpg" alt="" /> English
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img src="assets\img\logo\fontlogo2.jpg" alt="" /> French{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="currency">
                  <Link href="#">
                    {" "}
                    Currency : $ <i className="fa fa-angle-down" />
                  </Link>
                  <ul className="dropdown_currency">
                    <li>
                      <Link href="#"> Dollar (USD)</Link>
                    </li>
                    <li>
                      <Link href="#"> Euro (EUR)</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header_links">
              <ul>
                {/* <li>
              <Link to={"/lien-he"} title="Contact">
                Contact
              </Link>
            </li> */}
                <li>
                  <Link to={"/gio-hang"} title="wishlist">
                    Giỏ hàng
                  </Link>
                </li>
                <li>
                  <Link to={"/tai-khoan"} title="My account">
                    Tài khoản
                  </Link>
                </li>
                {
                  localStorage.getItem('auth') ?
                    (
                      <li>
                        <button type="button" onClick={logoutSubmit}>
                        <Link title="My cart">
                          Đăng xuất
                        </Link>
                        </button>
                      </li>
                    )
                    :
                    (
                      <li>
                        <Link to={"/dang-nhap"} title="My cart">
                          Đăng nhập
                        </Link>
                      </li>
                    )
                }

                {
                  localStorage.getItem('auth') ?
                    (
                      <li>
                        <Link to={"/tai-khoan"}>
                          Tài khoản
                        </Link>
                      </li>
                    )
                    :
                    (
                      <li>
                        <Link to={"/dang-ky"} title="My cart">
                        Đăng ký
                        </Link>
                      </li>
                    )
                }
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
              <Link href="index.html">
                <img src="assets\img\logo\logo.jpg.png" alt="" />
              </Link>
            </div>
          </div>
          {/*logo end*/}
          <div className="col-lg-9 col-md-9">
            <div className="header_right_info">
              <div className="search_bar">
                <form action="#">
                  <input placeholder="Search..." type="text" value={key} onChange={(e) => setKey(e.target.value)} />
                  <Link to={"/tim-kiem/" + key}>
                    <button>
                      <i className="fa fa-search" />
                    </button>
                  </Link>
                </form>
              </div>
              <div className="shopping_cart">
                <Link href="#">
                  <i className="fa fa-shopping-cart" /> 2Items - $209.44{" "}
                  <i className="fa fa-angle-down" />
                </Link>
                {/*mini cart*/}
                <div className="mini_cart">
                  <div className="cart_item">
                    <div className="cart_img">
                      <Link href="#">
                        <img src="assets\img\cart\cart.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="cart_info">
                      <Link href="#">lorem ipsum dolor</Link>
                      <span className="cart_price">$115.00</span>
                      <span className="quantity">Qty: 1</span>
                    </div>
                    <div className="cart_remove">
                      <Link title="Remove this item" href="#">
                        <i className="fa fa-times-circle" />
                      </Link>
                    </div>
                  </div>
                  <div className="cart_item">
                    <div className="cart_img">
                      <Link href="#">
                        <img src="assets\img\cart\cart2.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="cart_info">
                      <Link href="#">Quisque ornare dui</Link>
                      <span className="cart_price">$105.00</span>
                      <span className="quantity">Qty: 1</span>
                    </div>
                    <div className="cart_remove">
                      <Link title="Remove this item" href="#">
                        <i className="fa fa-times-circle" />
                      </Link>
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
                    <Link href="checkout.html"> Check out</Link>
                  </div>
                </div>
                {/*mini cart end*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*header middel end*/}

      <Menu />

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
