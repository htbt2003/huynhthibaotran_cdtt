import { useEffect, useState } from "react";
import CategoryServices from "../../services/CategoryServices"
import { Link } from "react-router-dom";
import React from 'react';

function Ccp() {

    // const [listCategory, setListCategory] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         const result = await CategoryServices.getCategoryByParentId(0)
    //         setListCategory(result.data.categories)
    //     })();
    // }, []);
    return (
    <>

                 {/* {
                    products ? 
                    (products && products.map(function(product, index){
                        return <ProductItem key={index} product={product}/>
                    }))
                    :
                    (
                        <div className=" mt-5 text-center">
                            <img src='../../assest/img/search.png' alt="..."/>
                            <h3>Không tìm thấy kết quả nào</h3>
                        </div>
                    )
                } */}
          {/*layere categorie"*/}
          <div className="sidebar_widget shop_c">
        <div className="categorie__titile">
          <h4>Categories</h4>
        </div>
        <div className="layere_categorie">
          <ul>
            <li>
              <input id="acces" type="checkbox" />
              <label htmlFor="acces">
                Accessories<span>(1)</span>
              </label>
            </li>
            <li>
              <input id="dress" type="checkbox" />
              <label htmlFor="dress">
                Dresses <span>(2)</span>
              </label>
            </li>
            <li>
              <input id="tops" type="checkbox" />
              <label htmlFor="tops">
                Tops<span>(3)</span>
              </label>
            </li>
            <li>
              <input id="bag" type="checkbox" />
              <label htmlFor="bag">
                HandBags<span>(4)</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      {/*layere categorie end*/}
      {/*color area start*/}
      <div className="sidebar_widget color">
        <h2>Color</h2>
        <div className="widget_color">
          <ul>
            <li>
              <a href="#">
                Black <span>(10)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Orange <span>(12)</span>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                Blue <span>(14)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Yellow <span>(15)</span>
              </a>
            </li>
            <li>
              <a href="#">
                pink <span>(16)</span>
              </a>
            </li>
            <li>
              <a href="#">
                green <span>(11)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*color area end*/}
      {/*price slider start*/}
      <div className="sidebar_widget price">
        <h2>Price</h2>
        <div className="ca_search_filters">
          <input type="text" name="text" id="amount" />
          <div id="slider-range" />
        </div>
      </div>
      {/*price slider end*/}

    </>
    );
}

export default Ccp;