import Cabecera from "./componets/Cabecera";
import Busqueda from "./componets/Busqueda";
import "bootstrap/dist/css/bootstrap.css";
import{Link, BrowserRouter, Route, Routes} from "react-router-dom"; 
import Biblioteca from "./componets/Biblioteca";
import Listas from "./componets/Listas";
import TopRanked from "./componets/TopRanked";
import ItemListContainer from "./componets/ItemListContainer/ItemListcontainer";
import CartWidget from "./componets/CartWidget.js/CartWidget";
import Login from "./componets/Login";
function App() {


  return (
    <BrowserRouter>
      
        
        <Cabecera titulo="Om Musica!"/>
          <nav>
            
            <ul className="nav  bg-info text-center">
              <CartWidget />
              <li className='nav-item'><Link className="nav-link text-center" to="/biblioteca">Biblioteca</Link></li>
              <li className='nav-item'><Link className="nav-link text-center" to="/listas" >Listas</Link></li>
              <li className='nav-item'><Link className="nav-link text-center" to="/topranked">Top Ranked</Link></li>
              <li className='nav-item'><Link className="nav-link text-center" to="/login">Login</Link></li>
            </ul>

          </nav>
          <ItemListContainer  greeting='Discos Disponibles!' />
        <Busqueda />
      <main className="container">
        <Routes>
          <Route path="/biblioteca" element={<Biblioteca />}/>
          <Route path="/listas" element={<Listas />}/>
          <Route path="/topranked" element={<TopRanked />} />
          <Route path="/login" element={<Login />} />
        </Routes>  
      </main> 
      
    </BrowserRouter>
  );
}

export default App;