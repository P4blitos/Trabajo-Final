import logo from './logo.svg';
import './App.css';
import { Inicio } from './componentes/inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contactanos } from './componentes/contactanos';
import { NavBar } from './componentes/NavBar.js';
import {Libros} from './componentes/libros';
import {Libro01} from './componentes/libro01.js';
import {Manga01} from './componentes/manga01.js';
import {Manga02} from './componentes/manga02';
import {Manga03} from './componentes/manga03';
import {Libro02} from './componentes/libro02.js'
import {Libro03} from './componentes/libro03';


function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contactanos' element={<Contactanos/>}/>
          <Route path='/libros' element={<Libros/>}/>
          <Route path='/libros/psicoanalista' element={<Libro01/>}/>
          <Route path='/libros/origen' element={<Libro02/>}/>
          <Route path='/libros/lovecraft' element={<Libro03/>}/>
          <Route path='/libros/jujutsu' element={<Manga01/>}/>
          <Route path='/libros/berserk' element={<Manga02/>}/>
          <Route path='/libros/onepiece' element={<Manga03/>}/>
        </Routes>
      
      
      </Router>
        
      
    </div>
  );
}

export default App;
