import { useId, useState } from "react"
import { useFilter } from "../hooks/useFilters"

function Filters() {
  const {filters,setFilters}=useFilter()
  const minPriceFilterId=useId()
  const categoryFilterId=useId()
  const handleChangeMinPrice=(event)=>{
    setFilters(prevState=>({
      ...prevState,minPrice:event.target.value
    }))
  }
  const handleChangeCategory=(event)=>{
    setFilters(prevState=>({
      ...prevState,category:event.target.value
    }))
  }
  return (
    <section className=" flex justify-evenly text-white">
      <div className=" space-x-3 flex justify-center items-center dark:bg-slate-800">
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type="range" id={minPriceFilterId}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none  cursor-pointer dark:bg-gray-700"
        min='0'
        max='1000'
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        />
         <span>{filters.minPrice}</span>
      </div>
      <div className=" space-x-3">
        <label htmlFor={categoryFilterId}>Price</label>
        <select  id={categoryFilterId} className=" bg-slate-600 rounded-md"
        onChange={handleChangeCategory}>
          <option value="all">todos</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">phones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters