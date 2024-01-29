import { useContext} from "react";
import "./Cart.css"
import CartCoupon from "./CartCoupon";
import CartProgres from "./CartProgres";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import { CartContext } from "../../context/CartProvider";

const Cart = () => {

  const {cartItems} = useContext(CartContext);

  return (
    <section className="cart-pages">
      <div className="container">
        {cartItems.length > 0 ?(
                    <div className="cart-page-wrapper">
                    <form className="cart-form">
                      <CartProgres/>
                    
                      <div className="shop-table-wrapper">
                        <CartTable/>
                        <CartCoupon/>
                    
                      </div>
                    </form>
                      <CartTotals/>
                    </div>
                  ):
          (

            <h2 style={{fontSize: "22px"}}>Cart is empty</h2>

          )


      }

      </div>
    </section>
  );
};

export default Cart;
