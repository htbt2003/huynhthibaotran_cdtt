import { useEffect, useState } from "react";
import CategoryServices from "../../services/CategoryServices"
import { Link } from "react-router-dom";
import React from 'react';

function SpecialPro() {

    // const [listCategory, setListCategory] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         const result = await CategoryServices.getCategoryByParentId(0)
    //         setListCategory(result.data.categories)
    //     })();
    // }, []);
    return (
        <>
              {/*special product start*/}
      <div className="sidebar_widget special">
        <div className="block_title">
          <h3>Special Products</h3>
        </div>
        <div className="special_product_inner mb-20">
          <div className="special_p_thumb">
            <a href="single-product.html">
              <img src="assets\img\cart\cart3.jpg" alt="" />
            </a>
          </div>
          <div className="small_p_desc">
            <div className="product_ratting">
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
              </ul>
            </div>
            <h3>
              <a href="single-product.html">Lorem ipsum dolor</a>
            </h3>
            <div className="special_product_proce">
              <span className="old_price">$124.58</span>
              <span className="new_price">$118.35</span>
            </div>
          </div>
        </div>
        <div className="special_product_inner">
          <div className="special_p_thumb">
            <a href="single-product.html">
              <img src="assets\img\cart\cart18.jpg" alt="" />
            </a>
          </div>
          <div className="small_p_desc">
            <div className="product_ratting">
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
              </ul>
            </div>
            <h3>
              <a href="single-product.html">Printed Summer</a>
            </h3>
            <div className="special_product_proce">
              <span className="old_price">$124.58</span>
              <span className="new_price">$118.35</span>
            </div>
          </div>
        </div>
      </div>
      {/*special product end*/}

        </>
    );
}

export default SpecialPro;