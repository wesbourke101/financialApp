import React, {useState,useEffect} from 'react';
import { Router, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import About from './About'
import Form from "./Form"
import Investments from "./Investments";

function App() {  
  // const [defaultLink, setDefaultLink] = useState(null)

  const [savings,setSavings]=useState([])

  useEffect( () => {
    fetch(`http://localhost:3000/user`)
    .then( res => res.json())
    .then( data => setSavings((data)))
    .catch( error => console.log(error.message));
  
  },[])
  
  function postData(formdata){
   fetch(`http://localhost:3000/user`, {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify({
           formdata
       })
   })
   .then( res => res.json())
   .then( data => setSavings([...savings,data]))
   .catch( error => console.log(error.message));

  }


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
          <Route path="financial" element={<Form postData={postData}/>} />
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
