import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            console.log(prevCart);
            const existingItem = prevCart.find(item => item._id === product._id);
            console.log(existingItem);

            if(existingItem){
              return prevCart.map(item => 
                item._id === product._id ?
                {...item, quantity: item.quantity + 1} 
                :
                item
              ) 
            }
            else {
                return [...prevCart, {...product, quantity: 1}];
            }
        });
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