// import { useState } from "react";

import useDebounce from "../../hooks/useDebounce";

function Search({updateSearchTerm}){
  const debouncedCallBack=useDebounce((e)=>updateSearchTerm(e.target.value))
    return (
        <div>
        <input 
        id="pokemon-name-search"
        type="text"
        placeholder="Enter Pokemon name to search"
        className="  ml-2 md:ml-10 border-gray-300 border-2 md:p-2 text-lg font-mono w-64 md:w-80 mt-5  focus:border-black"
        onChange={debouncedCallBack}
        />
    
        </div>
    )
}
export default Search;