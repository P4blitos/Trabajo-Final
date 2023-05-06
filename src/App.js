import logo from './logo.svg';
import './App.css';
import { Inicio } from './componentes/inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contactanos } from './componentes/contactanos';
import { NavBar } from './componentes/NavBar.js';
import {Libros} from './componentes/libros';


function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contactanos' element={<Contactanos/>}/>
          <Route path='/libros' element={<Libros/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
