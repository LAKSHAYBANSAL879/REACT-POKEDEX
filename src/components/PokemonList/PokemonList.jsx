import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){
    const [pokemonList,setPokemonList]=useState([]);
    const [isLoding,setIsLoding]=useState(true);
const [pokedexurl,setpokedexurl]=useState('https://pokeapi.co/api/v2/pokemon');
 const [nextUrl,setnextUrl]=useState('');
 const [previousUrl,setpreviousUrl]=useState('');

    async function downloadPokemons(){
        setIsLoding(true);
        const response =await axios.get(pokedexurl);
       const pokemonResults=response.data.results;
       console.log(response.data);
       setnextUrl(response.data.next);
       setpreviousUrl(response.data.previous);
    //    iteratiing over array of pokemons
       const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
       const pokemonData=await axios.all(pokemonPromise);
       console.log(pokemonData);
const res=pokemonData.map((pokeData)=>{
    const pokemon=pokeData.data;
    return {
        id:pokemon.id,
        name:pokemon.name ,
        image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.other.home.front_shiny,
        types:pokemon.types}

});
console.log(res);
setPokemonList(res);
        setIsLoding(false);
    }
useEffect(()=>{
downloadPokemons();
},[pokedexurl]);


return (
    
<div className=" flex flex-col align-middle  justify-center text-center mt-8 text-xl mb-8">
  <div className=" text-indigo-900 font-extrabold text-3xl mb-8">Pokemon List</div>
  <div className=" flex flex-wrap mt-2 ml-2 mr-2 mb-2 align-middle justify-center">
{(isLoding)?'Loding...Wait': 
pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
}
</div>
<div className="flex flex-row justify-center align-middle">
    <button disabled={previousUrl==null} onClick={()=>setpokedexurl(previousUrl)} className=" bg-slate-300 border-black border-2 p-2 mr-3 disabled:bg-slate-100">Previous</button>
    <button  disabled={nextUrl==null} onClick={()=> setpokedexurl(nextUrl)} className=" bg-slate-300 border-black border-2 p-2 w-20" >Next</button>
</div>
</div>

    
)

}
export default PokemonList;