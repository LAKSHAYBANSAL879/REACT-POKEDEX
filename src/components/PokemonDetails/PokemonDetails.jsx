import {  useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

function PokemonDetails(){
    const {id}=useParams();
    const [pokemon ,setPokemon]=useState({});
    async function downloadPokemon(){
        const response =await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response.data);
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
weight:response.data.weight,
height:response.data.height,
types:response.data.types.map((t)=>t.type.name)

        })
    }
  
    useEffect(()=>{
        downloadPokemon();
    },[]);
return (
    
    <div className=" flex flex-col justify-center align-middle items-center mt-7 bg-yellow-100 w-fit h-fit p-5 m-auto ">


        <div className="text-3xl  text-red-700 font-extrabold underline">{pokemon.name}</div>
        <img src={pokemon.image} alt=""/>
        <div className="text-2xl text-blue-500 font-semibold font-mono ">weight:{pokemon.weight}</div>
        <div className="text-2xl text-blue-500 font-semibold font-mono" >height:{pokemon.height}</div>
        <div className="text-green-500 text-xl font-bold">{ pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}</div>

    </div>
)

}
export default PokemonDetails;