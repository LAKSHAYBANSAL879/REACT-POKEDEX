import { useState } from "react";
import Search from "../Search/Search";

import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
    const [searchTerm,setSearchTerm]=useState('');
    return (
        <div className=" justify-center">
       <div className=" flex  justify-center items-center">
       <h1 className= "text-red-600 text-xl md:text-5xl font-extrabold ml-5 mt-4"> Pokedex</h1>
        <Search updateSearchTerm={setSearchTerm}/>

       </div>
       {searchTerm?<PokemonDetails pokemonName={searchTerm}/>:<PokemonList/>}
        </div>

    )
}
export default Pokedex;