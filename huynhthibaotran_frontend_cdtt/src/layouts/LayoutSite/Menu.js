import { Link } from "react-router-dom";
// import MenuServices from '../../services/MenuServices';
// import { useEffect, useState } from "react";
// import MenuItem from "./MenuItem";

function Menu() {
//   const [menus, setMenus] = useState([]);
//   useEffect(function(){
//     (async function(){
//       try{
//         const result = await MenuServices.getByParentId("mainmenu", 0)
//         setMenus(result.data.menus)
//       }
//       catch{
//         console.log("wait..")
//       }
//     })();
//   },[])
  return (
    <div className="header_bottom">
    <div className="row">
      <div className="col-12">
        <div className="main_menu_inner">
          <div className="main_menu d-none d-lg-block">
            <nav>
              <ul>
                <li className="active">
                  <Link to={"/"}>Home</Link>
                  {/* <div className="mega_menu jewelry">
                    <div className="mega_items jewelry">
                      <ul>
                        <li>
                          <Link href="index.html">Home 1</Link>
                        </li>
                        <li>
                          <Link href="index-2.html">Home 2</Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </li>
                <li>
                  <Link to={"/san-pham"}>shop</Link>
                  {/* <div className="mega_menu jewelry">
                    <div className="mega_items jewelry">
                      <ul>
                        <li>
                          <Link href="shop-list.html">shop list</Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth.html">shop Full Width Grid</Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-list.html">
                            shop Full Width list
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-sidebar.html">shop Right Sidebar</Link>
                        </li>
                        <li>
                          <Link href="shop-sidebar-list.html">
                            shop list Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="single-product.html">Product Details</Link>
                        </li>
                        <li>
                          <Link href="single-product-sidebar.html">
                            Product sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="single-product-video.html">
                            Product Details video
                          </Link>
                        </li>
                        <li>
                          <Link href="single-product-gallery.html">
                            Product Details Gallery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </li>
                <li>
                  <Link href="#">women</Link>
                  <div className="mega_menu">
                    <div className="mega_top fix">
                      <div className="mega_items">
                        <h3>
                          <Link href="#">Accessories</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Cocktai</Link>
                          </li>
                          <li>
                            <Link href="#">day</Link>
                          </li>
                          <li>
                            <Link href="#">Evening</Link>
                          </li>
                          <li>
                            <Link href="#">Sundresses</Link>
                          </li>
                          <li>
                            <Link href="#">Belts</Link>
                          </li>
                          <li>
                            <Link href="#">Sweets</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega_items">
                        <h3>
                          <Link href="#">HandBags</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Accessories</Link>
                          </li>
                          <li>
                            <Link href="#">Hats and Gloves</Link>
                          </li>
                          <li>
                            <Link href="#">Lifestyle</Link>
                          </li>
                          <li>
                            <Link href="#">Bras</Link>
                          </li>
                          <li>
                            <Link href="#">Scarves</Link>
                          </li>
                          <li>
                            <Link href="#">Small Leathers</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega_items">
                        <h3>
                          <Link href="#">Tops</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Evening</Link>
                          </li>
                          <li>
                            <Link href="#">Long Sleeved</Link>
                          </li>
                          <li>
                            <Link href="#">Shrot Sleeved</Link>
                          </li>
                          <li>
                            <Link href="#">Tanks and Camis</Link>
                          </li>
                          <li>
                            <Link href="#">Sleeveless</Link>
                          </li>
                          <li>
                            <Link href="#">Sleeveless</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mega_bottom fix">
                      <div className="mega_thumb">
                        <Link href="#">
                          <img src="assets\img\banner\banner1.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="mega_thumb">
                        <Link href="#">
                          <img src="assets\img\banner\banner2.jpg" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#">men</Link>
                  <div className="mega_menu">
                    <div className="mega_top fix">
                      <div className="mega_items">
                        <h3>
                          <Link href="#">Rings</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Platinum Rings</Link>
                          </li>
                          <li>
                            <Link href="#">Gold Ring</Link>
                          </li>
                          <li>
                            <Link href="#">Silver Ring</Link>
                          </li>
                          <li>
                            <Link href="#">Tungsten Ring</Link>
                          </li>
                          <li>
                            <Link href="#">Sweets</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega_items">
                        <h3>
                          <Link href="#">Bands</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Platinum Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Gold Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Silver Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Silver Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Sweets</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega_items">
                        <Link href="#">
                          <img src="assets\img\banner\banner3.jpg" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#">pages</Link>
                  <div className="mega_menu">
                    <div className="mega_top fix">
                      <div className="mega_items">
                        <h3>
                          <Link href="#">Column1</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="portfolio.html">Portfolio</Link>
                          </li>
                          <li>
                            <Link href="portfolio-details.html">
                              single portfolio{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="about.html">About Us </Link>
                          </li>
                          <li>
                            <Link href="about-2.html">About Us 2</Link>
                          </li>
                          <li>
                            <Link href="services.html">Service </Link>
                          </li>
                          <li>
                            <Link href="my-account.html">my account </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega_items">
                        <h3>
                          <Link href="#">Column2</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="blog.html">Blog </Link>
                          </li>
                          <li>
                            <Link href="blog-details.html">Blog Details </Link>
                          </li>
                          <li>
                            <Link href="blog-fullwidth.html">Blog FullWidth</Link>
                          </li>
                          <li>
                            <Link href="blog-sidebar.html">Blog Sidebar</Link>
                          </li>
                          <li>
                            <Link href="faq.html">Frequently Questions</Link>
                          </li>
                          <li>
                            <Link href="404.html">404</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega_items">
                        <h3>
                          <Link href="#">Column3</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="contact.html">Contact</Link>
                          </li>
                          <li>
                            <Link href="cart.html">cart</Link>
                          </li>
                          <li>
                            <Link href="checkout.html">Checkout</Link>
                          </li>
                          <li>
                            <Link href="wishlist.html">Wishlist</Link>
                          </li>
                          <li>
                            <Link href="login.html">Login</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="blog.html">blog</Link>
                  <div className="mega_menu jewelry">
                    <div className="mega_items jewelry">
                      <ul>
                        <li>
                          <Link href="blog-details.html">blog details</Link>
                        </li>
                        <li>
                          <Link href="blog-fullwidth.html">blog fullwidth</Link>
                        </li>
                        <li>
                          <Link href="blog-sidebar.html">blog sidebar</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="contact.html">contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-menu d-lg-none">
            <nav>
              <ul>
                <li>
                  <Link href="index.html">Home</Link>
                  <div>
                    <div>
                      <ul>
                        <li>
                          <Link href="index.html">Home 1</Link>
                        </li>
                        <li>
                          <Link href="index-2.html">Home 2</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="shop.html">shop</Link>
                  <div>
                    <div>
                      <ul>
                        <li>
                          <Link href="shop-list.html">shop list</Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth.html">shop Full Width Grid</Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-list.html">
                            shop Full Width list
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-sidebar.html">shop Right Sidebar</Link>
                        </li>
                        <li>
                          <Link href="shop-sidebar-list.html">
                            shop list Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="single-product.html">Product Details</Link>
                        </li>
                        <li>
                          <Link href="single-product-sidebar.html">
                            Product sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="single-product-video.html">
                            Product Details video
                          </Link>
                        </li>
                        <li>
                          <Link href="single-product-gallery.html">
                            Product Details Gallery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#">women</Link>
                  <div>
                    <div>
                      <div>
                        <h3>
                          <Link href="#">Accessories</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Cocktai</Link>
                          </li>
                          <li>
                            <Link href="#">day</Link>
                          </li>
                          <li>
                            <Link href="#">Evening</Link>
                          </li>
                          <li>
                            <Link href="#">Sundresses</Link>
                          </li>
                          <li>
                            <Link href="#">Belts</Link>
                          </li>
                          <li>
                            <Link href="#">Sweets</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3>
                          <Link href="#">HandBags</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Accessories</Link>
                          </li>
                          <li>
                            <Link href="#">Hats and Gloves</Link>
                          </li>
                          <li>
                            <Link href="#">Lifestyle</Link>
                          </li>
                          <li>
                            <Link href="#">Bras</Link>
                          </li>
                          <li>
                            <Link href="#">Scarves</Link>
                          </li>
                          <li>
                            <Link href="#">Small Leathers</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3>
                          <Link href="#">Tops</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Evening</Link>
                          </li>
                          <li>
                            <Link href="#">Long Sleeved</Link>
                          </li>
                          <li>
                            <Link href="#">Shrot Sleeved</Link>
                          </li>
                          <li>
                            <Link href="#">Tanks and Camis</Link>
                          </li>
                          <li>
                            <Link href="#">Sleeveless</Link>
                          </li>
                          <li>
                            <Link href="#">Sleeveless</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link href="#">
                          <img src="assets\img\banner\banner1.jpg" alt="" />
                        </Link>
                      </div>
                      <div>
                        <Link href="#">
                          <img src="assets\img\banner\banner2.jpg" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#">men</Link>
                  <div>
                    <div>
                      <div>
                        <h3>
                          <Link href="#">Rings</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Platinum Rings</Link>
                          </li>
                          <li>
                            <Link href="#">Gold Ring</Link>
                          </li>
                          <li>
                            <Link href="#">Silver Ring</Link>
                          </li>
                          <li>
                            <Link href="#">Tungsten Ring</Link>
                          </li>
                          <li>
                            <Link href="#">Sweets</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3>
                          <Link href="#">Bands</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="#">Platinum Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Gold Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Silver Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Silver Bands</Link>
                          </li>
                          <li>
                            <Link href="#">Sweets</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link href="#">
                          <img src="assets\img\banner\banner3.jpg" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#">pages</Link>
                  <div>
                    <div>
                      <div>
                        <h3>
                          <Link href="#">Column1</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="portfolio.html">Portfolio</Link>
                          </li>
                          <li>
                            <Link href="portfolio-details.html">
                              single portfolio{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="about.html">About Us </Link>
                          </li>
                          <li>
                            <Link href="about-2.html">About Us 2</Link>
                          </li>
                          <li>
                            <Link href="services.html">Service </Link>
                          </li>
                          <li>
                            <Link href="my-account.html">my account </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3>
                          <Link href="#">Column2</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="blog.html">Blog </Link>
                          </li>
                          <li>
                            <Link href="blog-details.html">Blog Details </Link>
                          </li>
                          <li>
                            <Link href="blog-fullwidth.html">Blog FullWidth</Link>
                          </li>
                          <li>
                            <Link href="blog-sidebar.html">Blog Sidebar</Link>
                          </li>
                          <li>
                            <Link href="faq.html">Frequently Questions</Link>
                          </li>
                          <li>
                            <Link href="404.html">404</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3>
                          <Link href="#">Column3</Link>
                        </h3>
                        <ul>
                          <li>
                            <Link href="contact.html">Contact</Link>
                          </li>
                          <li>
                            <Link href="cart.html">cart</Link>
                          </li>
                          <li>
                            <Link href="checkout.html">Checkout</Link>
                          </li>
                          <li>
                            <Link href="wishlist.html">Wishlist</Link>
                          </li>
                          <li>
                            <Link href="login.html">Login</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="blog.html">blog</Link>
                  <div>
                    <div>
                      <ul>
                        <li>
                          <Link href="blog-details.html">blog details</Link>
                        </li>
                        <li>
                          <Link href="blog-fullwidth.html">blog fullwidth</Link>
                        </li>
                        <li>
                          <Link href="blog-sidebar.html">blog sidebar</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="contact.html">contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Menu;