import React, {useState} from 'react';
import { Router, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import About from './About'
import Form from "./Form"
import Investments from "./Investments";

function App() {  
  const [defaultLink, setDefaultLink] = useState(null)

  return (
  <div>
    <nav>
      <Link to="/financial"> Financial-Form </Link>
      <Link to="/investments"> Investments </Link>
      <Link to="/about"> About </Link>
    </nav>
    <Outlet />

    <Routes>
          <Route path='/' element={<Navigate replace to='/financial'/>}/>
          <Route path="financial" element={<Form />} />
          <Route path="investments" element={<Investments />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
          }/>
      </Routes> 
  </div>      
  );
}
export default App;
