import axios from "axios";

async function downloadPokemon(pokemonListState, setPokemonListState, default_url,limit=20) {
    const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : default_url);
    
    let pokemonResults = response.data.results ? response.data.results : response.data.pokemon; // array of pokemons
    pokemonResults = pokemonResults.slice(0, limit);
    const pokemonPromise = pokemonResults.map((p) => {
        if(p.url) {
           return axios.get(p.url)
        } else if(p.pokemon.url) {
            return axios.get(p.pokemon.url);
        }
    });

    const pokemonListData = await axios.all(pokemonPromise);
    console.log(response.data);
    const pokemonFinalList = pokemonListData.map(pokemonData => {
        const pokemon = pokemonData.data;
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types
        }
    });
    setPokemonListState({...pokemonListState, pokemonList:pokemonFinalList,nextUrl:response.data.next, prevUrl: response.data.previous});
}

export default downloadPokemon;