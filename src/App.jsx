import { useState } from "react"
import Products from "./components/Products"
import {products as inicialProducts} from './mocks/products.json'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import { useFilter } from "./hooks/useFilters"
import Cart from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const {filterProducts}=useFilter()
  const filteredProducts=filterProducts(inicialProducts)
  return (
    <CartProvider>
     < div className=" bg-slate-800  h-screen relative">
      <Header />
      <Cart/>
      <Products products={filteredProducts}/>
     {IS_DEVELOPMENT && <Footer />}
    </div>
    </CartProvider>
  )
}

export default App