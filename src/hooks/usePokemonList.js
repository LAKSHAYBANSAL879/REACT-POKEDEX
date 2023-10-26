import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemon";

function usePokemonList() {

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl:"https://pokeapi.co/api/v2/pokemon",
        nextUrl:'',
        prevUrl:''
    });

    useEffect(() => {
        downloadPokemon(pokemonListState, setPokemonListState);
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];

}

export default usePokemonList;