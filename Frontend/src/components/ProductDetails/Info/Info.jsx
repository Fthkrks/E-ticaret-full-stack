import { useContext, useRef } from "react";
import "./Info.css";
import PropTypes from "prop-types";
import { CartContext } from "../../../context/CartProvider";

const Info = ({singleProduct}) => {
    const quantityRef = useRef();
    const {addToCart, cartItems} = useContext(CartContext);
    const orginalPrice = parseInt(singleProduct.price.current);
    const discountPercentage = singleProduct.price.discount;
        // İndirimli fiyatı hesaplama 
    const discountedPrice = orginalPrice - (orginalPrice * discountPercentage) /100;

    const filteredCard = cartItems.find((cartItem) =>cartItem.id === singleProduct._id);


  return (
    <div className="product-info">
    <h1 className="product-title">
        {singleProduct.name}
    </h1>
    <div className="product-review">
        <ul className="product-star">
        <li>
            <i className="bi bi-star-fill"></i>
        </li>
        <li>
            <i className="bi bi-star-fill"></i>
        </li>
        <li>
            <i className="bi bi-star-fill"></i>
        </li>
        <li>
            <i className="bi bi-star-fill"></i>
        </li>
        <li>
            <i className="bi bi-star-half"></i>
        </li>
        </ul>
        <span>2 reviews</span>
    </div>
    <div className="product-price">
        <s className="old-price">${orginalPrice.toFixed(2)}</s>
        <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
    </div>
    {singleProduct && (
  <div className="product-desc" dangerouslySetInnerHTML={{ __html: singleProduct.description }} />
)}

    <form className="variations-form">
        <div className="variations">
        <div className="colors">
            <div className="colors-label">
            <span>color</span>
            </div>
            <div className="colors-wrapper">
                {singleProduct.colors.map((color, index) =>(
                    <div className="color-wrapper" key={index}>
                        <label style={{backgroundColor: `${color}`}} >
                            <input type="radio" name="product-color"/>
                        </label>
                    </div>
                ))} 

            
            </div>
            <div className="values">
            <div className="values-label">
                <span>Size</span>
            </div>
            <div className="values-list">
                {singleProduct.sizes.map((size, index) =>(
                    <span key={index}>{size.toUpperCase()}</span>
                ))}
            </div>
            </div>
            <div className="cart-button">
            <input type="number" defaultValue="1" min="1" id="quantity" ref= {quantityRef}/>
            <button className="btn btn-lg btn-primary" id ="add-to-cart" type="button" disabled={filteredCard} onClick={() => addToCart({...singleProduct, price: discountedPrice, quantity: parseInt(quantityRef.current.value)})}>Add to Cart</button>
            </div>
            <div className="product-extra-buttons">
            <a href="">
                <i className="bi bi-globe"></i>
                <span>Size Guide</span>
            </a>
            <a href="">
                <i className="bi bi-heart"></i>
                <span>Add to Wislist</span>
            </a>
            <a href="">
                <i className="bi bi-share"></i>
                <span>Share this Product</span>
            </a>
            </div>
        </div>
        </div>
    </form>
    <div className="divider"></div>
    <div className="product-meta">
        <div className="product-sku">
        <span>SKU:</span>
        <strong>BEA45VGRT</strong>
        </div>
        <div className="product-categories">
        <span>Categories:</span>
        <strong>Pants, women</strong>
        </div>
        <div className="product-tags">
        <span>Tag:</span>
        <a href="">black</a>
        ,
        <a href="">white</a>
        </div>
    </div>
    </div>
  )
}

export default Info


Info.propTypes = {
    singleProduct: PropTypes.object
}