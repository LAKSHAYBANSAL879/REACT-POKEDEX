
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList.js";

function PokemonList(){
  const DEFAULT_URL="https://pokeapi.co/api/v2/pokemon";
const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL);


return (
    
<div className=" flex flex-col align-middle  justify-center text-center mt-8 text-xl mb-8">
  <div className=" text-indigo-900 font-extrabold text-3xl mb-8">Pokemon List</div>
  <div className=" flex flex-wrap mt-2 ml-2 mr-2 mb-2 align-middle justify-center">
{(pokemonListState.isLoding)?'Loding...Wait': 
pokemonListState.pokemonList.map(p=><Pokemon name={p.name} url={p.image} key={p.id} id={p.id}/>)
}
</div>
<div className="flex flex-row justify-center align-middle">
    <button disabled={pokemonListState.prevUrl==null} onClick={()=>
      setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl})
    } 
    className=" bg-slate-300 border-black border-2 p-2 mr-3 disabled:bg-slate-100">Previous</button>

    <button  disabled={pokemonListState.nextUrl==null} onClick={()=>
    
  
      setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})
    }
   className=" bg-slate-300 border-black border-2 p-2 w-20" >Next</button>
</div>
</div>

    
)

}
export default PokemonList;