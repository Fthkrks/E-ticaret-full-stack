import { useContext, useState } from "react"
import { CartContext } from "../../context/CartProvider"
import { message } from "antd";
import {loadStripe} from "@stripe/stripe-js";


const CartTotals = () => {

  const {cartItems} = useContext(CartContext);
  const [fastCargoChecked, setFastCargoChecked] = useState(false);  
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): null
  const stripePublicKey = import.meta.env.VITE_API_STRIPE_PUBLIC_KEY;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const cartItemTotals = cartItems.map((item) =>{
    const itemTotal = item.price * item.quantity;

    return itemTotal
  })


  const subTotals = cartItemTotals.reduce((prevValue, currentValue) =>{

    return(prevValue + currentValue)
  
  }, 0)

  const CargoFee = 15;


  const CartTotals = fastCargoChecked ? (subTotals + CargoFee).toFixed(2) : subTotals.toFixed(2)


  const handlePayment = async() =>{
    if(!user){
      return message.info("Ödeme yapmak için giriş yapınız");
    }
    const body = {
      products: cartItems,
      user: user,
      CargoFee: fastCargoChecked ? CargoFee : 0,

    } 

    try {
      const stripe = await loadStripe(stripePublicKey);

      const res = await fetch(`${apiUrl}/api/payment`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      if(!res.ok){
        return message.error("Ödeme İşlemi başarısız oldu")
      }

      const session = await res.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,

      });

      if(result.error){
        throw new Error(result.error.message);
      }

    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className="cart-collaterals">
    <div className="cart-totals">
      <h2>Cart totals</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo $15.00
                    <input type="checkbox" id="fast-cargo" checked= {fastCargoChecked} onChange={() => setFastCargoChecked(!fastCargoChecked)} />
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">${CartTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="check-out">
        <button className="btn btn-lg btn-second" onClick={handlePayment}>
          Proced to checkout
        </button>
      </div>
    </div>
  </div>
  )
}

export default CartTotals