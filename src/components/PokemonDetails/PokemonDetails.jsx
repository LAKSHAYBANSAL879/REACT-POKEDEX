
import usePokemon from "../../hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";


function PokemonDetails({pokemonName}) {
   const [pokemon,pokemonListState]=usePokemon(pokemonName)

   return (
    <div>
    
    {pokemon && <div className='flex flex-col m-auto items-center align-middle gap-3 mt-4 bg-orange-100 w-1/4 '>
        <div className='text-4xl font-bold text-blue-500 flex items-center justify-center'>
            {pokemon.name}
        </div>
        <div className=''>
            <img src={pokemon.image} className="w-44 h-44 h" />
        </div>
        <div className='pokemon-attr'>
            <div className="flex flex-row text-green-500 text-xl font-bold">
                height: {pokemon.height}

            </div>
            <div className="flex flex-row text-green-500 text-xl font-bold">
            weight: {pokemon.weight}

            </div>
        </div>
        <div className='flex flex-row text-xl text-red-600 font-bold mb-2'>
            <h1>Type:</h1> {pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
        </div>
    </div>}
    <div className='flex flex-col justify-center items-center ml-3 mb-3'>
        <h2 className="text-xl font-bold text-blue-500 mt-2 mb-3"> Similar pokemons </h2>
        <div className='flex flex-row  flex-wrap'>
            {pokemonListState.pokemonList.length > 0 && 
                 pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)
            }
        </div>
    </div>
    </div>

)

}
export default PokemonDetails;
