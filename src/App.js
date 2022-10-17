import React from 'react';

import {BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';

// las rutas van de lo mas especifico a lo mas general
function App() {
  return (
    <BrowserRouter>
    <div className="container my-2">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark ">
          Inicio
        </Link>
        <NavLink to="/contacto" className="btn btn-dark" activeclassname="active">
          
          Contacto
        
        </NavLink>
        <NavLink to="/nosotros" className="btn btn-dark" activeclassname="active">
          
          Nosotros
        
        </NavLink>
      
      </div>
     
      <hr />
      
      <Routes>

        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/" element={<Inicio />} />
          
        
      </Routes>
    </div>
    
    
    
    </BrowserRouter>
    

      

            
    
  );
}

export default App;
