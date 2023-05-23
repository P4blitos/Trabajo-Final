import {Link} from 'react-router-dom'
import './NavBar.css'
export const NavBar =()=>{
  return(
    <div> 
      <h1>Los mejores libros</h1>
            <nav>
            <ul>
            <li> <Link to="/">Inicio</Link> </li>
            <li> <Link to="/libros">Libros</Link>   </li>
            <li> <Link to="/contactanos">Contactanos</Link>  </li>
            <li> <Link to="/ayuda">Ayuda</Link>  </li>
            </ul>
            </nav>
    </div>
  )
}