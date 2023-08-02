import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem({thumbnail,price,title,quantity,addToCart}) {
    return (
        <li className=' flex flex-col justify-center items-center'>
                <img src={thumbnail}
                alt={title} 
                 className=' w-3/6'
                />
                <div className=' text-center'>
                    <strong>{title}</strong>-$ {price} 
                </div>
                <footer className=' text-center'>
                    <small >
                        Qty: {quantity}
                    </small>
                    <button onClick={addToCart}
                    className=' bg-gray-700 py-1 px-3 rounded-md ml-2 hover:bg-slate-600'
                    >+</button>
                </footer>
            </li>
    )
}

function Cart() {
   // const cartCheckboxId=useId()
   const {cart,clearCart,addToCart}=useCart()
  return (
    <div className=' flex flex-col justify-center items-end  text-white fixed top-2 right-0 bg-black '>
    <label htmlFor='draft' className=' bg-sky-500 p-3 rounded-full'>
        <CartIcon/>
    </label>
    <input  id='draft' type='checkbox' hidden className={`peer/draft`}/>
    <aside className=' h-screen flex-col w-[300px] items-center  hidden  peer-checked/draft:flex bg-black'>
        <ul>
           {cart.map(product=>(
           <CartItem key={product.id} {...product}
           addToCart={()=>addToCart(product)}/>))}
        </ul>
        <button className=' bg-gray-700 py-2 px-3 rounded-md mt-2 hover:bg-slate-600'
        onClick={clearCart}
        >
            <ClearCartIcon/>
        </button>
    </aside>
    </div>
  )
}

export default Cart