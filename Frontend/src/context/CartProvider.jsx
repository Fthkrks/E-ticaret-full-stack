import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();


const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);

    useEffect( () =>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    },[cartItems])


    const addToCart = (cartItem) =>{
        // setCartItems([...cartItems, product]) 1. yol
        setCartItems((prevItems) =>[...prevItems, {...cartItem, quantity: cartItem.quantity ? cartItem.quantity : 1}])

    }

    const removeFromCart = (itenmId) =>{
        const filteredCartItems = cartItems.filter((cartItem) => {
            return cartItem._id !== itenmId;
        } )

        setCartItems(filteredCartItems);
        

    }


    return(
        <CartContext.Provider value={{
            addToCart,
            cartItems,
            setCartItems,
            removeFromCart
            }}>
                {children}
        </CartContext.Provider>
    )
}



export default CartProvider


CartProvider.propTypes = {
    children: PropTypes.node
}