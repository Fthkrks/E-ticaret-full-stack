import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/CartProvider";
import "./ProductItem.css";
import { Link} from "react-router-dom";

const ProductItem = ({product }) => {
    const { cartItems,  addToCart } = useContext(CartContext);

    const filteredCart = cartItems.find((cartItem) =>  cartItem._id === product._id); 



    const orginalPrice = product.price.current;
    const discountPercentage = product.price.discount;
        // İndirimli fiyatı hesaplama 
    const discountedPrice = orginalPrice - (orginalPrice * discountPercentage) /100;
 
  return (
    <div className="product-item" style ={{width: "420px", marginLeft: "10px", marginRight: "10px"}} >
        <div className="product-image">
            <a href="#">
                <img src={product.img[0]} alt="" className="image1"/>
                <img src={product.img[1]} alt="" className="image2"/>
            </a>
        </div>
        <div className="product-info">
            <br/>
            <a href="#" className="product-title">{product.name}</a>
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
            <div className="product-price">
            <strong className="new-price">${parseInt(discountedPrice).toFixed(2)}</strong>
            <span className="old-price">${parseInt(orginalPrice).toFixed(2)}</span>  
            </div>
            <span className="product-discount">-%{product.price.discount}</span>
            <div className="product-links">
            <button className="add-to-cart" onClick={() => addToCart({...product, price: discountedPrice})} disabled={filteredCart}>
            <i className="bi bi-basket-fill"></i>
            </button>
            <button>
                <i className="bi bi-heart-fill"></i>
            </button>
            <Link to={`product/${product._id}`}  className="product-link" data-id="4">
            <i className="bi bi-eye-fill"></i>
            </Link>
            <a href="" className="bi bi-share-fill"></a>
            </div>
        </div>
    </div>
  )
}

export default ProductItem


ProductItem.propTypes = {
    product: PropTypes.object,
    setCartItems: PropTypes.func
}