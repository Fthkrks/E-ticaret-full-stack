/* eslint-disable react/no-unescaped-entities */


import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="subscribe-row">
      <div className="container">
        <div className="footer-row-wrapper">
          <div className="footer-subscribe-wrapper">
            <div className="footer-subscribe">
              <div className="footer-subscribe-top">
                <h3 className="subscribe-title">
                  Get our emails for into on new items, sales on more.
                </h3>
                <p className="subscribe-desc">We'll email you a voucher worth $10 off your first order over $50</p>
              </div>
              <div className="footer-subscribe-bottom">
                <form>
                  <input type="text" placeholder="Enter your email adress" />
                  <button className="btn">Subscribe</button>
                </form>
                <p className="privacy-text">
                  By subscribing you agree to our <a href="#">Terms & Conditions and Privacy & Cookies Policy</a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-top">
              <h3 className="contact-title">Need Help? <br/>(+90) 123 456 78 90</h3>
              <p className="contact-desc">We are avaible 8:00am - 7:00pm</p>
            </div>
            <div className="footer-contact-bottom">
              <div className="dowload-app">
                <a href="#">
                  <img src="/img/footer/app-store.png" alt=""/>
                </a>
                <a href="#">
                  <img src="/img/footer/google-play.png" alt=""/>
                </a>
              </div>
              <p className="privacy-text">
                Shopping App: Try our view in your Room feature, manage registries and save paymnet info
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="widgets-row">
      <div className="container">
        <div className="footer-widgets">
          <div className="brand-info">
            <div className="footer-logo">
              <a href="index.html" className="logo">LOGO</a>
            </div>
            <div className="footer-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam odit amet maiores illum 
                sit eum nostrum quam asperiores perspiciatis!
              </p>
            </div>
            <div className="footer-contact">
              <p>
                <a href="tel:555 555 89 00">
                  (+800) 1234 5678 90
                </a>
                -
                <a href="mailto: info@example.com">
                  info@example.com
                </a>
              </p>
            </div>

          </div>
          <div className="widget-nav-menu">
            <h4>Information</h4>
            <ul className="menu-list">
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Returns Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Dropshipping</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Account</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">Account Details</a>
              </li>
              <li>
                <a href="#">Track My Orders</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Shop</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Affilate</a>
              </li>
              <li>
                <a href="#">BestSellers</a>
              </li>
              <li>
                <a href="#">Discount</a>
              </li>
              <li>
                <a href="#">Latest Products</a>
              </li>
              <li>
                <a href="#">Sole Products</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Categories</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">Outerwaer</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-row">
      <div className="container">
        <div className="footer-copyright">
          <div className="site-copyright">
            <p>Copyright 2022 © E-commerce Theme. All
              right reserved. Powered by Mehmet Fatih Karakuş.
            </p>
          </div>
        
        <a href="#">
          <img src="/img/footer/cards.png" alt=""/>
        </a>
        <div className="footer-menu">
          <ul className="footer-menu-list">
            <li className="list-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-item">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="list-item">
              <a href="#">Returns Policy</a>
            </li>
          </ul> 
        </div>
      </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer