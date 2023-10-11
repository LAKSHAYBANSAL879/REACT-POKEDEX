

import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonList from './components/PokemonList/PokemonList'
import Search from './components/Search/Search'


function App() {


  return (
    <>
    <div className='flex align-middle items-center justify-center flex-col md:flex-row'>
      <Pokedex/>
      <Search/>
      </div>
      <PokemonList/>
    </>
  )
}

export default App
