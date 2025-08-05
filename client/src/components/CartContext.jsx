import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id))
    }

    return (
        <cartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;