
import { Link } from 'react-router-dom'
import './App.css'

import CustomRoutes from './routes/CustomRoutes'


function App() {


  return (
    <>
      <Link to="/" className='flex justify-center text-4xl font-extrabold text-red-600 mt-3'>Pokedex</Link>
<CustomRoutes/></>
  
  
  )
}

export default App
