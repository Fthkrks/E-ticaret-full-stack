import { useContext, useState } from "react"
import {message } from 'antd';
import { CartContext } from "../../context/CartProvider";

const CartCoupon = () => {


  const [couponCode, setCouponCode] = useState("");
  const {cartItems, setCartItems} = useContext(CartContext);
  const apiUrl = import.meta.env.VITE_API_BASE_URL



  const applyCoupon = async() =>{

    if(couponCode.trim().length === 0){
     return message.warning("Boş değer girilemez.")
    }
    try {
      const response =  await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);


      if(!response.ok){
        return message.warning("Girdiğiniz kupon kodu yanlış!");

      }

      const data = await response.json();
      console.log(data);



      const updatedCartItems = cartItems.map((item) =>{ 
        console.log(item);

        const updatePrice = parseInt(item.price) * (1 - data.discountpercent / 100);
        return {...item, price: updatePrice}
      });
      setCartItems(updatedCartItems);

      message.success(`${couponCode} adlı kupon kodu başarıyla uygulandı`)

    } catch (error) {
      console.log(error);
      
    }
  }



  return (
    <div className="action-wrapper">
    <div className="coupon">
      <input
        type="text"
        className="input-text"
        placeholder="Coupon code"
        onChange={(e) => setCouponCode(e.target.value)}

      />
      <button className="btn btn-third" type="button" onClick={applyCoupon}>Apply Coupon</button>
    </div>
    <div className="update-cart">
      <button className="btn btn-second">Update Cart</button>
    </div>
  </div>
  )
}

export default CartCoupon