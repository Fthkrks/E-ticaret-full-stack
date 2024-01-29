import { useContext } from "react";
import "./Header.css";
import PropTypes from "prop-types";
import {Link, } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";

const Header = ({ setIsSearch }) => {
  const {cartItems} = useContext(CartContext);

  const user = localStorage.getItem("user");








  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL
            DELIVERY - OFF 50%!
            <a href="shop.html">SHOP NOW!</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                LOGO
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link to = {"/"} className="menu-link">
                      Home
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Home Clean</a>
                        </li>
                        <li>
                          <a href="#">Home Collection</a>
                        </li>
                        <li>
                          <a href="#">Home Minimal</a>
                        </li>
                        <li>
                          <a href="#">Home Modern</a>
                        </li>
                        <li>
                          <a href="#">Home Parallax</a>
                        </li>
                        <li>
                          <a href="#">Home Strong</a>
                        </li>
                        <li>
                          <a href="#">Home Style</a>
                        </li>
                        <li>
                          <a href="#">Home Unique</a>
                        </li>
                        <li>
                          <a href="#">Home RTL</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link  to={"/shop"} className="menu-link">
                      Shop
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-title">Shop Style</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Shop Standart</a>
                              </li>
                              <li>
                                <a href="#">Shop Full</a>
                              </li>
                              <li>
                                <a href="#">Shop Only Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop Images Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop Sub Categories</a>
                              </li>

                              <li>
                                <a href="#">Shop List</a>
                              </li>
                              <li className="hover-link">
                                <a href="#">
                                  Hover Style 1
                                  <i className="bi bi-chevron-right"></i>
                                </a>
                                <div className="menu-dropdown-wrapper">
                                  <div className="menu-dropdown-minimenu">
                                    <div className="detail-content">
                                      <ul className="minimenu-list">
                                        <li>
                                          <a href="#">Product1</a>
                                        </li>
                                        <li>
                                          <a href="#">Product2</a>
                                        </li>
                                        <li>
                                          <a href="#">Product3</a>
                                        </li>
                                        <li>
                                          <a href="#">Product4</a>
                                        </li>
                                        <li>
                                          <a href="#">Product5</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li className="hover-link">
                                <a href="#">
                                  Hover Style 2
                                  <i className="bi bi-chevron-right"></i>
                                </a>
                                <div className="menu-dropdown-wrapper">
                                  <div className="menu-dropdown-minimenu">
                                    <div className="detail-content">
                                      <ul className="minimenu-list">
                                        <li>
                                          <a href="#">Product5</a>
                                        </li>
                                        <li>
                                          <a href="#">Product6</a>
                                        </li>
                                        <li>
                                          <a href="#">Product7</a>
                                        </li>
                                        <li>
                                          <a href="#">Product8</a>
                                        </li>
                                        <li>
                                          <a href="#">Product9</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="hover-link">
                                <a href="#">
                                  Hover Style 3
                                  <i className="bi bi-chevron-right"></i>
                                </a>
                                <div className="menu-dropdown-wrapper">
                                  <div className="menu-dropdown-minimenu">
                                    <div className="detail-content">
                                      <ul className="minimenu-list">
                                        <li>
                                          <a href="#">Product10</a>
                                        </li>
                                        <li>
                                          <a href="#">Product11</a>
                                        </li>
                                        <li>
                                          <a href="#">Product12</a>
                                        </li>
                                        <li>
                                          <a href="#">Product13</a>
                                        </li>
                                        <li>
                                          <a href="#">Product14</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="megamenu-products">
                            <h3 className="megamenu-title">Filter Layout</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Sidebar</a>
                              </li>
                              <li>
                                <a href="#">Filter Side Out</a>
                              </li>
                              <li>
                                <a href="#">Filter Dropdown</a>
                              </li>
                              <li>
                                <a href="#">Filter Drawer</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-title">Shop Loader</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Shop Pagination</a>
                              </li>
                              <li>
                                <a href="#">Shop Full</a>
                              </li>
                              <li>
                                <a href="#">Shop Infinity</a>
                              </li>
                              <li>
                                <a href="#">Shop Load More</a>
                              </li>
                              <li>
                                <a href="#">Cart Modal</a>
                              </li>

                              <li>
                                <a href="#">Cart Drawer</a>
                              </li>

                              <li>
                                <a href="#">Cart Page</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img src="/img/mega-menu.jpg" alt="mega-menu" />
                          </a>
                          <h3 className="megamenu-single-title">
                            JOIN THE LAYERING GANG
                          </h3>
                          <p className="megamenu-single-subtitle">
                            Suspendisse faucibus nunc et pellentesque
                          </p>
                          <a
                            href="#"
                            className="megamenu-single-buttom btn btn-sm"
                          >
                            SHOP NOW!
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <a href="about.html" className="menu-link">
                      About
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <Link  to={"/contact"} className="menu-link">
                      Contact
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <a href="blog.html" className="menu-link">
                      Blogs
                    </a>
                  </li>
                </ul>
              </nav>
              <i className="bi bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <div className="header-account">
                  <Link to={"/auth"} className="bi bi-person"></Link>
                </div>
                <button
                  className="seacrh-toggle"
                  onClick={() => setIsSearch(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <div className="header-cart">
                  <div className="header-cart-link">
                    <Link to={"/cart"} style={{fontSize: "16px"}} className="bi bi-bag"></Link>
                    <span className="header-cart-count" >{cartItems.length}</span>
                  </div>
                </div>
                {user && (
                  <button
                    className="seacrh-toggle"
                    onClick={() =>{
                      if(window.confirm("Çıkış yapmak istediğinize emin misiniz ? ")){
                        {localStorage.removeItem("user");
                        window.location.href = "/";
                      }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearch: PropTypes.func,
};
