import { createContext, useReducer, useState } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext()

function useCartReducer(){
    const[state, dispatch] =useReducer(cartReducer, cartInitialState)

const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
})

const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
})

const cleanCart = product => dispatch({
    type: 'CLEAR_CART',
    payload: product
})

return {state, addToCart, removeFromCart, cleanCart}
}


export function CartProvider({children}){
const {state, addToCart, removeFromCart, cleanCart} = useCartReducer()

return (
    <CartContext.Provider value={{
        cart: state,
        removeFromCart,
        addToCart,
        cleanCart
    }}>
        {children}
    </CartContext.Provider>
)

}