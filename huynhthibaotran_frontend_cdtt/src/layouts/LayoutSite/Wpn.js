import { useEffect, useState } from "react";
import CategoryServices from "../../services/CategoryServices"
import { Link } from "react-router-dom";
import React from 'react';

function Wpn() {

    // const [listCategory, setListCategory] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         const result = await CategoryServices.getCategoryByParentId(0)
    //         setListCategory(result.data.categories)
    //     })();
    // }, []);
    return (
      <>
      
      {/*wishlist block start*/}
      <div className="sidebar_widget wishlist mb-35">
        <div className="block_title">
          <h3>
            <Link href="#">Wishlist</Link>
          </h3>
        </div>
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
        <div className="block_content">
          <p>2 products</p>
          <Link href="#">» My wishlists</Link>
        </div>
      </div>
      {/*wishlist block end*/}
      {/*popular tags area*/}
      <div className="sidebar_widget tags mb-35">
        <div className="block_title">
          <h3>popular tags</h3>
        </div>
        <div className="block_tags">
          <Link href="#">ipod</Link>
          <Link href="#">sam sung</Link>
          <Link href="#">apple</Link>
          <Link href="#">iphone 5s</Link>
          <Link href="#">superdrive</Link>
          <Link href="#">shuffle</Link>
          <Link href="#">nano</Link>
          <Link href="#">iphone 4s</Link>
          <Link href="#">canon</Link>
        </div>
      </div>
      {/*popular tags end*/}
      {/*newsletter block start*/}
      <div className="sidebar_widget newsletter mb-35">
        <div className="block_title">
          <h3>newsletter</h3>
        </div>
        <form action="#">
          <p>Sign up for your newsletter</p>
          <input placeholder="Your email address" type="text" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      {/*newsletter block end*/}
      </>

    );
}

export default Wpn;