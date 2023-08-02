import { filterUse } from "../context/filters"

export function useFilter(params) {
  
    // const [filters, setFilters] = useState({category:'all',minPrice:0})
     const {filters,setFilters}=filterUse()
   
     const filterProducts=(products)=>{
       return products.filter(product=>{
         return (product.price>=filters.minPrice && 
         (filters.category==='all'||product.category===filters.category))
       })
     }
     return {filters,filterProducts,setFilters}
   }