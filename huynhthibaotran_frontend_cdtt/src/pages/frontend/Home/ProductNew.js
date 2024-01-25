import { useEffect, useState } from "react";
import ProductItem from "../../../components/ProductItem";
import ProductServices from '../../../services/ProductServices';

function ProductNew() {
    const [products, setProducts] = useState([])
    useEffect(function(){
        (async function(){
          await ProductServices.getProductNew(8)
          .then(function(result){
            setProducts(result.products)
          });
        })();
      },[])
        return ( 
            <div className="new_product_area" style={{marginRight:20}}>
            <div className="block_title">
              <h3>New Products</h3>
            </div>
            <div className="row">
              <div className="row" style={{ position:'relative'}}>
                {
                    (products && products.length > 0 && products.map(function (product, index) {
                        return (
                           <ProductItem product={product} key={index}/>
          
                          );
                      }))
                }
                {/* <div className="col-lg-4">
                  <div className="single_product">
                    <div className="product_thumb">
                      <Link to={"/chi-tiet-san-pham"}>
                        <img src="assets\img\product\product1.jpg" alt="" />
                      </Link>
                      <div className="img_icone">
                        <img src="assets\img\cart\span-new.png" alt="" />
                      </div>
                      <div className="product_action">
                        <Link href="#">
                          {" "}
                          <i className="fa fa-shopping-cart" /> Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="product_content">
                      <span className="product_price">$50.00</span>
                      <h3 className="product_title">
                        <Link href="single-product.html">Curabitur sodales</Link>
                      </h3>
                    </div>
                    <div className="product_info">
                      <ul>
                        <li>
                          <Link href="#" title=" Add to Wishlist ">
                            Add to Wishlist
                          </Link>
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
                <div className="col-lg-4">
                  <div className="single_product">
                    <div className="product_thumb">
                      <Link href="single-product.html">
                        <img src="assets\img\product\product2.jpg" alt="" />
                      </Link>
                      <div className="hot_img">
                        <img src="assets\img\cart\span-hot.png" alt="" />
                      </div>
                      <div className="product_action">
                        <Link href="#">
                          {" "}
                          <i className="fa fa-shopping-cart" /> Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="product_content">
                      <span className="product_price">$40.00</span>
                      <h3 className="product_title">
                        <Link href="single-product.html">Quisque ornare dui</Link>
                      </h3>
                    </div>
                    <div className="product_info">
                      <ul>
                        <li>
                          <Link href="#" title=" Add to Wishlist ">
                            Add to Wishlist
                          </Link>
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
                <div className="col-lg-4">
                  <div className="single_product">
                    <div className="product_thumb">
                      <Link href="single-product.html">
                        <img src="assets\img\product\product3.jpg" alt="" />
                      </Link>
                      <div className="img_icone">
                        <img src="assets\img\cart\span-new.png" alt="" />
                      </div>
                      <div className="product_action">
                        <Link href="#">
                          {" "}
                          <i className="fa fa-shopping-cart" /> Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="product_content">
                      <span className="product_price">$60.00</span>
                      <h3 className="product_title">
                        <Link href="single-product.html">Sed non turpiss</Link>
                      </h3>
                    </div>
                    <div className="product_info">
                      <ul>
                        <li>
                          <Link href="#" title=" Add to Wishlist ">
                            Add to Wishlist
                          </Link>
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
                <div className="col-lg-4">
                  <div className="single_product">
                    <div className="product_thumb">
                      <Link href="single-product.html">
                        <img src="assets\img\product\product4.jpg" alt="" />
                      </Link>
                      <div className="hot_img">
                        <img src="assets\img\cart\span-hot.png" alt="" />
                      </div>
                      <div className="product_action">
                        <Link href="#">
                          {" "}
                          <i className="fa fa-shopping-cart" /> Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="product_content">
                      <span className="product_price">$65.00</span>
                      <h3 className="product_title">
                        <Link href="single-product.html">Duis convallis</Link>
                      </h3>
                    </div>
                    <div className="product_info">
                      <ul>
                        <li>
                          <Link href="#" title=" Add to Wishlist ">
                            Add to Wishlist
                          </Link>
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
                <div className="col-lg-4">
                  <div className="single_product">
                    <div className="product_thumb">
                      <Link href="single-product.html">
                        <img src="assets\img\product\product6.jpg" alt="" />
                      </Link>
                      <div className="img_icone">
                        <img src="assets\img\cart\span-new.png" alt="" />
                      </div>
                      <div className="product_action">
                        <Link href="#">
                          {" "}
                          <i className="fa fa-shopping-cart" /> Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="product_content">
                      <span className="product_price">$50.00</span>
                      <h3 className="product_title">
                        <Link href="single-product.html">Curabitur sodales</Link>
                      </h3>
                    </div>
                    <div className="product_info">
                      <ul>
                        <li>
                          <Link href="#" title=" Add to Wishlist ">
                            Add to Wishlist
                          </Link>
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
                </div> */}
                
                
              </div>

            </div>
          </div>
    );
}

export default ProductNew;