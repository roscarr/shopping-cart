import { createContext, useContext, useState } from "react";


export const FiltersContext=createContext()


export function FilterProviders({children}) {
    const [filters,setFilters]=useState({category:'all',minPrice:0})
    return (
        <FiltersContext.Provider value={{filters,setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}

export const filterUse=()=>{
    const context=useContext(FiltersContext)
    if (!context) {
        throw new Error('there is no a context ')
    }
    return context
}