import {Link} from 'react-router-dom';
import '../css/Navbar.css'
const Navbar = () =>{
    return(
        <div>
          <nav className='nav'>
            <ul>
              <li><Link to={'/'}>Inicio</Link></li>
              <li><Link to={'/create'}>Crear Articulo</Link></li>
            </ul>
          </nav>
        </div>
    )
}
export default Navbar;