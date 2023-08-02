import { useContext } from "react"
import { CartContext } from "../context/cart"



export const useCart=()=>{
    const context=useContext(CartContext)
    if (!context) {
        throw new Error('usecart must be used  within a cartProvider')
    }
    return context
}