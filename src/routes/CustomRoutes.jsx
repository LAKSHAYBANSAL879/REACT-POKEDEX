import {Routes,Route} from 'react-router-dom'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import Pokedex from '../components/Pokedex/Pokedex';
// import Search from '../components/Search/Search';
// import PokemonList from '../components/PokemonList/PokemonList';

function CustomRoutes(){
    return (
<Routes>
    <Route path="/" element={<Pokedex/>} />
    {/* <Route path="/" element={<Search/>} /> */}
    {/* <Route path="/" element={<PokemonList/>} /> */}

    
    <Route path="/pokemon/:id" element={<PokemonDetails/>} />
</Routes>
    );
}
export default CustomRoutes;