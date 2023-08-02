import { useCart } from "../hooks/useCart"
import { useFilter } from "../hooks/useFilters"


function Footer() {
  const {filters}=useFilter()
  const {cart}=useCart()
  console.log(cart);
  return (
    <footer 
    className=" fixed bottom-2 right-0 left-4 bg-slate-950 text-white w-3/6 bg-opacity-70
     rounded-md p-4
    ">
       {/*
        JSON.stringify(filters,null,2)
  */}
        {/*
          JSON.stringify(cart,null,2)
*/}
   <h4>Prueba tecnica de React - <span>roscar</span></h4>
   <h5>shoping cart con usecontext y usereduces</h5>
    </footer>
  )
}

export default Footer